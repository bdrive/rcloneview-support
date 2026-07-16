---
slug: sync-dropbox-to-digitalocean-spaces-rcloneview
title: "Sincroniza Dropbox con DigitalOcean Spaces — Copia de seguridad en la nube con RcloneView"
authors:
  - morgan
description: "Aprende a sincronizar y hacer copias de seguridad de archivos de Dropbox en DigitalOcean Spaces con RcloneView. Configura transferencias automatizadas de nube a nube sin necesidad de usar la CLI."
keywords:
  - sync Dropbox to DigitalOcean Spaces
  - Dropbox to DigitalOcean backup
  - RcloneView Dropbox DigitalOcean
  - cloud-to-cloud sync
  - DigitalOcean Spaces backup
  - Dropbox backup object storage
  - cloud sync GUI
  - RcloneView S3 sync
  - automated cloud backup
  - DigitalOcean Spaces rclone
tags:
  - RcloneView
  - dropbox
  - digitalocean-spaces
  - cloud-to-cloud
  - sync
  - backup
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincroniza Dropbox con DigitalOcean Spaces — Copia de seguridad en la nube con RcloneView

> Realiza copias de seguridad automáticas de tus archivos de Dropbox en el almacenamiento de objetos DigitalOcean Spaces, sin usar comandos de la CLI.

Dropbox es una herramienta de colaboración natural para equipos que comparten archivos a diario. DigitalOcean Spaces ofrece almacenamiento de objetos compatible con S3, diseñado para desarrolladores que buscan un almacenamiento escalable y económico integrado con su infraestructura. Combinar ambos con RcloneView te da un flujo de copia de seguridad externa automatizado: los archivos viven en Dropbox para la colaboración activa, y Spaces conserva las copias de respaldo duraderas. RcloneView gestiona toda la transferencia de nube a nube de forma visual, sin necesidad de terminal.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Dropbox y DigitalOcean Spaces

Comienza añadiendo ambos servicios como remotos en RcloneView. Para Dropbox, ve a **Remote tab > New Remote**, selecciona **Dropbox** y sigue el flujo de autorización OAuth en el navegador para autorizar a RcloneView. No necesitas copiar claves de API: la ventana del navegador que se abre gestiona la autenticación automáticamente y te devuelve a RcloneView al finalizar.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Dropbox and DigitalOcean Spaces remotes in RcloneView" class="img-large img-center" />

Para DigitalOcean Spaces, crea un segundo remoto nuevo, selecciona **S3** y elige **DigitalOcean** como proveedor. Necesitarás una **Access Key** y una **Secret Key** del panel de control de DigitalOcean (en API > Spaces Keys), además del **endpoint de región** correspondiente a tu región de Spaces; por ejemplo, `nyc3.digitaloceanspaces.com` para Nueva York. Una vez guardados ambos remotos, aparecerán como pestañas navegables en el explorador de archivos de RcloneView.

## Configurar el trabajo de sincronización

Con ambos remotos conectados, haz clic en **Sync** en la **Home tab** para abrir el asistente de sincronización de 4 pasos. En el Paso 1, define tu carpeta de Dropbox como **origen** y tu bucket de DigitalOcean Spaces (o un subdirectorio dentro de él) como **destino**. Asigna al trabajo un nombre descriptivo —`dropbox-spaces-backup` funciona bien— y elige **one-way sync** para mantener el destino como una réplica fiel del origen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud sync job from Dropbox to DigitalOcean Spaces in RcloneView" class="img-large img-center" />

En el Paso 2, ajusta el número de transferencias de archivos simultáneas según la capacidad de tu conexión. Para una agencia de diseño con miles de archivos de recursos pequeños repartidos en muchas carpetas de Dropbox, aumentar este valor acelera notablemente la sincronización inicial completa. En el Paso 3, añade reglas de filtro para excluir todo lo que no necesites en Spaces; por ejemplo, archivos `.DS_Store`, documentos de Dropbox Paper o cualquier carpeta que uses solo para borradores efímeros.

Antes de ejecutar el trabajo por primera vez, haz clic en **Dry Run** para ver exactamente qué archivos se transferirían o eliminarían. Esto confirma que tus reglas de filtro funcionan como se espera antes de mover ningún dato.

## Supervisar las transferencias activas

Una vez que haces clic en **Run Job**, la pestaña **Transferring** en la parte inferior de RcloneView muestra el progreso en tiempo real: número de archivos, velocidad de transferencia y bytes totales movidos. Para una sincronización inicial grande —un estudio de contenido que mueve 80.000 archivos desde una cuenta completa de Dropbox—, esta vista facilita estimar cuánto tardará el trabajo y detectar errores tempranos. Puedes cancelar un trabajo en ejecución en cualquier momento, y la opción de reintento (configurable en el Paso 2) gestiona automáticamente los fallos transitorios de red.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Live transfer monitoring of Dropbox to DigitalOcean Spaces in RcloneView" class="img-large img-center" />

## Programar copias de seguridad automáticas (licencia PLUS)

Para una rutina de copia de seguridad totalmente automática, los usuarios con **licencia PLUS** pueden añadir una programación tipo crontab en el Paso 4 del asistente de sincronización. Configura el trabajo para que se ejecute cada noche, cada pocas horas o en días específicos de la semana. Haz clic en **Simulate Schedule** antes de guardar para previsualizar las próximas ejecuciones y confirmar que el horario es correcto.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Dropbox to DigitalOcean Spaces backup in RcloneView" class="img-large img-center" />

Una vez programado, RcloneView ejecuta el trabajo en segundo plano y envía una notificación de escritorio al completarse. La vista **Job History** registra cada ejecución —hora de inicio, duración, número de archivos, tamaño total y estado final—, de modo que siempre tienes un registro claro de cuándo se ejecutó por última vez tu copia de seguridad de Dropbox y si tuvo éxito.

## Cómo empezar

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade **Dropbox** como remoto mediante el flujo de inicio de sesión OAuth en el navegador.
3. Añade **DigitalOcean Spaces** como remoto S3 con tu Access Key, Secret Key y endpoint de región.
4. Abre el asistente de sincronización, establece Dropbox como origen y Spaces como destino, y haz clic en **Run Job**.

Con esta configuración en marcha, el contenido de tu Dropbox se refleja de forma continua en DigitalOcean Spaces, brindándote una copia de seguridad externa duradera y mantenida automáticamente que no requiere esfuerzo manual continuo.

---

**Guías relacionadas:**

- [Gestiona Dropbox — Sincronización y copia de seguridad en la nube con RcloneView](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Gestiona DigitalOcean Spaces — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-digitalocean-spaces-cloud-sync-backup-rcloneview)
- [Respalda Dropbox en Backblaze B2 — Almacenamiento en la nube asequible con RcloneView](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)

<CloudSupportGrid />
