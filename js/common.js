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
    if ($('*').is('.js-player')) {
        const players = Plyr.setup('.js-player', {
        });
    }
    if ($('*').is('.plyr__video-embed')) {
        const players = Plyr.setup('.plyr__video-embed', {
        });
    }

    // COmmercial modal
    $('.closemodal').click(function () {
        // $('.commerc-modalwrap').hide();
        $('.commerc-modalwrap').removeClass('show');
        document.querySelector('.js-player').pause();
    });

    $('.commercslider .swwrap').click(function () {
        // $('.commerc-modalwrap').show();
        $('.commerc-modalwrap').addClass('show');
    });

    // main player
    // if($('*').is('.js-playermain')) {
    const player = Plyr.setup('.js-playermain', {
        // debug: true,
        // volume: 0,
        // autoplay: true

    });

    // }
});