<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>login</title>
</head>
<body>

<?php

$email = $_POST["email"];
$password = $_POST["password"];
$serverName = "localhost";




if( checkForMatchingEmail($email) ){
    if( checkForMatchingPassword($email, $password) ){
        echo "login accepted";
    }
    else{
        echo "<br>User not found";
    }
}




function checkForMatchingEmail($email){
    $conn = dbConnection();
    $sql = "SELECT email FROM User";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            if ($row["email"] == $email){
                return true;
            }
        }
    }
    echo "<br>Email not found";
    return false;

}
    
//check password
function checkForMatchingPassword($email, $password){
    $conn = dbConnection();

    $sql = "SELECT password FROM User WHERE email = '$email'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            if ($row["password"] == $password){
                return true;
            }
        }
    }
}

    

//connect to database
function dbConnection(){
    $serverName = "localhost";
    $userName = "root"; 
    $password = ""; 
    $dbName = "Users";

    
    $conn = mysqli_connect($serverName, $userName, $password, $dbName);
    if($conn){
        return $conn;
    }
    else{
        echo "no connection<br>";
    }
}













?>


    
</body>
</html>
