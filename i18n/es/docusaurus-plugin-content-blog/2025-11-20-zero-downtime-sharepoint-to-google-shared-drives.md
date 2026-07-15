---
slug: zero-downtime-sharepoint-to-google-shared-drives-rcloneview
title: "Migración de SharePoint a Google Shared Drives sin tiempo de inactividad con RcloneView"
authors:
  - tayson
description: Traslada bibliotecas de Microsoft 365 SharePoint Online a Google Shared Drives sin interrumpir a los usuarios, combinando el Explorer multi-nube de RcloneView, las vistas previas de Compare, los trabajos de Sync y las pasadas delta impulsadas por el programador.
keywords:
  - sharepoint a google drive
  - migración a google shared drive
  - rcloneview
  - transferencia sin tiempo de inactividad
  - microsoft 365 a workspace
  - rclone compare
  - sincronización multi-nube
  - automatización con programador
  - plan de corte de sharepoint
  - plano de migración en la nube
tags:
  - RcloneView
  - sharepoint
  - google-drive
  - migration
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migración de SharePoint a Google Shared Drives sin tiempo de inactividad con RcloneView

> Mantén a los equipos de diseño, finanzas y proyectos trabajando en SharePoint mientras hidratas Google Shared Drives en segundo plano; luego activa el cambio en una única ventana de corte.

Las bibliotecas de SharePoint Online suelen estar repletas de carpetas con permisos complejos, conjuntos de documentos y controles de datos regionales. Al mismo tiempo, los Shared Drives de Google Workspace prometen una colaboración y cuotas de almacenamiento más simples, pero los movedores nativos rara vez respetan los metadatos, las ventanas delta o la limitación de velocidad. RcloneView envuelve los backends de SharePoint y Google Drive de rclone en una GUI, de modo que puedes planificar migraciones multi-nube con ejecuciones de Compare por etapas, trabajos de Sync + Copy, control de calidad basado en montajes y pasadas delta basadas en el programador.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Por qué planificar un corte de SharePoint a Google sin tiempo de inactividad

- **Los equipos distribuidos no pueden pausar** -- los activos de marketing, las PMO y los contratos necesitan acceso continuo mientras se llena el nuevo Shared Drive.
- **Permisos granulares** -- las bibliotecas de SharePoint mezclan carpetas conectadas a Teams y centros de documentos independientes; necesitas una forma repetible de reconstruirlos dentro de Shared Drives con registros de auditoría claros.

Una estrategia sin tiempo de inactividad significa ejecutar sincronizaciones en múltiples fases mientras ambas plataformas permanecen en línea, y luego realizar el corte después del delta final.

## Plano de migración: panel de control multi-nube

1. **Conecta ambos lados** usando [Remote Manager](/howto/rcloneview-basic/remote-manager) junto con las guías de proveedor para [SharePoint for Business](/howto/remote-storage-connection-settings/connect-using-cli/add-sharepoint-for-business) y [Google Shared Drives](/howto/remote-storage-connection-settings/connect-using-cli/add-google-shared-drive). RcloneView aísla los tokens de OAuth por inquilino y los almacena con las protecciones correspondientes.
2. **Organiza los paneles del Explorer** de modo que cada panel haga referencia a una biblioteca coincidente frente a un Shared Drive.
3. **Las plantillas para los trabajos** provienen de [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs) y [Synchronize Remote Storages](/howto/rcloneview-basic/synchronize-remote-storages). Los trabajos de Copy siembran el destino; los trabajos de Sync se encargan de la limpieza unidireccional; las ejecuciones de Compare validan.
4. **Los montajes para control de calidad** siguen [Mount cloud storage as a local drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive), permitiendo que los usuarios avanzados obtengan una vista previa del contenido dentro de Finder o Explorer antes del corte.
5. **Los programadores y la supervisión** se apoyan en [Job scheduling and execution](/howto/rcloneview-advanced/job-scheduling-and-execution) y [Real-time transfer monitoring](/howto/rcloneview-basic/real-time-transfer-monitoring) para mantener las ejecuciones delta predecibles.  

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />  
  

## Paso 1 -- Fortalecer conectores y metadatos

- Etiqueta cada remoto (`sp-marketing`, `sp-pmo`, `gdrive-regional-apac`) y restringe la ruta raíz a la biblioteca específica. Esto mantiene rápida la exploración de remotos dentro de [Browse and manage remote storage](/howto/rcloneview-basic/browse-and-manage-remote-storage).

## Paso 2 -- Establecer una línea base con ejecuciones de Compare

1. Abre el Explorer de doble panel, apunta el lado izquierdo a SharePoint y el lado derecho al Shared Drive vacío.
2. Usa [Compare folder contents](/howto/rcloneview-basic/compare-folder-contents) para detectar deltas de tamaño, checksum y marca de tiempo.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare SharePoint library to Google Shared Drive before migrating" class="img-large img-center" />

Las instantáneas de Compare de referencia te dan un registro forense del estado original y ayudan a identificar subsitios obsoletos que podrías archivar en lugar de trasladar.

## Paso 3 -- Preparar trabajos de Copy + Sync

- Crea un trabajo de **Copy** por unidad de negocio para hidratar el Shared Drive sin eliminar nada en SharePoint. Referencia: [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs).  

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />  
   

## Paso 4 -- Automatizar ventanas delta con el programador

Abre el Programador, actívalo globalmente y luego asigna cadencias por trabajo:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule staged SharePoint to Google migration jobs inside RcloneView" class="img-large img-center" />


## Paso 5 -- Lista de verificación del día del corte

1. **Congela las escrituras** en SharePoint (comunícalo por Teams/Slack) pero mantén el sitio en línea para necesidades de solo lectura.
2. Ejecuta el conjunto final de trabajos de Sync + Compare. Usa la diferencia de Compare para confirmar que solo cambió un puñado de archivos desde el último delta.
3. Monta el nuevo Shared Drive con [Mount cloud storage as a local drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive) y haz que los responsables de negocio verifiquen puntualmente árboles de carpetas complejos.  

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />  
       


## Control de calidad y operaciones de montaje posteriores a la migración

Mount Manager permite a ingenieros, finanzas o líderes creativos abrir los nuevos Shared Drives (o el remoto heredado de SharePoint) como unidades de solo lectura para auditoría y capacitación. 

## Guía de cronograma del proyecto

| Fase | Acción de RcloneView | Resultado |
| --- | --- | --- |
| Semana 1 | Conectar remotos, línea base de Compare, crear trabajos de Copy | Inventario de cada biblioteca + Shared Drives sembrados |
| Semana 2 | Delta nocturno del programador + informe semanal de Compare | Actualizaciones continuas con visibilidad de la desviación |
| Semana 3 | Montajes piloto, validación de permisos, capacitación de usuarios | Las partes interesadas obtienen una vista previa segura de Google Shared Drives |
| Semana de corte | Congelamiento de SharePoint, Sync/Compare final, puesta en marcha del Shared Drive | Minutos de inactividad con registros de validación firmados |
| 2 semanas después | Sync programado en el remoto heredado + Copy de archivo opcional a S3/Wasabi | Prueba de que no se omitió ningún archivo antes de la baja definitiva |


RcloneView convierte las migraciones multi-nube en un plan predecible: configura remotos, previsualiza diferencias, prepara trabajos de Copy + Sync, automatiza los deltas y monta para control de calidad. Tus equipos siguen siendo productivos en SharePoint hasta el momento exacto en que los rediriges a Google Shared Drives.

<CloudSupportGrid />
