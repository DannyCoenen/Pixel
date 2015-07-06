/************************************************
 Start Events
************************************************/
$(document).ready( function() {
	
	localStorage.clear();
	$('.border').hide();
	
	var wHeight = $(document).height(); 
	var wWidth = $(document).width();
	
	setInterval(function() {animatePixel('.px_1', wHeight, wWidth);}, speed('fixed'));
	setInterval(function() {animatePixel('.px_2', wHeight, wWidth);}, speed('fixed'));
	setInterval(function() {animatePixel('.px_3', wHeight, wWidth);}, speed('fixed'));
	setInterval(function() {animatePixel('.px_4', wHeight, wWidth);}, speed('fixed'));
	setInterval(function() {animatePixel('.px_5', wHeight, wWidth);}, speed('fixed'));
	setInterval(function() {spawnElement(wHeight, wWidth)}, 500);
	
	control('.px_1');
	
});

/************************************************
 Controls
************************************************/
function control(px){
	$(function() {
		$(document).keyup(function(evt) {
			if (evt.keyCode == 32) {
				if(localStorage.getItem("dirH" + px) == "min"){
					localStorage.setItem("dirH" + px, "plus");
				}else if(localStorage.getItem("dirH" + px) == "plus"){
					localStorage.setItem("dirH" + px, "min");
				} 
			}
		}).keydown(function(evt) {
			if (evt.keyCode == 32) {
			}
		});
	});	
}


/************************************************
 set speed
************************************************/
function speed(mode){
	if(mode == 'fixed'){
		return 20;
	}else if(mode == 'random'){
		return Math.floor((Math.random() * 50) + 1);
	}
}

/************************************************
 spawn pixel elements
************************************************/
function spawnElement(wHeight, wWidth){
	if($('.element').length !== 50){
		var coodTop = Math.floor((Math.random() * wHeight) + 1) + 'px';
		var coodLeft = Math.floor((Math.random() * wWidth) + 1) + 'px';
		$('<div style="top:' + coodTop + '; left:' + coodLeft + ';" class="element el_1"></div>').hide().appendTo('body').fadeIn(1000);
	}
}

/************************************************
 pixel(character) functions
************************************************/
function animatePixel(px, wHeight, wWidth){
	var pixel = $(px).offset();
	var size = $(px).height();
	
	if(localStorage.getItem("dirH" + px) == null){
		localStorage.setItem("dirH" + px, "plus");
		localStorage.setItem("dirW" + px, "plus");
	}
	
	// border detection X
	if(pixel.top >= wHeight - size){
		localStorage.setItem("dirH" + px, "min");
		$('.borderBottom').stop().fadeIn(50).fadeOut(500);
		//console.log('i am going up');
	}else if(pixel.top <= 0){
		localStorage.setItem("dirH" + px, "plus");
		$('.borderTop').stop().fadeIn(50).fadeOut(500);
		//console.log('i am going down');
	}
	// animate height
	if(localStorage.getItem("dirH" + px) == "min"){
		$(px).animate({top: "-=4"}, 0);
	}else if(localStorage.getItem("dirH" + px) == "plus"){
		$(px).animate({top: "+=4"}, 0);
	}
	
	// border detection Y
	if(pixel.left >= wWidth - size){
		localStorage.setItem("dirW" + px, "min");
		$('.borderRight').stop().fadeIn(50).fadeOut(500);
		//console.log('i am going left');
	}else if(pixel.left <= 0){
		localStorage.setItem("dirW" + px, "plus");
		$('.borderLeft').stop().fadeIn(50).fadeOut(500);
		//console.log('i am going right');
	}
	// animate width
	if(localStorage.getItem("dirW" + px) == "min"){
		$(px).animate({left: "-=4"}, 0);
	}else if(localStorage.getItem("dirW" + px) == "plus"){
		$(px).animate({left: "+=4"}, 0);
	}
	
	// eat element
	var element = '';
	$('.element').each(function(index) {
		element = $(this).offset();
		if(element.top >= pixel.top && element.top <= pixel.top + size && element.left >= pixel.left && element.left <= pixel.left + size){
			$(this).remove();
			$(px).animate({width: "+=1", height: "+=1"}, 0);
			//console.log('element ' + index + ': has been eaten');
		}
	});

}