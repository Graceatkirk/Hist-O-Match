const correctOrder = ['A', 'B', 'C', 'D', 'E', 'F'];

const checkButton = document.getElementById('checkButton');
const modal = document.getElementById('myModal');
const closeBtn = document.getElementsByClassName('close')[0];
const correctEventsList = document.getElementById('correctEvents');
const incorrectEventsList = document.getElementById('incorrectEvents');
const year = document.getElementsByClassName('year');
const timer = document.getElementById('timer');
const startButton = document.getElementById('startButton');

console.log(correctOrder.join(' '));
console.log(correctOrder);


checkButton.addEventListener('click', function(event) {
    event.preventDefault();
    let userOrder = Array.from(document.querySelectorAll('#answer-container input')).map(input => input.value.toUpperCase()).join(' ');
    localStorage.setItem('userOrder', userOrder);
 console.log(userOrder)   
    if (userOrder === correctOrder.join(' ')) {
        clearInterval(timerInterval);
        correctEventsList.innerHTML = '';
        incorrectEventsList.innerHTML = '';
        for (let i = 0; i < year.length; i++) {
            year[i].style.display = 'flex';
        }
        correctOrder.forEach(event => {
            const li = document.createElement('li');
            li.textContent = getEventName(event);
            correctEventsList.appendChild(li);
        });
        if (localStorage.getItem('userOrder') === correctOrder) {
            time;
        }
        localStorage.setItem('time', time);
    
        console.log(correctOrder);
        console.log(localStorage.getItem('userOrder'));
        console.log(localStorage.getItem('userOrder') === correctOrder);
    } else {
        correctEventsList.innerHTML = '';
        incorrectEventsList.innerHTML = '';
        correctOrder.forEach((event, index) => {
            const li = document.createElement('li');
            if (event === userOrder.split(' ')[index]) {
                li.textContent = getEventName(event);
                correctEventsList.appendChild(li);
            } else {
                li.textContent = getEventName(event);
                incorrectEventsList.appendChild(li);
            }
        });
    }

    modal.style.display = 'flex';
});

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

function getEventName(event) {
    switch(event) {
        case 'A':
            return 'The Fall of Constantinople';
        case 'B':
            return 'American Revolution';
        case 'C':
            return 'American Civil War';
        case 'D':
            return 'World War 1';
        case 'E':
            return 'World War 2';
        case 'F':
            return 'Fall of the Berlin Wall';
        default:
            return 'Unknown Event';
    }
}

let time = 0;
let timerInterval = null;

startButton.addEventListener('click', function() {
    startButton.style.display = 'none';
    var t = 0;
    timerInterval = setInterval(() => {
        t++;
        timer.textContent = t;
    }, 1000);
});
