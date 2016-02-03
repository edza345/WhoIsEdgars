$(document).ready(function() {
	//// coment
	function getDetails(id){
		$.ajax({
			url: "ajax/ajax_backend.php?type=5&id="+id,
			dataType: "JSON",
			type: "GET",
			success: function(data){
				console.log(data);
				$(".detail_wrap").append("<div><span style='width:100px; display:inline-block;'>Name</span><input id='edit_name' style='margin-left:10px; margin-top:10px; width:250px;' type='text'/></div>"+
						"<div><span style='width:100px; display:inline-block;'>Surname</span><input id='edit_surname' style='margin-left:10px; margin-top:10px; width:250px;' type='text'/></div>"+
						"<div><span style='width:100px; display:inline-block;'>Class</span><select style='width:250px; margin-left:10px; margin-top:10px;' id='edit_class'>"+
						"</select></div>"+
						"<div><span style='width:100px; display:inline-block;'>Missed Lessons</span><input id='edit_missed_lessons' style='margin-left:10px; margin-top:10px; width:250px;' type='text'/></div>"+
						"<table class='detail_tab' style='width:98%; margin-top:20px;'>"+
							"<tr>"+
								"<td>Subject</td>"+
								"<td>1</td>"+
								"<td>2</td>"+
								"<td>3</td>"+
								"<td>4</td>"+
								"<td>5</td>"+
								"<td>6</td>"+
								"<td>7</td>"+
								"<td>8</td>"+
								"<td>9</td>"+
								"<td>10</td>"+
								"<td>Average</td>"+
							"</tr>"+
						"</table>"+
						"<input type='hidden' id='student_id_holder'/>"+
						"<center><input type='button' id='update_details' value='Update'  style='width:250px; margin-top:10px;'/></center>");
				$("#edit_name").val(data[0][0]['name']);
				$("#edit_surname").val(data[0][0]['surname']);
				$("#student_id_holder").val(data[0][0]['id']);
				$("#edit_missed_lessons").val(data[0][0]['missed_lessons'])
				$("#edit_class").append("<option"+(data[0][0]['class']=='A'? ' selected ':'')+" value='A'>A</option>");
				$("#edit_class").append("<option"+(data[0][0]['class']=='B'? ' selected ':'')+" value='B'>B</option>");
				$("#edit_class").append("<option"+(data[0][0]['class']=='C'? ' selected ':'')+" value='C'>C</option>");
				$("#edit_class").append("<option"+(data[0][0]['class']=='D'? ' selected ':'')+" value='D'>D</option>");
				$(".detail_tab").append("<tr class='detail_remove'><td>Mathematic</td><td class='for_submit'><input style='width:25px;' data-id='"+data[1][0]['id']+"' type='text' value='"+data[1][0]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[1][1]['id']+"' type='text' value='"+data[1][1]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[1][2]['id']+"' type='text' value='"+data[1][2]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[1][3]['id']+"' type='text' value='"+data[1][3]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[1][4]['id']+"' type='text' value='"+data[1][4]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[1][5]['id']+"' type='text' value='"+data[1][5]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[1][6]['id']+"' type='text' value='"+data[1][6]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[1][7]['id']+"' type='text' value='"+data[1][7]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[1][8]['id']+"' type='text' value='"+data[1][8]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[1][9]['id']+"' type='text' value='"+data[1][9]['score']+"' /></td><td>"+data[0][0]['avgm']+"</td></tr>");
				$(".detail_tab").append("<tr class='detail_remove'><td>Sport</td><td class='for_submit'><input style='width:25px;' data-id='"+data[2][0]['id']+"' type='text' value='"+data[2][0]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[2][1]['id']+"' type='text' value='"+data[2][1]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[2][2]['id']+"' type='text' value='"+data[2][2]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[2][3]['id']+"' type='text' value='"+data[2][3]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[2][4]['id']+"' type='text' value='"+data[2][4]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[2][5]['id']+"' type='text' value='"+data[2][5]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[2][6]['id']+"' type='text' value='"+data[2][6]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[2][7]['id']+"' type='text' value='"+data[2][7]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[2][8]['id']+"' type='text' value='"+data[2][8]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[2][9]['id']+"' type='text' value='"+data[2][9]['score']+"' /></td><td>"+data[0][0]['avgs']+"</td></tr>");
				$(".detail_tab").append("<tr class='detail_remove'><td>English</td><td class='for_submit'><input style='width:25px;' data-id='"+data[3][0]['id']+"' type='text' value='"+data[3][0]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[3][1]['id']+"' type='text' value='"+data[3][1]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[3][2]['id']+"' type='text' value='"+data[3][2]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[3][3]['id']+"' type='text' value='"+data[3][3]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[3][4]['id']+"' type='text' value='"+data[3][4]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[3][5]['id']+"' type='text' value='"+data[3][5]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[3][6]['id']+"' type='text' value='"+data[3][6]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[3][7]['id']+"' type='text' value='"+data[3][7]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[3][8]['id']+"' type='text' value='"+data[3][8]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[3][9]['id']+"' type='text' value='"+data[3][9]['score']+"' /></td><td>"+data[0][0]['avge']+"</td></tr>");
				$(".detail_tab").append("<tr class='detail_remove'><td>Programming</td><td class='for_submit'><input style='width:25px;' data-id='"+data[4][0]['id']+"' type='text' value='"+data[4][0]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[4][1]['id']+"' type='text' value='"+data[4][1]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[4][2]['id']+"' type='text' value='"+data[4][2]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[4][3]['id']+"' type='text' value='"+data[4][3]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[4][4]['id']+"' type='text' value='"+data[4][4]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[4][5]['id']+"' type='text' value='"+data[4][5]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[4][6]['id']+"' type='text' value='"+data[4][6]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[4][7]['id']+"' type='text' value='"+data[4][7]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[4][8]['id']+"' type='text' value='"+data[4][8]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[4][9]['id']+"' type='text' value='"+data[4][9]['score']+"' /></td><td>"+data[0][0]['avgpr']+"</td></tr>");
				$(".detail_tab").append("<tr class='detail_remove'><td>DataBase Managment</td><td class='for_submit'><input style='width:25px;' data-id='"+data[5][0]['id']+"' type='text' value='"+data[5][0]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[5][1]['id']+"' type='text' value='"+data[5][1]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[5][2]['id']+"' type='text' value='"+data[5][2]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[5][3]['id']+"' type='text' value='"+data[5][3]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[5][4]['id']+"' type='text' value='"+data[5][4]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[5][5]['id']+"' type='text' value='"+data[5][5]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[5][6]['id']+"' type='text' value='"+data[5][6]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[5][7]['id']+"' type='text' value='"+data[5][7]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[5][8]['id']+"' type='text' value='"+data[5][8]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[5][9]['id']+"' type='text' value='"+data[5][9]['score']+"' /></td><td>"+data[0][0]['avgdm']+"</td></tr>");
				$(".detail_wrap").dialog({
					modal: true,
					width: 800,
					height: 440,
					dialogClass: 'noTitleStuff',
					show: {
		      			effect: 'fade',
		        		duration: 250
		    		},
					hide: {
						effect: "fade",
						duration: 250
					},
					open: function(){
						jQuery('.ui-widget-overlay').bind('click', function() {
		            		jQuery('.detail_wrap').dialog('close');
			            });
			            $("#update_details").click(function(){
			            	$(this).prop("disabled", true);
			            	var data_arr= new Array();
			            	var counter=0;
			            	$(".detail_tab .detail_remove .for_submit").each(function(){
			            		data_arr[counter]= [$(this).find("input").val(), $(this).find("input").attr("data-id")];
			            		//console.log($(this).find("input").val());
			            		counter++;
			            	})
			            	data_arr[50]=[$("#student_id_holder").val(), $("#edit_name").val(), $("#edit_surname").val(), $("#edit_missed_lessons").val(), $("#edit_class").val(), $("#info_type").val()];
			            	console.log(data_arr);

							 $.ajax({
							 	url: "ajax/ajax_backend.php?type=6",
							 	dataType: "JSON",
							 	type: "POST",
							 	contentType: 'application/x-www-form-urlencoded',
							 	data:{
							 		'data_arr':data_arr
							 	},
							 	success: function(data){
							 		changes=1
							 		data_arr=[];
							 		$(".detail_remove").remove();
							 		$("#edit_class").empty();
							 		console.log(data);
							 		$("#update_details").prop("disabled", false);
							 		$("#edit_name").val(data[0][0]['name']);
									$("#edit_surname").val(data[0][0]['surname']);
									$("#student_id_holder").val(data[0][0]['id']);
									$("#edit_missed_lessons").val(data[0][0]['missed_lessons'])
									$("#edit_class").append("<option"+(data[0][0]['class']=='A'? ' selected ':'')+" value='A'>A</option>");
									$("#edit_class").append("<option"+(data[0][0]['class']=='B'? ' selected ':'')+" value='B'>B</option>");
									$("#edit_class").append("<option"+(data[0][0]['class']=='C'? ' selected ':'')+" value='C'>C</option>");
									$("#edit_class").append("<option"+(data[0][0]['class']=='D'? ' selected ':'')+" value='D'>D</option>");
							 		$(".detail_tab").append("<tr class='detail_remove'><td>Mathematic</td><td class='for_submit'><input style='width:25px;' data-id='"+data[1][0]['id']+"' type='text' value='"+data[1][0]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[1][1]['id']+"' type='text' value='"+data[1][1]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[1][2]['id']+"' type='text' value='"+data[1][2]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[1][3]['id']+"' type='text' value='"+data[1][3]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[1][4]['id']+"' type='text' value='"+data[1][4]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[1][5]['id']+"' type='text' value='"+data[1][5]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[1][6]['id']+"' type='text' value='"+data[1][6]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[1][7]['id']+"' type='text' value='"+data[1][7]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[1][8]['id']+"' type='text' value='"+data[1][8]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[1][9]['id']+"' type='text' value='"+data[1][9]['score']+"' /></td><td>"+data[0][0]['avgm']+"</td></tr>");
									$(".detail_tab").append("<tr class='detail_remove'><td>Sport</td><td class='for_submit'><input style='width:25px;' data-id='"+data[2][0]['id']+"' type='text' value='"+data[2][0]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[2][1]['id']+"' type='text' value='"+data[2][1]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[2][2]['id']+"' type='text' value='"+data[2][2]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[2][3]['id']+"' type='text' value='"+data[2][3]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[2][4]['id']+"' type='text' value='"+data[2][4]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[2][5]['id']+"' type='text' value='"+data[2][5]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[2][6]['id']+"' type='text' value='"+data[2][6]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[2][7]['id']+"' type='text' value='"+data[2][7]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[2][8]['id']+"' type='text' value='"+data[2][8]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[2][9]['id']+"' type='text' value='"+data[2][9]['score']+"' /></td><td>"+data[0][0]['avgs']+"</td></tr>");
									$(".detail_tab").append("<tr class='detail_remove'><td>English</td><td class='for_submit'><input style='width:25px;' data-id='"+data[3][0]['id']+"' type='text' value='"+data[3][0]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[3][1]['id']+"' type='text' value='"+data[3][1]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[3][2]['id']+"' type='text' value='"+data[3][2]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[3][3]['id']+"' type='text' value='"+data[3][3]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[3][4]['id']+"' type='text' value='"+data[3][4]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[3][5]['id']+"' type='text' value='"+data[3][5]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[3][6]['id']+"' type='text' value='"+data[3][6]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[3][7]['id']+"' type='text' value='"+data[3][7]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[3][8]['id']+"' type='text' value='"+data[3][8]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[3][9]['id']+"' type='text' value='"+data[3][9]['score']+"' /></td><td>"+data[0][0]['avge']+"</td></tr>");
									$(".detail_tab").append("<tr class='detail_remove'><td>Programming</td><td class='for_submit'><input style='width:25px;' data-id='"+data[4][0]['id']+"' type='text' value='"+data[4][0]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[4][1]['id']+"' type='text' value='"+data[4][1]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[4][2]['id']+"' type='text' value='"+data[4][2]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[4][3]['id']+"' type='text' value='"+data[4][3]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[4][4]['id']+"' type='text' value='"+data[4][4]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[4][5]['id']+"' type='text' value='"+data[4][5]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[4][6]['id']+"' type='text' value='"+data[4][6]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[4][7]['id']+"' type='text' value='"+data[4][7]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[4][8]['id']+"' type='text' value='"+data[4][8]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[4][9]['id']+"' type='text' value='"+data[4][9]['score']+"' /></td><td>"+data[0][0]['avgpr']+"</td></tr>");
									$(".detail_tab").append("<tr class='detail_remove'><td>DataBase Managment</td><td class='for_submit'><input style='width:25px;' data-id='"+data[5][0]['id']+"' type='text' value='"+data[5][0]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[5][1]['id']+"' type='text' value='"+data[5][1]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[5][2]['id']+"' type='text' value='"+data[5][2]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[5][3]['id']+"' type='text' value='"+data[5][3]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[5][4]['id']+"' type='text' value='"+data[5][4]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[5][5]['id']+"' type='text' value='"+data[5][5]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[5][6]['id']+"' type='text' value='"+data[5][6]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[5][7]['id']+"' type='text' value='"+data[5][7]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[5][8]['id']+"' type='text' value='"+data[5][8]['score']+"' /></td><td class='for_submit'><input style='width:25px;' data-id='"+data[5][9]['id']+"' type='text' value='"+data[5][9]['score']+"' /></td><td>"+data[0][0]['avgdm']+"</td></tr>");
							 		 
							 	}
							 })
			            });
					},
					close: function(){
						data_arr=[];	
		        		$(".detail_wrap").empty();
		        		if(changes==1){
			        		$.ajax({
								 url: "ajax/ajax_backend.php?type=7&return_type="+$("#info_type").val(),
								 dataType: "JSON",
								 type: "GET",
								 beforeSend: function(){
								 	$(".details").css("pointer-events", "none");
								 	$(".details").css("color", "gray");
								 	$(".details").html("loading");
								 },
								 success: function(data){
								 	$(".remove_rows").remove();
								 	console.log(data);
								 	for(var x in data){
									 	$(".backend_info").append("<tr class='remove_rows' style='margin-top:4px;'>"+
											"<td>"+data[x][0]['id']+"</td>"+						
											"<td>"+data[x][0]['name']+"</td>"+
											"<td>"+data[x][0]['surname']+"</td>"+
											"<td>"+data[x][0]['class']+"</td>"+
											"<td>"+data[x][0]['missed_lessons']+"</td>"+
											"<td>"+data[x][0]['avgm']+"</td>"+
											"<td>"+data[x][0]['avgs']+"</td>"+
											"<td>"+data[x][0]['avgdm']+"</td>"+
											"<td>"+data[x][0]['avgpr']+"</td>"+
											"<td>"+data[x][0]['avge']+"</td>"+
											"<td class='details' data-id='"+data[x][0]['id']+"' style='color:red; cursor:pointer;'>Details</td>"+
											"</tr>");
									}
									$(".details").bind("click", function(){
										getDetails($(this).attr("data-id"));
									}) 
								 }
							})
							changes=0;
						}		 		
		        	}
				})
			}
		})
	}
	changes=0;
	clicked=0;
    checkbtn=0;
    funtxt=0;
	 check_frame=0;
	$("body").fadeIn(1000);
	$(".top-nav-elem").slideUp(1);
	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage', 'last'],
		slidesNavigation: true,
		navigation: true,
		paddingTop: '5%',
		afterLoad: function(anchorLink, index){
			if(index==2){
				if(clicked==1){
					clicked=0;
				}
				else if(clicked==0){
					$(".top-nav-elem").stop();
					$(".top-nav-elem").animate({height:68},100);
					$(".top-nav-elem").find("img").animate({height:68, width:68, borderRadius:100},100);
					$(".tne2").animate({height: 85},100);
					$(".tne2").find("img").animate({width:85, height:85, borderRadius:0},100);
				}
				$(".s2i1, .s2c1").fadeIn(200, function(){
					$(".s2i1, .s2c1").animate({marginLeft:0, marginTop:0},280, function(){
						$(".s2i2").fadeIn(200,function(){
							$(".s2i2").animate({marginLeft:'80%', marginTop:0},280, function(){
								$(".s2i3").fadeIn(200, function(){
									$(".s2i3").animate({marginLeft:0, marginTop:'31%'},280, function(){
										$(".s2i4").fadeIn(200, function(){
											$(".s2i4").animate({marginTop:'31%', marginLeft:'80%'},280, function(){
												$(".s2i5").fadeIn(200, function(){
													$(".s2i5").animate({marginTop:0, marginLeft:'20%', width:'60%'},280, function(){
														$(".s2i6").fadeIn(200, function(){
															$(".s2i6").animate({marginTop:'31%', marginLeft:'20%', width:'60%'},280, function(){
																$(".s2i7").fadeIn(200, function(){
																	$(".s2i7").animate({width:'99%', height:'23.7%', marginLeft:'0.3%'},280);
																})
															});
														})
													});
												})
											});
										})
									})
								})
							});
						});	
					});
				})
			}
			if(index==1){
				if(clicked==1){
					clicked=0;
				}
				else if(clicked==0){
					$(".top-nav-elem").stop();
					$(".top-nav-elem").animate({height:68},100);
					$(".top-nav-elem").find("img").animate({height:68, width:68, borderRadius:100},100);
					$(".tne1").animate({height: 85},100);
					$(".tne1").find("img").animate({width:85, height:85, borderRadius:0},100);
				}
				$(".s1p1").fadeIn(1400, function(){
					if(funtxt==0){
						$(".s1p1").funnyText({
							fontSize: '96px',
							speed:300
						});
						
					}	
					$(".s1p2").fadeIn(1400, function(){
						if(funtxt==0){
							$(".s1p2").funnyText({
								fontSize: '64px',
								speed:300
							});
							
						}	
						$(".s1p3").fadeIn(1400, function(){
							if(funtxt==0){
								$(".s1p3").funnyText({
									fontSize: '96px',
									speed:300
								});
								
							}	
							$(".s1p4").fadeIn(1400, function(){
								if(funtxt==0){
									$(".s1p4").funnyText({
										fontSize: '64px',
										speed:300
									});
									funtxt++;
								}	
								$(".s1p5").fadeIn(1400, function(){

								});
							});
						})
					})
				})
			}
			if(index==3){
				if(clicked==1){
					clicked=0;
				}
				else if(clicked==0){
					$(".top-nav-elem").stop();
					$(".top-nav-elem").animate({height:68},100);
					$(".top-nav-elem").find("img").animate({height:68, width:68, borderRadius:100},100);
					$(".tne3").animate({height: 85},100);
					$(".tne3").find("img").animate({width:85, height:85, borderRadius:0},100);
				}
				$(".s3i1").fadeIn(200, function(){
					$(".s3i1").animate({marginLeft:'84%'},200, function(){
						$(".s3i2").fadeIn(200, function(){
							$(".s3i2").animate({marginLeft:'68%'},200, function(){
								$(".s3i3").fadeIn(200, function(){
									$(".s3i3").animate({marginLeft:'52%'},200, function(){
										$(".kreissp").slideDown(1000, function(){
											$(".s3i4").fadeIn(1000, function(){
												$(".s3i4").animate({marginLeft:'36%'},850, function(){
													$(".s3i5").fadeIn(200, function(){
														$(".s3i5").animate({marginLeft:'92%'},200, function(){
															$(".s3i6").fadeIn(200, function(){
																$(".s3i6").animate({marginLeft:'76%'},200, function(){
																	$(".jep").slideDown(1000, function(){
																		$(".kbanner").animate({opacity:1, marginLeft:'1%'},1000,function(){
																			$(".ktbanner").slideDown(1000);
																		});
																	});
																});
															})
														})
													})
												});
											})
										});
									});
								})
							})
						})
					});
				})
			}
			if(index==4){
				if(clicked==1){
					clicked=0;
				}
				else if(clicked==0){
					$(".top-nav-elem").stop();
					$(".top-nav-elem").animate({height:68},100);
					$(".top-nav-elem").find("img").animate({height:68, width:68, borderRadius:100},100);
					$(".tne4").animate({height: 85},100);
					$(".tne4").find("img").animate({width:85, height:85, borderRadius:0},100);
				}
				$(".s4d1").animate({opacity:1, marginLeft:'1%'},1000, function(){
					$(".s4i1").slideDown(200, function(){
						$(".s4i2").slideDown(200, function(){
							$(".s4i3").slideDown(200, function(){
								$(".s4i4").slideDown(200, function(){
									$(".s4i5").slideDown(200, function(){
										$(".s4i6").slideDown(200, function(){
											$(".s4i7").slideDown(200, function(){
												$(".s4i8").slideDown(200, function(){
													$(".s4i9").slideDown(200, function(){
														$(".s4bg").animate({marginTop:'-1%', opacity:1},1200, function(){
															$(".s4i1").animate({borderTopLeftRadius: "100%"},800);
															$(".s4i2").animate({borderTopLeftRadius: "5%", borderTopRightRadius: "5%", marginTop: "-0.3%"},800);
															$(".s4i6").animate({borderBottomRightRadius: "5%", borderTopRightRadius: "5%", marginLeft: "33.4%"},800);
															$(".s4i8").animate({borderBottomLeftRadius: "5%", borderBottomRightRadius: "5%", marginTop: "33.25%"},800);
															$(".s4i3").animate({borderTopRightRadius: "100%"},800);
															$(".s4i7").animate({borderBottomLeftRadius: "100%"},800);
															$(".s4i5").animate({borderRadius: "100%"},800);
															$(".s4i9").animate({borderBottomRightRadius: "100%"},800);
															$(".s4bg, .s4d2").addClass("s4bg_shadow");
														});
													});
												})
											})
										})
									})
								})
							})
						})
					});
				});
				$(".s4d2").animate({opacity:1, marginRight:'1%'},1000, function(){
					$(".s4p1").slideDown(1500);
				});
			}
			if(index==5){
				if(clicked==1){
					clicked=0;
				}
				else if(clicked==0){
					$(".top-nav-elem").stop();
					$(".top-nav-elem").animate({height:68},100);
					$(".top-nav-elem").find("img").animate({height:68, width:68, borderRadius:100},100);
					$(".tne5").animate({height: 85},100);
					$(".tne5").find("img").animate({width:85, height:85, borderRadius:0},100);
				}
				$(".s5d1").animate({opacity:1, marginTop:'0%'},1500, function(){
					$(".backendnav").fadeIn(500, function(){
						if(checkbtn==0){
							//$("#order").prop("disabled", true);
							$("#sort").prop("disabled", true);
							$("#order").prop("disabled", true);
							$("#drop").prop("disabled", true);
							$("#generate").prop("disabled", true);
							checkbtn=checkbtn+1;
						}	
					});
				});
				
				$(".s5d2").animate({opacity:1, marginBottom:'0%'},1500, function(){
					if(check_frame==0){
						$(this).append("<iframe class='frameshadow' scrolling='no' style='width:97%; height:70%; margin-left:1.2%; margin-top:3%;  border-radius:15px;'src='http://spacewar.net16.net/'></iframe>");
						check_frame++;
						$(this).append("<center><div class='s5p2'>I use html and css for frontend design. All client side functions are made with Java script, mostly with Jquery lib. I can use diffrent libs and can find rational solutions for problems. In this example I have made game only with Jquery functions .</div></center>");
					}
				});
			}
			if(index==6){
				if(clicked==1){
					clicked=0;
				}
				else if(clicked==0){
					$(".top-nav-elem").stop();
					$(".top-nav-elem").animate({height:68},100);
					$(".top-nav-elem").find("img").animate({height:68, width:68, borderRadius:100},100);
					$(".tne6").animate({height: 85},100);
					$(".tne6").find("img").animate({width:85, height:85, borderRadius:0},100);
				}
			}
		}
	});
	$(".top-nav-elem:first-child").slideDown(150, function(){
		$(this).next().slideDown(150, function(){
			$(this).next().slideDown(150, function(){
				$(this).next().slideDown(150, function(){
					$(this).next().slideDown(150, function(){
						$(this).next().slideDown(150);
					});
				});
			});
		});
	});
	$(".tne1").animate({height: 85},100);
	$(".tne1").find("img").animate({width:85, height:85, borderRadius:0},100);
	$(".top-nav-elem").click(function(){
		clicked=1;
		$(".top-nav-elem").stop();
		$(".top-nav-elem").animate({height:68},100);
		$(".top-nav-elem").find("img").animate({height:68, width:68, borderRadius:100},100);
		$(this).animate({height: 85},100);
		$(this).find("img").animate({height: 85, width:85, borderRadius:0},100);
	});
	$("#generate").click(function(){
		var check = confirm("Are you sure, you want to delete all data and generate it randomly again ? This process will take aproximetly 3 mins !");
		if(check==true){
			$("#show").prop("disabled", true);
			$("#order").prop("disabled", true);
			$("#generate").prop("disabled", true);
			$("#sort").prop("disabled", true);
			$(".backend_info").prepend("<center><div class='forremove' style='font-size:36px; width:100%; font-family:impact;'>Loading(1-3mins)...</center>")
			$.ajax({
				url: "ajax/ajax_backend.php?type=1",
				dataType: "JSON",
				type: "GET",
				success: function(data){
					$(".forremove").fadeOut(500, function(){$(this).remove();});
					$(".remove_rows").remove();
					$("#generate").prop("disabled", false);
					$("#order").prop("disabled", false);
					$("#sort").prop("disabled", false);
					$("#drop").prop("disabled", false);
					$("#generate").val("REgenerate tables ?!");
					$("#info_type").val(data[0][0]['info_type']);
					console.log(data);
					for(var x in data){
						$(".backend_info").append("<tr class='remove_rows' style='margin-top:4px;'>"+
							"<td>"+data[x][0]['id']+"</td>"+						
							"<td>"+data[x][0]['name']+"</td>"+
							"<td>"+data[x][0]['surname']+"</td>"+
							"<td>"+data[x][0]['class']+"</td>"+
							"<td>"+data[x][0]['missed_lessons']+"</td>"+
							"<td>"+data[x][0]['avgm']+"</td>"+
							"<td>"+data[x][0]['avgs']+"</td>"+
							"<td>"+data[x][0]['avgdm']+"</td>"+
							"<td>"+data[x][0]['avgpr']+"</td>"+
							"<td>"+data[x][0]['avge']+"</td>"+
							"<td class='details' data-id='"+data[x][0]['id']+"' style='color:red; cursor:pointer;'>Details</td>"+
							"</tr>");
					}
					$(".details").bind("click", function(){
						getDetails($(this).attr("data-id"));
					})
				}
			})
		}
	})
	$("#show").click(function(){
		$("#show").prop("disabled", true);
		$("#order").prop("disabled", true);
		$("#generate").prop("disabled", true);
		$("#sort").prop("disabled", true);
		$.ajax({
			url: "ajax/ajax_backend.php?type=8",
			dataType: "JSON",
			type: "GET",
			success: function(data){
				$(".remove_rows").remove();
				$("#order").prop("disabled", false);
				$("#generate").prop("disabled", false);
				$("#sort").prop("disabled", false);
				$("#show").prop("disabled", false);
				$("#info_type").val(data[0][0]['info_type']);
				console.log(data);
				for(var x in data){
					$(".backend_info").append("<tr class='remove_rows' style='margin-top:4px;'>"+
						"<td>"+data[x][0]['id']+"</td>"+						
						"<td>"+data[x][0]['name']+"</td>"+
						"<td>"+data[x][0]['surname']+"</td>"+
						"<td>"+data[x][0]['class']+"</td>"+
						"<td>"+data[x][0]['missed_lessons']+"</td>"+
						"<td>"+data[x][0]['avgm']+"</td>"+
						"<td>"+data[x][0]['avgs']+"</td>"+
						"<td>"+data[x][0]['avgdm']+"</td>"+
						"<td>"+data[x][0]['avgpr']+"</td>"+
						"<td>"+data[x][0]['avge']+"</td>"+
						"<td class='details' data-id='"+data[x][0]['id']+"' style='color:red; cursor:pointer;'>Details</td>"+
						"</tr>");
				}
				$(".details").bind("click", function(){
					getDetails($(this).attr("data-id"));
				})
			}
		})
	})
	$("#order").click(function(){
		$("#show").prop("disabled", true);
		$("#order").prop("disabled", true);
		$("#generate").prop("disabled", true);
		$("#sort").prop("disabled", true);
		$.ajax({
			url: "ajax/ajax_backend.php?type=2",
			dataType: "JSON",
			type: "GET",
			success: function(data){
				$(".remove_rows").remove();
				$("#order").prop("disabled", false);
				$("#generate").prop("disabled", false);
				$("#sort").prop("disabled", false);
				$("#show").prop("disabled", false);
				$("#info_type").val(data[0][0]['info_type']);
				console.log(data);
				for(var x in data){
					$(".backend_info").append("<tr class='remove_rows' style='margin-top:4px;'>"+
						"<td>"+data[x][0]['id']+"</td>"+						
						"<td>"+data[x][0]['name']+"</td>"+
						"<td>"+data[x][0]['surname']+"</td>"+
						"<td>"+data[x][0]['class']+"</td>"+
						"<td>"+data[x][0]['missed_lessons']+"</td>"+
						"<td>"+data[x][0]['avgm']+"</td>"+
						"<td>"+data[x][0]['avgs']+"</td>"+
						"<td>"+data[x][0]['avgdm']+"</td>"+
						"<td>"+data[x][0]['avgpr']+"</td>"+
						"<td>"+data[x][0]['avge']+"</td>"+
						"<td class='details' data-id='"+data[x][0]['id']+"' style='color:red; cursor:pointer;'>Details</td>"+
						"</tr>");
				}
				$(".details").bind("click", function(){
					getDetails($(this).attr("data-id"));
				})
			}
		})
	})
	$("#sort").click(function(){
		$("#show").prop("disabled", true);
		$("#order").prop("disabled", true);
		$("#generate").prop("disabled", true);
		$("#sort").prop("disabled", true);
		$.ajax({
			url: "ajax/ajax_backend.php?type=3",
			dataType: "JSON",
			type: "GET",
			success: function(data){
				console.log(data);
				$(".remove_rows").remove();
				$("#order").prop("disabled", false);
				$("#generate").prop("disabled", false);
				$("#sort").prop("disabled", false);
				$("#show").prop("disabled", false);
				console.log(data);
				for(var x in data){
					$(".backend_info").append("<tr class='remove_rows' style='margin-top:4px;'>"+
						"<td>"+data[x][0]['id']+"</td>"+						
						"<td>"+data[x][0]['name']+"</td>"+
						"<td>"+data[x][0]['surname']+"</td>"+
						"<td>"+data[x][0]['class']+"</td>"+
						"<td>"+data[x][0]['missed_lessons']+"</td>"+
						"<td>"+data[x][0]['avgm']+"</td>"+
						"<td>"+data[x][0]['avgs']+"</td>"+
						"<td>"+data[x][0]['avgdm']+"</td>"+
						"<td>"+data[x][0]['avgpr']+"</td>"+
						"<td>"+data[x][0]['avge']+"</td>"+
						"<td class='details' data-id='"+data[x][0]['id']+"' style='color:red; cursor:pointer;'>Details</td>"+
						"</tr>");
				}
				$(".details").bind("click", function(){
					getDetails($(this).attr("data-id"));
				})
			}
		})
	})
});