/*  SIGNUP  */

const signupForm = document.getElementById("signupForm");

const signupMessage = document.getElementById("signupMessage");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("signupEmail").value;

  const password = document.getElementById("signupPassword").value;

  try {
    const response = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    signupMessage.innerText = data.message;

    signupMessage.style.color = "green";
  } catch (error) {
    signupMessage.innerText = "Signup Failed";

    signupMessage.style.color = "red";
  }
});

/*  LOGIN  */

const loginForm = document.getElementById("loginForm");

const loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;

  const password = document.getElementById("loginPassword").value;

  try {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.success) {
      window.location.href = "home.html";
    } else {
      loginMessage.innerText = "Login Failed";

      loginMessage.style.color = "red";
    }
  } catch (error) {
    loginMessage.innerText = "Login Failed";

    loginMessage.style.color = "red";
  }
});
