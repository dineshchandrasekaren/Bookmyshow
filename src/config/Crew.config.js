export const settings={
    arrows: true,
    autoplay: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 3,
    InitialSlide: 0,
    responsive:[
        {
            breakpoint: 1024,
            settings: {
                slidesToScroll:3,
                slidesToShow: 3,
                infinite:true
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToScroll:2,
                slidesToShow: 3,
                infinite:true
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToScroll:2,
                slidesToShow: 2,
                infinite:true
            }
        }
    ]
}