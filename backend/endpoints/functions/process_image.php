<?php
function processUploadedImage(array $file, array $sizes): array {
  if ($file['error'] !== UPLOAD_ERR_OK) {
    return json_encode(['error' => 'Upload failed']);
  }

  // Create image from file
  $imageData = file_get_contents($file['tmp_name']);
  $srcImage = imagecreatefromstring($imageData);
  if (!$srcImage) {
    return json_encode(['error' => 'Invalid image']);
  }

  $srcWidth = imagesx($srcImage);
  $srcHeight = imagesy($srcImage);
  $srcRatio = $srcWidth / $srcHeight;

  $originalName = pathinfo($file['name'], PATHINFO_FILENAME);
  $ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
  $randomTag = substr(md5(uniqid()), 0, 6);

  $year = date('Y');
  $month = date('m');

  // Handle paths relative to this script in /endpoints/
  $uploadRelPath = "/uploads/$year/$month/";
  $uploadAbsPath = realpath(__DIR__ . '/../../') . $uploadRelPath;

  if (!is_dir($uploadAbsPath)) {
    mkdir($uploadAbsPath, 0777, true);
  }

  // Base URL construction
  $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https://' : 'http://';
  $siteRoot = isset($_ENV["API_ROOT"]) ? $_ENV["API_ROOT"] : "";
  $host = $_SERVER['HTTP_HOST'];
  $baseUrl = $protocol . $host . $siteRoot . $uploadRelPath;

  $baseFilename = "{$originalName}_{$randomTag}";

  $response = [
    [
      'filename' => "$baseFilename.$ext",
      'upload_path' => $uploadAbsPath,
      'upload_path_rel' => $uploadRelPath,
      'url' => $baseUrl . "$baseFilename.$ext",
      'size_key' => "original",
      'width' => $srcWidth,
      'height' => $srcHeight,
      'ratio' => $srcRatio
    ]
  ];

  // Save original
  $originalPath = $uploadAbsPath . "$baseFilename.$ext";
  move_uploaded_file($file['tmp_name'], $originalPath);

  foreach ($sizes as $key => $size) {
    $targetWidth = $size['width'];
    $targetHeight = $size['height'];
    $method = $size['method'] ?? 'fit';

    $targetRatio = $targetWidth / $targetHeight;

    if ($method === 'crop') {
      // object-fit: cover
      if ($srcRatio > $targetRatio) {
        $newHeight = $targetHeight;
        $newWidth = (int)($targetHeight * $srcRatio);
      } else {
        $newWidth = $targetWidth;
        $newHeight = (int)($targetWidth / $srcRatio);
      }

      $tempImage = imagecreatetruecolor($newWidth, $newHeight);
      imagecopyresampled($tempImage, $srcImage, 0, 0, 0, 0, $newWidth, $newHeight, $srcWidth, $srcHeight);

      $cropX = (int)(($newWidth - $targetWidth) / 2);
      $cropY = (int)(($newHeight - $targetHeight) / 2);

      $resized = imagecreatetruecolor($targetWidth, $targetHeight);
      imagecopy($resized, $tempImage, 0, 0, $cropX, $cropY, $targetWidth, $targetHeight);
      imagedestroy($tempImage);
    } else {
      // object-fit: contain
      $scale = min($targetWidth / $srcWidth, $targetHeight / $srcHeight, 1);
      $newWidth = (int)($srcWidth * $scale);
      $newHeight = (int)($srcHeight * $scale);

      $resized = imagecreatetruecolor($newWidth, $newHeight);
      imagecopyresampled($resized, $srcImage, 0, 0, 0, 0, $newWidth, $newHeight, $srcWidth, $srcHeight);
    }

    $filenameBase = "{$baseFilename}_$key.$ext";
    $urlBase = $baseUrl . $filenameBase;
    $width = imagesx($resized);
    $height = imagesy($resized);

    $response[] = [
      'filename' => "$filenameBase",
      'upload_path' => $uploadAbsPath,
      'upload_path_rel' => $uploadRelPath,
      'url' => $urlBase,
      'size_key' => $key,
      'width' => $width,
      'height' => $height,
      'ratio' => $width / $height
    ];

    $destinationPath = $uploadAbsPath.$filenameBase;
    $extension = strtolower(pathinfo($destinationPath, PATHINFO_EXTENSION));

    switch ($extension) {
      case 'jpg':
      case 'jpeg':
        imagejpeg($resized, $destinationPath, 85); // 85 = quality
        break;

      case 'png':
        imagepng($resized, $destinationPath, 6); // Compression level: 0 (no compression) to 9
        break;

      case 'webp':
        imagewebp($resized, $destinationPath, 85); // 85 = quality
        break;

      default:
        throw new Exception("Unsupported image format: $extension");
    }
    imagedestroy($resized);
  }

  imagedestroy($srcImage);
  return $response;
}