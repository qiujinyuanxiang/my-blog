function createHeader() {
    return `
    <header>
        <h1>My Blog</h1>
        
        <nav>
            <a href="/">首页</a>
            <a href="/articles>文章</a>
            <a href="/about>关于我</a>
        </nav>
        
        <button id="theme-btn>
            切换主题
        </button>
        
    </header>
    `;
}

export {
    createHeader
};