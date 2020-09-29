$(window).load(function () {
    $('.navbar-btn').on('click', function() {
         console.log($('.navbar-btn'));
        $('.header-wrap').toggleClass('header-wrap__active');
        //$('.go-in').removeClass('.go-in__hidden');
        //$('.go-in').removeClass('.go-in__hidden').toggleClass('go-in__active');
       // $('.menu__nav').toggleClass('.menu__nav__hidden').toggleClass('menu__nav__active');
        $('.menu__nav').toggleClass('menu__nav__hidden menu__nav__active');
        $('.go-in').toggleClass('go-in__hidden go-in__active');
    });

    new Vivus('01_1', 
    { 
        type: 'oneByOne',
        duration: 100 
    });
    new Vivus('02_1', 
    { 
        type: 'delayed',
        duration: 100 
    });
});


