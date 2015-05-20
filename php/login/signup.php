<?php
	include '../connect.php';
	
	$username = $_POST['username'];
	$password = $_POST['pass'];
	$mail = $_POST['email'];

	if(!empty($username)){

		$query = "INSERT INTO users(username, password, email)
					VALUES ('$username', md5('$password'), '$mail')";


			if($query_run = mysql_query($query)){
					echo "insertion success";
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