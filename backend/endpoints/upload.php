<?php
require 'vendor/autoload.php';
require 'jwt-auth.php';

\Tinify\setKey($_ENV['TINYPNG_KEY']);

$user = authenticate_request();
if (!$user) {
  http_response_code(401);
  echo json_encode(['error' => 'Unauthorized']);
  exit;
}

if (!isset($_FILES['file'])) {
  http_response_code(400);
  echo json_encode(['error' => 'No file uploaded']);
  exit;
}

$file = $_FILES['file'];

if (!in_array($file['type'], ['image/jpeg', 'image/png'])) {
  http_response_code(400);
  echo json_encode(['error' => 'Unsupported file type']);
  exit;
}

$filename = uniqid() . '-' . basename($file['name']);

try {
  // Compress with TinyPNG
  $source = \Tinify\fromFile($file['tmp_name']);
  $uploadPath = __DIR__ . "/../uploads/";

  if (!file_exists($uploadPath)) {
    mkdir($uploadPath, 0777, true);
}

  $source->toFile($uploadPath.$filename);

  echo json_encode(['success' => true, 'file' => $source, 'uploadPath' => $uploadPath]);
  exit;
} catch (\Tinify\Exception $e) {
  http_response_code(500);
  echo json_encode(['error' => 'TinyPNG compression failed']);
  exit;
}