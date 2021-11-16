$(function () {
    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-left.svg"></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-right.svg"></button>',
        responsive: [
            {
                breakpoint: 969,
                settings: {
                    arrows: false,
                }
            },
        ]
    });

    $('.tab').on('click', function (event) {
        event.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).closest('.tabs__wrapper').siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');

        $('.products-slider').slick('setPosition');
    });

    $('.product-item__favorite').on('click', function () {
        $(this).toggleClass('product-item__favorite--active');
    });

    $('.products-slider').slick({
        slidesToShow: 4,
        slideToScroll: 1,
        prevArrow: '<button class="products-slider__slider-btn products-slider__slider-btnprev"><img src="images/arrow-black-left.svg"></button>',
        nextArrow: '<button class="products-slider__slider-btn products-slider__slider-btnnext"><img src="images/arrow-black-right.svg"></button>',
        responsive: [
            {
                breakpoint: 1301,
                settings: {
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 870,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true,
                }
            },
            {
                breakpoint: 591,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                }
            },

        ]
    });

    $('.filter-style').styler();

    $('.filter__item-drop, .filter__extra').on('click', function () {
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle('200');
    });

    $(".js-range-slider").ionRangeSlider({
        grid: false,
        type: 'double',
        min: 100000,
        max: 500000,
        hide_from_to: true,
    });

    $('.catalog__filter-btngrid').on('click', function () {
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
        $('.product-item__wrapper').removeClass('product-item__wrapper--list');
    });

    $('.catalog__filter-btnline').on('click', function () {
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
        $('.product-item__wrapper').addClass('product-item__wrapper--list');
    });

    $(".rate-yo").rateYo({
        ratedFill: "#1C62CD",
        spacing: "8px",
        normalFill: "#C4C4C4",
    });

    $('.menu__btn').on('click', function () {
        $('.menu-mobile__list').toggleClass('menu-mobile__list--active');
    });

    $('.footer__top-titledrop').on('click', function () {
        $(this).next().slideToggle();
    });

    $('.aside__btn').on('click', function () {
        $(this).next().slideToggle();
    });

});


