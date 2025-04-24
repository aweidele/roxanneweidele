<?php
ini_set('display_errors', 0);
ini_set('display_startup_errors', 0);
error_reporting(E_ALL);

require 'vendor/autoload.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-Type: application/json; charset=utf-8');

set_error_handler(function($severity, $message, $file, $line) {
  http_response_code(500);
  echo json_encode([
      'success' => false,
      'error' => "$message in $file on line $line"
  ]);
  exit;
});

set_exception_handler(function($e) {
  http_response_code(500);
  echo json_encode([
      'success' => false,
      'error' => $e->getMessage()
  ]);
  exit;
});

$method = $_SERVER["REQUEST_METHOD"];
$endpoint = isset($_REQUEST["endpoint"]) ? $_REQUEST["endpoint"] : null;

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();
$secret = $_ENV['JWT_SECRET'];

switch ($method) {
  case "POST":
    if($endpoint === "login") {
      require_once("endpoints/login.php");
    } elseif($endpoint === "upload") {
      require_once("endpoints/upload.php");
    }
}


// require_once("endpoints/login.php");