$(function(){

	$("#stage").load('img/interactive.svg',function(response){

		$(this).addClass("svgLoaded");
		
		if(!response){ // Error loading SVG
			$(this).html('Error loading SVG. Be sure you are running from the http protocol (not locally) and have read the documentation.');
		}

	});
});