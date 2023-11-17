/*jslint browser:true */
let slideIndex = 1;

document.addEventListener("DOMContentLoaded", function () {
    showSlides(slideIndex);
});

function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    Object.keys(slides).forEach(function (key) {
        slides[key].style.display = "none";
    });

    Object.keys(dots).forEach(function (key) {
        dots[key].className = dots[key].className.replace(" active", "");
    });

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


