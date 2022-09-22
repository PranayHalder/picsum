<?php 
ini_set("memory_limit","256M");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: access');
header('Access-Control-Allow-Methods: POST');
header('Content-Type: application/json');  
header('Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With');
$data = json_decode(file_get_contents('php://input'), true);
include "database.php";
require 'classes/Image.class.php';
require 'classes/User.class.php';
$Img = new Image();
$User = new User();
$picture = $data['image'];
$imageid = $data['imageid'];
$userid = $data['userid'];
$response = $User->checkSubscription($userid); 
if ($response['message'] == 'success') {
	 if ($response['plan'] == 'basic') {
 
         $imagePath = "images/".$picture;
         $imageTempPath ="temp/".$picture;
         $image = new Imagick();
         $image->readImage($imagePath);
         $watermark = new Imagick();
         $watermark->readImage("watermark.png");
         $img_Width = $image->getImageWidth();
         $img_Height = $image->getImageHeight();
         $watermark_Width = $watermark->getImageWidth();
         $watermark_Height = $watermark->getImageHeight();
         $watermark_Width = $watermark->getImageWidth();
         $watermark_Height = $watermark->getImageHeight();
         $x = ($img_Width - $watermark_Width) - 50;
         $y = ($img_Height - $watermark_Height)  - 50;
         $image->compositeImage($watermark, Imagick::COMPOSITE_OVER, $x, $y);
         $image->writeImage($imageTempPath); 


        $Img->downloadImage($userid,$imageid);
        $file = 'http://localhost:8888/api/temp/'.$picture;
        echo json_encode(array('message' => "success",'file' => $file));
	 	 
	 }
	 else
	 {
	 	 $Img->downloadImage($userid,$imageid);
	 	 $file = 'http://localhost:8888/api/images/'.$picture;
	 	 echo json_encode(array('message' => 'success','file' => $file));
	 }
}
else
{
 echo json_encode(array('message' => 'You have reached download limits!'));
}


?>
