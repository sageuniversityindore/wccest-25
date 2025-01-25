document.addEventListener('DOMContentLoaded', () => {
    let counterElement = document.getElementById('visitor-counter');
    let count = localStorage.getItem('visitorCount');

    if (count === null) {
        count = 1;
    } else {
        count = parseInt(count) + 1;
    }

    localStorage.setItem('visitorCount', count);

    animateCounter(counterElement, count);
});

function animateCounter(element, finalValue) {
    let startValue = 0;
    let duration = 1500; // Increased duration in milliseconds
    let increment = finalValue / (duration / 16);

    let counter = setInterval(() => {
        startValue += increment;
        if (startValue >= finalValue) {
            startValue = finalValue;
            clearInterval(counter);
        }
        element.innerText = Math.floor(startValue);
    }, 16);
}
