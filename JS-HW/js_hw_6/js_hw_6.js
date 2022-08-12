// - Знайти та вивести довжину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let strHello = 'hello world';
// let strLorem = 'lorem ipsum';
// let strJS = 'javascript is cool';
// console.log(strHello.length, strLorem.length, strJS.length);
// console.log(strHello.length);
// console.log(strLorem.length);
// console.log(strJS.length);
// //
// // - Перевести до великого регістру наступні стрінгові значення
// // 'hello world', 'lorem ipsum', 'javascript is cool'
// console.log(strLorem.toUpperCase(), strLorem.toUpperCase(), strJS.toUpperCase());
// console.log(strHello.toUpperCase());
// console.log(strLorem.toUpperCase());
// console.log(strJS.toUpperCase());
//
// // - Перевести до нижнього регістру наступні стрінгові значення
// // 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// console.log((strLorem.toUpperCase().toLowerCase()), strLorem.toUpperCase().toLowerCase(), strJS.toUpperCase().toLowerCase());
// console.log(strHello.toUpperCase().toLowerCase());
// console.log(strLorem.toUpperCase().toLowerCase());
// console.log(strJS.toUpperCase().toLowerCase());
////
//// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.trim());
////
//// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
////     let str = 'Ревуть воли як ясла повні';
//// let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
// let str = 'Ревуть воли як ясла повні';
// const stringToArray = string => string.split(' ')
// console.log(stringToArray(str));
////
////
//// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let arrNum=[10,8,-7,55,987,-1011,0,1050,0];
// let strings = arrNum.map(value => value.toString());
// console.log(strings);
////
//// - створити функцію sortNums(direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки в залежності від значення аргументу direction.
// let nums = [11, 21, 3];
// const sortNums = (arrayNums, direction) => {
//     if (direction === 'ascending') {
//         arrayNums.sort((a, b) => a - b)
//     } else if (direction === 'descending') {
//         arrayNums.sort((a, b) => b - a)
//     }
//     return arrayNums;
// }
// console.log(sortNums(nums, 'ascending'));
// console.log(sortNums(nums, 'descending'));
////sortNums(nums,'ascending') // [3,11,21]
//// sortNums(nums,'descending') // [21,11,3]
//
//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // -- відсортувати його за спаданням за monthDuration
// let sort = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
// console.log(sort);
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців.
// let filter = coursesAndDurationArray.filter(value => value.monthDuration>5);
// console.log(filter);
////
////
let cards = [
    {cardSuit: 'clubs', value: 'Ace', color: 'black'},
    {cardSuit: 'clubs', value: 2, color: 'black'},
    {cardSuit: 'clubs', value: 3, color: 'black'},
    {cardSuit: 'clubs', value: 4, color: 'black'},
    {cardSuit: 'clubs', value: 5, color: 'black'},
    {cardSuit: 'clubs', value: 6, color: 'black'},
    {cardSuit: 'clubs', value: 7, color: 'black'},
    {cardSuit: 'clubs', value: 8, color: 'black'},
    {cardSuit: 'clubs', value: 9, color: 'black'},
    {cardSuit: 'clubs', value: 10, color: 'black'},
    {cardSuit: 'clubs', value: 'Jack', color: 'black'},
    {cardSuit: 'clubs', value: 'Queen', color: 'black'},
    {cardSuit: 'clubs', value: 'King', color: 'black'},

    {cardSuit: 'diamonds', value: 'Ace', color: 'red'},
    {cardSuit: 'diamonds', value: 2, color: 'red'},
    {cardSuit: 'diamonds', value: 3, color: 'red'},
    {cardSuit: 'diamonds', value: 4, color: 'red'},
    {cardSuit: 'diamonds', value: 5, color: 'red'},
    {cardSuit: 'diamonds', value: 6, color: 'red'},
    {cardSuit: 'diamonds', value: 7, color: 'red'},
    {cardSuit: 'diamonds', value: 8, color: 'red'},
    {cardSuit: 'diamonds', value: 9, color: 'red'},
    {cardSuit: 'diamonds', value: 10, color: 'red'},
    {cardSuit: 'diamonds', value: 'Jack', color: 'red'},
    {cardSuit: 'diamonds', value: 'Queen', color: 'red'},
    {cardSuit: 'diamonds', value: 'King', color: 'red'},

    {cardSuit: 'hearts', value: 'Ace', color: 'red'},
    {cardSuit: 'hearts', value: 2, color: 'red'},
    {cardSuit: 'hearts', value: 3, color: 'red'},
    {cardSuit: 'hearts', value: 4, color: 'red'},
    {cardSuit: 'hearts', value: 5, color: 'red'},
    {cardSuit: 'hearts', value: 6, color: 'red'},
    {cardSuit: 'hearts', value: 7, color: 'red'},
    {cardSuit: 'hearts', value: 8, color: 'red'},
    {cardSuit: 'hearts', value: 9, color: 'red'},
    {cardSuit: 'hearts', value: 10, color: 'red'},
    {cardSuit: 'hearts', value: 'Jack', color: 'red'},
    {cardSuit: 'hearts', value: 'Queen', color: 'red'},
    {cardSuit: 'hearts', value: 'King', color: 'red'},
    {value: 'Joker', color: 'red'},

    {cardSuit: 'spades', value: 'Ace', color: 'black'},
    {cardSuit: 'spades', value: 2, color: 'black'},
    {cardSuit: 'spades', value: 3, color: 'black'},
    {cardSuit: 'spades', value: 4, color: 'black'},
    {cardSuit: 'spades', value: 5, color: 'black'},
    {cardSuit: 'spades', value: 6, color: 'black'},
    {cardSuit: 'spades', value: 7, color: 'black'},
    {cardSuit: 'spades', value: 8, color: 'black'},
    {cardSuit: 'spades', value: 9, color: 'black'},
    {cardSuit: 'spades', value: 10, color: 'black'},
    {cardSuit: 'spades', value: 'Jack', color: 'black'},
    {cardSuit: 'spades', value: 'Queen', color: 'black'},
    {cardSuit: 'spades', value: 'King', color: 'black'},
    {value: 'Joker', color: 'black'},

];
console.log(cards);
// описати колоду карт( spade-піка, diamond-бубна, heart-черва, clubs-хрест,трефа)//тепер буду знати//.
// - знайти піковий туз// ace spade
let filterValue = (cards.filter(value => value.cardSuit === 'spades')).filter(value => value.value === 'Ace');
let filterValue2 = cards.filter(value => value.cardSuit === 'spades' && value.value === 'Ace');///це я побачив в розв'язку. я про таке і не подумав///
console.log(filterValue2);
console.log(filterValue);
// - всі шістки
let filterValueAll = cards.filter(value => value.value === 6);
console.log(filterValueAll);
// - всі червоні карти
let filterColorAll = cards.filter(value => value.color === 'red');
console.log(filterColorAll);
// - всі бубни
let filterValueSuit = cards.filter(value => value.cardSuit === 'diamonds');
console.log(filterValueSuit);
// - всі трефи від 9 та більше
let filterAllCards = cards.filter(value => value.cardSuit === 'clubs' && value.value > 8
    || typeof value.value === 'string' && value.cardSuit === 'clubs');
console.log(filterAllCards);
//
//
// {
//     cardSuit: '', // 'spades', 'diamonds','hearts', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// let reduceCards = cards.reduce((accumulator, card) => {
//     if (card.cardSuit==='spades'){accumulator.spades.push(card);}
//     else if (card.cardSuit==='diamonds'){accumulator.diamonds.push(card);}
//     else if (card.cardSuit==='hearts'){accumulator.hearts.push(card);}
//     else if (card.cardSuit==='clubs'){accumulator.clubs.push(card);}
//     else {accumulator.joker.push(card);}
//     return accumulator
//     },
// {spades:[], diamonds:[], hearts:[], clubs:[], joker:[]},);
// console.log(reduceCards);
//////зробив з допомогою resolve, сам не зміг/////


