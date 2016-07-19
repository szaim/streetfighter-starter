$(document).ready(function() {

	// $('.'+person+'-throwing').hide();
    $('.copy').mouseenter(function(event) {
            $('.hulk-throwing').hide();
            $('.hulk-still').hide();
            $('.hulk-ready').show();
            $('.hulk-cool').hide();
        }).mouseleave(function(event) {
            $('.hulk-still').show();
            $('.hulk-ready').hide();
            $('.hulk-cool').hide();
            $('.hulk-throwing').hide();
        }).mousedown(function(event) {
            playhadouken();
            $('.hulk-cool').hide();
            $('.hulk-still').hide();
            $('.hulk-ready').hide();
            $('.hulk-throwing').show();
            $('.hulk-hadouken').finish().show().animate({ 'left': '-423px' },
                500,
                function() {
                    $(this).hide();
                    $(this).css('left', '820px');
                });
        })
        .mouseup(function(event) {
            $('.hulk-cool').hide();
            $('.hulk-still').hide();
            $('.hulk-throwing').hide();
            $('.hulk-ready').show();
        });

    $('.ryu').mouseenter(function(event) {
            $('.ryu-throwing').hide();
            $('.ryu-still').hide();
            $('.ryu-ready').show();
            $('.ryu-cool').hide();
        })
        .mouseleave(function(event) {
            $('.ryu-still').show();
            $('.ryu-ready').hide();
            $('.ryu-cool').hide();
            $('.ryu-throwing').hide();
        })
        .mousedown(function(event) {
            playhadouken();
            $('.ryu-cool').hide();
            $('.ryu-still').hide();
            $('.ryu-ready').hide();
            $('.ryu-throwing').show();
            $('.hadouken').finish().show().animate({ 'left': '1020px' },
                500,
                function() {
                    $(this).hide();
                    $(this).css('left', '520px');
                });
        })
        .mouseup(function(event) {
            $('.ryu-cool').hide();
            $('.ryu-still').hide();
            $('.ryu-throwing').hide();
            $('.ryu-ready').show();
        })

    function playhadouken() {
        $('#hadouken-sound')[0].volume = 0.5;
        $('#hadouken-sound')[0].load();
        $('#hadouken-sound')[0].play();
    };

    $('.instructions').show('slow');
	setTimeout(function(){
		$('.instructions').hide('slow');
	}, 2000);

    $('.title').fadeIn(3000, function(){
        $('.title').css('font-size', '5em');
        $('.title').fadeOut(3000);
    });
});

$(document).keydown(function(e) {

    if (e.keyCode == 88) {
        $('.ryu-cool').show();
        $('.ryu-still').hide();
        $('.ryu-ready').hide();
        $('.ryu-throwing').hide();
        // alert(1);
    } else if(e.keyCode == 86) {
        $('.hulk-cool').show();
        $('.hulk-still').hide();
        $('.hulk-ready').hide();
        $('.hulk-throwing').hide();
    }
});
$(document).keyup(function(c) {
    if (c.keyCode == 88) {

        $('.ryu-still').show();
        $('.ryu-cool').hide();
        $('.ryu-throwing').hide();
        $('.ryu-ready').hide();
        // alert(2);
    } else if(c.keyCode == 86) {
        $('.hulk-cool').show();
        $('.hulk-still').hide();
        $('.hulk-ready').hide();
        $('.hulk-throwing').hide();
    }
});
