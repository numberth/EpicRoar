<?php 
	session_start();
	session_destroy();
	header('location: http://danieltheman.webege.com/proto3/index.php');
	exit();  
?>