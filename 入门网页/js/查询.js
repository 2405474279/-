window.onload = function(){
	var ss = document.getElementById("ssk");	
	 ss.onkeydown = function(event){
					  if(event.keyCode === 13){
						var yh = document.getElementById("ssk").value;
						alert("您输入的"+yh+"查询不到");
						 // window.open('http://www.baidu.com/s?word=');
					  }
				  }
	}