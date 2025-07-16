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

$input = file_get_contents('php://input');
$data = json_decode($input, true);
$newOrder = $data['new_order'] ?? [];

$pdo = getPDOConnection();
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$caseSql = '';
$idList = [];

foreach ($newOrder as $item) {
  $id = (int) $item['id'];
  $artOrder = (int) $item['art_order'];
  $caseSql .= "WHEN {$id} THEN {$artOrder} ";
  $idList[] = $id;
}

$idListSql = implode(',', $idList);

$sql = "
  UPDATE artwork
  SET art_order = CASE id
    {$caseSql}
  END
  WHERE id IN ({$idListSql})";

$stmt = $pdo->prepare($sql);
$stmt->execute();

echo json_encode(['status' => 'success', 'updated' => count($newOrder), 'sql' => $sql]);