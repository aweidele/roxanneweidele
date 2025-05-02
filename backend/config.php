<?php
require_once __DIR__ . '/vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

function getPDOConnection(): PDO {
  $db_host = $_ENV["DB_HOST"];
  $db_database = $_ENV["DB_DATABASE"];
  $db_user = $_ENV["DB_USER"];
  $db_password = $_ENV["DB_PASSWORD"];

  $charset = 'utf8mb4';
  $dsn = "mysql:host=$db_host;dbname=$db_database;charset=$charset";

  $options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
  ];

  try {
    return new PDO($dsn, $db_user, $db_password, $options);
  } catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
      'error' => 'Database connection failed',
      'details' => $e->getMessage()
    ]);
    exit;
  }
}

$sizes = [
  'lg' => ['width' => 1600, 'height' => 960],
  'thumb' => ['width' => 533, 'height' => 300, "method" => "cover"],
];