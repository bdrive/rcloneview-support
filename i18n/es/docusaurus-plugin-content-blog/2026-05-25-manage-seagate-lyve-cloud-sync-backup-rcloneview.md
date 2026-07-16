---
slug: manage-seagate-lyve-cloud-sync-backup-rcloneview
title: "Gestiona Seagate Lyve Cloud — Sincroniza y haz copias de seguridad de archivos con RcloneView"
authors:
  - kai
description: "Aprende a gestionar el almacenamiento Seagate Lyve Cloud con RcloneView. Sincroniza, haz copias de seguridad y transfiere archivos usando esta GUI para almacenamiento en la nube compatible con S3."
keywords:
  - Seagate Lyve Cloud
  - RcloneView Seagate
  - sincronización de Lyve Cloud
  - copia de seguridad de Lyve Cloud
  - GUI de almacenamiento compatible con S3
  - gestión de almacenamiento de objetos
  - Lyve Cloud RcloneView
  - gestionar almacenamiento en la nube de Seagate
  - herramienta de transferencia de archivos en la nube
  - gestor de archivos de Lyve Cloud
tags:
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona Seagate Lyve Cloud — Sincroniza y haz copias de seguridad de archivos con RcloneView

> Conecta Seagate Lyve Cloud a RcloneView y obtén control total mediante GUI sobre tu almacenamiento de objetos compatible con S3 — explora, sincroniza, haz copias de seguridad y monta sin tocar la línea de comandos.

Seagate Lyve Cloud es una plataforma de almacenamiento de objetos compatible con S3 diseñada para cargas de trabajo de alto rendimiento y retención de datos a largo plazo. Ya sea que gestiones grabaciones de videovigilancia, grandes archivos multimedia o conjuntos de datos empresariales, la arquitectura de Lyve Cloud lo convierte en un nivel de almacenamiento atractivo para datos masivos. Conectarlo a RcloneView transforma cada bucket en un árbol de archivos navegable que puedes arrastrar, soltar, sincronizar y programar junto a cualquiera de los más de 90 proveedores adicionales que admite RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Agregar Seagate Lyve Cloud como remoto en RcloneView

Seagate Lyve Cloud utiliza el protocolo S3, por lo que se configura de la misma manera que cualquier proveedor compatible con S3: con una Access Key, una Secret Key y el endpoint de Lyve Cloud correspondiente a tu región.

Abre RcloneView, ve a **Remote > New Remote** y elige **Amazon S3** como tipo de proveedor. En la siguiente pantalla, selecciona **Seagate Lyve Cloud** en la lista de subtipos de proveedor — RcloneView aplica automáticamente el formato de endpoint correcto para tu región. Introduce tus credenciales de la API de Lyve Cloud (Access Key ID y Secret Access Key) generadas desde la consola de Lyve Cloud, y guarda el remoto. En cuestión de segundos, tus buckets aparecerán en el explorador de archivos exactamente igual que cualquier carpeta local.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Seagate Lyve Cloud remote in RcloneView" class="img-large img-center" />

Si tu organización opera en varias regiones de Lyve Cloud, agrega cada una como un remoto independiente con nombre propio — por ejemplo `lyve-us`, `lyve-eu`, `lyve-ap` — y compáralas o sincronízalas entre sí lado a lado en el explorador de doble panel de RcloneView.

## Sincronizar y hacer copias de seguridad de archivos en Lyve Cloud

Con el remoto conectado, puedes iniciar transferencias puntuales de inmediato mediante arrastrar y soltar, o crear trabajos de sincronización repetibles con el Job Manager. Un flujo de trabajo habitual es el de un estudio de producción de video que sincroniza renders de proyectos en 4K desde un servidor local hacia Lyve Cloud para archivo a largo plazo, mientras mantiene simultáneamente una réplica en otra nube para acceso rápido.

Ve a **Home > Sync**, elige tu carpeta local u otro remoto en la nube como origen, y selecciona tu bucket de Lyve Cloud como destino. En la configuración avanzada del asistente de sincronización puedes ajustar los hilos de transferencia concurrentes, activar la verificación por checksum mediante hash, y establecer filtros de antigüedad o tamaño de archivo en el paso de filtrado — por ejemplo, excluyendo archivos `.tmp` y `.part` de grabaciones de videovigilancia. Una vez satisfecho con la configuración, haz clic en **Dry Run** para previsualizar exactamente qué archivos se moverán sin tocar los datos de producción.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Seagate Lyve Cloud in RcloneView" class="img-large img-center" />

Con una licencia PLUS puedes programar trabajos mediante expresiones de estilo crontab — establece transferencias diarias en horas de menor actividad hacia Lyve Cloud sin ninguna intervención manual.

## Supervisar transferencias y revisar el historial de trabajos

La pestaña **Transferring** en el panel inferior de RcloneView muestra el progreso en vivo de cada trabajo activo: velocidad de transferencia, número de archivos, porcentaje completado y un botón de cancelar para cualquier transferencia en curso. Una vez finalizado cada trabajo, la vista **Job History** registra la hora de inicio, la duración, el total de bytes transferidos, la velocidad promedio y el estado final — proporcionando un registro auditable que resulta importante para sectores con exigencias de cumplimiento normativo donde se necesita documentar la procedencia del almacenamiento.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Seagate Lyve Cloud sync transfers in RcloneView" class="img-large img-center" />

Para equipos que operan Lyve Cloud en varios sitios, exporta la configuración de tu trabajo de sincronización a un archivo JSON e impórtala en otras máquinas — garantizando ajustes de trabajo idénticos sin necesidad de volver a introducirlos manualmente.

## Montar Lyve Cloud como unidad local

Para flujos de trabajo que requieren que las aplicaciones lean directamente desde Lyve Cloud sin descargar antes los archivos, la función de montaje de RcloneView asigna tu bucket de Lyve Cloud a una letra de unidad local (Windows) o a una ruta de montaje (macOS/Linux). Ve a **Remote > Mount Manager**, crea un nuevo montaje dirigido a tu remoto de Lyve Cloud y haz clic en **Save and mount**. El bucket aparecerá como una unidad en el Explorador de Windows o en el Finder de macOS.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting Seagate Lyve Cloud bucket as a local drive in RcloneView" class="img-large img-center" />

El modo de caché VFS predeterminado (`writes`) almacena las escrituras localmente antes de subirlas, ofreciendo un rendimiento ágil incluso en conexiones de mayor latencia. Para flujos de trabajo con lectura intensiva que se benefician del almacenamiento en caché local, cambia al modo de caché `full` en la configuración de montaje.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ve a **Remote > New Remote**, selecciona **Amazon S3** y luego elige **Seagate Lyve Cloud** como subtipo de proveedor.
3. Introduce tu Access Key ID y Secret Access Key de Lyve Cloud, y guarda el remoto.
4. Abre el remoto de Seagate Lyve Cloud en el explorador de archivos y comienza a explorar tus buckets de inmediato.

Una vez conectado, crea un trabajo de sincronización para mover archivos desde el almacenamiento local u otra nube hacia Lyve Cloud — y luego prográmalo para que se ejecute automáticamente cada noche para un archivado sin intervención manual.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento en la nube Wasabi — Sincroniza y haz copias de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Gestiona el almacenamiento en la nube Backblaze B2 — Sincroniza y haz copias de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Gestiona Amazon S3 — Sincroniza y haz copias de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
