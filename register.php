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
  <link rel="stylesheet" href="style/style.css">
</head>

<body>
	<h1>
		<img src="img/EPICROAR_logo.png" width="130px" height="85px" alt="EPIC ROAR">
		<br>
			DINO MYTE
		<br>
	</h1>
	<a href='index.php'><img src='img/home.png' alt='home button' style='position:absolute;top:0;right:0;display:block;height:60px;width:82px'></a>
		



	<div class="container">
	<!-- EVERYTHING IS GENERATED WITHIN THE content with id panel-->
		 <div class="content" style='color:black;font-size:30px'> 
			
    	   

            <div class="wrapper" style='background-color:red'>
            <div class="container">
                <h2>Register</h2>
                
                <form class="form" method='post' action='php/login/signup.php'>
                    <input type="text" placeholder="Username" name='username'>
                    <input type="password" placeholder="Password" name='pass'>
                    <input type="text" placeholder="Email" name='email'>
                    <input type="submit"  value="Submit" name="submit" /> <!-- id="login-button" -->
                </form>
            </div>
            
            <ul class="bg-bubbles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
            <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>

            

 <script src="script/index.js"></script>


		 </div>
	</div>





	<div id="footer" style='margin-top:33%'>
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
