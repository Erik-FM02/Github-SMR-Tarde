#  Usamos una imagen ligera de NGINX como base
FROM nginx:alpine

#  Eliminamos archivos por defecto (opcional para limpieza)
RUN rm -rf /usr/share/nginx/html/*

#  Copiamos nuestro contenido personalizado
COPY index.html /usr/share/nginx/html/index.html
COPY styles.css /usr/share/nginx/html/styles.css


