FROM nginx:alpine 

COPY dist/app /usr/share/nginx/html

WORKDIR /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT [ "nginx" , "-g","daemon off;" ]
