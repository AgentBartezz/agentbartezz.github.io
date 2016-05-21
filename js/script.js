$(window).load(function() {
	$(".over-loader").delay(300).fadeOut(100);
	
	$(".jumper").click(function(){
		var slide = $(this).attr("data-slider")	;
	
		if(slide == 1) {
			slider(1,2,3,4);
		}
	});
});

function slider(a,b,c,d) {
	var main = "#slider-image-" + a;
	var left = "#slider-image-" + d;
	var right = "#slider-image-" + b;
	var under = "#slider-image-" + c;
	console.log(main);
	$(main).animate({left:0},100);
	$(right).animate({left:940},100);
	$(under).animate({left:0},100);
	$(left).animate({left:-940},0);
}
