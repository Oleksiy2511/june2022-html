// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x=+prompt('enter number')
// if (x!==0)
// {document.write('Вірно');}
// else {document.write('Невірно')}
//// {console.log('Вірно');}
//// else {console.log('Невірно')}
//////////////////////////////////////////////////////////////
// let x=+prompt('enter number') !==0 ? 'Вірно':'Невірно';
// console.log(x);
////////////////////////////////////////////////////////////////

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time=+prompt('число від 0 до 59')
// if (time>=0 && time<=15){
//     console.log('перша частина');}
// else if (time>=16&&time<=30){
//     console.log('другa частина');}
// else if (time>=31&&time<=45){
//     console.log('третя частина');}
// else if (time>=46&&time<=59){
//     console.log('четвертa частина');}

////////////////////////////////////////////////////////////
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day=+prompt('enter day (1 - 31)')
// if (day>=0 && day<=10){
//     console.log('перша декада');}
// else if (day>=11&&day<=20){
//     console.log('другa декада');}
// else if (day>=21&&day<=31){
//     console.log('третя декада');}
// else {console.log('високосний рік')}

////////////////////////////////////////////////////////////////////
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let week=+prompt('day (1-7)')
// switch (week){
//     case 1:
//         console.log('понеділок');break
//     case 2:
//         console.log('вівторок');break
//     case 3:
//         console.log('середа');break
//     case 4:
//         console.log('четверг');break
//     case 5:
//         console.log('пятниця');break
//     case 6:
//         console.log('субота');break
//     case 7:
//         console.log('завтра понеділок');break
// }

///////////////////////////////////////////////////////////////////////////////////////////
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
// let a=+prompt('number A')
// let b=+prompt('number B')
// if (a<b){
//     console.log(b)}
// else if (a>b){
//     console.log(a)
// }
// else if (a===b){
//     console.log('рівні числа')}

///////////////////////////////////////////////////
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
// let x=prompt('value') ||"default";
// console.log(x);


// let x=NaN || 'default';
// console.log(x);
//
// let x1='' || 'default';
// console.log(x1);
//
// let x2=0 || 'default';
// console.log(x2);
//
// let x3=null || 'default';
// console.log(x3);
//
// let x4=undefined|| 'default';
// console.log(x4);
//
// let x5='hello'|| 'default';
// console.log(x5);
//
// let x6=25|| 'default';
// console.log(x6);
//
// let x7=true|| 'default';
// console.log(x7);
//

// let xxx=0
// if (xxx===NaN){
//     console.log('default')}
// else if (xxx===undefined){
//     console.log('default')}
// else if (xxx===0){
//     console.log('default')}
// else if (xxx===null){
//     console.log('default')}
// else if (xxx===''){
//     console.log('default')}
// else {
//     console.log(xxx)}

// let xxx='дойшло';
// if (xxx){
//     console.log(xxx)}
// else {
//     console.log('default')}

// let xxx=25||'default';
// console.log(xxx);







