(function ($) {
    "use strict";

    var spinner = function () {
        setTimeout(function () {
            if ($("#spinner").length > 0) {
                $("#spinner").removeClass("show");
            }
        }, 1);
    };
    spinner();

    new WOW().init();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $(".sticky-top").addClass("shadow-sm").css("top", "0px");
            $(".back-to-top").fadeIn("slow");
        } else {
            $(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
            $(".back-to-top").fadeOut("slow");
        }
    });

    $(".back-to-top").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
        return false;
    });

    if ($("[data-toggle='counter-up']").length) {
        $("[data-toggle='counter-up']").counterUp({
            delay: 10,
            time: 2000
        });
    }

    if ($(".date").length) {
        $(".date").datetimepicker({ format: "L" });
    }

    if ($(".time").length) {
        $(".time").datetimepicker({ format: "LT" });
    }

    if ($(".header-carousel").length) {
        $(".header-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1500,
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            dotsData: true
        });
    }

    if ($(".testimonial-carousel").length) {
        $(".testimonial-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            dotsData: true
        });
    }
})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
    if (typeof Swiper !== "undefined" && document.querySelector(".clients-slider")) {
        new Swiper(".clients-slider", {
            loop: true,
            speed: 4000,
            autoplay: {
                delay: 1,
                disableOnInteraction: false
            },
            slidesPerView: "auto",
            spaceBetween: 24,
            breakpoints: {
                320: { slidesPerView: 2, spaceBetween: 16 },
                640: { slidesPerView: 3, spaceBetween: 20 },
                992: { slidesPerView: 4, spaceBetween: 24 },
                1200: { slidesPerView: 5, spaceBetween: 24 }
            }
        });
    }

    var contactForm = document.getElementById("contactForm");
    if (contactForm) {
        var status = document.getElementById("contactFormStatus");

        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            var name = document.getElementById("name").value.trim();
            var email = document.getElementById("email").value.trim();
            var phone = document.getElementById("phone").value.trim();
            var serviceType = document.getElementById("serviceType").value.trim();
            var message = document.getElementById("message").value.trim();

            if (!name || !email || !message) {
                if (status) {
                    status.textContent = "ZÉ™hmÉ™t olmasa ad, email vÉ™ mesaj sahÉ™lÉ™rini doldurun.";
                }
                return;
            }

            var subject = encodeURIComponent("Yeni mÃ¼raciÉ™t: " + serviceType);
            var body = encodeURIComponent(
                "Ad: " + name + "\n" +
                "Email: " + email + "\n" +
                "Telefon: " + (phone || "-") + "\n" +
                "Ä°stiqamÉ™t: " + serviceType + "\n\n" +
                "Mesaj:\n" + message
            );

            if (status) {
                status.textContent = "E-poÃ§t proqramÄ±nÄ±z aÃ§Ä±lÄ±r...";
            }

            window.location.href = "mailto:info@mrs.az?subject=" + subject + "&body=" + body;
        });
    }
});
