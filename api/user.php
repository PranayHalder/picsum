<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: access');
header('Access-Control-Allow-Methods: POST');
header('Content-Type: application/json');  
header('Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With');
include "database.php";
require 'vendor/autoload.php';
require 'classes/User.class.php';
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
$object = new User();


$headers = getallheaders();
$authcode = trim($headers['Authorization']);
$token = substr($authcode, 7);
  
$key = 'JTOW$in7738_#@$ff';
$decoded = JWT::decode( $token, new Key($key, 'HS256'));
echo $object->FetchSingle($decoded->data->userid);
?>