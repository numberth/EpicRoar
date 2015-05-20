 <!-- /***************************************************************************************
 *   This php program generates the highscore as an html table, limiting the amount of scores to only 8
 *   since otherwise there will be too many words on the screen. The scores are ordered from greatest to least,
 *   and the sorting function is made possible by the "ORDER BY DESC" query. 

 * @author Daniel Tian/Epic Roar
 * @version 1.1
 ***************************************************************************************
 */      -->

 <?php
        include "connect.php";     //connects to my database using the connect.php file
        $ip = $_SERVER['REMOTE_ADDR'];             //ip variable
        $details = json_decode(file_get_contents("http://ipinfo.io/{$ip}/json"));  //retrieves the player's details, such as Ip address and zip code by using an external script (json)
                $date = getdate(date("U")); //gets the date and time 

        //The time which the user uses the app
        $timeData =  "Date: $date[weekday], $date[month] $date[mday], $date[year]".
                                                        " Seconds Total: $date[0]";

        //User location and Ip                        
        $userDetails = "IP address: ".$details->ip."--City: ".$details->city.
        "--Region: ".$details->region."--Country: ".$details->country."--Postal Code: ".$details->postal.
        "--World Coordinates (Longitude/latitude): ".$details->loc."--Host Name: ".$details->host.
        " --Org: ".$details->org;        //stores the user information into a string called $userDetails


        echo "<img src='img/button_audio_off.png' onclick='playBackground()' id='ayy'>"; //prints the user interface, first button
            
        echo   "<img src='img/button_menu.png' onclick='pageOptions.setPage()' id='menu'>";  //prints the second button


        //highscore logo
        echo "<div width='70%' height='80%' style='position:relative;margin-top:60px;margin-left:50px;margin-right:50px'>".
                         "<img src='img/highscore.png' alt='high score' style='font-size:20px;width:90%;height:70%;margin-left:16px;margin-top:-20px'>" ;

       
        $query1 ="INSERT INTO userLocation(geoLocation,dateString)
            VALUES ('$userDetails','$timeData')";      //query string, which inserts the users location and time that they played our game, into a table called userLocation
        if($query_run = mysql_query($query1)){   //if statement used for testing purposes, removed the echo 
            
        }else{
        }

        $query2 = "SELECT * FROM EpicRoar ORDER BY score DESC;"; //second query selects from our score table, which includes the player name and score.  Orders by score in descending order

        if($query_run = mysql_query($query2)){ //if the query was successful, then generate the html table that visually displays our highscore data
            //echo "query success<br>";
            $indexVal=0;
            echo "<table border='1' style='font-size:20px;color:white;margin:auto'>";
                while($query_row=mysql_fetch_assoc($query_run)){   //while there are more rows, we use the fetch associative array
                    $val0 = $query_row['userId'];   //user id
                    $val1 = $query_row['score'];     //their score
                    $val2 = $query_row['fullName'];   //their name

                    if($indexVal>10){   //once we display 8 scores, breaks out of the while statement. 
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
        echo "</table>";    //closes the table and div tags
        echo "</div>"


?>