// common.js
// Function to load external HTML into a specified element
function loadHTML(elementId, file) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', file, true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById(elementId).innerHTML = xhr.responseText;
        } else {
            console.error("Failed to load " + file);
        }
    };
    xhr.send();
}

const basePath = `${window.location.protocol}//${window.location.host}/`;
const currentPathTest = window.location.pathname;
console.log("Current path:", currentPathTest);

// Call the function to load the header and footer
document.addEventListener("DOMContentLoaded", function() {
    loadHTML("header-placeholder", basePath + "header.html");
    loadHTML("footer-placeholder", basePath + "footer.html");
});

