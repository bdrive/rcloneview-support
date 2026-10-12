---
slug: backup-google-photos-external-drive-nas-rcloneview
title: "Cómo hacer una copia de seguridad de Google Photos en una unidad externa o NAS — Google Takeout + RcloneView"
authors:
  - tayson
description: "Google Photos ya no permite que aplicaciones de terceros descarguen tu biblioteca existente. Expórtala con Google Takeout a Google Drive, usa RcloneView para copiar la exportación a una unidad externa, un NAS u otro almacenamiento en la nube, y mantén las fotos nuevas protegidas con RcloneView Mobile."
keywords:
  - copia de seguridad de google photos
  - google photos a unidad externa
  - google photos a nas
  - google takeout a nas
  - copia de seguridad con google takeout
  - google photos rclone
  - restricción de la API de google photos
  - guardar google photos localmente
  - exportar google photos
  - copia de seguridad de fotos con rcloneview mobile
tags:
  - RcloneView
  - google-photos
  - backup
  - cloud-storage
  - sync
  - nas
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cómo hacer una copia de seguridad de Google Photos en una unidad externa o NAS — Google Takeout + RcloneView

> Desde el 31 de marzo de 2025, Google Photos solo permite que las aplicaciones de terceros —incluidos rclone y RcloneView— vean las fotos que ellas mismas han subido. La forma fiable de sacar tu biblioteca existente es Google Takeout, y RcloneView se encarga del resto.

Google Photos guarda años de fotos y vídeos irremplazables, pero las cuotas de almacenamiento, los bloqueos de cuenta y los cambios de política pueden dejarte sin acceso a ellos. Muchas guías —incluida una versión anterior de esta— decían que había que conectar Google Photos a una herramienta de sincronización y descargarlo todo. Eso ya no funciona: Google cerró esa puerta en 2025.

Esta guía muestra el camino que funciona hoy. Exporta tu biblioteca con **Google Takeout** directamente a Google Drive, deja que **RcloneView** copie la exportación a una unidad externa, un NAS u otro almacenamiento en la nube, y usa **RcloneView Mobile** para que, a partir de ahora, las fotos nuevas no pasen por Google Photos como intermediario.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Qué cambió: restricciones de la API de Google Photos (2025)

El 31 de marzo de 2025, Google eliminó de la API Photos Library los ámbitos (scopes) de acceso a la biblioteca completa. En palabras de Google, las aplicaciones de terceros "can now only list, search, and retrieve albums and media items that were created by your app". Las llamadas a álbumes compartidos devuelven `403 PERMISSION_DENIED`.

Qué significa esto cuando añades un remoto de **Google Photos** en RcloneView:

- **El remoto parece casi vacío.** Solo muestra las fotos que se subieron a través de RcloneView o rclone. Las subidas desde el teléfono, las subidas desde la web y el resto de tu biblioteca son invisibles para la API, por lo que un trabajo de copia informa de "no changes" o copia cero archivos.
- **No es un problema de conexión.** RcloneView 1.6 y posteriores explican la restricción dentro de la aplicación al abrir un remoto de Google Photos, en lugar de mostrar lo que parece una cuenta vacía.
- **Los álbumes compartidos no son accesibles** en absoluto.
- **Necesitas tu propio ID de cliente OAuth.** El ID de cliente compartido de rclone para Google Photos se retirará durante 2026. Cuando no se puede establecer la conexión, el asistente de conexión de RcloneView te guía para crear uno.

La forma compatible que ofrece Google para exportar una biblioteca existente es **Google Takeout**, así que la copia de seguridad empieza por ahí.

## Paso 1: exporta tu biblioteca con Google Takeout

1. Abre [takeout.google.com](https://takeout.google.com) e inicia sesión con la cuenta propietaria de las fotos.
2. Haz clic en **Deselect all** y marca solo **Google Photos**. Usa **All photo albums included** para limitar la exportación a álbumes o años concretos si quieres dividir una biblioteca grande en lotes.
3. En **Destination**, elige **Add to Drive**. Google coloca la exportación en una carpeta `Takeout` de tu Google Drive, a la que RcloneView puede acceder directamente. También se ofrecen Dropbox, OneDrive y Box —RcloneView admite los tres— y **Send download link via email** sirve si prefieres copiar desde tu ordenador.
4. Elige el tipo de archivo (`.zip`) y el tamaño (de 1 GB a 50 GB). Los archivos más grandes implican menos ficheros que gestionar.
5. Haz clic en **Create export**. Google te envía un correo cuando está listo; una biblioteca grande puede tardar horas o incluso días.

Conviene saber antes de empezar:

- Cada foto y vídeo llega en calidad original junto con un archivo de metadatos `.json` que contiene la fecha de captura, la descripción y la ubicación.
- Una exportación añadida a Google Drive cuenta para tu almacenamiento de Google hasta que la elimines, así que asegúrate de que Drive tenga espacio, o exporta por lotes.
- Takeout es una exportación única, sin modo incremental. El Paso 4 explica cómo mantener protegidas las fotos futuras sin repetirla.

## Paso 2: añade Google Drive en RcloneView

1. Abre RcloneView y haz clic en **Add Remote** en el Remote Manager.
2. Elige **Google Drive** y completa el [inicio de sesión OAuth en el navegador](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login).
3. Abre el remoto en el [Explorer](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage) y navega hasta la carpeta `Takeout`. Cada exportación es un archivo `.zip` independiente (o varios, en el caso de bibliotecas grandes).

<img src="/support/images/en/blog/open-multiple-google-drive-remotes.png" alt="Remoto de Google Drive con la carpeta Takeout abierta en el Explorer de RcloneView" class="img-large img-center" />

## Paso 3: copia la exportación a tu destino de copia de seguridad

RcloneView copia los archivos tal cual están —no los descomprime—, así que se descomprimen una sola vez en el equipo de destino cuando termina la copia.

### Disco duro externo

1. Conecta la unidad y anota su ruta (`E:\` en Windows, `/Volumes/...` en macOS, `/media/...` en Linux).
2. Crea un [trabajo de Copy](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs): **Source** = la carpeta `Takeout` del remoto de Google Drive, **Destination** = una carpeta de la unidad.
3. Ejecuta el trabajo y luego extrae los archivos en la unidad.

Usa **Copy**, no Sync: un trabajo de Copy nunca elimina nada en el destino.

### NAS Synology

RcloneView [detecta automáticamente los dispositivos NAS Synology](https://rcloneview.com/support/tutorials/synology-nas-cloud-transfer) de tu red, por lo que el NAS aparece en la pestaña Local sin necesidad de configuración.

1. Crea un trabajo de Copy con la carpeta `Takeout` como origen y una carpeta compartida del NAS (por ejemplo `/photos/google-takeout`) como destino.
2. Ejecútalo y luego extrae los archivos en el NAS.

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="NAS Synology detectado automáticamente en RcloneView para la copia de Google Takeout" class="img-large img-center" />

### Otro almacenamiento en la nube

¿Prefieres una copia externa? Dirige el trabajo de Copy a cualquier otro remoto: Amazon S3, Backblaze B2, Wasabi, OneDrive, etc. RcloneView mueve los datos de una nube a otra mediante su motor rclone; los archivos no tienen que pasar por el almacenamiento de tu ordenador.

### Verifica y limpia

- Usa [Folder Comparison](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents) para confirmar que cada archivo llegó con el mismo tamaño.
- Consulta el [Job History](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job#view-job-history) para ver el registro de la transferencia.
- Una vez verificada la copia, elimina la carpeta `Takeout` de Google Drive para recuperar el espacio que ocupa.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Comparison entre la exportación de Takeout y la copia en el NAS" class="img-large img-center" />

## Paso 4: mantén las fotos nuevas protegidas con RcloneView Mobile

Takeout no puede ejecutarse de forma incremental, así que repetirlo cada mes no es un plan. Para las fotos que hagas a partir de ahora, saca a Google Photos del circuito:

- **RcloneView Mobile** (Android e iOS) hace una copia de seguridad de las fotos y vídeos de tu teléfono directamente en tu propio almacenamiento en la nube: los mismos remotos que usas en RcloneView en el escritorio, sin ningún servidor intermedio. La copia de seguridad de fotos está incluida en RcloneView Plus. Consíguelo en la [página de descargas](https://rcloneview.com/src/download.html).
- En el escritorio, un trabajo de Copy programado (una función PLUS, consulta [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)) refleja entonces esa carpeta de la nube en tu NAS o unidad externa: a diario, cada semana, cuando quieras.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Programación de la copia recurrente de la carpeta de fotos en la nube al NAS" class="img-large img-center" />

Tu teléfono, tu nube y tu NAS se mantienen al día sin que Google Photos decida qué puedes descargar.

## Para qué sigue sirviendo el remoto de Google Photos

El remoto no es inútil: simplemente funciona en la otra dirección.

- **Subir.** Un trabajo de Copy desde tu NAS o tu ordenador a la carpeta `upload` del remoto o a un álbum añade esas fotos a tu biblioteca de Google Photos, donde la aplicación Google Photos las muestra como cualquier otra subida.
- **Leer lo que RcloneView subió.** Todo lo que entró a través de RcloneView se puede listar y volver a copiar.
- **Salvedades.** Las descargas a través de la API no tienen la resolución original y pierden los datos de ubicación EXIF, así que trata Google Photos como un visor cómodo, no como el archivo. Y sigues necesitando tu propio ID de cliente OAuth.

## Primeros pasos

1. **Exporta** tu biblioteca de Google Photos con Google Takeout, entregada en Google Drive.
2. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html) (Windows, macOS, Linux) y añade Google Drive como remoto.
3. **Crea un trabajo de Copy** desde la carpeta `Takeout` a tu unidad externa, NAS u otro almacenamiento en la nube, y extrae allí los archivos.
4. **Verifica** la copia con Folder Comparison y elimina la exportación de Drive.
5. **Instala RcloneView Mobile** para que las fotos nuevas vayan directamente a tu propio almacenamiento en la nube, y programa un trabajo en el escritorio que las refleje en el NAS.

Tus fotos son irremplazables. Una exportación y un trabajo programado te dan una copia que ningún cambio de política puede quitarte.

---

**Guías relacionadas:**

- [Solucionar errores de sincronización de Google Photos en RcloneView](https://rcloneview.com/support/blog/fix-google-photos-sync-errors-rcloneview)
- [Añadir un remoto mediante inicio de sesión en el navegador (OAuth)](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [Explorar y gestionar remotos](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Comparar el contenido de carpetas](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Crear trabajos de sincronización](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Programación de trabajos](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Detección automática y conexión de Synology NAS](https://rcloneview.com/support/tutorials/synology-nas-cloud-transfer)

<CloudSupportGrid />
