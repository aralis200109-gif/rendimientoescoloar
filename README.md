# DOCUMENTACIÓN BREVE

# TEMA 2. Dashboard de Rendimiento Escolar

## 1. Descripción General

El proyecto consiste en desarrollar un dashboard interactivo que permita analizar el rendimiento académico de alumnos mediante estadísticas dinámicas y visualización gráfica utilizando únicamente HTML, CSS y JavaScript.

---

# 2. Objetivo General

Construir un sistema web capaz de procesar datos de estudiantes y mostrar resultados estadísticos de forma visual y dinámica.

---

# 3. Estructura de Datos JSON

El sistema utiliza arreglos de objetos en formato JSON para almacenar la información de los alumnos.

### Ejemplo:

```javascript id="3s8fjq"
const alumnos = [
  { nombre: "Juan", nota: 7 },
  { nombre: "Ana", nota: 9 }
];
```

Cada objeto contiene:

* Nombre del alumno
* Nota obtenida

---

# 4. Procesamiento de Datos

El sistema realiza cálculos automáticos como:

* Promedio general
* Mejor alumno
* Peor alumno

### Funciones utilizadas:

```javascript id="v5h91d"
let promedio = alumnos.reduce((acc, alumno) => acc + alumno.nota, 0) / alumnos.length;
```

También se utilizan:

* `reduce()`
* `Math.max()`
* `Math.min()`
* `forEach()`

---

# 5. Renderización en el DOM

Los datos procesados se muestran dinámicamente en la página web:

* Lista de alumnos
* Promedio general
* Mejor y peor rendimiento

Todo el contenido es generado mediante manipulación del DOM con JavaScript.

---

# 6. Gráfico de Barras sin Librerías

El sistema implementa gráficos utilizando únicamente HTML y CSS.

### Ejemplo:

```html id="ml1r9a"
<div class="barra" style="height: 80%"></div>
```

### CSS:

```css id="n2d4op"
.barra {
  width: 40px;
  background: steelblue;
  transition: 0.5s;
}
```

Las barras representan visualmente las notas de cada alumno.

---

# 7. Generación de PDF

El dashboard puede imprimirse en formato PDF utilizando:

```javascript id="kj7w3x"
window.print();
```

Se aplica una vista limpia mostrando únicamente el panel de estadísticas.

---

# 8. Tecnologías Utilizadas

* HTML5
* CSS3
* JavaScript Vanilla

---

# 9. Conclusión

El dashboard de rendimiento escolar permite analizar y visualizar información académica de manera dinámica, fortaleciendo el manejo de estructuras JSON, procesamiento de datos y manipulación visual con JavaScript.
