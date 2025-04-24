<?php
require 'vendor/autoload.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-Type: application/json; charset=utf-8');

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