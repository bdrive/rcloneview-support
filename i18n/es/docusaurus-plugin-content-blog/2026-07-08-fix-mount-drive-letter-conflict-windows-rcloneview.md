---
slug: fix-mount-drive-letter-conflict-windows-rcloneview
title: "Cómo solucionar conflictos de letra de unidad al montar — Solución de problemas de almacenamiento en la nube en Windows con RcloneView"
authors:
  - morgan
description: "Resuelve los conflictos de letra de unidad en Windows al montar almacenamiento en la nube en RcloneView con asignación manual y ajustes de unidad de red."
keywords:
  - conflicto de letra de unidad
  - error de montaje en Windows
  - montaje RcloneView
  - letra de unidad en la nube
  - solucionar error de montaje en windows
  - cmount rclone
  - montaje de unidad de red
  - unidad virtual windows
  - solución de problemas de montaje
  - RcloneView Windows
tags:
  - troubleshooting
  - windows
  - mount
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cómo solucionar conflictos de letra de unidad al montar — Solución de problemas de almacenamiento en la nube en Windows con RcloneView

> Cuando un montaje en la nube toma una letra de unidad que tu NAS o VPN ya está usando, RcloneView te da los controles para solucionarlo en segundos.

Una oficina que ejecuta unidades mapeadas desde un NAS Synology, un cliente VPN y dos montajes en la nube a través de RcloneView puede quedarse fácilmente sin letras de unidad libres, o peor, hacer que Windows reasigne silenciosamente una letra que estaba usando un montaje en ejecución. En Windows, RcloneView monta el almacenamiento en la nube usando cmount y puede asignar una letra de unidad automáticamente o dejarte elegir una manualmente, por lo que un conflicto casi siempre se puede solucionar sin desmontar todo y empezar de nuevo.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cómo asigna RcloneView las letras de unidad

Cada montaje en RcloneView tiene un ajuste **Target** (Destino) que es Auto o una letra de unidad elegida manualmente, configurada al crear o editar el montaje. El modo Auto deja que Windows elija la siguiente letra disponible, lo cual es conveniente hasta que otra aplicación —un cliente NAS, una VPN o una unidad USB— reclama esa misma letra primero en un arranque posterior. A diferencia de las herramientas que solo montan, RcloneView también sincroniza y compara carpetas con la misma licencia FREE, por lo que solucionar el montaje no te cuesta el acceso a ninguna otra función mientras lo resuelves.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a cloud remote from the RcloneView Explorer panel toolbar" class="img-large img-center" />

## Asignar manualmente una letra de unidad libre

Abre **Mount Manager** desde la pestaña Remote para ver todos los montajes y su estado actual. Un montaje debe estar desmontado antes de poder editarlo, así que desmonta primero el que tiene el conflicto, luego abre su configuración y cambia Target de Auto a una letra específica y no utilizada. Guarda el cambio y vuelve a montar: el conflicto se resuelve en cuanto Windows confirma que la letra está libre.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Editing a mount's drive letter setting in RcloneView Mount Manager" class="img-large img-center" />

Si no estás seguro de qué letras ya están ocupadas, revisa la vista Este equipo del Explorador de archivos o ejecuta `wmic logicaldisk get caption` en un símbolo del sistema antes de elegir un reemplazo.

## Usar el modo Unidad de red para evitar futuros conflictos

Las opciones de montaje de RcloneView incluyen un interruptor de **Network drive** (Unidad de red) que cambia cómo Windows registra el montaje internamente. Combinado con una letra fijada manualmente, esto hace que el montaje se comporte de forma más predecible junto a unidades mapeadas de NAS y unidades compartidas asignadas por VPN que también reservan letras específicas al iniciar sesión.

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="A NAS-mapped network drive alongside an RcloneView cloud mount on Windows" class="img-large img-center" />

Para entornos con varias unidades compartidas de NAS y montajes en la nube ejecutándose juntos, estandarizar letras manuales para cada montaje —en lugar de mezclar Auto y manual— elimina la mayor parte de la incertidumbre después de un reinicio.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html) si aún no lo has hecho.
2. Abre Mount Manager y desmonta el montaje que muestra el conflicto.
3. Edita su configuración y asigna una letra de unidad específica y no utilizada.
4. Guarda, vuelve a montar y confirma que la unidad aparece correctamente en el Explorador de archivos.

Unos minutos dedicados a fijar letras de unidad manualmente te evitan tener que repetir esta solución cada vez que Windows las reorganiza.

---

**Guías relacionadas:**

- [Montar almacenamiento en la nube como unidad local — Guía completa con RcloneView](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)
- [Montar Google Drive como unidad local con RcloneView](https://rcloneview.com/support/blog/mount-google-drive-as-local-drive-rcloneview)
- [Cómo solucionar errores de FUSE al montar con rclone en RcloneView](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)

<CloudSupportGrid />
