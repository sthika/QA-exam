$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 5,
        loop: true,
        autoWidth: true,
        margin: 70,
        autoplay: true,
        dots: false,
        slideTransition: 'linear',
        autoplayTimeout: 4000,
        autoplaySpeed: 4000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            430: {
                items: 2
            },
            1300: {
                items: 4
            }
        }
    });
});
