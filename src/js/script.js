$(document).ready(function(){

    $('.header__hamburger').on('click', function(){
        // $('.header__menu').toggleClass('header__menu-mobile');
        $('.header__mobile-menu').slideToggle();
    })

    $('a[data-imagelightbox="c"]')
        .imageLightbox({button: true, quitOnDocClick: false});



});