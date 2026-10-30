// Mobile navigation toggle
const navLinks = document.querySelector('.nav-links');
document.querySelector('.hamburger')?.addEventListener('click', () => navLinks?.classList.toggle('active'));
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => navLinks?.classList.remove('active')));

// Scroll fade-in animation
const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            obs.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: "0px 0px -20px 0px" });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
