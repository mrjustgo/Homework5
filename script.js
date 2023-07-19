//Задание 1
let fun = (a,b) => a > b ? a:b;
fun(8,4);

//Задание 2 
function min_or_max(n) {
    if(n % 2 === 0) {
      return 'min';
    } else {
      return 'max';
    }
};

//Задание 3.1
let square = n => n * n;

let x = square(3);

console.log(x);

//Задание 3.2
let square1 = n => n * n;

let x1 = square1(4);
alert(x1);

//Задание 4 
function checkAge (age) {
    if (age < 12) {
        alert('Привет, друг!')
    } else {
        alert('Добро, пожаловать!')
    }
}
 
checkAge(prompt('Введите ваш возраст?'));

//Задание 5
function multiplyNumbers(num1, num2) {
    if (typeof num1 !== 'number' || isNaN(num1) || typeof num2 !== 'number' || isNaN(num2)) {
      return 'Одно или оба значения не являются числом';
    }
    
    return num1 * num2;
  }
//Задание 6
function cubeNumber() {
    const userInput = prompt("Введите число:");
    const number = Number(userInput);
  
    if (isNaN(number)) {
      return "Переданный параметр не является числом";
    }
  
    const cube = Math.pow(number, 3);
    return `${number} в кубе равняется ${cube}`;
  }
  
  for (let i = 0; i <= 10; i++) {
    console.log(cubeNumber(i));
  }
  //Задание 7 не понял как делать.
