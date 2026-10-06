---
slug: hasher-remote-add-checksums-rcloneview
title: "Remoto Hasher — Añade sumas de verificación al almacenamiento que no las tiene en RcloneView"
authors:
  - steve
description: "Usa el remoto virtual Hasher en RcloneView para añadir comprobaciones de integridad basadas en hash a remotos que no proporcionan sumas de verificación por sí mismos."
keywords:
  - remoto Hasher de rclone
  - añadir sumas de verificación al almacenamiento en la nube
  - comprobación de integridad de archivos en la nube
  - verificar hashes de archivos en la nube
  - remoto virtual Hasher
  - remotos virtuales de RcloneView
  - sincronización con suma de verificación
  - rclone GUI
tags:
  - RcloneView
  - feature
  - rclone
  - cloud-storage
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Remoto Hasher — Añade sumas de verificación al almacenamiento que no las tiene en RcloneView

> El remoto virtual Hasher añade hashing sobre un remoto existente, de modo que las comprobaciones de integridad siguen funcionando donde el almacenamiento no tiene sumas de verificación.

Algunos backends de almacenamiento no pueden proporcionar hashes de archivos, lo que debilita las comparaciones y la verificación tras una transferencia. RcloneView admite el remoto virtual Hasher de rclone, un envoltorio que añade hashing sobre un remoto que ya tienes. Esta guía explica cuándo resulta útil y cómo usarlo.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Qué hace el remoto Hasher

Los remotos virtuales envuelven un remoto existente para añadir comportamiento. Alias acorta rutas, Crypt cifra y Hasher añade hashing para las comprobaciones de integridad. Si un backend no expone sumas de verificación, las comparaciones recurren al tamaño y a la fecha de modificación, lo que puede pasar por alto contenido que cambió sin alterar ninguno de los dos.

Al envolver ese backend en un remoto Hasher, le das una capacidad de hash para que la comparación basada en sumas de verificación tenga con qué trabajar. Es una buena opción para archivos y copias de seguridad donde la exactitud importa más que la velocidad.

<img src="/support/images/en/blog/new-remote.png" alt="Creación de un nuevo remoto virtual en RcloneView" class="img-large img-center" />

## Crear un remoto Hasher

Abre la pestaña Remote y elige New Remote; después selecciona el tipo Hasher. Apunta al remoto subyacente y a la carpeta que quieres envolver, y ponle un nombre que reconozcas, como `archive-hashed`. Una vez guardado, aparece en el explorador como cualquier otro remoto.

Usa el remoto envuelto en cualquier lugar donde usarías el original: para explorar, copiar o como origen o destino de una sincronización. Ten en cuenta que los hashes están vinculados al envoltorio, así que usa siempre el remoto Hasher para los datos que quieras verificar.

## Úsalo con la sincronización y la comparación

En Advanced Settings de un trabajo de sincronización, activa **Enable checksum** para que los archivos se comparen por hash y tamaño. Combinado con un remoto Hasher, esto ofrece resultados más fiables que el tamaño y la fecha por sí solos.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Vista Folder Compare que muestra las diferencias entre dos carpetas" class="img-large img-center" />

Ejecuta primero un Dry Run para previsualizar lo que se copiará o eliminará y luego ejecútalo. RcloneView admite montaje y sincronización de más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux, por lo que el mismo enfoque de verificación sirve para todas tus nubes.

## Revisa los resultados en Job History

Tras una ejecución, abre Job History para confirmar el estado, los archivos transferidos y el tamaño total. Si un trabajo informa de errores, la pestaña Log muestra los detalles.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Historial de trabajos con ejecuciones de sincronización completadas" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade el remoto que carece de sumas de verificación, si aún no lo has hecho.
3. Crea un remoto Hasher que lo envuelva desde Remote > New Remote.
4. Crea un trabajo de sincronización con **Enable checksum** activado y ejecuta primero un Dry Run.

Una verificación más sólida significa que encontrarás diferencias silenciosas antes de que importen.

---

**Guías relacionadas:**

- [Remotos virtuales — Combine, Union y Alias con RcloneView](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [Solucionar discrepancias de suma de verificación en la sincronización en la nube con RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-checksum-mismatch-rcloneview)
- [Solucionar fallos de verificación de copias de seguridad en la nube con RcloneView](https://rcloneview.com/support/blog/fix-cloud-backup-verification-failures-rcloneview)

<CloudSupportGrid />
