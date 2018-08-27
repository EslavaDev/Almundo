# Almundo App
Aplicacion desarrollado para la empresa Almundo, con el fin de una prueba tecnica, a continuacion se mencionaran lo que se uso para la construccion de dicha aplicacion:

 - **Backend**: NodeJS, HapiJS, Seneca
 - **Fronted**: React, Redux, Redux-Thunk
 - **Documentation**: Swagger
 
 esta aplicacion, tiene en el backend una arquitectura basada en microservicios.

# Backend

## estructuracion de carpetas

**gateway**:

 - build 
 --static
 - config
 - src
 --modules
**microservicio hotel**:

- config
- src
 -- actions
 -- controllers
 -- data
 -- model
 -- scripts
## Ejecucion:
**gateway:**
se debe posicionar en la carpeta gateway y luego digitar els iguiente comando:
```npm install ```
```npm start```

**microservicio hotel:**
se debe posicionar en la carpeta hotely luego digitar els iguiente comando:
```npm install ```
```npm start```

antes de dar **npm start ** recuerda haber iniciado mongo


# Fronted

## Ejecucion:
**react:**
se debe posicionar en la carpeta almundo y luego digitar els iguiente comando:
```npm install ```
```npm start```

# Endpoints

## Backend
find all: *http://127.0.0.1:3000/api/v1/hotel/fetchAll*
save: *http://127.0.0.1:3000/api/v1/hotel/save*
update: *http://127.0.0.1:3000/api/v1/hotel/update/{id}*
remove: *http://127.0.0.1:3000/api/v1/hotel/remove/{id}*

## Fronted

hay dos formas de acceder al front: 

 1. mediante el servidor de desarrollo : *http://127.0.0.1:3002*
 2. mediante el build ofuscado que inicializa el gateway: *http://127.0.0.1:3000/*
## Swagger

con el swagger podremos ver toda la documentacion "in code" de los servicios, accediendo a la siguiente url:
*http://127.0.0.1:3000/docs*
