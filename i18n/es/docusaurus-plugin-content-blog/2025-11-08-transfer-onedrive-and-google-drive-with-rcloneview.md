---
slug: transfer-onedrive-and-google-drive-with-rcloneview
title: "Transfiere archivos entre OneDrive y Google Drive con RcloneView"
authors:
  - tayson
description: "Mueve archivos entre Microsoft OneDrive y Google Drive sin descargas: usa el arrastrar y soltar de RcloneView, Comparar, Sincronización y Trabajos programados para transferencias fiables entre nubes."
keywords:
  - onedrive to google drive transfer
  - google drive to onedrive migration
  - rcloneview
  - cloud to cloud sync
  - drag and drop transfer
  - scheduled sync jobs
  - compare folders
  - resumable uploads
  - oauth login
tags:
  - RcloneView
  - cloud-migration
  - onedrive
  - google-drive
  - sync
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Transfiere archivos entre OneDrive y Google Drive con RcloneView

> Cambia de nube sin volver a descargar gigabytes. RcloneView te ofrece un Explorador de dos paneles, Comparar, Sincronización y Trabajos programados para que los movimientos entre OneDrive y Google Drive sean rápidos y predecibles, sin necesidad de CLI.


<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />



## ¿Por qué usar RcloneView para OneDrive ↔ Google Drive?

- Inicios de sesión OAuth seguros para ambas nubes; sin tokens que pegar.
- Transferencias reanudables con registro de progreso, reintentos y límites de ancho de banda.
- Explorador de dos paneles para movimientos por arrastrar y soltar sin scripts.
- Comparar para resaltar archivos nuevos o modificados antes de copiar.
- Sincronización unidireccional o bidireccional, además de Trabajos reutilizables y programación.
- Simulación (dry-run) opcional y filtros para controlar exactamente qué se mueve.

RcloneView añade una interfaz guiada sobre rclone, de modo que incluso las migraciones grandes se mantienen fiables, mientras los usuarios avanzados siguen teniendo acceso a los parámetros avanzados cuando los necesitan.

<img src="/support/images/en/tutorials/open-google-drive-and-onedrive.png" alt="transfer files between onedrive and google drive" class="img-large img-center" />


## Antes de empezar

- Inicia sesión en las cuentas de OneDrive y Google Drive.
- Instala RcloneView desde la última versión: [Descargar](https://rcloneview.com/src/download.html).
- Comprueba las cuotas de la nube y los límites diarios de la API (Google Drive impone 750 GB/día por usuario para subidas).
- Para obtener el mejor rendimiento, mantén RcloneView en ejecución durante trabajos largos y prefiere redes cableadas.

## Paso 1: Conecta ambos remotos de nube

1. Abre **Remoto → + Nuevo remoto**.
2. En **Proveedor**, elige **OneDrive** y haz clic en **Conectar** para completar el inicio de sesión OAuth de Microsoft.
3. Repite el proceso para **Google Drive** y completa el flujo OAuth.
4. Confirma que ambos remotos aparecen en el Administrador de remotos.

👉 Más información: [Añadir remoto de Google Drive](/howto/#step-2-adding-remote-storage-google-drive-example)

<img src="/support/images/en/howto/remote-storage-connection-settings/remote-manager-mega-view.png" alt="Remote Manager showing connected cloud remotes" class="img-large img-center" />

## Paso 2: Abre ambos remotos en el panel del Explorador

1. Ve a la pestaña **Explorar**.
2. En el panel izquierdo, haz clic en **+** y abre tu remoto de **OneDrive**.
3. En el panel derecho, haz clic en **+** y abre tu remoto de **Google Drive**.
4. Navega hasta las carpetas de origen y destino que planeas sincronizar.


## Cuatro formas de mover archivos

### Método 1: Arrastrar y soltar entre paneles del Explorador

1. Selecciona archivos o carpetas en el panel de OneDrive.
2. Arrástralos al panel de Google Drive (o en la dirección opuesta).
3. Observa el progreso en la pestaña **Transferencia**; pausa/reanuda si es necesario.

👉 Más detalles: [Explorar y gestionar almacenamiento remoto](/howto/rcloneview-basic/browse-and-manage-remote-storage)

  <img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

### Método 2: Comparar y luego copiar o eliminar

1. Abre la carpeta de origen a la izquierda y la de destino a la derecha.
2. Haz clic en **Comparar** en la barra de herramientas.
3. RcloneView resalta los archivos únicos, las discrepancias de tamaño y las coincidencias.
4. Selecciona los elementos a mover y elige **Copiar →** o **← Copiar**.
5. Usa **Eliminar** con precaución para limpiar datos antiguos.

👉 Más información: [Comparar el contenido de carpetas](/howto/rcloneview-basic/compare-folder-contents)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare OneDrive and Google Drive folders" class="img-large img-center" />

### Método 3: Sincronizar o guardar como Trabajo

1. Selecciona tu origen de OneDrive y tu destino de Google Drive.
2. Haz clic en **Sincronizar** y elige unidireccional (OneDrive → Google Drive) o bidireccional.
3. Revisa la vista previa, ajusta los filtros (incluir/excluir) y luego inicia.
4. Haz clic en **Guardar en Trabajos** para reutilizar la misma sincronización más adelante.

👉 Más información:

- [Sincronizar almacenamientos remotos](/howto/rcloneview-basic/synchronize-remote-storages)
- [Crear trabajos de sincronización](/howto/rcloneview-basic/create-sync-jobs)
- [Ejecutar y gestionar trabajos](/howto/rcloneview-basic/execute-manage-job)

<img src="/support/images/en/howto/rcloneview-basic/add-job-configure-storage.png" alt="Configure sync job between OneDrive and Google Drive" class="img-large img-center" />

### Método 4: Programar trabajos de sincronización automáticos

1. Abre **Administrador de trabajos → Añadir trabajo**.
2. Establece **OneDrive** como origen y **Google Drive** como destino (o viceversa).
3. Elige una programación (cada hora, diaria, semanal o con estilo cron).
4. Guarda y activa el trabajo; RcloneView lo ejecutará automáticamente.
5. Revisa los registros y el historial para verificarlo.

👉 Más información: [Programación y ejecución de trabajos](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OneDrive to Google Drive sync job" class="img-large img-center" />

## Consejos para transferencias multi-nube sin problemas

- Usa la **simulación (dry-run)** antes de sincronizaciones grandes para confirmar qué cambiará.
- Para carpetas compartidas de OneDrive/Drive, asegúrate de tener permisos de edición en ambos lados.
- Usa **límites de ancho de banda** durante el horario laboral para evitar restricciones.
- Si Google Drive alcanza el límite de 750 GB/día, divide el trabajo en varios días o cuentas.
- Mantén abierta la pestaña **Transferencia** para hacer seguimiento de los reintentos y el rendimiento.

## Resumen

RcloneView elimina el vaivén de descargar y volver a subir entre **OneDrive** y **Google Drive**. Con navegación en paralelo, Comparar, Sincronización, Trabajos reutilizables y programación, puedes ejecutar movimientos puntuales o copias de seguridad recurrentes con confianza, sin necesidad de línea de comandos.

<CloudSupportGrid />
