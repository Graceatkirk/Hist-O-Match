const correctOrder = ['A', 'B', 'C', 'D', 'E', 'F'];

const checkButton = document.getElementById('checkButton');
const modal = document.getElementById('myModal');
const closeBtn = document.getElementsByClassName('close')[0];
const correctEventsList = document.getElementById('correctEvents');
const incorrectEventsList = document.getElementById('incorrectEvents');
const inputFields = document.querySelectorAll('#input input');

checkButton.addEventListener('click', function() {
    let userOrder = Array.from(inputFields).map(input => input.value).join(' ');

    if (userOrder === correctOrder.join(' ')) {
        correctEventsList.innerHTML = '';
        incorrectEventsList.innerHTML = '';
        correctOrder.forEach(event => {
            const li = document.createElement('li');
            li.textContent = event;
            correctEventsList.appendChild(li);
        });
    } else {
        correctEventsList.innerHTML = '';
        incorrectEventsList.innerHTML = '';
        correctOrder.forEach((event, index) => {
            const li = document.createElement('li');
            if (event === userOrder.split(' ')[index]) {
                li.textContent = event;
                correctEventsList.appendChild(li);
            } else {
                li.textContent = event;
                incorrectEventsList.appendChild(li);
            }
        });
    }

    modal.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});