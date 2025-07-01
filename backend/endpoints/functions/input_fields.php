<?php

function getFieldsFromInput($allowed, $inputs) {
  $fields = [];
  $placeholders = [];
  $values = [];

  foreach ($inputs as $key => $value) {
    if (in_array($key, $allowed)) {
      $fields[] = $key;
      $placeholders[] = $key . ' = :' . $key;
      $values[$key] = $value;
    }
  }

  return [
    "fields" => $fields,
    "placeholders" => $placeholders,
    "values" => $values
  ];
}