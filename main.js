const sliderLine = document.querySelector(".specification-slider-line");
const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-prev");
const dots = document.querySelectorAll(".dot");

let position = 0,
    dotIndex = 0;

// Function


const nextSlide = () => {
    if (position < ((dots.length - 1) * 360)) {
        position += 360;
        dotIndex++
    } else {
        position = 0;
        dotIndex = 0;
    }
    sliderLine.style.left = -position + "px";
    thisSlide(dotIndex)
}

const prevSlide = () => {
    if (position > 0) {
        position -= 360;
        dotIndex--
    } else {
        position = ((dots.length - 1) * 360);
        dotIndex = dots.length - 1;
    }
    sliderLine.style.left = -position + "px";
    thisSlide(dotIndex)
}

const thisSlide = (index) => {
    for (let dot of dots) {
        dot.classList.remove("active")
    }
    dots[index].classList.add("active")
}

// Eventlistener

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        position = 360 * index;
        sliderLine.style.left = -position + "px";
        dotIndex = index;
        thisSlide(dotIndex);
    })
})