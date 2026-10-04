---
slug: migrate-google-drive-to-mega-rcloneview
title: "Migrar Google Drive a Mega — Transfiere archivos con RcloneView"
authors:
  - morgan
description: "Migra Google Drive a Mega con RcloneView: copia entre nubes, vista previa con simulación, filtros y verificación en una sola GUI, sin descargas manuales."
keywords:
  - migrar Google Drive a Mega
  - transferencia de Google Drive a Mega
  - mover archivos a Mega
  - RcloneView
  - transferencia entre nubes
  - almacenamiento en la nube Mega
  - migración de Google Drive
  - rclone GUI
  - herramienta de migración a la nube
tags:
  - RcloneView
  - google-drive
  - mega
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar Google Drive a Mega — Transfiere archivos con RcloneView

> Mueve una biblioteca completa de Google Drive a Mega sin descargar y volver a subir nada manualmente.

Cambiar de Google Drive a Mega suele implicar exportar archivos comprimidos, esperar las descargas y volver a subirlo todo. RcloneView conecta ambos servicios como remotos y copia entre ellos desde una ventana de dos paneles, con una simulación (Dry Run) para previsualizar el resultado antes de mover un solo archivo. RcloneView monta y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar ambos remotos

Google Drive usa OAuth: RcloneView abre tu navegador, inicias sesión y el remoto se crea automáticamente. Mega usa correo electrónico y contraseña, que se introducen directamente en el cuadro de diálogo New Remote. Cuando ambos remotos aparecen en Remote Manager, puedes abrirlos uno junto al otro en dos paneles del Explorer.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir remotos de Google Drive y Mega en RcloneView" class="img-large img-center" />

Piensa en un freelance con 300 GB de carpetas de proyectos repartidas en Drive. Explorar ambas cuentas en paneles contiguos le permite confirmar las carpetas de origen y la estructura de destino antes de empezar.

## Copiar entre nubes

Arrastra una carpeta del panel de Google Drive al panel de Mega. Arrastrar entre remotos distintos realiza una copia, así que tus datos de Drive quedan intactos hasta que decidas lo contrario. Para trabajos más grandes, crea un trabajo Copy en el Job Manager, que ofrece supervisión del progreso y un historial guardado.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferencia entre nubes de Google Drive a Mega" class="img-large img-center" />

Si no quieres incluir archivos de Google Docs en la transferencia, el filtro predefinido "Google Docs" del paso de filtrado los excluye. También puedes limitar el tamaño o la antigüedad de los archivos para mover solo los datos relevantes.

## Previsualizar y supervisar el trabajo

Ejecuta primero una simulación (Dry Run). Muestra los archivos que se copiarían, de modo que puedes detectar una carpeta de origen equivocada antes de que te cueste horas. Después inicia el trabajo y observa la pestaña Transferring para ver la velocidad, el número de archivos y el progreso. Si las ejecuciones largas dan problemas, puedes ajustar el número de transferencias de archivos simultáneas en Advanced Settings.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Supervisar el progreso de la transferencia en RcloneView" class="img-large img-center" />

## Verificar el resultado

Cuando termine el trabajo, abre Folder Compare en las carpetas de Drive y Mega. Resalta los archivos solo a la izquierda, solo a la derecha y diferentes, y puedes copiar lo que falte directamente desde la vista de comparación. Job History conserva el estado, la duración y el tamaño de cada ejecución.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare entre Google Drive y Mega" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** [rcloneview.com](https://rcloneview.com/src/download.html) desde este enlace.
2. Añade Google Drive (OAuth) y Mega (correo y contraseña) desde New Remote.
3. Abre ambos remotos en dos paneles y ejecuta una simulación en una carpeta de prueba.
4. Crea un trabajo Copy para toda la biblioteca y verifícalo con Folder Compare.

Una migración visual y sin scripts mantiene tu Drive intacto hasta que estés seguro de que Mega lo tiene todo.

---

**Guías relacionadas:**

- [Migrar Mega a Google Drive](https://rcloneview.com/support/blog/migrate-mega-to-google-drive-onedrive-rcloneview)
- [Gestionar el almacenamiento en la nube Mega](https://rcloneview.com/support/blog/manage-mega-cloud-sync-backup-rcloneview)
- [Dry Run: previsualiza la sincronización antes de transferir](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
