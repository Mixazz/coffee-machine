"use strict";
    let progressBar = document.querySelector('.progress-bar');
    let bigCup = document.querySelector('.cup');
    let state = 'idle'; // Статус отвечает за 3 состояния готовности кофе - idle(ожидание), cooking(готовка), ready(готов)
    
    
    
    
    // let cofeeButtons = document.querySelectorAll(".coffee-item");
    // for (let i = 0; i< cofeeButtons.length; i++) {
    //     cofeeButtons[i].onclick = function() {
    //         // this - возвращает объект (и есть этот объект) к которому обращен метод или свойство
    //         console.log(this.querySelector('img').src);
    //     }
    // }
    
//вывод Сообщения на экран
function changeDisplayText(message) {
    let displayText = document.querySelector('.display-text');
    displayText.innerHTML = message;
    
}
//забираем кофе
function takeCoffee() {
    bigCup.style.display = "";
    bigCup.style.opacity = "";
    progressBar.style.width = 0;
    changeDisplayText('Выберите кофе')
    bigCup.onclick = null;
    bigCup.style.cursor = '';
    state = 'idle';
}


function makeCofee(name, price, element) {
    if (state != 'idle') {
        return;
    }
    let balance = document.querySelector('.form-control');
   
    
    if (Number(balance.value) >= price) {
        balance.value -= price;
        balance.style.backgroundColor = '';
        
        //Выводим картинку нужного элемента
        let coffeeCup = element.querySelector('img'); 
        let cupSrc = coffeeCup.getAttribute('src')
        bigCup.src = cupSrc; // bigCup.setAttribute('src', cupSrc); - аналог
        bigCup.style.display = "inline";
        state = "cooking";
        
        //готовим кофе
         let readyPercent = 0; //переменная отвечает за готовность кофе
        let coookingInterval = setInterval(function() {
            readyPercent++;
            progressBar.style.width = `${readyPercent}%`;
            bigCup.style.opacity = `${readyPercent}%`;
            changeDisplayText(`Ваш ${name} готовится. ${readyPercent}%`);
            
            
            if (readyPercent >=100){
               clearInterval(coookingInterval)
               changeDisplayText(`Ваш ${name} готов!`)
               state = "ready";
               bigCup.style.cursor = 'pointer';
               bigCup.onclick = function() {
                   takeCoffee();
               }
               let audio = new Audio('dz.mp3');
                audio.play();
               
            }
        }, 50)
        

    }else {
        changeDisplayText("Недостаточно средств");
        balance.style.backgroundColor = '#F1948A';
    }
}