<?php
require 'vendor/autoload.php';
require 'jwt-auth.php';

$user = authenticate_request();
if (!$user) {
  http_response_code(401);
  echo json_encode(['error' => 'Unauthorized']);
  exit;
}

echo json_encode([
  'success' => true,
  'token' => "Hello there!"
]);