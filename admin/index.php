<?php
require_once("vendor/autoload.php");
\Tinify\setKey("S6KjWMdJMCV85vMtvRYGzqVfT6jdL48l");
if (isset($_POST['submit'])) {

    $allowed_mime_types = array('image/gif', 'image/jpg', 'image/jpeg', 'image/png');

    if (!in_array($_FILES['myfile']['type'], $allowed_mime_types)) {
        echo 'Invalid file format.';
        exit();
    }

    if (!file_exists(getcwd().'/uploads')) {
        mkdir(getcwd().'/uploads', 0777);
    }

    $src_file_name = $_FILES['myfile']['name'];
    move_uploaded_file($_FILES['myfile']['tmp_name'], getcwd().'/uploads/'.$src_file_name);

    //optimize image using TinyPNG
    $source = \Tinify\fromFile(getcwd().'/uploads/'.$src_file_name);
    $source->toFile(getcwd().'/uploads/'.$src_file_name);

    echo "File uploaded successfully.";
}
 ?>
<!DOCTYPE HTML>
<html>
<head>
  <title>RW Admin</title>
</head>
<body>
  <form method="post" enctype="multipart/form-data">
      <p><input type="file" name="myfile" accept="image/*" required /></p>
      <button type="submit" name="submit">Submit</button>
  </form>
</body>
</html>
