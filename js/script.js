"use strict";

function changeDisplayText(message) {
    let displayText = document.querySelector('.display-text');
    displayText.innerHTML = message;
}

function addMoney() {
    let balance = document.querySelector('.form-control');
    let money = +prompt("Введите сумму");
    balance.value = money;
}
function changeMoney() {
    let balance = document.querySelector('.form-control');
    
    let change = document.querySelector('.change');
    if (balance.value >= 1) {
        change.innerHTML = `Заберите вашу сдачу - ${balance.value}`;
        balance.value = '';
    }
    
}

function makeCofee(name, price, src) {
    let balance = document.querySelector('.form-control');
    let cup = document.querySelector('.cup-container img');
    if (Number(balance.value) >= price) {
        balance.value -= price;
        balance.style.backgroundColor = '';
        changeDisplayText(`Ваш ${name} готовится`);
        cup.src = src;
        cup.hidden = false;
        
        
    }else {
        changeDisplayText("Недостаточно средств");
        balance.style.backgroundColor = '#F1948A';
    }
    
}
let atmContainer = document.querySelector('.atm-container img');
let btn = document.querySelector('.btn')
atmContainer.addEventListener('click', addMoney)
btn.addEventListener('click', changeMoney)


function imgHidden() {
    let cup = document.querySelector('.cup-container img');
    cup.hidden = true;
}