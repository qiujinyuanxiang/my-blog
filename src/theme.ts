function setupTheme() {
    const button = document.querySelector<HTMLButtonElement>("#theme-btn");

    if (button) {
        button.addEventListener("click", function () {
            document.body.classList.toggle("dark");
        });
    }
}

export {
    setupTheme
};