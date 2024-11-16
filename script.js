const predefinedPasskey = "12345";

const loginButton = document.getElementById('loginButton');
const registerButton = document.getElementById('registerButton');
const passkeyInput = document.getElementById('passkey');
const errorMessage = document.getElementById('error-message');

loginButton.addEventListener('click', function () {
    const enteredPasskey = passkeyInput.value;

    if (enteredPasskey === predefinedPasskey) {
        window.location.href = 'Home.html'; 
    } else {
        alert("Incorrect passkey. Please try again.");
    }
});

registerButton.addEventListener('click', function () {
    window.location.href = 'Register.html'; 
});
