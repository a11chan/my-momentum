const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("input");
const loginBtn = document.querySelector("button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY,loginInput.value);
  paintGreetings();
}

function paintGreetings() {
  const userName = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `Hello ${userName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null ) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginBtn.addEventListener("click", onLoginSubmit);
} else {
  paintGreetings();
}