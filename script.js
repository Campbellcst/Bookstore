const loginForm = document.getElementById("login-form");
const userInputName = document.getElementById("username");
const userInputPassword = document.getElementById("password");
const submitBtn = document.getElementById("submit-btn");
const messageDisplay = document.getElementById("message");
const giftYes = document.getElementById("gift-yes");
const giftNo = document.getElementById("gift-no");
const giftMessage = document.getElementById("gift-message");
const messageDisplayHome = document.getElementById("message-home");
const messageDisplayLogin = document.getElementById("message-login");

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("login-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    loginUser();
  });
});

function loginUser() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const messageLogin = document.getElementById("message-login");

  // Example credentials for manager and member
  const users = {
    manager: { username: "manager", password: "manager123", type: "manager" },
    member: { username: "member", password: "member456", type: "member" },
  };

  let userFound = false;
  for (let userType in users) {
    const user = users[userType];
    if (user.username === username && user.password === password) {
      localStorage.setItem("userType", user.type); // Store user type in localStorage
      localStorage.setItem("isAuthenticated", "true"); // Set an authentication flag
      window.location.href = "home.html"; // Redirect to profile page
      userFound = true;
      break;
    }
  }

  if (!userFound) {
    messageLogin.textContent = "Invalid username or password.";
  }
}

function toggleEdit() {
  var textElements = document.querySelectorAll("#fields span");
  textElements.forEach((element) => {
    var isEditable = element.getAttribute("contenteditable") === "true";
    element.setAttribute("contenteditable", !isEditable);
    var saveChangesBtn = document.getElementById("save-changes");
    saveChangesBtn.style.display = "block";
  });
}

function saveChanges() {
  var textElements = document.querySelectorAll("#fields span");
  textElements.forEach((element) => {
    var id = element.id;
    var newValue = element.textContent;
    document.getElementById(id).textContent = newValue;
    element.setAttribute("contenteditable", "false");
    var saveChangesBtn = document.getElementById("save-changes");
    saveChangesBtn.style.display = "none";
  });
}
