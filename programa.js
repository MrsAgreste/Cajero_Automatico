
let saldo = localStorage.getItem("saldo"); // Recuperar saldo del localStorage
let nombre = localStorage.getItem("nombre"); // Recuperar nombre del localStorage

// Mostrar mensaje de bienvenida con el nombre del usuario
document.querySelector("h1").textContent = `Bienvenido(a) ${nombre}!`;

function actualizarSaldo() {
  document.getElementById("saldo-actual").textContent = `$${saldo}`;
}

function retirar() {
  let retiro = parseFloat(prompt("Ingrese la cantidad que desea retirar:"));

  if (isNaN(retiro)) {
    swal("Ingrese un valor numérico válido.");
    return;
  }

  if (retiro < 10) {
    swal("El monto a retirar no puede ser menor a $10.");
    return;
  }

  if (saldo - retiro < 0) {
    swal("Fondos insuficientes.");
    return;
  }

  if (saldo - retiro < 10) {
    swal("La cuenta debe tener un saldo mínimo de $10.");
    return;
  }

  saldo -= retiro;
  localStorage.setItem("saldo", saldo); // Actualizar saldo en el localStorage
  actualizarSaldo(); // Llamar a la función para actualizar el saldo en la página
  swal(`Retiró ${retiro}. Saldo restante: ${saldo}`);
}

function ingresar() {
  let deposito = parseFloat(prompt("Ingrese la cantidad que desea ingresar:"));

  if (isNaN(deposito)) {
    swal("Ingrese un valor numérico válido.");
    return;
  }

  if (deposito > 990) {
    swal("El monto a ingresar no puede ser mayor a $990.");
    return;
  }

  if (saldo + deposito > 990) {
    swal("La cuenta no puede tener un saldo mayor a $990.");
    return;
  }

  saldo += deposito;
  localStorage.setItem("saldo", saldo); // Actualizar saldo en el localStorage
  actualizarSaldo(); // Llamar a la función para actualizar el saldo en la página
  swal(`Depositó ${deposito}. Saldo actual: ${saldo}`);
}

function verSaldo() {
  document.getElementById("saldo-actual").textContent = `$${saldo} MNX`;
  document.getElementById("saldo").style.display = "block";
}

function ocultarSaldo() {
  document.getElementById("saldo").style.display = "none";
}

function cerrarSesion() {
  window.location.href = "index.html";
}
