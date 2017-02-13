$(document).ready(function(){

	var link = ['.bar_text-button1 input', 
				'.bar_text-button2 input',
				'.byTeach_button input',  
				'.byRoom_button input', 
				'.bar_auth img', 
				'.auth_button p',
				'.bar_text-button3 input',
				'.byGroup_button input'];
				
	var body = ['.byTeach', 
				'.byRoom', 
				'.face',
				'.organiser',
				'.auth',
				'.info',
				'.byGroup'];

	var bread = [' вчителі', 
				 ' аудиторії', 
				 ' відповідь', 
				 ' авторизація',
				 ' групи'];

	var func = function(links, bodi1, breads, bodi2){
		$(links).click(function(){
			clean();
			$(bodi1).css({'display' : 'block'});
			$(bodi2).css({'display' : 'block'});
			$('.bread_text p').append(breads);
		});
	};

	var clean = function(){
		for(var i = 0; i < body.length; i++){
			$(body[i]).css({'display' : 'none'})
		};
		$('.bread_text p').html('nubip.edu.ua >');
	};


	func(link[0], body[0], bread[0]);
	func(link[2], body[2], bread[0]);
// ####################################################

	func(link[1], body[1], bread[1]);

// // #########################################################

	func(link[2], body[2], bread[2], body[3]);
	func(link[3], body[2], bread[2], body[3]);

// ##########################

	func(link[4], body[4], bread[3]);
	func(link[5], body[5], bread[3], body[4]);

// ###########################

	func(link[6], body[6], bread[4]);
	func(link[7], body[2], bread[4], body[3]);

// отправка формы на сервер

	$('#un').val('');
	$('#pw').val('');
	$('.form').submit(function(){
		$.ajax({
			method: 'POST',
			url: '/',
			data: $(this).serialize(),
		});
	});

// фокусировка на формы

	$('.bar_text-button1 input').click(function(){
		$('.byTeach_text_input input').focus();
	});
	
	$('.bar_text-button2 input').click(function(){
		$('.byRoom_text_input input').focus();
	});

	$('.bar_text-button3 input').click(function(){
		$('.byGroup_text_input input').focus();
	});

	$('.bar_auth').click(function(){
		$('.auth_login form input:nth-child(1)').focus();
	});


	(($('.byTeach_button input')) ||
	 ($('.byRoom_button input')) || 
	 ($('.byGroup_button input'))).click(function(){
	 	$('.fc-right button').click();
	 });

// органайзер лицевой

	$('.organiser_body').fullCalendar({
		defaultDate: '2016-09-12',
		editable: true,
		eventLimit: true, // allow "more" link when too many events
		events: [
			{
				title: 'All Day Event',
				start: '2016-09-01'
			},
			{
				title: 'Long Event',
				start: '2016-09-07',
				end: '2016-09-10'
			},
			{
				id: 999,
				title: 'Repeating Event',
				start: '2016-09-09T16:00:00'
			},
			{
				id: 999,
				title: 'Repeating Event',
				start: '2016-09-16T16:00:00'
			},
			{
				title: 'Conference',
				start: '2016-09-11',
				end: '2016-09-13'
			},
			{
				title: 'Meeting',
				start: '2016-09-12T10:30:00',
				end: '2016-09-12T12:30:00'
			},
			{
				title: 'Lunch',
				start: '2016-09-12T12:00:00'
			},
			{
				title: 'Meeting',
				start: '2016-09-12T14:30:00'
			},
			{
				title: 'Happy Hour',
				start: '2016-09-12T17:30:00'
			},
			{
				title: 'Dinner',
				start: '2016-09-12T20:00:00'
			},
			{
				title: 'Birthday Party',
				start: '2016-09-13T07:00:00'
			},
			{
				title: 'Click for Google',
				url: 'http://google.com/',
				start: '2016-09-28'
			}
		]
	});
});
	