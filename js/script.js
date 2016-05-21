$(window).load(function() {
	$(".over-loader").delay(300).fadeOut(100);
	
	$(".jumper").click(function(){
		$(".slider-item).fadeOut(400);
		var slide = $(this).attr("data-slider")	;
		
		if(slide == 1) {
			slider(1);
		}
		if(slide == 2) {
			slider(2);
		}
		if(slide == 3) {
			slider(3);
		}
		if(slide == 4) {
			slider(4);
		}
	});
});

function slider(a) {
	var target = "#slider-item-" + a;
	$(target).fadeIn(400);
	/*var left = "#slider-item-" + d;
	var right = "#slider-item-" + b;
	var under = "#slider-item-" + c;
	
	for(i=1;i++;i<5) {
		var active = "#slider-item-" + i;
		for(j=1;j++;j<5) {
			var main = "#slider-item-" + j;
			if((($(active).hasClass("z-1")) == true) && (main == target)) {
				//$("#slider-item-2").removeClass("z-1");	
			}
		}
	}
	if(($("#slider-item-2").hasClass("z-1")) == true) {
		//$("#slider-item-2").removeClass("z-1");	
	}
	console.log(d);
	$(right).animate({left:940},400);
	$(under).animate({left:0},400);
	$(left).animate({left:-940},400);
	$(target).animate({left:0},400).addClass("z-1");
	*/
}
