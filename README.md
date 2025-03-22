# Backend

Este es el **BACKEND**, desarrollado con **NestJS**, **TypeORM** y **MySQL**.

## 🚀 Instalación y Configuración

### 📌 Clonar el repositorio

```sh
# Clonar el repositorio
git clone https://github.com/tu-usuario/backend.git

# Entrar al directorio del proyecto
cd backend
```

### 📌 Instalar dependencias

Asegúrate de tener instalado **Node.js** y **npm** (o **yarn**). Luego, instala las dependencias del proyecto:

```sh
# Usando npm
npm install

# O usando yarn
yarn install
```

### 📌 Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto y agrega la configuración de la base de datos y otras variables necesarias:

```env
PORT=3000
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USER=root
DATABASE_PASSWORD=tu_contraseña
DATABASE_NAME=almacen_hv
JWT_SECRET=tu_secreto
```

### 📌 Ejecutar el proyecto

```sh
# Ejecutar en modo desarrollo
npm run start:dev

# O en producción
npm run start:prod
```

## 📦 Dependencias principales

- **@nestjs/core** - Framework principal de NestJS
- **@nestjs/common** - Módulo común de NestJS
- **@nestjs/typeorm** - Integración de TypeORM con NestJS
- **mysql2** - Cliente para conectar con MySQL
- **dotenv** - Manejo de variables de entorno
- **class-validator** - Validaciones en los DTOs
- **class-transformer** - Transformaciones en los DTOs



## 📂 Estructura del Proyecto

```
backend/
│── dist/                        # Carpeta de salida de la compilación (ignorada usualmente)
│── node_modules/                 # Dependencias del proyecto
│── src/                          # Código fuente principal
│   │── common/                   # Código común y reutilizable
│   │── config/                   # Configuración del proyecto
│   │── dto/                      # DTOs para validación de datos
│   │── entities/                 # Entidades del proyecto (Producto, Usuario, Rol)
│   │── producto/                 # Módulo de productos
│   │── usuario/                  # Módulo de usuarios
│   │── app.controller.ts         # Controlador principal
│   │── app.module.ts             # Módulo principal
│   │── app.service.ts            # Servicio principal
│   │── main.ts                   # Punto de entrada de la aplicación
│
│── test/                         # Pruebas del backend
│── .env                          # Variables de entorno
│── .gitignore                    # Archivos ignorados por Git
│── eslint.config.mjs             # Configuración de ESLint
│── nest-cli.json                 # Configuración del CLI de NestJS
│── package.json                  # Archivo de configuración del proyecto y dependencias
│── tsconfig.json                  # Configuración de TypeScript
│── README.md                     # Documentación del proyecto
```
