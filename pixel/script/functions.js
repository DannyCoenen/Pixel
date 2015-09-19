/************************************************
 Controls
************************************************/
function control(object){
	$(function() {
		$(document).keyup(function(evt) {
			if (evt.keyCode == 32) {
				direction('y', object);
				console.log(localStorage.getItem('dirY' + object));
			}
		}).keydown(function(evt) {
			if (evt.keyCode == 32) {
			}
		});
	});	
}

/************************************************
Animate
************************************************/
function animate(object){

	if(localStorage.getItem('dirY' + object) == 'down'){
		$(object).animate({top: '+=4'}, 0);
	}else{
		$(object).animate({top: '-=4'}, 0);
	}
	
	if(localStorage.getItem('dirX' + object) == 'right'){
		$(object).animate({left: '+=4'}, 0);
	}else{
		$(object).animate({left: '-=4'}, 0);
	}
}

/************************************************
 Object details
************************************************/
function size(object){
	var size = $(object).height();
	return size;
}

function position(mode, object){
	var loc = $(object).offset();
	
	switch(mode) {
		case 'x':
			return loc.left;
			break;
		case 'y':
			return loc.top;
			break;
	}
}

function direction(mode, object){			
		switch(mode) {
		case 'x':
			if(localStorage.getItem('dirX' + object) == 'left'){
				localStorage.setItem('dirX' + object, 'right');
			}else{
				localStorage.setItem('dirX' + object, 'left');
			}
			break;
		case 'y':
			if(localStorage.getItem('dirY' + object) == 'down'){
				localStorage.setItem('dirY' + object, 'up');
			}else{
				localStorage.setItem('dirY' + object, 'down');
			}
			break;
		}
}

function hitbox(element, object){
	if(position('x', element) >= position('x', object) && position('x', element) <= position('x', object) + size(object)){
		var hitX = true;
	}
	if(position('y', element) >= position('y', object) && position('y', element) <= position('y', object) + size(object)){
		var hitY = true;
	}
	
	if(hitX == true && hitY == true){
		$(element).remove();
		$(object).animate({width: '+=1', height: '+=1'}, 0);
		return true;
	}else{
		return false;
	}	

}

/************************************************
Border
************************************************/
function borderDetection(object){
	
	var wHeight = $('.playboard').height(); 
	var wWidth = $('.playboard').width();
	
	if(position('y', object) >= wHeight - size(object)){
		// direction('y', object);
		localStorage.setItem('dirY' + object, 'up');
		$('.borderBottom').stop().fadeIn(50).fadeOut(500);
		//console.log('up');

	}else if(position('y', object) <= 0){
		// direction('y', object);
		localStorage.setItem('dirY' + object, 'down');
		$('.borderTop').stop().fadeIn(50).fadeOut(500);
		//console.log('down');
	}
	
	if(position('x', object) >= wWidth - size(object)){
		// direction('x', object);
		localStorage.setItem('dirX' + object, 'left');
		$('.borderRight').stop().fadeIn(50).fadeOut(500);
		//console.log('left');
	}else if(position('x', object) <= 0){
		// direction('x', object);
		localStorage.setItem('dirX' + object, 'right');
		$('.borderLeft').stop().fadeIn(50).fadeOut(500);
		//console.log('right');
	}
	
}

/************************************************
Static Elements
************************************************/
function spawnElement(wHeight, wWidth){
	if($('.element').length !== 50){
		var coodTop = Math.floor((Math.random() * wHeight) + 1) + 'px';
		var coodLeft = Math.floor((Math.random() * wWidth) + 1) + 'px';
		$('<div style="top:' + coodTop + '; left:' + coodLeft + ';" class="element el_1"></div>').hide().appendTo('body').fadeIn(1000);
	}
}