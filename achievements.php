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
		<a href='index.php'><img src='img/home.png' alt='home button' style='position:absolute;top:0;left:0;display:block;height:60px;width:90px'></a>
		<?php
			if( isset($_SESSION['user_id'])) {
				echo "<a href='php/logout.php'><img src='img/logout.png' alt='login button' style='position:absolute;top:0;right:0;display:block;height:60px;width:150px'></a>";
			}else{
				echo "<a href='signin.php'><img src='img/login.png' alt='login button' style='position:absolute;top:0;right:0;display:block;height:60px;width:150px'></a>";
			}
		?>
		
	<!-- Content goes in div "content" 
	 -->
	<div class="container">
	<!-- EVERYTHING IS GENERATED WITHIN THE content with id panel-->
		<div class="content" id="panel" style='color:black;background-image:url(http://hdwallpapers360.com/wp-content/uploads/white-hd-background-wallpaper.png);background-size:100% 100%'>

		<?php
			
				if( isset($_SESSION['user_id']) ) {

	                $id = $_SESSION['user_id'];  
	                include 'connect.php';  
	                echo "Welcome ".mysql_result( mysql_query("SELECT username FROM users WHERE user_id = $id"), 0)."<br>";
	                $query = mysql_query("SELECT email FROM users WHERE user_id = $id");
	                echo "Your email is: ".mysql_result($query, 0)."<br/>";
	                echo "Your Location is: ".mysql_result(mysql_query("SELECT userLocation FROM users WHERE user_id = $id"),0)."<br>";

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

	                echo "You have a total of: ".$totalAchievements." achievements earned.<br/>";

	                if($result1==1){
	                    echo "Achievement 1 unlocked at ".$resultTime1."<br>";
	                }else{
	                    echo "Achievement 1 not yet unlocked<br>";
	                }

	                if($result2==1){
	                    echo "Achievement 2 unlocked at ".$resultTime2."<br>";
	                }else{
	                    echo "Achievement 2 not yet unlocked<br>";
	                }

	                if($result3==1){
	                    echo "Achievement 3 unlocked at ".$resultTime3."<br>";
	                }else{
	                    echo "Achievement 3 not yet unlocked<br>";
	                }


	            }else{
	            	echo "You must sign in first";
	            }

            ?>



		</div>
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
