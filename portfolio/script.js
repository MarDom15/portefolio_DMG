// Gérer la soumission du formulaire
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Merci pour votre message !');
});

// Animation des sections au scroll
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    observer.observe(section);
});
