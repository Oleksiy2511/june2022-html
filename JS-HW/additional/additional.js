/////////////////////********add-2******///////////////////////
// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому 3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
// // let friends = ["Ivan", "Slavik"];
// if (friends.length>=3){console.log('це великий масив, в якому 3 і більше елементи')}
// else {console.log('це маленький масив, в якому менше 3-х елементів')}
// console.log(friends);
///////////////////////////////////////////////////////////////
// - Маємо 3 числа і між ним нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
// let a = 2;
// let b = 5;
// let c = 3;
// if (a > b && a > c) {
//     console.log(a);
// } else if (b > a && b > c) {
//     console.log(b);
// } else {
//     console.log(c);
// }
///////////////////////////////////////////////////////////////
// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let a = 2;
// let b = 2;
//// let result;
//// if (a + b < 4) {
////     result = 'Мало';
//// } else {
////     result = 'Багато';
////}
// let result=(a + b)< 4 ?'Мало':'Багато';
// console.log(result);
//////
/////////////////////////////////////////////////////////////
// - Маємо будь яке число від -100, 0, +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
// let a=0;
// let num=a>0?'позитивним':(a<0?'негативним':0);
// console.log(num);
////
//// let a=+1;
//// if (a>0){console.log('позитивним');}
//// else if (a<0){console.log('негативним');}
//// else {console.log(0);}
////////////////////////////////////////////////////////////
// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
// let a = 'hello';
//// let test=a?'Вірно':'Неправильно';
// let test=!a?'Неправильно':'Вірно';
// console.log(test);
/////////////////////////////////////////////////////////////
// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – показати: «Не знаєте? ECMAScript!
// let prompt1=prompt('Яка «офіційна» назва JavaScript?')
// let ECMAScript=prompt1==='ECMAScript'?'Правильно!':'Не знаєте? ECMAScript!';
// console.log(ECMAScript);
//////////////////////////////////////////////////////////////
//     - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
// let number = +prompt('flat №');
// let entrance = number<=0? 'garage'
//     : (number >0 && number <= 20 ? '1 entrance'
//         : (number >20 && number <=48 ? '2 entrance'
//             :(number>48&&number<=90? '3 entrance':'roof')));
// console.log(entrance);
/////////////////////////////////////////////////////////////////
// - Ми маємо змінну number в яку користувач задає числове значення, якщо змінна = 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
// let num=+prompt('enter number')
// let number=num%10?'НЕВІРНО':'ВІРНО';
// console.log(number);
//////////////////////////////////////////////////////////////
// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ.
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
// let temp = +prompt('яка температура повітря?');
// let owu = temp>=10&&temp<=22?'ми йдемо ВЧИТИСЯ':'сидимо вдома і вчимося ОНЛАЙН';
// console.log(owu);
//////////////////////////////////////////////////////////////////
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д) і якщо число не підходить тоді вивести Повідомлення - що число не вірне ... .
// let lottery = +prompt('enter number 1-5');
// switch (lottery) {
//     case 1:
//         console.log('Car');
//         break
//     case 2:
//         console.log('Motorcycle');
//         break
//     case 3:
//         console.log('Phone');
//         break
//     case 4:
//         console.log('Pencil');
//         break
//     case 5:
//         console.log('Book');
//         break
//     default:
//         console.log('число не вірне ...')
// }

/////////////////////*******add-3*******/////////////////////////
// 1. Створити пустий масив та :
////     a. заповнити його 50 парними числами за допомоги циклу.
// for (let i = 2; i <=100; i=i+2)
//     console.log([i]);
////     b. заповнити його 50 непарними числами за допомоги циклу.
// for (let i = 1; i <=100; i=i+2)
//     console.log([i]);
////     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

////     d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// 2. Вивести за допомогою console.log кожен третій елемент

// 3. Вивести за допомогою console.log кожен третій елемент тільки якщо цей елемент є парним.

// 4. Вивести за допомогою console.log кожен третій елемент тільки якщо цей елемент є парним та записати їх в новий масив.

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]


//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.













