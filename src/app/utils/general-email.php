<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
$data = json_decode(file_get_contents("php://input"));
if (isset($data)) {

    $Email = $data->Email;
    $From = $data->From;
    $Subject = $data->Subject;
    $Message = $data->Message;
    $Link = $data->Link;
    $LinkLabel = $data->LinkLabel;
    $UserFullName = $data->UserFullName;
    if (!isset($LinkLabel)) {
        $LinkLabel = 'Go to my account';
    }

    if (isset($Link)) {
        $msg = '  
        <body style="font-family: Calibri;">
        <div class="main">
            <div class="box" style="padding: 0;background: #F5F6FA;">
                <div class="header" style="background:#000000;padding: 2%;">
                    <h1 style="text-align: center;color: #F5F6FA;font-size: 1.5rem; font-weight: 900;">
                        ' . $Subject . '
                    </h1>
                </div>
    
                <div class="body" style="padding: 5%;">
                  
                    <p>
                    $Message 
                    </p>
                             
                    <br />
                    <a href="' . $Link . '" 
                        style="background:#000000;color: #ffffff;text-decoration: none;padding: .5rem 1rem;font-weight: bold;">'.$LinkLabel.'</a>         
                    <br />
                    <br />
                    <br />              
                    <p>
                </div>
            </div>
        </div>
    </body>
    ';
    } else {
        $msg = '  
        <body style="font-family: Calibri;">
        <div class="main">
            <div class="box" style="padding: 0;background: #F5F6FA;">
                <div class="header" style="background:#000000;padding: 2%;">
                    <h1 style="text-align: center;color: #F5F6FA;font-size: 1.5rem; font-weight: 900;">
                        ' . $Subject . '
                    </h1>
                </div>
    
                <div class="body" style="padding: 5%;">
                    <p>
                       ' . $Message . '
                    </p>                          
                            
                    <p>
                </div>
            </div>
        </div>
    </body>
    ';
    }


    $to = $Email;
    $subject =  $Subject;
    $from = $From;

    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

    $headers .= 'From: ' . $from . "\r\n" .
        'Reply-To: ' . $from . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    if (isset($Email)) {
        if (mail($to, $subject, $msg, $headers)) {
            echo 1;
        } else {
            echo 0;
        }
    } else {
        echo 3;
    }
}
