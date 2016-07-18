$(document).ready(function() {
	$('.ryu').mouseenter(function(event) {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function(event) {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	})
	.mousedown(function(event) {
		// play hadouken sound
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show();
		// animate hadouken to the right of the screen
	})
	.mouseup(function(event) {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});

});