$(document).ready(function(){

	var body = ['.read', '.create', '.update', '.delete', '.shure'];
	var link = ['.header1_read p', '.header1_create p', '.header1_update p', '.header1_delete p', 
				'.create_submit p', '.shure_button_yes p', '.shure_button_no p', '.delete_button p'];

	document.cookie = 'name=hallo;max-age=300';


	var cook = function(body){
		$(body).mousemove(function(){
			document.cookie = 'name=hallo;max-age=300';
		});
	};


	var func = function(links, bodi1, cleaner, active){
		$(links).click(function(){
			if(cleaner !== 0){clean()};
			if(active !== 0){
				$(bodi1).css({'display' : 'block'})
			}else{
				$(bodi1).css({'display' : 'none'})
			}	
		});
	};

	var clean = function(){
		for(var i = 0; i < body.length; i++){
			$(body[i]).css({'display' : 'none'})
		};
	};

	var over = function(){
		window.history.replaceState('', '', '/');
		window.history.replaceState('', '', '/');
		window.history.replaceState('', '', '/');
		window.location.href = '/';
		document.cookie	= 'name=hallo; max-age=0';
	};

	func(link[0], body[0]);
	func(link[1], body[1]);
	func(link[2], body[2]);
	func(link[3], body[3]);
	func(link[4], body[4], 0);
	func(link[5], body[4], 0, 0);
	func(link[6], body[4], 0, 0);
	func(link[7], body[4], 0);

	cook(body[0]);
	cook(body[1]);
	cook(body[2]);
	cook(body[4]);

	clean();
	$(body[0]).css({'display':'block'});

	setInterval(function(){
		if(!document.cookie){over();}
	}, 5000);

	$('.header1_exit p').click(function(){over();});

});