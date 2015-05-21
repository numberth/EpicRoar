<?php
	include '../connect.php';
	
	$username = $_POST['username'];
	$password = $_POST['pass'];
	$mail = $_POST['email'];

	$ip = $_SERVER['REMOTE_ADDR'];
    $details = json_decode(file_get_contents("http://ipinfo.io/{$ip}/json"));          
    $userDetails = "City: ".$details->city.
    " Region: ".$details->region." Postal Code: ".$details->postal;

	if(!empty($username)){

		$query = "INSERT INTO users(username, password, email, userLocation)
					VALUES ('$username', md5('$password'), '$mail', '$userDetails')";
			if($query_run = mysql_query($query)){
					echo "Successful Registration.";
			}else{
				echo "insertion failed";
			}
	}else{
		echo "UserName is empty >.<";
	}

	echo "<br> <a href='http://danieltheman.webege.com/proto3/register.php'> Click here to go back :D</a>";
	mysql_close();
	//header('location: http://danieltheman.webege.com/login/');
	exit();

?>