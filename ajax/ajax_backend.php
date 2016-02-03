<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
include("../config.php");
$db->QUERY(" SET SQL_BIG_SELECTS = 1 " ); 
if($_GET['type']==1){
	$db->QUERY("TRUNCATE TABLE student");
	$db->QUERY("TRUNCATE TABLE math");
	$db->QUERY("TRUNCATE TABLE english");
	$db->QUERY("TRUNCATE TABLE database_managment");
	$db->QUERY("TRUNCATE TABLE sport");
	$db->QUERY("TRUNCATE TABLE programming");
	$student_count=0;
	$return=array();
	$name= array("Alex","Jhon","Adrian","Walt","Joseph","Andrew","James","Judas","Philip","Matthew","Thomas","Simon","Peter","Jude","Judas","Francis","Robert","Daniel","Maria","Charles","Isaac","Masia","Catherine","Richard","George");
	$surname= array("Smith","Climber","Choper","Typer","Righter","Lefter","Owneng","Rich","Faithful","Dranks","Feng","Judias","Holy","Diamond","Spear","Heartz","Watz","Volt","Greats","Bowman","Trusther","Ridlic","Garlic","Manford","Solo","Gatsby","Frank");
	$class=array("A","B","C","D");
	while($student_count < 50){
		$score_count=0;
		$rand_missed_lessons=rand(0, 8);
		$rand_name=$name[rand(0, count($name)-1)];
		$rand_surname=$surname[rand(0, count($surname)-1)];
		$rand_class=$class[rand(0, count($class)-1)];

		$stud_id =$db->INSERT("INSERT INTO student(name, surname, class, missed_lessons)VALUES('".$rand_name."', '".$rand_surname."', '".$rand_class."', ".$rand_missed_lessons.")");
		while($score_count < 10){
			$math=rand(0, 10);
			$english=rand(0, 10);
			$database_managment=rand(0, 10);
			$sport=rand(0, 10);
			$programming=rand(0, 10);
			$db->INSERT("INSERT INTO math(student_id, score)VALUES(".$stud_id.", ".$math.")");
			$db->INSERT("INSERT INTO english(student_id, score)VALUES(".$stud_id.", ".$english.")");
			$db->INSERT("INSERT INTO database_managment(student_id, score)VALUES(".$stud_id.", ".$database_managment.")");
			$db->INSERT("INSERT INTO sport(student_id, score)VALUES(".$stud_id.", ".$sport.")");
			$db->INSERT("INSERT INTO programming(student_id, score)VALUES(".$stud_id.", ".$programming.")");
			$score_count=$score_count+1;
		}
		$avg_score=$db->fetch_array(" SELECT st.id as id,
											st.name as name,
											st.surname as surname,
											1 as info_type,
											st.class as class,
											st.missed_lessons as missed_lessons,
											round(avg(m.score),1) as avgm,
											round(avg(s.score),1) as avgs,
											round(avg(dm.score),1) as avgdm,
											round(avg(e.score),1) as avge,
											round(avg(pr.score),1) as avgpr
												 FROM student st
										 LEFT JOIN  math m ON st.id=m.student_id
										 LEFT JOIN sport s ON st.id=s.student_id
										 LEFT JOIN database_managment dm ON st.id=dm.student_id
										 LEFT JOIN english e ON st.id=e.student_id
										 LEFT JOIN programming pr ON st.id=pr.student_id WHERE st.id=".$stud_id);
		array_push($return, $avg_score);
		$student_count=$student_count+1;
	}
	echo json_encode($return);	
}
if($_GET['type']==2){
	$return=array();
	$first=1;
	$limit=$db->fetch_row("SELECT COUNT(*) FROM student");
	while($first<=$limit){
		 array_push($return, $db->fetch_array("SELECT st.id as id,
		 						(round(avg(m.score),1)+round(avg(s.score),1)+round(avg(dm.score),1)+round(avg(e.score),1)+round(avg(pr.score),1)) as total_score,
											st.name as name,
											st.surname as surname,
											st.class as class,
											2 as info_type,
											st.missed_lessons as missed_lessons,
											round(avg(m.score),1) as avgm,
											round(avg(s.score),1) as avgs,
											round(avg(dm.score),1) as avgdm,
											round(avg(e.score),1) as avge,
											round(avg(pr.score),1) as avgpr
												 FROM student st
										 RIGHT JOIN math m ON st.id=m.student_id
										 RIGHT JOIN sport s ON st.id=s.student_id
										 RIGHT JOIN database_managment dm ON st.id=dm.student_id
										 RIGHT JOIN english e ON st.id=e.student_id
										 RIGHT JOIN programming pr ON st.id=pr.student_id WHERE st.id=".$first));
		$first++;
	}
	
	usort($return, function($a, $b){
	    $a = $a[0]['total_score'];
	    $b = $b[0]['total_score'];

	    if ($a == $b) {
	        return 0;
	    }
	    return ($a > $b) ? -1 : 1;
	});
	echo json_encode($return);
}
if($_GET['type']==3){
	$return=array();
	$first=1;
	$limit=$db->fetch_row("SELECT COUNT(*) FROM student");
	while($first<=$limit){
		 array_push($return, $db->fetch_array("SELECT st.id as id,
											st.name as name,
											st.surname as surname,
											st.class as class,
											3 as info_type,
											st.missed_lessons as missed_lessons,
											round(avg(m.score),1) as avgm,
											round(avg(s.score),1) as avgs,
											round(avg(dm.score),1) as avgdm,
											round(avg(e.score),1) as avge,
											round(avg(pr.score),1) as avgpr
												 FROM student st
										 RIGHT JOIN math m ON st.id=m.student_id
										 RIGHT JOIN sport s ON st.id=s.student_id
										 RIGHT JOIN database_managment dm ON st.id=dm.student_id
										 RIGHT JOIN english e ON st.id=e.student_id
										 RIGHT JOIN programming pr ON st.id=pr.student_id WHERE st.id=".$first." AND 
										 ((SELECT avg(score) FROM math WHERE student_id=".$first.")>=4 AND 
										  (SELECT avg(score) FROM sport WHERE student_id=".$first.")>=4 AND
										  (SELECT avg(score) FROM database_managment WHERE student_id=".$first.")>=4 AND
										  (SELECT avg(score) FROM english WHERE student_id=".$first.")>=4 AND
										  (SELECT avg(score) FROM programming WHERE student_id=".$first.")>=4)"));
		$first++;
	}
	$return= array_filter($return, function($elem){
		if(!is_null($elem[0]['id'])){
			return $elem;
		}	
	});
	echo json_encode($return);
}
if($_GET['type']==4){
	// $db->QUERY("TRUNCATE TABLE student");
	// $db->QUERY("TRUNCATE TABLE math");
	// $db->QUERY("TRUNCATE TABLE english");
	// $db->QUERY("TRUNCATE TABLE database_managment");
	// $db->QUERY("TRUNCATE TABLE sport");
	// $db->QUERY("TRUNCATE TABLE programming");
	 echo 1;
}
if($_GET['type']==5){
	$return=array();
	$get_data=$db->fetch_array("SELECT      st.name as name,
											st.id as id,
											st.surname as surname,
											st.class as class,
											st.missed_lessons as missed_lessons,
											round(avg(m.score),1) as avgm,
											round(avg(s.score),1) as avgs,
											round(avg(dm.score),1) as avgdm,
											round(avg(e.score),1) as avge,
											round(avg(pr.score),1) as avgpr
												 FROM student st
										 RIGHT JOIN math m ON st.id=m.student_id
										 RIGHT JOIN sport s ON st.id=s.student_id
										 RIGHT JOIN database_managment dm ON st.id=dm.student_id
										 RIGHT JOIN english e ON st.id=e.student_id
										 RIGHT JOIN programming pr ON st.id=pr.student_id WHERE st.id=".$_GET['id']);

	$get_math=$db->fetch_array("SELECT score, id FROM math WHERE student_id=".$_GET['id']);
	$get_sport=$db->fetch_array("SELECT score, id FROM sport WHERE student_id=".$_GET['id']);
	$get_database_managment=$db->fetch_array("SELECT score, id FROM database_managment WHERE student_id=".$_GET['id']);
	$get_programming=$db->fetch_array("SELECT score, id FROM programming WHERE student_id=".$_GET['id']);
	$get_english=$db->fetch_array("SELECT score, id FROM english WHERE student_id=".$_GET['id']);
	
	array_push($return, $get_data);
	array_push($return, $get_math);
	array_push($return, $get_sport);
	array_push($return, $get_english);
	array_push($return, $get_programming);
	array_push($return, $get_database_managment);
	echo json_encode($return);
}
if($_GET['type']==6){
	//$array= json_decode();
	$db->QUERY("UPDATE student SET name='".$_POST['data_arr'][50][1]."', surname='".$_POST['data_arr'][50][2]."', missed_lessons='".$_POST['data_arr'][50][3]."', class='".$_POST['data_arr'][50][4]."' WHERE id=".$_POST['data_arr'][50][0]);
	$db->QUERY("UPDATE math SET score=".$_POST['data_arr'][0][0]." WHERE id=".$_POST['data_arr'][0][1]);
	$db->QUERY("UPDATE math SET score=".$_POST['data_arr'][1][0]." WHERE id=".$_POST['data_arr'][1][1]);
	$db->QUERY("UPDATE math SET score=".$_POST['data_arr'][2][0]." WHERE id=".$_POST['data_arr'][2][1]);
	$db->QUERY("UPDATE math SET score=".$_POST['data_arr'][3][0]." WHERE id=".$_POST['data_arr'][3][1]);
	$db->QUERY("UPDATE math SET score=".$_POST['data_arr'][4][0]." WHERE id=".$_POST['data_arr'][4][1]);
	$db->QUERY("UPDATE math SET score=".$_POST['data_arr'][5][0]." WHERE id=".$_POST['data_arr'][5][1]);
	$db->QUERY("UPDATE math SET score=".$_POST['data_arr'][6][0]." WHERE id=".$_POST['data_arr'][6][1]);
	$db->QUERY("UPDATE math SET score=".$_POST['data_arr'][7][0]." WHERE id=".$_POST['data_arr'][7][1]);
	$db->QUERY("UPDATE math SET score=".$_POST['data_arr'][8][0]." WHERE id=".$_POST['data_arr'][8][1]);
	$db->QUERY("UPDATE math SET score=".$_POST['data_arr'][9][0]." WHERE id=".$_POST['data_arr'][9][1]);
	$db->QUERY("UPDATE sport SET score=".$_POST['data_arr'][10][0]." WHERE id=".$_POST['data_arr'][10][1]);
	$db->QUERY("UPDATE sport SET score=".$_POST['data_arr'][11][0]." WHERE id=".$_POST['data_arr'][11][1]);
	$db->QUERY("UPDATE sport SET score=".$_POST['data_arr'][12][0]." WHERE id=".$_POST['data_arr'][12][1]);
	$db->QUERY("UPDATE sport SET score=".$_POST['data_arr'][13][0]." WHERE id=".$_POST['data_arr'][13][1]);
	$db->QUERY("UPDATE sport SET score=".$_POST['data_arr'][14][0]." WHERE id=".$_POST['data_arr'][14][1]);
	$db->QUERY("UPDATE sport SET score=".$_POST['data_arr'][15][0]." WHERE id=".$_POST['data_arr'][15][1]);
	$db->QUERY("UPDATE sport SET score=".$_POST['data_arr'][16][0]." WHERE id=".$_POST['data_arr'][16][1]);
	$db->QUERY("UPDATE sport SET score=".$_POST['data_arr'][17][0]." WHERE id=".$_POST['data_arr'][17][1]);
	$db->QUERY("UPDATE sport SET score=".$_POST['data_arr'][18][0]." WHERE id=".$_POST['data_arr'][18][1]);
	$db->QUERY("UPDATE sport SET score=".$_POST['data_arr'][19][0]." WHERE id=".$_POST['data_arr'][19][1]);
	$db->QUERY("UPDATE english SET score=".$_POST['data_arr'][20][0]." WHERE id=".$_POST['data_arr'][20][1]);
	$db->QUERY("UPDATE english SET score=".$_POST['data_arr'][21][0]." WHERE id=".$_POST['data_arr'][21][1]);
	$db->QUERY("UPDATE english SET score=".$_POST['data_arr'][22][0]." WHERE id=".$_POST['data_arr'][22][1]);
	$db->QUERY("UPDATE english SET score=".$_POST['data_arr'][23][0]." WHERE id=".$_POST['data_arr'][23][1]);
	$db->QUERY("UPDATE english SET score=".$_POST['data_arr'][24][0]." WHERE id=".$_POST['data_arr'][24][1]);
	$db->QUERY("UPDATE english SET score=".$_POST['data_arr'][25][0]." WHERE id=".$_POST['data_arr'][25][1]);
	$db->QUERY("UPDATE english SET score=".$_POST['data_arr'][26][0]." WHERE id=".$_POST['data_arr'][26][1]);
	$db->QUERY("UPDATE english SET score=".$_POST['data_arr'][27][0]." WHERE id=".$_POST['data_arr'][27][1]);
	$db->QUERY("UPDATE english SET score=".$_POST['data_arr'][28][0]." WHERE id=".$_POST['data_arr'][28][1]);
	$db->QUERY("UPDATE english SET score=".$_POST['data_arr'][29][0]." WHERE id=".$_POST['data_arr'][29][1]);
	$db->QUERY("UPDATE programming SET score=".$_POST['data_arr'][30][0]." WHERE id=".$_POST['data_arr'][30][1]);
	$db->QUERY("UPDATE programming SET score=".$_POST['data_arr'][31][0]." WHERE id=".$_POST['data_arr'][31][1]);
	$db->QUERY("UPDATE programming SET score=".$_POST['data_arr'][32][0]." WHERE id=".$_POST['data_arr'][32][1]);
	$db->QUERY("UPDATE programming SET score=".$_POST['data_arr'][33][0]." WHERE id=".$_POST['data_arr'][33][1]);
	$db->QUERY("UPDATE programming SET score=".$_POST['data_arr'][34][0]." WHERE id=".$_POST['data_arr'][34][1]);
	$db->QUERY("UPDATE programming SET score=".$_POST['data_arr'][35][0]." WHERE id=".$_POST['data_arr'][35][1]);
	$db->QUERY("UPDATE programming SET score=".$_POST['data_arr'][36][0]." WHERE id=".$_POST['data_arr'][36][1]);
	$db->QUERY("UPDATE programming SET score=".$_POST['data_arr'][37][0]." WHERE id=".$_POST['data_arr'][37][1]);
	$db->QUERY("UPDATE programming SET score=".$_POST['data_arr'][38][0]." WHERE id=".$_POST['data_arr'][38][1]);
	$db->QUERY("UPDATE programming SET score=".$_POST['data_arr'][39][0]." WHERE id=".$_POST['data_arr'][39][1]);
	$db->QUERY("UPDATE database_managment SET score=".$_POST['data_arr'][40][0]." WHERE id=".$_POST['data_arr'][40][1]);
	$db->QUERY("UPDATE database_managment SET score=".$_POST['data_arr'][41][0]." WHERE id=".$_POST['data_arr'][41][1]);
	$db->QUERY("UPDATE database_managment SET score=".$_POST['data_arr'][42][0]." WHERE id=".$_POST['data_arr'][42][1]);
	$db->QUERY("UPDATE database_managment SET score=".$_POST['data_arr'][43][0]." WHERE id=".$_POST['data_arr'][43][1]);
	$db->QUERY("UPDATE database_managment SET score=".$_POST['data_arr'][44][0]." WHERE id=".$_POST['data_arr'][44][1]);
	$db->QUERY("UPDATE database_managment SET score=".$_POST['data_arr'][45][0]." WHERE id=".$_POST['data_arr'][45][1]);
	$db->QUERY("UPDATE database_managment SET score=".$_POST['data_arr'][46][0]." WHERE id=".$_POST['data_arr'][46][1]);
	$db->QUERY("UPDATE database_managment SET score=".$_POST['data_arr'][47][0]." WHERE id=".$_POST['data_arr'][47][1]);
	$db->QUERY("UPDATE database_managment SET score=".$_POST['data_arr'][48][0]." WHERE id=".$_POST['data_arr'][48][1]);
	$db->QUERY("UPDATE database_managment SET score=".$_POST['data_arr'][49][0]." WHERE id=".$_POST['data_arr'][49][1]);

	$return=array();
	$get_data=$db->fetch_array("SELECT      st.name as name,
											st.id as id,
											st.surname as surname,
											st.class as class,
											st.missed_lessons as missed_lessons,
											round(avg(m.score),1) as avgm,
											round(avg(s.score),1) as avgs,
											round(avg(dm.score),1) as avgdm,
											round(avg(e.score),1) as avge,
											round(avg(pr.score),1) as avgpr
												 FROM student st
										 RIGHT JOIN math m ON st.id=m.student_id
										 RIGHT JOIN sport s ON st.id=s.student_id
										 RIGHT JOIN database_managment dm ON st.id=dm.student_id
										 RIGHT JOIN english e ON st.id=e.student_id
										 RIGHT JOIN programming pr ON st.id=pr.student_id WHERE st.id=".$_POST['data_arr'][50][0]);

	$get_math=$db->fetch_array("SELECT score, id FROM math WHERE student_id=".$_POST['data_arr'][50][0]);
	$get_sport=$db->fetch_array("SELECT score, id FROM sport WHERE student_id=".$_POST['data_arr'][50][0]);
	$get_database_managment=$db->fetch_array("SELECT score, id FROM database_managment WHERE student_id=".$_POST['data_arr'][50][0]);
	$get_programming=$db->fetch_array("SELECT score, id FROM programming WHERE student_id=".$_POST['data_arr'][50][0]);
	$get_english=$db->fetch_array("SELECT score, id FROM english WHERE student_id=".$_POST['data_arr'][50][0]);
	
	array_push($return, $get_data);
	array_push($return, $get_math);
	array_push($return, $get_sport);
	array_push($return, $get_english);
	array_push($return, $get_programming);
	array_push($return, $get_database_managment);
	echo json_encode($return);
}
if($_GET['type']==7){
	$return=array();
	if($_GET['return_type']==1){
		$first=1;
		$limit=$db->fetch_row("SELECT COUNT(*) FROM student");
		while($first<=$limit){
			 array_push($return, $db->fetch_array("SELECT st.id as id,
			 						(round(avg(m.score),1)+round(avg(s.score),1)+round(avg(dm.score),1)+round(avg(e.score),1)+round(avg(pr.score),1)) as total_score,
												st.name as name,
												st.surname as surname,
												st.class as class,
												2 as info_type,
												st.missed_lessons as missed_lessons,
												round(avg(m.score),1) as avgm,
												round(avg(s.score),1) as avgs,
												round(avg(dm.score),1) as avgdm,
												round(avg(e.score),1) as avge,
												round(avg(pr.score),1) as avgpr
													 FROM student st
											 RIGHT JOIN math m ON st.id=m.student_id
											 RIGHT JOIN sport s ON st.id=s.student_id
											 RIGHT JOIN database_managment dm ON st.id=dm.student_id
											 RIGHT JOIN english e ON st.id=e.student_id
											 RIGHT JOIN programming pr ON st.id=pr.student_id WHERE st.id=".$first));
			$first++;
		}
		echo json_encode($return);
	}
	else if($_GET['return_type']==2){
		$return=array();
		$first=1;
		$limit=$db->fetch_row("SELECT COUNT(*) FROM student");
		while($first<=$limit){
			 array_push($return, $db->fetch_array("SELECT st.id as id,
			 						(round(avg(m.score),1)+round(avg(s.score),1)+round(avg(dm.score),1)+round(avg(e.score),1)+round(avg(pr.score),1)) as total_score,
												st.name as name,
												st.surname as surname,
												st.class as class,
												2 as info_type,
												st.missed_lessons as missed_lessons,
												round(avg(m.score),1) as avgm,
												round(avg(s.score),1) as avgs,
												round(avg(dm.score),1) as avgdm,
												round(avg(e.score),1) as avge,
												round(avg(pr.score),1) as avgpr
													 FROM student st
											 RIGHT JOIN math m ON st.id=m.student_id
											 RIGHT JOIN sport s ON st.id=s.student_id
											 RIGHT JOIN database_managment dm ON st.id=dm.student_id
											 RIGHT JOIN english e ON st.id=e.student_id
											 RIGHT JOIN programming pr ON st.id=pr.student_id WHERE st.id=".$first));
			$first++;
		}
		usort($return, function($a, $b){
		    $a = $a[0]['total_score'];
		    $b = $b[0]['total_score'];

		    if ($a == $b) {
		        return 0;
		    }
		    return ($a > $b) ? -1 : 1;
		});
		echo json_encode($return);
	}
	else if($_GET['return_type']==3){
		$first=1;
		$limit=$db->fetch_row("SELECT COUNT(*) FROM student");
		while($first<=$limit){
			 array_push($return, $db->fetch_array("SELECT st.id as id,
												st.name as name,
												st.surname as surname,
												st.class as class,
												3 as info_type,
												st.missed_lessons as missed_lessons,
												round(avg(m.score),1) as avgm,
												round(avg(s.score),1) as avgs,
												round(avg(dm.score),1) as avgdm,
												round(avg(e.score),1) as avge,
												round(avg(pr.score),1) as avgpr
													 FROM student st
											 RIGHT JOIN math m ON st.id=m.student_id
											 RIGHT JOIN sport s ON st.id=s.student_id
											 RIGHT JOIN database_managment dm ON st.id=dm.student_id
											 RIGHT JOIN english e ON st.id=e.student_id
											 RIGHT JOIN programming pr ON st.id=pr.student_id WHERE st.id=".$first." AND 
											 ((SELECT avg(score) FROM math WHERE student_id=".$first.")>=4 AND 
											  (SELECT avg(score) FROM sport WHERE student_id=".$first.")>=4 AND
											  (SELECT avg(score) FROM database_managment WHERE student_id=".$first.")>=4 AND
											  (SELECT avg(score) FROM english WHERE student_id=".$first.")>=4 AND
											  (SELECT avg(score) FROM programming WHERE student_id=".$first.")>=4)"));
			$first++;
		}
		$return= array_filter($return, function($elem){
			if(!is_null($elem[0]['id'])){
				return $elem;
			}	
		});
		echo json_encode($return);
	}
}
if($_GET['type']==8){
	$return=array();
	$first=1;
		$limit=$db->fetch_row("SELECT COUNT(*) FROM student");
		while($first<=$limit){
			 array_push($return, $db->fetch_array("SELECT st.id as id,
			 						(round(avg(m.score),1)+round(avg(s.score),1)+round(avg(dm.score),1)+round(avg(e.score),1)+round(avg(pr.score),1)) as total_score,
												st.name as name,
												st.surname as surname,
												st.class as class,
												2 as info_type,
												st.missed_lessons as missed_lessons,
												round(avg(m.score),1) as avgm,
												round(avg(s.score),1) as avgs,
												round(avg(dm.score),1) as avgdm,
												round(avg(e.score),1) as avge,
												round(avg(pr.score),1) as avgpr
													 FROM student st
											 RIGHT JOIN math m ON st.id=m.student_id
											 RIGHT JOIN sport s ON st.id=s.student_id
											 RIGHT JOIN database_managment dm ON st.id=dm.student_id
											 RIGHT JOIN english e ON st.id=e.student_id
											 RIGHT JOIN programming pr ON st.id=pr.student_id WHERE st.id=".$first));
			$first++;
		}
		echo json_encode($return);
}	
?>