<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json; charset=utf-8');

$method = $_SERVER["REQUEST_METHOD"];
$endpoint = $_REQUEST["endpoint"];

require_once("endpoints/login.php");