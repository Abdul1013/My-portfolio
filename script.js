
function updateDateTime() {
 
    const now = new Date();
    const currentDateTime = now.toLocaleString();
    document.querySelector('#datetime').textContent = currentDateTime;
  }
  setInterval(updateDateTime, 1000);

  document.addEventListener("DOMContentLoaded", () => {
    const updateDay = () => {
        const now = new Date();
        const options = { weekday: 'long' }; 
        const currentDay = now.toLocaleDateString('en-US', options); 

        document.querySelector('[data-testid="currentDay"]').textContent = currentDay;
    };

    updateDay(); 
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
