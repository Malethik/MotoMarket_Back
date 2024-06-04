# SERVER MOTOMARKET

---

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Malethik_MotoMarket_Back&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Malethik_MotoMarket_Back)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=Malethik_MotoMarket_Back&metric=coverage)](https://sonarcloud.io/summary/new_code?id=Malethik_MotoMarket_Back)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=Malethik_MotoMarket_Back&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=Malethik_MotoMarket_Back)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=Malethik_MotoMarket_Back&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=Malethik_MotoMarket_Back)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=Malethik_MotoMarket_Back&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=Malethik_MotoMarket_Back)

---

BackEnd por la application MotoMarket.

La aplicacion esta montada en NestJS.

Para usarla clonar el repositorio y ejecutar los comando descripton abajo.

## Description dettallada

La application se connecta en el database postgres tramite el ORM prisma.

Estan implementada para connectarse tramite cloudinary por la subida de la image por los relativo endpoint de creacion de item y usuario.
Ademas he dejado displonible endpoint especifico por imagine por ser utilizado en futuro en el front.
En la parte core hay la gestion del token con JwT por la authenticacion. Ademas en el core estan 3 guard. 2 muy importantes.
Logged: comparacion con el JwT por authorizacion de connection.
Owner: verifica la posibilidad de hacer la operacion cuando es el que ha creado el objecto

## Installation

```shell
npm install
```

## .ENV

Teneis que crear vuestro file .env en la root directory y añadirle esta variable:

DATABASE_URL="postgres://Your DataBase Url"

SECRET_TOKEN="A Word for your token"

CLOUDINARY_URL="cloudinary://your link"

## Running the app

```shell
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

## Test

```shell
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```
