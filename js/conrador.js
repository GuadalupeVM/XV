const fechaObjetivo = new Date("July 27, 2024 13:00:00");

function actualizarContador() {
    const ahora = new Date();
    const difMilisegundos = fechaObjetivo.getTime() - ahora.getTime();
    const difSegundos = difMilisegundos / 1000;

    const dias = Math.floor(difSegundos / 86400);
    const horas = Math.floor((difSegundos % 86400) / 3600);
    const minutos = Math.floor((difSegundos % 3600) / 60);
    const segundos = Math.floor(difSegundos % 60);

    document.getElementById("dias").innerHTML = dias.toString().padStart(2, "0");
    document.getElementById("horas").innerHTML = horas.toString().padStart(2, "0");
    document.getElementById("minutos").innerHTML = minutos.toString().padStart(2, "0");
    document.getElementById("segundos").innerHTML = segundos.toString().padStart(2, "0");

    if (difSegundos <= 0) {
        clearInterval(intervaloActualizacion);
        document.getElementById("mensaje-final").innerHTML = "¡Hoy son mis XV, acompáñame!";
    }
}

const intervaloActualizacion = setInterval(actualizarContador, 1000);



function guardarAsistentes() {
    const numeroAsistentesNuevo = document.getElementById("number").value;
    let numeroAsistentesGuardado = localStorage.getItem("asistentes");

    // Convertir el valor almacenado en localStorage a número (si es necesario)
    if (numeroAsistentesGuardado === null) {
        numeroAsistentesGuardado = 0; // Si no existe, inicializar en 0
    } else {
        numeroAsistentesGuardado = parseInt(numeroAsistentesGuardado);
    }

    // Sumar los valores
    const totalAsistentes = parseInt(numeroAsistentesNuevo)+ numeroAsistentesGuardado;

    // Almacenar el total en localStorage
    localStorage.setItem("asistentes", totalAsistentes);

    alert("Se ha guardado el número de asistentes: " + totalAsistentes);
}


function verTotalInvitados() {
    const numeroAsistentesGuardado = localStorage.getItem("asistentes");

    if (numeroAsistentesGuardado === null) {
        alert("No hay invitados guardados aún.");
        return;
    }

    const totalAsistentes = parseInt(numeroAsistentesGuardado);
    const mensajeTotal = document.getElementById("mensaje-total");
    const totalInvitadosSpan = document.getElementById("total-invitados");

    totalInvitadosSpan.innerText = totalAsistentes;
    mensajeTotal.style.display = "block";
}