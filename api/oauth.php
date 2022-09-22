<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: access');
header('Access-Control-Allow-Methods: POST');
header('Content-Type: application/json');  
header('Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With');
require 'vendor/autoload.php';
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$data = json_decode(file_get_contents('php://input'), true);
 include "database.php";
require 'classes/User.class.php';
$object = new User();
function randomPassword() {
    $alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%^&*_';
    $pass = array();  
    $alphaLength = strlen($alphabet) - 1;  
    for ($i = 0; $i < 12; $i++) {
        $n = rand(0, $alphaLength);
        $pass[] = $alphabet[$n];
    }
    return implode($pass);  
}
$response = $object->OAuth($data['image'],$data["name"],$data["email"],randomPassword());
$decode = json_decode($response);
if ($decode->message === 'success') {
    $key = 'JTOW$in7738_#@$ff';
    $payload = [
    'iss' => 'http://localhost',
    'aud' => 'http://localhost', 
    'exp' => time() + 10000,
    'data' => [
        'userid' => $decode->id
    ]
    ];
    $token = JWT::encode($payload, $key, 'HS256');
    echo json_encode(array('message'=>"success","token"=>$token));
}
else
{
    echo json_encode(array('message'=>"error"));
}

?>