const loginForm = document.getElementById("login-form");
const userInputName = document.getElementById("username");
const userInputPassword = document.getElementById("password");
const submitBtn = document.getElementById("submit-btn");
const messageDisplay = document.getElementById("message");

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
    messageDisplay.innerHTML = `Welcome, ${foundUser.username}! You are logged in.`;
  } else {
    messageDisplay.innerHTML = "Invalid username or password.";
  }
};

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  checkValidUser();
  userInputName = "";
  userInputPassword = "";
});