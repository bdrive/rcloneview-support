---
slug: manage-pixeldrain-cloud-sync-rcloneview
title: "Gestiona el almacenamiento en la nube de Pixeldrain — Sincroniza y respalda archivos con RcloneView"
authors:
  - tayson
description: "Conecta Pixeldrain a RcloneView para explorar tus archivos alojados y sincronizarlos con otros proveedores de nube para copias de seguridad o archivado a largo plazo."
keywords:
  - Pixeldrain RcloneView
  - sincronización en la nube de Pixeldrain
  - copia de seguridad de Pixeldrain
  - gestionar archivos de Pixeldrain
  - GUI de rclone para Pixeldrain
  - transferencia de archivos de Pixeldrain
  - copia de seguridad en la nube Pixeldrain
  - configuración de sincronización de Pixeldrain
tags:
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona el almacenamiento en la nube de Pixeldrain — Sincroniza y respalda archivos con RcloneView

> Pixeldrain es un servicio de alojamiento de archivos con funciones de almacenamiento en la nube personal — RcloneView lo conecta con tu ecosistema de nube más amplio para copias de seguridad y una gestión de archivos organizada.

Pixeldrain es una plataforma de intercambio y alojamiento de archivos que también funciona como almacenamiento en la nube personal, permitiendo a los usuarios subir, organizar y compartir archivos. Aunque la interfaz web cubre las operaciones básicas, los usuarios que necesitan sincronizar su contenido de Pixeldrain con otra nube — o descargar archivos para un archivo local — se benefician de una herramienta dedicada. RcloneView incluye Pixeldrain como proveedor compatible, por lo que puedes conectarlo junto con todos tus demás remotos y gestionar transferencias desde una única interfaz.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Pixeldrain a RcloneView

Abre RcloneView y ve a **Remote Manager**. Haz clic en **New Remote** y desplázate por la lista de proveedores para encontrar **Pixeldrain**. La conexión utiliza tu clave de API de Pixeldrain, que puedes generar desde la configuración de tu cuenta en el sitio web de Pixeldrain. Introduce la clave de API en el formulario de configuración y guarda.

Una vez guardada, abre el remoto en el File Explorer. Tus archivos y directorios de Pixeldrain se cargan en el panel, listos para explorar y transferir.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Pixeldrain remote in RcloneView" class="img-large img-center" />

## Explorar y organizar archivos

El File Explorer de RcloneView muestra tu almacenamiento de Pixeldrain con la misma vista de árbol y lista utilizada para todos los demás proveedores. Navega por los directorios, selecciona archivos y usa las opciones del clic derecho para copiar, mover o eliminar. Para colecciones con muchas imágenes, cambia a **Thumbnail View** para ver vistas previas en cuadrícula — útil si alojas fotos o capturas de pantalla en Pixeldrain y quieres identificar el contenido antes de transferirlo.

Abrir un segundo panel apuntando a otro remoto — Google Drive, Backblaze B2 o una carpeta local — te permite arrastrar y soltar archivos directamente entre Pixeldrain y tu destino.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Pixeldrain folders with another cloud in RcloneView" class="img-large img-center" />

## Crear un trabajo de copia de seguridad

Para copias de seguridad sistemáticas de tu contenido de Pixeldrain, usa la función **Job**. Ve a **Jobs**, haz clic en **New Job** y establece Pixeldrain como origen. Elige cualquier remoto configurado como destino. En el paso 2 del asistente de trabajos, configura las opciones de transferencia:

- **Number of transfers**: cuántos archivos se transfieren simultáneamente
- **Dry Run**: previsualiza lo que se copiará sin mover nada realmente
- **Checksum verification**: actívalo para confirmar la integridad de los datos después de la transferencia

Ejecuta el trabajo y RcloneView muestra el progreso en tiempo real con la velocidad de transferencia y el número de archivos. Al finalizar el trabajo, el resultado queda registrado en **Job History**.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Pixeldrain files to another cloud provider" class="img-large img-center" />

## Comparación de carpetas para verificación

Después de migrar contenido de Pixeldrain a otra nube, la herramienta **Folder Compare** te da la confianza de que la transferencia se completó. Abre tanto la carpeta de origen de Pixeldrain como la de destino una junto a la otra, y RcloneView resalta los archivos que existen solo en un lado o que difieren en tamaño. Esto es especialmente útil cuando has realizado la migración en varias sesiones y quieres confirmar que no se ha omitido nada.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing Pixeldrain sync records" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Genera tu clave de API de Pixeldrain desde la configuración de tu cuenta en pixeldrain.com.
3. Abre **Remote Manager**, haz clic en **New Remote**, selecciona **Pixeldrain** e introduce tu clave de API.
4. Explora tus archivos y configura un trabajo de copia de seguridad hacia tu nube de destino preferida.

RcloneView facilita trasladar el contenido de Pixeldrain a una configuración de almacenamiento a largo plazo más estructurada.

---

**Guías relacionadas:**

- [Migración de nube a nube con RcloneView](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)
- [Solucionar archivos faltantes en la sincronización en la nube tras una transferencia](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)
- [Monitoreo del historial de trabajos y registros de transferencia](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
