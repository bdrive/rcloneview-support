---
slug: migrate-seafile-to-google-drive-rcloneview
title: "Migrar de Seafile a Google Drive — Transfiere archivos con RcloneView"
authors:
  - tayson
description: "Guía paso a paso para migrar archivos desde un servidor Seafile autoalojado a Google Drive utilizando las herramientas de transferencia y sincronización nube a nube de RcloneView."
keywords:
  - migración de Seafile
  - Google Drive
  - RcloneView
  - transferencia nube a nube
  - migración autoalojada
  - migración de archivos
  - Seafile a Google Drive
  - rclone seafile
tags:
  - RcloneView
  - seafile
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar de Seafile a Google Drive — Transfiere archivos con RcloneView

> Dejar atrás un servidor Seafile autoalojado para pasarte a Google Drive es más sencillo de lo que parece — RcloneView te permite conectar ambos como remotos y transferir tus bibliotecas directamente, sin ninguna descarga intermedia.

Seafile es una plataforma de colaboración autoalojada muy popular, pero muchos equipos terminan migrando a servicios de nube gestionados como Google Drive para reducir la carga de mantenimiento y mejorar la integración con herramientas de productividad. RcloneView trata a Seafile como un remoto de primera clase junto a Google Drive, lo que te permite explorar tus bibliotecas de Seafile y copiarlas directamente a Google Drive en un flujo de trabajo gráfico y ordenado. No se requiere conocimiento de línea de comandos, y el binario de rclone incorporado se encarga de todo el trabajo pesado.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar tu servidor Seafile

Haz clic en **New Remote** en RcloneView y selecciona **Seafile** de la lista de proveedores. Ingresa la URL de tu servidor Seafile, tu nombre de usuario y tu contraseña. Si tu servidor usa 2FA, también deberás proporcionar un token de un solo uso durante la configuración. RcloneView listará entonces todas tus bibliotecas de Seafile — tanto personales como compartidas — en el explorador de archivos de doble panel.

Si tus bibliotecas de Seafile están cifradas, necesitarás la contraseña de la biblioteca para que RcloneView pueda descifrar y leer los archivos. Vale la pena probar el acceso a una biblioteca cifrada pequeña antes de intentar una migración completa, para verificar que tus credenciales funcionan correctamente.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Seafile remote in RcloneView" class="img-large img-center" />

## Añadir Google Drive

Añade un segundo remoto para Google Drive mediante **New Remote** > **Google Drive**. RcloneView abrirá una ventana del navegador para la autorización OAuth — inicia sesión con tu cuenta de Google y concede los permisos solicitados. Después de la autorización, el remoto de Google Drive aparecerá en el explorador. Puedes navegar a cualquier carpeta en Mi unidad o en una Unidad compartida para usarla como destino de la migración.

Considera crear una carpeta dedicada en Google Drive — por ejemplo, `Seafile Migration/` — antes de iniciar la transferencia. Esto mantiene el contenido migrado organizado y separado de los archivos existentes durante el período de transición.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging Seafile libraries to Google Drive in RcloneView" class="img-large img-center" />

## Ejecutar la migración

Con ambos remotos abiertos en la vista de doble panel, puedes arrastrar bibliotecas individuales de Seafile hacia Google Drive para migraciones pequeñas. Para migraciones completas del servidor, usa el **Job Wizard** para crear un trabajo de sincronización: configura Seafile como origen y tu carpeta de destino en Google Drive como destino. El asistente de cuatro pasos te permite configurar las opciones de transferencia, incluyendo si se deben preservar las fechas de modificación.

Ejecuta primero un **dry run** para previsualizar lo que se transferirá — esto es especialmente útil para instancias grandes de Seafile con miles de archivos. Después de confirmar que la vista previa se ve correcta, inicia la transferencia en vivo. El **Job Manager** de RcloneView muestra el progreso en tiempo real, y el **Job History** registra el resultado para tu registro de auditoría de la migración.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Seafile to Google Drive migration job in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Haz clic en **New Remote** > **Seafile** e ingresa la URL de tu servidor, tu nombre de usuario y tu contraseña.
3. Haz clic en **New Remote** > **Google Drive** y completa el flujo de autorización OAuth.
4. Abre ambos remotos uno al lado del otro en el explorador de doble panel.
5. Usa el **Job Wizard** para crear un trabajo de sincronización, ejecuta un dry run y luego realiza la migración completa.

Con RcloneView, migrar de Seafile a Google Drive se convierte en un proceso estructurado y auditable, en lugar de un esfuerzo manual archivo por archivo.

---

**Guías relacionadas:**

- [Gestiona Seafile — Sincronización y copia de seguridad en la nube con RcloneView](https://rcloneview.com/support/blog/manage-seafile-cloud-sync-backup-rcloneview)
- [Gestiona Google Drive — Sincronización y copia de seguridad en la nube con RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Sincroniza Seafile con AWS S3 usando RcloneView](https://rcloneview.com/support/blog/sync-seafile-to-aws-s3-rcloneview)

<CloudSupportGrid />
