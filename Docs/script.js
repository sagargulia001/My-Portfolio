document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-menu ul');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active'); 
        });
        
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function(e) {
                navLinks.classList.remove('active');
                navToggle.classList.remove('active'); 
            });
        });
    }
    setTimeout(function() {
        const welcome = document.querySelector('.welcome-message');
        if (welcome) welcome.style.display = 'none';
        const mainContent = document.getElementById('main-content');
        if (mainContent) mainContent.style.opacity = 1;
        setTimeout(function() {
            var logo = document.querySelector('.logo');
            if (logo) {
                logo.style.opacity = 1;
                logo.style.animation = 'logo-fade-in 1.2s cubic-bezier(0.77,0,0.18,1) 1.5s 1 both';
            }
        }, 100);
    }, 1500);

   
    const sections = document.querySelectorAll('section, div[id]');
    const navLinksList = document.querySelectorAll('.nav-menu ul li a');

    function onScroll() {
        let scrollPos = window.scrollY || window.pageYOffset;
        let offset = window.innerHeight / 3;
        let found = false;

        const logo = document.querySelector('.logo');
        const navLinksList = document.querySelectorAll('.nav-menu ul li a');

        if (logo) {
            const logoRect = logo.getBoundingClientRect();
            if (logoRect.bottom > 0) {
                navLinksList.forEach(link => {
                    link.parentElement.classList.remove('active-section');
                    if (link.getAttribute('href').replace('#', '') === 'header') {
                        link.parentElement.classList.add('active-section');
                    }
                });
                return;
            }
        }

        const sections = document.querySelectorAll('section, div[id]');
        sections.forEach(section => {
            if (!section.id) return;
            const rect = section.getBoundingClientRect();
            const top = rect.top + window.scrollY - offset;
            const bottom = top + section.offsetHeight;
            if (scrollPos >= top && scrollPos < bottom) {
                navLinksList.forEach(link => {
                    link.parentElement.classList.remove('active-section');
                    if (link.getAttribute('href').replace('#', '') === section.id) {
                        link.parentElement.classList.add('active-section');
                    }
                });
                found = true;
            }
        });

        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 2)) {
            navLinksList.forEach(link => {
                link.parentElement.classList.remove('active-section');
                if (link.getAttribute('href').replace('#', '') === 'contact') {
                    link.parentElement.classList.add('active-section');
                }
            });
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); 

    const form = document.querySelector('.contact-form');
    const popup = document.getElementById('form-success-popup');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = form.querySelector('input[name="name"]');
            const email = form.querySelector('input[name="email"]');
            const message = form.querySelector('textarea[name="message"]');
            if (
                !name.value.trim() ||
                !email.value.trim() ||
                !message.value.trim() ||
                !email.checkValidity()
            ) {
                alert('Please fill in all fields with valid information.');
                return;
            }

            const formData = new FormData(form);

            fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            })
            .then(response => {
                if (response.ok) {
                    form.reset();
                    if (popup) {
                        popup.style.display = 'block';
                        popup.classList.add('show');
                        setTimeout(() => {
                            popup.classList.remove('show');
                            popup.style.display = 'none';
                        }, 3000);
                    }
                } else {
                    alert('There was a problem sending your message. Please try again.');
                }
            })
            .catch(() => {
                alert('There was a problem sending your message. Please try again.');
            });
        });
    }
});