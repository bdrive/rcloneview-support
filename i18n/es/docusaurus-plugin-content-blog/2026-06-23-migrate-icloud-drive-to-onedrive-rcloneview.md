---
slug: migrate-icloud-drive-to-onedrive-rcloneview
title: "Migrar iCloud Drive a OneDrive — Transfiere archivos con RcloneView"
authors:
  - alex
description: "Guía paso a paso para migrar archivos de iCloud Drive a Microsoft OneDrive utilizando la sincronización de nube a nube de RcloneView, la vista previa de simulación (dry-run) y las herramientas de verificación por comparación de carpetas."
keywords:
  - migración de iCloud Drive a OneDrive
  - migrar iCloud a Microsoft OneDrive
  - transferencia de iCloud Drive a OneDrive
  - cambiar de iCloud a OneDrive
  - migración en la nube Apple Microsoft
  - copia de seguridad de iCloud Drive a OneDrive
  - migración de iCloud con RcloneView
  - mover archivos de iCloud a OneDrive
  - migración de archivos en la nube multiplataforma
tags:
  - cloud-to-cloud
  - migration
  - onedrive
  - macos
  - cloud-migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar iCloud Drive a OneDrive — Transfiere archivos con RcloneView

> Cambiar del ecosistema iCloud de Apple a Microsoft OneDrive no tiene por qué significar descargar y volver a subir manualmente gigabytes de archivos: RcloneView ejecuta la migración como una transferencia directa de nube a nube.

Cuando los equipos estandarizan en Microsoft 365, o cuando usuarios individuales pasan de flujos de trabajo centrados en Mac a Windows, llevar los archivos de iCloud Drive a OneDrive es el primer obstáculo práctico. Descargar todo a un disco local y volver a subirlo es lento, propenso a interrupciones y no deja una forma sencilla de verificar que todos los archivos llegaron intactos. RcloneView gestiona esto como una transferencia del lado del servidor con seguimiento de progreso integrado, vista previa de simulación (dry-run) y verificación por comparación de carpetas.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ¿Por qué pasar de iCloud Drive a OneDrive?

iCloud Drive funciona sin problemas dentro del hardware de Apple, pero ofrece una integración nativa limitada fuera de ese ecosistema. OneDrive, en cambio, está integrado en el Explorador de archivos de Windows, se conecta directamente con Microsoft Office y Teams, y funciona en Windows, macOS, iOS y Android con un comportamiento de sincronización consistente. Las organizaciones que implementan Microsoft 365 a menudo requieren que los empleados trasladen sus bibliotecas de archivos existentes a OneDrive, de modo que la colaboración, el historial de versiones y las políticas de acceso fluyan a través de un único sistema gestionado.

La compatibilidad con iCloud Drive en RcloneView requiere rclone v1.69 o posterior. RcloneView incluye un binario de rclone integrado que ya cumple con este requisito, por lo que no es necesario instalar rclone por separado antes de comenzar.

<img src="/support/images/en/blog/new-remote.png" alt="Adding both iCloud Drive and OneDrive as remotes in the RcloneView Remote Manager" class="img-large img-center" />

## Configurar ambos remotos en RcloneView

Comienza añadiendo tu remoto de iCloud Drive: ve a la pestaña **Remote**, haz clic en **New Remote** y elige **iCloud Drive**. Sigue las indicaciones en pantalla para autenticarte con tu cuenta de Apple. Luego añade tu remoto de OneDrive de la misma manera — OneDrive utiliza inicio de sesión OAuth en el navegador, por lo que se abrirá una ventana del navegador para iniciar sesión con tu cuenta de Microsoft, y el remoto se guardará una vez completada la autorización.

Con ambos remotos registrados, ábrelos uno junto al otro en los paneles del Explorer. Esto te da una vista en vivo de ambos árboles de archivos antes de que comience cualquier transferencia. Usa **Get Size** en la raíz de iCloud Drive para confirmar el volumen total de datos, y revisa las estructuras de carpetas para detectar diferencias de nomenclatura o rutas profundamente anidadas que puedan comportarse de manera diferente en OneDrive.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="iCloud Drive and OneDrive displayed side by side in the RcloneView two-panel Explorer for cloud-to-cloud transfer" class="img-large img-center" />

## Ejecutar la migración con un trabajo de sincronización

Crea un nuevo trabajo de Sync desde la pestaña **Home**. Establece iCloud Drive (o una subcarpeta específica) como origen y la ruta de destino en OneDrive como destino. Antes de ejecutar, realiza un **Dry Run**: RcloneView enumera cada archivo y carpeta que transferiría sin mover nada realmente. En una biblioteca de iCloud de 50 GB, este escaneo toma solo unos minutos y revela cualquier archivo de gran tamaño o carácter de nombre de archivo que OneDrive maneje de forma diferente.

A diferencia de las herramientas que solo permiten montar unidades, RcloneView también sincroniza y compara carpetas en la licencia FREE, por lo que todo el flujo de migración, desde el dry-run hasta la transferencia en vivo y la verificación, no requiere ninguna actualización de pago.

Una vez que la salida del dry-run se vea correcta, inicia la transferencia en vivo. La pestaña **Transferring** muestra el progreso en vivo, la velocidad y el archivo que se está transfiriendo en ese momento. Si la conexión se interrumpe, simplemente vuelve a ejecutar el mismo trabajo: rclone omite los archivos que ya existen en el destino con el mismo tamaño, de modo que la transferencia se reanuda de forma eficiente desde donde se detuvo.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare view in RcloneView confirming iCloud Drive and OneDrive folder contents match after migration" class="img-large img-center" />

## Verificar la migración con Folder Compare

Después de que finalice el trabajo de Sync, abre **Folder Compare** desde la pestaña **Home** y apúntalo al mismo origen de iCloud Drive y destino de OneDrive. El motor de comparación muestra qué archivos son idénticos, cuáles difieren en tamaño y cuáles aparecen solo en un lado. Recorrer los filtros de "solo a la izquierda" y "solo a la derecha" es la forma más rápida de confirmar que no hay pérdida de datos sin revisar archivos manualmente uno por uno.

Si estás realizando una migración por fases —usando todavía iCloud Drive activamente en algunos dispositivos mientras transicionas otros a OneDrive—, los usuarios con licencia PLUS pueden adjuntar una programación al trabajo de sincronización. Cualquier archivo nuevo añadido a iCloud Drive se replicará automáticamente en OneDrive en cada ejecución programada hasta que se complete la transición.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring iCloud Drive to OneDrive sync job in RcloneView for a phased migration transition" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade tu remoto de **iCloud Drive** mediante **Remote** > **New Remote** y completa la autenticación de la cuenta de Apple.
3. Añade tu remoto de **OneDrive** mediante inicio de sesión OAuth en el navegador.
4. Crea un trabajo de Sync con iCloud Drive como origen y OneDrive como destino; ejecuta primero **Dry Run**.
5. Después de la transferencia en vivo, usa **Folder Compare** para confirmar que todos los archivos se migraron correctamente.

Una migración completa a OneDrive te brinda acceso consistente en Windows, Microsoft 365 y Teams, sin dejar archivos divididos indefinidamente entre dos servicios.

---

**Guías relacionadas:**

- [Gestiona la sincronización en la nube de iCloud Drive con RcloneView](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [Gestiona OneDrive — Sincronización y copia de seguridad en la nube con RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Migra iCloud Drive a Google Drive con RcloneView](https://rcloneview.com/support/blog/migrate-icloud-drive-to-google-drive-rcloneview)

<CloudSupportGrid />
