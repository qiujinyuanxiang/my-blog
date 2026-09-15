function setupTheme() {
    const button = document.querySelector("#theme-btn");
    if (button) {
        button.addEventListener("click", function () {
            document.body.classList.toggle("dark");
        });
    }
}

function setupSearch() {
    const searchInput = document.querySelector("#post-search");
    if (searchInput) {
        searchInput.addEventListener("input", function () {
            const filteredPosts = posts.filter(function (post) {
                return post.title.includes(searchInput.value);
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
        });
    }
}

const posts = [
    {
        title: "我的第一篇文章",
        description: "这是我的第一篇博客文章",
        date: "2026-09-14",
    },
    {
        title: "开始学习全栈开发",
        description: "从今天开始，我将一步一步学习全栈开发",
        date: "2026-09-13",
    },
    {
        title: "Mac的使用",
        description: "学习如何使用Mac",
        date: "2026-09-15",
    }
];

const html = posts.map(function (post) {
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

setupSearch();
setupTheme();