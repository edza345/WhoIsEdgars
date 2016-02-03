<?php



if(!isset($_SERVER['HTTP_HOST'])){
  $host = "localhost";
    $user = "root";
    $dbx = "space";
    $pass = "";
}else{
 $host = "localhost";
    $passx = explode(".",$_SERVER['HTTP_HOST']);
 $user = "root";
 $pass = ""; //"ca.csn.lv";
 $dbx   = "space";
}

// $connection = mysql_connect($host, $user, $pass) or die("<h1 align=\"center\">Kļūda: nevar pieslēgties [".$db."] datu bāzei ar lietotāju [".$user."]!</h1>");
// mysql_select_db($db) or die("<h1 align=\"center\">Kļūda: Datu bāze [".$db."] nav pieejama!</h1>");
// $star = "&nbsp;<FONT COLOR=\"#ED5205\">*</FONT>";
//  mysql_query("SET NAMES 'utf8'");

  class DB extends mysqli{
 function __construct($username = null,$password = null, $db = null, $host = "localhost") {
  $conn = @parent::__construct($host,$username,$password);
  if($db != null) {
   $this->select_db($db);
  }
  $this->query("SET NAMES UTF8");
  $this->query("SET NAMES UTF-8");
 }
 function return_error() {
  return $this->errno;
 }

 function fetch_assoc($qry) {
  $result = $this->query($qry);
  if($this->error) {
     return $this->error;
  }
  if($result->num_rows) {
   while($row = $result->fetch_array(MYSQLI_ASSOC)){
    $rows[] = $row;
   }
   return $rows;
  } else {
//   return array();
  }
 }

 function fetch_array($qry) {
  return $this->fetch_assoc($qry);
 }
 function fetch_row($qry) {
  $result = parent::query($qry);
  if($result) {
   $rt = $result->fetch_row();
   return $rt[0];
  } else {
   return false;
  }
 }

 function insert($qry) {
  $result = $this->query($qry);
  if($result) {
   $rtn = $this->insert_id;
   if($rtn) {
    return $rtn;
   } else {
    return true;
   }
  } else {
   return $result;
  }
 }
 function query($qry) {
  $result = parent::query($qry);
  if(!$this->error) {
   return $result;
  } else {
   return $this->error;
  }
 }

    function dbselect($table, $rows = "*", $where = null, $order = null){
            $q = 'SELECT '.$rows.' FROM '.$table;
            if($where != null){
            $q .= ' WHERE '.$where;
            }
            if($order != null){
            $q .= ' ORDER BY '.$order;
            }
            $query = @mysql_query($q) or die(mysql_error());
              while($object = mysql_fetch_array($query)) {
                $return[] = $object;
              }

          return $return;
    }

}


$db = new DB($user, $pass, $dbx, $host);

include("function.php");
?>