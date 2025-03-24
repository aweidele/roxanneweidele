<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json; charset=utf-8');

$artwork = [
  "artwork" => [
    [
      "title" => "Praesent ac massa at ligula laoreet iaculis.",
      "id" => "artwork-1"
    ],

    [
      "title" => "Aliquam lobortis.",
      "id" => "artwork-2"
    ],

    [
      "title" => "Nullam dictum felis eu pede mollis pretium.",
      "id" => "artwork-3"
    ],

    [
      "title" => "Fusce risus nisl, viverra et, tempor et, pretium in, sapien.",
      "id" => "artwork-4"
    ],

    [
      "title" => "Pellentesque posuere.",
      "id" => "artwork-5"
    ]
  ]
];

echo json_encode($artwork);