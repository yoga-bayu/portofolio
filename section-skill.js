// scroll reveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.isi-content, .title', { origin: 'top' });
ScrollReveal().reveal('.content-lanjutan', { origin: 'bottom' });
ScrollReveal().reveal('', { origin: 'left' });
ScrollReveal().reveal('.content-img', { origin: 'right' });