import { setupTheme } from "./theme.js";
import { setupSearch, renderPosts } from "./posts.js";
import { fetchPosts } from "./api.js"

setupTheme();

async function init() {
    try {
        const data = await fetchPosts();
        const loading = document.querySelector("#loading");
        if (loading) {
            loading.textContent = "";
        }
        renderPosts(data, "");
        setupSearch(data);
    } catch (error) {
        console.error(error);
        const loading = document.querySelector("#loading");
        if (loading) {
            loading.textContent = "";
        }
        const list = document.querySelector("#post-list");
        if (list) {
            list.textContent = "加载文章失败，请稍后重试。";
        }
    }
}

init();
