---
slug: manage-mailru-cloud-sync-rcloneview
title: "Gestiona el almacenamiento en la nube de Mail.ru — Sincroniza y realiza copias de seguridad de archivos con RcloneView"
authors:
  - tayson
description: "Aprende a conectar y gestionar el almacenamiento en la nube de Mail.ru con RcloneView. Sincroniza, realiza copias de seguridad y transfiere archivos de Mail.ru usando una interfaz gráfica sencilla sin necesidad de comandos de línea de comandos."
keywords:
  - Mail.ru cloud storage RcloneView
  - Mail.ru cloud sync GUI
  - manage Mail.ru files
  - Mail.ru backup tool
  - rclone Mail.ru GUI
  - Mail.ru file transfer
  - cloud storage management
  - Mail.ru sync desktop app
tags:
  - RcloneView
  - mailru
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona el almacenamiento en la nube de Mail.ru — Sincroniza y realiza copias de seguridad de archivos con RcloneView

> Conecta Mail.ru Cloud a RcloneView y gestiona tus archivos, ejecuta copias de seguridad automatizadas y sincroniza datos entre proveedores, todo desde una única interfaz gráfica de escritorio.

Mail.ru Cloud ofrece un generoso almacenamiento gratuito y es ampliamente utilizado en Rusia y países vecinos. Gestionarlo de forma eficiente puede ser complicado sin la herramienta adecuada. RcloneView cubre esa necesidad, conectándose a Mail.ru Cloud a través del backend de Mail.ru de rclone, ya probado, y presentando tus archivos en un explorador de dos paneles familiar. No se requiere conocimiento de línea de comandos.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Añadir Mail.ru Cloud como remoto en RcloneView

Configurar Mail.ru en RcloneView lleva menos de dos minutos. Abre la pestaña **Remote** en la barra de menú y haz clic en **New Remote**. Desplázate por la lista de proveedores para encontrar Mail.ru Cloud (o escribe "mail" en el campo de búsqueda) y luego introduce tus credenciales de la cuenta de Mail.ru: nombre de usuario y contraseña. RcloneView las pasa a la instancia integrada de rclone, que se encarga de la autenticación frente a la API de Mail.ru.

Una vez guardado, el remoto aparece de inmediato en tus paneles del explorador. Puedes navegar por las carpetas, previsualizar miniaturas, comprobar los metadatos de los archivos y recorrer el árbol de carpetas igual que en una unidad local. La barra de ruta de migas de pan ofrece una jerarquía clicable, por lo que profundizar en directorios anidados es rápido.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Mail.ru Cloud as a new remote in RcloneView" class="img-large img-center" />

## Sincronizar archivos de Mail.ru con otra nube o unidad local

Una de las características más potentes de RcloneView son las transferencias fluidas entre nubes. Si necesitas copiar archivos de Mail.ru Cloud a Google Drive, Backblaze B2 o una carpeta local, abre ambas ubicaciones lado a lado en el explorador de doble panel. Arrastra archivos de un panel a otro, o haz clic derecho y selecciona **Copy** y luego **Paste** en el panel de destino.

Para copias de seguridad recurrentes, utiliza el Job Manager integrado. Define un trabajo de sincronización o copia con Mail.ru como origen y tu destino preferido. Configura la concurrencia de transferencia y activa la verificación de checksum para detectar cualquier archivo dañado durante la transferencia. Con una licencia PLUS, puedes programar estos trabajos con un temporizador de tipo crontab para que las copias de seguridad se ejecuten automáticamente sin intervención manual.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Mail.ru sync job in RcloneView Job Manager" class="img-large img-center" />

## Monitorear transferencias y revisar el historial

La pestaña **Transferring**, en la parte inferior de la ventana de RcloneView, muestra el progreso en vivo de cualquier trabajo activo: número de archivos, bytes transferidos y velocidad actual. Puedes cancelar un trabajo en ejecución en cualquier momento si necesitas pausarlo o ajustar la configuración.

Después de que cada trabajo se completa, la pestaña **Job History** conserva un registro completo: hora de inicio, duración, tamaño total transferido y estado final (Completed, Errored o Canceled). Para un negocio de fotografía que almacena entregas de clientes en Mail.ru, este historial proporciona un registro de auditoría fiable y facilita detectar si un trabajo de copia de seguridad falló durante la noche.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log showing Mail.ru sync results" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abre **Remote tab → New Remote**, selecciona Mail.ru Cloud e introduce tus credenciales.
3. Explora tus archivos de Mail.ru en el panel del explorador y arrastra elementos a cualquier destino.
4. Crea un trabajo de sincronización en el **Job Manager** para copias de seguridad recurrentes automatizadas.

Con RcloneView, Mail.ru Cloud se integra perfectamente en tu flujo de trabajo multi-nube, sin necesidad de terminal.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento en la nube de Yandex Disk con RcloneView](https://rcloneview.com/support/blog/manage-yandex-disk-cloud-sync-backup-rcloneview)
- [Transfiere de Mail.ru Cloud a Google Drive y S3](https://rcloneview.com/support/blog/transfer-mailru-cloud-google-drive-s3-rcloneview)
- [Gestiona múltiples cuentas en la nube con RcloneView](https://rcloneview.com/support/blog/manage-multiple-cloud-accounts-with-rcloneview)

<CloudSupportGrid />
