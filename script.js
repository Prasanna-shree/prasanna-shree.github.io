document.getElementById('year').textContent = new Date().getFullYear();

const roles = [
  'Aspiring Data Analyst',
  'Data Analytics Enthusiast',
  'Business Intelligence Learner',
  'Data Visualization Enthusiast'
];

const target = document.getElementById('typing');
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeRole() {
  const word = roles[roleIndex];
  target.textContent = deleting ? word.substring(0, charIndex--) : word.substring(0, charIndex++);
  let delay = deleting ? 45 : 85;

  if (!deleting && charIndex > word.length) {
    delay = 1400;
    deleting = true;
  } else if (deleting && charIndex < 0) {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    charIndex = 0;
    delay = 350;
  }
  setTimeout(typeRole, delay);
}
typeRole();
