const hamMenu = document.querySelector(".hamMenu");

const offScreenMenu = document.querySelector(".offScreenMenu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});


// header animation

document.addEventListener('scroll', () => {
  const navbar = document.querySelector('#navbar');

  if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});


// get involved

document.getElementById('payment-form').addEventListener('submit', function(event) {
  // Prevent form submission for validation
  event.preventDefault();

  // Collecting form data
  const amount = document.getElementById('amount').value;
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const cardNumber = document.getElementById('card_number').value;
  const expiry = document.getElementById('expiry').value;
  const cvv = document.getElementById('cvv').value;

  // Simple validation
  if (!amount || !name || !email || !phone || !cardNumber || !expiry || !cvv) {
      alert('Please fill in all required fields.');
      return;
  }

  // Proceed with form submission
  this.submit();
});