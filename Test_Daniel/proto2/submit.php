<?php

		include 'connect.php';

		$scoreValue = $_POST["points"];
		$personName = $_POST["name"];
		echo "Score points: ".$scoreValue."   Name: ".$personName."<br><br><br>";

		$totalIds = mysql_query("SELECT COUNT(userId) as counter FROM EpicRoar");
		$daCount = mysql_result($totalIds, 0);
		echo " The total ids in the database are: ".mysql_result($totalIds, 0);
		$daCount++;
		echo " Now: ".$daCount;


		$query2 = "INSERT INTO EpicRoar(userId, score, fullName)
			VALUES ($daCount, $scoreValue, '$personName')";
		if($query_run = mysql_query($query2)){
			echo "insertion success";
		}else{
			echo "insertion failed";
		}

		mysql_close();
		header("Location: http://danieltheman.webege.com/proto2");
		die();

?>