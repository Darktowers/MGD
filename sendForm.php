<?php

//require("PHPMailerAutoload.php");
require("PHPMailer/class.phpmailer.php");
if ($_POST) {
    //check if its an ajax request, exit if not
    if (!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {

        //exit script outputting json data
        $output = json_encode(
                array(
                    'type' => 'error',
                    'text' => 'Request must come from Ajax'
        ));

        die($output);
    }

    //check $_POST vars are set, exit if any missing
    if (!isset($_POST["cedula"]) || !isset($_POST["nombre"]) || !isset($_POST["apellido1"])|| !isset($_POST["apellido2"]) || !isset($_POST["correo"]) || !isset($_POST["telefono"]) || !isset($_POST["tipo"])) {
        $output = json_encode(array('type' => 'error', 'text' => 'Input fields are empty!'));
        die($output);
    }

    //Sanitize input data using PHP filter_var().

    $user_cedula = filter_var($_POST["cedula"], FILTER_SANITIZE_STRING);    
    $user_nombre = filter_var($_POST["nombre"], FILTER_SANITIZE_STRING);    
    $user_apellido1 = filter_var($_POST["apellido1"], FILTER_SANITIZE_STRING); 
    $user_apellido2 = filter_var($_POST["apellido2"], FILTER_SANITIZE_STRING); 
    $user_correo = filter_var($_POST["correo"], FILTER_SANITIZE_EMAIL);    
    $user_telefono = filter_var($_POST["telefono"], FILTER_SANITIZE_STRING); 
    $user_tipo = filter_var($_POST["tipo"], FILTER_SANITIZE_STRING);           
               

    $mensaje = 'Nombres: ' . $user_nombre . '<br />Apellidos' .$user_apellido1.''.$user_apellido2.'<br />Email: ' . $user_correo.'<br />Cedula: ' . $user_cedula.'<br />Telefono: ' . $user_telefono.'<br />Tipo: ' . $user_tipo;



    //MACHETE
    if($user_tipo == "emprendedor"){
        $subject = "Nuevo emprendedor registrado | Ignition Boot Camp ";
    }else if($user_tipo == "estudiante"){
        $subject = "Nuevo estudiante registrado | Ignition Boot Camp ";
    }
    
    $mail = new PHPMailer();
    $mail->IsSMTP();
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = "ssl";
    $mail->Host = "smtp.gmail.com";
    $mail->Port = 465;
    $mail->Username = "pruebasimaginamos@gmail.com";
    $mail->Password = "123Usuario2011";
    //Con estas pocas líneas iniciamos una conexión con el SMTP. Lo que ahora deberíamos hacer, es configurar el mensaje a enviar, el //From, etc.
    $mail->From = "info@imaginamos.com"; // Desde donde enviamos (Para mostrar)
    $mail->FromName = "Imaginamos Boot Camp";
    $mail->setLanguage('es');
    //Estas dos líneas, cumplirían la función de encabezado (En mail() usado de esta forma: From: Nombre <correo@dominio.com>”) de //correo.
   $mail->AddAddress('michael.quevedo@imaginamos.co');
    $mail->AddAddress('ignition@imaginamos.com'); // Esta es la dirección a donde enviamos
    //$mail->addBCC('director@ingpharmaceutical.com');
    //$mail->addBCC('assistant@ingpharmaceutical.com');
    $mail->IsHTML(true); // El correo se envía como HTML
    $mail->Subject = $subject; // Este es el titulo del email.
    $body .= '<p>Nombres: '.$user_nombre.'</p>'; 
    $body .= '<p>Apellidos: '.$user_apellido1.' '.$user_apellido2.'</p>';
    $body .= '<p>Email: '.$user_correo.'</p>';
    $body .= '<p>Cedula: '.$user_correo.'</p>';
    $body .= '<p>Telefono: '.$user_telefono.'</p>'; 
    $body .= '<p>Tipo: '.$user_tipo.'</p>';
    $mail->Body = $body; // Mensaje a enviar
    $exito = $mail->Send(); // Envía el correo.

     if (!$exito) {
        $output = json_encode(array('type' => 'error', 'text' => ''));
        die($output); 
    } else {
        $output = json_encode(array('type' => 'message', 'text' => 'Hi ' . $user_nombre . ' Thank you for your email'));
        die($output);
    }
}
?>