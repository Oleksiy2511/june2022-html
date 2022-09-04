// <!--// На сторінці user-details.html:-->
// <!--// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули-->
// <!--// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера-->
// <!--// (для отримання постів використовуйте эндпоінт https://jsonplaceholder.typicode.com/users/USER_ID/posts)-->
// <!--// 6 Кожному посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.-->
let htmlDivElement = document.createElement('div');
htmlDivElement.classList.add('header');
document.body.appendChild(htmlDivElement)

let userDetails = document.getElementsByClassName('userDetails')[0];
document.body.appendChild(userDetails)
htmlDivElement.appendChild(userDetails)
let url = new URL(location.href);
console.log(url);
let id = url.searchParams.get('id');
console.log(id);

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response =>response.json() )
    .then(user => {
      const createUser = (obj) => {
          for (const objKey in obj) {
              if (typeof obj[objKey]!=='object'){
                  let div = document.createElement('div');
                  div.innerText=`${objKey}: ${obj[objKey]}`;
                  userDetails.appendChild(div)
              }else {createUser(obj[objKey])}
          }
      };createUser(user);
    });


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
// }

let btn = document.createElement('button');
btn.classList.add('btn');
btn.innerText='posts';
htmlDivElement.appendChild(btn)
btn.onclick=e => {
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then(response => response.json())
        .then(posts => {
            let ul = document.createElement('ul');
            ul.classList.add('ulUserDetails');
            for (const post of posts) {
                let li = document.createElement('li');
                li.classList.add('liUserDetail');
                li.innerText = post.title;

                let a = document.createElement('a');
                a.classList.add('a')
                a.href = `post-details.html?postId=${post.id}`
                a.innerText = 'post-details';

                li.appendChild(a);
                userDetails.append(li)

            }
        })
}


