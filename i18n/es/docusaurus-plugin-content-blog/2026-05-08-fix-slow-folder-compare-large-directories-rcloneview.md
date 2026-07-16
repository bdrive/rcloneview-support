---
slug: fix-slow-folder-compare-large-directories-rcloneview
title: "Solucionar la comparación lenta de carpetas para directorios grandes — Guía de RcloneView"
authors:
  - jay
description: "Acelera las operaciones de Comparación de Carpetas en directorios grandes en RcloneView — abarcando la concurrencia de verificadores, reglas de filtro y estrategias para comparar millones de archivos de forma eficiente."
keywords:
  - comparación de carpetas lenta RcloneView
  - solucionar comparación lenta de directorios en la nube
  - RcloneView comparación de carpetas con archivos grandes
  - acelerar comparación de carpetas en la nube
  - rendimiento de comparación de RcloneView
  - comparación de directorios grandes en la nube
  - solución de tiempo de espera en comparación de carpetas
  - optimizar la comparación en RcloneView
tags:
  - RcloneView
  - folder-comparison
  - troubleshooting
  - tips
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar la comparación lenta de carpetas para directorios grandes — Guía de RcloneView

> Comparar directorios con decenas de miles de archivos puede ser lento si tu configuración no está optimizada. Así es como ajustar la Comparación de Carpetas de RcloneView para directorios en la nube a gran escala.

La Comparación de Carpetas de RcloneView es una de sus funciones más potentes: muestra exactamente qué archivos difieren entre dos ubicaciones, cuáles existen solo en un lado y cuáles son idénticos. Pero comparar dos buckets de S3 con 500.000 archivos, o un directorio NAS con un archivo en la nube, puede ser dolorosamente lento si la configuración no está ajustada para la carga de trabajo. Estos ajustes reducen los tiempos de comparación de horas a minutos.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Reduce el alcance con filtros antes de comparar

La forma más rápida de acelerar una comparación de carpetas es reducir la cantidad de archivos que se comparan. Usa **Comparación de Carpetas con Filtro** (licencia PLUS) para excluir los tipos de archivo que no necesitas verificar; por ejemplo, excluye los archivos `.tmp`, `.log` y `.DS_Store` que no afectan tu evaluación de integridad de datos. También puedes filtrar por nombre de carpeta para comparar solo subdirectorios específicos de un árbol grande.

La sintaxis de filtro sigue las reglas de filtro de rclone: `.tmp` excluye cualquier archivo con esa extensión, `/.git/*` excluye los archivos en un directorio raíz `.git`, y `/archive/` omite una carpeta completa de nivel superior. Aplicar estas reglas antes de iniciar la comparación reduce drásticamente la cantidad de elementos que rclone necesita enumerar y calcular.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using Folder Compare with filter to reduce scope in RcloneView" class="img-large img-center" />

## Ajusta la concurrencia de verificadores para backends lentos

La configuración de trabajos de RcloneView incluye **Número de verificadores de igualdad**, que por defecto es 8. Para backends en la nube lentos (aquellos con alta latencia o límites estrictos de tasa de API), este valor predeterminado alto puede hacer que los verificadores se acumulen esperando respuestas de la API, lo que paradójicamente ralentiza el proceso. Para proveedores como Google Drive, OneDrive o servidores WebDAV lentos, intenta reducir los verificadores a entre 2 y 4.

Por el contrario, para backends rápidos compatibles con S3 como Wasabi o Cloudflare R2, aumentar los verificadores a 16 o más puede acelerar significativamente el listado de buckets grandes. Prueba diferentes valores: el punto óptimo varía según el proveedor y las condiciones de red.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring checker concurrency for folder compare in RcloneView" class="img-large img-center" />

## Usa el modo solo tamaño para pasadas iniciales

Por defecto, rclone compara archivos tanto por tamaño como por fecha de modificación. Para una pasada inicial rápida sobre un directorio muy grande, puedes usar la comparación solo por tamaño para identificar discrepancias evidentes (archivos que existen en un lado pero no en el otro, o archivos con tamaños claramente diferentes) sin incurrir en la sobrecarga de la verificación de checksums.

En RcloneView, puedes pasar `--size-only` como una Marca Global de Rclone en **Configuración → Rclone Integrado → Marcas Globales de Rclone** para una sesión de comparación. Esto sacrifica algo de precisión a cambio de velocidad; úsalo para auditorías iniciales grandes y luego realiza una comparación completa de checksums en los archivos sospechosos.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing folder compare history and timing in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Usa **Comparación de Carpetas con Filtro** (PLUS) para excluir tipos de archivo irrelevantes antes de comparar.
3. Reduce la concurrencia de verificadores a entre 2 y 4 para backends lentos; auméntala para proveedores S3 rápidos.
4. Usa el modo solo tamaño para auditorías iniciales rápidas de directorios muy grandes.

Con la configuración correcta, la Comparación de Carpetas escala a millones de archivos en distintos proveedores de la nube sin demoras innecesarias.

---

**Guías relacionadas:**

- [Guía de comparación de carpetas — Detecta diferencias con RcloneView](https://rcloneview.com/support/blog/folder-comparison-guide-detect-differences-rcloneview)
- [Reglas de filtro y sincronización selectiva con RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Verifica la integridad de archivos en la nube con RcloneView](https://rcloneview.com/support/blog/check-verify-cloud-file-integrity-rcloneview)

<CloudSupportGrid />
