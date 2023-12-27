var footerItems = document.getElementsByClassName("footer-h4-div");
var index;

const menuButton = document.querySelector(".hamburger");
const navigationMenu = document.querySelector(".nav-menu");
const shoppingCart = document.querySelector(".cart");
const menuIcon = document.querySelector(".menu-div");

menuButton.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
    menuButton.classList.toggle("active");
    navigationMenu.classList.toggle("active");
    shoppingCart.classList.toggle("none");
    menuIcon.classList.toggle("close");
}

for (index = 0; index < footerItems.length; index++) {
    footerItems[index].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

for (index = 0; index < footerItems.length; index++) {
    footerItems[index].addEventListener("click", function () {
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

var resizeHandler = function () {
    if (window.innerWidth > 880) {
        /*your functions for big screen*/
        window.location.reload(true);
        // window.location.href = "/#footer";
    }
};

window.addEventListener("resize", resizeHandler);
window.addEventListener("onload", resizeHandler);


