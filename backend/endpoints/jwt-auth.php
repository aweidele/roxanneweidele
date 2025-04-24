<?php
require 'vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

function authenticate_request() {
  $headers = getallheaders();
  if (!isset($headers['Authorization'])) {
      return false;
  }

  $authHeader = $headers['Authorization'];
  if (!preg_match('/Bearer\s(\S+)/', $authHeader, $matches)) {
      return false;
  }

  $jwt = $matches[1];
  $secretKey = $_ENV['JWT_SECRET'] ?? 'your-fallback-secret';

  try {
    $decoded = JWT::decode($jwt, new Key($secretKey, 'HS256'));
    return (array) $decoded;
  } catch (Exception $e) {
      return false;
  }
}