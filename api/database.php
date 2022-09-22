<?php
class Database

    {
    
    private $conn;
    private $dsn = 'mysql:dbname=picsum;host=localhost';
    private $user = 'root';
    private $password = "root"; 
    public

    function __construct()
        {
        try
            {
            $this->conn = new PDO($this->dsn, $this->user, $this->password);
            }

        catch(PDOException $e)
            {
            print "Error!: " . $e->getMessage() . "";
            die();
            }

        return $this->conn;
        }

    public function getmyDB()
        {
        if ($this->conn instanceof PDO)
            {
            return $this->conn;
            }
        }
    }

?>