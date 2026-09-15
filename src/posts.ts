import type { Post } from "./types.js"
import { createPostList } from "./components/PostList.js";


function renderPosts(posts: Post[], searchText: string) {
    const filteredPosts = posts.filter(function(post){
        return (post.title.includes(searchText) || post.body.includes(searchText));
    });

    const postList = document.querySelector("#post-List");

    if(postList){
        postList.innerHTML = createPostList(filteredPosts);
    }

}

export {
    renderPosts
};