---
slug: sync-onedrive-to-box-rcloneview
title: "Sincronizar OneDrive con Box — copia de seguridad en la nube con RcloneView"
authors:
  - alex
description: "Sincronice OneDrive con Box mediante RcloneView: conecte ambos con OAuth, previsualice con un Dry Run, ejecute la sincronización de nube a nube y verifique con Folder Compare."
keywords:
  - sincronizar OneDrive con Box
  - copia de seguridad de OneDrive a Box
  - herramienta de sincronización OneDrive Box
  - copiar OneDrive a Box
  - sincronización de nube a nube
  - migración de OneDrive a Box
  - RcloneView
  - rclone GUI
  - comparación de carpetas
  - sincronización programada en la nube
tags:
  - RcloneView
  - onedrive
  - box
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincronizar OneDrive con Box — copia de seguridad en la nube con RcloneView

> Mantenga una segunda copia de sus archivos de OneDrive en Box, movidos directamente entre las dos nubes.

Los equipos suelen trabajar con OneDrive internamente mientras un cliente, un socio o un proceso de cumplimiento espera los archivos en Box. Descargarlo todo y volver a subirlo es lento y requiere espacio en disco local que quizá no tenga. RcloneView conecta ambos servicios y sincroniza de nube a nube, con un Dry Run antes y una comparación visual después.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecte OneDrive y Box

Ambos servicios usan el inicio de sesión OAuth en el navegador. En la pestaña Remote, haga clic en **New Remote**, elija Microsoft OneDrive e inicie sesión. Repita el proceso con Box. Para una cuenta de Box Business o Enterprise, establezca `box_sub_type = enterprise` durante la configuración.

RcloneView puede montar y sincronizar más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux. Cuando ambos remotos existan, ábralos en dos paneles del Explorer, uno junto al otro.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir remotos de OneDrive y Box en RcloneView" class="img-large img-center" />

## Elija Copy o Sync y luego un Dry Run

Abra el asistente de Sync y elija OneDrive como origen y una carpeta de Box como destino. La sincronización unidireccional modifica solo el destino, por lo que los archivos eliminados de OneDrive también se eliminarán de Box. Si prefiere una red de seguridad en lugar de un espejo, use un trabajo Copy.

Ejecute primero un **Dry Run**. Lista los archivos que se copiarán y los que se eliminarán sin cambiar nada. Por ejemplo, un equipo de contabilidad que sincronice una carpeta «Clients» de 150 GB puede confirmar la estructura de carpetas y detectar archivos temporales sobrantes antes de la ejecución real.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Sincronización de nube a nube de OneDrive a Box" class="img-large img-center" />

## Filtre y ajuste el trabajo

El paso 2 del asistente establece el número de transferencias de archivos, las transferencias multihilo y los equality checkers (verificadores de igualdad). Active la comparación por suma de verificación si desea usar hash más tamaño en lugar de solo tamaño y hora. El paso 3 permite excluir archivos por tamaño máximo, antigüedad o reglas personalizadas, o usar filtros predefinidos para documentos o imágenes. Box tiene sus propios límites de tamaño de subida que dependen de su plan, así que revise su cuenta antes de sincronizar archivos muy grandes.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Iniciar el trabajo de sincronización de OneDrive a Box" class="img-large img-center" />

## Supervise, compare y programe

Siga el progreso en la pestaña Transferring, que muestra la velocidad, el número de archivos y el tamaño. Después, abra **Compare** con OneDrive a la izquierda y Box a la derecha, y filtre por archivos solo a la izquierda o diferentes. Job History conserva el estado, la duración y el tamaño de cada ejecución.

Con una licencia PLUS puede añadir una programación al estilo crontab en el paso 4 para que la sincronización se repita cada noche mientras RcloneView se ejecuta en la bandeja del sistema.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare entre OneDrive y Box" class="img-large img-center" />

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añada los remotos de OneDrive y Box en la pestaña Remote.
3. Cree un trabajo Sync o Copy de OneDrive a Box y ejecute un Dry Run.
4. Ejecute el trabajo y verifíquelo con Folder Compare y Job History.

Una segunda copia verificada en Box le da una alternativa fiable, sea cual sea la plataforma que su equipo use después.

---

**Guías relacionadas:**

- [Gestionar el almacenamiento de OneDrive — sincronice y haga copias de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Gestionar el almacenamiento de Box — sincronice y haga copias de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Migrar de Box a OneDrive — transfiera archivos con RcloneView](https://rcloneview.com/support/blog/migrate-box-to-onedrive-rcloneview)

<CloudSupportGrid />
