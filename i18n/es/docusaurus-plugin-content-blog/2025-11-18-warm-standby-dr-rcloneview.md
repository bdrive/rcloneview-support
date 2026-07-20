---
slug: warm-standby-disaster-recovery-rcloneview
title: "Recuperación ante desastres en modo warm-standby entre nubes con RcloneView (S3, Wasabi, R2, OneDrive)"
authors:
  - tayson
description: Cree una configuración de recuperación ante desastres warm-standby multirregión con RcloneView y rclone entre AWS S3, Wasabi, Cloudflare R2, OneDrive o Google Drive, usando sincronización programada, comparación y conmutación por error basada en montaje.
keywords:
  - warm standby
  - recuperación ante desastres
  - copia de seguridad multirregión
  - rclone s3
  - rcloneview
  - conmutación por error en la nube
  - comparar sincronización
  - cloudflare r2
  - wasabi s3
tags:
  - RcloneView
  - disaster-recovery
  - multi-cloud
  - backup
  - sync
  - s3
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Recuperación ante desastres en modo warm-standby entre nubes con RcloneView (S3, Wasabi, R2, OneDrive)

> Mantenga una copia activa de los datos de producción en otra región o nube y cambie en cuestión de minutos cuando ocurran incidentes.

La recuperación ante desastres warm-standby combina una ubicación primaria (por ejemplo, AWS S3 u OneDrive) con un standby actualizado continuamente (por ejemplo, Cloudflare R2 o Wasabi). RcloneView añade una interfaz gráfica sobre rclone para que pueda programar sincronizaciones constantes, validar el desvío de datos con Compare y montar el standby para una conmutación por error rápida, sin scripts de shell.

<!-- truncate -->

**Documentación relevante**

- Crear trabajos de sincronización: https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs
- Programación y ejecución de trabajos (Plus): https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution
- Montar como unidad local: https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive
- Comparar carpetas: https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Por qué usar warm-standby con RcloneView

- Recuperación más rápida: las copias en standby están a minutos/horas de la primaria, no a días.
- Elección de nube: combine S3, Wasabi, R2, B2, Google Drive, Dropbox u OneDrive.
- Sin scripts: cree trabajos con un asistente, no con YAML/cron.
- Desvío visible: Compare resalta discrepancias antes de que necesite conmutar.
- Restauraciones más seguras: monte el standby y copie de vuelta sin tocar producción.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />
  

## Estrategia y arquitectura

```
[Primary cloud/local/NAS] --(RcloneView scheduled Sync)--> [Standby cloud/region]
                                                \
                                                 --(Weekly Compare)--> [Drift report]
```

- Primaria: donde las aplicaciones escriben (bucket de S3, sitio de OneDrive, espacio de trabajo de GDrive, NAS).
- Standby: otra región/proveedor con versionado (R2/Wasabi/S3/B2).
- Control: RcloneView ejecuta la sincronización a intervalos; Compare verifica la integridad; Mount permite un acceso rápido durante la conmutación por error.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## Requisitos previos

- Dos remotos configurados en RcloneView (por ejemplo, `s3:prod-bucket` y `r2:standby-bucket`).
- Versionado habilitado en el standby para mayor seguridad en las reversiones.
- Permisos de IAM/API para listar/leer/escribir en ambos lados.
- Ventana de ancho de banda para la replicación programada (nocturna u horaria).

## Paso 1: Crear el trabajo de sincronización base

1. Cree un trabajo de Sync: Origen = primaria, Destino = standby.
2. Use Sync unidireccional para reflejar archivos nuevos/actualizados; mantenga las eliminaciones si desea paridad estricta.
3. Añada filtros para rutas ruidosas (por ejemplo, cache/temp) en el paso de Filtering.
4. En **Advanced Settings**, ajuste los recuentos de transferencia y habilite la comparación por checksum si ambos lados admiten hashes.
5. Guarde el trabajo para que la misma configuración se aplique en cada ejecución (Job Manager).

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />

## Paso 2: Programar actualizaciones continuas

1. En el asistente de trabajos (Paso 4: Scheduling, licencia Plus), habilite la programación para el trabajo de DR.
2. Elija la cadencia: horaria para datos de aplicaciones, nocturna para archivos, y use **Simulate** para previsualizar las próximas ejecuciones.
3. Establezca los intentos de reintento en Advanced Settings para enlaces inestables.
4. Mantenga una Compare manual semanal para detectar desvíos a tiempo.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configure the job scheduler in RcloneView" class="img-large img-center" />

## Paso 3: Verificar y monitorizar

- Use Compare para asegurarse de que los recuentos de objetos coinciden antes de declarar listo el standby.
- Revise el Job History en busca de fallos o reintentos y vuelva a ejecutar el trabajo si se perdió una ventana.
- Mantenga el versionado en el standby para poder recuperar eliminaciones accidentales.

## Paso 4: Guía de conmutación por error

1. Monte el standby: use Mount Manager para montar el remoto de destino en una ruta o letra de unidad estable.
2. Dirija las cargas de trabajo a la ruta montada o al endpoint del bucket standby.
3. Mantenga la primaria en solo lectura o fuera de línea hasta que finalice el triaje del incidente.


## Consejos de ajuste

- Aplicaciones sensibles a la latencia: reduzca los recuentos de transferencia en Advanced Settings y programe durante horas de bajo tráfico.
- Cumplimiento normativo: mantenga el versionado en el standby y exporte el Job History para auditorías.
- Control de costos: excluya carpetas de staging/temp mediante Filters y aplique políticas de ciclo de vida en la nube standby.
- Multi-nube: ejecute trabajos separados si necesita dos standbys (por ejemplo, R2 + Wasabi) desde la misma primaria.

## Lista de verificación de solución de problemas

- Recuentos no coincidentes: vuelva a ejecutar Compare y revise el Job History en busca de elementos omitidos; confirme que el versionado esté activado.
- Errores de permisos: asegúrese de que las claves de API permitan listar/leer/escribir en ambas nubes.
- La restauración elimina datos: use Copy (no Sync) al traer datos de vuelta a producción.


Mantenga su standby activo, probado y listo para que la conmutación por error sea un simple cambio, no una carrera contrarreloj.

<CloudSupportGrid />
