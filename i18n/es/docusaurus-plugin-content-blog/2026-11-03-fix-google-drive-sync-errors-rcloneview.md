---
slug: fix-google-drive-sync-errors-rcloneview
title: "Solucionar errores de sincronización de Google Drive — carpetas que faltan, trabajos fallidos y listados vacíos con RcloneView"
authors:
  - steve
description: "Solucione errores de sincronización de Google Drive como carpetas compartidas que faltan, listados de Computers vacíos y trabajos con errores usando los registros de RcloneView y Folder Compare."
keywords:
  - solucionar errores de sincronización de Google Drive
  - error de rclone en Google Drive
  - Google Drive Compartido conmigo no aparece
  - carpeta Computers de Google Drive vacía
  - fallo de sincronización de Google Drive
  - RcloneView Google Drive
  - filtro de sincronización de Google Docs
  - solución de problemas de Google Drive
  - solución de problemas de sincronización en la nube
  - Google Drive GUI
tags:
  - RcloneView
  - google-drive
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar errores de sincronización de Google Drive — carpetas que faltan, trabajos fallidos y listados vacíos con RcloneView

> Muchos problemas de sincronización de Google Drive se deben a un ajuste que falta, un inicio de sesión caducado o un filtro, y RcloneView le ayuda a descubrir cuál es.

Un trabajo de Google Drive que termina en Errored, o un remoto que no muestra lo que esperaba, rara vez es un misterio cuando puede ver los registros. Las causas habituales son carpetas compartidas que necesitan un ajuste concreto, equipos con copia de seguridad que necesitan un ID de carpeta y archivos de Google Docs que se comportan de forma distinta a los archivos normales. RcloneView reúne en un solo lugar los ajustes del remoto, el historial de trabajos y los registros, para que pueda acotar el problema con rapidez.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Carpetas que no aparecen

Si los archivos compartidos con usted no aparecen en el listado raíz, es probable que el remoto necesite el ajuste `shared_with_me = true`, que le ofrece la vista Google Drive Shared with Me. Los equipos con copia de seguridad de Drive for desktop son un caso aparte: el remoto Google Drive Computers necesita `root_folder_id` configurado con el ID del equipo.

Abra Remote Manager desde la pestaña Remote, edite el remoto y compruebe estos valores. Después, recargue el panel Explorer con F5.

<img src="/support/images/en/blog/new-remote.png" alt="Edición de los ajustes del remoto de Google Drive en RcloneView Remote Manager" class="img-large img-center" />

## Inicio de sesión caducado y autorización fallida

Google Drive se conecta mediante OAuth en el navegador. Si todas las solicitudes fallan con un error de autorización, edite el remoto e inicie sesión de nuevo para que se emita un token nuevo. Es una solución habitual cuando un remoto que funcionaba falla de repente.

Para los mensajes de cuota y límite de velocidad, consulte nuestras guías específicas sobre los límites de velocidad y la cuota de almacenamiento de Google Drive. En ambos casos, reducir el número de transferencias de archivos en el paso 2 del asistente de sincronización es un primer paso razonable.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History mostrando una sincronización de Google Drive con errores en RcloneView" class="img-large img-center" />

## Lea los registros para ver el error exacto

Abra Job History para ver si un trabajo falló de inmediato o a mitad de ejecución. Para obtener más detalle, vaya a Settings > Embedded Rclone, active el registro de rclone, establezca el nivel en DEBUG y haga clic en Restart Embedded Rclone. Reproduzca el fallo y lea el registro: indica el archivo y el error. También puede ejecutar comandos como `rclone about "remote:"` en la pestaña Terminal integrada para confirmar la conectividad.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Ejecución de un trabajo de Google Drive después de corregir los ajustes" class="img-large img-center" />

## Gestione Google Docs y verifique los resultados

Google Docs, Sheets y Slides no son archivos normales, por lo que pueden verse diferentes tras una transferencia. El paso 3 del asistente de sincronización incluye un filtro predefinido de Google Docs si desea excluirlos. Tras una nueva ejecución, use Compare para revisar ambos lados: los archivos solo a la izquierda, solo a la derecha y diferentes muestran lo que aún requiere atención. Ejecute un Dry Run antes de cualquier sincronización que pueda eliminar archivos.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare verificando una sincronización de Google Drive" class="img-large img-center" />

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Compruebe si el remoto tiene `shared_with_me` o `root_folder_id` y vuelva a autorizar si es necesario.
3. Revise Job History y active el registro DEBUG para los trabajos con errores.
4. Ejecute un Dry Run, vuelva a ejecutar el trabajo y verifique con Folder Compare.

Con los ajustes, los registros y la comparación en una sola ventana, un trabajo de Drive que falla se convierte en una breve lista de comprobación.

---

**Guías relacionadas:**

- [Gestione el almacenamiento de Google Drive — sincronice y respalde archivos con RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Solucione los errores 403 de límite de velocidad de Google Drive con RcloneView](https://rcloneview.com/support/blog/fix-google-drive-403-rate-limit-errors-rcloneview)
- [Solucione el exceso de cuota de almacenamiento de Google Drive con RcloneView](https://rcloneview.com/support/blog/fix-google-drive-storage-quota-exceeded-rcloneview)

<CloudSupportGrid />
