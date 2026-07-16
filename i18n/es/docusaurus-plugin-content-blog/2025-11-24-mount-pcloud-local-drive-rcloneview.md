---
slug: mount-pcloud-local-drive-rcloneview
title: "Monta pCloud como unidad local en Windows y macOS con RcloneView — Accede a tus archivos sin sincronizar"
authors:
  - tayson
description: "Monta pCloud como letra de unidad o volumen, explora archivos al instante sin sincronización completa y ajusta la configuración de caché para un acceso rápido y fiable con RcloneView."
keywords:
  - rcloneview
  - pcloud mount
  - cloud drive
  - vfs cache
  - windows
  - macos
  - cloud storage
  - rclone
  - multi cloud
  - drive letter
  - volume mount
  - file explorer
  - finder
  - scheduler
  - job history
  - transfer monitor
  - cache settings
  - offline access
  - read ahead
  - compare
  - sync
  - checksum
  - gui
  - cloud backup
  - mount manager
tags:
  - pcloud
  - mount
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Monta pCloud como unidad local en Windows y macOS con RcloneView — Accede a tus archivos sin sincronizar

> Olvídate de las sincronizaciones completas. Monta pCloud como unidad local con RcloneView, explora en el Explorador de archivos o Finder, y transmite archivos bajo demanda con la configuración de caché ajustada.

pCloud te ofrece almacenamiento en la nube flexible, pero copiar todo en cada máquina desperdicia tiempo y espacio en disco. Con RcloneView puedes montar pCloud como si fuera una letra de unidad o volumen local, obtener archivos bajo demanda y mantener el ancho de banda bajo control. Sin flags de CLI que memorizar; solo conecta, monta y listo.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## ¿Por qué montar en lugar de sincronizar?

- Ahorra espacio: explora y abre solo lo que necesitas, sin un espejo local completo.
- Inicio más rápido: mapea tu unidad una vez y evita largas sincronizaciones iniciales.
- Ediciones seguras: la caché escribe localmente, deja que RcloneView gestione los reintentos y las reanudaciones.

## Paso 1 — Conecta pCloud en RcloneView

- Agrega pCloud mediante `+ New Remote` (flujo WebDAV u OAuth). Guía: [add-oath-online-login](/howto/remote-storage-connection-settings/add-oath-online-login).
- Confirma que el remoto funciona listando carpetas en **Remote Explorer**.

## Paso 2 — Crea un montaje (Windows o macOS)

- Abre **Mount Manager** y elige tu remoto de pCloud. Guía: [mount-cloud-storage-as-a-local-drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive).
- Elige un destino:
  - Windows: elige una letra de unidad (por ejemplo, `P:`) usando `cmount`.
  - macOS: elige una ruta de montaje (por ejemplo, `/Volumes/pcloud`).
- Guarda y monta. Deberías ver la unidad en el Explorador de archivos o Finder de inmediato.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure a mount from Mount Manager" class="img-large img-center" />


## Paso 3 — (Opcional) Verifica con Compare antes de cambios importantes

- Usa **Compare** para previsualizar diferencias antes de movimientos masivos o limpiezas: [compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents).
- Detecta archivos más nuevos, faltantes o no coincidentes sin ejecutar una sincronización destructiva.  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />


## Paso 4 — (Opcional) Trabajos de sincronización para carpetas clave

- Mantén las carpetas críticas (por ejemplo, `Projects/` o `Photos/`) reflejadas en otra nube o NAS: [create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs).
- Comienza con **copy** por seguridad; cambia a **sync** cuando confíes en el destino.
- Programa ejecuciones fuera de horario para que los montajes sigan respondiendo mientras trabajas.  

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />


Monta pCloud una vez, ajusta la caché y mantén tu almacenamiento ligero. RcloneView hace que las unidades en la nube se sientan locales sin el riesgo de una sincronización completa.

<CloudSupportGrid />
