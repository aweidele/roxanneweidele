<?php
function slugify($title) {
  $slug = strtolower(trim($title));
  $slug = preg_replace('/[^a-z0-9\s-]/', '', $slug);
  $slug = preg_replace('/\s+/', '-', $slug);
  $slug = preg_replace('/-+/', '-', $slug);
  return $slug;
}