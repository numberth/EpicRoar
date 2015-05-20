<!-- /***************************************************************************************
 *   This file enables a connection to my MySql database for danieltheman.webege.com
 *   -It will be included in any php files that requires an update or retrieval of data from the database.
 * @author Daniel Tian/Epic Roar
 * @version 1
 ***************************************************************************************
 */      -->

<?php
		$servername = "mysql14.000webhost.com";   //server name
		$username = "a3874533_daniel5";			//user name
		$password = "pass54";					//password used to sign in
		$database = "a3874533_daniel";			//name of the database
		 

		//if the connection is successful, then select the database. Otherwise echo error messages to show that
		//the connection was not made properly. (either failure to connect to server, or database.)
		if(@mysql_connect($servername, $username, $password)){
			if(@mysql_select_db($database)){
				//echo "successful connection";
			}else{
				echo "could not connect to database.";
			}
		}else{
			echo "Could not connect to server";
		}
?>