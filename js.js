$(document).ready(function() {
    var offset = 109;
    $('.icon-top').click(function(e) {
        e.preventDefault();
        $('html').animate({
            scrollTop: 0
        }, 2000)
    });
    $('.about').click(function(e) {
        e.preventDefault();
        $('html').animate({
            scrollTop: $('.content-infor').offset().top
        }, 1000)
    });
    $('.Services').click(function(e) {
        e.preventDefault();
        $('html').animate({
            scrollTop: $('.content-info-2').offset().top
        }, 1000)
    });
    $(window).scroll(function() {
        var body = $('html').scrollTop();
        if (body > 115) {
            $('.icon-top').fadeIn();
        } else {
            $('.icon-top').fadeOut();
        }
    });
});