<?php
require_once 'vendor/autoload.php';
require_once 'jwt-auth.php';
require_once __DIR__ . '/../config.php';
require_once 'functions/process_image.php';

// \Tinify\setKey($_ENV['TINYPNG_KEY']);
$user = authenticate_request();
if (!$user) {
  http_response_code(401);
  echo json_encode(['error' => 'Unauthorized']);
  exit;
}
$uploadedImage =  processUploadedImage($_FILES['file'], $sizes);
[
  'filename' => $filename, 
  'img_height' => $img_height,
  'img_width' => $img_width,
  'img_url' => $img_url,
  'sizes' => $sizes,
  'urls' => $urls,
] = $uploadedImage;

$img_sizes = json_encode($sizes);
$img_urls = json_encode($urls);

$pdo = getPDOConnection();
$sql = "
  INSERT INTO artwork (image, img_width, img_height, img_url, img_sizes, img_urls, sold, published)
  VALUES (:image, :img_width, :img_height, :img_url, :img_sizes, :img_urls, 0, 0)
";

$stmt = $pdo->prepare($sql);
$stmt->execute([
  ':image'     => $filename,
  ':img_width' => $img_width,
  ':img_height'=> $img_height,
  ':img_url'   => $img_url,
  ':img_sizes' => $img_sizes,
  ':img_urls'  => $img_urls,
]);
$insertId = $pdo->lastInsertId();
$uploadedImage["insertID"] = $insertId;

echo json_encode($uploadedImage);