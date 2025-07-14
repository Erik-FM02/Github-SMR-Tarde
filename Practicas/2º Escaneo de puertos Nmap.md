
# 🧪 Ejercicio: Escanea tu contenedor Docker con Nmap

Este ejercicio tiene como objetivo que compruebes cómo tu contenedor web levantado con Docker puede ser escaneado desde el exterior utilizando **Nmap**, una herramienta fundamental en auditorías de seguridad.

---

## 🐳 Paso previo

Asegúrate de tener tu contenedor web levantado usando Docker. Si no lo has hecho aún, revisa las prácticas anteriores para construir tu imagen y ejecutarla correctamente.

---

## 🔍 Instrucciones

### ✅ 1. Comprueba que tu contenedor está funcionando

Abre tu navegador y accede a la dirección correspondiente (por ejemplo, `http://localhost:8080`).

📸 **Tarea:** Incluye una captura de pantalla mostrando que tu página se está sirviendo correctamente.

---

### ✅ 2. Escanea tu contenedor con Nmap

Realiza un escaneo apuntando a la IP o nombre del host y al puerto expuesto.

✏️ **Tareas:**
- Escribe el comando utilizado.
- Anota el resultado del escaneo.
- Indica qué puerto ha sido detectado y su estado.

---

### ✅ 3. Escaneo con detección de servicios

Haz un escaneo más detallado que incluya la versión del servicio detectado.

✏️ **Tareas:**
- Escribe el comando utilizado.
- Describe la información adicional que obtienes respecto al servicio.
- Reflexiona: ¿Es seguro que esta información esté visible desde fuera?

---

### ✅ 4. Detén el contenedor y repite el escaneo

Una vez detenido el contenedor, repite el escaneo anterior.

✏️ **Tareas:**
- Escribe el nuevo resultado.
- Describe qué cambia respecto al escaneo anterior.
- Explica por qué ocurre ese cambio.

---

## 📋 Entrega

- Captura de pantalla de tu web funcionando.
- Comandos y resultados de los escaneos.
- Respuestas a cada una de las tareas.
- Reflexión final sobre la visibilidad de servicios en una red y su importancia en seguridad.

---

🎯 **Con esta práctica aprenderás**:
- A detectar puertos abiertos en sistemas.
- A usar Nmap como herramienta de exploración de red.
- A comprender la exposición de servicios como vector de riesgo.

