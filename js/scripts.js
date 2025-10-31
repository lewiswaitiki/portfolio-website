document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded ✅');

  // 🔘 Mobile Menu Toggle
  const toggleButton = document.getElementById('toggle-button');
  const navMenu = document.querySelector('nav ul');

  toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  // 🧠 Smooth Scrolling
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // 🧭 Active Link Highlighting
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + section.id) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // 📊 Skills Bar Animation
  const skillsSection = document.getElementById('skills');
  const skills = document.querySelectorAll('.progress-bar');
  let animated = false;

  window.addEventListener('scroll', () => {
    const sectionPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (sectionPosition < screenPosition && !animated) {
      animated = true;
      skills.forEach(skill => {
        const width = skill.style.width;
        skill.style.width = '0%';
        setTimeout(() => {
          skill.style.width = width;
        }, 100);
      });
    }
  });

  // 📩 Form Validation
  const form = document.querySelector('form');
  form.addEventListener('submit', function(e) {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert('Please fill out all the fields');
      e.preventDefault();
    } else {
      alert('Thank You For Your Message!');
    }
  });

  // ✨ Scroll Reveal Animation
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  reveals.forEach(section => observer.observe(section));
});
