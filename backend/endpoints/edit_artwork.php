<?php
require_once 'vendor/autoload.php';
require_once 'jwt-auth.php';
require_once __DIR__ . '/../config.php';

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
extract($inputs);

$pdo = getPDOConnection();
$sql = "
  UPDATE artwork
  SET title = ?, width = ?, height = ?, price = ?, sold = ?, published = ? 
  WHERE id = ?
";

$stmt = $pdo->prepare($sql);
$stmt->execute([$title, $width, $height, $price, $sold, $published, $id]);

/*
$stmt = $pdo->prepare("UPDATE artworks SET title = ?, width = ?, height = ?, description = ?, price = ?, sold = ? WHERE id = ?");
$stmt->execute([$title, $width, $height, $description, $price, $sold, $id]);

[
"description" => "dsf;lksdf;lks",
"height" => "345",
"price" => "324",
"sold" => 0,
"title" => "Title of Work",
"width" => "123"
]
*/

echo json_encode([
  "endpoint" => $route, 
  "inputs" => $inputs,
  "values" => [$title, $width, $height, $description, $price, $sold, $id]
]);