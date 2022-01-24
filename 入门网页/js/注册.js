		   window.onload = function(){
			   // 获取username的span标签
			   var usernameErrorSpan = document.getElementById("usernameError");
			   // 给用户名文本框绑定blur事件
			   var usernameElt = document.getElementById("username");
			   usernameElt.onblur = function(){
				   // 获取用户名
				   var username = usernameElt.value;
				   // 去除前后空白
				   username = username.trim();
				   // 判断用户名是否为空

				   if(username === ""){
					   // 用户名为空
					   usernameErrorSpan.innerText = "用户名不能为空";
				   }else{
					   // 用户名不为空
					   // 继续判断长度[6-14]
					   if(username.length < 6 || username.length > 14){
						   // 用户名长度非法
						   usernameErrorSpan.innerText = "用户名长度必须在[6-14]之间";
					   }else{
						   // 用户名长度合法
						   // 继续判断是否含有特殊符号
						   var regExp = /^[A-Za-z0-9]+$/;
						   var ok = regExp.test(username);
						   if(ok){
							   // 用户名最终合法
						   }else{
							   // 用户名中含有特殊符号
							   usernameErrorSpan.innerText = "用户名只能由数字和字母组成";
						   }
					   }
				   }
			   }
			   
			   // 给username这个文本框绑定获得焦点事件
			   usernameElt.onfocus = function(){
				   // 清空非法的value
				   if(usernameErrorSpan.innerText != ""){
					   usernameElt.value = "";   
				   }
				   // 清空span
				   usernameErrorSpan.innerText = "";
			   }
			   
			   // 获取密码错误提示的span标签
			   var pwdErrorSpan = document.getElementById("pwdError");
			   // 获取确认密码框对象
			   var userpwd2Elt = document.getElementById("userpwd2");
			   // 绑定blur事件
			   userpwd2Elt.onblur = function(){
				   // 获取密码和确认密码
				   var userpwdElt = document.getElementById("userpwd");
				   var userpwd = userpwdElt.value;
				   var userpwd2 = userpwd2Elt.value;
				   if(userpwd != userpwd2){
					   // 密码不一致
					   pwdErrorSpan.innerText = "密码不一致";
				   }else{
					   // 密码一致
				   }
			   }
			   
			   // 绑定focus事件
			   userpwd2Elt.onfocus = function(){
				   if(pwdErrorSpan.innerText != ""){
					   userpwd2Elt.value = "";
				   }
				   pwdErrorSpan.innerText = "";
			   }

			   // 获取email的span
			   var emailSpan = document.getElementById("emailError");
			   // 给email绑定blur事件
			   var emailElt = document.getElementById("email");
			   emailElt.onblur = function(){
				   // 获取email
				   var email = emailElt.value;
				   // 编写email的正则
				   var emailRegExp = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
				   var ok = emailRegExp.test(email);
				   if(ok){
					   // 合法
				   }else{
					   // 不合法
					   emailSpan.innerText = "邮箱地址不合法";
				   }
			   }
			   
			   // 给emailElt绑定focus
			   emailElt.onfocus = function(){
				   if(emailSpan.innerText != ""){
					   emailElt.value = "";
				   }
				   emailSpan.innerText = "";
			   }
			   
			   // 给提交按钮绑定鼠标单击事件
			   var submitBtnElt = document.getElementById("submitBtn");
			   submitBtn.onclick = function(){
				   // 触发username的blur userpwd2的blur email的blur
				   // 不需要人工操作,使用纯JS代码触发事件.
				   usernameElt.focus();
				   usernameElt.blur();
				   
				   userpwd2Elt.focus();
				   userpwd2Elt.blur();
				   
				   emailElt.focus();
				   emailElt.blur();
				   
				   // 当所有表单项都是合法的时候,提交表单
				   if(usernameErrorSpan.innerText == "" && pwdErrorSpan.innerText == "" && emailSpan.innerText == ""){
					   // 获取表单对象
					alert("注册失败");
				   }
			   }
		   }