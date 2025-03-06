// Fonction pour mettre en surbrillance la section active du menu
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");

    // Fonction de mise à jour de la classe active
    function updateActiveLink() {
        let currentSection = null;
        const sections = document.querySelectorAll("section");

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.id;
            }
        });

        navLinks.forEach((link) => {
            if (link.getAttribute("href").slice(1) === currentSection) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    // Met à jour la section active lors du défilement
    window.addEventListener("scroll", updateActiveLink);

    // Ajout de l'effet de surbrillance lors du premier chargement
    updateActiveLink();

    // Fonction de recherche (similaire à une fonction de base)
    const searchInput = document.querySelector("#search input");

    searchInput.addEventListener("input", function() {
        const query = searchInput.value.toLowerCase();
        const sections = document.querySelectorAll("section");

        sections.forEach((section) => {
            const sectionText = section.textContent.toLowerCase();
            if (sectionText.includes(query)) {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        });
    });
});
