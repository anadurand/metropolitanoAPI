# Api Metropolitano

## Implementación - Stack utilizado (MEN)

MongoDB, Express y Node

- Node.js

- MongoDb

[Mongo DB CRUD](https://docs.mongodb.com/manual/crud/)
[Install MongoDB - Video Youtube](https://www.youtube.com/watch?v=Zmq8LcPaJjo&t=9s)
[Install MongoDB - Video Youtube](https://www.youtube.com/watch?v=lgrYE77pf1s&t=511s)

- Express

[Express - Hello Wordl](http://expressjs.com/en/starter/hello-world.html)
[Express - Basic Routing](http://expressjs.com/en/starter/basic-routing.html)
[Express - Static Files](http://expressjs.com/en/starter/static-files.html)

## Implementación del Api del Metropolitano
 
 API RESTful utilizando Node.js, ExpressJS  para consultar la oferta del servicio Metropolitano de Lima.

## Metropolitano API

Accede a la data del servicio regular del metropolitano. La data está habilitada en formato json.

### API- call : servicio regular 

Si quieres desarrollar una aplicacion con la data del servicio regular del metropolitano de lima utiliza:

[Endpoint-servicioRegular](https://metropolitanoapi.herokuapp.com/metropolitano/regular)

Lo que deberás visualizar es :

![regular](/assets/regular.png)

La entidad Servicio regular guarda la siguiente estructura:

- id: identificador unico de la unidad o servicio del metropolitano.

- name : Nombre de la unidad o servicio del metropolitano.

- category: Indica el troncal al que pertenece (regular)

- schedule: Horario del servicio del metropolitano

## Esquema REGULAR - MongoDB

A continuación se detalla el tipo de dato para cada propiedadad del objeto JSON

```js

    name: {
        type: String,
        required: 'El nombre no puede ser un campo vacio'
    },

    category : {
        type : String,
        default: false
    },

    schedule: {
        type: Array,
        required: 'Los horarios no pueden estar vacios',
    }

```

## Continua con el proyecto

Descarga o clona el repositorio. Terminemos haciendo el API-REST del servicio del metropolitano

```bash
npm install
```

Ahora debes instalar nodemon con el siguiente comando

```bash
npm install nodemon -g --save
```

Luego levantas el servidor a través de este comando

```bash
nodemon index.js
```

