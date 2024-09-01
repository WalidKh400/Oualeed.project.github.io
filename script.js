// Calculator functions
function appendDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

// Counter functions
function decreaseCounter(counterId) {
    const counter = document.getElementById(counterId);
    const countSpan = counter.querySelector('.count');
    let count = parseInt(countSpan.textContent);

    if (count > 0) {
        count--;
        countSpan.textContent = count;
        createStarEffect(counter);

        if (count === 0) {
            counter.classList.add('zero'); // Add red background when counter reaches zero
        }
    }
}

function createStarEffect(counter) {
    for (let i = 0; i < 5; i++) { // Create 5 stars
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        counter.appendChild(star);

        // Remove the star after the animation ends
        star.addEventListener('animationend', () => {
            star.remove();
        });
    }
}
