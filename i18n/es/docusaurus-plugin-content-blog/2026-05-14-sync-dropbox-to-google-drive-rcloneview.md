---
slug: sync-dropbox-to-google-drive-rcloneview
title: "Sincronizar Dropbox con Google Drive — Automatiza copias de seguridad en la nube con RcloneView"
authors:
  - casey
description: "Aprende a sincronizar Dropbox con Google Drive automáticamente con RcloneView. Configura trabajos de copia de seguridad recurrentes de nube a nube con programación, filtrado y monitoreo de transferencias en vivo."
keywords:
  - sync Dropbox to Google Drive
  - Dropbox Google Drive sync
  - Dropbox to Google Drive backup
  - cloud to cloud sync RcloneView
  - automate Dropbox Google Drive transfer
  - rclone Dropbox Google Drive GUI
  - Dropbox cloud backup solution
  - recurring cloud sync job
  - cross-cloud backup automation
  - RcloneView cloud sync tool
tags:
  - dropbox
  - google-drive
  - cloud-to-cloud
  - sync
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincronizar Dropbox con Google Drive — Automatiza copias de seguridad en la nube con RcloneView

> Mantén tu Dropbox y Google Drive sincronizados automáticamente, sin scripts, terminales ni costosos servicios de sincronización de terceros.

Muchos equipos dependen de Dropbox para compartir archivos en el día a día, pero una estrategia de nube inteligente implica mantener una copia redundante en un segundo proveedor como Google Drive. Ya sea que estés protegiéndote contra eliminaciones accidentales, preparándote para una migración de espacio de trabajo o cumpliendo con una política de copia de seguridad en dos nubes, RcloneView te ofrece una canalización programada y controlada por GUI para sincronizar Dropbox con Google Drive de forma confiable.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta Dropbox y Google Drive como remotos

Antes de programar cualquier trabajo de sincronización, RcloneView necesita conexiones autorizadas con ambos proveedores. Abre la aplicación, ve a la pestaña **Remote**, y haz clic en **New Remote**. Selecciona **Dropbox** de la lista de proveedores y completa el inicio de sesión OAuth en el navegador; no se requiere clave de API. Repite el proceso para **Google Drive**, autenticándote con tu cuenta de Google.

Ambos remotos aparecen ahora en el Remote Manager y son accesibles desde cualquier panel del Explorer. Puedes navegar tus carpetas de Dropbox en el panel izquierdo y tu destino de Google Drive en el derecho, lo que facilita identificar el origen y el destino antes de crear un trabajo.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Dropbox and Google Drive remotes in RcloneView" class="img-large img-center" />

Para equipos que usan **Dropbox for Business**, configura el parámetro `dropbox_business = true` durante la configuración del remoto. Para **Google Shared Drives**, habilita la opción de unidad compartida para que las carpetas del equipo sean accesibles en el explorador de remotos.

## Crea un trabajo de sincronización con programación

Con ambos remotos conectados, ve a la pestaña **Home** y haz clic en **Sync** para abrir el asistente del trabajo. En el Paso 1, selecciona tu carpeta de Dropbox como origen y una carpeta de Google Drive como destino. Dale al trabajo un nombre descriptivo como `dropbox-to-gdrive-backup`.

En el Paso 2, ajusta el número de transferencias concurrentes según la velocidad de tu conexión. Habilitar la **verificación de checksum** asegura que la integridad del archivo se confirme byte por byte, no solo por tamaño. El Paso 3 te permite filtrar por tipo de archivo, por ejemplo, excluyendo archivos `.tmp` o `.lnk` que Dropbox a veces deja en carpetas de equipo sincronizadas.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting up a scheduled Dropbox to Google Drive sync job in RcloneView" class="img-large img-center" />

El Paso 4 es donde ocurre la automatización. Con una **licencia PLUS**, configura una programación en estilo cron; por ejemplo, cada noche a las 2:00 AM, para que el contenido nuevo de Dropbox se refleje automáticamente en Google Drive. Usa la expresión cron `0 2 * * *` para ejecución diaria o `0 2 * * 0` para sincronizar semanalmente los domingos. El botón **Simulate schedule** muestra una vista previa de las próximas ejecuciones antes de guardar.

## Monitorea transferencias en vivo y revisa el historial

Una vez que tu trabajo se ejecuta, la pestaña **Transferring** en la parte inferior de la aplicación muestra el progreso de la transferencia en vivo: cantidad de archivos, velocidad de transferencia, datos totales movidos, y un botón de cancelar si necesitas detener la ejecución a mitad de camino. Para una agencia creativa que sincroniza 80 GB de archivos de proyectos de Dropbox a Google Drive, puedes ver el estado de cada archivo actualizarse a medida que las transferencias se completan.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring for Dropbox to Google Drive sync" class="img-large img-center" />

Después de cada ejecución, la vista **Job History** registra el tipo de ejecución (manual o programada), duración, bytes totales transferidos, velocidad y estado final: Completed, Errored o Canceled. Si una ejecución encuentra un límite temporal de tasa de la API de Dropbox o Google Drive, el mecanismo de reintento integrado (predeterminado: 3 intentos) maneja los fallos transitorios sin intervención manual.

## Verifica los resultados de la sincronización con Folder Compare

Después de la sincronización completa inicial, usa la herramienta **Folder Compare** de RcloneView para validar que ambos lados coincidan. Lánzala desde la pestaña Home, selecciona tu origen de Dropbox y tu destino de Google Drive, y luego haz clic en Compare. Los resultados muestran archivos solo a la izquierda (aún no sincronizados), archivos solo a la derecha (agregados manualmente a Drive), archivos idénticos y archivos con tamaño no coincidente.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare verifying Dropbox and Google Drive are in sync" class="img-large img-center" />

Ejecuta un **Dry Run** antes de la primera sincronización en vivo para previsualizar exactamente qué archivos se copiarán o eliminarán. Esto es especialmente importante al sincronizar una carpeta de equipo de Dropbox activa; querrás confirmar el alcance antes de que cualquier cambio afecte el destino de Google Drive.

## Cómo empezar

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agrega tu remoto de Dropbox mediante inicio de sesión OAuth (pestaña Remote > New Remote).
3. Agrega tu remoto de Google Drive de la misma manera.
4. Crea un trabajo de sincronización que apunte de Dropbox a Google Drive con la programación que prefieras.

Con una canalización adecuada de Dropbox a Google Drive en marcha, tus datos viven en dos nubes, protegiéndote contra interrupciones del proveedor, eliminaciones accidentales y sorpresas de facturación.

---

**Guías relacionadas:**

- [Migra de Dropbox a Google Drive con RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-google-drive-with-rcloneview)
- [Gestiona Dropbox — Sincronización y copia de seguridad en la nube con RcloneView](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Sincroniza Google Drive con Dropbox con RcloneView](https://rcloneview.com/support/blog/sync-google-drive-to-dropbox-rcloneview)

<CloudSupportGrid />
