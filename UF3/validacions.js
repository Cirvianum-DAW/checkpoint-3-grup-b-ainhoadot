// A continuació et mostro algunes idees per poder començar a organitzar el teu codi.

// Selecció dels inputs...
const nameInput = document.querySelector('input[name="name"]');
const surnameInput = document.querySelector('input[name="surname"]');
const emailInput = document.querySelector('input[name="email"]');
const ageInput = document.querySelector('input[name="age"]');
const genderInput = document.querySelector('select[name="gender"]');
const messageInput = document.querySelector('select[textarea="message"]');

// Si no saps com utilitzar aquestes funcions, pots fer ús de missatges per consol o situar
// els errors allà on consideris lògic

// Funció per eliminar missatges d'error existents
function removeExistingError(input) {
  const existingError = input.nextElementSibling;
  if (existingError && existingError.classList.contains("error")) {
    existingError.remove();
  }
}

// Funció per crear i mostrar missatges d'error
function displayError(input, message) {
  const error = document.createElement("div");
  error.textContent = message;
  error.classList.add("error");
  //https://developer.mozilla.org/es/docs/Web/API/Element/insertAdjacentElement
  input.insertAdjacentElement("afterend", error);
}

// Cada validació...

// Funció per validar el nom
function validateName() {
  removeExistingError(nameInput);
  const nameValue = nameInput.value; 
  const nameRegex = /[0-9]/; 
  
  if (nameValue.length < 3 || nameValue.length >= 50 || nameRegex.test(nameValue)) {
    displayError(nameInput, "El nom no és vàlid");
  }
}

// Funció per validar el cognom
function validateSurname() {
  removeExistingError(surnameInput);
  const surnameValue = surnameInput.value; 
  const surnameRegex = /[0-9]/;
  
  if (surnameValue.length < 3 || surnameValue.length >= 50 || surnameRegex.test(surnameValue)) {
    displayError(surnameInput, "El cognom no és vàlid");
  }
}

// Funció per validar el email
function validateEmail() {
  removeExistingError(emailInput);
  const emailValue = emailInput.value; 
  const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
  
  if (!emailRegex.test(emailValue)) {
    displayError(emailInput, "El email no és vàlid");
  }
}

// Funció per validar que es major d'edat
function validateAge() {
  removeExistingError(ageInput);
  const ageValue = parseInt(ageInput.value);

  if (ageValue < 18){
    displayError(ageInput, "Has de ser major d'edat.")
  } else if (isNaN(ageValue)) {
    displayError(ageInput, "No pot contenir lletres ni estar buida la teva edat")
  }
}

// Funció per validar el genere
function validateGender() {
  removeExistingError(genderInput);
  const genderValue = genderInput.value;

  if (genderValue === "") {
    displayError(genderInput, "Si us plau, selecciona un gènere");
  }
}

// Funció per validar el missatge
function validateMessage() {
  removeExistingError(messageInput);
  const messageValue = messageInput.value;

  if (messageValue.length < 10 || messageValue.length > 200) {
    displayError(messageInput, "El missatge ha de tenir entre 10 i 200 caràcters");
  }
}

// addEventListeners...
nameInput.addEventListener('change', validateName);
surnameInput.addEventListener('change', validateSurname);
emailInput.addEventListener('change', validateEmail);
ageInput.addEventListener('blur', validateAge);
genderInput.addEventListener('input', validateGender);
messageInput.addEventListener('submit', validateMessage);


