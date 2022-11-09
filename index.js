let days = document.querySelector('.days');
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
let doneMessage = document.querySelector('.finalMessage');
let initialMessage = document.querySelector('.message');

console.log(initialMessage)

const finishDate = new Date('November 15, 2022 00:00:00 GMT+03:00');

setInterval(function() {
    // checking the current date
    let now = new Date().getTime();

    
    // seeing how many milliseconds remain
    let difference = finishDate - now;

    // doing some boring maths
    seconds.textContent = Math.floor((difference % (1000 * 60)) / 1000);
    minutes.textContent = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    hours.textContent = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    days.textContent = Math.floor(difference / (1000 * 60 * 60 * 24));

    if(difference < 0) {
        seconds.textContent = 0;
        minutes.textContent = 0;
        hours.textContent = 0;
        days.textContent = 0;

        initialMessage.style.display = "none";
        doneMessage.classList.add("done__message");
    }
},1000)
