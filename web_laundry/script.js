const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", function() {
    nav.classList.toggle("active");
});

document.querySelectorAll(".nav a").forEach(function(link) {
    link.addEventListener("click", function() {
        nav.classList.remove("active");
    });
});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Pesan berhasil dikirim. Terima kasih telah menghubungi LAUNDRY.");

    contactForm.reset();
});
