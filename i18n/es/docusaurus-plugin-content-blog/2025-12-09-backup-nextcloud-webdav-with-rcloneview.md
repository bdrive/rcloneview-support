---
slug: backup-nextcloud-webdav-with-rcloneview
title: "Copias de seguridad de Nextcloud y unidades WebDAV con RcloneView: sincronizaciones visuales, programaciones y verificaciones de integridad"
authors:
  - tayson
description: "Protege tu Nextcloud o cualquier unidad WebDAV con RcloneView: agrega remotos, previsualiza diferencias, programa copias de seguridad con versiones y verifica la integridad sin memorizar comandos de la CLI."
keywords:
  - nextcloud backup
  - webdav backup
  - rcloneview webdav
  - nextcloud to s3
  - webdav to google drive
  - cloud to cloud backup
  - rclone webdav gui
  - versioned backup
  - rclone check
  - cloud automation
tags:
  - RcloneView
  - backup
  - webdav
  - nextcloud
  - cloud-storage
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Copias de seguridad de Nextcloud y unidades WebDAV con RcloneView: sincronizaciones visuales, programaciones y verificaciones de integridad

> Mantén tu Nextcloud o cualquier unidad WebDAV segura duplicándola en Google Drive, S3/Wasabi u otra nube, sin necesidad de línea de comandos. RcloneView previsualiza los cambios, programa tareas y verifica la integridad para que las copias de seguridad sigan siendo confiables.

Nextcloud y otros servicios WebDAV impulsan los recursos compartidos de equipos y el almacenamiento autoalojado, pero igualmente necesitan copias de seguridad externas. RcloneView envuelve el motor de rclone en una interfaz gráfica, permitiéndote agregar WebDAV una vez, emparejarlo con tu nube de destino y automatizar copias de seguridad verificadas con Job Scheduler y Compare.

<!-- truncate -->


<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Por qué hacer copias de seguridad de WebDAV/Nextcloud con RcloneView

- Visualiza las diferencias antes de sincronizar con **Compare** para evitar sobrescrituras.
- Reutiliza el mismo remoto WebDAV para hacer copias de seguridad en múltiples destinos (Drive, S3, Wasabi).
- Programa copias de seguridad recurrentes y conserva los registros en Job History.
- Habilita las opciones de suma de verificación en los flujos de copia/sincronización para confirmar la integridad de los datos (cuando sea compatible).

## Conecta tu remoto WebDAV/Nextcloud

1. Haz clic en **`+ New Remote`** -> elige **WebDAV**.
2. Ingresa tu **URL**, **nombre de usuario**, **contraseña/contraseña de aplicación** y selecciona el preset del proveedor correcto (por ejemplo, Nextcloud).
3. Nómbralo claramente, como `Nextcloud_Main`.  
   <img src="/support/images/en/blog/new-remote.png" alt="New remote wizard" class="img-medium img-center" />

¿Necesitas referencia? Consulta la guía de WebDAV: [Agregar remoto WebDAV/Nextcloud](https://rcloneview.com/support/howto/remote-storage-connection-settings/webdav).

## Elige un destino de copia de seguridad

- **Google Drive / Workspace** para compartir fácilmente y llevar un historial.
- Nubes **compatibles con S3** (Amazon S3, Wasabi, R2) para costos predecibles y reglas de ciclo de vida.
- **Otro WebDAV** para copias espejo simples.

Agrega el remoto de destino con `+ New Remote`, luego abre ambos en **Explorer -> Browse** uno junto al otro.  
<img src="/support/images/en/blog/open-multiple-google-drive-remotes.png" alt="Side-by-side remotes" class="img-medium img-center" />

## Previsualiza antes de copiar

- Selecciona las carpetas de origen (WebDAV) y destino en Explorer.
- Haz clic en **Compare** para resaltar elementos faltantes, más nuevos o idénticos.
- Usa **`Copy ->`** o **`<- Copy`** para mover solo lo que necesitas, o elimina archivos sueltos de forma segura.

## Ejecuta una copia de seguridad única con Sync

1. Selecciona las carpetas de origen/destino.
2. Haz clic en **Sync** y habilita **Dry run** primero para ver los cambios planificados.
3. En las opciones de Sync, mantén la concurrencia moderada si tu servidor limita las conexiones; puedes aumentar transfers/checkers en Settings después de hacer pruebas.
4. Observa el progreso en las pestañas **Transfer** y **Completed**; revisa los registros para detectar cualquier límite de la API.

## Programa copias de seguridad recurrentes (configúralo y olvídate)

1. En el cuadro de diálogo Sync, haz clic en **Save to Jobs** (o abre **Job Manager -> Add Job**).
2. Elige una programación (diaria o días específicos) y dirige el destino a una carpeta con fecha si quieres copias simples de un momento específico.
3. Habilita las notificaciones y consulta **Job History** para conocer los detalles de éxito/fallo.  

- Guías: [Crear tareas de sincronización](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs), [Ejecutar y administrar tareas](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job), [Programación de tareas](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution), [Monitoreo de transferencias](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

## Preguntas frecuentes

**¿Esto funciona con cualquier WebDAV, no solo Nextcloud?**  
Sí: selecciona WebDAV y el proveedor/preset adecuado, u “otro” para que coincida con tu servicio.

**¿Puedo hacer copias de seguridad en múltiples destinos?**  
Sí: reutiliza el mismo origen WebDAV en múltiples tareas (por ejemplo, Nextcloud -> Drive y Nextcloud -> Wasabi).

**¿Las tareas programadas se ejecutan si la aplicación está bloqueada?**  
Las tareas se ejecutan según lo configurado; App Lock simplemente protege el acceso a la interfaz (consulta [Habilitar App Lock](/tutorials/enable-app-lock)).

## Conclusión

RcloneView hace que las copias de seguridad de WebDAV/Nextcloud sean visuales y predecibles: agrega el remoto una vez, previsualiza los cambios, ajusta el rendimiento y programa tareas verificadas. Protege los archivos de tu equipo con copias externas en las que puedes confiar, sin necesidad de dominar la CLI.

<CloudSupportGrid />
