---
sidebar_position: 10
description: Aprenda a configurar las preferencias generales, el diseño de la interfaz, las notificaciones y la configuración integrada de Rclone en RcloneView.
keywords:
  - rcloneview
  - rclone
  - configuración de rcloneview
  - preferencias generales
  - modo oscuro
  - registro de rclone
  - configuraciones de rclone
tags:
  - RcloneView
  - settings
  - configuration
  - preferences
date: 2025-06-22
author: Jay
---
# Configuración general

El menú **Configuración** de RcloneView está dividido en cuatro pestañas para mayor claridad y personalización:

- **General**
- **Interfaces y notificaciones**
- **Rclone integrado**
- **Red y varios**

Cada pestaña le permite configurar diferentes partes de la aplicación. A continuación se muestra un desglose de cada sección.

---

## 🛠 General

<img src="/support/images/en/howto/rcloneview-basic/general-settings.png" alt="general settings" class="img-medium img-center" />
### Idioma

- **Idioma**: elija su idioma preferido para la interfaz desde el menú desplegable.

### Comportamiento de inicio

- **Iniciar al iniciar sesión**: inicia automáticamente RcloneView cuando inicia sesión en su sistema.

:::important Inicio automático: programación y montaje

Cuando **Iniciar al iniciar sesión** está habilitado:  

- Cualquier tarea programada definida en el [**Programador de tareas**](/howto/rcloneview-advanced/job-scheduling-and-execution) se ejecutará automáticamente al iniciar sesión.  
- Cualquier remoto configurado para montaje automático en el [**Administrador de montajes**](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-1-mount-from-remote-explorer) se montará automáticamente cuando RcloneView se inicie.  
:::

- **Iniciar minimizado**: inicia RcloneView en la bandeja del sistema.

- **Detectar automáticamente NAS Synology**: escanea automáticamente la red local en busca de dispositivos NAS Synology.

### Restablecer

- **Restaurar configuración predeterminada**: restablece todas las opciones a sus valores predeterminados originales.

---

## 🎛  Interfaces y notificaciones

<img src="/support/images/en/howto/rcloneview-basic/interface-settings.png" alt="interface settings" class="img-medium img-center" />
### Apariencia de la interfaz

- **Modo oscuro**: alterna entre los temas claro y oscuro.
- **Color del tema**: elija entre los colores de acento disponibles.

### Arrastrar y soltar

- **Confirmar arrastrar y soltar**: habilita una ventana emergente de confirmación al mover archivos mediante arrastrar y soltar.

### Mostrar tipos de tareas (filtros del registro de transferencias)

Seleccione qué tipos de tareas mostrar en el panel del registro de transferencias:
- **Descarga**
- **Carga**
- **Sincronización**

<img src="/support/images/en/howto/rcloneview-basic/notification-dialogs-settings.png" alt="notification dialogs settings" class="img-medium img-center" />
### Cuadros de diálogo de notificación

Decida qué tipos de notificaciones emergentes desea recibir mientras usa RcloneView:

- **Mostrar registro de estado de la tarea**: muestra un cuadro de diálogo detallado después de que finaliza cada tarea de transferencia.
- **Mostrar comparación completada**: notifica cuando una tarea de comparación de carpetas se completa correctamente.
- **Mostrar confirmación antes de eliminar archivos en la comparación**: solicita confirmación antes de eliminar archivos durante la comparación de carpetas.
- **Mostrar notificación de sincronización completada**: muestra un mensaje cuando finaliza una operación de sincronización.
- **Mostrar cuadro de diálogo de error de red**: le avisa de inmediato si ocurre un error de conexión de red durante una tarea.

---

## ⚙️ Rclone integrado

<img src="/support/images/en/howto/rcloneview-basic/embedded-rclone-settings.png" alt="embedded rclone settings" class="img-medium img-center" />

### Ciclo de vida integrado

- **Detener rclone al salir de la aplicación**: cierra automáticamente el proceso `rclone` integrado cuando se cierra RcloneView.

:::caution Es necesario reiniciar después de cualquier cambio

Después de modificar cualquier configuración en la pestaña **Rclone integrado** — incluida la configuración de rutas, indicadores globales u opciones de registro — haga clic en **Reiniciar Rclone integrado** para aplicar los cambios.  
Esto reiniciará el proceso Rclone integrado y puede interrumpir cualquier tarea que se esté ejecutando en ese momento.

:::
### Configuración de rutas

- **Ubicación local de Rclone**: ruta absoluta a su binario `rclone`.
- **Ubicación local de la configuración de Rclone**: ruta a su archivo `rclone.conf` (contiene información de remotos).
- **Carpeta de descarga predeterminada**: directorio donde se guardarán los archivos descargados.
- **Carpeta de carga predeterminada**: directorio utilizado como origen para las tareas de carga.

   <img src="/support/images/en/howto/rcloneview-basic/embedded-rclone-advanced-options-settings.png" alt="embedded rclone advanced options settings" class="img-medium img-center" />
### Opciones avanzadas

- **Indicadores globales de Rclone**: indicadores adicionales para pasar a rclone (p. ej., `--s3-directory-markers`).
- **Contraseña de configuración**: contraseña para configuraciones de rclone cifradas. Si establece esta contraseña, los archivos de configuración de rclone se cifrarán.

<img src="/support/images/en/howto/rcloneview-basic/embedded-rclone-logging-configuration-settings.png" alt="embedded rclone logging configuration settings" class="img-medium img-center" />
### Configuración de registro

- **Habilitar registro de rclone**: activa el registro basado en archivos para las operaciones de Rclone.
- **Carpeta de registro**: directorio donde se almacenan los archivos de registro.
- **Nombre del archivo de registro**: nombre de archivo predeterminado para los registros.
- **Nivel de registro**: elija el nivel de detalle (DEBUG, INFO, NOTICE, ERROR).

---

## 🌐 Red y varios

<img src="/support/images/en/howto/rcloneview-basic/network-etc-settings.png" alt="network etc settings" class="img-medium img-center" />

### Red

- **Configuración de proxy**: configure el proxy (función disponible próximamente).
- **Administrador de conexiones de Rclone**: vea o administre las conexiones activas de Rclone.  
  → [Leer más](/howto/rcloneview-basic/connection-manager)

### Diagnóstico

- **Registro de la aplicación**: abre los registros internos para ayudar en la solución de problemas o en el reporte de errores.

---

## ✅ Resumen

Estas configuraciones le permiten controlar totalmente cómo se comporta RcloneView al iniciar, cómo se comunica con Rclone y cómo le informa sobre los resultados o errores de las tareas. Ajústelas según su flujo de trabajo, ya sea que esté programando sincronizaciones, automontando unidades o solucionando problemas de red.
