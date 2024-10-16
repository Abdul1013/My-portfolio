window.onload = function() {
  const loader = document.getElementById('loader');
  const content = document.getElementById('content');

  // Hide loader
  loader.style.display = 'none';

  // Show content with a fade-in effect
  content.style.display = 'block';
  setTimeout(() => content.classList.add('show-content'), 100);
};

function updateDateTime() {
  const now = new Date();
  const currentDateTime = now.toLocaleString();
  document.querySelector("#datetime").textContent = currentDateTime;
}
setInterval(updateDateTime, 1000);

document.addEventListener("DOMContentLoaded", () => {
  const updateDay = () => {
    const now = new Date();
    const options = { weekday: "long" };
    const currentDay = now.toLocaleDateString("en-US", options);

    document.querySelector('[data-testid="currentDay"]').textContent =
      currentDay;
  };

  updateDay();
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });
});


//contact form
const contactForm = document.getElementById("contactForm");
const contactSuccessMsg = document.getElementById("contactSuccessMsg");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault(); 

  const name = document.getElementById("contactName").value;
  const email = document.getElementById("contactEmail").value;
  const message = document.getElementById("contactMessage").value;

  console.log("Contact Form Submitted:", { name, email, message });

  contactSuccessMsg.style.display = "block";
  contactForm.reset();
});

// Handle Subscription Form Submission
const subscriptionForm = document.getElementById("subscriptionForm");
const subscribeSuccessMsg = document.getElementById("subscribeSuccessMsg");

subscriptionForm.addEventListener("submit", function (event) {
  event.preventDefault(); 

 
  const email = document.getElementById("subscriptionEmail").value;


  console.log("Subscription Form Submitted:", { email });

  subscribeSuccessMsg.style.display = "block";

 
  subscriptionForm.reset();
});
