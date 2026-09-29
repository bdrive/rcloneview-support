---
slug: fix-put-io-sync-errors-rcloneview
title: "Solucionar errores de sincronización de Put.io — diagnostica y resuelve con RcloneView"
authors:
  - kai
description: "Soluciona errores de sincronización de Put.io con RcloneView: reautoriza OAuth, ajusta las transferencias, lee el historial de trabajos y los registros, y verifica los resultados con Folder Compare."
keywords:
  - solucionar errores de sincronización put.io
  - error de autenticación put.io
  - fallo de transferencia put.io
  - errores putio rclone
  - RcloneView put.io
  - reautorizar oauth put.io
  - solución de problemas de sincronización en la nube
  - fallo de descarga put.io
  - depuración de registros rclone
  - sincronización put.io GUI
tags:
  - RcloneView
  - troubleshooting
  - tips
  - putio
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar errores de sincronización de Put.io — diagnostica y resuelve con RcloneView

> Repasa las causas habituales de las transferencias fallidas de Put.io, desde una autorización caducada hasta un exceso de concurrencia, con las herramientas integradas en RcloneView.

Cuando una sincronización de Put.io se detiene a medias, suele quedar la duda: ¿fue el inicio de sesión, la red o la configuración del trabajo? RcloneView reúne las pruebas en un solo lugar. La pestaña Transferring, Job History y el visor de registros muestran cada uno una parte distinta de lo ocurrido, y Folder Compare indica qué sigue faltando después.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Empieza por la autorización

Put.io se conecta mediante OAuth en el navegador. Si un trabajo falla de inmediato con un mensaje de autenticación o de permisos, la autorización almacenada es la primera sospechosa. Abre **Remote Manager** desde la pestaña Remote, edita el remoto de Put.io y repite el inicio de sesión en el navegador. Asegúrate de iniciar sesión con la misma cuenta de Put.io que contiene tus archivos, ya que una segunda cuenta en el mismo navegador es una causa habitual de listados vacíos.

<img src="/support/images/en/blog/new-remote.png" alt="Reautorización de un remoto de Put.io en RcloneView" class="img-large img-center" />

Tras reautorizar, actualiza el panel de Put.io con F5 (Cmd+R en macOS) y confirma que tus carpetas se listan correctamente antes de volver a ejecutar cualquier trabajo.

## Lee el historial de trabajos y los registros

Cuando un trabajo falla a mitad de camino, abre **Job History**. Cada ejecución registra su tipo de ejecución, hora de inicio, tiempo empleado, estado (Completed, Errored o Canceled), tamaño total, velocidad y número de archivos. Comparar una ejecución fallida con una anterior correcta muestra si falló pronto, lo que apunta a las credenciales, o tarde, lo que apunta a problemas de red o de volumen.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History con ejecuciones de Put.io con error y completadas" class="img-large img-center" />

Para más detalles, activa el registro en archivo en **Settings > Embedded Rclone**, establece el nivel de registro en DEBUG y haz clic en Restart Embedded Rclone. Reproduce el fallo y lee en la pestaña de registro el archivo afectado y el texto del error. La pestaña Terminal también te permite ejecutar `rclone about "putio:"` (con el nombre de tu propio remoto) para confirmar que el remoto responde.

## Ajusta la configuración del trabajo

Los fallos de transferencia en servicios remotos suelen ser autoinfligidos. En Advanced Settings del asistente de sincronización, reduce **Number of file transfers** y **Number of equality checkers**; para backends lentos se recomienda mantener los checkers en 4 o menos. Deja **Retry entire sync if fails** en su valor predeterminado de 3 para que las interrupciones breves se recuperen solas. Si el problema son los archivos muy grandes, usa el filtro de tamaño máximo de archivo para dividir el trabajo en una primera pasada con archivos más pequeños y otra aparte para el resto.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Ejecución de un trabajo de sincronización de Put.io tras ajustar la configuración" class="img-large img-center" />

## Confirma qué falta

Después de volver a ejecutar, abre **Compare** con Put.io en un lado y tu destino en el otro. Los archivos Left-only son los que nunca llegaron, y **Copy right** envía solo esos. RcloneView ofrece esto con la licencia FREE, junto con montaje y sincronización, así que puedes completar la recuperación sin actualizar.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare mostrando los archivos que aún faltan en el destino" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Reautoriza el remoto de Put.io en Remote Manager y actualiza el listado.
3. Revisa Job History y activa el registro DEBUG si la causa no es evidente.
4. Reduce la concurrencia, vuelve a ejecutar y usa Compare para copiar lo que quede.

Leer primero las pruebas convierte un fallo vago en un ajuste concreto y corregible.

---

**Guías relacionadas:**

- [Gestionar el almacenamiento de Put.io](https://rcloneview.com/support/blog/manage-put-io-cloud-sync-backup-rcloneview)
- [Migrar Put.io a Google Drive](https://rcloneview.com/support/blog/migrate-put-io-to-google-drive-rcloneview)
- [Solucionar errores de sincronización en la nube por token OAuth caducado](https://rcloneview.com/support/blog/fix-oauth-token-expired-cloud-sync-rcloneview)

<CloudSupportGrid />
