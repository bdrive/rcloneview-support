---
slug: sync-nextcloud-to-wasabi-rcloneview
title: "Sincronizar Nextcloud con Wasabi — Copia de Seguridad en la Nube con RcloneView"
authors:
  - jay
description: "Sincroniza tu instancia de Nextcloud con Wasabi S3 usando RcloneView — conecta remotos WebDAV y S3, automatiza trabajos de copia de seguridad y mantén protegidos tus datos autoalojados fuera del sitio."
keywords:
  - sync nextcloud to wasabi
  - nextcloud wasabi backup
  - nextcloud s3 backup gui
  - backup nextcloud to s3
  - nextcloud cloud backup rcloneview
  - wasabi s3 backup tool
  - webdav to s3 sync rcloneview
  - nextcloud off-site backup
  - rcloneview nextcloud wasabi
tags:
  - nextcloud
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincronizar Nextcloud con Wasabi — Copia de Seguridad en la Nube con RcloneView

> Una instancia de Nextcloud autoalojada necesita una copia de seguridad fuera del sitio — RcloneView facilita la sincronización de tus carpetas de Nextcloud con el almacenamiento Wasabi S3 de forma sencilla y totalmente automatizable.

Un servidor Nextcloud autoalojado te da el control de tus archivos, pero ese control conlleva una responsabilidad: si el servidor falla, es afectado por ransomware o su disco se degrada, tus datos desaparecen con él. Sincronizar con Wasabi te ofrece una copia duradera fuera del sitio sin sorpresas en los costos de transferencia. RcloneView se conecta a Nextcloud mediante WebDAV y a Wasabi mediante el protocolo S3, y luego te permite crear trabajos de sincronización fiables entre ambos — sin necesidad de usar la línea de comandos.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta Tu Instancia de Nextcloud como Remoto

Abre RcloneView y ve a **Remote tab > New Remote**. Selecciona **WebDAV** como tipo de remoto y elige **Nextcloud** como proveedor. Introduce la URL de tu servidor Nextcloud en el formato `https://cloud.yourdomain.com/remote.php/dav/files/username/`, junto con tu nombre de usuario de Nextcloud y ya sea la contraseña de tu cuenta o una contraseña específica de aplicación generada desde la configuración de seguridad de Nextcloud. Guarda el remoto y aparecerá como una fuente navegable en el explorador de archivos.

A diferencia de las herramientas que solo permiten montar, RcloneView sincroniza fuentes WebDAV como Nextcloud directamente con destinos compatibles con S3 como Wasabi — todo ello con la licencia FREE.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Nextcloud as a WebDAV remote in RcloneView" class="img-large img-center" />

Una vez conectado, navega por tus directorios de Nextcloud para confirmar que el enlace funciona. Puedes inspeccionar nombres de archivos, tamaños y fechas de modificación — útil para decidir qué carpetas incluir en un trabajo de copia de seguridad y qué directorios internos de Nextcloud (como `trashbin`) excluir.

## Añade Wasabi como Remoto Compatible con S3

Desde **Remote tab > New Remote** nuevamente, selecciona **Amazon S3** y elige **Wasabi** como proveedor. Introduce tu Access Key ID y tu Secret Access Key de Wasabi, selecciona el endpoint de región correspondiente (por ejemplo, `s3.us-east-1.wasabisys.com`) y especifica el bucket de destino. Después de guardar, RcloneView puede abrir tu bucket de Wasabi en un segundo panel del explorador junto a Nextcloud — puedes arrastrar archivos individuales entre ambos para verificar la conexión antes de ejecutar una sincronización completa.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Nextcloud and Wasabi remotes open side by side for cloud-to-cloud backup in RcloneView" class="img-large img-center" />

La API de Wasabi, compatible con S3, hace que RcloneView la trate de forma idéntica a Amazon S3, por lo que todas las operaciones de sincronización, copia, movimiento y filtrado funcionan sin configuración adicional.

## Configura el Trabajo de Sincronización

Haz clic en **Sync** desde la pestaña Home para abrir el asistente de trabajos de 4 pasos. En el Paso 1, establece tu carpeta de Nextcloud como origen y tu bucket de Wasabi (o una subcarpeta como `nextcloud-backup/`) como destino. Asigna al trabajo un nombre descriptivo, como `nextcloud-to-wasabi-daily`.

En el Paso 2, aumenta el número de transferencias paralelas si tu conexión lo permite — esto acelera la sincronización de la gran cantidad de archivos pequeños típica de Nextcloud. Activa la **verificación de checksum** para comparar los hashes de los archivos en lugar de solo los tamaños, lo que detecta cualquier corrupción ocurrida durante una carga parcial anterior. En el Paso 3, añade reglas de filtro para excluir la carpeta `trashbin` de Nextcloud y cualquier archivo temporal de carga fragmentada, de modo que la copia de seguridad se mantenga limpia.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Nextcloud to Wasabi sync job in RcloneView" class="img-large img-center" />

Con una licencia PLUS, el Paso 4 te permite añadir una programación estilo crontab — por ejemplo, cada noche a las 2 AM — para que la copia de seguridad se ejecute sin necesidad de activarla manualmente. El programador admite días de la semana específicos, intervalos mensuales y rangos basados en pasos.

## Revisa el Historial de Transferencias

Después de cada ejecución, la pestaña **Job History** registra cada ejecución: hora de inicio, duración, estado (Completed / Errored / Canceled), total de bytes movidos y velocidad de transferencia. Este registro es el primer lugar donde buscar si una copia de seguridad parece haberse detenido o haber omitido archivos, lo que facilita comprobar si los datos de Nextcloud están llegando a Wasabi según lo esperado.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log showing completed Nextcloud to Wasabi backup runs" class="img-large img-center" />

Para operaciones que gestionan múltiples instancias de Nextcloud o que realizan copias de seguridad en buckets de Wasabi ubicados en distintas regiones para lograr redundancia geográfica, la sincronización 1:N de RcloneView te permite configurar un origen frente a varios destinos y ejecutarlos juntos en un único trabajo.

## Cómo Empezar

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade tu servidor Nextcloud como remoto WebDAV (Remote tab > New Remote > WebDAV > proveedor Nextcloud).
3. Añade Wasabi como remoto compatible con S3 con tu Access Key, Secret Key, endpoint de región y nombre del bucket.
4. Crea un trabajo de sincronización con Nextcloud como origen y tu bucket de Wasabi como destino — activa la verificación de checksum en el Paso 2 para copias de seguridad con integridad garantizada.

Tus datos de Nextcloud autoalojados tendrán una copia fiable fuera del sitio en Wasabi, ejecutándose automáticamente sin necesidad de scripts de línea de comandos.

---

**Guías Relacionadas:**

- [Gestiona la Sincronización y Copia de Seguridad en la Nube de Nextcloud con RcloneView](https://rcloneview.com/support/blog/manage-nextcloud-cloud-sync-backup-rcloneview)
- [Gestiona la Sincronización y Copia de Seguridad en la Nube de Wasabi con RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Sincroniza Nextcloud con Backblaze B2 usando RcloneView](https://rcloneview.com/support/blog/sync-nextcloud-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
