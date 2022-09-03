// На сторінці user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для отримання постів використовуйте эндпоінт https://jsonplaceholder.typicode.com/users/USER_ID/posts.
//     6 Кожному посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

let url = new URL(location.href);
console.log(url);
let id = url.searchParams.get('id');
console.log(id);

let userDetails = document.getElementsByClassName('userDetails')[0];
document.body.appendChild(userDetails);


fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.json())
    .then(users => {
        for (const user of users) {
let userDetail = document.createElement('div');

userDetail.innerHTML=`<h3>username: ${user.username}</h3>
<h4>email: ${user.email}</h4>
<p>addres:${user.address}</p>
`
// userDetail.innerText=`${user.title}`;
document.body.appendChild(userDetail)
        }
        }
    )
////////////////////////////////////////
/////////////////////////////////////////
// "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//     "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//         "lat": "-37.3159",
//             "lng": "81.1496"
//     }
// },
// "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//     "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"