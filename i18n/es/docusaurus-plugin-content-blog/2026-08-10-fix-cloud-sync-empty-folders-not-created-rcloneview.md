---
slug: fix-cloud-sync-empty-folders-not-created-rcloneview
title: "Carpetas vacías desaparecidas tras la sincronización — Cómo resolverlo con RcloneView"
authors:
  - robin
description: "¿Las carpetas vacías desaparecen después de una sincronización en la nube? Descubra por qué rclone las omite de forma predeterminada y cómo solucionarlo en RcloneView con un solo ajuste."
keywords:
  - carpetas vacías no se sincronizan
  - directorios vacíos rclone
  - sincronización en la nube carpetas faltantes
  - solución de problemas RcloneView
  - sincronización de estructura de carpetas
  - crear directorios vacíos rclone
  - corregir errores de sincronización en la nube
  - configuración de sincronización RcloneView
  - estructura de carpetas de copia de seguridad en la nube
tags:
  - RcloneView
  - troubleshooting
  - sync
  - cloud-sync
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Carpetas vacías desaparecidas tras la sincronización — Cómo resolverlo con RcloneView

> Las carpetas de marcador de posición y los directorios de proyecto vacíos suelen desaparecer tras una sincronización en la nube — este es el ajuste que las recupera.

Un equipo migra una estructura de carpetas a la nube y observa que la mitad de los directorios vacíos reservados —para archivos futuros, entregables de clientes o depósitos de archivo— simplemente nunca aparecen en el destino. Este es el comportamiento predeterminado esperado de rclone: las operaciones de sincronización solo recrean los directorios que contienen archivos. RcloneView expone el ajuste necesario para cambiar esto, y saber dónde encontrarlo ahorra mucho trabajo repetido y confuso.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué se omiten las carpetas vacías

El motor de sincronización y copia de rclone recorre el árbol de origen y transfiere objetos, es decir, archivos. Un directorio sin archivos no genera ninguna operación de transferencia, por lo que, de forma predeterminada, el destino nunca sabe que ese directorio debería existir. Esto no es un error; así es como la mayoría de las API de almacenamiento en la nube representan las "carpetas" en primer lugar: como un efecto secundario de las claves de objeto, en lugar de como entidades independientes. El resultado práctico es que un árbol de origen con carpetas de marcador de posición intencionadas (una carpeta `03-invoices/` que espera los archivos del próximo mes, o una estructura de categorías que un cliente espera ver) puede llegar al destino con partes faltantes.

Esto resulta especialmente notorio durante una comparación de carpetas (Folder Compare) o una migración inicial, donde la estructura de destino necesita reflejar visualmente el origen incluso antes de que empiecen a llegar los archivos.

## La solución: crear directorios vacíos

El asistente de sincronización de RcloneView incluye un interruptor **Crear directorios vacíos** en el Paso 1 (Configurar almacenamiento), junto a la selección de remoto y carpeta de origen/destino. Activarlo indica a la operación de sincronización subyacente que también recree los directorios sin archivos, de modo que el árbol de carpetas de destino coincida exactamente con la estructura de origen, no solo con los archivos que contiene.

<img src="/support/images/en/blog/new-remote.png" alt="Paso 1 del asistente de sincronización de RcloneView con la opción de crear directorios vacíos" class="img-large img-center" />

Para una migración estructural única, ejecute primero una simulación (Dry Run) con la opción activada. La simulación enumera exactamente qué carpetas y archivos se crearán sin tocar el destino, la forma más rápida de confirmar que el problema de las carpetas vacías realmente se ha resuelto antes de proceder con la transferencia.

## Confirmar el resultado con la comparación de carpetas

Después de ejecutar la sincronización, use la comparación de carpetas (Folder Compare) de RcloneView para revisar ambos lados directorio por directorio. RcloneView monta Y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux, para que pueda comparar visualmente los árboles de origen y destino uno junto al otro sin cambiar de herramienta. Los filtros "Mostrar archivos solo a la izquierda" y "Mostrar archivos solo a la derecha" muestran de inmediato si una carpeta se transfirió correctamente.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Vista de comparación de carpetas que muestra una estructura de carpetas coincidente entre origen y destino" class="img-large img-center" />

Si va a mantener la estructura a largo plazo en lugar de realizar una migración puntual, guarde el trabajo con la opción de directorios vacíos marcada para que cada ejecución programada siga recreando las carpetas de marcador de posición según sea necesario.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Programación de un trabajo de sincronización recurrente de RcloneView para mantener actualizada la estructura de carpetas vacías" class="img-large img-center" />

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abra el asistente de sincronización y seleccione sus remotos de origen y destino.
3. En el Paso 1, active **Crear directorios vacíos** antes de configurar los filtros.
4. Ejecute una simulación para confirmar la estructura de carpetas y luego ejecute la sincronización.

Una estructura de carpetas que coincide en ambos extremos facilita mucho la incorporación de nuevos miembros del equipo y la auditoría del almacenamiento.

---

**Guías relacionadas:**

- [Carpetas vacías y permisos en macOS — Solución con RcloneView](https://rcloneview.com/support/blog/fix-macos-empty-folders-permissions-rcloneview)
- [Limpiar la papelera vacía en el almacenamiento en la nube con RcloneView](https://rcloneview.com/support/blog/cleanup-empty-trash-cloud-storage-rcloneview)
- [Corregir archivos faltantes tras la transferencia en la sincronización en la nube — RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)

<CloudSupportGrid />
