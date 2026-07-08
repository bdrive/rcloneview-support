---
slug: manage-huawei-obs-cloud-sync-backup-rcloneview
title: "Gestiona el almacenamiento Huawei OBS — sincroniza y haz copias de seguridad de archivos con RcloneView"
authors:
  - alex
description: "Gestiona buckets de Huawei OBS con RcloneView — sincroniza, haz copias de seguridad y transfiere archivos con una GUI. Configuración compatible con S3, trabajos programados y transferencias entre nubes."
keywords:
  - Huawei OBS
  - Huawei Object Storage Service
  - RcloneView Huawei OBS
  - sincronizar Huawei OBS
  - copia de seguridad de archivos a Huawei OBS
  - GUI de gestión de almacenamiento en la nube
  - almacenamiento compatible con S3 RcloneView
  - gestor de archivos de la nube Huawei
  - sincronización de buckets OBS rclone
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona el almacenamiento Huawei OBS — sincroniza y haz copias de seguridad de archivos con RcloneView

> Conecta buckets de Huawei OBS a un gestor de archivos visual y luego sincroniza y haz copias de seguridad de archivos entre nubes sin tocar la línea de comandos.

Huawei Object Storage Service (OBS) es una plataforma de almacenamiento de objetos escalable y de nivel empresarial, utilizada en implementaciones de Asia-Pacífico y en entornos empresariales globales. Ya sea que gestiones un data lake de varios terabytes o hagas copia de seguridad de los archivos de proyectos de una oficina regional, OBS ofrece la fiabilidad que las grandes organizaciones esperan. RcloneView se conecta a Huawei OBS a través de su API compatible con S3, ofreciendo una experiencia completa de GUI para explorar buckets, transferir archivos y ejecutar trabajos de copia de seguridad automatizados, de modo que tu equipo dedique el tiempo al trabajo real en lugar de memorizar flags de rclone.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar RcloneView a Huawei OBS

Agregar Huawei OBS como remoto en RcloneView sigue la misma configuración compatible con S3 que se usa para proveedores como Alibaba Cloud OSS o IDrive E2. En la pestaña **Remote**, haz clic en **New Remote**, elige el tipo de proveedor S3 y selecciona Huawei OBS de la lista de proveedores. Deberás proporcionar tres credenciales: un Access Key ID, un Secret Access Key y la URL del endpoint regional de tu bucket OBS. Los endpoints de Huawei siguen el patrón `obs.{region}.myhuaweicloud.com`; por ejemplo, `obs.cn-north-4.myhuaweicloud.com` para la región North China 4.

Una vez configurado, los paneles del explorador de archivos de RcloneView muestran tus buckets de OBS como carpetas de nivel superior. Navega por los prefijos de objetos anidados usando la barra de ruta de migas de pan, cambia entre vista de lista y de miniaturas, y consulta de un vistazo los metadatos de los archivos: nombre, tamaño y fecha de modificación. El árbol de carpetas de la izquierda facilita localizar un conjunto de datos específico en un entorno con múltiples buckets sin desplazarte por una lista de archivos plana.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Huawei OBS as an S3-compatible remote in RcloneView" class="img-large img-center" />

RcloneView también admite hasta cuatro paneles del explorador simultáneos, por lo que puedes abrir un panel para tu bucket de OBS y otro para una unidad local o un proveedor de nube diferente, lo que permite comparaciones lado a lado sin cambiar de ventana.

## Sincronizar y hacer copias de seguridad de archivos en Huawei OBS

El asistente de sincronización de 4 pasos de RcloneView facilita la creación de trabajos de copia de seguridad recurrentes con destino a Huawei OBS. Configura tu origen (una carpeta local, una ruta NAS u otro remoto en la nube) y tu destino (un prefijo de bucket de OBS), asigna un nombre al trabajo y luego configura las opciones avanzadas. Aumentar el número de transferencias simultáneas acelera el rendimiento en conexiones de alto ancho de banda, mientras que habilitar la verificación de checksum garantiza que cada archivo llegue intacto, algo especialmente valioso al migrar un conjunto de datos de 2 TB de planos de ingeniería o registros financieros donde la corrupción silenciosa es inaceptable.

El filtrado mantiene tus buckets de OBS optimizados y rentables. Excluye tipos de archivo grandes que no necesitas archivar (`.iso`, `.vmdk`), restringe la sincronización a archivos modificados dentro de una ventana de tiempo móvil usando filtros de antigüedad máxima, o limita la profundidad de carpetas para evitar copiar directorios temporales muy anidados. Para organizaciones con requisitos de cumplimiento, estos filtros garantizan que solo los archivos correctos lleguen a OBS sin selección manual en cada ejecución.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Huawei OBS in RcloneView" class="img-large img-center" />

Ejecuta la simulación de dry-run antes de la primera ejecución real: RcloneView muestra exactamente qué archivos se agregarían o eliminarían sin tocar ningún dato, una red de seguridad crítica al sincronizar buckets de producción.

## Programar copias de seguridad automatizadas y supervisar los trabajos

Con una licencia RcloneView PLUS, tu copia de seguridad de Huawei OBS se ejecuta en piloto automático mediante programación estilo crontab. Configura una copia de seguridad diferencial nocturna a las 02:00 cada día laborable, una sincronización completa del bucket semanal los domingos, o cualquier cadencia que se ajuste al ciclo de vida de tus datos. El simulador de programación del asistente muestra una vista previa de las próximas cinco ejecuciones para que puedas verificar el patrón antes de confirmarlo.

El historial de trabajos ofrece un registro de auditoría completo de cada ejecución: hora de inicio, duración, velocidad de transferencia, número de archivos, tamaño total transferido y estado final (Completed, Errored o Canceled). Para un equipo que gestiona el archivado de cumplimiento normativo en varias regiones de OBS, este registro también sirve como documentación para auditorías internas. Los titulares de la licencia PLUS también pueden configurar notificaciones de finalización de trabajos para que las personas adecuadas reciban una alerta en el momento en que un trabajo se completa o falla.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Huawei OBS sync jobs in RcloneView" class="img-large img-center" />

## Cómo empezar

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abre la pestaña **Remote** → **New Remote** → selecciona **S3** → elige **Huawei OBS**.
3. Introduce tu Access Key ID, tu Secret Access Key y la URL del endpoint regional de OBS.
4. Explora tus buckets en el explorador de archivos y crea trabajos de sincronización o copia de seguridad mediante el **Job Manager**.

Una vez conectado, Huawei OBS se comporta como cualquier otra unidad en RcloneView, ofreciendo a tu equipo una vía fiable y basada en GUI hacia el almacenamiento de objetos empresarial sin la sobrecarga de la línea de comandos.

---

**Guías relacionadas:**

- [Gestiona Alibaba Cloud OSS — sincroniza y haz copias de seguridad con RcloneView](https://rcloneview.com/support/blog/manage-alibaba-oss-cloud-sync-backup-rcloneview)
- [Gestiona el almacenamiento de objetos Tencent COS con RcloneView](https://rcloneview.com/support/blog/manage-tencent-cos-cloud-sync-rcloneview)
- [Centraliza el almacenamiento S3, Wasabi y R2 con RcloneView](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
