$(document).ready(function () {
    $('.menu__icon .openmenu').click(function () {
        $(this).hide();
        $('.menu__icon .closemenu').show();
        $('.header__menu ul').addClass('show');
        $('.header__menu > span').addClass('hide');
        $('body').addClass('overhid');
    });
    $('.menu__icon .closemenu').click(function () {
        $(this).hide();
        $('.menu__icon .openmenu').show();
        $('.header__menu ul').removeClass('show');
        $('.header__menu > span').removeClass('hide');
        $('body').removeClass('overhid');
    });

    if ($(window).width() < 768) {
        $('.menu__icon .openmenu').click(function () {
            $('.mobwrap-menu').addClass('show');
        });
        $('.menu__icon .closemenu').click(function () {
            $('.mobwrap-menu').removeClass('show');
        });
    }










    // COmmercial modal
    $('.commercslider .swwrap').click(function () {
        $('.commerc-modalwrap').addClass('show');
    });
    $('.closemodal').click(function () {
        $('.commerc-modalwrap').removeClass('show');


        var div = document.getElementById("commod");
        var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
        iframe.postMessage('{"method":"pause"}', '*');

    });


    // $(".commerc-modal")
    $('.commerc-modal').on('click', function (event) {
        if (!$(event.target).is('.commerc-modal *')) {
            $('.commerc-modalwrap').removeClass('show');

            var div = document.getElementById("commod");
            var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
            iframe.postMessage('{"method":"pause"}', '*');
        }
    });



    // NEW 
    if($('*').is('.filmsslider')) {
        
        const $slider = $("#slider");
        $slider
            .on('init', () => {
                mouseWheel($slider)
            })
            .slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                vertical: true,
                pauseOnHover: false,
                arrows: false,
                verticalSwiping: true,
                speed: 1000,
                autoplay: true,
                autoplaySpeed: 9000,
                dots: true,
                responsive: [
                    {
                      breakpoint: 767,
                      settings: {
                        dots: false,
                        arrows: true,
                        nextArrow: '<button type="button" class="swiper-button-next"></button>',
                        prevArrow: '<button type="button" class="swiper-button-prev"></button>',
                      }
                    }
                    
                  ]
            })
        function mouseWheel($slider) {
            $(window).on('wheel', { $slider: $slider }, mouseWheelHandler)
        }
        function mouseWheelHandler(event) {
            event.preventDefault()
            const $slider = event.data.$slider
            const delta = event.originalEvent.deltaY
            if(delta > 0) {
                $slider.slick('slickNext')
            }
            else {
                $slider.slick('slickPrev')
            }
        }




        
    }










    


});