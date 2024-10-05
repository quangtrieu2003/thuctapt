let slideIndex2 = 1;
showSlides(slideIndex);

// Nút điều hướng trước/sau
function plusS2(n) {
    showSlides(slideIndex2 += n);
}

// Điều khiển slide hiện tại
function currentSlide(n) {
    showSlides(slideIndex2 = n);
}

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".content-6-chu");
    console.log(slides);
    
    if (n > slides.length) {
        slideIndex2 = 1;
    }
    if (n < 1) {
        slideIndex2 = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex2 - 1].style.display = "flex";
}
