let form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  /*addEventListeneres un método que le permite adjuntar un controlador de eventos a un elemento específico.
   El evento puede ser una acción del usuario, como un clic, 
    presionar una tecla o pasar el mouse. Cuando ocurre el evento
    especificado, se ejecuta la función adjunta como controlador de eventos.*/
  event.preventDefault(); // Evita que la página se recargue al enviar el formulario
  validarUsuario();
});

let cuentas = [
  { nombre: "Mali", saldo: 200, password: "1234" },
  { nombre: "Gera", saldo: 290, password: "5678" },
  { nombre: "Maui", saldo: 67, password: "abcd" },
];

function validarUsuario() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  for (let i = 0; i < cuentas.length; i++) {
    if (username === cuentas[i].nombre && password === cuentas[i].password) {
      localStorage.setItem("saldo", cuentas[i].saldo); // Guardar saldo en el localStorage
      localStorage.setItem("nombre", cuentas[i].nombre); // Guardar nombre en el localStorage
      window.location.href = "programa.html"; // Redireccionar a la página de programas
      return;
    }
  }

  /* let i = 0;
  while (i < cuentas.length) {
    if (username === cuentas[i].nombre && password === cuentas[i].password) {
      localStorage.setItem("saldo", cuentas[i].saldo);
      window.location.href = "programa.html";
      return;
    }
    i++;
  }*/
  
  alert("Usuario o contraseña incorrectos. Intente de nuevo.");
}