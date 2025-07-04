const logInForm = document.getElementById("logInForm");

if (logInForm) {
  const emailInput = document.querySelector('input[name="email"]');
  const passwordInput = document.querySelector('input[name="password"]');

  logInForm.addEventListener("submit", function (e) {
    e.preventDefault();
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

    const userString = localStorage.getItem("userObject");

    let storedUser;

    try {
        storedUser = JSON.parse(userString);

        if(!storedUser){
            throw new Error();
        }
    } catch (error) {
      alert("No account found");
      return
    }

   

    if (
      storedUser.email === emailInput.value &&
      storedUser.password === passwordInput.value
    ) {
      alert("Login successfully");
    } else {
      alert("Invalid email or password");
    }
    
    logInForm.reset();
 
  });


}

