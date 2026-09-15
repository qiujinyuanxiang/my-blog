import "./css/style.css";
import { createHeader } from "./components/Header.js";
import { createSearchBox } from "./components/SearchBox.js";
import { setupTheme } from "./theme.js";
import { renderPosts } from "./posts.js";
import { fetchPosts } from "./api.js";


const app = document.querySelector("#app");

if(app) {
    app.innerHTML = `${createHeader()}
                    <main>
                        <section class="articles">
                            <h2>最新文章</2>
                            ${createSearchBox()}
                            <div id="post-list>
                            </div>
                        </section>
                        <section class=about">
                            <h2>关于我</h2>
                            <p>
                            这是我的个人博客。
                            </p>
                        </section>
                    </main>
                    `;

}

setupTheme();

async function init() {
    const posts = await fetchPosts();

    renderPosts(posts, "");
}

init();
