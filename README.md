# Desafio

El desafió consta de armar una plataforma en donde los usuarios pueden visualizar y editar una biblioteca centralizada de libros

Para poder lograr eso, se necesita que:

- Se pueda visualizar los libros que forman parte de la biblioteca
- Permitir a los usuarios agregar un libro a la biblioteca
- Permitir a los usuarios actualizar un libro ya existente
- Eliminar un libro de la biblioteca
- Cuando un mismo usuario (basado en el correo) publica +2 libros, se envía un correo de agradecimiento por las contribuciones a la biblioteca. Este servicio ya se encuentra implementado (`mailer.service.ts`)

## Entidades

La entidad principal con la cual se va a trabajar es `book entity`. Esta entidad cuenta con los siguientes atributos:

- ID (autogenerado)
- Title
- Author
- Published Date (validación de fecha)
- Genre (enum: fiction, narrative, mystery, novel)
- Description (max: 256 caracteres)
- Created by email (email validation)

## Stack a usar

Como se puede observar en el layout del proyecto se trata de una app monolita en donde el back es en node (nestjs) y el front es en react (next.js)

En cuanto a lo que son librerías de componentes, state managment, data fetching se encuentran instaladas los siguientes paquetes:

- tailwindcss + radix-ui (ui pkg)
- react-hook-form (formularios)
- zod (validacion de datos)
- zustand
- react-query

Lo que es a nivel backend se requiere implementar la capa de persistencia usando la base de datos mongodb.c

Se encuentra instalado el orm mongoose para facilitar la implementación e interacción con la base de datos

También se encuentra el pkg class-validator para validar datos de la solicitud

## Edge cases

Cuando un usuario publica mas de 2 libros en la biblioteca, se debe enviar un correo (mailer.service.ts) en forma de agradecimiento por las contribuciones a la biblioteca.

El problema es que al momento de enviar el correo, el proveedor de mensajería tiene una latencia de mas de 10 segundos

Ninguna request puede tomar mas de 1 segundo en procesarse

En cuanto al envío del correo, es tolerable un delay y una eventual consistencia

## Setup

nodejs version: v18.17.0

```
npm i
npm run dev
```
