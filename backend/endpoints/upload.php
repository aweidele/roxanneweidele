<?php
require 'vendor/autoload.php';
require 'jwt-auth.php';
require_once 'config.php';

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

try {
  // Compress with TinyPNG
  $source = file_get_contents($file['tmp_name']);
  $buffer = \Tinify\fromBuffer($source)->toBuffer();

  $baseName = pathinfo($file['name'], PATHINFO_FILENAME);
  $ext = pathinfo($file['name'], PATHINFO_EXTENSION);

  $uploadPathRoot = __DIR__ . "/../uploads/";

  if (!file_exists($uploadPathRoot)) {
    mkdir($uploadPathRoot, 0777, true);
  }

  $yearFolder = $uploadPathRoot.date('Y')."/";

  if (!file_exists($yearFolder)) {
    mkdir($yearFolder, 0777, true);
  }

  $uploadPath = $yearFolder.date('m')."/";

  if (!file_exists($uploadPath)) {
    mkdir($uploadPath, 0777, true);
  }

  $originalFilename = "{$baseName}.{$ext}";
  file_put_contents($uploadPath . $originalFilename, $buffer);
  $outputFiles['original'] = $originalFilename;

  foreach ($sizes as $label => $sz) {
    $resized = \Tinify\fromBuffer($buffer)->resize([
      "method" => $sz['method'] ?? 'fit',
      "width" => $sz['width'],
      "height" => $sz['height']
    ]);
  
    $filename = "{$baseName}-{$label}.{$ext}";
    $resized->toFile($uploadPath . $filename);
    $outputFiles[$label] = $filename;
  }

  echo json_encode([
    'success' => true,
    'files' => $outputFiles,
    'file'=>$file
  ]);
  exit;
} catch (\Tinify\Exception $e) {
  http_response_code(500);
  echo json_encode(['error' => ['TinyPNG compression failed' , json_encode($e)]]);
  exit;
}