<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
include("../config.php");
if($_GET['type']==1){
	$add_score=$db->INSERT("INSERT INTO highscores(nick, score)VALUES('".$_GET['nick']."', '".$_GET['score']."')");
	$place=$db->fetch_row("SELECT count(*) FROM highscores WHERE score>(SELECT score FROM highscores where id=".$add_score.")")+1;
	print_r($place);
}else if($_GET['type']==2){
	$highscores=$db->fetch_array("SELECT * FROM highscores order by score DESC limit 20");
	echo json_encode($highscores);
}
?>