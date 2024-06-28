function emailValidation() {
  const emailField = document.getElementById('email');
  const emailConfirmField = document.getElementById('email_confirm');
  const mensaje = document.createElement('p');
  mensaje.textContent = "El correo electrónico no coincide";
  mensaje.setAttribute('id', 'alert');
  mensaje.classList.add("alerta_color");
  emailConfirmField.addEventListener('input', () => {
    if (emailField.value !== emailConfirmField.value) {
      emailConfirmField.classList.add("alertas");
      const obtenerFila = emailConfirmField.parentNode.parentNode;
      obtenerFila.parentNode.insertBefore(mensaje, obtenerFila.nextSibling);
    } else {
      emailConfirmField.classList.remove("alertas");
      mensaje.parentNode.removeChild(mensaje);
    }
  });
  if (emailField.value !== emailConfirmField.value) {
    emailConfirmField.classList.add("alertas");
    const obtenerFila = emailConfirmField.parentNode.parentNode;
    obtenerFila.parentNode.insertBefore(mensaje, obtenerFila.nextSibling);
  }
}

window.onload = function() {
  emailValidation();
};