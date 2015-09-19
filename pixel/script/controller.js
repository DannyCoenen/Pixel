/************************************************
 Object controller
************************************************/
function objectController(object){
	//console.log(localStorage.getItem('dirY' + object));
	//console.log(localStorage.getItem('dirX' + object));
	//console.log(size(object));
	
	borderDetection(object);
	animate(object);
	
	$('.element').each(function(index) {
		hitbox(this, object);
	});
}