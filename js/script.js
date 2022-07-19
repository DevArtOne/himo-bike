"use strict";

$(function () {

    // scroll fixed header=======================================
    let header = $("#header");
    let headerH = 0;
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav")

    checkScroll(scrollPos, headerH)

    $(window).on("scroll resize", function () {

        headerH = 0;
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, headerH)
    });


    function checkScroll(scrollPos,
        headerH) {
        if (scrollPos > headerH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
        if (scrollPos > headerH) {
            document.querySelector(".header__block").style.height = "60px"
        } else {
            document.querySelector(".header__block").style.height = "100px"
        }
        if (scrollPos > headerH) {
            document.querySelector(".header__logo").style.width = "96px"
        } else {
            document.querySelector(".header__logo").style.width = "160px"
        }

        if (scrollPos > headerH) {
            document.querySelector(".items").style.flexDirection = "row"
        } else {
            document.querySelector(".items").style.flexDirection = "column"
        }




    }


    // click on header menu==================================

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementId = $(this).data("scroll");
        let elementOffset = $(elementId).offset().top

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 160
        }, 700)

    });


    // Reviews: https://kenwheeler.github.io/slick/    (посилання на бібліотеку)
    $('#photoSlider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false
    });
    $('#bikeSlider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false
    });

})

// let red = document.querySelector("#red");
// let gray = document.querySelector("#gray");
// let white = document.querySelector("#white");

// let imgRed = document.querySelector("#img-red");
// let imgGray = document.querySelector("#img-gray");
// let imgWhite = document.querySelector("#img-white");

function changeGray() {
    let whiteBike = document.getElementById("img-white").style.display;
    let grayBike = document.getElementById("img-gray").style.display;
    let redBike = document.getElementById("img-red").style.display;

    if (whiteBike == "block", grayBike == "none", redBike == "none") {
        document.getElementById("img-white").style.display = "none";
        document.getElementById("img-gray").style.display = "block";
        document.getElementById("img-red").style.display = "none"
    } else {
        document.getElementById("img-white").style.display = "none"
        document.getElementById("img-gray").style.display = "block";
        document.getElementById("img-red").style.display = "none"
    }
}

function changeRed() {
    let whiteBike = document.getElementById("img-white").style.display;
    let redBike = document.getElementById("img-red").style.display;
    let grayBike = document.getElementById("img-gray").style.display;

    if (whiteBike == "none", redBike == "none", grayBike == "block") {
        document.getElementById("img-white").style.display = "none";
        document.getElementById("img-red").style.display = "block";
        document.getElementById("img-gray").style.display = "none"
    } else {
        document.getElementById("img-white").style.display = "none"
        document.getElementById("img-red").style.display = "block";
        document.getElementById("img-gray").style.display = "none"
    }
}
function changeWhite() {
    let whiteBike = document.getElementById("img-white").style.display;
    let redBike = document.getElementById("img-red").style.display;
    let grayBike = document.getElementById("img-gray").style.display;

    if (whiteBike == "none", redBike == "block", grayBike == "none") {
        document.getElementById("img-white").style.display = "block";
        document.getElementById("img-red").style.display = "none";
        document.getElementById("img-gray").style.display = "none"
    } else {
        document.getElementById("img-white").style.display = "block"
        document.getElementById("img-red").style.display = "none";
        document.getElementById("img-gray").style.display = "none"
    }
}