---
slug: cloud-storage-surveying-firms-rcloneview
title: "Almacenamiento en la nube para empresas de topografía — Gestione archivos de datos de campo de gran tamaño con RcloneView"
authors:
  - tayson
description: "Las empresas de topografía manejan enormes conjuntos de datos LiDAR, nubes de puntos y GPS. Descubra cómo RcloneView sincroniza, respalda y monta datos de campo en distintos servicios de almacenamiento en la nube."
keywords:
  - almacenamiento en la nube para topógrafos
  - copia de seguridad de nubes de puntos LiDAR
  - gestión de datos de topografía terrestre
  - sincronización de datos de campo GPS
  - almacenamiento en la nube para empresas de topografía
  - herramienta de sincronización en la nube para archivos grandes
  - RcloneView para topografía
  - copia de seguridad en la nube de datos geoespaciales
  - almacenamiento de datos de topografía con drones
  - copia de seguridad multi-nube para empresas de ingeniería
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

# Almacenamiento en la nube para empresas de topografía — Gestione archivos de datos de campo de gran tamaño con RcloneView

> Las nubes de puntos, los escaneos LiDAR y los datos de topografía GPS se acumulan rápidamente — RcloneView mantiene a los equipos de campo y a la oficina trabajando con el mismo conjunto de datos sincronizado.

Las empresas de topografía terrestre, geoespacial e ingeniería civil generan algunas de las cargas de archivos más pesadas de cualquier sector: escaneos LiDAR sin procesar, conjuntos de fotogrametría con drones y nubes de puntos de estación total que fácilmente alcanzan decenas de gigabytes por obra. Los portátiles de campo se llenan rápidamente, y llevar esos datos de forma segura a un archivo central — sin una carga manual lenta cada noche — es un cuello de botella operativo real. RcloneView ofrece a los equipos de topografía una única ventana para mover esos datos entre el almacenamiento de campo, los archivos en la nube y la oficina, sin importar qué proveedores utilice ya la empresa.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Centralice los datos de múltiples obras

Los equipos de topografía a menudo regresan del campo con datos en discos locales, unidades NAS o servidores FTP/SFTP configurados en el remolque de la obra. RcloneView se conecta a todos ellos junto con más de 90 proveedores en la nube — incluido el almacenamiento de objetos compatible con S3 que muchas empresas usan para el archivo a largo plazo de datos de escaneo sin procesar. Con dos o más paneles del Explorador abiertos uno al lado del otro, un gerente de proyecto puede examinar la carpeta sin procesar de un portátil de campo junto al archivo en la nube de la empresa y confirmar exactamente qué ha llegado antes de vaciar el almacenamiento local.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferencia de datos de topografía entre almacenamiento local y archivo en la nube en RcloneView" class="img-large img-center" />

La acción **Get Size** (Obtener tamaño) es especialmente útil aquí — haga clic derecho en una carpeta de proyecto para calcular su tamaño total antes de iniciar una transferencia, de modo que los equipos puedan planificar según los límites de ancho de banda en ubicaciones remotas en lugar de iniciar una carga que se detiene a mitad de camino.

## Automatice las cargas nocturnas desde el almacenamiento de campo

En lugar de depender de que alguien recuerde copiar archivos al final de cada día, configure un trabajo de Sync desde la carpeta de proyecto de la estación de trabajo de campo hasta un remoto de archivo en la nube. Las reglas de filtrado pueden excluir archivos temporales de caché del escáner o vistas previas en miniatura, de modo que solo se cargue el conjunto de datos terminado. RcloneView monta y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux, de forma que la misma configuración de trabajo funciona ya sea que la máquina de campo sea un portátil con Windows o una estación de trabajo Linux que ejecuta el software de escaneo.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Ejecución de un trabajo de sincronización programado para cargar datos de topografía en el almacenamiento en la nube" class="img-large img-center" />

## Verifique las cargas antes de vaciar el almacenamiento local

Perder el escaneo LiDAR de un día por una carga fallida es costoso de rehacer. Ejecute un **Dry Run** (simulación) antes de cualquier sincronización para previsualizar exactamente qué se transferirá, y luego use **Folder Compare** (comparar carpetas) para confirmar que la copia en la nube coincide con los datos de campo archivo por archivo — incluidas las comprobaciones de tamaño — antes de que alguien elimine los originales locales para liberar espacio en disco para la siguiente obra.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparación de una carpeta local de datos de topografía con el archivo en la nube para su verificación" class="img-large img-center" />

## Mantenga organizado el archivo de la oficina

Una vez que los datos llegan a la nube, los trabajos de sincronización programados pueden reflejar los proyectos terminados en un remoto de archivo secundario para redundancia, y el Job History (historial de trabajos) proporciona un registro con marca de tiempo de qué se transfirió y cuándo — útil para el seguimiento de entregables a clientes y el control de calidad interno.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Programación de trabajos recurrentes de copia de seguridad de datos de topografía en RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Conecte su almacenamiento de campo (SFTP, disco local o NAS) y su remoto de archivo en la nube.
3. Cree un trabajo de Sync con filtros para excluir archivos temporales del escáner y luego ejecute un Dry Run.
4. Programe el trabajo para que se ejecute después de cada jornada de campo y revise el Job History para confirmar su finalización.

Con los datos de campo llegando de forma fiable a la nube cada noche, los equipos de topografía dedican menos tiempo a vigilar las cargas y más tiempo a la siguiente obra.

---

**Guías relacionadas:**

- [Almacenamiento en la nube para la gestión de proyectos de construcción](https://rcloneview.com/support/blog/cloud-storage-construction-project-management-rcloneview)
- [Almacenamiento en la nube para arquitectura, ingeniería y CAD](https://rcloneview.com/support/blog/cloud-storage-architecture-engineering-cad-rcloneview)
- [Estrategia de copia de seguridad multi-nube con RcloneView](https://rcloneview.com/support/blog/multi-cloud-backup-strategy-rcloneview)

<CloudSupportGrid />
