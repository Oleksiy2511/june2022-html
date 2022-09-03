// <!--//     На сторінці post-details.html:-->
// <!--// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .-->
// <!--// 8 Нижче інформації про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)-->

let postDetails4 = document.getElementsByClassName('postDetails')[0];
document.body.appendChild(postDetails4)


let url = new URL(location.href);
console.log(url);
let postId = url.searchParams.get('postId');
console.log(postId);

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(resp => resp.json())
.then(comments =>{
    let ul = document.createElement('ul');
    for (const comment of comments) {
        let li = document.createElement("li");
        li.classList.add('li')
        li.innerText=comment.body;
        ul.appendChild(li);
    }
    postDetails4.appendChild(ul)

} )