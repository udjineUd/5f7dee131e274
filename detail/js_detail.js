<!-- 
var url = "detail/db_detail.php"; // เปลี่ยนที่จะให้ไปที่ไฟล์ db_xxx.php


	$(document).ready(function(){
	
		show_comment()
		
	}) //onready
	

//------------------------------------------------------------------------------------------------------------

	
function show_comment(){ // แสดงตาราง
		
				
		var dataSet_show = {con:$("#con").val()+"1",page:$("#page").val(),nextPage:$('#nextPage').val(),search_id:$('#search_id').val(),search_txt:$('#search_txt').val()};
		$.post(url,dataSet_show,function(resp){
			$("#show_comment").html(resp);
			
		}); 
		
}
//------------------------------------------------------------------------------------------------------------

function changPage(){ // โหลดตาราง Page จากฐานข้อมูลใหม่
	var dataSet_show = {con:$("#con").val()+"1",page:$("#page").val(),nextPage:$('#nextPage').val(),search_id:$('#search_id').val(),search_txt:$('#search_txt').val()};
		$.post(url,dataSet_show,function(resp){
			$("#show_comment").html(resp);
		});
}
//------------------------------------------------------------------------------------------------------------

function add_comment(){ // โหลดตาราง Page จากฐานข้อมูลใหม่
	var dataSet_show = {   con:$("#con").val()+"2"
						   ,name:$("#name").val()
						   ,comment:$("#comment").val()
						   ,search_txt:$('#search_txt').val()
						};
						
		$.post(url,dataSet_show,function(resp){
			
			//$("#show_comment").html(resp);]
			document.f_comment.comment.value ="";
			show_comment();
			
			
		});
}

//------------------------------------------------------------------------------------------------------------

function check_num(e){ // ใส่ได้แต่ตัวเลข ใน TEXT BOX เท่านั้น
   var keyPressed;
   
   if(window.event){
      keyPressed = window.event.keyCode; // IE
	   if (keyPressed==8) window.event.returnValue = true;
       if ((keyPressed < 45) || (keyPressed > 57)) window.event.returnValue = false;
   }else{
      keyPressed = e.which; // Firefox 
	   if (keyPressed==8) window.event.returnValue = true;
       if ((keyPressed < 45) || (keyPressed > 57)) keyPressed = e.preventDefault();
    }
	
	// การนำไปใช้ <input type='text' name='test' onkeypress='check_num(event)' />
} //

//-------------------------------------------------------------------------------------------------------------

function del_comment(id_comment_val){

	var dataSet_show = {   con:$("#con").val()+"3"
						   ,id_comment:$("#id_comment").val()+id_comment_val
						   ,search_txt:$('#search_txt').val()
						   
						};
						
		$.post(url,dataSet_show,function(resp){
			
			//$("#show_comment").html(resp);
			show_comment();
			
			
		});

}

//-------------------------------------------------------------------------------------------------------------

function chk_void(){

	if(document.f_comment.name.value ==""){
	
		alert('กรุณาใส่ชื่อของคุณก่อน');
		return false;
	
	}
	
	else if(document.f_comment.comment.value ==""){
	
		alert('กรุณาใส่ข้อความแสดงความคิดเห็น');
		return false;
	}
	
}

//-------------------------------------------------------------------------------------------------------------
/*
function checkKeycode(e) {

	var keycode;

	if (window.event) keycode = window.event.keyCode; // ใช้ IE อ่ะ

	else if (e) keycode = e.which; // ใช้ Firefox เน่าะ
	
	if(keycode==13){ //กรณีที่กดปุ่ม Enter ให้ทำการค้นหา
			if($("#search_txt").val()==""){
				alert("กรุณาใส่คำที่ต้องการค้นหา");
				document.fs.search_txt.focus();
				return false;
			}
			document.fs.search_type.focus();
			document.fs.search_id.value = document.fs.search_type.value;
			showTable();
			$("#showAll").show();
	}

	//alert("keycode: " + keycode); //เด้ง popup มาดูดิ๊ว่า key code คืออะไร

}
	document.onkeydown = checkKeycode //กดปุ่มเมื่อไหร่ก็เรียกฟังก์ชั่น checkKeycode เล่ย!
*/
//------------------------------------------------------------------------------------------------------------

function set_online(){ // เช็คการออนไลน์

	var dataSet_show = {con:$("#con").val()+"23456789"}
	$.post(url,dataSet_show);

}

function set_offline(){ // เช็คการออนไลน์

	var dataSet_show = {con:$("#con").val()+"98765432"}
	$.post(url,dataSet_show);

}

-->

