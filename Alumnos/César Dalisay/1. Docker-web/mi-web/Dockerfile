# Imagen base oficial de NGINX
FROM nginx:alpine

# Copiar los archivos de la web al directorio público de NGINX
COPY index.html /usr/share/nginx/html/index.html
COPY pfstyles.css /usr/share/nginx/html/pfstyles.css
COPY pfscript.js /usr/share/nginx/html/pfscript.js
COPY assets/ /usr/share/nginx/html/assets/
