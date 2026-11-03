(function(){
"use strict";
console.log("reading JS");


const photo = document.querySelector('#photo');
const counter = document.querySelector('#counter');
const colorButton = document.querySelector('#colorButton');
const previous = document.querySelector('#previous');
const next = document.querySelector('#next');

let currentPhoto = 1;
let isColor = false;

function showPhoto() {
    photo.src = 'images/photo' + currentPhoto + '.jpg';
    counter.textContent = currentPhoto + ' / 6';
}

previous.addEventListener('click', function() {
    currentPhoto--;

    if (currentPhoto < 1) {
        currentPhoto = 6;
    }

    showPhoto();
});

next.addEventListener('click', function() {
    currentPhoto++;

    if (currentPhoto > 6) {
        currentPhoto = 1;
    }

    showPhoto();
});

colorButton.addEventListener('click', function() {
    if (isColor === false) {
        photo.style.filter = 'none';
        colorButton.textContent = 'Show Black & White';
        isColor = true;
    } else {
        photo.style.filter = 'grayscale(100%)';
        colorButton.textContent = 'Show Color';
        isColor = false;
    }
});

}());
