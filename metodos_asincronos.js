 const cambiar = setTimeout(function() {
    document.getElementById('cuadro').style.backgroundColor = 'blue';
    document.getElementById('mensaje').textContent = "¡El cuadro cambió a azul!";
}, 3000,); // Después de 3 segundos

/*clearTimeout(cambiar);*/

function suma(a, b) {
    return a + b;
}

const resultado = suma(3, 1);
document.getElementById('resultado').textContent = `El resultado de la suma es: ${resultado}`;

let esAzul = false; // Variable para alternar entre colores

 const cambiar2 = setInterval(function () {
    if (esAzul) {
        document.getElementById('cuadro1').style.backgroundColor = 'red';
        document.getElementById('mensaje1').textContent = "¡El cuadro cambió a rojo!";
    } else {
        document.getElementById('cuadro1').style.backgroundColor = 'blue';
        document.getElementById('mensaje1').textContent = "¡El cuadro cambió a azul!";
    }
    esAzul = !esAzul; // Cambiar el estado del booleano para alternar colores
}, 3000); // Ejecutar cada 3 segundos

// Aquí puedes llamar clearInterval para detener el intervalo después de un tiempo (por ejemplo, después de 10 segundos)
/*setTimeout(function() {
    clearInterval(cambiar2); // Detener el intervalo
    console.log("El juego se acabo.");
}, 10000); // Detener el intervalo después de 10 segundos*/


function Alerta() {
    alert("WHY U CLICK ME 😫!");
  }

function Prueba(){
    prompt("ARE YOU GOING TO STOP 😠?");
}

function Confirma(){
    confirm("I BEG U TO STOP 😭");
}

function saludar(nombre, callback) {
    console.log(`Hi, ${nombre}!`); 
    callback(); // Llama al callback (que es la función pasada como argumento)
}

// La función callback que se pasará a 'saludar'
function despedirse() {
    console.log("Chao, pringaos!");
}

// Llamamos a la función 'saludar', pasando 'despedirse' como el callback
saludar("Nay", despedirse);