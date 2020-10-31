$(function(){
    $('.hd_sd').slick({
        infinite: true,
        slidesToShow : 1,
        slidesToScroll : 1,
        arrow: false,
        autoplay: true,
        draggable : true,
        prevArrow: false,
        nextArrow: false,
        autoplaySpeed: 2500,
        responsive: [
            {
            breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
            breakpoint: 900,
                settings: {
                    prevArrow: false,
                    nextArrow: false,
                    arrow: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
            breakpoint: 600,
                settings: {
                    prevArrow: false,
                    nextArrow: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('#teams_player').slick({
        infinite: true,
        slidesToShow : 4,
        slidesToScroll : 2,
        arrow: true,
        autoplay: true,
        draggable : true,
        autoplaySpeed: 2500,
        responsive: [
            {
            breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
            breakpoint: 900,
                settings: {
                    prevArrow: false,
                    nextArrow: false,
                    arrow: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
            breakpoint: 600,
                settings: {
                    prevArrow: false,
                    nextArrow: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

});