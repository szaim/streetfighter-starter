$(document).ready(function() {
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

});

$(document).keydown(function(e) {

    if (e.keyCode == 88) {
        $('.ryu-cool').show();
        $('.ryu-still').hide();
        $('.ryu-ready').hide();
        $('.ryu-throwing').hide();
        // alert(1);
    }
});
$(document).keyup(function(c) {
    if (c.keyCode == 88) {

        $('.ryu-still').show();
        $('.ryu-cool').hide();
        $('.ryu-throwing').hide();
        $('.ryu-ready').hide();
        // alert(2);
    }
})
