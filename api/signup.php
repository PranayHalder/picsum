<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: access');
header('Access-Control-Allow-Methods: POST');
header('Content-Type: application/json');  
header('Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With');
$data = json_decode(file_get_contents('php://input'), true);
include "database.php";
require 'classes/User.class.php';

$object = new User();
echo $object->SignUp($_FILES,$_POST["name"],$_POST["email"],$_POST["password"]);
 
 
?>