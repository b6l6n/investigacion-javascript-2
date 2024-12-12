let direccion = prompt("Estas en una casa antigua donde prácticamente no se ve nada pero puedes notar dos puertas, ¿en qué habitación quieres entrar, izquierda o derecha?");

let habitaciónIzquierda = ""; 

if (direccion.toLowerCase() === "izquierda") {
    alert("Has entrado en la habitación principal");
    habitaciónIzquierda = prompt("¿Qué objeto quieres coger? (Destornillador, Álbum de Fotos, Móvil, Walkman, Cuchillo, Linterna)");
} else {
    alert("Esta puerta está cerrada, inténtalo con la otra");
}

if (habitaciónIzquierda) {
    // Usamos el switch fuera del primer if
    switch (habitaciónIzquierda.toLowerCase()) {
        case "destornillador":
            alert("¿Seguro que quieres coger esto? No es momento de hacer chapuzas en casa");
            objetoErroneo();
            break;
        case "álbum de fotos":
            alert("Ojalá hubiese menos oscuridad para poder ver las fotos, quizá te darían alguna pista...");
            objetoErroneo();
            break;
        case "móvil":
            alert("Mala suerte, no tiene batería");
            objetoErroneo();
            break;
        case "walkman":
            alert("No tiene nada que reproducir");
            objetoErroneo();
            break;
        case "cuchillo":
            alert("Te tropiezas en la penumbra con el cuchillo y te mueres");
            objetoMortal();
            break;
        case "linterna":
            alert("Ahora tienes luz, sigue investigando por la casa");
            manejarLinterna();
            break;
        default:
            alert("Ese objeto no está en la habitación");
    }
}

// Función que maneja la lógica cuando se selecciona la linterna
function manejarLinterna() {
    let proseguir = prompt("¿Quieres seguir explorando la casa? (Si/No)");

    if (proseguir.toLowerCase() === "si") {
        alert("Sigues caminando por la casa y encuentras una nueva habitación. ¡La aventura continúa!");
        // Aquí podrías agregar más lógica para que avance el jugador a otra parte del juego.
    } else {
        alert("Te quedas en la habitación a investigar más, ¿Qué quieres inspeccionar?");
    }
}

// Función que maneja la lógica cuando se selecciona la linterna
function objetoErroneo() {
    let otroObjeto = prompt("Coge otro objeto... (Destornillador, Álbum de Fotos, Móvil, Walkman, Cuchillo, Linterna)");

    if (otroObjeto.toLowerCase() === manejarLinterna) {
        alert("Sigues caminando por la casa y encuentras una nueva habitación. ¡La aventura continúa!");
        // Aquí podrías agregar más lógica para que avance el jugador a otra parte del juego.
    } else {
        alert("Te quedas en la habitación a investigar más, ¿Qué quieres inspeccionar?");
    }
}
