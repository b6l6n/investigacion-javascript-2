// Función para dividir números
function dividirNumeros(a, b) {
    try {
        // Validar que ambos argumentos sean números
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Ambos argumentos deben ser números.');
        }
        // Validar que no se divida por cero
        if (b === 0) {
            throw new Error('No se puede dividir entre cero.');
        }
        // Si todo está bien, realiza la división
        return a / b;
    } catch (error) {
        // Captura y maneja cualquier error
        console.error('Error:', error.message);
        return error.message; // Retorna el mensaje de error para mostrar en la interfaz
    } finally {
        // Este bloque siempre se ejecuta
        console.log('Operación de división finalizada.');
    }
}

// Manejar el envío del formulario
document.getElementById('dividirForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar que el formulario recargue la página

    // Obtener los valores de los campos de entrada
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);

    // Llamar a la función dividirNumeros
    const resultado = dividirNumeros(numero1, numero2);

    // Mostrar el resultado o mensaje de error
    const resultadoDiv = document.getElementById('resultado');
    const mensajeErrorDiv = document.getElementById('mensajeError');

    if (isNaN(resultado)) {
        // Si el resultado es NaN, mostrar el mensaje de error
        mensajeErrorDiv.textContent = 'Error: ' + resultado;
        resultadoDiv.textContent = ''; // Limpiar el resultado
    } else {
        // Si no hay error, mostrar el resultado de la división
        resultadoDiv.textContent = 'Resultado: ' + resultado;
        mensajeErrorDiv.textContent = ''; // Limpiar cualquier mensaje de error
    }
});