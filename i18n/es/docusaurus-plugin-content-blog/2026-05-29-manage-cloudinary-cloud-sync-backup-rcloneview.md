---
slug: manage-cloudinary-cloud-sync-backup-rcloneview
title: "Gestionar el almacenamiento de Cloudinary — Sincroniza y realiza copias de seguridad de archivos con RcloneView"
authors:
  - jay
description: "Aprende a gestionar, sincronizar y hacer copias de seguridad de tus recursos digitales de Cloudinary en Amazon S3, Google Drive u otro almacenamiento en la nube usando RcloneView."
keywords:
  - gestionar Cloudinary con RcloneView
  - copia de seguridad de Cloudinary en S3
  - sincronización de Cloudinary con Google Drive
  - Cloudinary rclone
  - copia de seguridad de recursos de Cloudinary
  - gestión del almacenamiento en la nube de Cloudinary
  - sincronizar archivos de Cloudinary
  - copia de seguridad de recursos digitales de Cloudinary
tags:
  - dam
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestionar el almacenamiento de Cloudinary — Sincroniza y realiza copias de seguridad de archivos con RcloneView

> Cloudinary alberga tus recursos de imagen y video de producción — RcloneView te permite hacer copias de seguridad en Amazon S3, Google Drive o cualquier otra nube sin escribir un solo script.

Cloudinary se ha convertido en la plataforma de referencia para desarrolladores y equipos creativos que gestionan grandes bibliotecas de imágenes, videos y archivos multimedia enriquecidos. Pero almacenar todo únicamente en Cloudinary crea un único punto de fallo: una eliminación masiva accidental, problemas de cuenta o interrupciones de la API pueden dejar inaccesible toda tu biblioteca multimedia en minutos. RcloneView, construido sobre el backend de Cloudinary de rclone, te ofrece una interfaz visual para explorar, sincronizar y hacer copias de seguridad de tu cuenta de Cloudinary hacia cualquier otro almacenamiento en la nube compatible, manteniendo una copia verificada bajo tu control.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Cloudinary a RcloneView

Abre RcloneView y navega a la pestaña Remoto, luego haz clic en Nuevo Remoto. Selecciona Cloudinary de la lista de proveedores e introduce tus credenciales para completar la configuración. Una vez conectado, tu almacenamiento de Cloudinary aparece como un remoto navegable en el panel del explorador — usa el árbol de carpetas de la izquierda para navegar por tu biblioteca multimedia, y la lista de archivos de la derecha para inspeccionar recursos individuales con nombre, tamaño y fecha de modificación.

La vista de miniaturas es especialmente útil para el contenido de Cloudinary: cambia al modo de miniaturas en la lista de archivos para obtener una cuadrícula visual de tus imágenes en lugar de nombres de archivo simples, lo que facilita confirmar que estás viendo la carpeta correcta antes de iniciar cualquier operación.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Cloudinary as a new remote in RcloneView" class="img-large img-center" />

## Hacer copias de seguridad de recursos de Cloudinary en otra nube

Con Cloudinary abierto en un panel del explorador y un destino como Amazon S3, Backblaze B2 o Google Drive abierto en el otro, inicia un trabajo de sincronización desde la pestaña Inicio > Sincronizar. El asistente de 4 pasos te permite configurar exactamente qué se transfiere:

- Selecciona tu carpeta de Cloudinary como origen y tu nube de copia de seguridad como destino
- Usa los filtros de archivo predefinidos en el Paso 3 (Imagen, Video) para dirigirte a tipos de medios específicos y omitir archivos innecesarios
- Establece una antigüedad máxima de archivo para ejecutar sincronizaciones incrementales que solo capturen los recursos actualizados recientemente

Ejecuta siempre primero una **Simulación (Dry Run)** — muestra una vista previa exacta de qué archivos se transferirán o se omitirán sin tocar nada. Para una biblioteca grande de Cloudinary, esto detecta una configuración incorrecta de filtros antes de que provoque copias de seguridad incompletas.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop interface for transferring Cloudinary assets to S3 backup" class="img-large img-center" />

## Programar copias de seguridad automáticas de Cloudinary

Para una protección continua de los recursos, RcloneView PLUS añade programación al estilo crontab en el Paso 4 del asistente de sincronización. Una sincronización nocturna a las 2 AM recoge los recursos subidos ese día, manteniendo el uso del ancho de banda fuera de las horas punta. Usa la vista previa de Simular programación para verificar las próximas horas de ejecución antes de guardar — sin sorpresas cuando se active la primera ejecución programada.

Una vez en funcionamiento, las notificaciones de finalización de trabajo te avisan con el estado, el número de archivos transferidos y el volumen de datos. Para equipos con docenas de transformaciones y subidas activas de Cloudinary por día, esta alerta pasiva significa que sabes que la copia de seguridad se ejecutó correctamente sin tener que iniciar sesión para comprobarlo.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring a nightly scheduled backup of Cloudinary assets in RcloneView" class="img-large img-center" />

## Verificar que la copia de seguridad esté completa

Usa la función Comparar Carpetas (pestaña Inicio > Comparar) para comparar tu origen de Cloudinary con el destino de la copia de seguridad en cualquier momento. RcloneView muestra archivos solo a la izquierda, solo a la derecha, iguales y diferentes lado a lado — puedes identificar de un vistazo las brechas en la cobertura y copiar los archivos faltantes directamente desde la vista de comparación sin configurar un nuevo trabajo. Para recursos multimedia críticos, habilitar las sumas de comprobación (checksums) en la Configuración avanzada del trabajo de sincronización verifica el contenido de los archivos más allá de la simple coincidencia de tamaño, confirmando que cada archivo llegó intacto.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder comparison between Cloudinary source and S3 backup destination" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade Cloudinary como remoto desde la pestaña Remoto > Nuevo Remoto y completa la configuración.
3. Añade tu destino de copia de seguridad (Amazon S3, Backblaze B2, Google Drive) como un segundo remoto.
4. Crea un trabajo de sincronización desde Cloudinary hacia el destino, ejecuta una Simulación (Dry Run) y luego activa la programación de PLUS para copias de seguridad diarias automáticas.

Cloudinary alberga tus recursos de producción más visibles — mantener una copia sincronizada en una segunda nube convierte un único punto de fallo en una copia de seguridad fiable y auditable que controlas por completo.

---

**Guías relacionadas:**

- [Gestionar recursos digitales en múltiples nubes con RcloneView](https://rcloneview.com/support/blog/manage-digital-assets-multi-cloud-rcloneview)
- [Gestionar el almacenamiento de Amazon S3 — Sincroniza y realiza copias de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Hacer copia de seguridad de Google Photos en una unidad externa o NAS con RcloneView](https://rcloneview.com/support/blog/backup-google-photos-external-drive-nas-rcloneview)

<CloudSupportGrid />
