---
slug: migrate-pikpak-to-onedrive-rcloneview
title: "Migrar de PikPak a OneDrive — Transfiere archivos con RcloneView"
authors:
  - steve
description: "Mueve archivos de PikPak a OneDrive con RcloneView, una GUI de rclone que migra almacenamiento en la nube sin trabajo en línea de comandos."
keywords:
  - migrar pikpak a onedrive
  - transferencia pikpak a onedrive
  - migración pikpak onedrive
  - rclone gui pikpak
  - herramienta de migración entre nubes
  - copia de seguridad pikpak onedrive
  - transferir archivos de pikpak
  - migración rcloneview
  - almacenamiento en la nube pikpak
  - herramienta de sincronización onedrive
tags:
  - RcloneView
  - pikpak
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar de PikPak a OneDrive — Transfiere archivos con RcloneView

> Consolida los archivos que has acumulado en PikPak en OneDrive sin descargar nada primero a tu disco local.

PikPak es un destino popular para descargas offline y enlaces magnet, pero no es donde la mayoría de la gente quiere conservar sus archivos a largo plazo — OneDrive, con su integración con Microsoft 365, suele serlo. Mover todo manualmente de uno a otro implica descargar a una unidad local y volver a subirlo, lo cual es lento y fácil de interrumpir. RcloneView gestiona el traslado directamente entre ambos remotos en un solo trabajo.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta PikPak y OneDrive como remotos

Abre **pestaña Remote > New Remote** y añade primero PikPak, siguiendo las indicaciones en pantalla para autenticar tu cuenta. Luego añade OneDrive, que utiliza el inicio de sesión OAuth en el navegador de RcloneView — se abre una ventana, inicias sesión y el remoto se conecta automáticamente sin necesidad de copiar ni pegar ninguna clave de API.

<img src="/support/images/en/blog/new-remote.png" alt="Añadiendo PikPak y OneDrive como nuevos remotos en RcloneView" class="img-large img-center" />

Una vez que ambos remotos aparezcan en Remote Manager, ábrelos uno junto al otro en el Explorer de dos paneles para confirmar que estás viendo las carpetas correctas antes de configurar la transferencia.

## Configura el trabajo de migración

Haz clic en **Sync** en la pestaña Home para iniciar el asistente de 4 pasos. En el Paso 1, selecciona tu carpeta de PikPak como origen y la carpeta de destino en OneDrive como destino, y elige **One-way (modifying destination only)** para que PikPak permanezca intacto mientras OneDrive recibe la copia.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configurando un trabajo de transferencia de PikPak a OneDrive en RcloneView" class="img-large img-center" />

En el Paso 2, aumenta el número de transferencias de archivos si vas a mover muchos archivos pequeños, y en el Paso 3 aplica un filtro de tamaño máximo de archivo o de extensión si solo quieres mover cierto contenido primero. Ejecuta un **Dry Run** antes de la transferencia real — muestra exactamente lo que se copiará, para que puedas detectar una carpeta mal seleccionada antes de que te haga perder tiempo.

## Supervisa y verifica la transferencia

Inicia el trabajo y cambia a la pestaña **Transferring** para ver el progreso, la velocidad y el número de archivos en tiempo real. RcloneView monta y sincroniza más de 90 proveedores desde una sola ventana, por lo que puedes seguir revisando otros remotos mientras el trabajo de PikPak a OneDrive se ejecuta en segundo plano.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History mostrando una migración completada de PikPak a OneDrive" class="img-large img-center" />

Cuando el trabajo termine, revisa **Job History** para ver el tamaño total y el número de archivos transferidos, y luego usa **Folder Compare** para confirmar que ambos lados coinciden antes de dar la migración por finalizada.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade tus cuentas de PikPak y OneDrive como remotos a través de Remote Manager.
3. Crea un trabajo de sincronización unidireccional de PikPak a OneDrive y ejecuta primero un Dry Run.
4. Ejecuta el trabajo y verifica el resultado con Job History y Folder Compare.

Una vez que el contenido de PikPak resida en OneDrive, estará listo para la colaboración y la integración con Office que ofrece OneDrive.

---

**Guías relacionadas:**

- [Migrar de PikPak a Google Drive](https://rcloneview.com/support/blog/migrate-pikpak-to-google-drive-rcloneview)
- [Sincronizar PikPak, Google Drive y S3](https://rcloneview.com/support/blog/sync-pikpak-cloud-google-drive-s3-rcloneview)
- [Solucionar errores de sincronización de PikPak](https://rcloneview.com/support/blog/fix-pikpak-sync-errors-rcloneview)

<CloudSupportGrid />
