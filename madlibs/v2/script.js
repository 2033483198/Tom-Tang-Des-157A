(function () {
    "use strict";
    console.log("reading js");

    const myForm = document.querySelector("#madlib-form");
    const report = document.querySelector("#report");
    const anotherButton = document.querySelector("#analyze-another");

    myForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const adjective = document.querySelector("#adjective").value;
        const object = document.querySelector("#object").value;
        const place = document.querySelector("#place").value;
        const action = document.querySelector("#action").value;
        const adverb = document.querySelector("#adverb").value;
        const occupation = document.querySelector("#occupation").value;
        const plural = document.querySelector("#plural").value;
        const emotion = document.querySelector("#emotion").value;


        if (adjective && object && place && action && adverb && occupation && plural && emotion) {
            document.querySelector('#story-adjective-1').textContent = adjective;
            document.querySelector('#story-object-1').textContent = object;
            document.querySelector('#story-place').textContent = place;
            document.querySelector('#story-action-1').textContent = action;
            document.querySelector('#story-adverb').textContent = adverb;
            document.querySelector('#story-occupation').textContent = occupation;
            document.querySelector('#story-plural').textContent = plural;
            document.querySelector('#story-object-2').textContent = object;
            document.querySelector('#story-action-2').textContent = action;
            document.querySelector('#story-emotion').textContent = emotion;
            document.querySelector('#story-adjective-2').textContent = adjective;

            report.classList.add('show');
        } else {
            alert('Please fill out all eight fields.');
        }
    });
    
    anotherButton.addEventListener('click', function () {
        report.classList.remove('show');

        document.querySelector('#adjective').value = '';
        document.querySelector('#object').value = '';
        document.querySelector('#place').value = '';
        document.querySelector('#action').value = '';
        document.querySelector('#adverb').value = '';
        document.querySelector('#occupation').value = '';
        document.querySelector('#plural').value = '';
        document.querySelector('#emotion').value = '';
    });

})();
