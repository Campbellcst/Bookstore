const loginForm = document.getElementById("login-form");
const userInputName = document.getElementById("username");
const userInputPassword = document.getElementById("password");
const submitBtn = document.getElementById("submit-btn");
const messageDisplayHome = document.getElementById("message-home");
const messageDisplayLogin = document.getElementById("message-login");

const validUsers = [
  { username: "manager", password: "manager123" },
  { username: "member", password: "member456" },
];

const checkValidUser = () => {
  const foundUser = validUsers.find(
    (user) =>
      user.username === userInputName.value &&
      user.password === userInputPassword.value
  );
  if (foundUser) {
    const isManager = foundUser.username === "manager";
    localStorage.setItem("isManager", isManager);
    window.location.href = "home.html";
  } else {
    messageDisplayLogin.innerHTML = "Invalid username or password.";
  }
};

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkValidUser();
  userInputName.value = "";
  userInputPassword.value = "";
});
