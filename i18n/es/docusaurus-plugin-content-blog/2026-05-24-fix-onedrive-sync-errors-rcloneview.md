---
slug: fix-onedrive-sync-errors-rcloneview
title: "Corrige errores de sincronización de OneDrive — Cómo solucionarlos con RcloneView"
authors:
  - tayson
description: "Diagnostica y corrige errores comunes de sincronización de Microsoft OneDrive en RcloneView — desde tokens OAuth caducados y límites de tasa hasta transferencias detenidas y discrepancias de checksum."
keywords:
  - onedrive sync errors rcloneview
  - fix onedrive sync issues
  - onedrive rate limit error rclone
  - onedrive authentication expired rcloneview
  - microsoft onedrive transfer stalled
  - fix onedrive connection rcloneview
  - onedrive backup errors troubleshoot
  - cloud sync troubleshooting guide
  - onedrive rclone gui fix
  - resolve onedrive sync failures
tags:
  - RcloneView
  - onedrive
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corrige errores de sincronización de OneDrive — Cómo solucionarlos con RcloneView

> Los errores de sincronización de OneDrive en RcloneView normalmente se deben a una de tres causas — tokens OAuth caducados, límites de tasa de la API o ajustes de transferencia mal configurados — y cada una tiene una solución clara dentro de la aplicación.

Microsoft OneDrive es una de las plataformas de almacenamiento en la nube empresariales más utilizadas, pero el comportamiento de su API puede producir ocasionalmente errores de sincronización que dejan las transferencias detenidas, incompletas o que fallan de forma silenciosa. RcloneView te ofrece un entorno estructurado para diagnosticar estos problemas mediante registros con marca de tiempo, monitoreo de transferencias en tiempo real y controles de trabajo detallados — sin necesidad de recurrir a la línea de comandos.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Revisa primero la pestaña de registro (Log)

Antes de cambiar cualquier ajuste, abre la pestaña **Log** en la vista de información en la parte inferior de RcloneView. Cada operación de transferencia y sincronización escribe aquí entradas con marca de tiempo, incluidos los códigos de error devueltos por la API de OneDrive. Un mensaje `AccessDenied` o `InvalidAuthenticationToken` indica un token OAuth caducado; un mensaje `429 Too Many Requests` indica un límite de tasa; y un error `EOF` o de conexión suele señalar una interrupción de red en lugar de un problema específico de OneDrive.

Identificar la clase exacta de error antes de hacer cambios ahorra tiempo — la solución para un problema de token es completamente distinta a la solución para un límite de tasa.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history and log tab in RcloneView for diagnosing OneDrive sync errors" class="img-large img-center" />

## Vuelve a autenticarte cuando caduque el token OAuth

Las conexiones de OneDrive en RcloneView usan autenticación OAuth por navegador. El token de acceso se renueva automáticamente durante las sesiones activas, pero si un remoto ha estado inactivo durante un período prolongado, el token puede caducar por completo — lo que provoca que todos los trabajos de sincronización dirigidos a esa cuenta de OneDrive fallen con errores de autenticación.

La solución es sencilla: ve a la pestaña **Remote** > **Remote Manager**, localiza el remoto de OneDrive y haz clic en **Edit**. RcloneView abrirá una ventana del navegador para que inicies sesión de nuevo y se emita un token nuevo. Una vez guardado, vuelve a ejecutar el trabajo fallido. No se necesitan cambios en la configuración del trabajo — solo la renovación de las credenciales.

<img src="/support/images/en/blog/new-remote.png" alt="Editing a OneDrive remote in RcloneView Remote Manager to refresh OAuth token" class="img-large img-center" />

## Reduce las transferencias simultáneas para los errores de límite de tasa

OneDrive aplica límites de tasa de API por usuario, y los trabajos configurados con un número elevado de transferencias de archivos simultáneas pueden provocar respuestas `429` — causando fallos parciales o reintentos que ralentizan significativamente el trabajo en general. El número de reintentos predeterminado (3 intentos) a menudo enmascara los problemas de límite de tasa, haciendo que parezcan errores intermitentes.

Abre el trabajo en **Job Manager** y haz clic en **Edit**. En el paso 2 (Advanced Settings), reduce el **Number of file transfers** desde el valor predeterminado hasta 2 o 4. Si el trabajo utiliza un número elevado de verificadores de igualdad (equality checkers), reduce también ese valor — la recomendación oficial es 4 o menos para backends que responden lentamente a las solicitudes de metadatos. Guarda el trabajo y vuelve a ejecutarlo.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Editing OneDrive job settings to reduce concurrent transfers in RcloneView" class="img-large img-center" />

## Usa Dry Run antes de volver a ejecutar un trabajo fallido

Una sincronización parcial puede dejar la carpeta de destino en un estado inconsistente — algunos archivos transferidos, otros no. Antes de volver a ejecutar un trabajo fallido, usa el modo **dry run** para previsualizar exactamente qué archivos se copiarán o eliminarán. Dry run no realiza ningún cambio; genera una lista completa de las operaciones planificadas para que puedas verificar que el trabajo se completará correctamente desde donde quedó.

En Job Manager, selecciona el trabajo y elige **Dry Run** entre las opciones de ejecución. Revisa la lista de archivos con atención, especialmente si la carpeta de origen cambió mientras se ejecutaba el trabajo anterior.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Dry run preview of OneDrive sync job in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abre la pestaña **Log** después de un trabajo fallido para identificar la clase específica de error antes de hacer cambios.
3. Para errores de autenticación, edita el remoto de OneDrive en Remote Manager y vuelve a autenticarte a través del navegador.
4. Para errores de límite de tasa, reduce las transferencias de archivos simultáneas a 2–4 en el paso 2 (Advanced Settings) del trabajo, y luego vuelve a ejecutarlo primero con una vista previa de dry run.

La mayoría de los errores de sincronización de OneDrive se resuelven en minutos una vez que has hecho coincidir la solución con la causa raíz — el historial de trabajos y la salida de registro de RcloneView te dan todo lo que necesitas para lograrlo rápidamente.

---

**Guías relacionadas:**

- [Corrige el progreso detenido en transferencias en la nube — Cómo solucionarlo con RcloneView](https://rcloneview.com/support/blog/fix-cloud-transfer-stalled-progress-rcloneview)
- [Migra de OneDrive a Amazon S3 — Transfiere archivos con RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-amazon-s3-rcloneview)
- [Sincroniza Backblaze B2 con OneDrive — Copia de seguridad en la nube con RcloneView](https://rcloneview.com/support/blog/sync-backblaze-b2-to-onedrive-rcloneview)

<CloudSupportGrid />
