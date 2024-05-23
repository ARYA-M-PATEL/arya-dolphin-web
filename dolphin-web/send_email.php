<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = 'admin@example.com'; // Replace with admin email
    $subject = 'New Contact Form Submission';
    $headers = "From: $email" . "\r\n" .
        "Reply-To: $email" . "\r\n" .
        "X-Mailer: PHP/" . phpversion();

    $emailContent = "Name: $name\n";
    $emailContent .= "Email: $email\n";
    $emailContent .= "Message:\n$message\n";

    mail($to, $subject, $emailContent, $headers);

}

// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//     $name = htmlspecialchars($_POST['name']);
//     $email = htmlspecialchars($_POST['email']);
//     $message = htmlspecialchars($_POST['message']);

//     $to = 'admin@example.com'; // Replace with admin email
//     $subject = 'New Contact Form Submission';
//     $headers = "From: $email" . "\r\n" .
//         "Reply-To: $email" . "\r\n" .
//         "X-Mailer: PHP/" . phpversion();

//     $emailContent = "Name: $name\n";
//     $emailContent .= "Email: $email\n";
//     $emailContent .= "Message:\n$message\n";

//     if (mail($to, $subject, $emailContent, $headers)) {
//         echo "Thank you for your message. It has been sent.";
//     } else {
//         echo "Sorry, there was an error sending your message. Please try again later.";
//     }
// } else {
//     echo "Invalid request method.";
// }
?>