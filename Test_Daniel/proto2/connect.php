<?php
		$servername = "mysql14.000webhost.com";
		$username = "a3874533_daniel5";
		$password = "pass54";
		$database = "a3874533_daniel";
		
		if(@mysql_connect($servername, $username, $password)){
			if(@mysql_select_db($database)){
				
			}else{
				echo "could not connect to database.";
			}
		}else{
			echo "Could not connect to server";
		}
?>