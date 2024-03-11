// Get references to login form, signup form, and buttons to switch between them
const loginForm = document.getElementById('loginForm'); // Reference to login form
const signupForm = document.getElementById('signupForm'); // Reference to signup form
const showSignupBtn = document.getElementById('showSignup'); // Button to show signup form
const showLoginBtn = document.getElementById('showLogin'); // Button to show login form

// Event listener to switch to signup form when the 'Sign Up' button is clicked
showSignupBtn.addEventListener('click', () => {
    loginForm.classList.add('hidden'); // Hide login form
    signupForm.classList.remove('hidden'); // Show signup form
});

// Event listener to switch to login form when the 'Sign In' button is clicked
showLoginBtn.addEventListener('click', () => {
    loginForm.classList.remove('hidden'); // Show login form
    signupForm.classList.add('hidden'); // Hide signup form
});
