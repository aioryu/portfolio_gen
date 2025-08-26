const formulario = document.querySelector("#formulario");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  // Nome
  const campoNome = document.querySelector("#name");
  const errNome = document.querySelector("#errNome");
  if (campoNome.value.length < 3) {
    errNome.innerHTML = "O Nome deve ter no mínimo 3 caracteres.";
    campoNome.focus();
    return;
  } else {
    errNome.innerHTML = "";
  }

  // Email
  const campoEmail = document.querySelector("#email");
  const errEmail = document.querySelector("#errEmail");
  if (!campoEmail.value.match(emailRegex)) {
    errEmail.innerHTML = "Digite um E-mail válido. Ex: email@email.com";
    campoEmail.focus();
    return;
  } else {
    errEmail.innerHTML = "";
  }

  // Assunto
  const campoSubject = document.querySelector("#subject");
  const errSubject = document.querySelector("#errSubject");
  if (campoSubject.value.length < 5) {
    errSubject.innerHTML = "O Assunto deve ter no mínimo 5 caracteres.";
    campoSubject.focus();
    return;
  } else {
    errSubject.innerHTML = "";
  }

  // Mensagem
  const campoMessage = document.querySelector("#message");

  // Sucesso
  window.alert("Obrigado pelo seu e-mail! Retornarei em contato em breve!");

  // Limpa campos
  campoNome.value = "";
  campoEmail.value = "";
  campoSubject.value = "";
  campoMessage.value = "";
});
