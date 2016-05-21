$(window).load(function() {
	$(".over-loader").delay(300).fadeOut(100);
	
	$(".jumper").click(function(){
		var slide = $(this).attr("data-slider")	;
	
		if(slide == 1) {
			slider(1,2,3,4);
		}
		if(slide == 2) {
			slider(2,3,4,1);
		}
		if(slide == 3) {
			slider(3,4,1,2);
		}
		if(slide == 4) {
			slider(4,1,2,3);
		}
	});
});

function slider(a,b,c,d) {
	var main = "#slider-item-" + a;
	var left = "#slider-item-" + d;
	var right = "#slider-item-" + b;
	var under = "#slider-item-" + c;
	console.log(main);
	$(main).animate({left:0},400).addClass("z-1");
	$(right).animate({left:940},400);
	$(under).animate({left:0},400);
	$(left).animate({left:-940},400);
	$('.slider-item').delay(400).queue(function(){$(this).removeClass("z-1");}).dequeue();

}
