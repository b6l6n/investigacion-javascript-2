
let direccion = prompt("Estas en una casa antigua donde prácticamente no se ve nada pero puedes notar dos puertas, ¿en qué habitación quieres entrar?(Izquierda, derecha)");

let habitaciónIzquierda = ""; 

if (direccion.toLowerCase() === "izquierda") {
    alert("Has entrado en la habitación principal, echa un vistazo a tus alrededores.");
    habitaciónIzquierda = prompt("Encuentra una mesa con un montón de cosas. ¿Qué objeto quieres coger? (Destornillador, Álbum de Fotos, Móvil, Walkman, Cuchillo, Linterna)");
} else { // REVISAR ESTO, la logica se rompe
    alert("Esta puerta está cerrada, inténtalo con la otra");
}

if (habitaciónIzquierda) {
    // Usamos el switch fuera del primer if
    switch (habitaciónIzquierda.toLowerCase()) {
        case "destornillador":
            alert("¿Seguro que quieres coger esto? No es momento de hacer chapuzas en casa");
            objetoErroneo();
            break;
        case "album de fotos":
            alert("Ojalá hubiese menos oscuridad para poder ver las fotos, quizá te darían alguna pista...");
            objetoErroneo();
            break;
        case "móvil":
            alert("Mala suerte, no tiene batería");
            objetoErroneo();
            break;
        case "walkman":
            alert("Creo que mi padre me ha hablado alguna vez de estos aparatos, pero parece que no tiene nada que reproducir");
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
            objetoErroneo();
    }
}

// Función que maneja la lógica cuando se selecciona la linterna
function manejarLinterna() {
    let proseguir = prompt("¿Quieres seguir explorando la casa? (Si/No)");

    if (proseguir.toLowerCase() === "si") {
        prompt("Sigues caminando por la casa, ahora que está más iluminada puedes ver la cocina al fondo y unas escaleras hacia la parte superior de la casa, ¿Por donde sigues? (Escaleras, Cocina)");
        proseguirJuego();
    } else {
        alert("Te quedas en la habitación principal sin moverte, no  parece que así vayas a conseguir nada...");
    }
}

// Función que maneja la lógica cuando se selecciona la linterna
function objetoErroneo() {
    let otroObjeto = prompt("Coge otro objeto... (Destornillador, Álbum de Fotos, Móvil, Walkman, Cuchillo, Linterna)");

    if (otroObjeto.toLowerCase() === manejarLinterna) {
        alert("Sigues caminando por la casa y encuentras una nueva habitación. ¡La aventura continúa!");
        proseguirJuego();
    }else{
        prompt("Prueba a coger la linterna, con ella podrás iluminar el camino y seguir investigando la casa");
        manejarLinterna();
    }

}

// Función que maneja la logica cuando selecciona el chuchillo
function objetoMortal() {
    alert("FIN DEL JUEGO")
}

//Funcion que maneja la logica de proseguir
function proseguirJuego(){
    let escaleras = ;
    let cocina = ;

}
