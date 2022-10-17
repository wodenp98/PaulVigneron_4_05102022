// DOM Elements
const modal = document.getElementById("contact_modal");
const header = document.getElementById("header");
const main = document.getElementById("main");

function displayModal() {
  modal.style.display = "block";
  header.style.display = "none";
  main.style.display = "none";
}

function closeModal() {
  modal.style.display = "none";
  header.style.display = "block";
  main.style.display = "block";
}

// Values for the DOM

const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const message = document.getElementById("message");

// Error message
const firstError = document.getElementById("firstNameErrorMsg");
const lastError = document.getElementById("lastNameErrorMsg");
const emailError = document.getElementById("emailErrorMsg");
const messageError = document.getElementById("messageError");

// Regex

const lettersRegEx = new RegExp(/^[A-zÀ-ÿ_-]{2,50}$/);
const emailRegEx = new RegExp(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/);

function validate() {
  let isFirst;
  let isLast;
  let isEmail;
  let isMessage;

  if (firstName.value == "") {
    firstError.innerText = "Ce champ doit être rempli.";
    firstName.style.border = "solid red 2px";
  } else if (!firstName.value.match(lettersRegEx)) {
    firstError.innerText =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    firstName.style.border = "solid red 2px";
  } else {
    isFirst = true;
    firstName.style.border = "solid green 2px";
    firstError.innerText = "";
  }

  if (lastName.value == "") {
    lastError.innerText = "Ce champ doit être rempli.";
    lastName.style.border = "solid red 2px";
  } else if (!lettersRegEx.test(lastName.value)) {
    lastError.innerText =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    lastName.style.border = "solid red 2px";
  } else {
    isLast = true;
    lastName.style.border = "solid green 2px";
    lastError.innerText = "";
  }

  if (email.value == "") {
    emailError.innerText = "Ce champ doit être rempli.";
    email.style.border = "solid red 2px";
  } else if (!emailRegEx.test(email.value)) {
    emailError.innerText = "Veuillez entrer une adresse mail valide.";
    email.style.border = "solid red 2px";
  } else {
    isEmail = true;
    email.style.border = "solid green 2px";
    emailError.innerText = "";
  }

  if (message.value == "") {
    messageError.innerText = "Ce champ doit être rempli.";
    message.style.border = "solid red 2px";
  } else {
    isMessage = true;
    message.style.border = "solid green 2px";
    messageError.innerText = "";
  }

  if (isFirst && isLast && isEmail && isMessage) {
    console.log(firstName.value);
    console.log(lastName.value);
    console.log(email.value);
    console.log(message.value);
    closeModal();
  }
}

function resetBorder() {
  firstName.style.border = "none";
  lastName.style.border = "none";
  email.style.border = "none";
  message.style.border = "none";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validate();
  resetBorder();
  form.reset();
});
