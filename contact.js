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
            "Close menu"
        );

    } else {

        menuBtn.textContent = "☰";

        menuBtn.setAttribute(
            "aria-label",
            "Open menu"
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

                mobileNav.classList.remove("a-res1");

                if (menuBtn) {

                    menuBtn.textContent = "☰";

                    menuBtn.setAttribute(
                        "aria-label",
                        "Open menu"
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

            mobileNav.classList.remove("a-res1");

            menuBtn.textContent = "☰";

            menuBtn.setAttribute(
                "aria-label",
                "Open menu"
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

            mobileNav.classList.remove("a-res1");

            if (menuBtn) {

                menuBtn.textContent = "☰";

                menuBtn.setAttribute(
                    "aria-label",
                    "Open menu"
                );
            }

        }

    }
);


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.querySelector("#contact-form");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();

            const submitBtn =
                contactForm.querySelector(".submit-btn");

            if (!submitBtn) {
                return;
            }


            /* SENDING */

            submitBtn.innerHTML = `
                Sending...
                <span>→</span>
            `;

            submitBtn.disabled = true;


            try {

                const response = await fetch(
                    contactForm.action,
                    {
                        method: "POST",

                        body: new FormData(contactForm),

                        headers: {
                            "Accept": "application/json"
                        }
                    }
                );


                /* SUCCESS */

                if (response.ok) {

                    submitBtn.innerHTML = `
                        Message Sent Successfully ✓
                    `;

                    contactForm.reset();


                    setTimeout(
                        function () {

                            submitBtn.innerHTML = `
                                Send Message
                                <span>→</span>
                            `;

                            submitBtn.disabled = false;

                        },
                        2000
                    );

                }


                /* ERROR */

                else {

                    submitBtn.innerHTML = `
                        Failed to Send
                        <span>✕</span>
                    `;


                    setTimeout(
                        function () {

                            submitBtn.innerHTML = `
                                Send Message
                                <span>→</span>
                            `;

                            submitBtn.disabled = false;

                        },
                        2000
                    );

                }


            } catch (error) {

                submitBtn.innerHTML = `
                    Something Went Wrong
                    <span>✕</span>
                `;


                setTimeout(
                    function () {

                        submitBtn.innerHTML = `
                            Send Message
                            <span>→</span>
                        `;

                        submitBtn.disabled = false;

                    },
                    2000
                );

            }

        }
    );

}