const menuBtn = document.querySelector(".menu-btn");
const mobileNav = document.querySelector(".a-res");


/* =====================================================
   OPEN / CLOSE MENU
===================================================== */

function nav() {

    if (!mobileNav || !menuBtn) {
        return;
    }

    mobileNav.classList.toggle("a-res1");

    if (mobileNav.classList.contains("a-res1")) {

        menuBtn.textContent = "✕";

        menuBtn.setAttribute(
            "aria-label",
            "Close navigation menu"
        );

    } else {

        menuBtn.textContent = "☰";

        menuBtn.setAttribute(
            "aria-label",
            "Open navigation menu"
        );
    }
}


/* =====================================================
   CLOSE MENU WHEN LINK IS CLICKED
===================================================== */

if (mobileNav) {

    const navLinks =
        mobileNav.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                mobileNav.classList.remove(
                    "a-res1"
                );

                if (menuBtn) {

                    menuBtn.textContent = "☰";

                    menuBtn.setAttribute(
                        "aria-label",
                        "Open navigation menu"
                    );
                }
            }
        );
    });
}


/* =====================================================
   CLOSE MENU WHEN CLICKING OUTSIDE
===================================================== */

document.addEventListener(
    "click",
    function (event) {

        if (!mobileNav || !menuBtn) {
            return;
        }

        if (
            mobileNav.classList.contains("a-res1") &&
            !mobileNav.contains(event.target) &&
            !menuBtn.contains(event.target)
        ) {

            mobileNav.classList.remove(
                "a-res1"
            );

            menuBtn.textContent = "☰";

            menuBtn.setAttribute(
                "aria-label",
                "Open navigation menu"
            );
        }
    }
);


/* =====================================================
   CLOSE MENU WHEN SCREEN BECOMES DESKTOP
===================================================== */

window.addEventListener(
    "resize",
    function () {

        if (
            window.innerWidth > 768 &&
            mobileNav
        ) {

            mobileNav.classList.remove(
                "a-res1"
            );

            if (menuBtn) {

                menuBtn.textContent = "☰";

                menuBtn.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );
            }
        }
    }
);