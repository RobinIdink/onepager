/*jslint browser:true */
let targetId;
let targetElement;
document.querySelectorAll("a[href^='#']").forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        targetId = anchor.getAttribute("href");
        if (targetId) {
            targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.style.scrollMarginTop = "80px";
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    });
});

function scrollToAbout() {
    const aboutElement = document.getElementById("about");
    if (aboutElement) {
        aboutElement.style.scrollMarginTop = "80px";
        aboutElement.scrollIntoView({
            behavior: "smooth"
        });
    }
}
