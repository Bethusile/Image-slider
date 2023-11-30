//for picture slide
const picslide = document.querySelector(".picslide");
const pic = document.querySelectorAll(".picslide img");
//for prev and next buttons
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

//make slide start from picture 1 Aygo
let counter = 1;
const size = pic[0].clientWidth;
picslide.style.transform = 'translateX(' + (-size*counter) + 'px)';

//upon click of button, move to the previous picture in array
prev.addEventListener('click', () => {
    if (counter<=0) return;
    picslide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    picslide.style.transform = 'translateX(' + (-size*counter) + 'px)';
})
//upon click of button, move to the next picture in array
next.addEventListener('click', () => {
    if (counter>=pic.length-1) return;
    picslide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    picslide.style.transform = 'translateX(' + (-size*counter) + 'px)';
})
//make transition from last and first clones
picslide.addEventListener('transitionend', () => {
    if(pic[counter].id === 'clone2'){
        picslide.style.transition = 'none';
        counter = pic.length-2;
        picslide.style.transform = 'translateX(' + (-size*counter) + 'px)';
    }
    if(pic[counter].id === 'clone1'){
        picslide.style.transition = 'none';
        counter = pic.length-counter;
        picslide.style.transform = 'translateX(' + (-size*counter) + 'px)';
    }
})

