
#  Práctica: Crea tu propia imagen Docker con una web estática

##  Objetivo
Construir tu propia imagen Docker usando un `Dockerfile` que sirva una página web estática con HTML y CSS mediante un contenedor NGINX.

---

##  Estructura del proyecto

Crea una carpeta llamada `mi-web` y dentro de ella los siguientes archivos:

```
mi-web/
├── index.html
├── styles.css
└── Dockerfile
```

---

##  Contenido de los archivos

### index.html
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi primera web Dockerizada</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>¡Hola, SMR!</h1>
  <p>Esta web se sirve desde un contenedor Docker.</p>
</body>
</html>
```

### styles.css
```css
body {
  background-color: #f0f0f0;
  font-family: sans-serif;
  text-align: center;
  margin-top: 50px;
}
```

### Dockerfile
```Dockerfile
# Imagen base oficial de NGINX
FROM nginx:alpine

# Copiar los archivos de la web al directorio público de NGINX
COPY index.html /usr/share/nginx/html/index.html
COPY styles.css /usr/share/nginx/html/styles.css
```

---

##  Instrucciones paso a paso

1. Abre una terminal y navega a la carpeta `mi-web`.
2. Ejecuta el siguiente comando para construir la imagen:
   ```bash
   docker build -t miweb-smr .
   ```
3. Ejecuta un contenedor a partir de tu imagen:
   ```bash
   docker run -d -p 8080:80 --name miweb-container miweb-smr
   ```
4. Abre tu navegador y accede a:
   ```
   http://localhost:8080
   ```

Deberías ver tu página personalizada funcionando desde un contenedor Docker.

---

##  Qué debes entregar
- Todo debe subirse al repositorio en el directorio correspondiente a cada alumno (por ejemplo: `entregas/erik/mi-web/`)

---

##  Limpieza (cuando termines)
```bash
docker stop miweb-container
docker rm miweb-container
docker rmi miweb-smr
```

---

##  ¿Qué aprendes con esta práctica?
- Cómo crear un `Dockerfile` personalizado
- Cómo construir imágenes Docker
- Cómo usar NGINX para servir contenido estático
- Primeros pasos reales hacia DevOps
