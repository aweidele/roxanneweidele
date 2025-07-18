<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['success' => false, 'error' => 'Method Not Allowed']);
  exit;
}

// Validate input
$data = json_decode(file_get_contents('php://input'), true);

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$subject = trim($data['subject'] ?? '');
$message = trim($data['message'] ?? '');

// Simple validation
if (empty($name) || empty($email) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  $error = "Invalid input\n";
  if(empty($name)) { $error .= "Empty name\n"; }
  if(empty($email)) { $error .= "Empty email\n"; }
  if(!filter_var($email, FILTER_VALIDATE_EMAIL)) { $error .= "Invalid email\n"; }
  if(empty($message)) { $error .= "Empty message\n"; }
  echo json_encode(['success' => false, 'error' => $error]);
  exit;
}

try {
  $mail = new PHPMailer(true);
  $mail->isSMTP();
  $mail->Host = $_ENV['SMTP_HOST'];  // Set in your .env file
  $mail->SMTPAuth = true;
  $mail->Username = $_ENV['SMTP_USER'];
  $mail->Password = $_ENV['SMTP_PASS'];
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
  $mail->Port = 587;

  $mail->setFrom('noreply@roxanneweidele.com', "$name via roxanneweidele.com");
  $mail->addAddress('aweidele@gmail.com');  // Change this
  $mail->addReplyTo($email, $name);

  $mail->isHTML(false);
  $mail->Subject = $subject ?: "New contact form message";
  $mail->Body = "Name: $name\nEmail: $email\nSubject: $subject\nMessage:\n$message";

  $mail->send();

  echo json_encode(['success' => true]);
} catch (Exception $e) {
  http_response_code(500);
  echo json_encode(['success' => false, 'error' => 'Mailer Error: ' . $mail->ErrorInfo]);
}