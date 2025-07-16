<?php
ini_set('display_errors', 0);
ini_set('display_startup_errors', 0);
error_reporting(E_ALL);

require_once 'vendor/autoload.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, UPDATE");
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
$endpoint = isset($_REQUEST["endpoint"]) ? $_REQUEST["endpoint"] : "";
$route = explode("/", trim($endpoint, '/'));


$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();
$secret = $_ENV['JWT_SECRET'];

switch ($method) {
  case "POST":
    if($endpoint === "login") {
      require_once("endpoints/login.php");
    } elseif($endpoint === "upload") {
      require_once("endpoints/upload_nocompress.php");
    } elseif($endpoint === "artwork/add") {
      require_once("endpoints/add_artwork.php");
    }
    break;
  case "PUT":
    if ($route[0] === "artwork" && isset($route[2]) && $route[2] === "edit") {
      require_once("endpoints/edit_artwork.php");
    }
    elseif ($route[0] === "artwork" && isset($route[1]) && $route[1] === "reorder") {
      require_once("endpoints/reorder_artwork.php");
    }
    else {
      echo json_encode(["message" => "Invalid endpoint", "route" => $route]);
    }
    break;
  default:
    require_once("endpoints/get_artwork.php");
    break;
}
