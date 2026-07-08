---
slug: sync-google-drive-to-amazon-s3-rcloneview
title: "Sincronizar Google Drive con Amazon S3 — Copia de seguridad en la nube automatizada con RcloneView"
authors:
  - jay
description: "Sincroniza Google Drive con Amazon S3 con RcloneView. Configura trabajos de copia de seguridad automatizados de nube a nube, programa transferencias y supervisa el progreso desde una sola interfaz gráfica."
keywords:
  - Google Drive to Amazon S3
  - sync Google Drive to S3
  - backup Google Drive to S3
  - RcloneView Google Drive S3
  - cloud to cloud sync
  - Amazon S3 backup
  - Google Drive backup
  - automated cloud backup
  - cloud storage migration
  - rclone Google Drive S3
tags:
  - RcloneView
  - google-drive
  - amazon-s3
  - cloud-to-cloud
  - backup
  - cloud-sync
  - migration
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincronizar Google Drive con Amazon S3 — Copia de seguridad en la nube automatizada con RcloneView

> Hacer una copia de seguridad de Google Drive en Amazon S3 crea una copia independiente de tus datos en una infraestructura en la nube separada — RcloneView convierte esto en un flujo de trabajo de configurar y olvidar.

Google Drive es excelente para la colaboración, pero depender de él como única copia de tus archivos críticos es un riesgo que la mayoría de los equipos no deberían asumir. Amazon S3 ofrece almacenamiento de objetos duradero y económico que complementa a Google Drive como destino de copia de seguridad independiente. Con el sistema de trabajos basado en interfaz gráfica de RcloneView, un equipo de contenido que gestiona 200 GB de archivos de proyecto compartidos puede establecer copias de seguridad automatizadas de nube a nube en minutos, sin necesidad de comandos de rclone.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurar Google Drive y Amazon S3 en RcloneView

Ambos remotos deben configurarse antes de crear el trabajo de sincronización. En RcloneView, haz clic en **Remote tab > New Remote**. Para Google Drive, selecciónalo de la lista de proveedores — se abrirá una ventana del navegador para la autenticación OAuth. Inicia sesión y concede acceso; el remoto se guarda automáticamente sin necesidad de gestionar claves de API manualmente.

Para Amazon S3, selecciona **Amazon S3** como proveedor y luego introduce tu **Access Key ID**, **Secret Access Key** y la **Region** de tu bucket de S3 (por ejemplo, `us-east-1`). RcloneView almacena todas las credenciales de forma segura en almacenamiento local cifrado. Una vez guardados ambos remotos, cada uno aparece como una pestaña en los paneles del explorador, listos para navegar.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Amazon S3 remotes in RcloneView" class="img-large img-center" />

## Configurar el trabajo de sincronización de nube a nube

Haz clic en **Home tab > Sync** para abrir el asistente de trabajos. Establece Google Drive — o una subcarpeta específica como `My Drive/Projects` — como origen, y un prefijo de bucket de S3 (por ejemplo, `my-backup-bucket/google-drive/`) como destino. Asigna al trabajo un nombre descriptivo, como `gdrive-to-s3-daily`.

En **Advanced Settings**, activa la **verificación de checksum** para comparar los archivos por hash en lugar de solo por tamaño — esto detecta archivos que comparten el mismo tamaño pero tienen contenido diferente debido a sobrescrituras parciales. Ajusta el número de transferencias simultáneas según la capacidad de tu red; entre 4 y 8 transferencias es adecuado para la mayoría de conexiones de banda ancha sin activar los límites de tasa de Google Drive.

El paso de **Filtering** proporciona un control preciso sobre lo que se sincroniza: excluye archivos de vídeo grandes si solo necesitas copias de seguridad de documentos, o limita la sincronización a archivos modificados en los últimos 90 días usando el campo Max File Age.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring Google Drive to Amazon S3 sync job in RcloneView" class="img-large img-center" />

## Ejecutar y supervisar la transferencia

Antes de la primera sincronización completa, utiliza la función integrada **Dry Run** para previsualizar exactamente qué archivos se copiarán o eliminarán en el destino. Esto es especialmente valioso en la configuración inicial, cuando el bucket de S3 está vacío y quieres confirmar la configuración del trabajo antes de comprometer gigabytes de datos.

Haz clic en **Run** cuando estés listo. La pestaña **Transferring** en la parte inferior de RcloneView muestra el progreso en tiempo real: velocidad, número de archivos y porcentaje completado. Para bibliotecas grandes de Google Drive con decenas de miles de archivos, la sincronización inicial puede tardar varias horas — las ejecuciones posteriores transfieren solo los archivos modificados y se completan mucho más rápido.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Google Drive to S3 transfer progress in RcloneView" class="img-large img-center" />

## Programar copias de seguridad diarias automatizadas

Con una **licencia PLUS**, abre el trabajo en **Job Manager** y añade una programación mediante la interfaz de estilo cron — por ejemplo, diariamente a la 1 AM. La herramienta **Simulate Schedule** muestra una vista previa de las próximas diez ejecuciones para que puedas confirmar que la copia de seguridad se activa en el momento correcto. Una vez guardada, la copia de seguridad se ejecuta automáticamente, esté o no abierta la ventana de RcloneView.

Después de cada ejecución, **Job History** registra la duración, la velocidad de transferencia, el número de archivos y el estado de finalización, ofreciéndote un registro de auditoría claro de cada copia de seguridad de Google Drive enviada a S3.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Google Drive to Amazon S3 backup in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade un remoto de Google Drive mediante inicio de sesión OAuth en **Remote tab > New Remote**.
3. Añade un remoto de Amazon S3 con tu AWS Access Key ID, Secret Key y la región del bucket.
4. Crea un trabajo de sincronización: origen = carpeta de Google Drive, destino = prefijo de bucket de S3, y luego ejecútalo o prográmalo.

Tus datos de Google Drive ahora cuentan con una copia de seguridad independiente en la infraestructura de AWS, protegidos contra eliminaciones accidentales, suspensiones de cuenta o interrupciones de servicio en cualquiera de las dos plataformas.

---

**Guías relacionadas:**

- [Copia de seguridad incremental: Google Drive a Amazon S3 con RcloneView](https://rcloneview.com/support/blog/incremental-backup-google-drive-to-amazon-s3)
- [Montar buckets de Amazon S3 como unidades locales con RcloneView](https://rcloneview.com/support/blog/mount-amazon-s3-buckets-as-local-drives-rcloneview)
- [Automatizar copias de seguridad diarias en la nube con RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
