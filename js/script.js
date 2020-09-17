"use strict";
    let progressBar = document.querySelector('.progress-bar');
    let bigCup = document.querySelector('.cup');
    let state = 'idle'; // Статус отвечает за 3 состояния готовности кофе - idle(ожидание), cooking(готовка), ready(готов)
    let balance = document.querySelector('.form-control');
    let pocketCoin = document.querySelector('.pocket-coin');
        pocketCoin.value = Number(0);
    let testNum = 10;
    
    
    
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
            requestAnimationFrame( function(){
                progressBar.style.width = `${readyPercent}%`;
                bigCup.style.opacity = `${readyPercent}%`;
            })
            
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

//-------------Drag'n Drop-------------
let money = document.querySelectorAll('.money img')
for (let bill of money) {
    bill.onmousedown = function(event) {
       takeModey(event, bill)
    }
}

function takeModey(event, bill) {
    event.preventDefault();
    let mouseX = event.clientX;
    let mouseY = event.clientY;
    bill.style.transform = 'rotate(90deg)';
    
    // определение высоты и ширины
    let billCoords = bill.getBoundingClientRect();

    //позиция элемента отосительно мыши по центру
    bill.style.position = 'absolute';
    bill.style.top = mouseY - billCoords.width/2 + 'px';
    bill.style.left = mouseX - billCoords.height/2 + 'px';

    window.onmousemove = function(event) {
        let mouseX = event.clientX;
        let mouseY = event.clientY;
        bill.style.top = mouseY - billCoords.width/2 + 'px';
        bill.style.left = mouseX - billCoords.height/2 + 'px';
        
    }
   bill.onmouseup  = function(event) {
       window.onmousemove = null;
      if (inAtm(bill)) {
          let balance = document.querySelector('.form-control');
          balance.value = + balance.value + +bill.dataset.cost;
          bill.remove();
      }
   }
}

function inAtm(bill) {
    let atm = document.querySelector('.atm');
    let atmCoords = atm.getBoundingClientRect();
    let billCoords = bill.getBoundingClientRect();
    
    let atmLeftTopX = atmCoords.x;
    let atmLeftTopY = atmCoords.y;
    
    // let atmLeftBottomX = atmCoords.x;
    let atmLeftBottomY = atmCoords.y + atmCoords.height/3.5; 
    
    let atmRightTopX = atmCoords.x + atmCoords.width;
    // let atmRightTopY = atmCoords.y;
    
    let billLeftTopX = billCoords.x;
    let billLeftTopY = billCoords.y;
    
    let billRightTopX = billCoords.x + billCoords.width; 
    // let billRightopY = billCoords.y;

    if (billLeftTopX > atmLeftTopX
    && billLeftTopY > atmLeftTopY 
    && billLeftTopY < atmLeftBottomY
    && billRightTopX < atmRightTopX
    ) {
        return true;
    }else {
        return false
    }
}
//----------- Выдача сдачи -----------
let changeButtin = document.querySelector('.change-button');
changeButtin.onclick = function() {
    takeChange();
}
function takeChange() {
    

    
    if(balance.value >= 10) {
        balance.value -= 10;
        console.log(typeof pocketCoin.value)
        pocketCoin.value = +pocketCoin.value + 10;
        createCoin('10');
        return setTimeout(() => {
            takeChange() 
        }, 300);
    } else if(balance.value >= 5) {
        balance.value -= 5;
        createCoin('5');
        return setTimeout(() => {
            takeChange() 
        }, 300);
    } else if(balance.value >= 2) {
        balance.value -= 2;
        createCoin('2');
        return setTimeout(() => {
            takeChange() 
        }, 300);
    } else if(balance.value >= 1) {
        balance.value -= 1;
        createCoin('1');
        return setTimeout(() => {
            takeChange() 
        }, 300);
    }
}
//----------- Создание элемента --------------
function createCoin(nominal) {
    let coinSrc = '';
    switch (nominal) {
        case "1":
            coinSrc = 'img/1rub.png';
            break;
        case "2":
            coinSrc = 'img/2rub.png';
            break;
        case "5":
            coinSrc = 'img/5rub.png';
            break;
        case "10":
            coinSrc = 'img/10rub.png';
            break;
        default:
             return console.error('Неправильный напинал монеты')
    }
    let coin = document.createElement('img');
    let sizeCoin = 50;
    if (nominal == 1) {
        sizeCoin = sizeCoin-(sizeCoin/100*13);
    } else if (nominal == 5) {
        sizeCoin = sizeCoin+(sizeCoin/100*10);
    }else if (nominal == 2) {
        sizeCoin = sizeCoin+(sizeCoin/100*1);
    }
    coin.style.width = `${sizeCoin}px`;
    coin.style.height = `${sizeCoin}px`;
    coin.style.position = 'absolute';
    coin.setAttribute('src', coinSrc);
    let changeContainer = document.querySelector('.change');
    let changeCoords = changeContainer.getBoundingClientRect();
    coin.style.top = Math.floor(Math.random() * (changeCoords.height - sizeCoin)) + 'px';
    coin.style.left = Math.floor(Math.random() * (changeCoords.width - sizeCoin)) + 'px';
    coin.style.transition = 'transform 300ms ease-in';
    coin.style.transform = 'translateY(-30%)';
    setTimeout(function () {
        coin.style.transform = 'translateY(0%)';
    }, 30)
    // .append (Добавляет внутрь в конец родителя)
    // .prepend (Внутрь в начало)
    // .before (Рядом перед)
    // .after (Рядом после)
    // .recpaceWith (Вместо)

    changeContainer.append(coin); 
}

