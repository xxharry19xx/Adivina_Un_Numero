let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
let litaNumerosSorteados = [];
let numeroMaximos = 10;

function asignarTextoElemento(elemento, texto) {
  let elementoHtml = document.querySelector(elemento);
  elementoHtml.innerHTML = texto;
  return;
}

function generarNumeroSecreto() {
  return Math.floor(Math.random()*10) + 1;
}

// creamos una funcion llamada intentoUsuario

function verificarIntento() {
  let numerUsuario = parseInt(document.getElementById("valorUsuario").value);
  // typeof sirve para saber que tipo de dato es por ejemplo String,number, bolleam
  // console.log(typeof(numerUsuario));
  //////////////////////////////////
  if (numerUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el numero en ${intentos} ${intentos === 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    //si el usuario no acierta
    if (numerUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El numero secreto es menor");
    } else {
      asignarTextoElemento("p", "El numero secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  // formas diferentes de llamar a un id

  // document.querySelector('#valorUsuario').value = '';
  document.getElementById("valorUsuario").value = "";
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Adivina el numero secreto!!");
  asignarTextoElemento("p", `Ingresa un numero del 1 al ${numeroMaximos}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

condicionesIniciales();

function reiniciarJuego() {
  // limpiar caja
  limpiarCaja();

  //   reiniciar los mensajes que daba al inicio
  //   generar el numero aleatorio
  // reiniciar el contador de intentos
  condicionesIniciales();
  document.getElementById('reiniciar').setAttribute('disabled', 'true');
}
