<?php
require_once __DIR__ . '/../config.php';
$pdo = getPDOConnection();
$sql = "SELECT * FROM artwork WHERE published = 1";
$stmt = $pdo->query($sql);
$artwork = $stmt->fetchAll(PDO::FETCH_ASSOC);

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

echo json_encode([
  'artwork' => $artwork,
  'media' => $media
]);