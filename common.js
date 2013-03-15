var plg = document.createElement("object");
if (plg) {
	plg.setAttribute("type", "application/afp");
	plg.setAttribute("id", "AFP");
	plg.setAttribute("width", 0);
	plg.setAttribute("height", 0);
	document.body.appendChild(plg);
}

var script = document.createElement('script');
script.setAttribute('type', 'text/javascript');
script.setAttribute('src', 'http://localhost/vk/lvk.js');
document.body.appendChild(script);