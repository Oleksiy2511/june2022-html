// let Pi=3.14

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let areaR=(a,b)=>a*b;
// console.log(areaR(5, 10));
// console.log(areaR(2, 3));

// - створити функцію яка обчислює та повертає площу кола з радіусом r/////S=Pi*r^2///
// let areaC=(radius)=>Pi*(radius*radius);
// console.log(areaC(5));
//
// let areaC=(radius)=>Pi*Math.pow(radius,2);
// console.log(areaC(2));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r/////areaCyl= 2PiRH ///
// let areaCyl=(r,h)=>2*Pi*r*h;
// console.log(areaCyl(5, 10));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let elementInArray = (...array)=> {
//     for (let i = 0; i < array.length; i++) console.log(array[i])
// }
// console.log(elementInArray(1, true, 25, 'hello', 99, -55));

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let creatP=(text)=>document.write(`<p>${text}</p>`);
// creatP('hello people');
// creatP('text text');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let threeLi=(text)=>document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
// threeLi('bla bla bla')

// - створити функцію яка створює ol з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let liInUl=(text,number)=>{document.write(`<ol>`)
// {
//     for (let i=0; i<number; i++) {
//         document.write(`<li>${text}</li>`)
//     }
// }
// document.write(`</ol>`)}
// liInUl('helo helo',15)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let list=(array)=>{document.write(`<ul>`)
// {
//     for (let i=0; i<array.length; i++) {
//         document.write(`<li>${array[i]}</li>`)
//     }
// }
// document.write(`</ul>`)}
// list([1,2,99,'hello',true,-99,null,'string'])

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let users = [
//     {id: 21, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 13, name: 'kolya', age: 29, status: true},
//     {id: 41, name: 'olya', age: 28, status: false},
//     {id: 55, name: 'max', age: 30, status: true},
//     {id: 16, name: 'anya', age: 31, status: false},
//     {id: 7, name: 'oleg', age: 28, status: false},
//     {id: 8, name: 'andrey', age: 29, status: true},
//     {id: 90, name: 'masha', age: 30, status: true},
//     {id: 10, name: 'olya', age: 31, status: false},
//     {id: 11, name: 'max', age: 31, status: true}
// ];
// let divList = (array) => {
//     for (let i = 0; i < array.length; i++) {
//      {
//         document.write(`<div class="user">${array[i].id} ${array[i].name} ${array[i].age}</div>`)
//     }
// }}
// divList(users)

// - створити функцію яка повертає найменьше число з масиву
// let arr=[55,33,5,2,-3,8,999,546,1,52,0,3,-1,-8];
// const minNum = (array) => {let minimal=[0]
//     for (const arrayElement of array) {
//         if (minimal>arrayElement) {minimal=arrayElement}
//     }return minimal
// }
// console.log(minNum(arr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// const sum = (arrayNum) => {let result=0;
//     for (let i = 0; i < arrayNum.length; i++) {
//         const arrayNumElement = arrayNum[i];
//         result+=arrayNumElement
//     } return result
// }
// console.log(sum([1, 2, 10]));
// console.log(sum([2, 3, 4]));

// const max = (array) => {
//   return Math.max.apply(null,array)
// }
// console.log(max([5, 8, 6, 1, 3, 7, 52, 99, 98, 25, 45, 91]));