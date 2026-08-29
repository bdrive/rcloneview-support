---
slug: manage-netease-cloud-sync-backup-rcloneview
title: "Gestiona el almacenamiento de Netease — Sincroniza y respalda archivos con RcloneView"
authors:
  - morgan
description: "Conecta el almacenamiento de objetos compatible con S3 de Netease a RcloneView para navegación multiplataforma, transferencias por arrastrar y soltar, y tareas de copia de seguridad programadas."
keywords:
  - almacenamiento de objetos Netease
  - gestionar almacenamiento en la nube Netease
  - GUI de almacenamiento compatible con S3
  - RcloneView Netease
  - sincronizar almacenamiento de objetos Netease
  - copia de seguridad de almacenamiento compatible con S3
  - almacenamiento Netease NOS
  - gestor de archivos de almacenamiento de objetos
  - cliente GUI multi-nube
  - configuración de clave de acceso de endpoint S3
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona el almacenamiento de Netease — Sincroniza y respalda archivos con RcloneView

> Navega, transfiere y respalda el almacenamiento de objetos compatible con S3 de Netease en la misma ventana que ya usas para todas las demás nubes, sin un flujo de trabajo CLI independiente.

Los equipos que aprovisionan almacenamiento a través del servicio de objetos compatible con S3 de Netease a menudo terminan gestionándolo por separado del resto de su ecosistema de nube, ya que la mayoría de los gestores de archivos de escritorio solo entienden las unidades de consumo habituales. RcloneView trata a Netease como cualquier otro remoto compatible con S3 — el mismo explorador, las mismas tareas de sincronización, la misma comparación de carpetas — de modo que un bucket de Netease se sitúa junto a Google Drive, Dropbox o un disco local en una sola interfaz. RcloneView monta y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar el almacenamiento de objetos de Netease

Agregar Netease a RcloneView sigue el flujo estándar de remoto compatible con S3: crea un nuevo remoto, selecciona el tipo de protocolo S3 y luego introduce tu Access Key ID, Secret Access Key y la URL de endpoint de Netease correspondiente a la región de tu bucket. Una vez guardado, el remoto aparece como su propia pestaña en el Explorador, y cada carpeta dentro de él se navega igual que una unidad local — no se necesita una pestaña de consola independiente ni una sesión CLI para comprobar qué hay realmente en un bucket.

<img src="/support/images/en/blog/new-remote.png" alt="Agregar un nuevo remoto compatible con S3 para el almacenamiento de objetos Netease en RcloneView" class="img-large img-center" />

Dado que RcloneView almacena la configuración de cada remoto de forma independiente, puedes registrar varios buckets de Netease — o el mismo bucket con distintos alcances de acceso — uno junto a otro, y luego cambiar entre ellos con un clic en lugar de volver a autenticarte en una terminal cada vez.

## Mover datos entre Netease y otras nubes

Una vez conectado Netease, arrastrar y soltar entre paneles gestiona automáticamente la transferencia entre remotos: arrastrar archivos de Netease al panel de otro remoto activa una copia, mientras que arrastrar dentro del mismo bucket de Netease mueve los archivos. Esto convierte las migraciones puntuales — por ejemplo, replicar un subconjunto de objetos de Netease en Backblaze B2 para redundancia — en cuestión de abrir dos paneles en lugar de escribir un comando de rclone específico.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferencia entre nubes entre el almacenamiento de objetos Netease y otro remoto en RcloneView" class="img-large img-center" />

Para transferencias repetibles, el asistente de sincronización de 4 pasos te permite establecer Netease como origen o destino, aplicar filtros de tamaño o antigüedad de archivo, y ejecutar primero una simulación para previsualizar exactamente qué se copiará o eliminará antes de que ocurra algo realmente.

## Programar copias de seguridad recurrentes

Para una protección continua en lugar de transferencias puntuales, una tarea de sincronización dirigida a Netease puede ejecutarse en un horario recurrente (licencia PLUS) usando campos de estilo crontab para minuto, hora, día y mes. El historial de tareas registra entonces cada ejecución — hora de inicio, duración, velocidad de transferencia y número de archivos — para que tengas un registro de auditoría concreto de qué se movió y cuándo, sin tener que revisar archivos de registro en bruto.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Programación de una tarea de copia de seguridad recurrente para el almacenamiento de objetos Netease en RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Crea un nuevo remoto, elige el tipo compatible con S3 e introduce tu Access Key, Secret Key y endpoint de Netease.
3. Abre el remoto de Netease en un panel del Explorador y confirma que tus buckets y objetos se cargan correctamente.
4. Configura una tarea de sincronización para replicar el bucket en otro remoto o disco local, ejecutando primero una simulación.

Una vez que Netease está configurado como remoto, se comporta como cualquier otro proveedor de almacenamiento en RcloneView — un sistema menos que gestionar por separado del resto de tu conjunto de nubes.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento de China Mobile — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-china-mobile-cloud-sync-backup-rcloneview)
- [Gestiona el almacenamiento en la nube de Alibaba OSS — Sincroniza y respalda con RcloneView](https://rcloneview.com/support/blog/manage-alibaba-oss-cloud-sync-backup-rcloneview)
- [Gestiona el almacenamiento en la nube de Huawei OBS — Sincroniza y respalda con RcloneView](https://rcloneview.com/support/blog/manage-huawei-obs-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
