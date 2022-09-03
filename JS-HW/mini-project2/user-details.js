// <!--// На сторінці user-details.html:-->
// <!--// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули-->
// <!--// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера-->
// <!--// (для отримання постів використовуйте эндпоінт https://jsonplaceholder.typicode.com/users/USER_ID/posts)-->
// <!--// 6 Кожному посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.-->
let userDetails = document.getElementsByClassName('userDetails')[0];
document.body.appendChild(userDetails)

let url = new URL(location.href);
console.log(url);
let id = url.searchParams.get('id');
console.log(id);

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
            userDetails.appendChild(li)

        }
    })



