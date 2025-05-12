<?php
require_once 'vendor/autoload.php';
require_once 'jwt-auth.php';
require_once __DIR__ . '/../config.php';

$user = authenticate_request();
if (!$user) {
  http_response_code(401);
  echo json_encode(['error' => 'Unauthorized']);
  exit;
}

$data = $_POST ?: json_decode(file_get_contents('php://input'), true);
if (!$data || !is_array($data)) {
  http_response_code(400);
  echo json_encode(['error' => 'Invalid input']);
  exit;
}

$allowed = ['title', 'width', 'height', 'price', 'sold', 'published', 'slug', 'media', 'medium'];
$fields = [];
$placeholders = [];
$values = [];

foreach ($data as $key => $value) {
  if (in_array($key, $allowed)) {
    $fields[] = $key;
    $placeholders[] = ':' . $key;
    $values[$key] = $value;
  }
}

if (empty($fields)) {
  http_response_code(400);
  echo json_encode(['error' => 'No valid fields provided']);
  exit;
}

$pdo = getPDOConnection();
$sql = "INSERT INTO artwork (" . implode(',', $fields) . ") VALUES (" . implode(',', $placeholders) . ")";
$stmt = $pdo->prepare($sql);

try {
  $stmt->execute($values);
  $result = array_fill_keys($allowed, null);
  foreach ($values as $key => $value) {
    if (array_key_exists($key, $result)) {
      $result[$key] = $value;
    }
  }
  $result['id'] = (int)$pdo->lastInsertId();
  echo json_encode(["success" => true, "data" => $result]);
} catch (PDOException $e) {
  http_response_code(500);
  echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
}