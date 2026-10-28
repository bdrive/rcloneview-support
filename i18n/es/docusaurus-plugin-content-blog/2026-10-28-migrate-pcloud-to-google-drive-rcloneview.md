---
slug: migrate-pcloud-to-google-drive-rcloneview
title: "Migra pCloud a Google Drive — Transfiere archivos con RcloneView"
authors:
  - morgan
description: "Mueve archivos de pCloud a Google Drive con RcloneView: conecta ambos remotos, ejecuta un Dry Run, copia de nube a nube y verifica con Folder Compare."
keywords:
  - migrar pcloud a google drive
  - transferencia de pcloud a google drive
  - mover archivos de pcloud a google drive
  - migración de pcloud a google drive
  - transferencia de nube a nube
  - rcloneview pcloud
  - rcloneview google drive
  - migración alternativa a pcloud
  - transferir datos de pcloud
tags:
  - RcloneView
  - pcloud
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migra pCloud a Google Drive — Transfiere archivos con RcloneView

> Mueve una cuenta completa de pCloud a Google Drive sin tener que descargar primero todo a tu propio disco.

Los equipos que estandarizan en Google Workspace suelen heredar años de archivos guardados en pCloud. Descargarlos y volver a subirlos a mano es lento y propenso a errores. RcloneView conecta ambos servicios desde una sola ventana, copia de nube a nube y te permite verificar el resultado carpeta por carpeta antes de dar de baja la cuenta antigua.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta pCloud y Google Drive

Ambos servicios usan el inicio de sesión OAuth en el navegador en RcloneView, por lo que no hay claves de API que pegar. Abre la pestaña Remote, haz clic en New Remote, elige pCloud y aprueba el acceso en la ventana del navegador que se abre. Repite el proceso con Google Drive. Cuando ambos aparezcan en Remote Manager, ábrelos en dos paneles Explorer lado a lado: pCloud a la izquierda y Google Drive a la derecha.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir los remotos de pCloud y Google Drive en RcloneView" class="img-large img-center" />

Explora primero el árbol de pCloud y usa Get Size en tus carpetas de nivel superior. Un estudio de fotografía con 1,5 TB de carpetas de proyectos, por ejemplo, puede planificar la migración carpeta por carpeta en lugar de en un único trabajo gigante.

## Copia de nube a nube

Para un conjunto pequeño de carpetas, arrástralas del panel de pCloud al panel de Google Drive. Arrastrar entre remotos distintos realiza una Copy, por lo que tus originales de pCloud quedan intactos. Para una cuenta completa, crea un trabajo: abre el asistente de Sync, elige pCloud como origen y Google Drive como destino, y selecciona un trabajo de tipo Copy para que no se elimine nada en ninguno de los lados.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferencia de nube a nube de pCloud a Google Drive en RcloneView" class="img-large img-center" />

En Advanced Settings, un valor moderado de Number of file transfers es un buen punto de partida; Google Drive aplica límites de API, por lo que una concurrencia muy alta puede provocar reintentos. Deja "Retry entire sync if fails" en su valor predeterminado de 3 para que las caídas breves de red no terminen el trabajo.

## Dry Run, filtros y supervisión

Antes de la ejecución real, usa Dry Run para previsualizar qué archivos se copiarán. El paso Filtering te permite excluir basura como carpetas `.git/` o limitar por tamaño máximo de archivo y antigüedad, lo cual es útil cuando solo hay que mover proyectos recientes. Una vez iniciado el trabajo, la pestaña Transferring muestra el progreso, la velocidad y el número de archivos, y Job History guarda un registro de cada ejecución.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Revisión del historial del trabajo de pCloud a Google Drive en RcloneView" class="img-large img-center" />

## Verifica con Folder Compare

Cuando el trabajo termine, abre Compare con pCloud a la izquierda y Google Drive a la derecha. Filtra por archivos left-only para ver lo que no llegó y cópialo directamente desde la vista de comparación. RcloneView monta y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux, así que la misma herramienta cubre tanto el traslado como la comprobación.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare entre pCloud y Google Drive en RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade pCloud y Google Drive como remotos mediante New Remote.
3. Ejecuta un Dry Run en un trabajo Copy de pCloud a Google Drive y luego ejecútalo de verdad.
4. Usa Compare para confirmar que no quedan archivos left-only antes de cerrar la cuenta antigua.

Una copia por etapas y una comprobación visual convierten un cambio de cuenta arriesgado en una tarea rutinaria.

---

**Guías relacionadas:**

- [Sincroniza pCloud con Google Drive — Copia de seguridad en la nube con RcloneView](https://rcloneview.com/support/blog/sync-pcloud-to-google-drive-rcloneview)
- [Migra Google Drive a pCloud — Transfiere archivos con RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-pcloud-rcloneview)
- [Gestiona el almacenamiento de pCloud — Sincroniza y haz copias de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
