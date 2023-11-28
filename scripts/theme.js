function toggleTheme() {
    const linkElement = document.getElementById("theme-style");

    if (linkElement.getAttribute("href") === "style.css") {
        linkElement.setAttribute("href", "light-theme.css");
    } else {
        linkElement.setAttribute("href", "style.css");
    }
}

function applyDarkTheme() {
    const linkElement = document.getElementById("theme-style");
    linkElement.setAttribute("href", "style.css");
}

function applyLightTheme() {
    const linkElement = document.getElementById("theme-style");
    linkElement.setAttribute("href", "light-theme.css");
}