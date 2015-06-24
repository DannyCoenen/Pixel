$(document).ready( function() {
	
	var wHeight = $(document).height(); 
	var wWidth = $(document).width();
	
	setInterval(function() {animatePixel('.px_1', wHeight, wWidth);}, speed());
	setInterval(function() {animatePixel('.px_2', wHeight, wWidth);}, speed());
	setInterval(function() {animatePixel('.px_3', wHeight, wWidth);}, speed());
	setInterval(function() {animatePixel('.px_4', wHeight, wWidth);}, speed());
	setInterval(function() {animatePixel('.px_5', wHeight, wWidth);}, speed());
	setInterval(function() {animatePixel('.px_6', wHeight, wWidth);}, speed());
	setInterval(function() {animatePixel('.px_7', wHeight, wWidth);}, speed());
	setInterval(function() {animatePixel('.px_8', wHeight, wWidth);}, speed());
	setInterval(function() {animatePixel('.px_9', wHeight, wWidth);}, speed());
	setInterval(function() {animatePixel('.px_10', wHeight, wWidth);}, speed());
	setInterval(function() {animatePixel('.px_11', wHeight, wWidth);}, speed());
	setInterval(function() {animatePixel('.px_12', wHeight, wWidth);}, speed());
	setInterval(function() {animatePixel('.px_13', wHeight, wWidth);}, speed());
	setInterval(function() {animatePixel('.px_14', wHeight, wWidth);}, speed());
	setInterval(function() {animatePixel('.px_15', wHeight, wWidth);}, speed());
	setInterval(function() {animatePixel('.px_16', wHeight, wWidth);}, speed());
	setInterval(function() {animatePixel('.px_17', wHeight, wWidth);}, speed());
	setInterval(function() {animatePixel('.px_18', wHeight, wWidth);}, speed());
	setInterval(function() {animatePixel('.px_19', wHeight, wWidth);}, speed());
	setInterval(function() {animatePixel('.px_20', wHeight, wWidth);}, speed());
	
});

/************************************************
 set speed
************************************************/
function speed(){
	return Math.floor((Math.random() * 50) + 1);
}

/************************************************
 pixel brains
************************************************/
function animatePixel(px, wHeight, wWidth){
	var pixel = $(px);
	var offset = pixel.offset();
	
	// animate height
	if(offset.top == wHeight - 50){
		localStorage.setItem("dirH" + px, "min");
	}else if(offset.top == 0){
		localStorage.setItem("dirH" + px, "plus");
	}
	if(localStorage.getItem("dirH" + px) == "min"){
		$(px).animate({top: "-=1"}, 0);
	}else if(localStorage.getItem("dirH" + px) == "plus"){
		$(px).animate({top: "+=1"}, 0);
	}
	
	// animate width
	if(offset.left == wWidth - 50){
		localStorage.setItem("dirW" + px, "min");
	}else if(offset.left == 0){
		localStorage.setItem("dirW" + px, "plus");
	}
	if(localStorage.getItem("dirW" + px) == "min"){
		$(px).animate({left: "-=1"}, 0);
	}else if(localStorage.getItem("dirW" + px) == "plus"){
		$(px).animate({left: "+=1"}, 0);
	}
}