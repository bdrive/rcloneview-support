---
sidebar_position: 1
description: " Un desglose visual del diseño de RcloneView, que incluye la barra de título, los menús principales, el explorador de archivos y las pestañas de transferencia."
keywords:
  - rcloneview
  - rclone GUI
  - administrador de archivos en la nube
  - gestión de almacenamiento remoto
  - explorador de archivos
  - transferencia de nube a nube
  - sincronización de archivos
  - interfaz de rcloneview
  - diseño de rcloneview
  - barra de herramientas
  - estado de transferencia
tags:
  - RcloneView
  - UI-guide
  - file-explorer
  - Remote-Storage
  - layout
  - interface
  - cloud-file-transfer
  - Remote-storage-managent
date: 2025-05-27
author: Jay
---
# Guía de la interfaz de RcloneView

RcloneView cuenta con un diseño intuitivo que permite a los usuarios explorar, comparar y transferir archivos entre el almacenamiento local y los remotos en la nube. A continuación se muestra un desglose de cada sección con explicaciones detalladas.

<img src="/support/images/en/howto/rcloneview-basic/rcloneview-user-interface.png" alt="rcloneview user interface" class="img-large img-center" />
## ① Barra de título

Muestra el nombre de la aplicación y los botones de control de ventana estándar:

- `—`: Minimizar
- `□`: Maximizar / Restaurar
- `X`: Salir de RcloneView

## ② Barra de menú principal

Pestañas de navegación principales para acceder a las funciones principales:

- **`Home`** – Herramientas para la sincronización y comparación de archivos, programación de tareas y compatibilidad con múltiples ventanas  
- **`Remote`** – Agregar, configurar y montar remotos de almacenamiento en la nube  
- **`Settings`** – Gestionar conexiones remotas, preferencias generales y el diseño de la interfaz  
- **`Help`** – Acceder al soporte del producto, activación de licencia, comentarios y verificación de actualizaciones  

## ③ Barra de herramientas

La barra de herramientas cambia dinámicamente según la pestaña de menú seleccionada:

  ### Cuando se selecciona `Home`:

| Botón         | Descripción                                                                          |
| ------------- | ------------------------------------------------------------------------------------ |
| `Sync`        | Sincroniza archivos y carpetas entre los directorios seleccionados en los dos paneles del explorador |
| `Compare`     | Compara las diferencias entre los directorios seleccionados en dos paneles del explorador           |
| `Job Manager` | Crea y gestiona tareas de sincronización recurrentes entre remotos de uso frecuente     |
| `New Window`  | Abre una nueva ventana de RcloneView para conectarse a una instancia diferente del daemon de Rclone        |
 
### Cuando se selecciona `Remote`:

<img src="/support/images/en/howto/rcloneview-basic/remote-tab-toolbar.png" alt="remote tab toolbar" class="img-medium img-center" />

| Botón            | Descripción                                                                      |
| ---------------- | -------------------------------------------------------------------------------- |
| `New Remote`     | Crea una nueva conexión a un remoto de almacenamiento en la nube                                |
| `Remote Manager` | Ver, editar o eliminar remotos guardados                                              |
| `Mount Manager`  | Monta un remoto como una unidad local                                                  |
| `Job Manager`    | Crea y gestiona tareas de sincronización recurrentes entre remotos de uso frecuente |
  
### Cuando se selecciona `Settings`:
<img src="/support/images/en/howto/rcloneview-basic/settings-menu-toolbar.png" alt="settings menu toolbar" class="img-medium img-center" />

| Botón              | Descripción                                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------ |
| `Connect Manager`  | Gestiona y cambia entre conexiones del daemon de Rclone integradas o externas                                     |
| `General settings` | Configura el idioma de la aplicación, las rutas de archivos, el tema, el comportamiento de arrastrar y soltar, las opciones de Rclone integrado y más. |
| `Layout`           | Alterna entre diseños de panel horizontal y vertical para la vista del árbol de carpetas y la lista de archivos                   |
| `View count`       | Alterna entre las vistas del explorador de archivos de panel único y panel doble                                                 |

### Cuando se selecciona `Help`:
<img src="/support/images/en/howto/rcloneview-basic/help-menu-toolbar.png" alt="help menu toolbar" class="img-medium img-center" />

| Botón                  | Descripción                           |
| ---------------------- | ------------------------------------- |
| `Check for Updates`    | Comprueba si hay una nueva versión disponible   |
| `Feedback`             | Envía comentarios o informa de problemas      |
| `Homepage`             | Visita el sitio web oficial de RcloneView |
| `Register License Key` | Activa tu licencia PLUS            |

## ④ Panel del explorador de archivos

Cada panel te permite explorar unidades locales o remotos en la nube mediante una interfaz de pestañas.  
Puedes abrir diferentes orígenes en cada panel y transferir archivos entre ellos fácilmente.

  <img src="/support/images/en/howto/rcloneview-basic/file-explorer-pannel-layout.png" alt="file explorer panel layout" class="img-medium img-center" />
El panel incluye los siguientes componentes:

1. **Barra de pestañas** – Muestra la conexión actual (por ejemplo, Local Disk, myAwsS3, myGoogleDrive)  
2. **Barra de ruta de navegación (Breadcrumb)** – > Muestra la ruta de la carpeta actual y admite navegación rápida haciendo clic o escribiendo con autosugerencias. 
3. **Barra de herramientas del panel** – Incluye acciones rápidas:  
	- <img src="/support/icons/alias-icon.png" alt="alias icon" class="inline-icon" /> **Crear alias (favorito)** — Guarda la carpeta actual como favorita para acceso rápido  
	- <img src="/support/icons/mount-icon.png" alt="mount icon" class="inline-icon" />**Montar carpeta** — Monta la carpeta seleccionada como una unidad local  
	- <img src="/support/icons/settings-icon.png" alt="settings icon" class="inline-icon" /> **Editar configuración del remoto** — Modifica la configuración del remoto conectado  
	- <img src="/support/icons/refresh-icon.png" alt="refresh icon" class="inline-icon" /> **Actualizar** — Recarga el contenido de la carpeta actual
4. **Árbol de carpetas** – Un navegador de carpetas plegable  
5. **Vista de lista de archivos/carpetas** – Muestra el contenido con nombre, tipo, fecha de modificación y tamaño  
6. **Pie de resumen** – Muestra el número total de archivos/carpetas y el tamaño total de los archivos

## ⑤ Pestañas de estado de transferencia

Muestra el estado y el historial de las operaciones de sincronización o transferencia de archivos:

| Pestaña         | Descripción                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------- |
| **`Transfer`**  | Muestra todas las tareas de transferencia activas en curso, incluyendo velocidad, progreso y tiempo restante |
| **`Completed`** | Enumera todas las tareas de sincronización o copia completadas con detalles como hora, tamaño e ID de tarea               |
| **`Log`**       | Muestra entradas de registro con marca de tiempo, tipos de tarea, mensajes y estado               |
## ⑥ Pie de página

- **Información de versión**: Versión actualmente en ejecución de RcloneView (por ejemplo, `RcloneView 0.6.301`)
- **Información de licencia**: Indica el tipo de licencia (`FREE License` o `PLUS License`)
- **Información de conexión de Rclone**: Muestra la instancia de rclone conectada, la dirección del servidor y el sistema operativo
  - Ejemplo: `Connected to rclone v1.69.1 (http://127.0.0.1:5582, windows)`
