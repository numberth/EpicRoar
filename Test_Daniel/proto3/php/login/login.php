<?php
		include '../init.php';
			//$errors = array();

		function user_exists($username){

			$username = sanitize($username);
			$query = mysql_query("SELECT COUNT(user_id) FROM users WHERE 
			username= '$username';");

			if(mysql_result($query, 0) == 1){
				return true;
			}else{
				return false;
			}

		}

		function active($username){

			$username = sanitize($username);
			$query = mysql_query("SELECT COUNT(user_id) FROM users WHERE 
			username= '$username' AND active=1;");

			if(mysql_result($query, 0) == 1){
				return true;
			}else{
				return false;
			}

		}

		function getUserIdFromUserName($username){

			$username = sanitize($username);
			$query = mysql_query("SELECT user_id FROM users WHERE username = '$username'");

			return mysql_result($query, 0 ,'user_id');
		}

		function login($name, $pass){

			$user_id = getUserIdFromUserName($name);
			$name = sanitize($name);
			$pass = md5($pass);
			//echo $pass;

			$query =mysql_query("SELECT COUNT(user_id) FROM users WHERE username = '$name' AND password='$pass' ");
			if(mysql_result($query, 0)==1){
				return $user_id;
			}else{
				return false;
			}


		}	
		
		if(!empty($_POST)){
			$username = $_POST['loginName'];
			$password = $_POST['loginPass'];

			if(empty($username) || empty($password)){
				echo 'You need to enter a username and password :D';
			}else if(!user_exists($username)){
				echo 'We cannot find that username. Have you registered? D:';
			}else{

				$login = login($username, $password);
				if(!$login){
					echo 'Username and password combination is incorrect. :(';
				}else{
					//sets user session, then redirect user to home.
					$_SESSION['user_id'] = $login;
					header('location: http://danieltheman.webege.com/proto3/signin.php');
					exit();
				}
			}


		}else{
			echo "it is empty!";
		}

		function sanitize($data){
			return mysql_real_escape_string($data);
		}


		echo "<br><a href='http://danieltheman.webege.com/proto3/signin.php'> click here to go back v_v</a>";
		//print_r($errors);
?>