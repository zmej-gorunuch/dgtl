$(document).ready(function () {
    $('.menu__icon .openmenu').click(function () {
        $(this).hide();
        $('.menu__icon .closemenu').show();
        $('.header__menu ul').addClass('show');
        $('.header__menu > span').addClass('hide');
    });
    $('.menu__icon .closemenu').click(function () {
        $(this).hide();
        $('.menu__icon .openmenu').show();
        $('.header__menu ul').removeClass('show');
        $('.header__menu > span').removeClass('hide');
    });

    if ($(window).width() < 768) {
        $('.menu__icon .openmenu').click(function () {
            $('.mobwrap-menu').addClass('show');
        });
        $('.menu__icon .closemenu').click(function () {
            $('.mobwrap-menu').removeClass('show');
        });
    }


    // player


    const players = Plyr.setup('.js-player', {
        hideControls: true,
    });








    // COmmercial modal
    $('.commercslider .swwrap').click(function () {
        $('.commerc-modalwrap').addClass('show');
    });
    $('.closemodal').click(function () {
        $('.commerc-modalwrap').removeClass('show');
        players[0].stop();
        
    });

    // main player
   
});