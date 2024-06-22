/* // sirve para seleccionar etiquetas document.querySelector('h1')
let titulo = document.querySelector('h1');
// insertamos un texto a la etiqueta de h1 mediante el innerHTML
titulo.innerHTML = 'Adivina el numero perro';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Ingresa un numero del 1 al 10'; */

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
  // let numeroGenerado = Math.floor(Math.random() * 10) + 1;
  // // si el numero generdo esta en la lista 
  // if (litaNumerosSorteados.includes(numeroGenerado)){
    
  //   return generarNumeroSecreto();
  // }else{
  //   litaNumerosSorteados.push(numeroGenerado);
  // }
}

// asignarTextoElemento("h1", "Adivina el numero secreto!!");
// asignarTextoElemento("p", "Ingresa un numero del 1 al 10");

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

/* function mandarMensaje(){
    console.log('hola mundo');
}
mandarMensaje(); */

/* function recibirNombre(nombre){
    console.log(`hola, [${nombre}]`);
}

recibirNombre('Harry'); */

/* function dobleNumero(numero){
    console.log((numero * 2));
}

dobleNumero(15); */

/* function promedio(nro1,nro2,nro3){
    // console.log((nro1+nro2+nro3)/3);
    let promedio = (nro1 + nro2 + nro3) / 3 ;
    console.log(promedio);
    return promedio;
}
promedio(10,12,5); */

/* function numeroMayor(num1 , num2){
    if (num1 > num2){
        return num1;
    }else{
        return num2;
    }
}

let resultado = numeroMayor(7,10);
console.log(resultado); */

/* function numeroMultiplicado(num1){
    let rpta = Math.pow(num1,2)
    return rpta;
}

let res = numeroMultiplicado(7);
console.log(res); */

/* function calcularIMC(peso,altura){
    let imc = peso / Math.pow(altura,2);
    return imc;
}

let rpta = calcularIMC(80,1.75);
console.log(rpta); */

/* function factorial(n){
    let rpta = 1;

    for (let i = 1; i <= n; i++) {
        rpta *= i;
    }
    return rpta;
}

let res = factorial(5);
console.log(res); */

/* function tasaDeCambio(dolares){
    const cambio = 4.80;
    let reales = dolares * cambio;
    return reales;
}
let moneda = 500;
let vaclorReales = tasaDeCambio(moneda);
console.log(`${moneda}$ dolares son equivales a R$${vaclorReales}`); */

/* function multiplicar(n){

    for (let i = 1; i <= 10; i++) {
        let rpta = n * i;
        console.log(`${n} * ${i} = ${rpta}`);
    }
}

multiplicar(5); */