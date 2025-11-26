/* Mobile Navigation Script */
document.addEventListener('DOMContentLoaded', function () {
    // Create mobile menu toggle button
    const nav = document.querySelector('nav');
    if (!nav) return;

    // Create hamburger button
    const mobileMenuToggle = document.createElement('button');
    mobileMenuToggle.className = 'mobile-menu-toggle';
    mobileMenuToggle.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    mobileMenuToggle.setAttribute('aria-label', 'Toggle Menu');

    // Insert the toggle button after the logo
    const logo = nav.querySelector('.logo');
    if (logo) {
        logo.insertAdjacentElement('afterend', mobileMenuToggle);
    }

    // Get nav links
    const navLinks = nav.querySelector('.nav-links');
    if (!navLinks) return;

    // Toggle menu on button click
    mobileMenuToggle.addEventListener('click', function () {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking on a link
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function () {
            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
        if (!nav.contains(event.target)) {
            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});
