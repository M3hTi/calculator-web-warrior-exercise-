// console.log("hi");
const displayEl = document.querySelector('.display')
const BtnsElement = document.querySelectorAll('button[data-number-sign]');
console.log(BtnsElement);

const enterElement = document.querySelector('.enter')
const clearBtn = document.querySelector('.clear')

let calculation = ''
const displaySpan = document.createElement('span')
displayEl.appendChild(displaySpan)

const display = function (e) {
    const target = e.target
    const signOrNum = target.dataset.numberSign
    // console.log(signOrNum);\
    calculation += signOrNum
    displaySpan.innerHTML = calculation
}


const calculator = function (calc) {
    const result = eval(calc);
    displaySpan.innerHTML = result;
    calculation = result.toString(); // update calculation variable
}


const clearDisplay = function () {
    calculation = '';
    displaySpan.innerHTML = '';
}




BtnsElement.forEach(Btn => {
    Btn.addEventListener('click', display)
})

enterElement.addEventListener('click', () => calculator(calculation))


clearBtn.addEventListener('click', clearDisplay)