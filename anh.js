let slideIndexAnh = 1;
showSlides1(slideIndex);

// Nút điều hướng trước/sau
function plusS1(n) {
    showSlides1(slideIndexAnh += n);
}

// Điều khiển slide hiện tại
function currentSlide(n) {
    showSlides1(slideIndexAnh = n);
}

function showSlides1(n) {
    let i;
    let slides = document.querySelectorAll(".carousel-item");
    console.log(slides);
    
    if (n > slides.length) {
        slideIndexAnh = 1;
    }
    if (n < 1) {
        slideIndexAnh = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndexAnh - 1].style.display = "block";
}