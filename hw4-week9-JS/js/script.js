// // Қосу
// let a = '5', b = 3     // "5" * 3 = 15

// // 
// let z = 20
// let y = 7

// // z++; // z = z+1    
// // z--; // z = z-1 

// z+=2 //z = z+2 z=20+2
// z-=5 // z = z -5 z=22-5
// z*=5 // z = z*5 z=17*5
// z/=5 // z = z/5 z=85 -5
// z%=5 // z = z%5 z=17%5 

// console.log("z = " + z);

// sum = 20 % 7 //6 қалдық

// console.log("z*y=" + (z*y));
// console.log("z % y = " + sum);

// // Запрашиваем у пользователя число
// // let number1 = Number(prompt("Введите первое число:"));
// // let number2 = Number(prompt("Введите второе число:"));

// // Вычисляем площадь и периметр
// // let audan = number1 * number2;
// // let perimeter = (number1 + number2) * 2;

// // Выводим результат
// // alert("Тіктөртбұрыш ауданы: " + audan + '\n' + "Тіктөртбұрыш периметрі: " + perimeter);




















// // let number1 = Number(prompt("Введите первое число:"));

// let num1 = prompt("Сан еңгізіңіз")

// let square = num1 * num1

// alert("Саннын квадраты: " + square)  // num1 *num1













// var num = prompt("Введите число:")


var san = 25; //number -> String
san = san.toString() // string
console.log("Жасы(жол ретинде):" + san + " | Типі: " + typeof san);
// Жасы(жол ретинде): 25 | Типі: string

var isStudent=true;
console.log("Студент па? " + isStudent + " | Типі: " + typeof isStudent); //boolean


let v= 5, s=3
let sum, minus,divisible,multiply, mod

v++; // v = v + 1 
console.log("v++ " + v);

v--; // v = v - 1
console.log("v-- " + v);

v+=5 //v = v + 5
v-=3 // v= v-3
v/=2 // v = v/2
v*=3 // v = v*3
v%=3 // v = v%3

//Қосу 
sum = v+s

// Азайту
minus = v-s

// бөлу
divisible = v / s

// көбейту
multiply = v * s

//mod
mod = v % s

// alert("v + s = " + sum + '\n' + "v - s = " + minus + '\n' + "v / s = " + divisible +'\n' + "v * s = " + multiply +'\n' + "v % s = " + mod);


var num1 = Number(prompt("Бірінші санды еңгізініз:"))
var num2 = Number(prompt("Екінші санды еңгізініз:"))

var area =num1*num2
var perimeter = (num1 + num2) *2 

alert('Ауданы: ' + area + '\n' + 'Периметрі: ' + perimeter)




















var num = prompt("Введите число для квадрата:")