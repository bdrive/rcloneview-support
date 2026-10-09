---
slug: cloud-storage-physical-therapy-clinics-rcloneview
title: "Almacenamiento en la nube para clínicas de fisioterapia — copias de seguridad cifradas y ordenadas con RcloneView"
authors:
  - robin
description: "Almacenamiento en la nube para clínicas de fisioterapia: haga copias de seguridad de vídeos de ejercicios, formularios de admisión y archivos de imagen en almacenamiento en la nube cifrado con RcloneView."
keywords:
  - almacenamiento en la nube para clínicas de fisioterapia
  - copia de seguridad de archivos de fisioterapia
  - copia de seguridad en la nube para clínicas
  - copia de seguridad cifrada en la nube
  - almacenamiento de vídeos de ejercicios
  - sincronización programada en la nube
  - copia de seguridad multinube
  - RcloneView
  - rclone GUI
  - remoto Crypt
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Almacenamiento en la nube para clínicas de fisioterapia — copias de seguridad cifradas y ordenadas con RcloneView

> Mantenga copias de seguridad de la documentación de los pacientes, los vídeos de ejercicios y las exportaciones de imagen en más de una nube sin escribir un solo comando.

Una clínica de fisioterapia genera más archivos de los que la mayoría de los propietarios espera: formularios de admisión escaneados, cartas de derivación, vídeos de ejercicios para casa, grabaciones de análisis de la marcha e imágenes exportadas. Con frecuencia están en el PC de recepción o en un pequeño NAS, con una sola copia y sin una restauración probada. RcloneView ofrece al personal de la clínica una interfaz gráfica de escritorio para copiar esos datos al almacenamiento en la nube, cifrarlos y verificar que han llegado.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecte el almacenamiento que su clínica ya utiliza

La mayoría de las clínicas ya tiene una cuenta de Microsoft 365 o Google Workspace, y muchas conservan un NAS local. En RcloneView, abra la pestaña Remote y haga clic en **New Remote**. OneDrive y Google Drive inician sesión a través del navegador. El almacenamiento compatible con S3, como Wasabi, Cloudflare R2 o Backblaze B2, usa una clave de acceso. SFTP, WebDAV y SMB cubren los servidores locales, y un NAS Synology puede detectarse automáticamente.

RcloneView gestiona más de 90 servicios en la nube desde una sola ventana en Windows, macOS y Linux, de modo que el PC con Windows de recepción y el MacBook del propietario usan el mismo flujo de trabajo.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir remotos de almacenamiento en la nube para una clínica en RcloneView" class="img-large img-center" />

## Cifre los archivos relacionados con pacientes con un remoto Crypt

Los formularios de admisión y las notas de tratamiento no deberían estar en texto plano en un bucket de terceros. RcloneView puede crear un remoto virtual **Crypt** que cifra los nombres de archivo, los nombres de carpeta y el contenido antes de subirlos. Apunte el remoto Crypt a una carpeta de su proveedor de copias de seguridad y copie los archivos al remoto Crypt en lugar de al bucket sin cifrar.

Guarde la contraseña de Crypt en un lugar seguro y separado de los datos. RcloneView por sí solo no hace que una clínica cumpla la normativa; consulte las normas de privacidad de su región y los acuerdos de su proveedor de almacenamiento antes de trasladar información de pacientes.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Copiar archivos de la clínica a un destino en la nube cifrado en RcloneView" class="img-large img-center" />

## Primero la vista previa, después la copia de seguridad

Supongamos que una clínica tiene 300 GB de vídeos de demostración de ejercicios y registros escaneados en un PC compartido. Cree un trabajo de sincronización desde esa carpeta hacia el remoto Crypt y ejecute un **Dry Run** para listar lo que se copiará o eliminará. Usar semántica de copia en la primera ejecución mantiene intacto el origen. Puede conectar S3, Azure o Backblaze B2 con lectura y escritura completas con la licencia FREE, así que el destino de la copia no requiere software adicional.

Añada un segundo destino en el paso 1 y el mismo origen se replica en dos nubes mediante la sincronización 1:N, que también está disponible en FREE.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Ejecutar un trabajo de copia de seguridad de la clínica en RcloneView" class="img-large img-center" />

## Programe trabajos nocturnos y revise el historial

Con una licencia PLUS, el paso 4 del asistente de sincronización acepta programaciones al estilo crontab, como una ejecución a las 22:00 en días laborables después de la última cita. La aplicación debe estar en ejecución para que se activen los trabajos programados, así que deje el PC encendido con RcloneView minimizado en la bandeja del sistema.

Job History registra el estado, la duración, el tamaño y el número de archivos de cada ejecución, lo que le proporciona un registro de auditoría cuando necesite confirmar que la copia del martes pasado terminó.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Programar una copia de seguridad nocturna de la clínica en RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añada su almacenamiento principal y un destino de copia de seguridad en la pestaña Remote.
3. Cree un remoto Crypt en el destino de la copia de seguridad para las carpetas sensibles.
4. Ejecute un Dry Run, inicie el trabajo y revise Job History para confirmar el resultado.

Una segunda copia cifrada y probada ofrece a su clínica una vía de recuperación tras un fallo de disco o un incidente de ransomware.

---

**Guías relacionadas:**

- [Almacenamiento en la nube para el sector sanitario — copias de seguridad seguras con RcloneView](https://rcloneview.com/support/blog/cloud-storage-healthcare-rcloneview)
- [Almacenamiento en la nube para el cumplimiento de HIPAA en el sector sanitario con RcloneView](https://rcloneview.com/support/blog/cloud-storage-hipaa-compliance-healthcare-rcloneview)
- [Cifrar copias de seguridad en la nube con un remoto Crypt — guía de RcloneView](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
