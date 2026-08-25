// =========================================================
// MOBILE NAVIGATION
// =========================================================

const menuBtn = document.querySelector(".menu-btn");
const mobileNav = document.querySelector(".a-res");


// =========================================================
// OPEN / CLOSE MENU
// =========================================================

function nav() {

    if (!mobileNav || !menuBtn) {
        return;
    }

    mobileNav.classList.toggle("a-res1");

    menuBtn.classList.toggle("active");

}


// =========================================================
// CLOSE MENU WHEN A LINK IS CLICKED
// =========================================================

if (mobileNav) {

    const navLinks = mobileNav.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mobileNav.classList.remove("a-res1");

            if (menuBtn) {
                menuBtn.classList.remove("active");
            }

        });

    });

}


// =========================================================
// CLOSE MENU WHEN CLICKING OUTSIDE
// =========================================================

document.addEventListener("click", function (event) {

    if (!menuBtn || !mobileNav) {
        return;
    }

    if (
        !menuBtn.contains(event.target) &&
        !mobileNav.contains(event.target)
    ) {

        mobileNav.classList.remove("a-res1");

        menuBtn.classList.remove("active");

    }

});


// =========================================================
// CLOSE MENU WHEN SCREEN BECOMES DESKTOP SIZE
// =========================================================

window.addEventListener("resize", function () {

    if (window.innerWidth > 768 && mobileNav) {

        mobileNav.classList.remove("a-res1");

        if (menuBtn) {
            menuBtn.classList.remove("active");
        }

    }

});