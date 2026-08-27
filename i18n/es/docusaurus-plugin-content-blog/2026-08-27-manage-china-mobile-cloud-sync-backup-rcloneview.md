---
slug: manage-china-mobile-cloud-sync-backup-rcloneview
title: "Gestionar el almacenamiento de China Mobile — Sincronizar y respaldar archivos con RcloneView"
authors:
  - jay
description: "Conecte el almacenamiento de objetos compatible con S3 de China Mobile a RcloneView para navegación multiplataforma, transferencias por arrastrar y soltar, y tareas de respaldo programadas."
keywords:
  - almacenamiento de objetos China Mobile
  - gestionar almacenamiento en la nube China Mobile
  - GUI de almacenamiento compatible con S3
  - RcloneView China Mobile
  - sincronizar almacenamiento de objetos China Mobile
  - respaldar almacenamiento compatible con S3
  - China Mobile Ecloud EOS
  - administrador de archivos de almacenamiento de objetos
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

# Gestionar el almacenamiento de China Mobile — Sincronizar y respaldar archivos con RcloneView

> Navegue, transfiera y respalde el almacenamiento de objetos compatible con S3 de China Mobile desde la misma ventana que usa para el resto de sus nubes, sin tocar una terminal.

Los equipos que operan infraestructura a través del almacenamiento de objetos compatible con S3 de China Mobile suelen terminar gestionándolo con llamadas CLI directas o scripts puntuales, separado del resto de su huella en la nube. RcloneView lo trata como cualquier otro remoto compatible con S3 — el mismo explorador, las mismas tareas de sincronización, la misma comparación de carpetas — de modo que un bucket en China Mobile queda junto a Google Drive, Backblaze B2 o un disco local en una sola interfaz. Puede conectar S3, Azure o Backblaze B2 con lectura/escritura completa en la licencia FREE, y lo mismo aplica a cualquier endpoint compatible con S3.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar el almacenamiento de objetos de China Mobile

El almacenamiento de objetos de China Mobile se accede a través del protocolo S3 de rclone, la misma vía que usa RcloneView para Wasabi, MinIO o Cloudflare R2. En la pantalla New Remote, seleccione el tipo de proveedor compatible con S3 y proporcione tres valores: Access Key ID, Secret Access Key y el Endpoint del servicio. No hay flujo OAuth — es entrada de credenciales, así que verifique bien la cadena del endpoint, ya que un error tipográfico ahí es la razón más común por la que un remoto nuevo falla su primera prueba de conexión.

<img src="/support/images/en/blog/new-remote.png" alt="Agregando un remoto compatible con S3 de China Mobile en RcloneView" class="img-large img-center" />

Una vez conectado el remoto, aparece como una pestaña en el panel Explorer igual que cualquier otro tipo de almacenamiento. Puede abrirlo junto a un segundo panel — disco local, otra nube, o un bucket completamente distinto — usando el diseño de 1 a 4 paneles.

## Navegar y transferir archivos

Con el remoto abierto, la File List muestra buckets y objetos con las mismas columnas que esperaría de un administrador de archivos local: nombre, tipo, fecha de modificación, tamaño. Haga clic derecho para Copy, Cut, Paste, Rename, New Folder, Download y Upload, o use Ctrl+Click y Shift+Click para seleccionar varios elementos antes de operaciones por lotes.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferencia de archivos entre el almacenamiento de objetos de China Mobile y otro remoto" class="img-large img-center" />

Arrastrar y soltar sigue una regla simple: mover archivos dentro del mismo remoto los reubica, mientras que arrastrarlos entre dos remotos distintos los copia. Eso convierte las transferencias puntuales entre almacenamiento de objetos y otras nubes en cuestión de arrastrar una selección entre paneles, en lugar de descargar primero localmente.

## Programar respaldos recurrentes

Para cualquier tarea recurrente, el asistente de cuatro pasos del Job Manager convierte una transferencia puntual en una tarea guardada: elija origen y destino, ajuste la concurrencia de transferencia y el comportamiento de reintento, aplique filtros como tamaño o antigüedad máxima de archivo y — con una licencia PLUS — configure un horario tipo crontab. Ejecute primero un Dry Run para previsualizar exactamente qué se copiaría o eliminaría antes de confirmarlo.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Programando una tarea de respaldo para el almacenamiento de objetos de China Mobile en RcloneView" class="img-large img-center" />

Job History después registra cada ejecución — estado, duración, velocidad de transferencia, número de archivos — así que tiene un registro de qué se movió y cuándo, sin tener que revisar registros sin procesar.

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abra New Remote, elija el tipo de proveedor compatible con S3, e ingrese su Access Key ID, Secret Access Key y endpoint de China Mobile.
3. Explore el bucket en Explorer y pruebe una copia manual hacia o desde otro remoto.
4. Cree una tarea de sincronización en Job Manager para cualquier transferencia que quiera repetir, y ejecute un Dry Run antes de la primera ejecución real.

Una vez que el almacenamiento de objetos de China Mobile se sitúa junto a sus otros remotos en un solo explorador, mover datos deja de ser una tarea de scripting y se convierte en arrastrar y soltar.

---

**Guías relacionadas:**

- [Gestionar el almacenamiento de objetos de RackCorp — Sincronizar y respaldar archivos con RcloneView](https://rcloneview.com/support/blog/manage-rackcorp-object-storage-cloud-sync-rcloneview)
- [Gestionar el almacenamiento de objetos de Scaleway — Sincronización y respaldo en la nube con RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Gestionar el almacenamiento de objetos Ceph con RcloneView — GUI compatible con S3 para su clúster Ceph](https://rcloneview.com/support/blog/manage-ceph-object-storage-s3-rcloneview)

<CloudSupportGrid />
