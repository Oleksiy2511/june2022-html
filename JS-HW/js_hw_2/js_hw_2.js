// // - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// let array = [1, 22, 87, 'string', 'hello', true, false, 'boolean', 999, 56789, -555]
// console.log(array);
// console.log(array[5]);
// console.log(array[3]);
// console.log(array[7]);
// console.log(array[0]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// let book1={
//     title:'Adam',
//     pageCount:666,
//     genre:'historical'
// };
// let book2={
//     title:'Chemistry',
//     pageCount:555,
//     genre:'scientific'
// };
// let book3={
//     title:'War',
//     pageCount:5678,
//     genre:'documentary'
// };
// console.log(book1, book2, book3);
// console.log(book3.title);
//
// books=[
//     {title:'Adam', pageCount:666, genre:'historical'},
//     {title:'Chemistry', pageCount:555, genre:'scientific'},
//     {title:'War',pageCount:5678,genre:'documentary'}
// ]
// console.log(books);
// console.log(books[0]['genre']);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
// let book4={title:'War',
//     pageCount:33,
//     genre:'historical',
//     authors:[{nameAuthor:'Jora',age:22},
//         {nameAuthor:'Julia',age:25},
//         {nameAuthor:'Ivan',age:92}]}
// let book5={title:'Peace',
//     pageCount:99,
//     genre:'documentary',
//     authors:[{nameAuthor:'Vasya',age:222},
//         {nameAuthor:'olya',age:255},
//         {nameAuthor:'Ivanko',age:921}]}
// let book6={title:'Chemistry',
//     pageCount:33,
//     genre:'scientific',
//     authors:[{nameAuthor:'Jordano',age:122},
//         {nameAuthor:'Juliano',age:125},
//         {nameAuthor:'Mohamed',age:52}]}
// console.log(book4, book5, book6);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
users = [
    {nameUser: 'Olya', username: '@olya', password: 123456},
    {nameUser: 'Jenya', username: '@jek', password: 456789},
    {nameUser: 'Lyonya', username: 'lolyk', password: 987654},
    {nameUser: 'Yulya', username: 'yulchik', password: 111111},
    {nameUser: 'Sergey', username: 'serg', password: 222222},
    {nameUser: 'Ilya', username: 'iluha', password: 333333},
    {nameUser: 'Ivan', username: '@vaniok', password: 444444},
    {nameUser: 'Stepan', username: '#styopka', password: 555555},
    {nameUser: 'Svitlana', username: 'korolewa', password: 666666},
    {nameUser: 'Jora', username: 'jora', password: 777777}
]

console.log(users);
console.log(users[0].password,users[1].password,users[2].password,users[3].password,users[4].password,users[5].password);
console.log(users[0]['password']);
console.log(users[1].password);
console.log(users[2]['password']);
console.log(users[3].password);
console.log(users[5]['password']);
console.log(users[9]['password']);
console.log(users[0]['nameUser']);
console.log(users[7]['username']);

///////як вивести всі паролі одразу????//////Дякую за увагу////////























