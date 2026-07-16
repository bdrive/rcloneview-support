---
slug: sync-hidrive-to-amazon-s3-rcloneview
title: "Sincronizar HiDrive con Amazon S3 — Copia de seguridad en la nube con RcloneView"
authors:
  - morgan
description: "Aprende a sincronizar y hacer copias de seguridad de archivos de HiDrive en Amazon S3 con RcloneView. Transfiere archivos entre almacenamiento en la nube europeo y global usando una interfaz gráfica sencilla."
keywords:
  - HiDrive to Amazon S3
  - RcloneView HiDrive backup
  - sync HiDrive S3
  - HiDrive cloud backup
  - transfer HiDrive to AWS
  - cloud-to-cloud backup RcloneView
  - HiDrive migration to S3
  - Amazon S3 backup tool
  - cross-cloud file transfer
  - HiDrive file sync
tags:
  - hidrive
  - amazon-s3
  - cloud-to-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincronizar HiDrive con Amazon S3 — Copia de seguridad en la nube con RcloneView

> Haz copias de seguridad de tu almacenamiento de HiDrive en Amazon S3 usando las herramientas visuales de sincronización de RcloneView — sin necesidad de CLI, con programación, filtrado y monitoreo de transferencias en vivo integrados.

HiDrive, la plataforma europea en la nube de Strato, es popular entre las empresas que priorizan el almacenamiento conforme al RGPD. Amazon S3, por su parte, es el referente en durabilidad de almacenamiento de objetos e integración de ecosistema — un destino de copia de seguridad secundario natural para todo lo que sea de misión crítica. Con RcloneView, puedes conectar ambos proveedores en una sola interfaz y ejecutar trabajos de sincronización automatizados y filtrados que mantienen tus buckets de S3 alineados con tus carpetas de HiDrive sin escribir un solo comando.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar HiDrive y Amazon S3 en RcloneView

HiDrive utiliza OAuth para la autenticación, lo que significa que RcloneView abre una pestaña del navegador donde inicias sesión en tu cuenta de Strato y otorgas acceso — sin necesidad de gestionar claves de API. Ve a **Remote > New Remote**, elige **HiDrive** y completa el inicio de sesión en el navegador. El árbol de carpetas de tu HiDrive aparece de inmediato en el explorador de archivos.

Para Amazon S3, ve nuevamente a **Remote > New Remote**, selecciona **Amazon S3** e introduce tu AWS Access Key ID, Secret Access Key y la región de destino. Si deseas un acceso de mínimo privilegio, crea un usuario de IAM dedicado en la consola de AWS con permisos de escritura limitados únicamente al bucket de destino, y luego introduce esas credenciales en RcloneView.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting HiDrive and Amazon S3 as remotes in RcloneView" class="img-large img-center" />

Una vez registrados ambos remotos, abre dos paneles uno junto al otro en el explorador de doble panel de RcloneView — HiDrive a la izquierda, S3 a la derecha — para comparar visualmente el contenido de las carpetas antes de comprometerte con una sincronización completa.

## Creación del trabajo de sincronización de HiDrive a S3

Con ambos remotos conectados, ve a **Home > Sync** para abrir el asistente de trabajos. Establece tu carpeta de HiDrive como origen y tu bucket de S3 (con un prefijo de subcarpeta opcional) como destino. En el paso de Configuración avanzada, configura los subprocesos de transferencia simultáneos según tu ancho de banda disponible — valores más altos aceleran las transferencias masivas para estructuras de archivos planas, mientras que valores más bajos son más seguros en conexiones con límites de velocidad estrictos.

En el paso de Filtrado puedes excluir archivos irrelevantes por tipo (por ejemplo, `.tmp`, `.part`) o por antigüedad — por ejemplo, sincronizando solo archivos modificados en los últimos 90 días usando el filtro **Max file age** (`90d`). Esto mantiene el trabajo enfocado y reduce las llamadas API innecesarias contra ambos extremos.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a HiDrive to Amazon S3 sync job in RcloneView" class="img-large img-center" />

Antes de ejecutar por primera vez, haz siempre clic en **Dry Run** para previsualizar la lista exacta de archivos que se transferirían o eliminarían — un paso esencial al sincronizar desde una cuenta de HiDrive con contenido hacia un bucket de S3 nuevo, donde la dirección de sincronización unidireccional debe ser correcta antes de mover cualquier dato.

## Programación de copias de seguridad automatizadas

Para una protección continua, los usuarios con licencia PLUS pueden programar el trabajo de HiDrive a S3 para que se ejecute automáticamente según un horario tipo crontab. Las configuraciones habituales incluyen sincronizaciones completas nocturnas a las 2 AM y ejecuciones incrementales cada hora durante el horario laboral. El simulador de programación en el Paso 4 del asistente de trabajos previsualiza los próximos 10 horarios de ejecución antes de que confirmes el guardado.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated HiDrive to S3 backup in RcloneView" class="img-large img-center" />

Una vez en ejecución desatendida, la pestaña **Transferring** muestra la velocidad de transferencia en vivo y el recuento de archivos de cada ejecución programada, mientras que **Job History** registra cada ejecución con su resultado, bytes transferidos y cualquier detalle de error — un registro de auditoría completo para la trazabilidad de las copias de seguridad.

## Validar la integridad de la sincronización con Folder Compare

Después de que se complete la primera sincronización, usa la función **Folder Compare** de RcloneView para verificar que HiDrive y S3 estén realmente sincronizados. Abre ambas carpetas en la vista de comparación; RcloneView resalta los archivos que solo existen a la izquierda, solo a la derecha y los que difieren en tamaño — permitiéndote detectar elementos faltantes o no coincidentes sin verificar manualmente las listas de archivos. Para archivos de alto riesgo, activa la comparación por **checksum** en la Configuración avanzada del trabajo de sincronización para verificar la integridad de los archivos por hash en lugar de solo por tamaño.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing HiDrive and Amazon S3 folder contents in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agrega tu cuenta de HiDrive mediante **Remote > New Remote > HiDrive** usando el inicio de sesión OAuth en el navegador.
3. Agrega tu bucket de Amazon S3 mediante **Remote > New Remote > Amazon S3** con tus credenciales de IAM.
4. Crea un trabajo de sincronización de HiDrive a S3 en **Home > Sync**, ejecuta primero un Dry Run y luego ejecútalo.

Con la programación automatizada activada, tus archivos de HiDrive fluyen hacia S3 según tu horario — brindándote una copia de seguridad entre proveedores sin esfuerzo manual continuo.

---

**Guías relacionadas:**

- [Gestionar el almacenamiento en la nube de HiDrive — Sincronizar y hacer copias de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-hidrive-cloud-sync-backup-rcloneview)
- [Gestionar Amazon S3 — Sincronizar y hacer copias de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Sincronizar HiDrive con Google Drive — Copia de seguridad en la nube con RcloneView](https://rcloneview.com/support/blog/sync-hidrive-to-google-drive-rcloneview)

<CloudSupportGrid />
