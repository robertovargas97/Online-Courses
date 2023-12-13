$(document).ready(function () {

    // MENU EFFECT
    $('.menu a').each(function (index, element) {
        $(this).css({
            'top': '-200px'
        });

        $(this).animate({
            top: '0'
        }, 1500 + (index * 200));
    });

    // HEADER TEXT EFFECT

    if ($(window).width() > 800) {

        $('header .text').css({
            'opacity': '0',
            'margin-top': '0'
        });

        $('header .text').animate({
            'opacity': '1',
            'margin-top': '-52'
        }, 1500);

    }
});

// SCROOL ELEMENTS

var about = $('#about').offset().top,
    menu = $('#food-menu').offset().top,
    ubication = $('#ubication').offset().top,
    gallery = $('#gallery').offset().top;

$('#btn-about').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: about - 350
    }, 500);
})


$('#btn-menu').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: menu
    }, 800);
})

$('#btn-gallery').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: gallery
    }, 800);
})

$('#btn-ubication').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: ubication
    }, 800);
})