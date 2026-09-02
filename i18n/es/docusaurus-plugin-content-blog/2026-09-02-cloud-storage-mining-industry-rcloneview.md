---
slug: cloud-storage-mining-industry-rcloneview
title: "Almacenamiento en la nube para empresas mineras — Gestione datos de estudios con RcloneView"
authors:
  - morgan
description: "Centralice datos de estudios con drones, LiDAR y GIS de sitios mineros remotos con RcloneView — almacenamiento en la nube creado para operaciones mineras."
keywords:
  - almacenamiento en la nube para empresas mineras
  - copia de seguridad en la nube para la industria minera
  - almacenamiento de datos de estudios geológicos
  - sincronización en la nube de datos LiDAR
  - copia de seguridad de sitios mineros remotos
  - RcloneView minería
  - almacenamiento en la nube GIS para minería
  - copia de seguridad en la nube de estudios con drones
  - gestión de datos de exploración minera
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

# Almacenamiento en la nube para empresas mineras — Gestione datos de estudios con RcloneView

> Saque las imágenes de dron, los escaneos LiDAR y los archivos de estudios geológicos de los portátiles en sitios remotos y llévelos a un almacenamiento en la nube centralizado sin necesidad de un equipo de TI dedicado en el lugar.

Las operaciones mineras generan enormes volúmenes de datos geoespaciales — sobrevuelos con drones, nubes de puntos LiDAR, registros de sondeos y modelos CAD — a menudo capturados en sitios con conectividad limitada y sin sala de servidores local. Los equipos de campo necesitan una forma fiable de llevar esos datos al almacenamiento central en cuanto haya conexión disponible, y los ingenieros en la sede necesitan explorar y verificar los datos sin descargar terabytes solo para comprobar un recuento de archivos. RcloneView ofrece a ambos grupos una única aplicación de escritorio que conecta discos locales, almacenamiento en la nube y almacenamiento de objetos de nivel de archivo desde una sola ventana. Conecte S3, Azure o Backblaze B2 con acceso completo de lectura/escritura ya con la licencia FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Centralice los datos de estudios de sitios remotos

Los portátiles de sitio suelen guardar las capturas de dron sin procesar y las exportaciones de LiDAR como archivos locales hasta que haya conexión disponible para subirlos. En RcloneView, un disco local o una unidad externa aparece en su propio panel de Explorer junto a sus remotos en la nube, de modo que un ingeniero de campo puede explorar los archivos del estudio del día y copiarlos en un bucket compatible con S3 — Wasabi, AWS S3 o Backblaze B2 son opciones habituales para el archivado a largo plazo y rentable de imágenes a las que rara vez se vuelve a acceder pero que deben conservarse por cumplimiento normativo.

<img src="/support/images/en/blog/new-remote.png" alt="Conexión de unidades locales de estudio y remotos de almacenamiento en la nube en RcloneView" class="img-large img-center" />

## Sincronice los datos del sitio con filtros que omiten lo innecesario

No todos los archivos de una unidad de estudio necesitan llegar a la nube. El paso de filtrado de sincronización de RcloneView le permite excluir archivos temporales de procesamiento por extensión, limitar el tamaño máximo de archivo o limitar hasta qué profundidad avanza la sincronización en una estructura de carpetas de proyecto anidada — útil cuando las carpetas de captura sin procesar están junto a gigabytes de resultados de renderizado intermedios que nunca necesitan salir del portátil del sitio.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Sincronización de datos de estudio filtrados desde una unidad de sitio al almacenamiento en la nube" class="img-large img-center" />

Para sitios con un enlace ascendente satelital o celular limitado, ejecutar la sincronización durante la noche como un trabajo programado (licencia PLUS) hace que la mayor parte de la transferencia se realice automáticamente sin ocupar la conexión durante el horario laboral.

## Verifique la integridad de los datos antes de archivarlos

Los registros de estudios y de cumplimiento normativo deben poder demostrarse íntegros una vez que llegan al almacenamiento central. Folder Compare coloca la carpeta local del sitio y el archivo en la nube uno junto al otro, marca los archivos que difieren en tamaño y permite que la comparación basada en sumas de verificación confirme que el contenido coincide, en lugar de depender solo de los nombres de archivo y las marcas de tiempo.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparación de una carpeta de estudio local con la copia archivada en la nube en RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añada la unidad local de su sitio y un remoto en la nube o compatible con S3 para el archivo.
3. Configure los filtros de sincronización para excluir archivos temporales e intermedios.
4. Ejecute un Dry Run, guarde el trabajo y revise el Job History después de cada sincronización.

Contar con datos fiables procedentes de sitios remotos significa menos sorpresas cuando los equipos de ingeniería y cumplimiento normativo los necesitan.

---

**Guías relacionadas:**

- [Almacenamiento en la nube para construcción y gestión de proyectos — RcloneView](https://rcloneview.com/support/blog/cloud-storage-construction-project-management-rcloneview)
- [Almacenamiento en la nube para energía y servicios públicos — RcloneView](https://rcloneview.com/support/blog/cloud-storage-energy-utilities-rcloneview)
- [Almacenamiento en la nube para arquitectura, ingeniería y CAD — RcloneView](https://rcloneview.com/support/blog/cloud-storage-architecture-engineering-cad-rcloneview)

<CloudSupportGrid />
