<?php
include_once './config/database.php';

header("Access-Control-Allow-Origin: * ");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$conn = null;

$databaseService = new DBConnect();
$conn = $databaseService->connect();
$name_db = $databaseService->getDBname();

$data = json_decode(file_get_contents("php://input"));

$reziser = $data->reziser;

$q="Select id FROM " .$name_db.".rezija Where reziser=?";
//echo $q; exit;
$stmt = $conn->prepare($q);
$stmt->bindParam(1, $reziser);
$stmt->execute();
$num = $stmt->rowCount();
//echo $num; exit;
if($num < 1)
{
    http_response_code(404);
    echo json_encode(array("message" => "Not Found"));
    exit;
}

$row = $stmt->fetch(PDO::FETCH_ASSOC);
//echo $row; exit;
$title = $data->title;
$url_podatka = $data->url_podatka;
$godina_izlaska = $data->godina_izlaska;
$url_imdb = $data->url_imdb;
$opis = $data->opis;
$rezija_id = $row['id'];



$table_name = 'podaci';

$query = "INSERT INTO " .$name_db.".".$table_name . "
                SET title = :title,
                    url_podatka = :url_podatka,
                    godina_izlaska = :godina_izlaska,
                    url_imdb = :url_imdb,
                    opis = :opis,
                    rezija_id = :rezija_id";

                    
$stmt = $conn->prepare($query);
//echo $query; exit;
$stmt->bindParam(':title', $title);
$stmt->bindParam(':url_podatka', $url_podatka);
$stmt->bindParam(':godina_izlaska', $godina_izlaska);
$stmt->bindParam(':url_imdb', $url_imdb);
$stmt->bindParam(':opis', $opis);
$stmt->bindParam(':rezija_id', $rezija_id);


if($stmt->execute()){

    http_response_code(201);
    echo json_encode(array("message" => "The data was successfully created."));
}
else{
    http_response_code(400);

    echo json_encode(array("message" => "The data was not created."));
}