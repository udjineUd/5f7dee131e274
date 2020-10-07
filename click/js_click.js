<!-- 
var url_click = "click/db_click.php"; // เปลี่ยนที่จะให้ไปที่ไฟล์ db_xxx.php
var divShow_click = "#showOrder_click";  // เปลี่ยนที่จะให้แสดง Div ตรงนี้

//------------------------------------------------------------------------------------------------------------

function click_keep(names,urls){ // 

		//alert(names+urls);

		var dataSet_show_click = {
			name_click:$("#name_click").val()+names
			,url_click:$("#url_click").val()+urls
		
		};
		$.post(url_click,dataSet_show_click,function(resp){
			// $(divShow_click).html(resp);
		}); 
		
}

-->

