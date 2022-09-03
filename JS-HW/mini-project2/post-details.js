// <!--//     На сторінці post-details.html:-->
// <!--// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клацнули.-->
// <!--// 8 Нижче від інформації про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)-->
let postDetails = document.getElementsByClassName('postDetails')[0];
document.body.appendChild(postDetails);


let url = new URL(location.href);
console.log(url);
let postId = url.searchParams.get('postId');
console.log(postId);

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => response.json())
    .then(comments => {
        let ulComment = document.createElement('ul');
        for (const comment of comments) {
            let liComment = document.createElement('li');
            liComment.innerText=comment.id+' '+comment.name ;
            liComment.classList.add('liComment');

            let p = document.createElement('p');
            p.innerText=comment.body;
            p.classList.add('p');
            liComment.appendChild(p);

            postDetails.appendChild(liComment);
        }
    })

