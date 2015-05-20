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
		<div class="content" id="panel">






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
