import type { Post } from "./types.js"


function renderPosts(posts: Post[], searchText: string) {
    const filteredPosts = posts.filter(function (post) {
        const keyword = searchText.toLowerCase();
        return post.title.toLowerCase().includes(keyword) || post.body.toLowerCase().includes(keyword);
    });

    let html = "";

    if (filteredPosts.length === 0) {
        html = `
                <article>
                <p>没有找到文章</p>
                </article>
                `;
    }
    else {
        html = filteredPosts.map(function (post) {
            return `
        <article>
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <p>${post.id}</p>
        </article>
        `;
        }).join("");

    }
    const postList = document.querySelector("#post-list");
    if (postList) {
        postList.innerHTML = html;
    }
}

function setupSearch(posts: Post[]) {
    const searchInput = document.querySelector<HTMLInputElement>("#post-search");

    if (searchInput) {
        searchInput.addEventListener("input", function () {
            renderPosts(posts, searchInput.value);
        });
    }
}

export {
    renderPosts,
    setupSearch
};