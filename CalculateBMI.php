<html>
<head><title>CalculateBMI</title></head>

<body>
<?php

    $name = $_POST["name"];

    $height = $_POST["height"];
    $weight = $_POST["weight"];
    $bmi = 703 * ($weight / ($height * $height));
    
    echo "Hello " . $name . "<br>height: " . $height . "<br>weight: " . $weight;
    echo "<br>Your bmi is " . number_format((float)$bmi, 2, '.', '');
?>

</body>
</html>