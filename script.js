// Gérer la soumission du formulaire
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    alert('Merci pour votre message !'); // Affiche un message de confirmation
});

// Animation des sections au scroll
const sections = document.querySelectorAll('section'); // Sélectionne toutes les sections
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Ajoute la classe 'visible' si la section est dans la vue
        }
    });
}, { threshold: 0.2 }); // Déclenche l'animation lorsque 20% de la section est visible

sections.forEach(section => {
    observer.observe(section); // Observe chaque section
});