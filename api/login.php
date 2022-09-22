<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: access');
header('Access-Control-Allow-Methods: POST');
header('Content-Type: application/json');  
header('Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With'); 
include "database.php";
require 'classes/User.class.php';
require 'vendor/autoload.php';
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
$data = json_decode(file_get_contents('php://input'), true);

$object = new User();
$response = $object->Login($data["email"],$data["password"]);
if ($response['message'] === 'success') {
	$key = 'JTOW$in7738_#@$ff';
    $payload = [
    'iss' => 'http://localhost',
    'aud' => 'http://localhost', 
    'exp' => time() + 10000,
    'data' => [
    	'userid' => $response['id']
    ]
    ];
	$token = JWT::encode($payload, $key, 'HS256');
	echo json_encode(array('message'=>"success","token"=>$token));
}
else
{
	echo json_encode($response);
}

?>