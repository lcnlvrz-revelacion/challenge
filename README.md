# Desafio

El desafío consta de armar una plataforma en donde los usuarios pueden visualizar y editar una biblioteca centralizada de libros

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

## Edge cases

Cuando un usuario publica mas de 2 libros en la biblioteca, se debe enviar un correo (mailer.service.ts) en forma de agradecimiento por las contribuciones a la biblioteca.

El problema es que al momento de enviar el correo, el proveedor de mensajería tiene una latencia de mas de 10 segundos

Ninguna request puede tomar mas de 1 segundo en procesarse (global api threshold)

En cuanto al envío del correo, es tolerable un delay y una eventual consistencia

## UI

En cuanto a como debe lucir la ui y los componentes para implementar la vista de los libros, formularios y demás acciones: **a criterio del candidato**

## Stack Flavors

Para implementar estos requerimientos el stack a utilizar no es estático y rígido. Unicamente se requiere como baseline el uso de nestjs del lado de la api y react del lado del frontend. Dicho esto, se
puede usar:

> :warning: **EN CASO DE USAR PRISMA**: Correr el comando `npm run prepare:prisma`. Luego para sincronizar los modelos definidos: usar `npm run prisma:push`

| DATABASE | ORM       | FRONTEND |
| -------- | --------- | -------- |
| MONGODB  | MONGOOSE  | NEXTJS   |
| MONGODB  | MONGOOSE  | SPA      |
| MYSQL    | TYPEORM   | NEXTJS   |
| MYSQL    | TYPEORM   | SPA      |
| MYSQL    | SEQUELIZE | NEXTJS   |
| MYSQL    | SEQUELIZE | SPA      |
| MYSQL    | PRISMA    | NEXTJS   |
| MYSQL    | PRISMA    | SPA      |

## Frontend Libraries

En cuanto a lo que son librerías de componentes, state managment, data fetching se encuentran instaladas los siguientes paquetes:

> :warning: En caso de no sentirse confiado para usar estas librerias, se puede instalar algun alternativa (e.g: en lugar de usar react-hook-form el candidato desea usar formik 👍)

- tailwindcss + radix-ui (ui pkg)
- react-hook-form (formularios)
- zod (validacion de datos)
- zustand
- react-query

## Setup

> :warning: **Asegurarse que docker engine se encuentre activo previo a correr los comandos**

nodejs version: v18.17.0

```
npm i

# If you decided to go with react spa + mongodb
npm run dev:mongo:spa

# If you decided to go with react nextjs + mongodb
npm run dev:mongo:next

# If you decided to go with react spa + mysql
npm run dev:mysql:spa

# If you decided to go with react nextjs + mysql
npm run dev:mysql:next
```

Una vez ejecutado el comando, el cliente se encontrara up and running en el puerto `3002`. La api lo estará en el puerto `3001`

Una vez decidido que orm usar para implementar la capa de persistencia, se debe descomentar el modulo del orm seleccionado dentro de `app.module.ts`

Se requiere que el candidato comparta pantalla en una ventana del browser que se encuentre en el puerto 3002. De esta manera el entrevistador podrá ver los cambios en tiempo real del frontend

## Side notes

Es importante que el candidato vaya narrando la linea de pensamientos y decisiones que va teniendo a lo largo de la entrevista
