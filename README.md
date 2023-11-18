# Práctica de Introducción al Desarrollo Web Móvil

Esta es la segunda práctica del curso de Introducción al Desarrollo Web Móvil. En esta práctica, implementaremos un sistema utilizando las siguientes tecnologías:

Tecnologías Utilizadas
================================================================================================================
Base de Datos:
- XAMPP
  
Backend:
- Laravel 10
  
Frontend:
- Angular 16.2
  
Configuración del Entorno
================================================================================================================
- Clona este repositorio en tu máquina local: 

		git clone https://https://github.com/ernitoft/practica2

XAMPP
================================================================================================================
Asegúrate de tener XAMPP instalado en tu sistema. Puedes descargarlo en: "https://www.apachefriends.org/es/download.html". Utilizaremos XAMPP para la gestión de la base de datos.

Laravel 10 (https://laravel.com)
================================================================================================================


- Navega al directorio del backend:

		cd backend

- Instala las dependencias de Laravel:

		composer install


- Configura el archivo .env con la información de tu base de datos (el nombre, los puertos usados).

- Ejecuta las migraciones y los seeders para inicializar la base de datos con datos predefinidos.
  
      php artisan migrate

      php artisan migrate --seed
Angular 16.2 (https://v16.angular.io/docs)
================================================================================================================

- Navega al directorio del frontend:

		cd frontend
- Instala las dependencias de Angular:

		npm install
  
Iniciar la Aplicación
================================================================================================================

Backend (Laravel):

- Ejecuta el servidor de Laravel.

		php artisan serve
El servidor se iniciará en http://localhost:8000.

Frontend (Angular):

- En otra terminal, ejecuta el servidor de desarrollo de Angular.

		ng serve
El servidor se iniciará en http://localhost:4200.

Accede a la aplicación en tu navegador utilizando la URL correspondiente a cada servidor.
