<?php
require 'vendor/autoload.php';
use \Firebase\JWT\JWT;

$stored_pin_hash = '$2y$10$M82dBNlCT\/0oP2zea3IeF.VPzzufji5oICTkepLTOmmo8NgJr3Wh2';
$input = json_decode(file_get_contents('php://input'), true);
$pin = $input['pin'] ?? '';

echo json_encode(["here's the pin you entered", $pin, $stored_pin_hash, password_verify($pin, $stored_pin_hash)]);