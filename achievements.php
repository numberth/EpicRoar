<!DOCTYPE html>
<html lang="en">
<?php
		include 'php/init.php';
?>
<head>
  <title>Dino Achievements</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="style/base.css">
  <link rel="stylesheet" href="style/main.css" type="text/css">
</head>
<body>
	<h1>
		<img src="img/EPICROAR_logo.png" width="130px" height="85px" alt="EPIC ROAR">
		<br>
		DINO MYTE
		<br>
	</h1>
		<a href='index.php'><img src='img/home.png' alt='home button' style='position:absolute;top:0;left:0;display:block;height:60px;width:80px'></a>
		<?php
			if( isset($_SESSION['user_id'])) {
				echo "<a href='php/logout.php'><img src='img/logout.png' alt='login button' style='position:absolute;top:0;right:0;display:block;height:60px;width:150px'></a>";
			}else{
				echo "<a href='signin.php'><img src='img/login.png' alt='login button' style='position:absolute;top:0;right:0;display:block;height:60px;width:150px'></a>";
			}
		?>
		
	<!-- Content goes in div "content" 
	 -->
	<div class="container" style='border-bottom-style:dotted;border-color:#474719;border-top-style:dotted'>
	<!-- EVERYTHING IS GENERATED WITHIN THE content with id panel-->
		<!-- <div class="content" id="panel" style='word-wrap: break-word;font-size:18px;color:black;background-image:url();background-size:100% 100%'> -->

		<?php
			
				if( isset($_SESSION['user_id']) ) {
	                $id = $_SESSION['user_id'];  
	                include 'connect.php';  
	                echo "<h2 style='text-align:center;color:white'>Welcome ".mysql_result( mysql_query("SELECT username FROM users WHERE user_id = $id"), 0)."</h2>";
	                $query = mysql_query("SELECT email FROM users WHERE user_id = $id");
	                echo "<p style='text-align:center'>Your email is: ".mysql_result($query, 0)."</p>";
	                $location = mysql_result(mysql_query("SELECT userLocation FROM users WHERE user_id = $id"),0);
	                if(!empty($location)){
	                	echo "<p style='text-align:center'>Your Location: ".$location."</p>";
	                }
	                $queryAchievement1 = mysql_query("SELECT achievement1 FROM users WHERE user_id = $id");
	                $queryAchievement2 = mysql_query("SELECT achievement2 FROM users WHERE user_id = $id");
	                $queryAchievement3 = mysql_query("SELECT achievement3 FROM users WHERE user_id = $id");

	                $queryTime1 = mysql_query("SELECT achievementTime1 FROM users WHERE user_id = $id");
	                $queryTime2 = mysql_query("SELECT achievementTime2 FROM users WHERE user_id = $id");
	                $queryTime3 = mysql_query("SELECT achievementTime3 FROM users WHERE user_id = $id");

	                $result1 = mysql_result( $queryAchievement1, 0);
	                $result2 = mysql_result( $queryAchievement2, 0);
	                $result3 = mysql_result( $queryAchievement3, 0);

	                $resultTime1 = mysql_result( $queryTime1, 0);
	                $resultTime2 = mysql_result( $queryTime2, 0);
	                $resultTime3 = mysql_result( $queryTime3, 0);


	                $totalAchievements = $result1+$result2+$result3;

	                echo "<p style='text-align:center'>You have a total of: ".$totalAchievements." achievements earned.</p>";

	                if($result1==1){
	                    echo "<p style='color:#006600'>Achievement 1[3x3 beaten] unlocked at ".$resultTime1."<p>";
	                    echo "<img src='img/block_green.png' style='display:block;margin:auto;width:150px;height;150px;'/><br>";
	                }else{
	                    echo "Achievement 1 not yet unlocked<br>";
	                }

	                if($result2==1){
	                    echo "<p style='color:#CC0000'>Achievement 2[4x4 beaten] unlocked at ".$resultTime2."</p>";
	                    echo "<img src='img/block_red.png' style='display:block;margin:auto;width:150px;height;150px;'/><br>";
	                }else{
	                    echo "Achievement 2 not yet unlocked<br>";
	                }

	                if($result3==1){
	                    echo "<p style='color:#D11975'>Achievement 3[beat the game!] unlocked at ".$resultTime3."</p>";
	                    echo "<img src='img/kingDino.gif' style='display:block;margin:auto;width:150px;height;150px;'/><br>";
	                }else{
	                    echo "Achievement 3 not yet unlocked<br>";
	                }


	            }else{
	            	echo "You must sign in first";
	            	echo "<p style='margin-bottom:40%'></p>";
	            }

            ?>



		   <!-- </div> -->
	</div>

	<div id="footer">
		<img src="img/dragon.gif" width="81px" height="57px" alt="EPIC ROAR">
		<br>
		<h2>
			Presented by EPIC ROAR.
		</h2>
		<br>

		<h3>
			Team Members: 
		</h3>
			<img src="img/fire.gif" width="24" height="24"> Eva &nbsp;
			<img src="img/wind.gif" width="24" height="24"> Trista &nbsp;
			<img src="img/light.gif" width="24" height="24"> Leia &nbsp;
			<img src="img/ice.gif" width="24" height="24"> Daniel &nbsp;
			<img src="img/water.gif" width="24" height="24"> Simran &nbsp;
	</div>
</body>
</html>
