---
slug: memory-remote-ram-temp-storage-rcloneview
title: "Remoto Memory — Almacenamiento temporal basado en RAM en RcloneView"
authors:
  - casey
description: "Descubre cómo el remoto virtual Memory de RcloneView utiliza almacenamiento temporal basado en RAM para pruebas rápidas, preparación y flujos de trabajo en la nube desechables."
keywords:
  - memory remote rclone
  - rcloneview memory remote
  - almacenamiento en la nube basado en RAM
  - virtual remote rcloneview
  - almacenamiento en la nube temporal
  - remoto de pruebas rclone
  - transferencias en la nube de preparación
  - rcloneview virtual remotes
  - almacenamiento desechable rclone
  - almacenamiento de archivos en memoria
tags:
  - RcloneView
  - feature
  - guide
  - tips
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Remoto Memory — Almacenamiento temporal basado en RAM en RcloneView

> ¿Necesitas un espacio provisional que desaparezca en cuanto lo cierras? El remoto virtual **Memory** de RcloneView te ofrece almacenamiento basado en RAM para probar trabajos de sincronización y preparar transferencias sin tocar el disco.

Entre los remotos virtuales de RcloneView —Alias, Crypt, Cache, Chunker, Combine, Union, Hasher y Compress—, Memory destaca por sí solo: almacena los datos por completo en RAM durante toda la sesión, sin escribir nada en disco y sin dejar nada al salir. Esa naturaleza temporal y sin rastro es justo lo que lo hace útil para un conjunto específico de flujos de trabajo, en lugar de para el almacenamiento cotidiano.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Para qué sirve el remoto Memory

A diferencia de Alias (un acceso directo a una ruta existente) o Crypt (cifrado para remotos existentes), Memory es un backend de almacenamiento independiente que solo existe en la memoria del proceso rclone en ejecución. Todo lo que se copia en él desaparece en cuanto la instancia integrada de rclone se reinicia o la aplicación se cierra. Esa naturaleza temporal y sin rastro es precisamente lo que lo hace útil para un conjunto específico de flujos de trabajo, en lugar de para el almacenamiento habitual.

RcloneView monta Y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux — el remoto Memory es simplemente una entrada más en ese mismo Remote Manager, configurada y utilizada del mismo modo que cualquier conexión real en la nube.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a transfer job in RcloneView" class="img-large img-center" />

## Probar trabajos de sincronización con seguridad

Antes de apuntar un nuevo trabajo de sincronización al almacenamiento en la nube de producción, puedes crear un remoto Memory y ejecutar primero el trabajo contra él. Esto confirma que la selección de origen, las reglas de filtro y la estructura de carpetas se comportan como se espera, sin arriesgar datos reales en el lado de destino. Combinado con Dry Run, esto te da dos capas de seguridad: una vista previa simulada, seguida de una copia de prueba real que no cuesta nada y no deja rastro.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a test sync job in RcloneView" class="img-large img-center" />

## Preparar transferencias entre proveedores

Al mover archivos entre dos proveedores de nube que no transfieren eficientemente de forma directa, un remoto Memory puede actuar como un punto intermedio rápido para lotes pequeños — útil al validar una operación por lotes de varios pasos antes de programarla de verdad. Como Memory no tiene sobrecarga de E/S en disco, las transferencias de preparación pequeñas se completan rápidamente, lo que te permite iterar una secuencia de lotes con agilidad.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Managing remotes in RcloneView's Mount Manager" class="img-large img-center" />

## Configurar un remoto Memory

Añadir un remoto Memory sigue el mismo flujo de New Remote que cualquier otra conexión en RcloneView.

**Cómo configurarlo:**

1. Abre la pestaña Remote y haz clic en **New Remote**.
2. Selecciona **Memory** en la lista de tipos de remotos virtuales.
3. Guarda — no se necesitan credenciales ni configuración, ya que el almacenamiento es completamente local al proceso rclone en ejecución.
4. Úsalo como origen o destino en cualquier trabajo de Sync, Copy o por lotes, igual que un remoto normal.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files into a remote in RcloneView" class="img-large img-center" />

## Cuándo no usarlo

El almacenamiento Memory no es un destino de copia de seguridad y nunca debe contener nada que necesites conservar — reiniciar rclone o la aplicación lo borra por completo. Además, está limitado por la RAM disponible del sistema, por lo que solo resulta práctico para lotes de prueba pequeños, no para transferencias a gran escala.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade un remoto Memory desde la sección Virtual Remotes de New Remote.
3. Dirige un trabajo de sincronización de prueba hacia él antes de ejecutar el mismo trabajo contra un destino real.
4. Usa Job History para confirmar que la prueba se comportó como se esperaba y, después, cambia a tu remoto en la nube real.

Un remoto desechable basado en RAM es una pequeña incorporación, pero cierra una brecha real entre "simular con Dry Run" y "pasar a producción" cuando estás construyendo un nuevo flujo de trabajo.

---

**Guías relacionadas:**

- [Remotos virtuales — Combine, Union y Alias en RcloneView](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [Remoto Alias — Rutas de acceso directo en RcloneView](https://rcloneview.com/support/blog/alias-remote-shortcut-paths-rcloneview)
- [Cifrar copias de seguridad en la nube — Guía del remoto Crypt con RcloneView](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
