function toggleForm() {
    var loginForm = document.getElementById("loginForm");
    var signUpForm = document.getElementById("signUpForm");

    if (loginForm.style.display === "block") {
      loginForm.style.display = "none";
      signUpForm.style.display = "block";
    } else {
      loginForm.style.display = "block";
      signUpForm.style.display = "none";
    }
  }