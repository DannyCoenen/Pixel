$(document).ready( function() {
	
	var wHeight = $(document).height(); 
	var wWidth = $(document).width();
	
	setInterval(function() {animatePixel('.px_1', wHeight, wWidth);}, speed('fixed'));
	setInterval(function() {spawnElement(wHeight, wWidth)}, 500);

});

/************************************************
 set speed
************************************************/
function speed(mode){
	if(mode == 'fixed'){
		return 1;
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
		//$('<div style="top:342px; left:320px;" class="element el_1"></div>').appendTo('body');
	}
}

/************************************************
 pixel brains
************************************************/
function animatePixel(px, wHeight, wWidth){
	var pixel = $(px).offset();
	var size = $(px).height();
	
	// animate height
	if(pixel.top >= wHeight - size){
		localStorage.setItem("dirH" + px, "min");
		console.log('i am going up');
	}else if(pixel.top <= 0){
		localStorage.setItem("dirH" + px, "plus");
		console.log('i am going down');
	}
	if(localStorage.getItem("dirH" + px) == "min"){
		$(px).animate({top: "-=1"}, 0);
	}else if(localStorage.getItem("dirH" + px) == "plus"){
		$(px).animate({top: "+=1"}, 0);
	}
	
	// animate width
	if(pixel.left >= wWidth - size){
		localStorage.setItem("dirW" + px, "min");
		console.log('i am going left');
	}else if(pixel.left <= 0){
		localStorage.setItem("dirW" + px, "plus");
		console.log('i am going right');
	}
	if(localStorage.getItem("dirW" + px) == "min"){
		$(px).animate({left: "-=1"}, 0);
	}else if(localStorage.getItem("dirW" + px) == "plus"){
		$(px).animate({left: "+=1"}, 0);
	}
	
	// eat element
	var element = '';
	
	$('.element').each(function(index) {
		element = $(this).offset();
		if(element.top >= pixel.top && element.top <= pixel.top + size && element.left >= pixel.left && element.left <= pixel.left + size){
			$(this).remove();
			$(px).animate({width: "+=1", height: "+=1"}, 0);
			console.log('element ' + index + ': has been eaten');
		}
	});

}