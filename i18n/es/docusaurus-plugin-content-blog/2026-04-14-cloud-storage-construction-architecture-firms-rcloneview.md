---
slug: cloud-storage-construction-architecture-firms-rcloneview
title: "Almacenamiento en la nube para empresas de construcción y arquitectura — Simplifica los archivos con RcloneView"
authors:
  - tayson
description: "RcloneView ayuda a las empresas de construcción y arquitectura a gestionar grandes archivos CAD, modelos BIM y archivos de proyectos en distintos proveedores de almacenamiento en la nube con copias de seguridad automatizadas."
keywords:
  - almacenamiento en la nube para empresas de construcción
  - copia de seguridad en la nube para empresas de arquitectura
  - almacenamiento en la nube de archivos CAD
  - sincronización en la nube de BIM
  - gestión de archivos de proyectos de construcción
  - RcloneView arquitectura
  - copia de seguridad en la nube para arquitectos
  - almacenamiento en la nube de archivos de proyectos
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Almacenamiento en la nube para empresas de construcción y arquitectura — Simplifica los archivos con RcloneView

> Las empresas de arquitectura y construcción manejan archivos enormes y versionados — modelos de Revit, dibujos de AutoCAD, escaneos de nube de puntos — que exigen copias de seguridad en la nube confiables y programadas. RcloneView gestiona todo esto desde una única interfaz gráfica.

Una empresa de arquitectura de tamaño mediano genera decenas de gigabytes de datos BIM (Building Information Modeling) por cada proyecto activo. Los archivos de Revit superan habitualmente 1 GB; los escaneos de nube de puntos provenientes de levantamientos LiDAR pueden alcanzar entre 50 y 100 GB por sitio. Cuando un proyecto abarca 18 meses e involucra a 20 colaboradores repartidos en tres oficinas, la pregunta no es si usar almacenamiento en la nube, sino qué nivel de almacenamiento utilizar y cómo automatizar el flujo de trabajo. RcloneView proporciona la capa que falta entre tu almacenamiento de archivos y más de 90 proveedores de nube, sin necesidad de que el personal de TI mantenga scripts personalizados.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Gestión de archivos de proyectos en distintos proveedores de nube

Las empresas de construcción suelen usar un enfoque de almacenamiento por niveles: los proyectos activos residen en un NAS o servidor compartido para un acceso local rápido, mientras que los archivos de proyectos finalizados se trasladan a almacenamiento en la nube rentable como Backblaze B2 o Amazon S3 Glacier. RcloneView gestiona ambos niveles desde la misma interfaz.

Configura un trabajo de Sincronización que refleje `NAS:/Projects/Active/` en Backblaze B2 cada noche, y un trabajo de Copia independiente que traslade los proyectos finalizados de B2 a un archivo profundo compatible con S3 Glacier cuando se marquen como completados. El Administrador de Trabajos se encarga de la programación, y la pestaña de Historial de Trabajos ofrece un registro de auditoría que cumple con los requisitos de documentación de la norma ISO 19650 para la gestión de datos BIM.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling nightly project archive sync jobs in RcloneView" class="img-large img-center" />

## Manejo confiable de archivos CAD y BIM de gran tamaño

Los archivos de Revit y AutoCAD son grandes, con frecuencia se bloquean durante la edición y son sensibles a las transferencias parciales. El motor de sincronización de RcloneView, respaldado por rclone, omite los archivos bloqueados por otro proceso y los marca en la pestaña de Registro, evitando así cargas corruptas. Para los archivos más grandes, activa el remoto virtual **Chunker** en RcloneView para dividir los archivos que superen los límites de tamaño del proveedor en fragmentos manejables.

Para las empresas que usan plataformas de colaboración BIM basadas en la nube (Autodesk Construction Cloud, BIM 360), RcloneView se encarga de la copia de seguridad de los paquetes de datos exportados —exportaciones DWG, conjuntos de láminas en PDF, archivos IFC— hacia un almacenamiento en la nube secundario como red de seguridad sin conexión.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Uploading CAD project files to cloud storage with RcloneView" class="img-large img-center" />

## Almacenamiento de fotos de obra y levantamientos con drones

La documentación de construcción incluye miles de fotos diarias del sitio y resultados de levantamientos con drones —archivos JPEG, RAW y ortomosaicos TIFF— que se acumulan rápidamente. Un sitio con documentación fotográfica diaria genera entre 5 y 15 GB por semana. Las reglas de filtro de RcloneView te permiten incluir solo tipos de archivo específicos (`.jpg`, `.tif`, `.raw`) en un trabajo de copia de seguridad de fotos dedicado, manteniéndolo separado de los archivos de dibujos técnicos.

Usa la función de sincronización 1:N para respaldar los directorios de fotos del sitio tanto en Google Drive (para facilitar el uso compartido en equipo) como en Amazon S3 (para el archivo a largo plazo) de forma simultánea. Ambos destinos reciben los mismos archivos en una sola ejecución del trabajo, sin duplicar el ancho de banda de carga: RcloneView transmite a ambos destinos desde el origen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing site photos to multiple cloud destinations with RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agrega tus remotos de NAS, Backblaze B2 y Amazon S3 en el Administrador de Remotos.
3. Crea un trabajo de Sincronización nocturno para los archivos de proyectos activos y un trabajo de Copia para la migración de proyectos finalizados.
4. Agrega reglas de filtro para incluir solo los tipos de archivo CAD, BIM y de fotos relevantes para cada trabajo.

RcloneView convierte las cargas en la nube improvisadas en un sistema de copia de seguridad estructurado y programado, protegiendo datos de proyectos irremplazables sin añadir carga adicional al equipo de TI.

---

**Guías relacionadas:**

- [Almacenamiento en la nube para arquitectura e ingeniería con RcloneView](https://rcloneview.com/support/blog/cloud-storage-architecture-engineering-cad-rcloneview)
- [Archivo en frío con S3 Glacier y RcloneView](https://rcloneview.com/support/blog/cold-archive-glacier-rcloneview)
- [Sincronización 1:N — Múltiples destinos con RcloneView](https://rcloneview.com/support/blog/one-to-many-sync-multiple-destinations-rcloneview)

<CloudSupportGrid />
