<html>
<head><title>CalculateBMI.php</title></head>

<body>
<?php
    
    /*for code to work create a database in phpMyAdmin called Users with a 
    with a table called User with these columns:
        name (text)
        email (text)
        password (text)
        height (int)
        weight(int)
        BMI (float)
    */


    

    $name = $_POST["name"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $height = $_POST["height"];
    $weight = $_POST["weight"];
    $bmi = (float) calcBMI($height, $weight);


    echo "Hello " . $name . "<br>height: " . $height . "<br>weight: " . $weight;
    echo "<br>Your bmi is " . number_format((float)$bmi, 2, '.', '');

    
    

    //check if email or password are already being used, if not add user 
    if( checkUserInfo($password, $email) ){ 
        $conn = dbConnection();
        $sql = "insert into User(name,email,password,height,weight,bmi) values('$name','$email','$password','$height','$weight','$bmi')";

        if ($conn->query($sql) === TRUE) {
            echo "ADDED: ";
        } else {
            echo "Error: ";
        }
    }
    

    //functions

    //check if password is in database already
    function checkUserInfo($password, $email){
        $conn = dbConnection();

        //check password
        $passwordCheck = "SELECT * FROM User WHERE password = '$password'";
        $result = mysqli_query($conn, $passwordCheck);

        if (mysqli_num_rows($result) > 0) {
            echo "This password is not available<br>";
            return false;
        }
        
        //check email
        $emailCheck = "SELECT * FROM User WHERE email = '$email'";
        $result = mysqli_query($conn, $emailCheck);

        if (mysqli_num_rows($result) > 0) {
            echo "This email is not available<br>";
            return false;
        }
    
        return true;
    }
    
    ///check if password is valid
    function validPassword($password){
        if (strlen($password) < 8){
            echo "<br>Password must be at least 8 characters";
            return false;
        }
        if (!preg_match("#[0-9]+#", $password)){
            echo "<br>Password must include at least one number";
            return false;
        }
        if (!preg_match("#[a-z]+#", $password)){
            echo "<br>Password must include at least one letter";
            return false;
        }
        if (!preg_match("#[A-Z]+#", $password)){
            echo "<br>Password must include at least one CAPS";
            return false;
        }
        if (!preg_match("#\W+#", $password)){
            echo "<br>Password must include at least one symbol";
            return false;
        }
        return true;
  
    }
    function calcBMI($height, $weight){

        $bmi = 703 * ($weight / ($height * $height));
        echo "<br>Your bmi is " . number_format((float)$bmi, 2, '.', '');
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
