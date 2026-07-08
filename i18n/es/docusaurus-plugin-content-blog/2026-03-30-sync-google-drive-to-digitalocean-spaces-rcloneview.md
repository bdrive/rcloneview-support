---
slug: sync-google-drive-to-digitalocean-spaces-rcloneview
title: "Sincronizar Google Drive con DigitalOcean Spaces — Copia de seguridad en la nube con RcloneView"
authors:
  - tayson
description: "Sincroniza Google Drive con DigitalOcean Spaces para una copia de seguridad en la nube compatible con S3 y asequible. Configura trabajos de sincronización automatizados con la interfaz visual de RcloneView."
keywords:
  - sync google drive to digitalocean spaces
  - google drive digitalocean backup
  - google drive s3 compatible sync
  - digitalocean spaces backup
  - cloud-to-cloud sync
  - rcloneview google drive sync
  - google drive object storage
  - digitalocean spaces transfer
  - automated cloud backup
  - google drive redundancy
tags:
  - RcloneView
  - google-drive
  - digitalocean-spaces
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincronizar Google Drive con DigitalOcean Spaces — Copia de seguridad en la nube con RcloneView

> Hacer una copia de seguridad de Google Drive en DigitalOcean Spaces te ofrece una red de seguridad asequible y compatible con S3 para cada archivo de tu Drive.

Google Drive gestiona la colaboración y la edición en tiempo real de forma excelente, pero no está diseñado como destino de copia de seguridad para archivado. DigitalOcean Spaces ofrece almacenamiento de objetos compatible con S3 a tarifa plana por $5 al mes por 250 GB (con almacenamiento adicional a $0,02/GB), lo que lo convierte en un destino predecible y asequible para las copias de seguridad de Drive. RcloneView conecta ambos servicios y los mantiene sincronizados mediante trabajos programados con monitoreo de progreso en tiempo real.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué usar DigitalOcean Spaces para la copia de seguridad de Google Drive

DigitalOcean Spaces proporciona almacenamiento de objetos compatible con S3 en múltiples regiones (NYC, SFO, AMS, SGP, FRA). Su modelo de precios a tarifa plana elimina las sorpresas de costos por solicitud que puede generar AWS S3. Para equipos que ya ejecutan infraestructura en DigitalOcean, Spaces se integra de forma nativa: los archivos sincronizados desde Google Drive quedan inmediatamente accesibles para Droplets, clústeres de Kubernetes y funciones serverless.

Las opciones nativas de copia de seguridad de Google Drive son limitadas. Google Takeout produce exportaciones únicas, no réplicas continuas. Las herramientas de copia de seguridad de terceros suelen cobrar tarifas por usuario que rivalizan con el costo de licencias adicionales de Google Workspace. Sincronizar Drive con Spaces mediante RcloneView solo cuesta la tarifa de almacenamiento de Spaces y se ejecuta en tu propia máquina o servidor.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and DigitalOcean Spaces remotes in RcloneView" class="img-large img-center" />

## Configuración de los remotos

Agrega un remoto de Google Drive en RcloneView seleccionando "Google Drive" como proveedor. El flujo de OAuth se autentica a través de tu navegador: inicia sesión con tu cuenta de Google y concede acceso. Puedes limitar el alcance del remoto a todo tu Drive, a una unidad compartida específica o a una sola carpeta configurando el ID de la carpeta raíz.

Para DigitalOcean Spaces, crea un remoto compatible con S3. Selecciona "Amazon S3 Compliant" y luego "DigitalOcean Spaces" en el menú desplegable de proveedores. Introduce tu clave de acceso (Access Key) y tu clave secreta (Secret Key) de Spaces (generadas en el panel de control de DigitalOcean, en API > Spaces Keys). Configura el endpoint a tu región preferida, como `nyc3.digitaloceanspaces.com` o `fra1.digitaloceanspaces.com`. RcloneView valida las credenciales y lista tus Spaces existentes.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Browsing Google Drive and DigitalOcean Spaces in RcloneView explorer" class="img-large img-center" />

## Creación del trabajo de sincronización

Abre el Job Manager de RcloneView y crea un nuevo trabajo. Establece Google Drive como origen y tu Space de DigitalOcean como destino. Elige el modo "Sync" para mantener una réplica exacta, o el modo "Copy" si deseas conservar en Spaces los archivos eliminados incluso después de haberlos quitado de Drive.

Google Drive almacena los documentos, hojas de cálculo y presentaciones de Google como formatos nativos de la nube, sin extensiones de archivo tradicionales. RcloneView los exporta automáticamente a sus equivalentes de Microsoft Office (`.docx`, `.xlsx`, `.pptx`) durante la transferencia, garantizando que lleguen a Spaces como archivos utilizables. Puedes personalizar el formato de exportación en la configuración del remoto si prefieres PDF u otros formatos.

Configura transferencias paralelas para acelerar la sincronización inicial. De cuatro a ocho transferencias simultáneas suelen funcionar bien dentro de las cuotas de la API de Google Drive. Establece un límite de ancho de banda si compartes la conexión con otros servicios.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time monitoring of Google Drive to DigitalOcean Spaces sync" class="img-large img-center" />

## Programación y mantenimiento continuo

Programa el trabajo de sincronización para que se ejecute cada noche o cada semana, según la frecuencia con la que cambie tu Drive. El programador de RcloneView admite temporización de tipo cron, y cada ejecución transfiere únicamente los archivos que han cambiado desde la última sincronización. El panel de historial de trabajos registra cada ejecución con marcas de tiempo, cantidad de archivos y volúmenes de transferencia.

DigitalOcean Spaces admite una CDN integrada. Una vez sincronizados tus archivos de Drive, puedes activar la CDN de Spaces para distribuir archivos a nivel global, algo útil para distribuir materiales de marketing, documentación o contenido multimedia que se originó en Google Drive.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Google Drive to DigitalOcean Spaces backup in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Autentica tu cuenta de Google Drive mediante OAuth y, opcionalmente, limita el alcance del remoto a una carpeta o unidad compartida específica.
3. Agrega tu remoto de DigitalOcean Spaces con tus claves de API y el endpoint de región.
4. Crea un trabajo de sincronización (Sync) y prográmalo para que se ejecute de forma recurrente y obtener una copia de seguridad continua.

Con Google Drive sincronizado con DigitalOcean Spaces, tus archivos viven en dos nubes independientes, protegidos frente a eliminaciones accidentales, bloqueos de cuenta e interrupciones del proveedor.

---

**Guías relacionadas:**

- [Transferir Google Drive a otra cuenta fácilmente](https://rcloneview.com/support/blog/transfer-google-drive-to-another-account-easily)
- [Montar DigitalOcean Spaces como unidad local con RcloneView](https://rcloneview.com/support/blog/mount-digitalocean-spaces-local-drive-rcloneview)
- [Sincronizar Linode Object Storage, S3 y Google Drive con RcloneView](https://rcloneview.com/support/blog/sync-linode-object-storage-s3-google-drive-rcloneview)

<CloudSupportGrid />
