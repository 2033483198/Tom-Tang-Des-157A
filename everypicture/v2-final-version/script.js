(function(){
    'use strict';
    console.log('reading js');

    // Elements
    const cards = document.querySelectorAll('.photo-card');
    const backgrounds = document.querySelectorAll('.background');
    const descriptions = document.querySelectorAll('.photo-info');
    const counter = document.querySelector('#counter');
    const colorToggle = document.querySelector('#colorToggle');

    let currentPhoto = 0;

    // Photo positions
    function showPhoto() {
        for (let i = 0; i < 6; i++) {
            cards[i].className = 'photo-card hidden';
            backgrounds[i].classList.remove('active');
            descriptions[i].classList.remove('active');
        }

        let left = currentPhoto - 1;
        let right = currentPhoto + 1;
        let farLeft = currentPhoto - 2;
        let farRight = currentPhoto + 2;

        if (left < 0) left = left + 6;
        if (right > 5) right = right - 6;
        if (farLeft < 0) farLeft = farLeft + 6;
        if (farRight > 5) farRight = farRight - 6;

        cards[farLeft].className = 'photo-card far-left';
        cards[left].className = 'photo-card left';
        cards[currentPhoto].className = 'photo-card center';
        cards[right].className = 'photo-card right';
        cards[farRight].className = 'photo-card far-right';

        backgrounds[currentPhoto].classList.add('active');
        descriptions[currentPhoto].classList.add('active');
        counter.textContent = '0' + (currentPhoto + 1) + ' / 06';
    }

    // Arrow buttons
    document.querySelector('.next').addEventListener('click', function () {
        currentPhoto = currentPhoto + 1;
        if (currentPhoto > 5) currentPhoto = 0;
        showPhoto();
    });

    document.querySelector('.previous').addEventListener('click', function () {
        currentPhoto = currentPhoto - 1;
        if (currentPhoto < 0) currentPhoto = 5;
        showPhoto();
    });

    // Color
    colorToggle.addEventListener('change', function () {
        document.body.classList.toggle('black-white', colorToggle.checked);
    });
})();
