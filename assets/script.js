const correctOrder = ['A', 'B', 'C', 'D', 'E', 'F'];

const checkButton = document.getElementById('checkButton');
const modal = document.getElementById('myModal');
const closeBtn = document.getElementsByClassName('close')[0];
const correctEventsList = document.getElementById('correctEvents');
const incorrectEventsList = document.getElementById('incorrectEvents');
const cards = document.getElementsByClassName('card');
const year = document.getElementsByClassName('year');
const timer = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const yourTime = document.getElementById('yourTime');

let time, timerInterval;

startButton.addEventListener('click', startTimer);

checkButton.addEventListener('click', function(event) {
    event.preventDefault();
    let userOrder = Array.from(document.querySelectorAll('#answer-container input')).map(input => input.value.toUpperCase()).join(' '); 
    if (userOrder === correctOrder.join(' ')) {
        endGame();
    } else {
        showIncorrect(userOrder);
    }
});

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
function startTimer(event) {
    event.preventDefault();
    startModal.style.display = 'none';
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.setProperty('display', 'flex', 'important');
    }
    time = 0;
    timerInterval = setInterval(() => {
        time++;
        let seconds = time/100;
        timer.textContent = "Time: "+ seconds.toFixed(0);
    }, 10);
}
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

function endGame() {
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
    time = time/100;
    yourTime.textContent = "Your time: " + time + " seconds";    
    checkScores();
    modal.style.display = 'flex';
}

function showIncorrect(userOrder) {
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
        modal.style.display = 'flex';
    });  
      
}

function checkScores() {
    let localScores = localStorage.getItem('highScores');
    if (localScores === null){
        let scoreArray = [time];
        localStorage.setItem('highScores', JSON.stringify(scoreArray));
    } else {
        let scoreArray = JSON.parse(localScores);
        scoreArray.push(time);
        scoreArray.sort();
        if (scoreArray.length > 3) {
            scoreArray.pop();
        }
        localStorage.setItem('highScores', JSON.stringify(scoreArray));
    }
}