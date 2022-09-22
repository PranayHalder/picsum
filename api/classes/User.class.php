<?php

date_default_timezone_set("Asia/Kolkata");
class User {

     private $conn;

        function __construct()
        {
        $this->conn = new Database();
        $this->conn = $this->conn->getmyDB();
        }

  
public function SignUp($FILES,$name,$email,$password)
{ 
   
   if (isset($name) && isset($email) && isset($password)) { 
   if (filter_var($email,FILTER_VALIDATE_EMAIL))
   {
    $email =  filter_var($email,FILTER_SANITIZE_EMAIL);
    $name = filter_var($name, FILTER_SANITIZE_STRING); 
    $password = password_hash($password, PASSWORD_DEFAULT);
 
    $query = "SELECT * FROM userdetails WHERE email = :email";
    $statement = $this->conn->prepare($query);
    $statement->bindValue(":email",$email);
    $statement->execute();
    $rows = $statement->rowCount(); 
    if ($rows == 0) { 
        if (is_array($FILES)) {
           $uploaddir =  'avatar/';
           $extension = pathinfo($FILES['image']['name'], PATHINFO_EXTENSION);
           $imgname = md5(rand()). '.' . $extension;
           $uploadfile = $uploaddir . $imgname; 
           move_uploaded_file($FILES['image']['tmp_name'], $uploadfile); 
           $path = 'http://localhost:8888/api/avatar/'.$imgname;
        }
        else
        {
          $path = $FILES;
        }
        

    	$query = "INSERT INTO userdetails(image,name,email,password) VALUES(:image,:name,:email,:password)";
      	$stmt = $this->conn->prepare($query);
        $stmt->bindValue(":image",$path);
        $stmt->bindValue(":name",$name); 
    	$stmt->bindValue(":email",$email); 
    	$stmt->bindValue(":password",$password);
    	$result = $stmt->execute();
        $id = $this->conn->lastInsertId();
    	if($result)
    	{

            $sql = "INSERT INTO subscription(userid,plan,subscribed,expired) VALUES(:userid,:plan,:subscribed,:expired)";
            $stmts = $this->conn->prepare($sql);
            $stmts->bindValue(":userid",$id);
            $stmts->bindValue(":plan","basic"); 
            $stmts->bindValue(":subscribed",date("Y-m-d")); 
            $stmts->bindValue(":expired",date('Y-m-d',strtotime('+1 year')));
            $stmts->execute();



    	 	return  json_encode(array('message'=>"success", 'id'=>$id));
    	}
    	else
        {
   	        return  json_encode(array('message' => "Something went wrong!"));
        }
    }
    else
    {
    	return  json_encode(array('message'=>"Emial already exists!"));
    }

   } 
   else
   {
   	return  json_encode(array('message' => "Invalid Credentials"));
   }
 
    }
     else
    {
	  return  json_encode(array('message' => "Invalid Credentials"));
    }

}
 

public function OAuth($image,$name,$email,$password)
{
    
    $query = "SELECT * FROM userdetails WHERE email = :email";
    $statement = $this->conn->prepare($query);
    $statement->bindValue(":email",$email);
    $statement->execute();
    $rows = $statement->rowCount(); 
    if ($rows == 0) { 
      return $this->SignUp($image,$name,$email,$password);
    }
    else
    {
       $result = $statement->fetchAll();
       foreach($result as $data) { 
              return  json_encode(array('message'=>"success","id"=>$data["id"])); 
       }
    }

}

public function Login($email, $password) 
{ 
   
    if (isset($email) && isset($password)) 
    { 
    if (filter_var($email,FILTER_VALIDATE_EMAIL))
    { 

     $email =  filter_var($email,FILTER_SANITIZE_EMAIL);   
     $query = "SELECT * FROM userdetails WHERE email = :email";
     $statement = $this->conn->prepare($query);
     $statement->bindValue(":email",$email);
     $statement->execute();
     $rows = $statement->rowCount(); 
     if ($rows > 0) {
     $result = $statement->fetchAll();
     foreach($result as $data) {
         if (password_verify($password,$data["password"])) {
              return  array('message'=>"success","id"=>$data["id"]);
            }
            else{
                return  array('message'=>"Invalid Credentials!");
            }
          }
   
         }
         else
         {
            return  json_encode(array('message'=>"Invalid Credentials!"));
         }  
        } 
       }

}


public function FetchSingle($userid) 
{
 
      $query = "SELECT * FROM userdetails WHERE id = :userid";
      $statement = $this->conn->prepare($query);
      $statement->bindValue(":userid",$userid);
      $statement->execute();
      $rows = $statement->rowCount(); 
      if ($rows > 0) { 
      $result = $statement->fetchAll();
       foreach($result as $data) { 
            return  json_encode(array(
              "message"=>"success",
              "id"=>$data["id"],
              "image"=>$data["image"],
              "name"=>$data["name"],
              "email"=>$data["email"],
              "created"=>  date("M Y", strtotime($data["created"]))
            )); 
       }
      }
        else
        {
        return json_encode(array("message"=>"error"));
        }

}


public function Uplod($FILES,$data)
{
 
    $uploaddir =  'images/';
    $response = ''; 

    $tag = implode(", ", $data['tag']);
    $description = htmlspecialchars($data['description'], ENT_QUOTES, 'UTF-8');

    $address = htmlspecialchars($data['address'], ENT_QUOTES, 'UTF-8');
    $latitude =  !empty($data['latitude']) ? $data['latitude'] : NULL;
    $longitude = !empty($data['longitude']) ? $data['longitude'] : NULL;
    $city =  !empty($data['city']) ? $data['city'] : NULL;
    $country = !empty($data['country']) ? $data['country'] : NULL;
     
 
    $query = "INSERT INTO image_info(userid,tag,description,location,city,country,lat,lon) VALUES(:userid,:tag,:description,:address,:city,:country,:latitude,:longitude)";
        $statement = $this->conn->prepare($query);
        $statement->bindValue(":userid",$data['userid']); 
        $statement->bindValue(":tag",$tag); 
        $statement->bindValue(":description",$description);
        $statement->bindValue(":address",$address);
        $statement->bindValue(":city",$city);
        $statement->bindValue(":country",$country);
        $statement->bindValue(":latitude",$latitude);
        $statement->bindValue(":longitude",$longitude);
        $statement->execute(); 



        $id = $this->conn->lastInsertId();

    foreach( $FILES[ 'images' ][ 'tmp_name' ] as $index => $tmpName )
    {
      $extension = pathinfo($FILES['images']['name'][$index], PATHINFO_EXTENSION);
      $new_name = 'picsum_'.rand(10000,10000000000). '.' . $extension;
      $uploadfile = $uploaddir . $new_name; 
      move_uploaded_file($FILES['images']['tmp_name'][$index], $uploadfile); 
      $query = "INSERT INTO image(name,info) VALUES(:name,:info)";
        $statement = $this->conn->prepare($query); 
        $statement->bindValue(":name",$new_name); 
        $statement->bindValue(":info",$id);
        $result = $statement->execute();
        if($result)
        {
            $response = "success";
        }
        else
        {
             $response = "error";
             die("error");
        } 
    } 
    
    return json_encode(array("message"=>$response));

}



public function checkSubscription($userid){
  $query = 'SELECT * FROM subscription WHERE userid = :userid';
  $statement = $this->conn->prepare($query); 
  $statement->bindValue(":userid",$userid); 
  $result = $statement->execute();
  foreach ($statement->fetchAll() as $value) {
       if ($value['plan'] == 'basic') {
           $query = 'SELECT * FROM image_download WHERE userid = :userid AND MONTH(downloaded) = :month';
           $statement = $this->conn->prepare($query); 
           $statement->bindValue(":userid",$userid); 
           $statement->bindValue(":month",date('n')); 
           $statement->execute();
           $rows = $statement->rowCount();
           if ($rows < 60) {
                 return array("message"=>"success","plan"=>$value['plan']);
           }
           else
           {
                return array("message"=>"error","plan"=>$value['plan']);
           }


       }
       else
       {
          return array("message"=>"success","plan"=>$value['plan']);
       }
  }
}




 
 
}

?>