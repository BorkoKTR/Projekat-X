<?php
include_once './config/database.php';

//header("Access-Control-Allow-Origin: * ");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$firstName = '';
$lastName = '';
$email = '';
$password = '';
$status = 1;
$role_id=2;
$conn = null;

$databaseService = new DBConnect();
$conn = $databaseService->connect();

$data = json_decode(file_get_contents("php://input"));


$firstName = $data->firstname;
$lastName = $data->lastname;
$email = $data->email;
$password = $data->password;

$password_hash = password_hash($password, PASSWORD_BCRYPT);
$table_name = $databaseService->getDBname().'.user';

$query = "INSERT INTO " . $table_name . "
                SET name = :firstname,
                    lastname = :lastname,
                    email = :email,
                    status = :status,
                    role_id = :role_id,
                    password = :password";


$stmt = $conn->prepare($query);

$stmt->bindParam(':firstname', $firstName);
$stmt->bindParam(':lastname', $lastName);
$stmt->bindParam(':email', $email);
$stmt->bindParam(':status', $status);
$stmt->bindParam(':role_id', $role_id);
$stmt->bindParam(':password', $password_hash);

if($stmt->execute()){

    http_response_code(200);
    echo json_encode(array("message" => "User was successfully registered."));
}
else{
    http_response_code(400);

    echo json_encode(array("message" => "Unable to register the user."));
}
