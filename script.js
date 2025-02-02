document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links a");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    navItems.forEach(item => {
        item.addEventListener("click", function() {
            navLinks.classList.remove("active");
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            setTimeout(() => {
                target.scrollIntoView({ behavior: "smooth" });
            }, 100); // Small delay to ensure the page loads first
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("image-popup");
    const popupImg = document.getElementById("popup-img");
    const closeBtn = document.querySelector(".close");
    const images = document.querySelectorAll(".popup-trigger");

    images.forEach(img => {
        img.addEventListener("click", function () {
            popup.style.display = "block";
            popupImg.src = this.src;
        });
    });

    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });

    popup.addEventListener("click", function (e) {
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });
});


function orderViaWhatsApp(productName, imageUrl) {
    let phoneNumber = "918824470327";

    let message = `Hello I want to order: *${productName}*%0AHere is the image: ${imageUrl}%0AClick the link to view the image.`;

    let whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
};