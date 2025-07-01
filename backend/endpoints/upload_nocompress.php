<?php
require_once 'vendor/autoload.php';
require_once 'jwt-auth.php';
require_once __DIR__ . '/../config.php';
require_once 'functions/process_image.php';

// \Tinify\setKey($_ENV['TINYPNG_KEY']);
try {
  $user = authenticate_request();
  if (!$user) {
    http_response_code(401);
    echo json_encode(['error' => 'Unauthorized']);
    exit;
  }
  $uploadedImage =  processUploadedImage($_FILES['file'], $sizes);

  $pdo = getPDOConnection();
  $parent_id = null;
  foreach($uploadedImage as $key => $img) {
    [
      'filename' => $filename, 
      'upload_path' => $upload_path,
      'upload_path_rel' => $upload_path_rel,
      'url' => $url,
      'size_key' => $size_key,
      'width' => $width,
      'height' => $height,
      'ratio' => $ratio
    ] = $img;

    $sql = "
      INSERT INTO media (filename, upload_path, upload_path_rel, url, size_key, width, height, ratio, media)
      VALUES (:filename, :upload_path, :upload_path_rel, :url, :size_key, :width, :height, :ratio, :media)
    ";

    $stmt = $pdo->prepare($sql);
    $stmt->execute([
      ':filename' => $filename, 
      ':upload_path' => $upload_path,
      ':upload_path_rel' => $upload_path_rel,
      ':url' => $url,
      ':size_key' => $size_key,
      ':width' => $width,
      ':height' => $height,
      ':ratio' => $ratio,
      ':media' => $parent_id
    ]);

    $insertId = $pdo->lastInsertId();
    if($parent_id === null) {
      $parent_id = $insertId;
    }
    $uploadedImage[$key]["media"] = $parent_id;
    $uploadedImage[$key]["id"] = $insertId;
  }

  echo json_encode($uploadedImage);

} catch (Exception $e) {
  http_response_code(500);
  echo json_encode(['error' => $e->getMessage()]);
}