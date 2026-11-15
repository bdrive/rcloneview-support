---
slug: fix-google-docs-sheets-sync-errors-rcloneview
title: "Soluciona los problemas de sincronización de Google Docs y Sheets — gestiona archivos nativos con RcloneView"
authors:
  - casey
description: "¿Google Docs, Sheets y Slides se vuelven a copiar o aparecen como diferentes? Descubre por qué los archivos nativos se comportan de otra forma y cómo gestionarlos en los trabajos de sincronización de RcloneView."
keywords:
  - errores de sincronización de google docs
  - problemas de copia de seguridad de google sheets
  - sincronizar archivos nativos de google drive
  - google docs export rclone
  - filtro google docs rcloneview
  - copia de seguridad google drive docx xlsx
  - formatos de exportación rclone drive
  - solucionar sincronización google drive rcloneview
  - copia de seguridad archivos google workspace
tags:
  - RcloneView
  - troubleshooting
  - tips
  - google-drive
  - filters
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Soluciona los problemas de sincronización de Google Docs y Sheets — gestiona archivos nativos con RcloneView

> Google Docs, Sheets y Slides no son archivos corrientes, y un trabajo de copia de seguridad que ignore esa diferencia te seguirá dando sorpresas.

Haces una copia de seguridad de Google Drive en un NAS o en otra nube y el trabajo termina — pero los Docs y Sheets aparecen como archivos de Word y Excel, Folder Compare los marca como diferentes cada vez, o vuelven a aparecer en la lista de copia en la siguiente ejecución. Nada de esto significa que la transferencia esté rota. RcloneView ejecuta estos trabajos mediante rclone, y entender cómo trata rclone los documentos nativos de Google te permite elegir el comportamiento que realmente quieres.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué los archivos nativos de Google se comportan de otra forma

Un Google Doc vive dentro de los editores de Google; no hay ningún archivo binario almacenado detrás. Cuando rclone copia uno desde Google Drive a un destino que no es de Google, exporta el documento a un formato descargable — por defecto, formatos de Office como `.docx`, `.xlsx` y `.pptx`.

Esa conversión tiene efectos secundarios. Drive no informa de un tamaño fijo para los documentos nativos, así que las comparaciones por tamaño no pueden emparejarlos con la copia exportada. Drive tampoco guarda un hash MD5 para ellos, por lo que activar la suma de verificación en un trabajo de sincronización tampoco puede verificarlos. El resultado es un conjunto de archivos que pueden parecer "diferentes" en cada comprobación.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare showing Google Docs flagged as different files" class="img-large img-center" />

## Opción 1: excluir los Docs nativos de las copias de seguridad de archivos

Si tu equipo solo necesita respaldar archivos subidos — PDF, imágenes, vídeos — la solución más limpia es dejar fuera los documentos nativos. En el Step 3 del asistente de sincronización, activa el filtro predefinido **Google Docs**. El trabajo se centrará entonces en los archivos normales y dejará de volver a listar documentos que no puede comparar.

Combínalo con **Dry Run** antes de la primera ejecución real. La vista previa enumera exactamente qué archivos se copiarán, para que confirmes que Docs y Sheets ya no están en la cola.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Google Drive sync job with the Google Docs filter applied" class="img-large img-center" />

## Opción 2: conservar las copias exportadas a propósito

A veces las copias exportadas son precisamente el objetivo — una gestoría puede querer archivar cada hoja de cálculo como `.xlsx` en un NAS para que se abra sin una cuenta de Google. En ese caso, mantén los archivos nativos en el trabajo y trata las copias convertidas como el archivo histórico.

Puedes cambiar el formato de exportación mediante flags de rclone. En Settings, el campo **Global Rclone Flags** acepta flags adicionales como `--drive-export-formats` (por ejemplo, `pdf` para archivos de solo lectura). Prueba el flag primero en una carpeta pequeña con Dry Run, porque se aplica a todos los trabajos que afectan a Google Drive.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring a recurring Google Drive export job in RcloneView" class="img-large img-center" />

## Comprueba los resultados en Job History

Después de cada ejecución, abre Job History y revisa el estado, el número de archivos y el tamaño total. Si las cifras varían de forma inesperada entre ejecuciones, revisa las reglas de filtro del Step 3.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Google Drive job results in Job History" class="img-large img-center" />

## Primeros pasos

A diferencia de las herramientas que solo montan, RcloneView también sincroniza y compara carpetas — con la FREE License.

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Conecta Google Drive mediante el inicio de sesión OAuth en el navegador.
3. Decide si los Docs nativos deben excluirse con el filtro Google Docs o exportarse como archivos de Office.
4. Previsualiza el trabajo con Dry Run, ejecútalo y confirma el resultado en Job History.

Cuando los archivos nativos se gestionan de forma deliberada, tus copias de seguridad de Google Drive dejan de producir falsas alarmas.

---

**Guías relacionadas:**

- [Soluciona errores de sincronización de Google Drive — carpetas que faltan, trabajos fallidos y listados vacíos resueltos con RcloneView](https://rcloneview.com/support/blog/fix-google-drive-sync-errors-rcloneview)
- [Reglas de filtro de RcloneView: excluye carpetas y tipos de archivo para sincronizaciones más rápidas y limpias](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Vista previa con Dry Run — prueba la sincronización en la nube antes de aplicar cambios en RcloneView](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)

<CloudSupportGrid />
