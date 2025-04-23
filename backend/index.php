<?php
require 'vendor/autoload.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header('Content-Type: application/json; charset=utf-8');

$method = $_SERVER["REQUEST_METHOD"];
$endpoint = $_REQUEST["endpoint"];

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();
$secret = $_ENV['JWT_SECRET'];

require_once("endpoints/login.php");