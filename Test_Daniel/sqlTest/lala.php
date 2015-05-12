<!DOCTYPE html>
<html>
<body>

<?php
		$servername = "mysql14.000webhost.com";
		$username = "a3874533_daniel5";
		$password = "pass54";
		//$database = "a3874533_daniel";

		// Create connection
		//mysql_connect($servername, $username, $password)or die("cannot connect, error: ".mysql_error());
		// Check connection
		//mysql_select_db("a3874533_daniel")or die("cannot select DB, error: ".mysql_error());
		
		if(@mysql_connect($servername, $username, $password)){
			if(@mysql_select_db("a3874533_daniel")){
				echo "ok successful connection<br>";
			}else{
				echo "could not connect to database.";
			}
		}else{
			echo "Could not connect to server";
		}


		$scoreValue = $_POST["points"];
		$theFullName = $_POST["fullname"];
		$emailAddress = $_POST["other"];

		echo $scoreValue."   Name: ".$theFullName." Email: ".$emailAddress."<br><br><br>";

		
		// $sql = "INSERT INTO DinoMyteScores (Score, Name, Email)
		// VALUES ($scoreValue, '$theFullName', '$emailAddress')";

		$query = "SELECT * FROM EpicRoar;";
		if($query_run = mysql_query($query)){
			echo "query success<br>";
			while($query_row=mysql_fetch_assoc($query_run)){
				$val1 = $query_row['score'];
				$val2 = $query_row['fullName'];
				$val3 = $query_row['emailAddress'];

				echo "Id: ".$query_row['userId']." ".$val1." ".$val2." ".$val3."<br>";
			}
		}else{
			echo "Query failed.";
		}

		$totalIds = mysql_query("SELECT COUNT(userId) as counter FROM EpicRoar");
		$daCount = mysql_result($totalIds, 0);
		echo " The total ids in the database are: ".mysql_result($totalIds, 0);
		$daCount++;
		echo " Now: ".$daCount;



		$query2 = "INSERT INTO EpicRoar(userId, score, fullName, emailAddress)
			VALUES ($daCount, $scoreValue, '$theFullName', '$emailAddress')";
		// if($query_run = mysql_query($query2)){
		// 	echo "insertion success";
		// }else{
		// 	echo "insertion failed";
		// }

?>


<?php

	//SELECT COUNT(SupplierID) AS allah FROM Suppliers;



	echo "<br><br><br><br><br><br><br>";
 	echo $_POST["fullname"]."<br>"; 
	echo "Your email address is: ".$_POST["other"]; 
	echo "<a href='result.html'> Click here for the result page </a>";
?>


</body>
</html>