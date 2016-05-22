$(window).load(function() {
	$(".over-loader").delay(300).fadeOut(100);
	$(".jumper").first().attr("disabled", "disabled");
	$(".jumper").click(function(){
		var a = $(this).attr("data-slider");
		var count = 4;
		var b = count - 1;
		slider(a);
		if(a == count) {
			$(".right-arrow").attr("data-slider", 1);
			$(".left-arrow").attr("data-slider", b);
		} else if(a == 1) {
			$(".right-arrow").attr("data-slider", ++a);
			$(".left-arrow").attr("data-slider", count);
		} else {
			$(".right-arrow").attr("data-slider", ++a);
			a = a - 1;
			$(".left-arrow").attr("data-slider", --a);
		}
	});
	
	$(".right-arrow").click(function() {
		var count = 4;
		var a = $(this).attr("data-slider");
		slider(a);
		var b = count - 1;
		if(a == count) {
			$(this).attr("data-slider", 1);
			$(".left-arrow").attr("data-slider", b);
		} else if(a == 1) {
			$(this).attr("data-slider", ++a);
			$(".left-arrow").attr("data-slider", count);
		} else {
			$(this).attr("data-slider", ++a);
			a = a - 1;
			$(".left-arrow").attr("data-slider", --a);
		}
	});
	
	$(".left-arrow").click(function() {
		var count = 4;
		var a = $(this).attr("data-slider");
		var b = count - 1;
		slider(a);
		if(a == count) {
			$(this).attr("data-slider", b);
			$(".right-arrow").attr("data-slider", 1);
		} else if(a == 1) {
			$(this).attr("data-slider", count);
			$(".right-arrow").attr("data-slider", ++a);
		} else {
			$(this).attr("data-slider", --a);
			a = a + 1;
			$(".right-arrow").attr("data-slider", ++a);
		}
		
	});
});

function slider(a) {
	$(".slider-item").fadeOut(400);
	$(".jumper").removeClass("jumper-active").removeAttr("disabled");
	var target = "#slider-item-" + a;
	$(target).fadeIn(400);
	var b = a - 1;
	$(".jumper").eq(b).addClass("jumper-active").attr("disabled", "disabled");
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
