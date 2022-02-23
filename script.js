//Первое задание
let arr = [1, 2, 3, 4, 5, 6];
let sum = 0;

console.log(
    [1, 2, 3, 4, 5, 6].filter(element => !(element % 2)) //оставляем только четные числа из массива
        .reduceRight((sum, element) => sum + Math.sqrt(element), 0)
);

//Второе задание
let Яблоко = 1.15;
let Апельсин = 2.30;

function calcSum(Яблоко, Апельсин) {
    return Яблоко + Апельсин;
}
let result = calcSum(Яблоко, Апельсин);
console.log(result);

//Третье задание
let n = 7;
let str = '*'
while(str.length<=n ){
    console.log(str);
    str+='*';
}

//Четвертое задание
for (i = 1; i <= 100; i ++) {
    if ((i % 3 == 0) && (i % 5 == 0))
        console.log('FizzBuzz');
    else
    if (i % 3 == 0)
        console.log('Fizz');
    else
    if ((i % 3 != 0) && (i % 5 == 0))
        console.log('Buzz');
    else
        console.log(i);
}

//Пятое задание
let min = 60;
let hour = 60;
let calcSec = min * hour;
console.log(calcSec);

//Шестое задание
let name = prompt('Введите ваше имя ');
alert('Ваше имя ' + name);

//Седьмое задание
let str = 'abcde'
console.log(str[0] + str[2] + str[4]);

//Восьмое задание
var obj = {'Коля':'1000', 'Вася':'500', 'Петя':'200'};
console.log(obj['Петя'], obj['Коля']);

//Девятое задание
let arr = [2, 5, 3, 9];
let result = arr[0] * arr[1] + arr[2] * arr[3]
console.log(result);

//Десятое задание
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arr[1][0]);

//11 задание
let min = prompt('Введите число');
if (  0 <= min <= 59 ){
    if (min>=0 && min<=14){
        alert('В первой четверти');
    } else if (min>15 && min<=30){
        alert('Во второй четверти');
    }else if(min>31 && min<=45){
        alert('В третьей четверти');
    }else if(min>46 && min<=59){
        alert('В четвертой четверти')
    }
} else{
    alert('Введите другое число.')
}

//12
let a = prompt('Введите число');
if (a<0){
    alert('Верно');
}else{
    alert('Неверно');
}

//13
let test = prompt('Введите число');
if (test == true){
    alert('Верно')
} else {
    alert('Неверно')
}

//14
let num = prompt('Введите число');
switch (num) {
    case 1:
        console.log('зима');
        break;
    case 2:
        console.log('весна');
        break;
    case 3:
        console.log('лето');
        break;
    case 4:
        console.log('осень');
        break;
    default:
        console.log('Введите другое число');
}

//15
let arr = [1, 2, 3, 4, 5];
let i
for (i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

//16
let a = 10;
let b = 3;
let result = a % b;
console.log(result);

//17
let a = 2;
let st = a ** 10;
console.log(st);

//18
let a = 379;
let result = a ** (1/2);
console.log(result);
console.log(a.toFixed(0), a.toFixed(1), a.toFixed(2));

//19
let arr = [4, -2, 5, 19, -130 , 0, 10];
let min = 999;
let max = -999;

for (i=0; i<arr.length; i++){
    if (arr[i]<min){
        min = arr[i];
    }
    if (arr[i]>max){
        max = arr[i];
    }
}
console.log(max, ' ', min);

//20
let x;
console.log(Math.floor(Math.random() * 100) + 1);

//21
let str = "aaa bbb ccc";

alert(str.substr(4, 3));
alert(str.substring(4, 7));
alert(str.slice(4, 7));

//22
let str = 'js';
str = str.toUpperCase();
console.log(str);

//23
let str = 'я учу javascript!';
let k = 0;
for (i = 0; i < str.length; i++){
    k+=1;
    str.length-= 1;
}
console.log(k);

//ну или просто
console.log(str.length);

//24
let str = 'я учу javascript!';
let k = 0;
console.log(str.indexOf('учу'));

//25
let str = 'я-учу-javascript!';
const newstr = str.replace(/-/gi, '!');
console.log(newstr);

//26
let str = 'я учу javascript!';
console.log(str.split(''))

//27
let arr = ['я', 'учу', 'javascript','!'];
console.log(arr.join('+'));

//28
let str = 'я учу javascript !';
console.log((str.charAt(0).toUpperCase())); //только первая буква
console.log((str.charAt(0).toUpperCase()), str.slice(2)); //первая буква + вся фраза