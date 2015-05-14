 <?php
        include "connect.php";
        $ip = $_SERVER['REMOTE_ADDR'];
        $details = json_decode(file_get_contents("http://ipinfo.io/{$ip}/json"));
                $date = getdate(date("U"));

        //The time which the user uses the app
        $timeData =  "Date: $date[weekday], $date[month] $date[mday], $date[year]".
                                                        " Seconds Total: $date[0]";

        //User location and Ip                        
        $userDetails = "IP address: ".$details->ip."--City: ".$details->city.
        "--Region: ".$details->region."--Country: ".$details->country."--Postal Code: ".$details->postal.
        "--World Coordinates (Longitude/latitude): ".$details->loc."--Host Name: ".$details->host.
        " --Org: ".$details->org;


        echo "<img src='img/button_audio_off.png' onclick='playBackground()' id='ayy'>";
            
        echo   "<img src='img/button_menu.png' onclick='pageOptions.setPage()' id='menu'>";


        echo "<div width='70%' height='80%' style='position:relative;margin-top:60px;margin-left:50px;margin-right:50px'>".
                         "<img src='img/highscore.png' alt='high score' style='font-size:20px;width:90%;height:70%;margin-left:16px;margin-top:-20px'>" ;

       
        $query1 ="INSERT INTO userLocation(geoLocation,dateString)
            VALUES ('$userDetails','$timeData')";
        if($query_run = mysql_query($query1)){
            
        }else{
        }

        $query2 = "SELECT * FROM EpicRoar ORDER BY score DESC;";

        if($query_run = mysql_query($query2)){
            //echo "query success<br>";
            $indexVal=0;
            echo "<table border='1' style='font-size:20px;color:white;margin:auto'>";
                while($query_row=mysql_fetch_assoc($query_run)){
                    $val0 = $query_row['userId'];
                    $val1 = $query_row['score'];
                    $val2 = $query_row['fullName'];
                   // $val3 = $query_row['emailAddress'];

                    if($indexVal>8){
                        return;
                    }

                    echo "<tr>";
                    echo "<td>Id: ".$val0."</td><td>  Score: ".$val1."</td><td>Fullname:".$val2."</td>";
                    // <td>EmailAddress:".$val3."</td>"; 
                    echo "</tr>";
                    $indexVal++;
                }
        }else{
                echo "Query failed.";
        }
        echo "</table>";
        echo "</div>"


?>