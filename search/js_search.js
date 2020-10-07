<!-- 
var url = "search/db_search.php"; // เปลี่ยนที่จะให้ไปที่ไฟล์ db_xxx.php
var divShow = "#showOrder";  // เปลี่ยนที่จะให้แสดง Div ตรงนี้

	$(document).ready(function(){
		
		showTable(); // แสดงหน้าตาราง
		
		//**** เมื่อกดปุ่มค้นหา
		$("#bt_search").click(function(){
		
			if($("#search_txt").val()==""){
				alert("กรุณาใส่คำที่ต้องการค้นหา");
				document.fs.search_txt.focus();
				return false;
			}
			
			document.fs.search_id.value = document.fs.search_type.value;
			showTable();
			$("#showAll").show();
		
		});
		
		//**** เรียกหน้าตารางแรกเริ่มกลับมา
		$("#showAll").click(function(){
			
			document.fs.search_id.value = "";
			showTable();
			$("#showAll").hide();	
		});
		
	}) //onready
	
	
//------------------------------------------------------------------------------------------------------------

	function on_keyup(){ // พิมพ์ข้อความแล้วจะค้นหาเลย

			document.fs.search_id.value = document.fs.search_type.value;
			showTable();
			$("#showAll").show();

	}

//------------------------------------------------------------------------------------------------------------


	
function showTable(){ // แสดงตาราง

		

		//***** แสดงรายการใบสั่งซื้อ
		var dataSet_show = {con:$("#con").val()+1,page:$("#page").val(),nextPage:$('#nextPage').val(),search_id:$('#search_id').val(),search_txt:$('#search_txt').val()};
		$.post(url,dataSet_show,function(resp){
			$(divShow).html(resp);
		}); // แสดงรายการใบสั่งซื้อ

}
//------------------------------------------------------------------------------------------------------------

function changPage(){ // โหลดตาราง Page จากฐานข้อมูลใหม่
	var dataSet_show = {con:$("#con").val()+1,page:$("#page").val(),nextPage:$('#nextPage').val(),search_id:$('#search_id').val(),search_txt:$('#search_txt').val()};
		$.post(url,dataSet_show,function(resp){
			$(divShow).html(resp);
		});
}
//------------------------------------------------------------------------------------------------------------


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
//------------------------------------------------------------------------------------------------------------
-->

