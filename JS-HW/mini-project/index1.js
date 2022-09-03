// В index.html
// 1 отримати масив об'єктів з endpoint`a https://jsonplaceholder.typicode.com/users
// 2 Вивести id, name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання, при кліку на яку відбувається перехід на сторінку user-details.html, котра має детальну інформацію про об'єкт на який клікнули

let indexDiv = document.getElementsByClassName('indexDiv')[0];
document.body.appendChild(indexDiv)

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => response.json())
    .then(users => {
        for (const user of users) {
            let divElement = document.createElement('div');
            divElement.classList.add('divElement');

            let divUser = document.createElement('div');
            divUser.classList.add('divUser');
            divUser.innerText = `${user.id}) ${user.name}`;

            let a = document.createElement('a');
            a.classList.add('a');
            a.href = `post_of_current_user.html?id=${user.id}`;
            a.innerText = 'user-details2';
            divElement.append(divUser, a)
            indexDiv.appendChild(divElement)
        }
    });
