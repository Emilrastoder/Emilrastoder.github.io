
    const images = ["psg1.jpg", "psg2.jpg"];
let currentIndex = 0;

function changeSlide(Siteinternet) {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("slide").src = images[currentIndex];
}

// Lancement du diaporama : toutes les 3 secondes
setInterval(changeSlide, 1500);


function showWelcome() {
    document.getElementById("welcomeMessage").textContent = "5% de réduction sur tout nos produits avec le code 'BONNET' " ; 
}


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        document.getElementById("formMessage").textContent = "Veuillez remplir tous les champs.";
    } else {
        document.getElementById("formMessage").textContent = `Merci ${name}, nous vous répondrons bientôt !`;
        this.reset();
    }
});
