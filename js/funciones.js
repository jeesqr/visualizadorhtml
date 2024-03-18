var contadorPaso = 0;
var turno = true;
var i = 0;
var j = 0;

function iniciar() {
  var celdas = document.getElementById("Tablero");
  celdas.rows[2].cells[1].style = "background-image: url(./img/PeonN.png); background-size:cover;";
  celdas.rows[2].cells[2].style = "background-image: url(./img/PeonN.png); background-size:cover;";
  celdas.rows[2].cells[3].style = "background-image: url(./img/PeonN.png); background-size:cover;";
  celdas.rows[2].cells[4].style = "background-image: url(./img/PeonN.png); background-size:cover;";
  celdas.rows[2].cells[5].style = "background-image: url(./img/PeonN.png); background-size:cover;";
  celdas.rows[2].cells[6].style = "background-image: url(./img/PeonN.png); background-size:cover;";
  celdas.rows[2].cells[7].style = "background-image: url(./img/PeonN.png); background-size:cover;";
  celdas.rows[2].cells[8].style = "background-image: url(./img/PeonN.png); background-size:cover;";

  celdas.rows[7].cells[1].style = "background-image: url(./img/PeonB.png); background-size:cover;";
  celdas.rows[7].cells[2].style = "background-image: url(./img/PeonB.png); background-size:cover;";
  celdas.rows[7].cells[3].style = "background-image: url(./img/PeonB.png); background-size:cover;";
  celdas.rows[7].cells[4].style = "background-image: url(./img/PeonB.png); background-size:cover;";
  celdas.rows[7].cells[5].style = "background-image: url(./img/PeonB.png); background-size:cover;";
  celdas.rows[7].cells[6].style = "background-image: url(./img/PeonB.png); background-size:cover;";
  celdas.rows[7].cells[7].style = "background-image: url(./img/PeonB.png); background-size:cover;";
  celdas.rows[7].cells[8].style = "background-image: url(./img/PeonB.png); background-size:cover;";

  celdas.rows[8].cells[3].style = "background-image: url(./img/AlfilB.png); background-size:cover;";
  celdas.rows[1].cells[3].style = "background-image: url(./img/AlfilN.png); background-size:cover;";
  celdas.rows[8].cells[6].style = "background-image: url(./img/AlfilB.png); background-size:cover;";
  celdas.rows[1].cells[6].style = "background-image: url(./img/AlfilN.png); background-size:cover;";

  celdas.rows[8].cells[1].style = "background-image: url(./img/TorreB.png); background-size:cover;";
  celdas.rows[1].cells[1].style = "background-image: url(./img/TorreN.png); background-size:cover;";
  celdas.rows[8].cells[8].style = "background-image: url(./img/TorreB.png); background-size:cover;";
  celdas.rows[1].cells[8].style = "background-image: url(./img/TorreN.png); background-size:cover;";

  celdas.rows[8].cells[2].style = "background-image: url(./img/CaballoB.png); background-size:cover;";
  celdas.rows[1].cells[2].style = "background-image: url(./img/CaballoN.png); background-size:cover;";
  celdas.rows[8].cells[7].style = "background-image: url(./img/CaballoB.png); background-size:cover;";
  celdas.rows[1].cells[7].style = "background-image: url(./img/CaballoN.png); background-size:cover;";

  celdas.rows[8].cells[2].style = "background-image: url(./img/CaballoB.png); background-size:cover;";
  celdas.rows[1].cells[2].style = "background-image: url(./img/CaballoN.png); background-size:cover;";

  celdas.rows[8].cells[4].style = "background-image: url(./img/ReyB.png); background-size:cover;";
  celdas.rows[1].cells[4].style = "background-image: url(./img/ReyN.png); background-size:cover;";

  celdas.rows[8].cells[5].style = "background-image: url(./img/ReinaB.png); background-size:cover;";
  celdas.rows[1].cells[5].style = "background-image: url(./img/ReinaN.png); background-size:cover;";
}

function partidas() {
  var textarea = document.getElementById("texto");
  var valor = document.getElementById("Combo").value;

  switch (valor) {
    case "0":
      textarea.value = "";
      break;
    case "1":
      textarea.value = "Partida 1";
      break;
    case "2":
      textarea.value = "Partida 2";
      break;
    case "3":
      textarea.value = "Partida 3";
      break;
    default:
      break;
  }
}

function cargarPartida() {
  var archivo = document.getElementById("cargarBoton").files[0];
  var scanner = new FileReader();

  scanner.onload = function (e) {
    document.getElementById("texto").value = e.target.result;
  };
  scanner.readAsText(archivo);
}

async function pasoApaso() {
  var celdas = document.getElementById("texto").value;
  var tabla = document.getElementById("Tablero");
  var lineas = celdas.split("\n");

  j = 1;
  if (!tieneMayusculas(tokens[j])) {
    var posicion = tokens[j].split(/(\d+)/);
    var columna = parseInt(convertirLetraNumero(posicion[0]));
    var renglon = parseInt(posicion[1]);
    if (turno) {
      tabla.rows[renglon + 1].cells[columna + 1].style = "background-image: url(./img/PeonB.png); background-size:cover;";
    } else {
      tabla.rows[renglon + 1].cells[columna + 1].style = "background-image: url(./img/PeonN.png); background-size:cover;";
    }
  }
  turno = !turno;
  document.getElementById("turno").innerHTML = "Turno de las " + (turno ? "blancas " : "negras ") + renglon + " " + columna;
  await new Promise((resolve) => setTimeout(resolve, 3000));
  i++;
}

function tieneMayusculas(cadena) {
  return /[A-Z]/.test(cadena);
}

function convertirLetraNumero(letra) {
  switch (letra) {
    case "a":
      return 0;
      break;

    case "b":
      return 1;
      break;

    case "c":
      return 2;
      break;

    case "d":
      return 3;
      break;

    case "e":
      return 4;
      break;

    case "f":
      return 5;
      break;

    case "g":
      return 6;
      break;

    case "h":
      return 7;
      break;
  }
}

async function test() {
  var salida = "";
  for (let i = 0; i < 10; i++) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    salida += i + "<br>";
    document.getElementById("out").innerHTML = salida;
  }
}

function cambiarColorTablero() {
  var colorSeleccionado = document.getElementById("selectColor").value;
  var celdas = document.getElementById("Tablero").getElementsByTagName("td");

  // Iterar sobre las celdas y aplicar colores alternos
  for (var i = 0; i < celdas.length; i++) {
    var fila = Math.floor(i / 10);
    var columna = i % 10;
    if ((fila + columna) % 2 !== 0) {
      celdas[i].style.backgroundColor = colorSeleccionado; // Cambia el color
    }
  }
}



// Definir una matriz para mantener el estado del tablero
var tableroEstado = [
  ["./img/TorreN.png", "./img/CaballoN.png", "./img/AlfilN.png", "./img/ReyN.png", "./img/ReinaN.png", "./img/AlfilN.png", "./img/CaballoN.png", "./img/TorreN.png"],
  ["./img/PeonN.png", "./img/PeonN.png", "./img/PeonN.png", "./img/PeonN.png", "./img/PeonN.png", "./img/PeonN.png", "./img/PeonN.png", "./img/PeonN.png"],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["./img/PeonB.png", "./img/PeonB.png", "./img/PeonB.png", "./img/PeonB.png", "./img/PeonB.png", "./img/PeonB.png", "./img/PeonB.png", "./img/PeonB.png"],
  ["./img/TorreB.png", "./img/CaballoB.png", "./img/AlfilB.png", "./img/ReinaB.png", "./img/ReyB.png", "./img/AlfilB.png", "./img/CaballoB.png", "./img/TorreB.png"],
];

async function ejecutarCompleto() {
  var celdas = document.getElementById("texto").value;
  var lineas = celdas.split("\n");
  var velocidad = parseInt(document.getElementById("velocidadMovimiento").value);

  // Limpiar el estado del tablero antes de iniciar
  limpiarTablero();

  for (let i = 0; i < lineas.length; i++) {
    var tokens = lineas[i].split(" ");
    var turnoBlanco = i % 2 === 0; // Alternar entre turnos blancos y negros

    for (let j = 1; j < tokens.length; j++) {
      if (!tieneMayusculas(tokens[j])) {
        var posicion = tokens[j].split(/(\d+)/);
        var columna = convertirLetraNumero(posicion[0]);
        var renglon = parseInt(posicion[1]) - 1;
        var imagen = turnoBlanco ? "./img/PeonB.png" : "./img/PeonN.png"; // Cambiar imagen según el turno

        // Verificar si la celda está vacía antes de colocar una pieza
        if (tableroEstado[renglon][columna] === "") {
          // Colocar la pieza en el estado del tablero
          tableroEstado[renglon][columna] = imagen;
        }
      }
      turnoBlanco = !turnoBlanco; // Cambiar turno
    }

    // Actualizar el tablero visual basado en el estado del tablero
    actualizarTableroVisual();

    await new Promise((resolve) => setTimeout(resolve, velocidad)); // Esperar el tiempo indicado antes de pasar al siguiente paso
  }
}

// Función para limpiar el estado del tablero
function limpiarTablero() {
  for (let i = 0; i < tableroEstado.length; i++) {
    for (let j = 0; j < tableroEstado[i].length; j++) {
      tableroEstado[i][j] = ""; // Limpiar la celda
    }
  }
}

// Función para actualizar el tablero visual basado en el estado del tablero
function actualizarTableroVisual() {
  var tabla = document.getElementById("Tablero");
  for (let i = 0; i < tableroEstado.length; i++) {
    for (let j = 0; j < tableroEstado[i].length; j++) {
      var imagen = tableroEstado[i][j];
      tabla.rows[i].cells[j].style.backgroundImage = imagen ? "url(" + imagen + ")" : "";
      tabla.rows[i].cells[j].style.backgroundSize = "cover";
    }
  }
}