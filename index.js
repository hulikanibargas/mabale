/* Banner Image Slideshow */

let i = 0;
const time = 5000;
const images = [
    "url('pictures/slides/beach_kids.jpg')", 
    "url('pictures/slides/lighthouse.jpg')",
    "url('pictures/slides/bird.jpg')",
    "url('pictures/slides/town.jpg')",
    "url('pictures/slides/bohol.jpg')"
];
const slideshow = document.getElementById('banner');

function changeImg(){
     slideshow.style.backgroundImage = images[i];
    if (i < images.length - 1){
        i++;
    } else {
        i=0;
    }
    setTimeout("changeImg()", time);
}

changeImg();


/* Dropdown Animation */

const dropdown = document.getElementById('dropdown');

dropdown.addEventListener('mouseover',  () => {
    dropdown.style.width = '100px';
})