---
slug: sync-koofr-to-amazon-s3-rcloneview
title: "Sincronizar Koofr con Amazon S3 — Copia de seguridad en la nube con RcloneView"
authors:
  - tayson
description: "Sincroniza Koofr con Amazon S3 usando RcloneView — transfiere archivos entre almacenamiento en la nube europeo y AWS S3 con una GUI confiable basada en rclone."
keywords:
  - Koofr to Amazon S3 sync
  - Koofr backup to S3
  - cloud sync tool
  - RcloneView Koofr
  - S3 archiving
  - cloud-to-cloud sync
  - AWS backup
  - European cloud to S3
  - Koofr rclone sync
  - GDPR cloud to S3
tags:
  - koofr
  - amazon-s3
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincronizar Koofr con Amazon S3 — Copia de seguridad en la nube con RcloneView

> El almacenamiento europeo de Koofr y la durabilidad global de Amazon S3 cumplen funciones complementarias — RcloneView sincroniza directamente entre ambos, creando una estrategia de copia de seguridad entre proveedores sin sobrecarga de disco local.

Los centros de datos europeos de Koofr y su infraestructura conforme al RGPD lo convierten en una sólida plataforma de almacenamiento activo, mientras que Amazon S3 ofrece una durabilidad de primer nivel e integración con CDN para archivado y distribución. Sincronizar entre ambos crea una robusta estrategia de dos niveles: mantener los datos de trabajo en los centros de datos europeos de Koofr mientras se archivan en S3 para optimizar costos a largo plazo. RcloneView gestiona la sincronización directamente entre ambos remotos sin tocar tu disco local.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurar ambos remotos

En RcloneView, agrega Koofr desde **Remote tab > New Remote > Koofr** e introduce tus credenciales. Luego agrega **Amazon S3**: selecciónalo de la lista de proveedores e introduce tu Access Key ID, Secret Access Key y AWS Region. Con ambos remotos activos, abre el explorador de doble panel — Koofr en un lado, tu bucket de S3 en el otro — para tener una vista comparativa de tu almacenamiento.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Koofr and Amazon S3 remotes in RcloneView" class="img-large img-center" />

Esta comparación directa es útil para planificar: revisa lo que hay en Koofr, confirma la estructura del bucket de S3 que deseas y verifica los nombres de las carpetas antes de iniciar el trabajo de sincronización.

## Configurar el trabajo de sincronización

En **Job Manager**, crea un trabajo de sincronización desde tu carpeta de Koofr hacia la ruta del bucket de S3 de destino. Para un equipo de cumplimiento que respalda documentos sensibles de Koofr a S3 Standard-IA para una retención rentable, el trabajo de sincronización se ejecuta semanalmente mediante programación (licencia PLUS).

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Koofr to Amazon S3 sync job in RcloneView" class="img-large img-center" />

Las opciones de filtrado de RcloneView te permiten restringir la sincronización a tipos de archivo específicos — por ejemplo, sincronizar solo archivos `.pdf` y `.docx` excluyendo archivos temporales y miniaturas. El filtrado **Max File Age** limita aún más las sincronizaciones a los archivos modificados recientemente, manteniendo las ejecuciones incrementales rápidas y enfocadas.

## Monitoreo y verificación

Después de la sincronización inicial, las ejecuciones posteriores solo transfieren los cambios — RcloneView compara tamaños de archivo y fechas de modificación para identificar diferencias. La pestaña **Job History** muestra el resultado de cada sincronización con bytes transferidos, cantidad de archivos, duración y estado.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Koofr to S3 sync runs in RcloneView" class="img-large img-center" />

Para organizaciones que mantienen Koofr como su almacenamiento principal conforme al RGPD y S3 como nivel de archivado, este patrón de sincronización crea un ciclo de vida de datos claro: activo en Koofr, archivado en S3 según un programa. La función **Folder Compare** ofrece una verificación puntual de que ambas plataformas están sincronizadas cuando sea necesario.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agrega el remoto **Koofr** (credenciales) y el remoto **Amazon S3** (Access Key).
3. Crea un trabajo de sincronización en **Job Manager** de Koofr a S3.
4. Habilita la programación (PLUS) para automatizar las copias de seguridad periódicas.

RcloneView convierte una arquitectura de dos nubes en un flujo de trabajo gestionado y automatizado — Koofr para el cumplimiento normativo, S3 para el archivado, con sincronizaciones que mantienen a ambos actualizados.

---

**Guías relacionadas:**

- [Gestionar el almacenamiento de Koofr — Sincronización y copia de seguridad con RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Koofr como hub multi-nube — Google Drive, OneDrive, Dropbox con RcloneView](https://rcloneview.com/support/blog/koofr-multi-cloud-hub-google-drive-onedrive-dropbox-rcloneview)
- [Copia de seguridad de Dropbox a AWS S3 con RcloneView](https://rcloneview.com/support/blog/backup-dropbox-to-aws-s3-rcloneview)

<CloudSupportGrid />
