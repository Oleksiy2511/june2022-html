// - є масив
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартоломʼю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жаклін «Мардж» Сімпсон (до одруження Бувьє) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультиплікаційного серіала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
// console.log(simpsons);
//
// // Проітерувати його, створивши для кожного об'єкту масиву <div class='member'> та наповнити його даними з об'єкта.
// //     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
// let htmlDivElement = document.createElement('div');
// document.body.appendChild(htmlDivElement)
// for (const simpson of simpsons) {
//     let simpsonDiv = document.createElement('div');
//     simpsonDiv.classList.add('oneSimpson')
//     htmlDivElement.appendChild(simpsonDiv)
//
//     const h2 = document.createElement('h2');
//     h2.innerText = `${simpson.name} ${simpson.surname} ${simpson.age}`;
//     simpsonDiv.appendChild(h2)
//
//     const paragraph = document.createElement('p');
//     paragraph.innerText = `${simpson.info}`
//     simpsonDiv.appendChild(paragraph);
//
//     const photo = document.createElement('img');
//     photo.src=`${simpson.photo}`
//     simpsonDiv.appendChild(photo);
//
//    /////////// simpsonDiv.append(h2,paragraph,photo)////////
// }
//

// Цикл в циклі
// - Є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структури знаходиться у файлі example.png
// const wrap = document.createElement('div');
// wrap.classList.add('wrap')
// document.body.appendChild(wrap)
//
// let divWrap = document.getElementsByClassName('wrap')[0];
//
// for (const coursesArrayElement of coursesArray) {
//
//     const course = document.createElement('div');
//     course.classList.add('course')
//     // course.style.border = '3px solid red'
//     // course.style.padding = '10px'
//     // course.style.margin = '20px'
//     document.body.appendChild(course)
//     wrap.appendChild(course)
//
//     const h1 = document.createElement('h1');
//     h1.classList.add('h1')
//     // h1.style.border = '2px solid blue'
//     h1.innerText = `${coursesArrayElement.title}`
//     wrap.appendChild(h1)
//
//     const twoParagraph = document.createElement('div');
//     twoParagraph.classList.add('twoParagraph')
//     // twoParagraph.style.display = 'flex'
//     wrap.appendChild(twoParagraph)
//
//     const paragraph1 = document.createElement('p');
//     paragraph1.classList.add('paragraph1')
//     // paragraph1.style.border = '2px solid blue'
//     // paragraph1.style.width = '30%'
//     paragraph1.innerText = `${coursesArrayElement.monthDuration}`
//     wrap.appendChild(paragraph1)
//
//     const paragraph2 = document.createElement('p');
//     paragraph2.classList.add('paragraph2')
//     // paragraph2.style.border = '2px solid blue'
//     // paragraph2.style.width = '70%'
//     // paragraph2.style.marginLeft = '10px'
//     paragraph2.innerText = `${coursesArrayElement.hourDuration}`
//     wrap.appendChild(paragraph2)
//
//
//     const ulDiv = document.createElement('div');
//     ulDiv.classList.add('ulDiv')
//     // ulDiv.style.border = '2px solid blue'
//     wrap.appendChild(ulDiv)
//
//     const ul = document.createElement('ul');
//     for (const module of coursesArrayElement.modules) {
//         const li = document.createElement('li');
//    li.classList.add('li')
//         // li.style.border = '1px solid blue'
//         // li.style.margin = '5px'
//         li.innerText = `${module}`
//         ul.appendChild(li)
//     }
//
//     ulDiv.appendChild(ul)
//     course.append(h1, twoParagraph, ulDiv)
//     twoParagraph.append(paragraph1, paragraph2)
// }
// ------------------

//     - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
// let divElement = document.createElement('div');
// divElement.classList.add('wrap', 'collapse', 'alpha', 'beta')
// divElement.style.background='yellow';
// divElement.style.color='black';
// divElement.style.fontSize='20px'
// document.body.appendChild(divElement)
// divElement.innerText='hello people';
// const node = divElement.cloneNode(true);
// document.body.appendChild(node)

// - Є масив:
// Взяти файл template1.html та додати в нього скрипт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
// let array=['Main','Products','About us','Contacts'];
// let menu = document.getElementsByClassName('menu')[0];
// for (let item of array) {
//     let li = document.createElement('li');
//     li.innerText=item;
//     menu.appendChild(li)
// }

// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//////// coursesAndDurationArray.map(value => <div>{value.title} ++ {value.monthDuration} months</div>)////////
// let div = document.createElement('div');
// document.body.appendChild(div);
// for (let item of coursesAndDurationArray) {
//     let divElement = document.createElement('div');
//     divElement.classList.add('divElement')
//
//     let title = document.createElement('h2');
//     title.innerText = `${item.title}`;
//
//     let monthDuration = document.createElement('h2');
//     monthDuration.innerText = `${item.monthDuration}`;
//
//     divElement.append(title, monthDuration)////як зробити відстань між title та monthDuration?
//     div.appendChild(divElement)
// }

// - Є масив
// За допомоги скрипту для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let ul = document.createElement('ul');
// document.body.appendChild(ul)
// // let div = document.createElement('div');
// // document.body.appendChild(div);
// for (const coursesArr of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.classList.add('item');
//
//     let h1 = document.createElement('h1');
//     h1.classList.add('heading');
//     h1.innerText=`${coursesArr.title}`
//
//     let p = document.createElement('p');
//     p.classList.add('description');
//     p.innerText=`${coursesArr.monthDuration}`
//
//     div.append(h1,p);
//     ul.appendChild(div)
// }   ///результат дуже схожий на попереднє завдання

//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
// let div = document.createElement('div');
// div.setAttribute('id','text');
// div.innerText='HELLO';
//
// let button = document.createElement('button');
// button.innerText='click me';
// button.onclick=()=>{
//     // div.style.display='none'
// div.classList.toggle('hide')///подивився в резолві
// };
// document.body.append(div,button)

//     - створити "інпут" який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача
// let input = document.createElement('input');
// input.type = 'number'
// input.placeholder = 'age'
//
// let button = document.createElement('button');
// button.innerText = 'click'
//
// document.body.append(input, button);
//
// button.onclick = () => {
//     let value = input.value;
//     if (value < 18) {
//         alert('child')
//     } else if (value>=18 && value<100){
//         alert('adult')
//     }else {alert('dead')}
// }

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячейок, третій вміст ячейок.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)
// let input1 = document.createElement('input');
// input1.placeholder = 'number of rows';
//
// let input2 = document.createElement('input');
// input2.placeholder = 'number of columns';
//
// let input3 = document.createElement('input');
// input3.placeholder = 'text';
//
// let button = document.createElement('button');
// button.innerText = 'click';
//
// document.body.append(input1, input2, input3, button);
//
// button.addEventListener('click', function () {
//     let row = input1.value;
//     let cell = input2.value;
//     let text = input3.value;
//
//     const generator = (row, cell, text) => {
//
//         let table = document.createElement('table');
//         document.body.appendChild(table);
//
//         for (let i = 0; i < row; i++) {
//             let row = document.createElement('tr');
//             table.appendChild(row);
//
//             for (let j = 0; j < cell; j++) {
//                 let cell = document.createElement('td');
//                 cell.innerText = `${text}`
//                 row.appendChild(cell)
//             }
//         }
//     }
//     generator(row, cell, text)
// })




















