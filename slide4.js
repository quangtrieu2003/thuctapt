let slideIndex3 = 1;
showSlides(slideIndex);

// Nút điều hướng trước/sau
function plusS3(n) {
    showSlides(slideIndex3 += n);
}

// Điều khiển slide hiện tại
function currentSlide(n) {
    showSlides(slideIndex3 = n);
}

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".hanhtrinh ");
    console.log(slides);
    
    if (n > slides.length) {
        slideIndex3 = 1;
    }
    if (n < 1) {
        slideIndex3 = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex3 - 1].style.display = "flex";
}
