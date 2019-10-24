<?php

class DBConnect {
    private $server ='localhost';
    private $dbname = 'projekat_db';
    private $user = 'root';
    private $pass = 'root';
    private $conn = null;

    public function connect() {
    try{
        $this->conn = new PDO('mysql:host' . $this->server . ';dbname='. $this->dbname,$this->user,$this->pass);
        return $this->conn;
        }
        catch(Exception $e) {
            echo "Database Error: " . $e->getMessage();
        }
    }
    public function getDBname()
    {
        return $this->dbname;
    }
}