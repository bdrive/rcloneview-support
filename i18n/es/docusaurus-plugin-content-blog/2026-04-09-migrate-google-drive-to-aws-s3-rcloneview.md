---
slug: migrate-google-drive-to-aws-s3-rcloneview
title: "Migra de Google Drive a AWS S3 con RcloneView"
authors:
  - tayson
description: "Migra de Google Drive a AWS S3 con RcloneView. Configura ambos remotos, planifica la transferencia, mueve los datos y verifica la migración paso a paso."
keywords:
  - rcloneview
  - google drive to aws s3
  - migrate google drive to s3
  - google drive s3 migration
  - google drive to amazon s3
  - cloud storage migration
  - google drive backup to s3
  - google workspace to aws
  - rclone google drive s3
  - cloud to cloud migration gui
tags:
  - RcloneView
  - google-drive
  - amazon-s3
  - migration
  - cloud-migration
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migra de Google Drive a AWS S3 con RcloneView

> Pasar de Google Drive a AWS S3 te da control a nivel de objeto, políticas de ciclo de vida y una durabilidad de nivel de infraestructura — **RcloneView** gestiona la transferencia mediante una interfaz visual.

Google Drive destaca en colaboración y edición de documentos, pero las organizaciones que necesitan control de acceso granular, integración programática o archivado a largo plazo a menudo lo superan. AWS S3 ofrece 11 nueves de durabilidad, transiciones de ciclo de vida a Glacier para almacenamiento en frío y políticas de acceso basadas en IAM. Migrar de Google Drive a S3 puede parecer intimidante — distintos modelos de autenticación, distinta semántica de archivos y potencialmente terabytes de datos. RcloneView simplifica el proceso con una GUI visual que gestiona la complejidad tras bambalinas.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué migrar de Google Drive a AWS S3

Google Drive almacena archivos como objetos con metadatos específicos de Google — tipos MIME, permisos para compartir y formatos de documento nativos (Docs, Sheets, Slides). AWS S3 almacena objetos como bytes sin procesar con metadatos definidos por el usuario, ofreciendo mayor flexibilidad para el acceso programático. Los motivos más comunes de esta migración incluyen:

- **Optimización de costos**: S3 Standard cuesta aproximadamente $0.023/GB/mes, y S3 Glacier Deep Archive baja a $0.00099/GB/mes. Para conjuntos de datos grandes que se acceden raramente, S3 es significativamente más económico que los planes de almacenamiento de Google Workspace.
- **Integración con infraestructura**: Las aplicaciones que se ejecutan en AWS pueden acceder a S3 directamente con roles de IAM, eliminando la necesidad de tokens OAuth y cuotas de API.
- **Cumplimiento normativo**: S3 admite Object Lock para cumplimiento WORM, políticas de bucket para restricciones basadas en IP y CloudTrail para registro de auditoría.
- **Gestión del ciclo de vida**: Transiciona automáticamente los archivos de Standard a Infrequent Access y luego a Glacier según su antigüedad, reduciendo costos sin intervención manual.

## Configurar ambos remotos

### Remoto de Google Drive

Abre el Administrador de Remotos de RcloneView y añade un remoto de Google Drive. Autoriza mediante OAuth, seleccionando el alcance de acceso completo. Si necesitas migrar Unidades Compartidas, selecciona la Unidad Compartida de destino durante la configuración. Para migraciones grandes, considera registrar tu propio client ID de proyecto de Google Cloud para aumentar los límites de cuota de API más allá del valor predeterminado de 10,000 consultas por 100 segundos.

### Remoto de AWS S3

Añade un remoto de S3 en el Administrador de Remotos. Proporciona tu AWS Access Key ID y Secret Access Key, selecciona la región de destino y especifica el nombre del bucket. Si el bucket no existe, puedes crearlo desde RcloneView o la consola de AWS. Para la clase de almacenamiento, elige Standard para datos de acceso frecuente o Standard-IA para migraciones de archivado.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and AWS S3 remotes in RcloneView" class="img-large img-center" />

## Planificar la migración

Antes de transferir datos, evalúa el alcance:

1. **Auditoría de tamaño**: Usa el análisis de almacenamiento de RcloneView para determinar el tamaño total de tu Google Drive. Esto ayuda a estimar los costos de S3 y el tiempo de transferencia.
2. **Manejo de Google Docs**: Los documentos nativos de Google (Docs, Sheets, Slides) no tienen tamaño de archivo en Drive. Durante la migración, RcloneView los exporta a formatos estándar (docx, xlsx, pptx). Decide si necesitas estas exportaciones o puedes omitirlas.
3. **Estructura de carpetas**: Google Drive permite caracteres en los nombres de archivo que S3 maneja de forma diferente. RcloneView codifica los caracteres especiales automáticamente, pero revisa tu estructura de carpetas en busca de anidamiento extremadamente profundo o nombres de ruta muy largos.
4. **Ancho de banda**: Una migración de 1 TB a 100 Mbps toma aproximadamente 22 horas. Programa las migraciones durante horas de baja actividad o establece límites de ancho de banda para evitar interrumpir otras operaciones.

## Ejecutar la migración

Abre Google Drive en el panel izquierdo y S3 en el panel derecho. Navega hasta la carpeta de origen en Drive y el prefijo de destino en S3. Puedes copiar todo el Drive o seleccionar carpetas específicas.

RcloneView usa checksums MD5 de Google Drive y los compara con los ETags de S3 para archivos de menos de 5 GB. Para archivos más grandes subidos como multipart, los ETags de S3 no son MD5 estándar — en esos casos, RcloneView recurre a la comparación por tamaño y fecha de modificación.

Para la migración inicial, usa un trabajo de copia en lugar de sincronización para evitar cualquier riesgo de eliminar archivos en el destino. Una vez que se complete la transferencia inicial y verifiques los datos, puedes cambiar a sincronización para la replicación continua.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Google Drive to AWS S3 in RcloneView two-pane explorer" class="img-large img-center" />

## Verificar la migración

Después de que se complete la transferencia, usa la función de comparación de RcloneView para verificar que todos los archivos llegaron. Selecciona el origen de Google Drive y el destino de S3, y ejecuta una comparación. Los archivos que coinciden aparecen como idénticos; los archivos que difieren o faltan se resaltan.

Para migraciones críticas, ejecuta una operación de verificación que calcule checksums en ambos lados y reporte cualquier discrepancia. Esto añade tiempo pero proporciona verificación criptográfica de la integridad de los datos.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying Google Drive to S3 migration in RcloneView" class="img-large img-center" />

## Después de la migración: sincronización continua o corte definitivo

Si estás ejecutando Google Drive y S3 en paralelo durante un período de transición, programa un trabajo de sincronización diario en RcloneView para mantener S3 actualizado con los cambios de Drive. Cuando estés listo para el corte definitivo, desactiva el trabajo de sincronización y da de baja el almacenamiento de Google Drive.

Para las organizaciones que pasan de Google Workspace a una pila nativa de AWS, esta migración suele ser una pieza de una transición de plataforma más amplia. RcloneView puede encargarse del movimiento de datos mientras tu equipo gestiona los cambios de aplicaciones y flujos de trabajo.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling ongoing Google Drive to S3 sync in RcloneView" class="img-large img-center" />

## Cómo empezar

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade los remotos de Google Drive y AWS S3 en el Administrador de Remotos.
3. Ejecuta una auditoría de almacenamiento para estimar el tamaño y el costo de la migración.
4. Ejecuta un trabajo de copia de Drive a S3 y verifica con la comparación.
5. Opcionalmente, programa una sincronización continua hasta que estés listo para el corte definitivo.

Google Drive gestiona la colaboración, pero AWS S3 ofrece la durabilidad, la gestión del ciclo de vida y el acceso programático que exigen las cargas de trabajo de producción. RcloneView une ambos mundos con una ruta de migración sencilla.

---

**Guías relacionadas:**

- [Añadir Google Drive](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [Añadir AWS S3 y compatibles con S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Comparar el contenido de carpetas](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Programación de trabajos](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
