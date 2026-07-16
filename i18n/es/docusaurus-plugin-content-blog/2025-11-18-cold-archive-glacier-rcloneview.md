---
slug: tiered-cloud-archive-glacier-rcloneview
title: "Copia de seguridad en la nube por niveles a S3 Standard, Wasabi y Glacier Deep Archive con RcloneView"
authors:
  - tayson
description: Cree un pipeline de copia de seguridad en niveles caliente-templado-frío con RcloneView entre S3/Wasabi para restauraciones rápidas y Glacier Deep Archive para retención de costo ultra bajo, usando trabajos programados de Sincronización/Copia y políticas de ciclo de vida.
keywords:
  - glacier deep archive
  - almacenamiento en frío
  - copia de seguridad por niveles
  - rclone s3
  - rcloneview
  - archivo wasabi
  - política de ciclo de vida
  - copia de seguridad en la nube
  - retención de archivos
tags:
  - archive
  - s3
  - glacier
  - wasabi
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Copia de seguridad en la nube por niveles a S3 Standard, Wasabi y Glacier Deep Archive con RcloneView

> Mantenga las restauraciones recientes rápidas y la retención a largo plazo económica: caliente en S3 Standard, templado en Wasabi/R2 y archivo en Glacier Deep Archive, con programaciones de RcloneView y políticas de ciclo de vida de bucket.

Una sola clase de almacenamiento rara vez se ajusta a todos los archivos. Diseñe un pipeline por niveles: copie los datos recientes a S3 Standard para un acceso rápido, replique en un nivel templado de bajo costo (Wasabi/R2) para redundancia geográfica, y envíe instantáneas mensuales a Glacier Deep Archive para retención de cumplimiento. RcloneView añade una interfaz gráfica sobre rclone para que pueda programar Sincronizaciones, verificar con Comparar y mantener intactas las reglas de ciclo de vida, sin scripts de shell.

<!-- truncate -->

**Documentación relevante**

- Crear trabajos de sincronización: https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs
- Programación y ejecución de trabajos (Plus): https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution
- Comparar carpetas: https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents
- Montar como unidad local: https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Por qué usar copia de seguridad por niveles con RcloneView

- Velocidad de recuperación: los archivos recientes permanecen en S3 Standard para extracciones de baja latencia.
- Control de costos: copia templada en Wasabi/R2; archivo profundo en Glacier por centavos por TB al mes.
- Resiliencia: multi-nube y multi-región reducen el riesgo de depender de un solo proveedor.
- Sin scripting: trabajos visuales, programaciones y registros en lugar de cron/YAML.
- Prueba: los trabajos de Comparar detectan desviaciones antes de que necesite restaurar.

## Arquitectura de un vistazo

```
[Primario (NAS/Drive/OneDrive)] --(Sincronización horaria)--> [Copia caliente en S3 Standard]
                                         \
                                          --(Sincronización diaria)--> [Copia templada en Wasabi/R2]
                                          --(Copia mensual)--> [Glacier Deep Archive]
```

- Caliente: S3 Standard (restauración rápida).
- Templado: Wasabi o R2 (económico y favorable en egreso para restauraciones).
- Frío: Glacier Deep Archive para retención de 90 a 365 días (use el ciclo de vida del bucket para transicionar objetos).

## Requisitos previos

- Tres remotos configurados en RcloneView (por ejemplo, `s3:hot`, `wasabi:warm`, `s3:archive`).
- Versionado en los buckets caliente/templado; reglas de ciclo de vida en el bucket de archivo para transicionar a Glacier Deep Archive.
- Permisos IAM/API: listar/leer/escribir + multiparte; permisos de restauración de Glacier para el nivel frío.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## Paso 1: Cree los trabajos de sincronización caliente y templado

1. Cree un trabajo de **Sincronización** (Primario -> S3 caliente).
2. En **Configuración avanzada**, establezca los recuentos de transferencia y active la comparación por checksum si ambos lados admiten hashes.
3. En **Configuración de filtrado**, excluya las carpetas de caché/temporales.
4. Cree un segundo trabajo de **Sincronización** (Primario -> Wasabi/R2 templado) con ajustes y filtros similares.
5. Guarde ambos trabajos en el Administrador de trabajos.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />

## Paso 2: Añada el trabajo de Copia de archivo frío

1. Cree un trabajo de **Copia** (S3 caliente -> bucket de archivo Glacier). Use Copia, no Sincronización, para evitar eliminaciones en el archivo.
2. En **Configuración avanzada**, establezca los recuentos de transferencia y la comparación por checksum según sea necesario.
3. Use reglas de ciclo de vida del bucket para transicionar objetos a Glacier Deep Archive y expirar versiones antiguas después de las ventanas de cumplimiento.

## Paso 3: Programe todo

- En el asistente de trabajo (Paso 4: Programación, Plus), establezca las cadencias: caliente cada hora, templado cada noche, frío mensual.
- Use **Simular** para previsualizar las programaciones y establecer los recuentos de reintento en Configuración avanzada.
- Añada una Comparación semanal (caliente vs templado) para detectar desviaciones a tiempo.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configure the job scheduler in RcloneView" class="img-large img-center" />

## Paso 4: Verifique la integridad

- Ejecute Comparar entre caliente y templado después de la primera sincronización completa.
- Para el archivo, verifique restauraciones puntuales: realice una recuperación pequeña de Glacier y confirme que los archivos se abren correctamente.
- Mantenga un pequeño archivo canario (por ejemplo, `canary.txt`) en cada nivel y compruebe su presencia en los informes de Comparar.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

## Paso 5: Guía de restauración

- Restauraciones rápidas: extraiga desde templado (Wasabi/R2) o caliente (S3 Standard) según el egreso/ubicación.
- Restauraciones profundas: inicie una restauración de Glacier para el prefijo necesario; luego Copie de vuelta a templado/caliente.
- Use Montar en RcloneView para explorar antes de la copia masiva y evitar restaurar las carpetas equivocadas.

## Consejos de ajuste

- Sensible a latencia/egreso: reduzca los recuentos de transferencia durante horas hábiles; aumente fuera de horario.
- Costos de Glacier: agrupe los archivos mensualmente; evite cargas pequeñas frecuentes para reducir las solicitudes de PUT y recuperación.
- Seguridad: combine caliente/templado con Object Lock (vea la guía de inmutabilidad) para bloquear eliminaciones por ransomware.
- Nomenclatura: anteponga carpetas por fecha a las instantáneas (por ejemplo, `archive/2025-11/`) para simplificar el ciclo de vida y las restauraciones.

## Lista de verificación de solución de problemas

- Retrasos en la restauración: la recuperación de Glacier puede tardar horas; planifique el RPO/RTO en consecuencia.
- AccessDenied en el archivo: asegúrese de que el rol IAM permita `glacier:InitiateJob`/restauración para el bucket.
- Desviación detectada: vuelva a ejecutar la Sincronización caliente/templado; si faltan objetos en el archivo, vuelva a Copiar la diferencia desde caliente.
- Aumento de costos: active la expiración por ciclo de vida después de la retención; limite la concurrencia durante las ventanas de egreso pico.



Escalone una vez, programe siempre, y mantenga tanto los costos como el RPO bajo control con RcloneView.

<CloudSupportGrid />
