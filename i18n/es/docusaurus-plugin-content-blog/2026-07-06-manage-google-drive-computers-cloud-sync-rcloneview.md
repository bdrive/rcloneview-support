---
slug: manage-google-drive-computers-cloud-sync-rcloneview
title: "Gestiona Google Drive Computers — Sincroniza y respalda archivos con RcloneView"
authors:
  - jay
description: "Conecta y respalda las carpetas de Google Drive Computers en RcloneView, sincronizando datos de copia de seguridad de escritorio hacia más de 90 proveedores en la nube desde una sola interfaz."
keywords:
  - google drive computers
  - copia de seguridad de google drive computers
  - root_folder_id google drive
  - rcloneview google drive computers
  - copia de seguridad y sincronización de la carpeta computers
  - copia de seguridad de escritorio de google drive
  - sincronización de google drive computers
  - gestionar google drive computers
tags:
  - google-drive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona Google Drive Computers — Sincroniza y respalda archivos con RcloneView

> Las carpetas de escritorio que la aplicación Backup and Sync de Google envía a Drive residen fuera del árbol normal de Drive — RcloneView se conecta a ellas directamente para que puedan explorarse, copiarse y respaldarse como cualquier otro remoto.

Cuando una estación de trabajo ejecuta el cliente de escritorio de Google Drive con las carpetas "Back up my Computer" habilitadas, esos archivos terminan en una sección de Drive que los remotos estándar no pueden ver de forma predeterminada — se direcciona mediante un ID de equipo, no mediante una ruta de carpeta normal. Eso lo hace incómodo de alcanzar desde una GUI, e incómodo de incorporar a una estrategia de copia de seguridad o archivado más amplia. RcloneView expone esto como una configuración de remoto configurable, de modo que una copia de seguridad de Computers se convierte en una fuente más que puedes explorar, filtrar y copiar junto con tu almacenamiento en la nube habitual.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar a una copia de seguridad de Computers

La configuración de remoto estándar de Google Drive solo muestra tu propia raíz de Drive y las carpetas que hayas creado allí. Para acceder a una copia de seguridad de Computers, el asistente New Remote de RcloneView acepta un valor `root_folder_id` que apunta al ID de copia de seguridad del equipo específico — una vez configurado, las carpetas respaldadas de esa máquina (Desktop, Documents, o lo que se haya seleccionado en el cliente de escritorio) aparecen en el panel Explorer exactamente como un árbol de carpetas normal. Esto es útil para equipos de TI que gestionan varios portátiles de empleados, o para cualquiera que quiera comprobar qué ha capturado realmente el cliente Backup and Sync de una máquina determinada sin iniciar sesión en un navegador.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring a Google Drive remote with root_folder_id to access a Computers backup in RcloneView" class="img-large img-center" />

Una vez conectado, el remoto admite las mismas operaciones de archivo que cualquier otra conexión de Google Drive: vistas previas en miniatura, navegación por árbol de carpetas, copiar/descargar con clic derecho, y Get Size para auditar cuánto ha enviado a Drive una máquina determinada. RcloneView monta y sincroniza a través de más de 90 proveedores desde la misma ventana, de modo que una copia de seguridad de Computers puede estar en un panel mientras un archivo de destino está en otro.

## Consolidar varias máquinas en un solo archivo

Las organizaciones que respaldan varias estaciones de trabajo terminan con una carpeta Computers por máquina, cada una direccionada por su propio ID, lo que dificulta obtener una vista única de "todo lo respaldado desde los portátiles de la empresa". Configurar un remoto independiente por máquina y ejecutar trabajos de sincronización programados de un solo sentido hacia un destino compartido — un NAS local, un bucket de S3, o una segunda cuenta de Drive — consolida esos datos de copia de seguridad dispersos en un solo lugar que realmente controlas, en lugar de dejarlos bloqueados dentro de la vista de Drive de cada empleado.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing a Google Drive Computers backup to a consolidated archive destination in RcloneView" class="img-large img-center" />

Los ajustes de filtrado en el Paso 3 del asistente de sincronización ayudan a mantener estos trabajos eficientes — excluir archivos temporales, cachés del sistema o extensiones no esenciales significa que el archivo consolidado solo contiene lo que realmente vale la pena conservar, en lugar de una réplica completa de cada archivo que el cliente de escritorio haya capturado.

## Programar comprobaciones recurrentes

Una copia de seguridad de Computers no es estática — crece cada vez que el cliente de escritorio ejecuta su propio ciclo de sincronización, por lo que una copia única en tu archivo queda obsoleta rápidamente. Los usuarios con licencia PLUS pueden adjuntar una programación tipo crontab al trabajo de sincronización para que los archivos recién respaldados se recojan automáticamente de forma recurrente. Job History muestra entonces exactamente cuándo se capturó por última vez la carpeta Computers de cada máquina, el tamaño transferido y si la ejecución se completó correctamente.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring sync job for a Google Drive Computers remote in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Crea un nuevo remoto de Google Drive y establece `root_folder_id` con el ID de copia de seguridad del equipo objetivo.
3. Explora el panel Explorer para confirmar que aparecen las carpetas de escritorio esperadas.
4. Configura un trabajo de sincronización de un solo sentido hacia un destino de archivo consolidado, programándolo si tienes una licencia PLUS.

Los datos de copia de seguridad de escritorio no deberían quedar atrapados detrás de un ID de equipo que solo puedes ver en un navegador — incorporarlos a RcloneView les otorga la misma visibilidad y protección que al resto de tu almacenamiento en la nube.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento de Google Drive — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Gestiona Google Drive Shared With Me — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-google-drive-shared-with-me-rcloneview)
- [Monta Google Drive como una unidad local con RcloneView](https://rcloneview.com/support/blog/mount-google-drive-as-local-drive-rcloneview)

<CloudSupportGrid />
