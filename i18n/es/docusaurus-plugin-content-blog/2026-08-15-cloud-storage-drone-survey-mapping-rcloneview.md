---
slug: cloud-storage-drone-survey-mapping-rcloneview
title: "Almacenamiento en la nube para empresas de topografía y cartografía con drones — Gestiona grandes conjuntos de datos con RcloneView"
authors:
  - jay
description: "Gestiona imágenes de topografía con drones, ortomosaicos y conjuntos de datos LiDAR en varios proveedores de almacenamiento en la nube con las herramientas de sincronización, montaje y comparación de RcloneView."
keywords:
  - almacenamiento en la nube topografía con drones
  - copia de seguridad empresa cartográfica
  - almacenamiento de archivos ortomosaico
  - sincronización en la nube datos LiDAR
  - copia de seguridad imágenes de drones
  - gestión de datos geoespaciales
  - RcloneView topografía con drones
  - almacenamiento en la nube empresa topográfica
  - transferencia de datos de drones
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

# Almacenamiento en la nube para empresas de topografía y cartografía con drones — Gestiona grandes conjuntos de datos con RcloneView

> Las capturas de vuelo sin procesar, los ortomosaicos generados y las nubes de puntos se acumulan rápidamente — RcloneView los mantiene organizados en cada nube que utiliza tu equipo.

Un solo vuelo de topografía con drones puede producir decenas de miles de imágenes sin procesar, y los resultados generados, como ortomosaicos y nubes de puntos LiDAR, alcanzan habitualmente decenas de gigabytes por emplazamiento. Las empresas de topografía y cartografía suelen repartir estos datos entre una unidad local rápida para el procesamiento activo, almacenamiento en la nube para la entrega a clientes y un nivel de archivo más económico para los proyectos finalizados — lo que significa que los archivos deben moverse constantemente entre ubicaciones. RcloneView gestiona ese movimiento desde una única interfaz en lugar de tener que alternar entre herramientas de subida independientes para cada proveedor.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Organizar capturas sin procesar y entregables generados

Configura remotos independientes para tu archivo de capturas sin procesar, tu espacio de trabajo de procesamiento y la ubicación en la nube donde se comparten los entregables terminados con los clientes. El explorador multipanel de RcloneView permite ver hasta cuatro ubicaciones lado a lado, de modo que puedas confirmar que un ortomosaico generado coincide con su carpeta de vuelo de origen antes de archivar las imágenes sin procesar del disco local.

<img src="/support/images/en/blog/new-remote.png" alt="Configuración de remotos en la nube para datos de topografía con drones en RcloneView" class="img-large img-center" />

Puedes conectar S3, Azure o Backblaze B2 con acceso completo de lectura y escritura en la licencia FREE, algo importante para las empresas de topografía que mueven grandes conjuntos de datos procesados a almacenamiento de objetos para el acceso a largo plazo de los clientes sin coste por puesto.

## Sincronizar grandes conjuntos de datos de vuelo sin subidas manuales

Configura un trabajo de sincronización con el origen en tu carpeta de capturas local y el destino en el almacenamiento en la nube, y luego ajusta el número de transferencias de archivos simultáneas en Advanced Settings según tu ancho de banda de subida — miles de imágenes sin procesar de tamaño pequeño se benefician de mayor concurrencia que un puñado de archivos procesados grandes. Usa el filtro max file age para sincronizar solo los vuelos recientes durante los días de trabajo de campo intensos, dejando ancho de banda libre para entregables urgentes.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Sincronización de imágenes de topografía con drones al almacenamiento en la nube con RcloneView" class="img-large img-center" />

Ejecuta un Dry Run antes de la primera sincronización de un nuevo emplazamiento para confirmar que la estructura de carpetas y el número de archivos coinciden con lo esperado según el registro de vuelo, detectando así una carpeta faltante antes de que se convierta en un problema visible para el cliente.

## Verificar entregables con Folder Compare

Antes de entregar un proyecto a un cliente o archivarlo, usa Folder Compare para comprobar que todo lo subido al almacenamiento en la nube coincide con la carpeta de procesamiento local. Marca los archivos que existen solo en un lado y los archivos con tamaños distintos, lo que permite detectar una subida interrumpida antes de que un cliente descubra un mosaico faltante en su ortomosaico.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparación de archivos locales de topografía con drones con el almacenamiento en la nube en RcloneView" class="img-large img-center" />

Para clientes de topografía recurrentes, guarda estos procesos como trabajos de sincronización programados (licencia PLUS) para que los datos de cada nuevo vuelo lleguen a la carpeta correcta del cliente según el horario que configures, con Job History ofreciendo un registro de exactamente cuándo se entregó cada conjunto de datos.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade remotos para tu unidad de capturas local, el espacio de trabajo de procesamiento y el almacenamiento en la nube de entrega a clientes.
3. Configura un trabajo de sincronización con la concurrencia de transferencia ajustada al tamaño habitual de tu conjunto de datos de vuelo.
4. Ejecuta Folder Compare después de cada subida para confirmar que el conjunto de datos se transfirió por completo antes de archivar las capturas sin procesar.

Mantener los datos de vuelo organizados en distintos niveles de almacenamiento reduce el tiempo dedicado a buscar archivos y aporta más confianza en que cada entrega al cliente está completa.

---

**Guías relacionadas:**

- [Almacenamiento en la nube para agricultura — Gestiona datos de campo con RcloneView](https://rcloneview.com/support/blog/cloud-storage-agriculture-farming-rcloneview)
- [Almacenamiento en la nube para la gestión de proyectos de construcción con RcloneView](https://rcloneview.com/support/blog/cloud-storage-construction-project-management-rcloneview)
- [Acelera las transferencias masivas en la nube con RcloneView](https://rcloneview.com/support/blog/accelerate-large-cloud-transfers-rcloneview)

<CloudSupportGrid />
