<?php 

    class DB{
        private $host = "127.0.0.1";
        private $user = "root";
        private $password = "";
        private $database = "dbrestoran";
    }

    public function _construct()
    {
        echo "function construct";
    }

    // method
    public function selectData()
    {
        echo 'select data';
    }

    public function getDatabase()
    {
        return $this->database;
    }

    public function tampil()
    {
        $this-.selectData();
    }

    public static function insert()
    {
        echo "static function";
    }

    DB::insertData();

     $db = new DB;

    // echo '<br>';

    // $db->selectData();

    // echo '<br>';

    // echo $db->host;

    // echo '<br>';

    // $db->getDatabase();

    // $db->tampil();

?>