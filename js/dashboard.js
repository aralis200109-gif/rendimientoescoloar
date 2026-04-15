// Variable global para almacenar los datos
let listaAlumnos = [];

function agregarAlumno() {
    const nombreInput = document.getElementById("alumno");
    const notaInput = document.getElementById("nota");
    
    const nombre = nombreInput.value;
    const nota = parseFloat(notaInput.value);

    // Validación
    if (nombre.trim() === "" || isNaN(nota) || nota < 1 || nota > 5) {
        alert("Por favor, ingrese un nombre y una nota válida (1-5)");
        return;
    }

    // Agregar al array
    listaAlumnos.push({ nombre, nota });

    // Limpiar campos y actualizar
    nombreInput.value = "";
    notaInput.value = "";
    actualizarDashboard();
}

function eliminarAlumno(index) {
    listaAlumnos.splice(index, 1);
    actualizarDashboard();
}

function actualizarDashboard() {
    const tabla = document.querySelector("#tabla-escolar tbody");
    tabla.innerHTML = ""; 
    
    let sumaNotas = 0;

    listaAlumnos.forEach((item, index) => {
        sumaNotas += item.nota;
        const porcentaje = (item.nota / 5) * 100;

        let claseColor = ""; 
        let icono = "";
        
        if (item.nota >= 4) {
            claseColor = "nota-excelente";
            icono = "✨";
        } else if (item.nota >= 3) {
            claseColor = "nota-regular";
            icono = "🎀";
        } else {
            claseColor = "nota-bajo";
            icono = "🧸";
        }

        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td style="font-weight: 500;">${icono} ${item.nombre}</td>
            <td style="text-align: center;">${item.nota}</td>
            <td style="width: 40%;">
                <div class="bar-container">
                    <div class="bar-fill ${claseColor}" style="width: ${porcentaje}%;"></div>
                </div>
            </td>
            <td class="no-print" style="text-align: center;">
                <button class="btn-eliminar" onclick="eliminarAlumno(${index})">Eliminar</button>
            </td>
        `;
        tabla.appendChild(fila);
    });

    const totalAlumnos = listaAlumnos.length;
    const promedio = totalAlumnos > 0 ? (sumaNotas / totalAlumnos).toFixed(2) : 0;

    document.getElementById("cant-alumnos").innerText = totalAlumnos;
    document.getElementById("promedio-total").innerText = promedio;
    
    const estadoElement = document.getElementById("estado-grupo");
    if (totalAlumnos === 0) {
        estadoElement.innerText = "-";
        estadoElement.style.backgroundColor = "transparent";
    } else if (promedio >= 4) {
        estadoElement.innerText = "Rendimiento Alto 🌸";
        estadoElement.style.backgroundColor = "#fce4ec";
        estadoElement.style.color = "#880e4f";
    } else if (promedio >= 3) {
        estadoElement.innerText = "Rendimiento Medio 🦄";
        estadoElement.style.backgroundColor = "#f8bbd0";
        estadoElement.style.color = "#880e4f";
    } else {
        estadoElement.innerText = "Rendimiento Crítico ☁️";
        estadoElement.style.backgroundColor = "#ad1457";
        estadoElement.style.color = "#ffffff";
    }
}