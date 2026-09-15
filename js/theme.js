function setupTheme() {
    const button = document.querySelector("#theme-btn");

    if (button) {
        button.addEventListener("click", function () {
            document.body.classList.toggle("dark");
        });
    }
}

export {
    setupTheme
};