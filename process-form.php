
<?php
// This is a simple PHP script to handle form submissions

header('Content-Type: application/json');

// Store the response
$response = array('success' => false, 'message' => '');

// Check if the form was submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form data
    $name = isset($_POST['name']) ? filter_var($_POST['name'], FILTER_SANITIZE_STRING) : '';
    $email = isset($_POST['email']) ? filter_var($_POST['email'], FILTER_SANITIZE_EMAIL) : '';
    $phone = isset($_POST['phone']) ? filter_var($_POST['phone'], FILTER_SANITIZE_STRING) : '';
    $message = isset($_POST['message']) ? filter_var($_POST['message'], FILTER_SANITIZE_STRING) : '';
    
    // Validate required fields
    if (empty($name) || empty($email) || empty($message)) {
        $response['message'] = 'Por favor, preencha todos os campos obrigatórios.';
        echo json_encode($response);
        exit;
    }
    
    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response['message'] = 'Por favor, forneça um endereço de e-mail válido.';
        echo json_encode($response);
        exit;
    }
    
    // Email settings
    $to = 'jeferson@infinitydev.com.br'; // Replace with your email
    $subject = 'Nova mensagem do formulário de contato - InfinityDev Mentorias';
    
    // Email content
    $email_content = "Nome: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Telefone: $phone\n\n";
    $email_content .= "Mensagem:\n$message\n";
    
    // Email headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    // Try to send the email
    if (mail($to, $subject, $email_content, $headers)) {
        // Save to a log file (optional)
        $log_file = 'contact_form_log.txt';
        $log_entry = date('Y-m-d H:i:s') . " - Nome: $name, Email: $email, Telefone: $phone\n";
        file_put_contents($log_file, $log_entry, FILE_APPEND);
        
        $response['success'] = true;
        $response['message'] = 'Mensagem enviada com sucesso!';
    } else {
        $response['message'] = 'Erro ao enviar a mensagem. Por favor, tente novamente mais tarde.';
    }
} else {
    $response['message'] = 'Método de requisição inválido.';
}

// Return the response
echo json_encode($response);
?>
