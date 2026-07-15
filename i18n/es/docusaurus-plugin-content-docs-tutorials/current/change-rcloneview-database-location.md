---
sidebar_position: 9
description: Cambia dónde almacena RcloneView su base de datos SQLite (rclone_view.db) y elige una carpeta segura y con permisos de escritura para el historial, los trabajos, los montajes y el estado de la interfaz.
keywords:
  - rcloneview
  - database
  - rclone_view.db
  - settings
  - path settings
  - job history
  - transfer history
  - sqlite
  - backup
tags:
  - RcloneView
  - Tutorial
  - settings
  - backup
  - database
date: 2025-12-08
author: tayson
---

# Cambiar la ubicación de almacenamiento de la base de datos

RcloneView almacena su estado principal en un archivo SQLite llamado **`rclone_view.db`**. Esta base de datos recuerda tu historial de transferencias, las definiciones de trabajos, la configuración de montajes, el historial de ejecución de trabajos y el estado de la interfaz; todo lo que la aplicación necesita para "recordar lo que hiciste" y "mostrar el estado actual" en la interfaz.

De forma predeterminada, la base de datos se guarda en tu carpeta Documentos. Puedes moverla a otra ubicación con permisos de escritura, como una unidad externa o una carpeta de copia de seguridad sincronizada.

<img src="/support/images/en/tutorials/database/database-windows-path.png" class="img-medium img-center" alt="Default database path on Windows" />

## Ruta predeterminada de la base de datos según el sistema operativo

| Plataforma | Ruta predeterminada                        |
| ---------- | ------------------------------------------ |
| Windows    | `C:\Users\<user>\Documents\rclone_view.db` |
| macOS      | `/Users/<user>/Documents/rclone_view.db`   |
| Linux      | `/home/<user>/Documents/rclone_view.db`    |

## Cómo cambiar la ubicación de la base de datos

Puedes elegir cualquier carpeta con permisos de escritura (local o externa) directamente desde RcloneView.

### Paso 1 — Abre Configuración

- Ve a **Configuración → Configuración general** en el menú superior.  
  <img src="/support/images/en/tutorials/database/database-settings-menu.png" class="img-medium img-center" alt="Open Settings menu" />

### Paso 2 — Rclone integrado → Configuración de rutas

- En la ventana de Configuración, abre **Rclone integrado → Configuración de rutas**.
- Haz clic en **Carpeta de base de datos** para elegir una nueva ubicación para `rclone_view.db`.  
  <img src="/support/images/en/tutorials/database/database-settings-dlg.png" class="img-medium img-center" alt="Database folder picker" />

- Usa el icono de carpeta para navegar hasta el directorio deseado; RcloneView colocará `rclone_view.db` allí.

## Precauciones sobre permisos y rutas

RcloneView comprueba los permisos de escritura creando un archivo temporal en la carpeta seleccionada. Ciertas carpetas del sistema bloquean la escritura a los usuarios estándar y mostrarán una advertencia:

- **Windows**: `C:\Program Files`, `C:\Windows`, etc.
- **macOS**: `/Applications`, `/System`, `/usr`, etc.
- **Linux**: `/usr`, `/opt`, `/etc`, etc.

<img src="/support/images/en/tutorials/database/database-settings-warning.png" class="img-medium img-center" alt="Permission warning" />

Si ves la advertencia, elige otra ruta con acceso de escritura completo.

## Ubicaciones recomendadas

- `C:\Users\<user>\Documents`
- `C:\Users\<user>\AppData\Roaming`
- Cualquier carpeta personal de tu propiedad con permiso de escritura
- Una unidad externa que controles (asegúrate de tener acceso de escritura)

Evita ubicaciones lentas o con permisos restringidos, y ten en cuenta que las unidades de red pueden introducir latencia.

## Consejos para el cuidado de la base de datos

- Evita las carpetas protegidas del sistema.
- Si usas una carpeta de sincronización en la nube, prefiere servicios que sincronicen archivos pequeños de forma confiable (por ejemplo, OneDrive, Dropbox).
- Haz copias de seguridad de `rclone_view.db` periódicamente.
- Evita rutas de red de alta latencia para la base de datos activa.

## Resumen rápido

| Elemento                  | Detalles                                                     |
| -------------------------- | ------------------------------------------------------------ |
| Archivo de base de datos   | `rclone_view.db`                                              |
| Qué almacena                | Historial de transferencias, trabajos, montajes, estado de la interfaz |
| Ruta predeterminada         | Carpeta Documentos del usuario                                |
| Cambiar ruta                | Configuración → Rclone integrado → Configuración de rutas    |
| Comprobación de permisos    | Prueba de escritura de archivo temporal                       |
| Mejores ubicaciones         | Carpetas con permiso de escritura del usuario (Documentos, Roaming, unidad externa) |

Elige una ubicación estable y con permisos de escritura para `rclone_view.db` para mantener RcloneView confiable y tu historial intacto.
