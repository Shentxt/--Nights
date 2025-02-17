window.redirectToExtensionPage = function () {
    var userAgent = navigator.userAgent;

    if (userAgent.includes("Firefox")) {
        window.location.href = "https://addons.mozilla.org/firefox/";
    } else if (userAgent.includes("Chrome")) {
        window.location.href = "https://chrome.google.com/webstore/";
    }
};

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("extension").addEventListener("click", redirectToExtensionPage);
});