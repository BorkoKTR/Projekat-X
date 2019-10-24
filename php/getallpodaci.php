<?php
include_once './config/database.php';

header("Access-Control-Allow-Origin: * ");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$databaseService = new DBConnect();
$conn = $databaseService->connect();

$db_name = $databaseService->getDBname();

$query ="SELECT podaci.id,title,url_podatka as path_doc,godina_izlaska,reziser,url_imdb,
JSON_ARRAYAGG(glumac) as glumac, 
JSON_ARRAYAGG(zanr) as zanr 
FROM ".  $db_name .  ".podaci
inner join ".   $db_name . " .glumci_has_podaci 
on ".   $db_name . " .glumci_has_podaci.podaci_id = ".   $db_name . " .podaci.id
inner join ".   $db_name . " .glumci 
on ".   $db_name . " .glumci.id = ".   $db_name . " .glumci_has_podaci.glumci_id
inner join ".   $db_name . " .zanr_has_podaci 
on ".   $db_name . " .zanr_has_podaci.podaci_id = ".   $db_name . " .podaci.id
inner join ".   $db_name . " .zanr on ".   $db_name . " .zanr_has_podaci.zanr_id = ".   $db_name . " .zanr.id
inner join ".   $db_name . " .rezija on ".   $db_name . " .rezija.id = ".   $db_name . " .podaci.rezija_id
group by id,title, url_podatka,godina_izlaska,reziser";

//$query = "select * From " . $db_name;

$stmt = $conn->prepare($query);
$stmt->execute();

if($stmt->rowCount() > 0){
    

     $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($result, http_response_code(200));

}else{
    http_response_code(400);

    echo json_encode(array("message" => "Not found"));
}
