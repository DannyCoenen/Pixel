$(document).ready( function() {
	/************************************************
	 Settings
	************************************************/
	localStorage.clear();
	$('.border').hide();
	
	
	windowHeight = $(window).innerHeight();
    $('.playboard').css('height', windowHeight);
	
	var wHeight = $('.playboard').height(); 
	var wWidth = $('.playboard').width();
	
	var frequency = 20;
	
	control('.px_1');
	
	/************************************************
	 Start Events
	************************************************/
	setInterval(function() {objectController('.px_1');}, frequency);
	setInterval(function() {objectController('.px_2');}, frequency);
	setInterval(function() {objectController('.px_3');}, frequency);
	setInterval(function() {objectController('.px_4');}, frequency);
	setInterval(function() {objectController('.px_5');}, frequency);
	setInterval(function() {spawnElement(wHeight, wWidth)}, 500);
	
});