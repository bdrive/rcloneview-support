---
slug: cloud-storage-civil-engineering-rcloneview
title: "Almacenamiento en la nube para empresas de ingeniería civil — archivos de proyecto, datos topográficos y copias de seguridad con RcloneView"
authors:
  - tayson
description: "Almacenamiento en la nube para empresas de ingeniería civil: organice planos de proyecto, datos topográficos y copias de seguridad en varias nubes con RcloneView, una GUI multiplataforma."
keywords:
  - almacenamiento en la nube para ingeniería civil
  - copia de seguridad de archivos de ingeniería civil
  - sincronización de archivos de proyectos de ingeniería
  - copia de seguridad en la nube de datos topográficos
  - copia de seguridad multinube para ingenieros
  - RcloneView
  - GUI de sincronización en la nube
  - archivos de planos grandes en la nube
  - almacenamiento en la nube para archivo de proyectos
  - rclone GUI
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

# Almacenamiento en la nube para empresas de ingeniería civil — archivos de proyecto, datos topográficos y copias de seguridad con RcloneView

> Mantenga a salvo planos, datos topográficos y proyectos cerrados en varias nubes sin escribir un solo comando.

Una empresa de ingeniería civil de tamaño medio puede tener proyectos activos de diseño de carreteras en Google Drive, entregables para clientes en Box u OneDrive, y años de archivos de proyectos cerrados en un NAS. Cada ubicación tiene su propia interfaz, lo que dificulta mantener copias de seguridad coherentes. RcloneView reúne todas en una sola ventana para que pueda copiar, comparar y programar transferencias de forma visual.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué los datos de ingeniería necesitan un enfoque multinube

Los proyectos de ingeniería generan conjuntos de archivos grandes y variados: planos CAD, exportaciones GIS, escaneos de nubes de puntos, hojas de cálculo y paquetes PDF firmados. Los clientes suelen dictar dónde deben almacenarse los entregables, por lo que un único proveedor rara vez lo cubre todo. RcloneView se conecta con más de 90 proveedores, de modo que Google Drive, Box, OneDrive, Amazon S3 y su NAS local pueden convivir en el Explorador.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir remotos en la nube en RcloneView para una empresa de ingeniería" class="img-large img-center" />

RcloneView permite montar y sincronizar más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux, de modo que los portátiles de campo y las estaciones de trabajo de la oficina comparten el mismo flujo de trabajo.

## Archivar proyectos cerrados en almacenamiento de objetos de bajo coste

Una vez cerrado un proyecto, sus archivos rara vez cambian, pero deben conservarse durante años. Copie la carpeta del proyecto finalizado desde su espacio de trabajo activo a un bucket compatible con S3, como Backblaze B2 o Wasabi, usando el Explorador de doble panel o arrastrando y soltando entre remotos. Mover entre remotos distintos realiza una copia, por lo que el original permanece intacto hasta que verifique el resultado.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferencia de nube a nube de un archivo de proyecto" class="img-large img-center" />

## Verificar los entregables con Folder Compare

Antes de eliminar nada de una unidad de trabajo, ejecute Folder Compare entre el origen y el archivo. Los filtros muestran los archivos solo a la izquierda, solo a la derecha y los diferentes, para confirmar que cada conjunto de planos llegó al destino. Ejecute primero un Dry Run en cualquier trabajo de sincronización para previsualizar exactamente qué archivos se copiarían o se eliminarían.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare mostrando diferencias entre carpetas de proyecto" class="img-large img-center" />

## Programar copias de seguridad nocturnas de proyectos activos

Cree un trabajo de sincronización desde su recurso compartido de proyectos a una segunda nube y añada una programación al estilo crontab para que las copias se ejecuten fuera del horario laboral. La programación requiere la licencia PLUS; los trabajos manuales, el historial de trabajos (Job History) y la sincronización 1:N a varios destinos funcionan con la licencia FREE. El historial de trabajos registra el estado, el tamaño y el número de archivos de cada ejecución, lo que le proporciona un registro de auditoría.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Programar un trabajo de copia de seguridad nocturna en RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añada remotos para su espacio de trabajo activo, su NAS y un bucket de archivo.
3. Cree un trabajo de sincronización de los proyectos activos al archivo y ejecute primero un Dry Run.
4. Añada una programación (PLUS) y revise el historial de trabajos tras las primeras ejecuciones.

Proteger años de registros de ingeniería ya no requiere un script personalizado.

---

**Guías relacionadas:**

- [Almacenamiento en la nube para estudios de arquitectura](https://rcloneview.com/support/blog/cloud-storage-architecture-firms-rcloneview)
- [Dry Run — previsualizar la sincronización en la nube](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [Historial de trabajos y registros de transferencia](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
