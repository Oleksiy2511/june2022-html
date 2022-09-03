// --// В index.html-->
// --// 1 отримати масив об'єктів з endpoint`a https://jsonplaceholder.typicode.com/users-->
// --// 2 Вивести id, name всіх user в index.html. Окремий блок для кожного user.-->
// --// 3 Додати кожному блоку кнопку/посилання, при кліку на яку відбувається перехід на сторінку user-details.html, котра має детальну інформацію про об'єкт на який клікнули-->
// --//  css//  index.html - всі блоки з user - по 2 в рядок. кнопки/посилання розташувати під інформацією про user.-->

let index = document.getElementsByClassName('index')[0];
document.body.appendChild(index);
fetch(' https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const user of users) {
            let userDiv = document.createElement('div');
            userDiv.classList.add('userDiv');
            userDiv.innerText = `${user.id} __ ${user.name}`

            let a = document.createElement('a');
            a.classList.add('a');
            a.href = `user-details.html?id=${user.id}`
            a.innerText = 'user-details'
            userDiv.appendChild(a);
            index.appendChild(userDiv)
        }
    })




