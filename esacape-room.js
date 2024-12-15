let direccion = prompt("Estás en una casa antigua donde prácticamente no se ve nada, pero puedes notar dos puertas. ¿En qué habitación quieres entrar, izquierda o derecha?");

let habitacionIzquierda = "";

if (direccion.toLowerCase() === "izquierda") {
    alert("Has entrado en la habitación principal. Echa un vistazo a tus alrededores.");
    habitacionIzquierda = prompt("Encuentras una mesa con un montón de cosas. ¿Qué objeto quieres coger? (Destornillador, Álbum de Fotos, Móvil, Walkman, Cuchillo, Linterna)");
} else {
    alert("Esta puerta está cerrada, inténtalo con la otra.");
}

if (habitacionIzquierda) {
    // Evaluamos el objeto seleccionado
    switch (habitacionIzquierda.toLowerCase()) {
        case "destornillador":
            alert("¿Seguro que quieres coger esto? No es momento de hacer chapuzas en casa.");
            objetoErroneo();
            break;
        case "álbum de fotos":
            alert("Ojalá hubiese menos oscuridad para poder ver las fotos. Quizá te darían alguna pista...");
            objetoErroneo();
            break;
        case "móvil":
            alert("Mala suerte, no tiene batería.");
            objetoErroneo();
            break;
        case "walkman":
            alert("Creo que mi padre me ha hablado alguna vez de estos aparatos, pero parece que no tiene nada que reproducir.");
            objetoErroneo();
            break;
        case "cuchillo":
            alert("Te tropiezas en la penumbra con el cuchillo y te mueres.");
            objetoMortal();
            break;
        case "linterna":
            alert("Ahora tienes luz. Sigue investigando por la casa.");
            manejarLinterna();
            break;
        default:
            alert("Ese objeto no está en la habitación.");
    }
}

// Función que maneja la lógica cuando se selecciona la linterna
function manejarLinterna() {
    let proseguir = prompt("¿Quieres seguir explorando la casa? (Si/No)");

    if (proseguir.toLowerCase() === "si") {
        alert("Sigues caminando por la casa y encuentras una nueva habitación. ¡La aventura continúa!");
        manejarProgreso(); // Llamamos a la función para decidir la siguiente acción
    } else {
        prompt("Te quedas en la habitación a investigar más. ¿Qué quieres inspeccionar?");
    }
}

// Función para manejar objetos erróneos
function objetoErroneo() {
    let otroObjeto = prompt("Coge otro objeto... (Destornillador, Álbum de Fotos, Móvil, Walkman, Cuchillo, Linterna)");

    switch (true) {
        case otroObjeto.toLowerCase() === "linterna":
            manejarLinterna();
            break;
        case otroObjeto.toLowerCase() === "cuchillo":
            objetoMortal();
            break;
        default:
            alert("No parece ser de utilidad. Prueba con otro.");
            objetoErroneo();
    }
}

// Función que maneja el final trágico con el cuchillo
function objetoMortal() {
    alert("Has encontrado un final trágico... ¡FIN DEL JUEGO!");
}

// Función para manejar el progreso en la historia
function manejarProgreso() {
    let decision = prompt("¿Qué quieres hacer ahora? (Explorar más, Investigar objeto, Salir de la casa)");

    switch (true) {
        case decision.toLowerCase() === "explorar más":
            alert("Encuentras un pasillo oscuro que lleva a otra habitación.");
            break;
        case decision.toLowerCase() === "investigar objeto" && habitacionIzquierda === "álbum de fotos":
            alert("Revisas el álbum de fotos con la linterna y encuentras una foto de una llave oculta detrás de un cuadro.");
            break;
        case decision.toLowerCase() === "investigar objeto" && habitacionIzquierda === "móvil":
            alert("Encuentras un mensaje antiguo en el móvil que dice: 'El secreto está en la habitación izquierda.'");
            break;
        case decision.toLowerCase() === "salir de la casa":
            alert("Decides abandonar la casa. La oscuridad parece tragárselo todo. Fin del juego.");
            break;
        default:
            alert("No entiendo tu decisión, inténtalo de nuevo.");
            manejarProgreso(); // Permite al jugador intentarlo nuevamente
    }
}
