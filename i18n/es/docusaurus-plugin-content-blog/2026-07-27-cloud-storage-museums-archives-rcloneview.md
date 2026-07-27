---
slug: cloud-storage-museums-archives-rcloneview
title: "Almacenamiento en la nube para museos y archivos — Preservación digital con RcloneView"
authors:
  - tayson
description: "Los museos y archivos usan RcloneView para sincronizar, verificar y respaldar colecciones digitalizadas entre almacenamiento en la nube y niveles de archivo en frío."
keywords:
  - almacenamiento en la nube para museos
  - copia de seguridad de archivo digital
  - software de preservación digital
  - sincronización de colecciones de archivo
  - flujo de trabajo de digitalización de museos
  - sincronización de archivo en almacenamiento en frío
  - archivos RcloneView
  - verificación por comparación de carpetas
  - copia de seguridad multi-nube para museos
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - digital-preservation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Almacenamiento en la nube para museos y archivos — Preservación digital con RcloneView

> Las colecciones digitalizadas solo están a salvo si cada copia se verifica, no solo se sube — RcloneView le da a los archivistas una forma de demostrarlo.

Un museo de historia regional que digitaliza 40.000 negativos fotográficos enfrenta un problema que no tiene nada que ver con el escaneo: una vez que existe un archivo maestro TIFF, este debe residir en dos ubicaciones de almacenamiento independientes, y alguien debe confirmar que esas copias permanecen idénticas a lo largo de los años. RcloneView gestiona ese flujo de verificación directamente, conectando el almacenamiento en la nube de trabajo con niveles de archivo a largo plazo y ofreciendo al personal una comparación carpeta por carpeta en lugar de un mensaje ciego de "carga completada".

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Archivos maestros frente a copias de acceso

Los archivos suelen mantener dos niveles: archivos maestros sin comprimir (TIFF, WAV, ProRes) conservados para su preservación, y copias de acceso más pequeñas (JPEG, MP3, H.264) usadas para exhibición pública o solicitudes de investigadores. El explorador multipanel de RcloneView permite al personal mantener ambos niveles visibles uno junto al otro — un panel conectado a la unidad en la nube de trabajo donde los curadores suben elementos recién digitalizados, y otro conectado a un remoto de archivo en frío, como almacenamiento de clase Amazon S3 Glacier o Backblaze B2, para los maestros.

<img src="/support/images/en/blog/new-remote.png" alt="Agregar un nuevo remoto en la nube en RcloneView para almacenamiento de archivo" class="img-large img-center" />

Como RcloneView se conecta con más de 90 proveedores, una institución no queda atada al producto de almacenamiento en frío de un solo proveedor. Un museo puede conservar los maestros en un proveedor y replicar una segunda copia en otro proveedor distinto para redundancia ante desastres, todo gestionado desde la misma ventana.

## Verificación de integridad entre copias

Subir un archivo una vez no es preservación — confirmar que sigue coincidiendo con el original años después sí lo es. La función de comparación de carpetas de RcloneView revisa dos ubicaciones una junto a la otra y marca los archivos que difieren en tamaño, existen solo en un lado o presentaron errores durante la transferencia. Los archivistas que realizan una verificación periódica de fixity pueden apuntar la comparación a la colección de trabajo y al espejo de archivo, y luego revisar el filtro de "archivos diferentes" para detectar corrupción silenciosa o transferencias incompletas antes de que se conviertan en pérdidas permanentes.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Revisión de los resultados de comparación de carpetas entre dos ubicaciones de almacenamiento de archivo" class="img-large img-center" />

A diferencia de las herramientas en la nube que solo montan unidades, RcloneView también sincroniza y compara carpetas — con la licencia FREE — por lo que las verificaciones de integridad no requieren un nivel de pago para comenzar.

## Copia de seguridad programada de metadatos del catálogo

Los sistemas de gestión de colecciones (bases de datos CMS, instrumentos de descripción, registros EAD/MARC) cambian constantemente a medida que se catalogan los elementos. El Job Manager de RcloneView permite a un archivo definir un trabajo de sincronización recurrente que refleja la carpeta de exportación del CMS al almacenamiento en la nube según un horario (licencia PLUS), de modo que las copias de seguridad de metadatos ocurren automáticamente en lugar de depender de que un miembro del personal recuerde ejecutar una exportación manual.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Programación de un trabajo de copia de seguridad recurrente para metadatos de archivo en RcloneView" class="img-large img-center" />

El modo Dry Run permite al equipo de digitalización previsualizar exactamente qué archivos afectará una sincronización antes de aplicarla, algo importante cuando un trabajo podría, de otro modo, sobrescribir un registro de catálogo corregido con uno desactualizado.

## Cómo empezar

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agregue un remoto para su almacenamiento en la nube principal y un segundo remoto para su proveedor de archivo en frío o copia de seguridad externa.
3. Ejecute una sincronización inicial de sus maestros digitalizados y luego use la comparación de carpetas para confirmar que ambas copias coinciden.
4. Configure un trabajo recurrente para los metadatos del catálogo, de modo que el trabajo de catalogación nunca corra el riesgo de perderse.

Una colección es tan segura como su copia menos verificada — incorporar esa verificación a una rutina, en lugar de confiar en que ocurrió, es lo que mantiene recuperable décadas de trabajo de digitalización.

---

**Guías relacionadas:**

- [Administre las cargas de Internet Archive con RcloneView](https://rcloneview.com/support/blog/manage-internet-archive-uploads-with-rcloneview)
- [Sincronice Google Drive con Internet Archive — Copia de seguridad en la nube con RcloneView](https://rcloneview.com/support/blog/sync-google-drive-to-internet-archive-rcloneview)
- [Almacenamiento en la nube para investigación y academia — Guía con RcloneView](https://rcloneview.com/support/blog/cloud-storage-research-academia-rcloneview)

<CloudSupportGrid />
