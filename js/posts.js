import { posts } from "./data.js";

function renderPosts(searchText) {
    const filteredPosts = posts.filter(function (post) {
        return post.title.includes(searchText) || post.description.includes(searchText);
    });

    const html = filteredPosts.map(function (post) {
        return `
        <article>
        <h3>${post.title}</h3>
        <p>${post.description}</p>
        <time datetime="${post.date}">${post.date}</time>
        </article>
        `;
    }).join("");

    const postList = document.querySelector("#post-list");

    if (postList) {
        postList.innerHTML = html;
    }
}

function setupSearch() {
    const searchInput = document.querySelector("#post-search");

    if (searchInput) {
        searchInput.addEventListener("input", function () {
            renderPosts(searchInput.value);
        });
    }
}

export {
    renderPosts,
    setupSearch
};