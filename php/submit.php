<?php
		include 'init.php';

		$scoreValue = $_POST["points"];
		$personName = $_POST["name"];
		$achievement1 = $_POST["achieve1"];
		$achievement2 = $_POST["achieve2"];
		$achievement3 = $_POST["achieve3"];
		echo $achievement1.$achievement2.$achievement3."<br>";



		echo "Score points: ".$scoreValue."   Name: ".$personName."<br><br><br>";

		$totalIds = mysql_query("SELECT COUNT(userId) as counter FROM EpicRoar");
		$daCount = mysql_result($totalIds, 0);
		echo " The total ids in the database are: ".mysql_result($totalIds, 0)."<br>";
		$daCount++;
		echo " Now: ".$daCount."<br>";


		$query2 = "INSERT INTO EpicRoar(userId, score, fullName)
			VALUES ($daCount, $scoreValue, '$personName')";
		if($query_run = mysql_query($query2)){
			echo "insertion success";
		}else{
			echo "insertion failed";
		}


		if( isset($_SESSION['user_id'])){
			$id = $_SESSION['user_id'];   
			$date = getdate(date("U"));
			$timeData =  "Date: $date[weekday], $date[month] $date[mday]";
			echo $timeData;
			if($achievement1==1){
					$timeQuery1 = "UPDATE users SET achievementTime1='$timeData' WHERE user_id = $id";
					mysql_query($timeQuery1);
			}

			if($achievement2==1){
				$timeQuery2 = "UPDATE users SET achievementTime2='$timeData' WHERE user_id = $id";
				mysql_query($timeQuery2);
			}

			if($achievement3==1){
				$timeQuery3 = "UPDATE users SET achievementTime3='$timeData' WHERE user_id = $id";
				mysql_query($timeQuery3);
			}


			$val1 = mysql_result(mysql_query("SELECT achievement1 FROM users WHERE user_id = $id"),0);
			$val2 = mysql_result(mysql_query("SELECT achievement2 FROM users WHERE user_id = $id"),0);
			$val3 = mysql_result(mysql_query("SELECT achievement3 FROM users WHERE user_id = $id"),0);
			if($val1==1){
				$achievement1 = 1;
			}
			if($val2==1){
				$achievement2 = 1;
			}
			if($val3==1){
				$achievement3 = 1;
			}
	        $query = "UPDATE users
					 SET achievement1= $achievement1, 
					 achievement2= $achievement2, 
					 achievement3 = $achievement3
					 WHERE user_id = $id";
			mysql_query($query);
			echo "successful update";
		}else{
			echo "sorry bro";
		}

		

		mysql_close();
		header("Location: http://danieltheman.webege.com/proto3");
		die();

?>