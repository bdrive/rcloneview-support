---
slug: manage-petabox-cloud-sync-backup-rcloneview
title: "Gestione el almacenamiento Petabox — Sincronice y respalde archivos con RcloneView"
authors:
  - steve
description: "Conecte el almacenamiento de objetos compatible con S3 Petabox a RcloneView para exploración de archivos multiplataforma, sincronización y copias de seguridad automatizadas."
keywords:
  - almacenamiento Petabox
  - almacenamiento de objetos Petabox
  - GUI de almacenamiento compatible con S3
  - RcloneView Petabox
  - software de copia de seguridad en la nube
  - sincronizar Petabox con la nube
  - gestionar almacenamiento en la nube GUI
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

# Gestione el almacenamiento Petabox — Sincronice y respalde archivos con RcloneView

> Explore, sincronice y respalde buckets de almacenamiento de objetos Petabox desde una interfaz gráfica en lugar de editar manualmente credenciales S3 en un archivo de configuración.

Se accede a Petabox a través del protocolo compatible con S3 de rclone, por lo que conectarlo implica proporcionar una Access Key, una Secret Key y una URL de endpoint — el tipo de configuración fácil de equivocar desde la línea de comandos. RcloneView convierte ese proceso en un formulario guiado y lo combina con un explorador de archivos de doble panel completo, un motor de sincronización y un planificador de trabajos, de modo que los equipos que ya almacenan datos en Petabox pueden gestionarlo junto con cualquier otro remoto en una sola ventana.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Petabox como un remoto compatible con S3

Añadir Petabox en RcloneView utiliza el mismo flujo de introducción de credenciales que cualquier otro servicio compatible con S3: abra la pestaña Remote > New Remote, elija el tipo compatible con S3 e introduzca el Access Key ID, la Secret Access Key y el endpoint de Petabox. Si su integración con Petabox ya se ejecuta a través de un demonio de rclone compartido en un servidor, Connect Manager puede hacer que RcloneView apunte a esa instancia externa de rclone en lugar de usar la incorporada.

Una vez guardado, el remoto aparece como su propia pestaña en el panel Explorer, junto a cualquier otro almacenamiento en la nube o local ya configurado. Un remoto Alias puede acortar una ruta de bucket profundamente anidada a un nombre corto más fácil de navegar día a día.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Petabox S3-compatible remote in RcloneView" class="img-large img-center" />

## Explorar, sincronizar y respaldar datos de Petabox

Con el remoto conectado, el diseño de doble panel del File Explorer facilita comparar lo que ya está en Petabox con una carpeta local u otro remoto en la nube. Arrastrar y soltar entre paneles activa una copia cuando el origen y el destino son remotos diferentes, y el menú contextual cubre renombrar, eliminar, obtener tamaño y descarga/carga para las operaciones de archivo habituales.

Para copias de seguridad recurrentes, el asistente de Sync de cuatro pasos gestiona el origen y el destino, la concurrencia de transferencias y las reglas de filtrado, incluyendo opciones como la antigüedad máxima de archivo y filtros predefinidos para tipos de medios o documentos. Conecte servicios compatibles con S3 como Petabox con acceso completo de lectura/escritura en la licencia FREE — no se requiere ninguna actualización de licencia solo para escribir datos de vuelta en el bucket. La sincronización 1:N puede reflejar el mismo bucket de Petabox en varios destinos en un solo trabajo, útil cuando una copia de seguridad necesita llegar tanto a una unidad local como a un segundo proveedor en la nube.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job between Petabox storage and another remote" class="img-large img-center" />

## Automatizar copias de seguridad recurrentes de Petabox

Job Manager mantiene cada trabajo de sincronización, copia o movimiento en una sola lista, y cada ejecución queda registrada en Job History junto con el estado, el tamaño de la transferencia y el número de archivos. Dry Run previsualiza exactamente qué archivos se copiarían o eliminarían antes de confirmar una transferencia real — vale la pena comprobarlo antes de una primera sincronización grande en un nuevo bucket de Petabox.

Los usuarios con licencia PLUS pueden adjuntar un calendario de estilo crontab a un trabajo para que las copias de seguridad de Petabox se ejecuten automáticamente en un intervalo recurrente, con una opción de simulación para previsualizar las próximas ejecuciones antes de guardar.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring backup job for Petabox storage" class="img-large img-center" />

## Montar Petabox como una unidad local

El almacenamiento Petabox también se puede montar como una unidad virtual, lo que permite que otras aplicaciones de escritorio lean y escriban el contenido del bucket como si fueran archivos locales. La configuración de montaje incluye el modo de caché VFS (predeterminado: writes), límites de tamaño de caché y modo de solo lectura, y los montajes se pueden iniciar tanto desde la barra de herramientas del panel del remoto como desde el Mount Manager dedicado.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a Petabox bucket as a local drive in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abra la pestaña Remote > New Remote y seleccione la opción compatible con S3 para introducir sus credenciales y el endpoint de Petabox.
3. Use Folder Compare o arrastrar y soltar para trasladar los datos existentes a Petabox, y luego configure un trabajo de Sync para copias de seguridad continuas.
4. Añada el trabajo a Job Manager y, con PLUS, adjunte un calendario para que las copias de seguridad se ejecuten sin intervención manual.

Una vez configurado el remoto, el almacenamiento Petabox se comporta como cualquier otra conexión en RcloneView — explorable, sincronizable y listo para respaldarse según un calendario.

---

**Guías relacionadas:**

- [Gestione el almacenamiento Outscale — Sincronice y respalde archivos con RcloneView](https://rcloneview.com/support/blog/manage-outscale-cloud-sync-backup-rcloneview)
- [Gestione el almacenamiento de objetos Scaleway — Sincronización en la nube con RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Gestione el almacenamiento Selectel — Sincronice y respalde archivos con RcloneView](https://rcloneview.com/support/blog/manage-selectel-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
