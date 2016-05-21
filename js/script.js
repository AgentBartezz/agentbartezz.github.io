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
	
	var checker = $('.slider-inner').find('.slider-item z-1');
	console.log(checker);
	$(right).animate({left:940},400);
	$(under).animate({left:0},400);
	$(left).animate({left:-940},400);
	setTimeout(function () { $('.slider-item').removeClass("z-1");},400);
	$(main).animate({left:0},400).addClass("z-1");
}
