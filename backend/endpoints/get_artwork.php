<?php
require_once __DIR__ . '/../config.php';
$pdo = getPDOConnection();

$whereParts = [];
$params = [];

foreach ($_GET as $column => $value) {
    $whereParts[] = "`$column` = ?";
    $params[] = $value;
}

$whereClause = sizeof($whereParts) ? " WHERE " . implode(" AND ", $whereParts) : "";

$sql = "SELECT * FROM artwork$whereClause";
$stmt = $pdo->prepare($sql);
$stmt->execute($params);
$artwork = $stmt->fetchAll(PDO::FETCH_ASSOC);

$media = [];
if(sizeof($artwork)) {

  $parentMediaIds = array_column($artwork, 'media');
  $in = str_repeat('?,', count($parentMediaIds) - 1) . '?';

  $sql = "
    SELECT * FROM media
    WHERE id IN ($in)
      OR media IN ($in)
  ";

  $stmt = $pdo->prepare($sql);
  $stmt->execute([...$parentMediaIds, ...$parentMediaIds]);
  $media = $stmt->fetchAll(PDO::FETCH_ASSOC);
}

echo json_encode([
  'artwork' => $artwork,
  'media' => $media,
  'g' => $whereClause, 
  'sql' => $sql
]);