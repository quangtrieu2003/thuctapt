let slideIndex1 = 1;
showSlidesHopTac(slideIndex);

// Nút điều hướng trước/sau
function plusSHopTac(n) {
    showSlidesHopTac(slideIndex1 += n);
    console.log(2);
}

// Điều khiển slide hiện tại
function currentSlideHopTac(n) {
    showSlidesHopTac(slideIndex1 = n);
}

function showSlidesHopTac(n) {
    console.log(1);
    let i;
    let slides = document.querySelectorAll(".call > div");
    
    if (n > slides.length) {
        slideIndex1 = 1;
    }
    if (n < 1) {
        slideIndex1 = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex1 - 1].style.display = "flex";
}
