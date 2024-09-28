//smooth scrolling
document.querySelectorAll('nav a').forEach(anchor=>{
  anchor.addEventListener('click',function(e){
    e.preventDefault();
    const targetid = this.getAttribute('href');
    const targetElement = document.querySelector(targetid);
    targetElement.scrollIntoView({
      behavior:'smooth',
      block:'start'
    });
  });
});


// form validation
const form =document.querySelector('form')
form.addEventListener('submit',function(e){
  const name =form.name.value.trim();
  const email = form.email.value.trim();
  const meassage = form.message.value.trim();

  if (!name || !email || !meassage){
    alert('please fill outr all the fields')
    e.preventDefault(); //prevent form submission
  
  }
  else {
    alert('Thank You For Your Message!')
  }



})




// Skills progress animation
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


//toggle navigation menu on mobile

const toggleButton = document.getElementById('toggle-button');
const navMenu = document.querySelector('nav ul');

toggleButton.addEventListener('click', () => {
  navMenu.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
});
