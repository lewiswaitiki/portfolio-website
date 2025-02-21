const toggleButton = document.getElementById('toggle-button');
  const navMenu = document.querySelector('nav ul');

  toggleButton.addEventListener('click', () => {
      navMenu.classList.toggle('show'); // Toggle the 'show' class on the menu
  });



const skillsSection = document.getElementById('skills');
const skills = document.querySelectorAll('.progress-bar');
let animated = false; // To ensure animation runs only once
window.addEventListener('scroll', function() {
    const sectionPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (sectionPosition < screenPosition && !animated) {
        animated = true; // Prevent further animations
        skills.forEach(skill => {
            const width = skill.style.width; // Get the current width from inline style
            skill.style.width = '0%'; // Reset width before animation
            setTimeout(() => {
                skill.style.width = width; // Animate to original width
            }, 100);
        });
    }
});


// Form validation
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    alert('Please fill out all the fields');
    e.preventDefault(); // Prevent form submission
  } else {
    alert('Thank You For Your Message!');
  }
});

// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});



  
window.addEventListener('scroll', function() {
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
  