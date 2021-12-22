const headSwiper = new Swiper('.idc-head__swiper .swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,


    // Default parameters
    slidesPerView: 1,
    spaceBetween: 0,



    // Navigation arrows
    navigation: {
        nextEl: '.idc-head__swiper .idc-swiper-button-next',
        prevEl: '.idc-head__swiper .idc-swiper-button-prev',
    },

    pagination: {
        el: '.idc-head__swiper .swiper-pagination',
        type: 'bullets',
    },
});


const feedbackSwiper = new Swiper('.idc-feedback_swiper .swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,


    // Default parameters
    slidesPerView: 1,
    spaceBetween: 0,



    // Navigation arrows
    navigation: {
        nextEl: '.idc-feedback_swiper .idc-swiper-button-next',
        prevEl: '.idc-feedback_swiper .idc-swiper-button-prev',
    },

    pagination: {
        el: '.idc-feedback_swiper .swiper-pagination',
        type: 'bullets',
    },
});