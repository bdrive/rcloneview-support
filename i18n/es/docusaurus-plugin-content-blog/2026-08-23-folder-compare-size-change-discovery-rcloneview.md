---
slug: folder-compare-size-change-discovery-rcloneview
title: "Encuentra los cambios más grandes — Descubrimiento de cambios de tamaño en Folder Compare de RcloneView"
authors:
  - steve
description: "Usa las herramientas de descubrimiento de cambios de tamaño de Folder Compare en RcloneView para localizar qué carpetas en la nube cambiaron más, más rápido, o necesitan revisión antes de sincronizar."
keywords:
  - descubrimiento de cambios de tamaño en comparación de carpetas
  - comparación de carpetas RcloneView
  - mayor cambio de carpeta
  - auditoría de almacenamiento en la nube
  - comparar carpetas en la nube
  - detectar cambios de archivos en la nube
  - verificación de respaldo en la nube
  - seguimiento de cambios de tamaño de carpetas
  - monitoreo de sincronización en la nube
  - detección de cambios en almacenamiento en la nube
tags:
  - RcloneView
  - feature
  - compare
  - folder-comparison
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Encuentra los cambios más grandes — Descubrimiento de cambios de tamaño en Folder Compare de RcloneView

> Cuando un árbol en la nube tiene miles de subcarpetas, detectar cuáles cambiaron realmente es la parte difícil — las herramientas de descubrimiento de cambios de tamaño de RcloneView las encuentran por ti.

Cualquiera que gestione un archivo multi-nube grande sabe que el verdadero problema no es ejecutar una comparación, sino leer los resultados. Un árbol de carpetas con unos pocos miles de subcarpetas puede producir un informe de comparación demasiado largo para revisarlo manualmente. La vista de Folder Compare de RcloneView incluye controles dedicados de descubrimiento de cambios de tamaño que saltan directamente a las carpetas que vale la pena investigar, en lugar de obligarte a desplazarte por una lista de archivos sin diferenciar.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Qué hace realmente el descubrimiento de cambios de tamaño

Folder Compare te permite comparar visualmente dos carpetas — locales o en la nube — una al lado de la otra, e incluye filtros para archivos exclusivos de la izquierda, exclusivos de la derecha, archivos idénticos, archivos diferentes y archivos con errores. Además de este filtrado, RcloneView añade accesos directos de navegación que encuentran carpetas por cambio en el número de archivos o por cambio de tamaño, y pueden saltar directamente a la carpeta con el mayor cambio, el siguiente más grande, el cambio más pequeño o el siguiente más pequeño.

Ese último conjunto de controles es lo que distingue a RcloneView de una simple vista de diferencias. En lugar de leer cada subcarpeta para averiguar dónde ocurrió la mayor parte del cambio, le pides a la comparación que te lleve directamente allí. Esto es más útil en remotos donde el cambio es inherentemente desigual — una biblioteca multimedia compartida, un repositorio de ingeniería o una estructura de carpetas de clientes donde el 90 % de la actividad ocurre en un puñado de subdirectorios.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Selecting comparison result filters in RcloneView Folder Compare" class="img-large img-center" />

## Un escenario práctico

Considera un estudio de producción de video con un archivo compartido en la nube que contiene cientos de carpetas de proyectos entre Google Drive y un bucket de respaldo de Backblaze B2. Después de una semana ajetreada de edición, necesitan saber qué carpetas de proyectos realmente cambiaron antes de ejecutar una sincronización completa — no para confiar en que el último trabajo automatizado lo capturó todo, sino para verificarlo. Ejecutar Folder Compare y saltar directamente a "mayor cambio" muestra de inmediato los tres o cuatro proyectos activos, mientras que docenas de carpetas de archivo sin tocar quedan fuera del camino. RcloneView también monta y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux, por lo que el mismo flujo de trabajo se aplica ya sea que el otro lado sea otra nube, un NAS o una unidad local.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Comparing cloud-to-cloud folder contents in RcloneView" class="img-large img-center" />

## Convirtiendo el descubrimiento en acción

Una vez que has localizado una carpeta cambiada, la misma vista Compare te permite actuar directamente sobre ella: copiar a la derecha, copiar a la izquierda o eliminar los elementos seleccionados, sin salir de la comparación. Los archivos copiados de esta manera se marcan automáticamente como iguales, de modo que una nueva ejecución de la comparación refleja el estado corregido en lugar de volver a marcar la misma carpeta. Para auditorías recurrentes, combina un pase manual de Compare con un trabajo de sincronización programado, de modo que el descubrimiento de tamaño se convierta en una verificación puntual en lugar de la única línea de defensa.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing job history after a folder compare and sync in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abre la vista Compare desde la pestaña Home y selecciona tus dos carpetas de origen.
3. Ejecuta la comparación y luego usa la navegación de cambio mayor/menor para saltar a las carpetas que importan.
4. Copia o elimina directamente desde la vista de resultados, luego vuelve a ejecutar Compare para confirmar que las carpetas ahora se muestran como iguales.

Para cualquiera que gestione un árbol en la nube demasiado grande para leer a simple vista, el descubrimiento de tamaño convierte una comparación abrumadora en una lista corta y priorizada de carpetas que revisar.

---

**Guías relacionadas:**

- [Guía de comparación de carpetas — Detecta diferencias con RcloneView](https://rcloneview.com/support/blog/folder-comparison-guide-detect-differences-rcloneview)
- [Comparación de carpetas con filtro en RcloneView](https://rcloneview.com/support/blog/folder-compare-with-filter-rcloneview)
- [Dry Run — Vista previa de la sincronización en la nube antes de transferir](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)

<CloudSupportGrid />
