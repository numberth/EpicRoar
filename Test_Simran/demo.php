<?php
// connects php database to this file
define('DB_NAME', 'a4859415_demo');
define('DB_USER', 'a4859415_demo123');
define('DB_PASSWORD', 'demo123');
define('DB_HOST', 'mysql8.000webhost.com');

// tells it what host(computer) to connect to. if you connect to 'localhost', it will just find your ip address. 
// vv this is like logging on to the computer, but you have no connected to database yet.
//stored into $link variable
$link = mysql_connect(DB_HOST, DB_USER, DB_PASSWORD);
//test to see if it connected. if it doesnt, runs erro
if (!$link) {
	die('Could not connect: ' . mysql_error());
}

$db_selected = mysql_select_db(DB_NAME, $link);

if (!$db_selected) {
	die('Can\'t use ' . DB_NAME . ': ' . mysql_error());
}

$value = $_POST['input1'];

$sql = "INSERT INTO a4859415_demo (1) (input1) VALUES ('$value')";

if (!mysql_query($sql)) {
	die('Error: ' . mysql_error());
}

mysql_close();
?>