<?php 


class Image {

     private $conn;

        function __construct()
        {
        $this->conn = new Database();
        $this->conn = $this->conn->getmyDB();
        }



public function getImage() {
    $query = "SELECT image.id,image.name,image_info.userid,userdetails.image,userdetails.name as username FROM image INNER JOIN image_info
     ON image.info = image_info.id INNER JOIN userdetails ON image_info.userid = userdetails.id";
    $statement = $this->conn->prepare($query); 
    $result = $statement->execute();
    $data =  $statement->fetchAll();
    if($result)
      {
        return  json_encode($data);
      }
    else
    {
         return  json_encode(array('message' => "Something went wrong!"));
    }
}


public function downloadImage($userid,$imageid){
        $query = "INSERT INTO image_download(imageid,userid) VALUES(:imageid,:userid)";
        $statement = $this->conn->prepare($query);
        $statement->bindValue(":imageid",$imageid);
        $statement->bindValue(":userid",$userid);
        $execute = $statement->execute(); 
}




}
?>