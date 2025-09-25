# Alerti - Sistema de Recordatorios de Medicamentos

Alerti es una aplicación web desarrollada en Angular 19 que permite a los usuarios gestionar y recibir recordatorios para la toma de sus medicamentos. La aplicación facilita el seguimiento de tratamientos médicos, inventario de medicamentos y visualización de progreso mediante gráficos intuitivos.

## 📋 Descripción del Proyecto

Esta aplicación está diseñada para ayudar a las personas a mantener un control efectivo de sus medicamentos, ofreciendo:

- **Sistema de autenticación**: Registro e inicio de sesión de usuarios
- **Panel de inicio**: Vista general de medicamentos y próximas dosis
- **Recordatorios inteligentes**: Notificaciones para toma de medicamentos
- **Gestión de inventario**: Control de stock de medicamentos
- **Visualización de datos**: Gráficos de adherencia y progreso
- **Interfaz intuitiva**: Diseño moderno y responsive

## 🏗️ Arquitectura del Proyecto

### Estructura de Directorios

```
src/
├── app/
│   ├── components/          # Componentes reutilizables
│   │   ├── custom-button/
│   │   ├── custom-card-header/
│   │   ├── custom-dialog/
│   │   ├── custom-listbox/
│   │   ├── custom-nav-rail/
│   │   ├── custom-text-field/
│   │   ├── medication-chart/
│   │   ├── medication-line-chart/
│   │   └── reminder-card/
│   ├── layouts/             # Layouts principales
│   │   └── main-layout/
│   ├── pages/               # Páginas de la aplicación
│   │   ├── change-password/
│   │   ├── home/
│   │   ├── inventory/
│   │   ├── login/
│   │   └── signup/
│   └── styles/              # Estilos globales y variables
├── assets/                  # Recursos estáticos
│   ├── icons/              # Iconos SVG
│   └── images/             # Imágenes
└── styles/                 # Hojas de estilo principales
```

### Tecnologías Utilizadas

- **Frontend**: Angular 19.2.0
- **UI Framework**: Angular Material 19.2.19 + Bootstrap 5.3.8
- **Estilos**: SCSS
- **Testing**: Jasmine + Karma
- **Build Tool**: Angular CLI 19.2.1

## 🚀 Instrucciones para Revisión y Ejecución

### Prerrequisitos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- **Node.js** (versión 18.x o superior)
- **npm** (incluido con Node.js)
- **Angular CLI** (se puede instalar globalmente con `npm install -g @angular/cli`)

### Instalación

1. **Clonar el repositorio** (si aplica):
   ```bash
   git clone <repository-url>
   cd alerti
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

### Ejecución para Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm start
# o alternativamente
ng serve
```

La aplicación estará disponible en: **http://localhost:4200/**

El servidor se recargará automáticamente cuando modifiques archivos del código fuente.

### Ejecución para Revisión

Para una revisión completa del proyecto, recomendamos:

1. **Servidor de desarrollo**:
   ```bash
   ng serve --open
   ```
   Esto abrirá automáticamente el navegador en `http://localhost:4200/`

2. **Build de producción** (para verificar la compilación):
   ```bash
   ng build --configuration production
   ```
   Los archivos compilados se generarán en `dist/alerti/`

### Navegación en la Aplicación

1. **Página de Login**: `/login` (página inicial)
   - Cualquier combinación de usuario/contraseña permite el acceso
   
2. **Registro**: `/signup`
   - Formulario de registro de nuevos usuarios
   
3. **Dashboard Principal**: `/dashboard` o `/home`
   - Vista principal con recordatorios de medicamentos
   - Gráficos de adherencia
   - Navegación a inventario

4. **Gestión de Inventario**: Accesible desde el dashboard

5. **Cambio de contraseña**: Accesible desde el dashboard

### Funcionalidades Principales para Revisar

- **Autenticación**: Flujo completo de login/registro
- **Componentes personalizados**: Botones, campos de texto, diálogos
- **Visualización de datos**: Gráficos de medicamentos y progreso
- **Responsive Design**: Adaptabilidad a diferentes tamaños de pantalla
- **Navegación**: Sistema de navegación con rail lateral


### Build para verificación:
```bash
ng build
```

## 📱 Características de UX/UI

- **Material Design**: Implementación de principios de Material Design
- **Responsive**: Adaptable a dispositivos móviles y desktop
- **Accesibilidad**: Componentes accesibles según estándares web
- **Consistencia visual**: Paleta de colores y tipografías unificadas
- **Interacciones intuitivas**: Feedback visual claro para las acciones del usuario

## 🎯 Objetivo del Proyecto

Este proyecto forma parte del curso de UX en la Universidad de los Andes, demostrando:

- Aplicación de principios de diseño centrado en el usuario
- Implementación de interfaces intuitivas y accesibles
- Desarrollo de flujos de usuario efectivos
- Integración de componentes de UI consistentes
- Prototipado funcional con tecnologías modernas

---

**Versión**: 0.0.0  
**Angular CLI**: 19.2.1  
**Angular**: 19.2.0
