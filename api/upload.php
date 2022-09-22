<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: access');
header("Access-Control-Allow-Methods: PUT, GET, POST");
header('Content-Type: application/json');  
header('Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With');
 include "database.php";
require 'classes/User.class.php';
$object = new User();
$response =  $object->Uplod($_FILES,$_POST);
echo $response;

?>