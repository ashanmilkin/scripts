var useragent = navigator.userAgent;

if (useragent.indexOf('MSIE') != -1) {				// iexplorer
} else if (useragent.indexOf('Gecko') != -1) {
	if (useragent.indexOf('Chrome') != -1) {		// chrome
		var plg_chrome = document.getElementById("AFP");
		if (plg_chrome) {
			alert(plg_chrome.Del());
			alert(plg_chrome.Get('id'));
			
			plg_chrome.Save("qwe", "value");
			alert(plg_chrome.Get('qwe'));
			
			plg_chrome.Save("qwe", null);
			alert(plg_chrome.Get('qwe'));
		}
	} else {										// mozilla
		var plg_firefox = document.createElement("object");
		plg_firefox.setAttribute("type", "application/afp");
		plg_firefox.setAttribute("id", "AFP");
		plg_firefox.setAttribute("width", 0);
		plg_firefox.setAttribute("height", 0);
		document.body.appendChild(plg_firefox);
		
		if (plg_firefox) {
			alert(plg_firefox.Get('id'));
			
			plg_firefox.Save("qwe", "firefox");
			alert(plg_firefox.Get('qwe'));
			
			plg_firefox.Save("qwe", null);
			alert(plg_firefox.Get('qwe'));
		}
	}
} else if (useragent.indexOf('Mozilla') != -1) {	// netspace
} else if (useragent.indexOf('Opera') != -1) {		// opera
		var plg_opera = document.createElement("object");
		plg_opera.setAttribute("type", "application/afp");
		plg_opera.setAttribute("id", "AFP");
		plg_opera.setAttribute("width", 0);
		plg_opera.setAttribute("height", 0);
		
		if (plg_opera) {
			document.body.appendChild(plg_opera);
			alert(plg_opera.Get('id'));
		}
}