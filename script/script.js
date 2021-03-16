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
        dots: false,
        arrows: false,
        autoplay: true,
    });
    const anchors = document.querySelectorAll('a[href="#"]')

    for (let anchor of anchors) {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const BlockID = anchor.getAttribute('href')
            document.querySelector('' + BlockID).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    };
});

