// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // function User (id, name, surname , email, phone){
// //     this.id=id;
// //         this.name=name;
// //         this.surname=surname;
// //         this.email=email;
// //         this.phone=phone;
// // }
// //
// // let user1 = new User(12,'Lola','Popova','lola@mail',80676543210);
// // let user2 = new User(5,'Jora','Tupov','jora@mail',80889765431);
// // let user3 = new User(41,'Olya','Olina','olya@mail',123456789);
// // let user4 = new User(11,'Vova','Vovin','vova@com',1234566666);
// // let user5 = new User(3,'Yura','Yurin','yura@com',10123456987);
// // let user6 = new User(26,'Inna','Inova','ina@com',9876543210);
// // let user7 = new User(7,'Yulya','Yulina','yulya@com',87654321);
// // let user8 = new User(19,'Anna','Anova','anna@conm',9632558741);
// // let user9 = new User(8,'Ilya','Ilyin','ilya@com',741258369);
// // let user10 = new User(10,'Ivan','Ivanov','vanya@com',852369741);
// //////////////////////////////////////////////////////////////////
// // // створити пустий масив, наповнити його 10 об'єктами new User(....)
// // let arrayUsers2=[user1,user2,user3,user4,user5,user6,user7,user8,user9,user10]
// // console.log(arrayUsers2);
// // /////////////////////////////////////////////////////////////////////////////
// // let arrayUsers = [];
// // arrayUsers.push(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10)
// // console.log(arrayUsers);
// // //
// // // - Взяти масив з User[] з попереднього завдання, та відфільтрувати, залишивши тільки об'єкти з парними id (filter)
// // let filterUsers = arrayUsers.filter(value => value.id%2===0);
// // console.log(filterUsers);
// // // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// // let usersSortId = arrayUsers2.sort((a, b) => a.id-b.id);
// // console.log(usersSortId);
// //
// // - створити клас для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// // class Client {constructor (id, name, surname , email, phone,order){
// //     this.id=id;
// //     this.name=name;
// //     this.surname=surname;
// //     this.email=email;
// //     this.phone=phone;
// //     this.order=order;}}
// // // створити пустий масив, наповнити його 10 об'єктами Client
// // let client1 = new Client(1,'Lola','Popova','lola@mail',80676543210,['beer']);
// // let client2 = new Client(2,'Jora','Tupov','jora@mail',80889765431,['whiskey','rum']);
// // let client3 = new Client(3,'Olya','Olina','olya@mail',123456789,['milk','beer','meat']);
// // let client4 = new Client(4,'Vova','Vovin','vova@com',1234566666,['bread','eggs','apples','oranges']);
// // let client5 = new Client(5,'Yura','Yurin','yura@com',10123456987,['apples','oranges','tomatoes','drugs','rum']);
// // let client6 = new Client(6,'Inna','Inova','ina@com',9876543210,['beer','meat','bread','eggs','apples','oranges']);
// // let client7 = new Client(7,'Yulya','Yulina','yulya@com',87654321,['eggs','meat','bread','apples','oranges','whiskey','drugs']);
// // let client8 = new Client(8,'Anna','Anova','anna@conm',9632558741,['milk','bread','eggs','apples','oranges','drugs','whiskey','rum']);
// // let client9 = new Client(9,'Ilya','Ilyin','ilya@com',741258369,['milk','beer','meat','bread','eggs','apples','whiskey','oranges','tomatoes']);
// // let client10 = new Client(10,'Ivan','Ivanov','vanya@com',852369741,['beer','meat','milk','bread','eggs','apples','oranges','whiskey','drugs','rum']);
// // let arrayClient=[client1,client2,client3,client4,client5,client6,client7,client8,client9,client10];
// // console.log(arrayClient);
// //
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)///order.length=цифрі-ID//////
// // let clientsSort = arrayClient.sort((a, b) => a.order.length-b.order.length);
// // console.log(clientsSort);
//
// // - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // function Car(model, producer, year, maxSpeed, engine) {
// //     this.model = model;
// //     this.producer = producer;
// //     this.year = year;
// //     this.maxSpeed = maxSpeed;
// //     this.engine = engine;
// //     this.drive = function () {
// //         console.log(`їдемо зі швидкістю ${this.maxSpeed}/km на годину`)
// //     }
// //     this.info = function () {
// //         for (const item in this) {
// //             if (typeof this[item] !== 'function') {
// //                 console.log(`${item} => ${this[item]}`)
// //             }
// //         }
// //     }
// //     this.increaseMaxSpeed = function (newSpeed) {
// //         this.maxSpeed += newSpeed
// //     }
// //     this.changeYear = function (newValue) {
// //         this.year = newValue
// //     }
// //     this.addDriver=function (driver) {this.driver=driver}
// // }
// //
// // let car1 = new Car('scorpio', 'ford', 1998, 260, 2.3);
// // let car2 = new Car('M-5', 'BMW', 2010, 260, 4.4);
// // let car3 = new Car('Astra', 'Opel', 2011, 240, 2.2);
// // let car4 = new Car('panamera', 'porsche', 2012, 320, 3.4);
// // let car5 = new Car('cx-7', 'mazda', 2005, 240, 3.2);
// // let arrCars = [car1, car2, car3, car4, car5];
// // console.log(arrCars);
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // console.log(car1.drive());
// // car4.drive();
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // car5.info();
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // car2.increaseMaxSpeed(150);
// // console.log(car2);
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // car1.changeYear(1885);
// // console.log(car1);
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// // car3.addDriver({name:'Jora',age:33,violation:25});
// // console.log(car3);
// // car1.addDriver({name:'Olya',age:25,violation:15});
// // console.log(car1);
//////////////////////
// // - (Те саме, тільки через клас)
// // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // class Car {
// //     constructor(producer,model, year, maxSpeed, engine) {
// //         this.producer = producer;
// //         this.model = model;
// //         this.year = year;
// //         this.maxSpeed = maxSpeed;
// //         this.engine = engine;
// //         this.drive = function () {
// //             console.log(`їдемо зі швидкістю ${this.maxSpeed}/km на годину`)
// //         }
// //         this.info = function () {
// //             for (const item in this) {
// //                 if (typeof this[item] !== 'function') {
// //                     console.log(`${item} => ${this[item]}`)
// //                 }
// //             }
// //         }
// //         this.increaseMaxSpeed = function (newSpeed) {
// //             this.maxSpeed += newSpeed
// //         }
// //         this.changeYear = function (newValue) {
// //             this.year = newValue
// //         }
// //         this.addDriver = function (driver) {
// //             this.driver = driver
// //         }
// //     }
// // }
// //
// // let car1 = new Car('ford','scorpio',  1998, 260, 2.3);
// // let car2 = new Car('BMW','M-5',  2010, 260, 4.4);
// // let car3 = new Car('Opel','Astra',  2011, 240, 2.2);
// // let car4 = new Car('porsche','panamera',  2012, 320, 3.4);
// // let car5 = new Car('mazda','cx-7',  2005, 240, 3.2);
// // let arrCars = [car1, car2, car3, car4, car5];
// // console.log(arrCars);
// // // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // car1.drive();
// // // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // car1.info();
// // // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // car1.increaseMaxSpeed(200);
// // // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // car1.changeYear(2025)
// // // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// // car1.addDriver({name:'Pedro',age:98});
//
// // -створити клас/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// class Cinderella {
//     constructor(name, year, footSize) {
//         this.name = name;
//         this.year = year;
//         this.footSize = footSize
//     }
// }
//
// let cinderella1 = new Cinderella('yulya', 25, 33);
// let cinderella2 = new Cinderella('olya', 22, 36);
// let cinderella3 = new Cinderella('anna', 21, 35);
// let cinderella4 = new Cinderella('ina', 30, 34);
// let cinderella5 = new Cinderella('masha', 23, 37);
// let cinderella6 = new Cinderella('ira', 24, 38);
// let cinderella7 = new Cinderella('katya', 20, 39);
// let cinderella8 = new Cinderella('tanya', 39, 42);
// let cinderella9 = new Cinderella('sveta', 27, 40);
// let cinderella10 = new Cinderella('lyuda', 19, 38);
// let arrCinderella = [cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10];
// console.log(arrCinderella);
//
// // Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// class Prince {
//     constructor(name, year, shoeFound) {
//         this.princeName = name;
//         this.year = year;
//         this.shoeFound = shoeFound;
//     }
// }
// let prince1 = new Prince('yura',98,36);
// console.log(prince1);
// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// const find = (array,prince) => {
//     for (const cinderella of arrCinderella) {
//         if (prince1.shoeFound===cinderella.footSize)
//             return`${cinderella.name} має бути з ${prince.princeName}`
//     }
// }
// console.log(find(arrCinderella, prince1));
// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// let cinderellaFoot = arrCinderella.find(value => prince1.shoeFound===value.footSize);
// console.log(cinderellaFoot);

