// Add active class to nav links on click
navLinks.forEach((link) => {
link.addEventListener("click", () => {
link.classList.add("active");
});
});

// Form validation and submission
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
e.preventDefault();
const name = document.querySelector("input[name='name']").value;
const email = document.querySelector("input[name='email']").value;
const message = document.querySelector("textarea").value;
// Add form submission logic here
});

// Add scrolling effect to hero section
const hero = document.querySelector(".hero");
window.addEventListener("scroll")
