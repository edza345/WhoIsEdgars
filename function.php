<?php

function loadpage($page){
global $db;
global   $language;
if(!isset($_SESSION['user_id'])){$page="0";}
  switch($page){
    case "learn":
        include("modules/learn/index.php");
    break;
    case "rules":
        include("modules/rules/index.php");
        break;

    case "test":
        include("modules/test/test.php");
        break;
    case "testR":
        include("modules/testR/index.php");
        break;
    case "exam":
        include("modules/exam/test.php");
        break;
    default:
        if(isset($_SESSION['user_id'])){
        include("modules/profile/index.php");
        }else{
        include("intro.php");
        }
    }
}


function replace_img_nid($text){
global $db;
  $stringa = $text;

$m = preg_match_all('/\[z_img:([0-9]{1,4})\]/', $stringa, $match);

if ($m) {
    $links=$match[0];
    $img_nr=$match[1];
    for ($j=0;$j<$m;$j++) {
        $stringa=str_replace($links[$j],"<img src='images/zimes/".$img_nr[$j].".gif'>",$stringa);
    }
}
$nid = preg_match_all('/\[nid:([0-9]{1,4})\]/', $stringa, $match);

if ($nid) {
    $links=$match[0];
    $nid_id=$match[1];
    for ($j=0;$j<$nid;$j++) {
        $nids = $db->fetch_array("SELECT * FROM ca_noteikumi WHERE nid='".$nid_id[$j]."'");
        if(isset($nids)){
        $stringa=str_replace($links[$j],"<b><span style='cursor:pointer' class='note' title='".$nids[0]['noteikumi_text_lv']."'>".$nids[0]['noteikumi_nr']."</span></b>",$stringa);
        }
    }
}
return $stringa;
}
 ?>