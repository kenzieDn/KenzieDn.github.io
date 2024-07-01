document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    window.addEventListener('scroll', function() {
        var navbar = document.getElementById('navbar');
        var heroHeight = document.querySelector('.hero').offsetHeight;
        var links = document.querySelectorAll('.nav-link');
        links.forEach(link => link.classList.remove('active'));
        if (window.scrollY > heroHeight) {
            navbar.classList.add('solid-nav');
            navbar.style.background = 'linear-gradient(to right, #333, #555)';
        } else {
            var opacity = Math.min(window.scrollY / heroHeight, 1);
            navbar.classList.remove('solid-nav');
            navbar.style.background = `rgba(51, 51, 51, ${opacity})`;
        }

        var sections = document.querySelectorAll('section');
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 60 && window.scrollY < section.offsetTop + section.offsetHeight - 60) {
                document.querySelector(`a[href="#${section.id}"]`).classList.add('active');
            }
        });
    });
});
