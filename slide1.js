let slideIndex = 1;
showSlidesContent4(slideIndex);

// Nút  trước/sau
function plusSlidesContent4(n) {
    showSlidesContent4(slideIndex += n);
}

// Điều khiển slide hiện tại
function currentSlideContent4(n) {
    showSlidesContent4(slideIndex = n);
}

function showSlidesContent4(n) {
    let i;
    let slides = document.querySelectorAll(".content-1");
    console.log(slides);
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "flex";
}
// thanh mennu 
const toggleButton = document.getElementById('toggleButton');
const menu = document.getElementById('menu');

toggleButton.addEventListener('click', () => {  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
});




