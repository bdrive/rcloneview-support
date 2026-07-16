---
slug: migrate-mega-to-backblaze-b2-rcloneview
title: "Migrar de Mega a Backblaze B2 — Transfiere archivos con RcloneView"
authors:
  - tayson
description: "Traslada tus archivos de Mega a Backblaze B2 fácilmente con RcloneView. Transfiere bibliotecas grandes directamente entre nubes sin descargarlas — rápido, verificado y confiable."
keywords:
  - migrar Mega a Backblaze B2
  - transferencia Mega a Backblaze RcloneView
  - migración Mega Backblaze B2
  - transferencia de archivos entre nubes
  - herramienta de migración de la nube de Mega
  - importar a Backblaze B2 desde Mega
  - mover archivos de Mega a B2
  - RcloneView Mega Backblaze
  - migración de copia de seguridad de la nube de Mega
  - GUI de migración de Backblaze B2
tags:
  - mega
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar de Mega a Backblaze B2 — Transfiere archivos con RcloneView

> RcloneView transfiere tus archivos directamente de Mega a Backblaze B2 sin descargarlos a tu unidad local — preservando la estructura de carpetas y verificando cada archivo.

El generoso nivel de almacenamiento gratuito de Mega atrae grandes archivos personales y colecciones de proyectos, pero los equipos que buscan consolidar el almacenamiento en una plataforma con costos más predecibles suelen migrar al almacenamiento de objetos de Backblaze B2. Ya sea que estés migrando la biblioteca de recursos de una agencia creativa o la colección de copias de seguridad de un desarrollador, RcloneView gestiona la transferencia de Mega a B2 con verificación de integridad completa y sin descargas manuales de archivos.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta Mega y Backblaze B2 en RcloneView

Comienza agregando ambas cuentas como remotos en RcloneView. Para Mega, ve a la pestaña Remote > New Remote, selecciona Mega e introduce tu dirección de correo electrónico y contraseña de Mega. Para Backblaze B2, selecciona Backblaze B2 e introduce tu Application Key ID y Application Key desde la consola de B2. Ambos remotos se almacenan de forma segura en el almacenamiento local cifrado de RcloneView.

Con ambos remotos conectados, ábrelos uno junto al otro en el explorador de doble panel de RcloneView. Puedes navegar por la estructura de carpetas de Mega en un lado y tu bucket de B2 en el otro, lo que te da una visión clara de lo que se transferirá.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Mega and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## Configura el trabajo de sincronización de la migración

La forma más confiable de migrar de Mega a Backblaze B2 es mediante un trabajo de sincronización con nombre. En el asistente de sincronización de RcloneView:

1. Configura la **fuente** en tu remoto de Mega (selecciona la raíz o una carpeta específica)
2. Configura el **destino** en tu bucket de B2 y subdirectorio
3. Asigna al trabajo un nombre descriptivo como `mega-to-b2-migration`
4. Activa la verificación de **checksum** para comparar archivos por hash después de la transferencia

La opción de checksum es especialmente importante para las migraciones desde Mega, ya que Mega utiliza su propio cifrado interno — verificar el tamaño y el hash en el destino confirma que el contenido se descifró y se volvió a subir correctamente.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Mega to Backblaze B2 in RcloneView" class="img-large img-center" />

## Ejecuta primero una prueba en seco (Dry Run)

Antes de comprometerte con una migración completa, usa el modo **dry run** de RcloneView para previsualizar exactamente qué se transferirá. La prueba en seco muestra una lista de archivos que se copiarán y cualquier archivo que se eliminaría en el destino — sin realizar cambios reales. Esto es invaluable al migrar miles de archivos, ya que te permite verificar el alcance de la migración antes de que comience.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Executing the Mega to Backblaze B2 migration in RcloneView" class="img-large img-center" />

## Supervisa el progreso y verifica la finalización

La pestaña Transfer de RcloneView muestra el progreso de la migración en tiempo real: nombre del archivo, velocidad de transferencia, bytes totales movidos y porcentaje completado. Para una biblioteca de Mega de 200 GB, espera que la transferencia tarde varias horas dependiendo de la velocidad de tu conexión. La pestaña Transfer te mantiene informado sin necesidad de permanecer frente a tu computadora.

Después de que el trabajo se complete, revisa el historial de trabajos (Job History) para obtener un resumen completo — archivos transferidos, bytes movidos, duración y cualquier error. Si la limitación de la tasa de la API de Mega pausó la transferencia, RcloneView registra los intentos de reintento para que puedas ver qué sucedió.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Mega to Backblaze B2 migration progress in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agrega Mega (correo electrónico + contraseña) y Backblaze B2 (Application Key) como remotos.
3. Crea un trabajo de sincronización de Mega a tu bucket de B2 con la verificación de checksum activada.
4. Ejecuta una prueba en seco para previsualizar y luego lleva a cabo la migración completa.

Migrar de Mega a Backblaze B2 es sencillo con RcloneView gestionando la transferencia entre nubes — sin necesidad de almacenamiento local ni descargas manuales.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento de Mega — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-mega-cloud-sync-backup-rcloneview)
- [Gestiona el almacenamiento de Backblaze B2 — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Migra de Mega a Amazon S3 con RcloneView](https://rcloneview.com/support/blog/migrate-mega-to-aws-s3-rcloneview)

<CloudSupportGrid />
