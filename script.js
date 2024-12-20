//var a = 25;
//var b = 35;
//const c = a+b;
//alert(c);
//console.log(c);
//var name= "Антон";
//var text = "Привіт";
//console.log(text+name);
//alert(text+name);

// Домашня робота з 4.1
// var myYear = 2006;
// var lastYear = 2024;
// var difference = lastYear - myYear;
// alert(difference);

//var a = 15;
//var b = 25;
//console.log(a > b);
// const userPassword = prompt('Введіть пароль:');
// validPassword = '1234';
// if (userPassword == validPassword){
//     alert('Доступ надано');
// } else{
//     alert('Невірний пароль');
// }

// var profession = prompt("Вкажи свою професію");

// if (profession == 'Лікар') {
// alert('Дякуємо, що лікуєте.');
// } else if (profession == 'Пожежник') {
// alert('Дякуємо, що рятуєте.');
// } else if (profession == 'Пекар') {
// alert('Дякуємо, що годуєте.');
// } else if (profession == 'Водій') {
// alert('Дякуємо, що возите.');
// } else {
// alert('Я знаю багато професій');
// }

// var a = 10;
// var b = 15;
// var c = 25;

// if(a<b || a<c){
//     console.log("Число a менше за b або c");
// } else{
//     console.log("Умова не виконується");
// }
// console.log(10!=15);
// var f = 35;
// if(a<b && a<f){
//     console.log("Число a менше за b або f")
// }else{
//     console.log("Умова не виконується")
// }


//Домашня робота з 4.2
// var season = prompt("Вкажи номер сезону");

// if(season == 1){
//     alert('Це весна');
//     console.log('Це весна');
// } else if (season == 2){
//     alert('Це літо');
//     console.log('Це літо');
// } else if (season == 3){
//     alert('Це осінь');
//     console.log('Це осінь');
// } else if (season == 4){
//     alert('Це зима');
//     console.log('Це зима');
// } else {
//     alert('Такого сезону не існує');
//     console.log('Такого сезону не існує');
// }

//4.3

// var i = 0;
// while (i <= 3) {
//     console.log(i);
//     i++;
// }
// var a = 0;
// do {
//     console.log(a);
//     a++;
// } while (a>7);

// var number;
// do{
//     number == prompt('Введіть цифру 5');
// }while(number != 5);
// for(var b = 1; b<=10; b+=1){
//     console.log(b**2);
// }

// document.writeln('Рахуємо до 20:');
// for(var text=0; text<=20; text++){
//     document.writeln(text);
// }

// Домашня робота за 4.3

// document.writeln('Парні числа від 0 до 10:');
// for(var coupleNumber=0; coupleNumber<=10; coupleNumber+=2){
//     document.writeln(coupleNumber);
// }

// Урок 4.4

// var position = 0;
// function nextSlide(){
//     position -=600;
//     console.log(position);
//     slide();
// }
// function prewSlide(){
//     position +=600;
//     console.log(position);
//     slide();
// }
// function slide() {
//     var slider = document.getElementById('slider');
//     var property = position + 'px';
//     slider.style.backgroundPositionX = property;
// }

// Урок 4.5

// function showMessage(){
//     alert('Ви натиснули на трикутник');
// }

// Урок 4.6

var button = document.getElementById('button');
var scoreText = document.getElementById('scoreText');
var score = 0;

function flip(){
    score++;
    scoreText.textContent = score;
}

function newPosition() {
    var x = Math.floor(Math.random()*90);
    var y = Math.floor(Math.random()*90);
    button.style.left = x + '%';
    button.style.top = y + '%';   
}
function endGame() {
    alert('За 10 секунд ви натиснули ' + score + ' разів');
    score = 0;
}
setInterval(newPosition, 1500);
setInterval(endGame, 15000);