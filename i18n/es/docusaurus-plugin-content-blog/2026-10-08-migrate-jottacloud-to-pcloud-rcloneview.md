---
slug: migrate-jottacloud-to-pcloud-rcloneview
title: "Migra Jottacloud a pCloud — transfiere archivos con RcloneView"
authors:
  - casey
description: "Mueve archivos de Jottacloud a pCloud con RcloneView: conecta ambos remotos, previsualiza con Dry Run, ejecuta una transferencia de nube a nube y verifica con Folder Compare."
keywords:
  - migrar Jottacloud a pCloud
  - transferencia de Jottacloud a pCloud
  - migración de Jottacloud a pCloud
  - transferencia de nube a nube
  - RcloneView Jottacloud
  - RcloneView pCloud
  - mover archivos de Jottacloud
  - alternativa a Jottacloud
  - migración con rclone GUI
tags:
  - RcloneView
  - jottacloud
  - pcloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migra Jottacloud a pCloud — transfiere archivos con RcloneView

> RcloneView mueve una biblioteca de Jottacloud a pCloud con una transferencia de nube a nube que puedes previsualizar y verificar, en lugar de descargar y volver a subir todo manualmente.

Pasar de Jottacloud a pCloud suele significar años de fotos, documentos y archivos que nadie quiere descargar y subir a mano. RcloneView conecta ambos servicios como remotos y transfiere los datos entre ellos, de modo que puedes previsualizar, ejecutar y verificar el traslado desde una sola ventana.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta ambos remotos

Abre Remote > New Remote y añade Jottacloud; después añade pCloud. pCloud usa OAuth, así que se abre una ventana del navegador para iniciar sesión y el remoto se conecta automáticamente. Jottacloud se configura con el mismo asistente New Remote siguiendo sus indicaciones.

Abre cada remoto en su propio panel Explorer y navega por las carpetas raíz. Ver listados ambos lados confirma que las conexiones funcionan antes de mover ningún dato.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir remotos de Jottacloud y pCloud en RcloneView" class="img-large img-center" />

## Previsualiza la transferencia con Dry Run

Con Jottacloud a la izquierda y pCloud a la derecha, arrastra carpetas de un lado a otro para una copia rápida o crea un trabajo de sincronización para toda la biblioteca. Entre remotos distintos, arrastrar y soltar copia en lugar de mover, así que el origen permanece intacto hasta que decidas lo contrario.

Para una migración completa, crea el trabajo en el asistente de cuatro pasos, elige las carpetas de origen y destino y ejecuta primero un Dry Run. Muestra los archivos que se copiarían o eliminarían sin cambiar nada.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferencia de nube a nube de Jottacloud a pCloud en RcloneView" class="img-large img-center" />

## Ejecuta el trabajo y sigue el progreso

Inicia el trabajo y síguelo en la pestaña Transferring, que muestra el progreso, la velocidad y el número de archivos. Para una biblioteca grande, mantén las transferencias moderadas en el paso 2 y deja "Retry entire sync if fails" en 3 para que breves interrupciones de red no pongan fin a la ejecución.

Si planeas migrar por fases, usa el paso de filtrado para limitar por carpeta, antigüedad de archivo o tipos predefinidos como Image o Document.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Supervisión de la transferencia de Jottacloud a pCloud en RcloneView" class="img-large img-center" />

## Verifica antes de cancelar nada

Abre Compare con Jottacloud y pCloud lado a lado. Muestra los archivos solo a la izquierda y los diferentes para encontrar lo que no llegó y copia solo esos elementos. Revisa Job History para ver el estado final antes de decidir dar de baja la cuenta anterior.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verificación de la migración con Folder Compare en RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade Jottacloud y pCloud como remotos y navega por ambos.
3. Crea un trabajo de sincronización o copia de Jottacloud a pCloud y ejecuta un Dry Run.
4. Ejecuta el trabajo y confirma con Folder Compare y Job History.

Una transferencia previsualizada y verificada te permite cambiar de proveedor de almacenamiento sin poner en riesgo los archivos que ya tienes.

---

**Guías relacionadas:**

- [Migra Jottacloud a Google Drive con RcloneView](https://rcloneview.com/support/blog/migrate-jottacloud-to-google-drive-rcloneview)
- [Migra pCloud a Dropbox con RcloneView](https://rcloneview.com/support/blog/migrate-pcloud-to-dropbox-rcloneview)
- [Gestiona el almacenamiento de Jottacloud: sincroniza y haz copias de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
