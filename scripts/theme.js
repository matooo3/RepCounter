function toggleTheme() {
    const linkElement = document.getElementById("theme-style");

    if (linkElement.getAttribute("href") === "style.css") {
        linkElement.setAttribute("href", "light-theme.css");
    } else {
        linkElement.setAttribute("href", "style.css");
    }
}
