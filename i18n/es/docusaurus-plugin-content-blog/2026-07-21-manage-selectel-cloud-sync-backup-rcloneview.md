---
slug: manage-selectel-cloud-sync-backup-rcloneview
title: "Gestiona el almacenamiento de Selectel — Sincroniza y respalda archivos con RcloneView"
authors:
  - alex
description: "Conecta Selectel Object Storage a RcloneView para explorar archivos, sincronizar, montar y respaldar de forma compatible con S3 en Windows, macOS y Linux."
keywords:
  - almacenamiento Selectel
  - Selectel Object Storage
  - GUI de almacenamiento compatible con S3
  - RcloneView Selectel
  - software de copia de seguridad en la nube
  - sincronizar Selectel con la nube
  - gestionar almacenamiento en la nube con GUI
  - herramienta de sincronización de almacenamiento de objetos
  - gestor de archivos multi-nube
  - configuración de credenciales S3
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona el almacenamiento de Selectel — Sincroniza y respalda archivos con RcloneView

> Explora, sincroniza y respalda los buckets de Selectel Object Storage desde una interfaz gráfica, en lugar de editar credenciales S3 a mano en un archivo de configuración.

Selectel Object Storage se accede a través del protocolo compatible con S3 de rclone, lo que significa que conectarse implica introducir correctamente una Access Key, una Secret Key y un endpoint desde el primer intento. RcloneView convierte esa configuración en un formulario guiado y la combina con un explorador de archivos completo, un motor de sincronización y un programador de tareas, de modo que los equipos que ya almacenan datos en Selectel puedan gestionarlo igual que cualquier otro remote, todo en una misma ventana.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Selectel como remote compatible con S3

Añadir Selectel en RcloneView sigue el mismo flujo de introducción de credenciales que se usa para otros servicios compatibles con S3: abre la pestaña Remote > New Remote, elige la opción compatible con S3 e introduce el Access Key ID, la Secret Access Key y el endpoint de Selectel. Connect Manager también permite que RcloneView apunte a una instancia de rclone externa, si tu integración con Selectel ya se ejecuta a través de un daemon de rclone compartido en un servidor en lugar del rclone integrado.

Una vez guardado, el remote aparece como su propia pestaña en el panel del Explorer, junto a cualquier otro almacenamiento en la nube o local ya configurado. Un remote de tipo Alias puede acortar rutas de bucket profundamente anidadas a un nombre corto, más fácil de navegar en el uso diario.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Selectel S3-compatible remote in RcloneView" class="img-large img-center" />

## Explorar, sincronizar y respaldar datos en Selectel

Con el remote conectado, el diseño de dos paneles del File Explorer te permite comparar lo que hay en Selectel con una carpeta local o con otro remote en la nube, lado a lado. Arrastrar archivos entre dos remotes distintos activa una copia, y el menú contextual cubre renombrar, eliminar, obtener tamaño y descarga/carga para la gestión habitual de archivos.

Para copias de seguridad recurrentes, el asistente de Sync recorre en cuatro pasos el origen y destino, la concurrencia de transferencia y las reglas de filtrado, con opciones como la antigüedad máxima de archivo y filtros predefinidos para tipos de medios o documentos. Puedes conectar servicios compatibles con S3 como Selectel con acceso completo de lectura/escritura en la licencia FREE — no se necesita actualizar para volver a escribir datos en el bucket. La sincronización 1:N puede replicar el mismo bucket de Selectel hacia varios destinos en una sola tarea, útil cuando una copia de seguridad debe quedar tanto en una unidad local como en un segundo remote en la nube.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job between Selectel storage and another remote" class="img-large img-center" />

## Automatizar copias de seguridad recurrentes en Selectel

Job Manager mantiene cada tarea de sincronización, copia o movimiento en una sola lista, y cada ejecución queda registrada en Job History con su estado, tamaño de transferencia y número de archivos. Dry Run previsualiza exactamente qué archivos se copiarían o eliminarían antes de ejecutar una transferencia real — vale la pena comprobarlo antes de la primera sincronización grande hacia un bucket de Selectel nuevo.

Los usuarios con licencia PLUS pueden asociar a una tarea una programación al estilo crontab para que las copias de seguridad de Selectel se ejecuten automáticamente en un intervalo recurrente, con una opción de simulación para previsualizar las próximas ejecuciones antes de guardar la programación.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring backup job for Selectel storage" class="img-large img-center" />

## Montar Selectel como unidad local

El almacenamiento de Selectel también puede montarse como unidad virtual, de modo que otras aplicaciones de escritorio puedan leer y escribir el contenido del bucket como si fueran archivos locales. La configuración de montaje incluye el modo de caché VFS (predeterminado: writes), límites de tamaño de caché y el modo de solo lectura, y los montajes pueden iniciarse desde la barra de herramientas del panel del remote o desde el Mount Manager dedicado.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a Selectel bucket as a local drive in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abre la pestaña Remote > New Remote y selecciona la opción compatible con S3 para introducir tus credenciales de Selectel y el endpoint.
3. Usa Folder Compare o arrastrar y soltar para mover los datos existentes a Selectel, y luego configura una tarea de Sync para las copias de seguridad continuas.
4. Añade la tarea a Job Manager y, en PLUS, asocia una programación para que las copias de seguridad se ejecuten sin intervención manual.

Una vez configurado el remote, el almacenamiento de Selectel se comporta como cualquier otra conexión en RcloneView — explorable, sincronizable, montable y listo para respaldarse según una programación.

---

**Guías relacionadas:**

- [Gestiona IONOS Object Storage — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-ionos-object-storage-cloud-sync-rcloneview)
- [Gestiona Vultr Object Storage — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-vultr-object-storage-cloud-sync-backup-rcloneview)
- [Gestiona Linode Object Storage — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-linode-object-storage-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
