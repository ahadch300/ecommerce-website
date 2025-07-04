const signupForm = document.getElementById("signupForm");
const usernameInput = document.querySelector('input[name="username"]');
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');

signupForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (usernameInput.value.trim() === "") {
    alert("please Enter Name");
    return;
  }

  if (emailInput.value.trim() === "") {
    alert("please Enter Email or Number");
    return;
  }

  if (passwordInput.value.trim() === "") {
    alert("please Enter password");
    return;
  }

  if (passwordInput.value.length < 8) {
    alert("Password must be at least 8 characters");
    return;
  }

  const userObject = {
    username: usernameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };
  localStorage.setItem("userObject", JSON.stringify(userObject));
  signupForm.reset();
  alert("Account created!");
});

