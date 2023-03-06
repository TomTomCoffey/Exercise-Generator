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







function checkForMatchingEmail($email){
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















?>


    
</body>
</html>