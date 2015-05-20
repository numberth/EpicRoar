<!DOCTYPE html>
<html lang="en">
<?php
		include 'php/init.php';
?>
<head>
  <title>Dino Myte</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="style/base.css">
  <link rel="stylesheet" href="style/main.css" type="text/css">
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>	
    <script src="script/LAB.min.js" type="text/javascript"></script>
    <script>
        $LAB
	        .script('script/enable.js').wait()
	        .script('script/boardGenerator.js').wait()
	        .script('script/checkPath.js').wait()
	        .script('script/initialize.js').wait()
	        .script('script/pathGenerator.js').wait() 	
	        .script('script/rotate.js').wait() 
            .script('script/landingPage.js').wait(function (){
                console.log("hello world!");
                pageOptions.init("panel"); 
              });

    </script>
    <script type="text/javascript">
		function showHighscore() {

                if (window.XMLHttpRequest) {
                    // code for IE7+, Firefox, Chrome, Opera, Safari
                    xmlhttp = new XMLHttpRequest();
                } else {
                    // code for IE6, IE5
                    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                }
                xmlhttp.onreadystatechange = function() {
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        document.getElementById("panel").innerHTML = xmlhttp.responseText;
                    }
                }
                xmlhttp.open("GET","php/highScore.php?q=",true);
                xmlhttp.send();
            
        }
	</script>

</head>

<body>
	<h1>
		<img src="img/EPICROAR_logo.png" width="130px" height="85px" alt="EPIC ROAR">
		<br>
		DINO MYTE
		<br>
	</h1>
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


			<img src='img/dinomyte.png' style='display:block;width:80%;height:auto;margin:auto;margin-top:9%'> 

		<!--
			<button onclick='pageOptions.difficultySelect()' id='playButton'>Play
			</button>

			<button onclick='pageOptions.setLevelPage()' id='levelModeButton'>Levels
			</button>
		-->
			<img src= 'img/button_play.png' onclick='pageOptions.difficultySelect()' id='playButton'>

			<img src= 'img/button_levels.png' onclick='pageOptions.preLevelSelect()' id='levelModeButton'>

			<!--<button onclick='pageOptions.setSignUpPage()' id='signUpButton'>Sign Up</button>-->

			<img src= 'img/button_scores.png' onclick='showHighscore()' id='scoreButton'>

			<img src='img/button_audio_off.png' onclick='playBackground()' id='ayy'>
			
			<img src='img/button_menu.png' id='menu'>     



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
