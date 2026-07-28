---
slug: fix-empty-folders-not-syncing-rcloneview
title: "Solucionar carpetas vacías que no se sincronizan — Cómo resolverlo con RcloneView"
authors:
  - morgan
description: "¿Faltan carpetas vacías después de una sincronización? Descubre por qué rclone las omite por defecto y cómo solucionarlo con la opción de crear directorios vacíos de RcloneView."
keywords:
  - carpetas vacías que no se sincronizan
  - rclone directorios vacíos faltantes
  - solucionar carpetas vacías en sincronización en la nube
  - RcloneView crear directorios vacíos
  - estructura de carpetas faltante en sincronización
  - copia de seguridad en la nube carpetas vacías
  - rclone estructura de carpetas en sincronización
  - RcloneView solución de problemas de sincronización
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar carpetas vacías que no se sincronizan — Cómo resolverlo con RcloneView

> Si un trabajo de sincronización elimina silenciosamente las carpetas vacías del destino, la solución es una sola casilla que la mayoría de los usuarios nunca nota durante la configuración.

Un equipo que migra un archivo de proyecto entre nubes suele esperar que el destino refleje exactamente la estructura de carpetas del origen — incluyendo carpetas marcador de posición que aún no contienen archivos. Por defecto, rclone (y por extensión RcloneView) omite la creación de directorios vacíos en el destino, porque la mayoría de los backends de almacenamiento de objetos no tienen un concepto real de carpetas; solo rastrean claves de archivo. Si tu trabajo de sincronización termina con éxito pero un grupo de subcarpetas vacías falta en el destino, esto es un comportamiento esperado, no un error — y RcloneView tiene una configuración integrada para cambiarlo.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué se eliminan las carpetas vacías

Los sistemas de archivos locales y algunos proveedores almacenan las carpetas como objetos reales, pero muchos backends en la nube — incluido el almacenamiento compatible con S3 — representan una "carpeta" solo como un prefijo común compartido por claves de archivo. Cuando un directorio no tiene archivos, no hay ninguna clave que crear, por lo que no aparece nada en el otro lado. El comportamiento de sincronización por defecto de rclone refleja esto: copia archivos y deja que la estructura de carpetas surja implícitamente de las rutas de archivo, lo que mantiene las transferencias rápidas pero deja atrás las carpetas genuinamente vacías.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing a completed sync with no errors despite missing empty folders" class="img-large img-center" />

Por eso un trabajo de sincronización puede reportar Completado con cero errores mientras el árbol de carpetas de destino queda más delgado que el de origen. No es una transferencia fallida — es la herramienta haciendo exactamente lo que se le indicó, menos un detalle que la mayoría de los usuarios asume que es automático.

## Habilitar Crear directorios vacíos

RcloneView expone este comportamiento directamente en el asistente de sincronización. En el Paso 1 (Configurar almacenamiento), junto con la selección de origen y destino y el interruptor de dirección de sincronización, hay una opción **Crear directorios vacíos (Create empty directories)**. Habilitarla antes de ejecutar el trabajo indica a rclone que cree explícitamente entradas marcador de posición para las carpetas vacías en el destino, de modo que la estructura copiada coincida con el origen carpeta por carpeta.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Enabling create empty directories in the RcloneView sync configuration wizard" class="img-large img-center" />

Si ya ejecutaste una sincronización sin marcar esta opción, simplemente edita el trabajo existente, habilita la configuración y vuelve a ejecutarlo — RcloneView monta y sincroniza más de 90 proveedores desde una sola ventana, por lo que volver a ejecutar contra el mismo origen y destino es una solución rápida en lugar de una reconfiguración completa.

## Verificar la estructura de carpetas después de la corrección

Antes de confiar una migración grande a una sola ejecución, usa Dry Run para previsualizar lo que hará realmente el trabajo corregido — enumera cada archivo y carpeta programados para crearse sin tocar el destino, para que puedas confirmar que la brecha de carpetas vacías se ha cerrado antes de comprometerte. Para un proyecto en curso, Folder Compare también es útil después: apúntalo a ambos lados y filtra por "solo izquierda" o "solo derecha" para detectar cualquier discrepancia estructural que quede.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using Folder Compare to verify folder structure matches after enabling empty directory creation" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abre el trabajo de sincronización al que le faltan carpetas vacías y haz clic en Edit.
3. En el Paso 1, habilita la casilla **Crear directorios vacíos (Create empty directories)**.
4. Ejecuta un Dry Run para confirmar que las carpetas se crearán, luego ejecuta la sincronización.

Una vez habilitada la configuración, cada ejecución futura de ese trabajo conserva el árbol de carpetas completo — ya no tendrás que buscar directorios marcador de posición faltantes después de una migración.

---

**Guías relacionadas:**

- [Dry Run — Previsualiza la sincronización en la nube antes de transferir con RcloneView](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)
- [Reglas de filtro — Sincronización selectiva con RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Evita la pérdida de datos por una dirección de sincronización incorrecta con RcloneView](https://rcloneview.com/support/blog/avoid-data-loss-wrong-sync-direction-rcloneview)

<CloudSupportGrid />
