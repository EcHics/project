$(document).ready(function() {



	$('.nav li:not(#avatar,#avatar_name,.colors)').click(function(e) {
		e.preventDefault();
		$("li").removeClass('active');
		$(this).addClass('active');
	  

	});



	$('.nav-stacked').on('mouseenter', '#avatar_name', function() {
		$('#avatar_name_small').text("Every great journey begins with a single step");


	});
	$('.nav-stacked').on('mouseleave', '#avatar_name', function() {
		$('#avatar_name_small').text("Mario Ercegovac");


	});


	$('.main').on('mouseenter', '#convert_date', function() {
		$('#convert_date').text("Started 10/9/2016 at 5:05 PM");


	});
	$('.main').on('mouseleave', '#convert_date', function() {
		$('#convert_date').text("Started 9/10/2016 at 17:05");


	});

	$('.main').on('mouseenter', '#convert_languages', function() {
		$('#convert_languages').text("More are coming!");


	});
	$('.main').on('mouseleave', '#convert_languages', function() {
		$('#convert_languages').text("HTML/HTML5,CSS/CSS3,Javascript,Jquery,PHP,MySQL");


	});

  $('.nav-stacked').on('click', '.home', function() {

		$('.home_wrapper').show();
	  $('.portfolio_wrapper').hide();
	    $('.about_wrapper').hide();
	$('.contact_wrapper').hide();
	$('.main').removeClass('main_about');
	
	    
		


	});
  
  	$('.nav-stacked').on('click', '.portfolio', function() {

		
 $('.home_wrapper').hide();
	    $('.about_wrapper').hide();
	$('.contact_wrapper').hide();
	  $('.portfolio_wrapper').html("");



	});

	$('.nav-stacked').on('click', '.about_me', function() {

		 $('.home_wrapper').hide();
	    $('.portfolio_wrapper').hide();
	$('.contact_wrapper').hide();
	  $('.about_wrapper').html("");
		$('.main').addClass('main_about');
		$('.main').append('<div class="about_wrapper"><h4>Name</h4><br><p>Mario Ercegovac</p><br><h4>Age</h4><br><p>18</p><br><h4>Country</h4><br><p>Croatia</p><br><h4>Programming languages I know</h4><br><p  id="convert_languages">HTML/HTML5,CSS/CSS3,Javascript,Jquery,PHP,MySQL</p><br><h4>Time spent creating this page</h4><br><p style="display: inline;" id="convert_date">Started 9/10/2016 at 17:05</p></div>');
		$('.main h4').draggable({
			containment: ".main"
		});
		$('.main p ').draggable({
			containment: ".main",
			axis: "x"
		});


	});


	$('.nav-stacked').on('click', '.contact', function() {

		$('.home_wrapper').hide();
	  $('.portfolio_wrapper').hide();
	    $('.about_wrapper').hide();
	    $('.contact_wrapper').html("");
		$('.main').addClass('main_about');
		$('.main').append('<div class="contact_wrapper"><h4>E-mail</h4><br><p>ii7scw@gmail.com</p><br><br><h4>Write a comment:</h4><br><textarea name="message" style="max-width:450px;max-height:350px;" rows="10" cols="30"></textarea><br><button id="submit_mail" type="button">Submit</button></div>');



	});



  
  $(document).on('click','#red_theme',function(){
	
	$('.nav-stacked').css("background-color","#D0141D ");
	$('.main').css("background-color","#A8A8A8");
	$('.footer').css("background-color","#B0171F");
	$('.nav-stacked li a ').css("color","black");
	
	
  });
  
   $(document).on('click','#blue_theme',function(){
	
	$('.nav-stacked').css("background-color","#2E3F73 ");
	$('.main').css("background-color","#6576AA");
	$('.footer').css("background-color","#1A2956");
	 $('.nav-stacked li a ').css("color","#B4B9C7");
	 
	
  });
  
  $(document).on('click','#orange_theme',function(){
	
	$('.nav-stacked').css("background-color","#FF9200 ");
	$('.main').css("background-color","#FFD193");
	$('.footer').css("background-color","#C16E00");
	$('.nav-stacked li a ').css("color","#814A00");
	
	
  });


});