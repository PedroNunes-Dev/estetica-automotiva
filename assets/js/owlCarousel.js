
/**
 * CHAMADA DA FUNCTION
 */
 $(document).ready(function(){
    $('.owl-carousel').owlCarousel();
    });
    
/**
 * CONFIG CAROUSEL
 */
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    autoplay:true,
    autoplayTimeout:4000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        }
    }
})