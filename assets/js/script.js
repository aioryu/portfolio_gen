const formulario = document.querySelector("#formulario");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  let formValido = true;

  // Nome
  const campoNome = document.querySelector("#name");
  const errNome = document.querySelector("#errNome");
  if (campoNome.value.length < 3) {
    errNome.innerHTML = "O Nome deve ter no mínimo 3 caracteres.";
    formValido = false;
  } else {
    errNome.innerHTML = "";
  }

  // Email
  const campoEmail = document.querySelector("#email");
  const errEmail = document.querySelector("#errEmail");
  if (!campoEmail.value.match(emailRegex)) {
    errEmail.innerHTML = "Digite um E-mail válido. Ex: email@email.com";
    formValido = false;
  } else {
    errEmail.innerHTML = "";
  }

  // Assunto
  const campoSubject = document.querySelector("#subject");
  const errSubject = document.querySelector("#errSubject");
  if (campoSubject.value.length < 5) {
    errSubject.innerHTML = "O Assunto deve ter no mínimo 5 caracteres.";
    formValido = false;
  } else {
    errSubject.innerHTML = "";
  }

  // Mensagem
  const campoMessage = document.querySelector("#message");

  // Se o formulário for válido, mostra o alerta e limpa os campos
  if (formValido) {
    window.alert("Obrigado pelo seu e-mail! Retornarei em contato em breve!");
    
    campoNome.value = "";
    campoEmail.value = "";
    campoSubject.value = "";
    campoMessage.value = "";
  }
});