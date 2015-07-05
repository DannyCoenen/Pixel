/************************************************
 Start Events
************************************************/
$(document).ready( function() {
	
	localStorage.clear();
	$('.border').hide();
	
	var wHeight = $(document).height(); 
	var wWidth = $(document).width();
	
	setInterval(function() {pixelFunction('.px_1', wHeight, wWidth);}, 1);
	setInterval(function() {pixelFunction('.px_2', wHeight, wWidth);}, 1);
	setInterval(function() {pixelFunction('.px_3', wHeight, wWidth);}, 1);
	setInterval(function() {pixelFunction('.px_4', wHeight, wWidth);}, 1);
	setInterval(function() {pixelFunction('.px_5', wHeight, wWidth);}, 1);
	setInterval(function() {spawnElement(wHeight, wWidth)}, 500);
	
	control('.px_1', wWidth);
	
});

/************************************************
 Controls
************************************************/
function control(px, wWidth){
	$(function() {
		$(document).keyup(function(evt) {
			if (evt.keyCode == 32) {
				if(localStorage.getItem("dirH" + px) == "min"){
					localStorage.setItem("dirH" + px, "plus");
					pixelAnimation(px, wWidth);
				}else if(localStorage.getItem("dirH" + px) == "plus"){
					localStorage.setItem("dirH" + px, "min");
					pixelAnimation(px, wWidth);
				} 
			}
		}).keydown(function(evt) {
			if (evt.keyCode == 32) {
			}
		});
	});	
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
 pixel animate
************************************************/
function pixelAnimation(px, wWidth){

	var distance = wWidth;
	
	//animation
	if(localStorage.getItem("dirH" + px) == "min" && localStorage.getItem("dirW" + px) == "min"){
		$(px).stop().animate({top: "-=" + distance, left: "-=" + distance}, 5000, 'linear');
	}else if(localStorage.getItem("dirH" + px) == "plus" && localStorage.getItem("dirW" + px) == "plus"){
		$(px).stop().animate({top: "+=" + distance, left: "+=" + distance}, 5000, 'linear');
	}else if(localStorage.getItem("dirH" + px) == "plus" && localStorage.getItem("dirW" + px) == "min"){
		$(px).stop().animate({top: "+=" + distance, left: "-=" + distance}, 5000, 'linear');
	}else if(localStorage.getItem("dirH" + px) == "min" && localStorage.getItem("dirW" + px) == "plus"){
		$(px).stop().animate({top: "-=" + distance, left: "+=" + distance}, 5000, 'linear');
	}

}

/************************************************
 pixel function
************************************************/
function pixelFunction(px, wHeight, wWidth){
	var pixel = $(px).offset();
	var size = $(px).height();
	
	if(localStorage.getItem("dirH" + px) == null){
		localStorage.setItem("dirH" + px, "plus");
		localStorage.setItem("dirW" + px, "plus");
		pixelAnimation(px, wWidth);
	}
	
	// border detection X
	if(pixel.top >= wHeight - size){
		localStorage.setItem("dirH" + px, "min");
		$('.borderBottom').stop().fadeIn(50).fadeOut(500);
		pixelAnimation(px, wWidth);
	}else if(pixel.top <= 0){
		localStorage.setItem("dirH" + px, "plus");
		$('.borderTop').stop().fadeIn(50).fadeOut(500);
		pixelAnimation(px, wWidth);
	}

	// border detection Y
	if(pixel.left >= wWidth - size){
		localStorage.setItem("dirW" + px, "min");
		$('.borderRight').stop().fadeIn(50).fadeOut(500);
		pixelAnimation(px, wWidth);
	}else if(pixel.left <= 0){
		localStorage.setItem("dirW" + px, "plus");
		$('.borderLeft').stop().fadeIn(50).fadeOut(500);
		pixelAnimation(px, wWidth);
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