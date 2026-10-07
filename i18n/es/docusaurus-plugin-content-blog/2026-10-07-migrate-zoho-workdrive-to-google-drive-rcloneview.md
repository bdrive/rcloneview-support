---
slug: migrate-zoho-workdrive-to-google-drive-rcloneview
title: "Migrar Zoho WorkDrive a Google Drive — Transfiere archivos con RcloneView"
authors:
  - kai
description: "Migra Zoho WorkDrive a Google Drive con RcloneView: elige tu región, conecta ambos remotos, haz un Dry Run, copia de nube a nube y verifica los resultados."
keywords:
  - migrar Zoho WorkDrive a Google Drive
  - transferencia de Zoho WorkDrive
  - exportación de Zoho WorkDrive
  - mover archivos de Zoho a Google Drive
  - migración de nube a nube
  - RcloneView
  - rclone GUI
  - copia de seguridad de Zoho WorkDrive
  - sincronización de Google Drive
  - comparación de carpetas
tags:
  - RcloneView
  - zoho
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar Zoho WorkDrive a Google Drive — Transfiere archivos con RcloneView

> Copia las carpetas de equipo de Zoho WorkDrive a Google Drive directamente entre nubes, con una vista previa y una pasada de verificación.

Cuando una empresa pasa de la suite de Zoho a Google Workspace, las carpetas de equipo de WorkDrive tienen que ir a algún sitio. Descargarlo todo y volver a subirlo es lento y difícil de auditar. RcloneView conecta ambos servicios y transfiere los archivos de nube a nube, de modo que puedes previsualizar, ejecutar y verificar la migración desde una sola ventana.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Zoho WorkDrive y Google Drive

Zoho WorkDrive necesita un ajuste adicional: debes seleccionar tu **Region** al crear el remoto, y debe coincidir con el centro de datos de tu cuenta de Zoho. Google Drive usa el inicio de sesión OAuth en el navegador. Abre la pestaña Remote, haz clic en **New Remote** y añade cada servicio por turno.

La sincronización básica y la comparación de carpetas están disponibles con la licencia FREE.

<img src="/support/images/en/blog/new-remote.png" alt="Creación de remotos de Zoho WorkDrive y Google Drive" class="img-large img-center" />

## Planificar la asignación de carpetas

Abre dos paneles del Explorer, con WorkDrive a la izquierda y Google Drive a la derecha. Recorre las carpetas de equipo y decide dónde debe ir cada una. Un equipo de finanzas con 150 GB de informes trimestrales podría asignarse a una carpeta de unidad compartida dedicada, mientras que los archivos personales van a Mi unidad.

Usa Get Size en las carpetas grandes para estimar el tiempo de transferencia. En el paso de filtrado del asistente de Sync, excluye las carpetas o los tipos de archivo que no necesites, como archivos antiguos, mediante la antigüedad máxima de archivo o filtros personalizados.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Zoho WorkDrive y Google Drive lado a lado" class="img-large img-center" />

## Primero Dry Run, después transferencia

Crea un trabajo Copy de WorkDrive a Google Drive y ejecuta primero un **Dry Run**. Muestra los archivos que se copiarían sin cambiar nada. Cuando la vista previa sea correcta, ejecuta el trabajo y sigue el progreso en la pestaña Transferring.

Si se producen errores, el trabajo reintenta hasta el número configurado, y Job History registra el estado, el tamaño y el número de archivos de cada ejecución. Al volver a ejecutarlo solo se copia lo que falta.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Ejecución del trabajo de migración en RcloneView" class="img-large img-center" />

## Verificar y conservar un registro

Abre **Compare** desde la pestaña Home para comprobar WorkDrive frente a Google Drive. Filtra los archivos que solo están a la izquierda para encontrar lo que no se transfirió y cópialos. Job History te ofrece un registro con marca de tiempo que puedes conservar para la aprobación de la migración.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History de la migración de Zoho WorkDrive" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade los remotos de Zoho WorkDrive (elige la Region correcta) y Google Drive.
3. Crea un trabajo Copy y ejecuta un Dry Run para previsualizar la transferencia.
4. Ejecuta el trabajo y verifica con Folder Compare antes de dar de baja WorkDrive.

Mantener el origen intacto hasta que la comparación esté limpia hace que el cambio sea de bajo riesgo.

---

**Guías relacionadas:**

- [Gestionar la sincronización en la nube de Zoho WorkDrive](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [Sincronizar Zoho WorkDrive con OneDrive](https://rcloneview.com/support/blog/sync-zoho-workdrive-to-onedrive-rcloneview)
- [Solucionar errores de sincronización de Zoho WorkDrive](https://rcloneview.com/support/blog/fix-zoho-workdrive-sync-errors-rcloneview)

<CloudSupportGrid />
