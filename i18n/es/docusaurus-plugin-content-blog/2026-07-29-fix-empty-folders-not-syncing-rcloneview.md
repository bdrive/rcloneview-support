---
slug: fix-empty-folders-not-syncing-rcloneview
title: "Solucionar carpetas vacías que no se sincronizan — Activar la creación de directorios con RcloneView"
authors:
  - robin
description: "Aprende por qué las carpetas vacías desaparecen durante la sincronización en la nube y cómo solucionarlo con la opción de crear directorios vacíos de RcloneView."
keywords:
  - carpetas vacías no se sincronizan
  - solucionar carpetas faltantes en sincronización en la nube
  - RcloneView crear directorios vacíos
  - estructura de carpetas en sincronización en la nube
  - rclone sincronización de directorios vacíos
  - estructura de carpetas no preservada
  - carpetas vacías faltantes en sincronización
  - configuración de sincronización de RcloneView
tags:
  - RcloneView
  - troubleshooting
  - tips
  - sync
  - job-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar carpetas vacías que no se sincronizan — Activar la creación de directorios con RcloneView

> Si un trabajo de sincronización deja atrás tus carpetas vacías cuidadosamente organizadas, la solución es un simple interruptor en la configuración de sincronización de RcloneView, no un error de tu proveedor de nube.

La mayoría de los motores de sincronización, incluido rclone, solo transfieren objetos que realmente contienen datos — una carpeta vacía no tiene nada que copiar, así que por defecto se omite por completo. Esto no supone un problema para una copia de seguridad plana, pero rompe cualquier flujo de trabajo que dependa de una estructura de carpetas fija, como una plantilla de proyecto, un árbol de recepción de clientes o directorios de marcador de posición que un equipo espera ver incluso antes de que lleguen los archivos. RcloneView muestra el ajuste que controla este comportamiento directamente en el asistente de sincronización, así que no necesitas tocar un archivo de configuración ni volver a ejecutar un trabajo a ciegas.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué se eliminan las carpetas vacías

Cuando RcloneView (a través de rclone) recorre un árbol de origen durante una sincronización, construye su lista de transferencia a partir de archivos, no de directorios. Una carpeta que solo contiene subcarpetas sin archivos en ningún punto por debajo produce cero objetos transferibles, así que nada indica al destino que esa carpeta debería existir. Este es el comportamiento esperado de la sincronización, no un defecto, pero sorprende a cualquiera que suponga que una sincronización de carpeta a carpeta preserva el árbol exacto, incluidas las ramas vacías.

<img src="/support/images/en/blog/new-remote.png" alt="Asistente de configuración de sincronización de RcloneView mostrando las opciones de configuración del Paso 1" class="img-large img-center" />

La solución se encuentra en el Paso 1 del asistente de configuración de sincronización, junto al origen, el destino y la dirección de sincronización — es fácil pasarla por alto en un primer vistazo porque está desactivada por defecto.

## Activar "Crear directorios vacíos"

En el Paso 1 del asistente de sincronización de 4 pasos, activa la opción "Crear directorios vacíos" antes de guardar el trabajo. Con ella activada, RcloneView indica a rclone que replique la estructura completa de directorios en el destino, incluidas las ramas que actualmente no contienen archivos. Esto es especialmente importante para trabajos que se ejecutan repetidamente según una programación — una carpeta que hoy está vacía podría recibir archivos la próxima semana, y tener la estructura del destino lista de antemano evita confusiones sobre dónde debe ubicarse el contenido nuevo.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Interruptor de crear directorios vacíos en el Paso 1 de la configuración de sincronización de RcloneView" class="img-large img-center" />

A diferencia de las herramientas de solo montaje, RcloneView también sincroniza y compara carpetas — con la licencia FREE — así que esta solución se aplica tanto si estás reflejando un solo destino como si estás distribuyendo un origen hacia varios con sincronización 1:N.

## Verificar la solución con Dry Run

Antes de comprometerte con una sincronización completa, usa la función Dry Run de RcloneView para previsualizar exactamente qué carpetas y archivos se crearán o cambiarán. Dry Run enumera las operaciones pendientes sin tocar el destino, lo cual es una forma fiable de confirmar que tus carpetas vacías realmente aparecerán antes de ejecutar el trabajo de verdad — especialmente útil si estás incorporando esta opción de forma retroactiva en un trabajo que lleva tiempo ejecutándose.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Ejecutando una vista previa de simulación antes de ejecutar un trabajo de sincronización en RcloneView" class="img-large img-center" />

Si un trabajo programado ya se ejecutó sin la opción activada, vuelve a guardarlo con "Crear directorios vacíos" marcado y ejecútalo una vez más — la siguiente ejecución completará la estructura de directorios faltante en el destino.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abre o crea tu trabajo de sincronización y ve al Paso 1: Configurar almacenamiento.
3. Marca "Crear directorios vacíos" antes de guardar.
4. Ejecuta primero un Dry Run para confirmar que la estructura de carpetas coincide con lo esperado.

Una sola casilla de verificación es todo lo que se necesita para mantener intacta tu estructura de carpetas en cada nube con la que sincronizas.

---

**Guías relacionadas:**

- [Guía de comparación de carpetas — Detectar diferencias con RcloneView](https://rcloneview.com/support/blog/folder-comparison-guide-detect-differences-rcloneview)
- [Dry Run — Previsualizar la sincronización en la nube antes de la transferencia con RcloneView](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)
- [Reglas de filtro — Sincronización selectiva con RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)

<CloudSupportGrid />
