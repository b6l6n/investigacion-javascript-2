let tiempoRestante = 10;
let kills = 0;
let cuadro = document.getElementById('cuadro');
let tiempoDisplay = document.getElementById('tiempo');
let puntajeDisplay = document.getElementById('puntuaje');
let imagenFinal = document.getElementById('final');
let imagengoodFinal = document.getElementById('goodfinal');

// Mostrar cuadro de manera aleatoria en la pantalla
function mostrarCuadro() {
    var x = Math.random() * (window.innerWidth - 160); // Saca un numero aleatorio entre el 0 y el 1
    var y = Math.random() * (window.innerHeight - 240); // y despues lo multiplica por el tamaño de la pantalla menos las dimensiones del cuadro
    cuadro.style.left = x + 'px'; // Asignar la posición horizontal, lo cambia a px para css
    cuadro.style.top = y + 'px'; // Asignar la posición vertical
    cuadro.style.display = 'block'; // Mostrar el cuadro
}

// Llama a `mostrarCuadro` inicialmente
mostrarCuadro();

// Evento para manejar clic en el cuadro
cuadro.addEventListener('click', function () {
    cuadro.style.display = 'none'; // Ocultar el cuadro al hacer clic
    kills++; // Incrementa en 1 el puntaje
    puntajeDisplay.textContent = `Kills: ${kills}`; // Actualiza el puntaje en pantalla
});

// Configurar aparición periódica del cuadro
var intervalCuadro = setInterval(function () {
    if (tiempoRestante >= 0) {
        mostrarCuadro();
    } else {
        clearInterval(intervalCuadro);
    }
}, 600); 

// Configurar temporizador de tiempo
var temporizador = setInterval(actualizarTiempo, 1000); 

// Actualiza el tiempo del contador
function actualizarTiempo() {
    tiempoRestante--; // Reducir el tiempo en 1 segundo
    tiempoDisplay.textContent = 'Tiktak: ' + tiempoRestante; // Actualizar el texto en pantalla

 //condicinal para cuando el tiempo llegue a 0 
    if (tiempoRestante <= 0) {
        clearInterval(temporizador); // Detener el temporizador
        clearInterval(intervalCuadro);
        imagenFinal.style.display = 'block';
    }
    //condicional para numero de muertes
    if (kills >= 4){
        clearInterval(temporizador);
        clearInterval(intervalCuadro);
        imagengoodFinal.style.display = 'block';

    }
}

