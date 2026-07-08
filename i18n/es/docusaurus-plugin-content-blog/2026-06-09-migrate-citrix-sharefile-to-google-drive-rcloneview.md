---
slug: migrate-citrix-sharefile-to-google-drive-rcloneview
title: "Migra Citrix ShareFile a Google Drive — Transfiere archivos empresariales con RcloneView"
authors:
  - jay
description: "Aprende a migrar Citrix ShareFile a Google Drive con RcloneView. Mueve documentos y carpetas empresariales con una interfaz gráfica, sin scripts ni CLI."
keywords:
  - migración de Citrix ShareFile a Google Drive
  - migrar ShareFile a Google Drive
  - transferencia de ShareFile a Google Drive
  - herramienta de migración de archivos en la nube
  - migración de ShareFile con RcloneView
  - migración empresarial a la nube
  - alternativa a ShareFile Google Drive
  - GUI de migración de almacenamiento en la nube
tags:
  - RcloneView
  - sharefile
  - google-drive
  - cloud-to-cloud
  - migration
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migra Citrix ShareFile a Google Drive — Transfiere archivos empresariales con RcloneView

> Mueve toda tu biblioteca de ShareFile a Google Drive sin escribir una sola línea de código: RcloneView gestiona la transferencia mediante una interfaz visual, paso a paso.

Citrix ShareFile funciona bien para muchas organizaciones como plataforma empresarial para compartir archivos, pero cada vez más equipos optan por Google Drive por su integración más estrecha con Google Workspace, la colaboración en tiempo real y su interfaz familiar. Si tu organización está planeando este cambio, RcloneView facilita la transferencia de nube a nube: conecta ambos remotos, configura una tarea de copia y mueve los archivos a máxima velocidad con monitoreo de progreso en vivo.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué los equipos cambian de ShareFile a Google Drive

ShareFile es una plataforma empresarial capaz, pero requiere una gestión de TI cuidadosa: el aprovisionamiento de usuarios, los permisos de carpetas y las políticas de compartición externa suman carga administrativa. Google Drive, especialmente combinado con Google Workspace, simplifica la colaboración al permitir que los miembros del equipo comenten, editen y compartan documentos directamente en el navegador sin necesidad de descargar los archivos primero.

Para organizaciones con grandes bibliotecas de PDF, presentaciones, contratos y archivos multimedia en ShareFile, el reto de la migración consiste en mover decenas de miles de archivos de forma fiable sin perder la estructura de carpetas ni la integridad de los archivos. RcloneView resuelve esto tratando tanto ShareFile como Google Drive como remotos navegables, utilizando el motor de transferencia probado de rclone para gestionar el movimiento real de los datos.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new remote in RcloneView" class="img-large img-center" />

## Cómo conectar Citrix ShareFile en RcloneView

Abre RcloneView y ve a **Remote tab > New Remote**. Selecciona Citrix ShareFile en la lista de proveedores. Necesitarás el nombre de host del subdominio de ShareFile y un Root Folder ID: este es el identificador de la carpeta dentro de ShareFile que deseas usar como raíz de tu remoto. RcloneView te guía a través de cada campo requerido y, una vez guardado, el remoto de ShareFile aparece como un panel en el Explorer, donde puedes navegar por las carpetas y confirmar que tus datos son accesibles antes de iniciar cualquier transferencia.

Como ShareFile utiliza autenticación de nivel empresarial, es normal que el flujo de autorización tarde un momento en completarse. Una vez conectado, puedes navegar por toda la jerarquía de carpetas de ShareFile, comprobar el tamaño de los archivos y verificar la estructura antes de que comience la migración.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer configuration in RcloneView" class="img-large img-center" />

## Cómo configurar Google Drive y ejecutar la migración

Añade Google Drive como segundo remoto en **Remote tab > New Remote**. Google Drive utiliza autenticación OAuth por navegador: RcloneView abre una pestaña del navegador, inicias sesión con tu cuenta de Google y la conexión se establece automáticamente sin necesidad de gestionar claves de API manualmente.

Con ambos remotos listos, ve a **Home tab > Sync** para abrir el asistente de sincronización de 4 pasos. Configura Citrix ShareFile como origen y Google Drive como destino. Antes de confirmar, usa la opción **Dry Run** para previsualizar exactamente qué archivos se copiarán sin realizar ningún cambio, una comprobación de seguridad esencial en migraciones empresariales de gran tamaño donde una sobrescritura accidental podría ser costosa. Cuando estés satisfecho con la vista previa, ejecuta la tarea y monitorea el progreso en vivo en la pestaña Transferring, en la parte inferior de la ventana.

Para organizaciones que siguen recibiendo archivos nuevos en ShareFile durante la ventana de migración, una licencia PLUS desbloquea la sincronización programada, de modo que las ejecuciones de seguimiento puedan automatizarse para capturar cualquier contenido añadido recientemente.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a migration job in RcloneView" class="img-large img-center" />

## Cómo empezar

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade Citrix ShareFile como remoto (Remote tab > New Remote), introduciendo el nombre de host de tu subdominio y el Root Folder ID.
3. Añade Google Drive como segundo remoto usando el inicio de sesión OAuth por navegador.
4. Abre el asistente de Sync, configura ShareFile como origen y Google Drive como destino, y ejecuta primero un Dry Run.
5. Ejecuta la migración y monitorea el progreso en la pestaña Transferring.

Migrar a Google Drive no tiene que significar meses de trabajo para TI: RcloneView condensa una migración empresarial compleja en un flujo de trabajo con interfaz gráfica fiable y repetible que tu equipo puede ejecutar y verificar en cada paso.

---

**Guías relacionadas:**

- [Migra Citrix ShareFile a OneDrive y SharePoint](https://rcloneview.com/support/blog/migrate-citrix-sharefile-onedrive-sharepoint-rcloneview)
- [Gestiona el almacenamiento de Citrix ShareFile — Sincroniza y haz copias de seguridad con RcloneView](https://rcloneview.com/support/blog/manage-citrix-sharefile-cloud-sync-backup-rcloneview)
- [Migra SharePoint a Google Drive con RcloneView](https://rcloneview.com/support/blog/migrate-sharepoint-to-google-drive-rcloneview)

<CloudSupportGrid />
