const display = document.getElementById('display');
const colorChange = document.getElementById('colorChange');
const container = document.querySelector('.container');
const calculator = document.querySelector('.calculator');
const buttons = document.querySelectorAll('button');
const clear = document.getElementById('clearC');
const operator = document.querySelectorAll('.operator'); 

function appendToDisplay(input) {
    display.value += input;
}
function clearC() {
    display.value = '';
}
function calculate() {
    display.value = eval(display.value);
}

colorChange.addEventListener('click', () => {
    container.style.background = 'linear-gradient(135deg, #1e1e1e, #ae88ff)';
    calculator.style.background = 'linear-gradient(300deg, #1e1e1e, #ae88ff)';
    colorChange.style.background = 'linear-gradient(135deg, #1e1e1e, #ae88ff)';
    colorChange.textContent = 'Galaxy';
    for (let button of buttons) {
        button.style.background = 'linear-gradient(135deg, #1e1e1e, #ae88ff)';
    }
})
clear.addEventListener('click', () => {
    container.style.background = 'linear-gradient(135deg, #b6dbff, #bca0fa)';
    calculator.style.background = 'linear-gradient(300deg, #a9d4ff, #b592ff)';
    colorChange.style.background = 'linear-gradient(300deg, #cfadff, #ff9f9f)';
    colorChange.textContent = 'Candy';
    for (let button of buttons) {
        button.style.background = 'linear-gradient(135deg, #b6dbff, #bca0fa)';
    }
})
