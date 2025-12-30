const menu = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('#navLinks');

// Fungsi untuk toggle menu pada tampilan mobile
menu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Menutup menu saat salah satu link diklik
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});