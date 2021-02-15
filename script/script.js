$(document).ready(function(){
    $('.burger').click(function(event) {
        $('.burger, .modal, .header__nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.nav__link').click(function(event) {
        $('.burger, .modal, .header__nav').removeClass('active');
        $('body').removeClass('lock');
    })
    $('.slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
    });
});

