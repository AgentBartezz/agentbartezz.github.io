$(window).load(function() {
	$(".over-loader").delay(300).fadeOut(100);
	
	$(".jumper").click(function(){
		var slide = $(this).attr("data-slider")	;
	
		if(slide == 1) {
			slider(1,2,3,4);
		}
	});
});

function slide(a,b,c,d) {
	var trigger = "#slider-image-" + a;
	console.log(trigger);
}
