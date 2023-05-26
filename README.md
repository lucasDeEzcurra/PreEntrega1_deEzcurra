# Carrito de Compras con React

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/TuUsuario/TuRepositorio/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/TuUsuario/TuRepositorio.svg)](https://github.com/TuUsuario/TuRepositorio/stargazers)

¡Bienvenido al repositorio del proyecto final de mi curso en CODERHAUSE! En este proyecto, he creado un carrito de compras utilizando tecnologías como **React**, **React-Bootstrap**, **Firebase** y **React-Router-DOM**, con la configuración inicial del proyecto realizada mediante **Create-React-App**.

## Descripción

El objetivo de este proyecto fue construir un carrito de compras totalmente funcional utilizando React y otras herramientas populares del ecosistema de React. El carrito de compras permite a los usuarios agregar, eliminar y actualizar la cantidad de productos. Además, se ha integrado **Firebase** para gestionar la persistencia de los datos.

## Características

- Interfaz de usuario intuitiva y amigable.
- Listado de productos con información detallada.
- Capacidad de agregar productos al carrito.
- Actualización en tiempo real de la cantidad de productos en el carrito.
- Eliminación de productos del carrito.
- Persistencia de datos utilizando **Firebase**.

## Tecnologías utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario interactivas.
- **React-Bootstrap**: Conjunto de componentes de interfaz de usuario para React basado en Bootstrap.
- **Firebase**: Plataforma de desarrollo de aplicaciones móviles y web que proporciona herramientas y servicios para crear y gestionar aplicaciones.
- **React-Router-DOM**: Enrutador de enlaces para React que permite la navegación declarativa y basada en componentes.
- **Create-React-App**: Herramienta de línea de comandos que configura automáticamente un proyecto de React con las mejores prácticas y las herramientas más utilizadas.

## Instalación

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. Clona este repositorio en tu máquina local utilizando el siguiente comando:

git clone <https://github.com/lucasDeEzcurra/PreEntrega2_deEzcurra.git>


2. Navega al directorio raíz del proyecto:

cd carrito-de-compras-react

3. Instala las dependencias del proyecto: 

npm install


4. Configura tus credenciales de Firebase. Asegúrate de tener una cuenta de Firebase y crear un proyecto nuevo. Luego, sigue estos pasos:

   a. Abre el archivo `services/db.js` en tu editor de texto.

   b. Reemplaza el contenido actual con la siguiente configuración de Firebase:

```javascript
// Importa las funciones que necesitas de los SDK que requieras
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID"
};

// Inicializa Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
```

Recuerda reemplazar `"TU_API_KEY"`, `"TU_AUTH_DOMAIN"`, `"TU_PROJECT_ID"`, `"TU_STORAGE_BUCKET"`, `"TU_SENDER_ID"`, y `"TU_APP_ID"` con las credenciales correctas de tu proyecto de Firebase. Espero que esto sea de ayuda.


5. Inicia la aplicación: 

npm start

La aplicación estará disponible en http://localhost:3000.

## Contribución

¡Eres más que bienvenido si deseas contribuir a este proyecto! Puedes seguir estos pasos:

1. Haz un fork de este repositorio.
2. Crea una rama para tus cambios:

git checkout -b mi-rama


3. Realiza tus modificaciones y mejoras.
4. Commitea tus cambios:

git commit -m "Agrego mis cambios"


5. Sube tus cambios a tu repositorio:

git push origin mi-rama


6. Abre una solicitud de extracción en este repositorio.

¡Gracias por tu interés en contribuir!


