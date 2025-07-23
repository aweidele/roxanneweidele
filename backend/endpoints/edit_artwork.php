<?php
require_once 'vendor/autoload.php';
require_once 'jwt-auth.php';
require_once __DIR__ . '/../config.php';
require_once 'functions/input_fields.php';

$id = $route[1];
if(!is_numeric($id)) {
  http_response_code(400);
  echo json_encode(['error' => 'Invalid Artwork ID']);
  exit;
}

$user = authenticate_request();
if (!$user) {
  http_response_code(401);
  echo json_encode(['error' => 'Unauthorized']);
  exit;
}

$inputs = json_decode(file_get_contents("php://input"), true);
$allowed = ["title","width","height","sold","published","slug","media","medium"];
$data = getFieldsFromInput($allowed, $inputs);

if (empty($data['fields'])) {
  http_response_code(400);
  echo json_encode(['error' => 'No valid fields provided']);
  exit;
}

$data['values']['id'] = $id;

$pdo = getPDOConnection();
$sql = "
  UPDATE artwork
  SET " . implode(', ', $data['placeholders']) . "
  WHERE id = :id
";
$stmt = $pdo->prepare($sql);
// echo json_encode(["sql" => $sql, "data" => $data]);

// $sql = "SELECT * FROM artwork WHERE id = :id";

try {
  $stmt->execute($data['values']);

  echo json_encode([
    "success" => true, 
    "data" => $data['values'],
    "row" => $sql
  ]);
} catch (PDOException $e) {
  http_response_code(500);
  echo json_encode(['error' => 'Database error: ' . $e->getMessage(), 'stmt' => $stmt]);
}
