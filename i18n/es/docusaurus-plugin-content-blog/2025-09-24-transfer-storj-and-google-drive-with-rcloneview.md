---
slug: transfer-storj-and-google-drive-with-rcloneview
title: "Transfiere archivos entre Storj y Google Drive con RcloneView"
authors:
  - tayson
description: "Mueve datos entre Storj y Google Drive sin volver a descargarlos: usa arrastrar y soltar, Comparar, Sincronizar y Trabajos programados de RcloneView con OAuth y concesiones de acceso de Storj."
keywords:
  - storj to google drive
  - google drive to storj
  - rcloneview
  - cloud to cloud transfer
  - access grant
  - drag and drop sync
  - scheduled jobs
  - compare folders
  - resumable uploads
  - s3 compatible storage
tags:
  - RcloneView
  - cloud-migration
  - storj
  - google-drive
  - sync
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Transfiere archivos entre Storj y Google Drive con RcloneView

> Mueve carpetas entre **Storj** y **Google Drive** sin tocar la línea de comandos. RcloneView te ofrece paneles del Explorador lado a lado, Comparar, Sincronizar y Trabajos programados para que las transferencias de nube a nube sean rápidas y predecibles.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ¿Por qué usar RcloneView para Storj ↔ Google Drive?

- Inicio de sesión OAuth para Google Drive; soporte de concesión de acceso para Storj (sin necesidad de CLI manual).
- Transferencias multihilo y reanudables con registros de progreso y reintentos.
- Explorador de dos paneles para movimientos por arrastrar y soltar.
- Comparar para previsualizar diferencias antes de copiar o eliminar.
- Sincronización con filtros y simulación (dry-run), además de Trabajos reutilizables y programación.
- Límites de ancho de banda y controles de limitación para mantener fluidas las horas de trabajo.

RcloneView se basa en rclone, por lo que obtienes fiabilidad y opciones avanzadas, sin escribir scripts.

## Antes de empezar

- Ten lista tu **concesión de acceso de Storj** (incluye el alcance de cifrado). Guárdala de forma segura.
- Inicia sesión en Google Drive y ten en cuenta su límite de carga de 750 GB/día por usuario.
- Instala la última versión de RcloneView: [Descargar](https://rcloneview.com/src/download.html).
- Para transferencias grandes, prefiere conexiones por cable y mantén RcloneView en ejecución.

## Paso 1: Conecta tus remotos en la nube

1. Abre **Remoto → + Nuevo remoto**.
2. Elige **Storj** y pega tu **concesión de acceso**. (Si usas una frase de cifrado independiente, agrégala en las opciones). Guarda el remoto.
3. Repite el proceso para **Google Drive**, haz clic en **Conectar** y completa el inicio de sesión OAuth en el navegador.
4. Confirma que ambos remotos aparezcan en el Administrador de remotos.

👉 Más información: [Agregar remoto de Google Drive](/howto/#step-2-adding-remote-storage-google-drive-example)  
👉 Administrar remotos: [Administrador de remotos](/howto/rcloneview-basic/remote-manager/)

## Paso 2: Abre ambos remotos en el panel del Explorador

1. Ve a **Explorar**.
2. En el panel izquierdo, haz clic en **+** y abre tu remoto de **Storj**.
3. En el panel derecho, haz clic en **+** y abre tu remoto de **Google Drive**.
4. Navega hasta los buckets/carpetas de origen y destino que deseas mover.


## Cuatro métodos para transferencias entre Storj y Google Drive

### Método 1: Arrastrar y soltar entre paneles

1. Selecciona archivos o carpetas en el panel de Storj.
2. Arrástralos al panel de Google Drive (o viceversa).
3. Sigue el progreso en la pestaña **Transferencia**; pausa/reanuda según sea necesario.

👉 Más detalles: [Explorar y administrar almacenamiento remoto](/howto/rcloneview-basic/browse-and-manage-remote-storage)

### Método 2: Comparar y luego copiar o eliminar

1. Abre el origen en el panel izquierdo y el destino en el derecho.
2. Haz clic en **Comparar**.
3. RcloneView resalta los elementos únicos, las diferencias de tamaño y las coincidencias.
4. Selecciona los elementos que quieras mover y luego elige **Copiar →** o **← Copiar**.
5. Usa **Eliminar** con cuidado para limpiar duplicados o datos antiguos.

👉 Más información: [Comparar el contenido de carpetas](/howto/rcloneview-basic/compare-folder-contents)

### Método 3: Sincronizar o guardar como Trabajo

1. Selecciona tu origen de Storj y tu destino de Google Drive.
2. Haz clic en **Sincronizar** y elige sincronización unidireccional o bidireccional.
3. Previsualiza los cambios, ajusta los filtros (incluir/excluir) y luego inicia el proceso.
4. Haz clic en **Guardar en Trabajos** para reutilizar la configuración más adelante.

👉 Más información:

- [Sincronizar almacenamientos remotos](/howto/rcloneview-basic/synchronize-remote-storages)
- [Crear trabajos de sincronización](/howto/rcloneview-basic/create-sync-jobs)
- [Ejecutar y administrar trabajos](/howto/rcloneview-basic/execute-manage-job)

### Método 4: Programar trabajos de sincronización recurrentes

1. Abre **Administrador de trabajos → Agregar trabajo**.
2. Configura **Storj** como origen y **Google Drive** como destino (o viceversa).
3. Elige una programación (cada hora, diaria, semanal o similar a cron).
4. Activa el trabajo y deja que RcloneView lo ejecute automáticamente.
5. Revisa los registros y el historial para verificar que se haya completado correctamente.

👉 Más información: [Programación y ejecución de trabajos](/howto/rcloneview-advanced/job-scheduling-and-execution)

## Consejos para transferencias fluidas

- Usa la **simulación (dry-run)** antes de sincronizaciones grandes para confirmar qué cambiará.
- Para Storj, mantén tu concesión de acceso con un alcance restringido (específico del bucket) para mayor seguridad.
- Si las cargas se estancan, reduce la concurrencia o establece límites de ancho de banda para reducir la limitación.
- Cuando Google Drive se acerque al límite diario, divide los trabajos entre varios días o cuentas.
- Vigila la pestaña **Transferencia** para ver reintentos, velocidades y cualquier mensaje de la API.

## Resumen

RcloneView simplifica las migraciones entre Storj y Google Drive: conecta los remotos, navega lado a lado, compara, sincroniza o programa trabajos recurrentes, todo sin la línea de comandos.

<CloudSupportGrid />
