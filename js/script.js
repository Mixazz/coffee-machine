"use strict";

function changeDisplayText(message) {
    let displayText = document.querySelector('.display-text');
    displayText.innerHTML = message;
}

function makeCofee(name, price) {
    let balance = document.querySelector('.form-control');
    if (Number(balance.value) >= price) {
        balance.value -= price;
        balance.style.backgroundColor = '';
        changeDisplayText(`Ваш ${name} готовится`);
    }else {
        changeDisplayText("Недостаточно средств");
        balance.style.backgroundColor = '#F1948A';
    }
    
}