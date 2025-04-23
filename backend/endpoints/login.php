<?php
use \Firebase\JWT\JWT;

$stored_pin_hash = '$2y$10$7kRPNv2OD.gHESvJpAadpeU7yFtrWkcXMhqAD2/RbWZCsQIITRasO';
$input = json_decode(file_get_contents('php://input'), true);
$pin = $input['pin'] ?? '';

if(!password_verify($pin, $stored_pin_hash)) {
  echo json_encode([
    "success" => false,
    "message" => "Invalid Passcode"
  ]);
  exit;
}

$payload = [
  'iat' => time(),
  'exp' => time() + 3600, // Token expires in 1 hour
  'user' => 'admin'
];

$jwt = JWT::encode($payload, $secret, 'HS256');

echo json_encode([
  'success' => true,
  'token' => $jwt
]);