$(document).ready(function(){
    $(".our_works__slider").owlCarousel({
        loop:false,
        margin:30,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1200:{
                items:4
            }
        }
    });

    $(".promotion_advertisement_slider").owlCarousel({
        loop:false,
        margin:0,
        nav:true,
        dots:false,
        items:1
    });

    $('.vk_slider').owlCarousel({
        margin: 0,
        loop:false,
        items:1,
        nav:true,
        dots:false,
        navText: ['',''],
        autoHeight:true
    });

    $('.inst_slider').owlCarousel({
      margin: 0,
      loop:false,
      items:1,
      nav:true,
      dots:false,
      navText: ['','']
    });

    $('.results_slider').owlCarousel({
        loop:true,
        items:1,
        center:true,
        nav:true,
        dots:true,
        navText: ['',''],
        responsive: {
            1200: {
                margin: -100,
                stagePadding: 200
            },

            992: {
                margin: -75,
                stagePadding: 150
            },

            768: {
                margin: -50,
                stagePadding: 100
            }
        }
        
    });
});
 