# API REST Videoclub

! [BBDD Description] (./img/MySQL_Videoclub.png)

# API REST Videoclub

API que simula la BBDD de un Videoclub mediante un Backend empleando JavaScript


## Requisitos para su uso
Tener **Node.js** y el gestor de paquete **NPM** instalado con las siguientes dependencias:
* Express
* mysql2
* Sequelize

## Inicio

```bash
npm start
```

## Endpoints
#### Usuario 👨🏻👩🏼 [URL/users]
Registro en la API _POST_ _/signup_

Login del usuario _POST /login_

Perfil donde se muestra la informacion del usuario _GET /profile/email_

Baja del usuario _DELETE /remove/email_

#### Peliculas 🎬 [URL/movies]
Listar todo el catalogo de peliculas _GET /list_

Listar la pelicula por el ID _GET /id_

Busqueda de la pelicula por el titulo _POST/title_


#### Pedido 🛒 [URL/orders]
Creacion de un pedido _POST /create_

## Observaciones
API deployada a traves de Heroku mediante (https://bootcamp-reto-backend.herokuapp.com/)


## License
[MIT](https://choosealicense.com/licenses/mit/)