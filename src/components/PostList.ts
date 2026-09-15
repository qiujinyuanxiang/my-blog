import type { Post } from "../types.js";

function createPostList(posts: Post[]) {

    if(posts.length === 0) {
        return `
        <article>
            <p>没有找到文章</p>
        <article>
        `;
    }

    return posts.map(function(post){
        return `
        <article>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <time datetime="${post.id}>
                ${post.id}
            </time>
        </article>
        `;
    }).join("");
}

export {
    createPostList
};