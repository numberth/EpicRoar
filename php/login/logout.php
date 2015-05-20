<?php 
	session_start();
	session_destroy();
	header('location: http://danieltheman.webege.com/login/');
	exit();  
?>