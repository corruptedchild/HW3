function toLetter1(b) {
    let a = (b[0] === "") ? "" :
    (b[0] === "1") ? "один" :
    (b[0] === "2") ? "два" :
    (b[0] === "3") ? "три" :
    (b[0] === "4") ? "четыре" :
    (b[0] === "5") ? "пять" :
    (b[0] === "6") ? "шесть" :
    (b[0] === "7") ? "семь" :
    (b[0] === "8") ? "восемь" :
    (b[0] === "9") ? "девять" :
    "";
    return a;
}
function toLetter2(b) {
    let a = (b[0] === "0") ? "" :
    (b[0] === "2") ? "двадцать" :
    (b[0] === "3") ? "тридцать" :
    (b[0] === "4") ? "сорок" :
    (b[0] === "5") ? "пятьдесят" :
    (b[0] === "6") ? "шестьдесят" :
    (b[0] === "7") ? "семьдесят" :
    (b[0] === "8") ? "восемьдесят" :
    (b[0] === "9") ? "девяносто" :
    "";
    return a;
}
function toLetter3(b) {
    let a = (b[0] === "0") ? "" :
    (b[0] === "1") ? "сто" :
    (b[0] === "2") ? "двести" :
    (b[0] === "3") ? "триста" :
    (b[0] === "4") ? "четыреста" :
    (b[0] === "5") ? "пятьсот" :
    (b[0] === "6") ? "шестьсот" :
    (b[0] === "7") ? "семьсот" :
    (b[0] === "8") ? "восемьсот" :
    (b[0] === "9") ? "девятьсот" :
    "";
    return a;
}
function toLetter4(b) {
    let a = (b === "10") ? "десять" :
    (b === "11") ? "одиннадцать" :
    (b === "12") ? "двенадцать" :
    (b === "13") ? "тринадцать" :
    (b === "14") ? "четырнадцать" :
    (b === "15") ? "пятнадцать" :
    (b === "16") ? "шестнадцать" :
    (b === "17") ? "семнадцать" :
    (b === "18") ? "восемнадцать" :
    (b === "19") ? "девятнадцать" :
    "";
    return a;
}
function check1019(b){
    if (b.length === 2 && b[0] === '1'){
    return true;}
    else if (b.length === 3 && b[1] === '1'){
    return true;}
    else return false;
}
  
function toLetter(g) {
    let b = g.toString();
    if(check1019(b) === true){
       if (b.length === 2){
          return toLetter4(b);
       }
       else {
          let c = b.substring(1);
          return toLetter3(b) + ' ' + toLetter4(c);
       }
    }
    else if(g === 0){
        return "ноль";
    }
    else {
      if (b.length === 1){
          return toLetter1(b);
      }
      else if (b.length === 2){
          let c = b.substring(1);
          return toLetter2(b) + ' ' + toLetter1(c);
      }
      else if (b.length === 3){
          let c = b.substring(1);
          let d = b.substring(2);
          return toLetter3(b) + ' ' + toLetter2(c) + ' ' + toLetter1(d);
      }
  }
}

function lengthCheck(answerNumber){
    a = toLetter(answerNumber);
    if (a.length >= 19){
        return answerNumber;
    } 
    else {
        return a;
    }
}

let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
typeof minValue !== 'number' || (minValue = 1);
minValue =  minValue > -1000 ? minValue : -999;
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
typeof maxValue !== 'number' || (maxValue = 100);
maxValue = maxValue < 1000 ? maxValue : 999;
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let answer = lengthCheck(answerNumber);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answer }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    gameRun = true;
    orderNumber = 1;
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    let answer = lengthCheck(answerNumber);
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answer }?`;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random() * 2) ;
            if (phraseRandom === 0) {
                answerField.innerText =  `Вы загадали неправильное число!\n\u{1F914}` ;}
            else if (phraseRandom === 1) {
                answerField.innerText =  `Я сдаюсь..\n\u{1F92F}` ;}
            else if (phraseRandom === 2){
                answerField.innerText = `Число оказалось сильнее..\n\u{1F92F}` ;}
                
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            let answer = lengthCheck(answerNumber);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answer }?`;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random() * 2) ;
            if (phraseRandom === 0) {
                answerField.innerText =  `Вы загадали неправильное число!\n\u{1F914}` ;}
            else if (phraseRandom === 1) {
                answerField.innerText =  `Я сдаюсь..\n\u{1F92F}` ;}
            else if (phraseRandom === 2){
                answerField.innerText = `Число оказалось сильнее..\n\u{1F92F}` ;}
                
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            let answer = lengthCheck(answerNumber);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answer }?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round( Math.random() * 2) ;
            if (phraseRandom === 0) {
                answerField.innerText =  `Я всегда угадываю\n\u{1F60E}` ;}
            else if (phraseRandom === 1) {
                answerField.innerText =  `Это было нетрудно ^_^` ;}
            else if (phraseRandom === 2){
                answerField.innerText = `jungle gap GG EZ` ;}
        gameRun = false;

        
        
        
    }
})