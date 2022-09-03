//// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера-->
//// (для отримання постів використовуйте эндпоінт https://jsonplaceholder.typicode.com/users/USER_ID/posts)-->
//// 6 Кожному посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.-->

let postCurrent = document.getElementsByClassName('postCurrent')[0];
document.body.appendChild(postCurrent)


let url = new URL(location.href);
console.log(url);
let id = url.searchParams.get('userId');
console.log(id);

fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then(resp => resp.json())
    .then(posts => {
        let ul = document.createElement('ul');
        ul.classList.add('ul');

        for (let post of posts) {
            let li = document.createElement('li');
            li.classList.add('li');

            let h2 = document.createElement('h2');
            h2.innerText = post.title;

            let p = document.createElement('p');
            p.innerText = post.body;

            let a = document.createElement('a');
            a.classList.add('a');
            a.href = `post-details.html?postId=${id}`
            a.innerText = 'post of current user'
            li.append(h2, p, a);
            ul.appendChild(li);

        }
        postCurrent.appendChild(ul)

    })
