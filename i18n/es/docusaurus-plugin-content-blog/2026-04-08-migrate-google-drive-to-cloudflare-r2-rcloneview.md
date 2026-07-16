---
slug: migrate-google-drive-to-cloudflare-r2-rcloneview
title: "Migra Google Drive a Cloudflare R2 con RcloneView"
authors:
  - tayson
description: "Migra archivos de Google Drive a Cloudflare R2 con RcloneView. Guía paso a paso que cubre la configuración, la conversión de Google Docs, la verificación y los beneficios de egreso cero."
keywords:
  - rcloneview
  - google drive to cloudflare r2
  - migrate google drive
  - google drive migration tool
  - cloudflare r2 migration
  - cloud to cloud migration
  - google docs export
  - zero egress migration
  - google drive backup r2
  - cloud storage migration gui
tags:
  - google-drive
  - cloudflare-r2
  - migration
  - cloud-migration
  - cloud-to-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migra Google Drive a Cloudflare R2 con RcloneView

> Pasar de Google Drive a Cloudflare R2 elimina las tarifas de egreso y te da acceso compatible con S3 a tus datos — **RcloneView** gestiona toda la migración de forma visual.

Google Drive es una plataforma de colaboración potente, pero a medida que las necesidades de almacenamiento crecen y los patrones de acceso a los datos cambian, muchos equipos recurren al almacenamiento de objetos por su escalabilidad y flexibilidad de API. Cloudflare R2 ofrece almacenamiento compatible con S3 con cero tarifas de egreso, lo que lo convierte en un destino atractivo para datos que deben servirse de forma programática. RcloneView cierra la brecha entre estos dos modelos de almacenamiento tan distintos, gestionando la conversión de formato de Google Docs, las transferencias de archivos grandes y la verificación posterior a la migración en una sola GUI.

Esta guía recorre el proceso completo de migración — desde la configuración de ambos remotos hasta la verificación de que cada archivo llegó intacto.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué migrar de Google Drive a Cloudflare R2

Los precios de Google Drive comienzan en $1.99/mes por 100 GB, escalando a niveles empresariales bajo Google Workspace. Aunque es asequible para la colaboración, Google Drive no está diseñado para el acceso programático a los datos. Los límites de tasa de la API, la falta de compatibilidad con S3 y las cuotas de almacenamiento por usuario lo convierten en una mala opción para servir activos estáticos, alojar conjuntos de datos o alimentar pipelines de CI/CD.

Cloudflare R2 aborda estas limitaciones. Con $0.015/GB/mes y cero cargos de egreso, R2 es significativamente más económico para cargas de trabajo de lectura intensiva. Su API compatible con S3 significa que las herramientas y SDK existentes funcionan sin modificaciones. Si tus datos comenzaron en Google Drive pero ahora necesitan ser accesibles a través de endpoints S3, migrar a R2 es el siguiente paso lógico.

## Configurar Google Drive en RcloneView

Abre el Remote Manager y agrega un remoto de Google Drive. RcloneView usa OAuth 2.0 — haz clic en autorizar, inicia sesión en tu cuenta de Google y concede acceso. El token se almacena localmente en tu configuración de rclone.

Si estás migrando desde una cuenta de Google Workspace con Shared Drives, puedes configurar RcloneView para acceder a Shared Drives específicos en lugar de solo tu My Drive personal. Esto es importante para migraciones organizacionales donde los datos están distribuidos entre unidades de equipo.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive remote in RcloneView" class="img-large img-center" />

## Configurar Cloudflare R2 en RcloneView

Agrega R2 como un remoto compatible con S3. En el Remote Manager, selecciona **Amazon S3 Compatible** y configura:

- **Provider**: Cloudflare
- **Access Key ID** y **Secret Access Key**: Generadas desde el panel de Cloudflare
- **Endpoint**: `https://<account-id>.r2.cloudflarestorage.com`

Crea un bucket de destino en el panel de Cloudflare o a través del explorador de RcloneView antes de iniciar la migración. Elige un nombre de bucket que refleje la fuente de datos — por ejemplo, `gdrive-archive-2026` — para facilitar su identificación más adelante.

## Manejo de la conversión de formato de Google Docs

Esta es la consideración más crítica al migrar desde Google Drive. Los formatos nativos de Google — Docs, Sheets, Slides, Drawings — no son archivos en el sentido tradicional. Existen únicamente dentro del ecosistema de Google y tienen cero bytes en disco.

Cuando RcloneView exporta estos archivos, los convierte a formatos estándar:

- **Google Docs** se convierte en `.docx` (Microsoft Word)
- **Google Sheets** se convierte en `.xlsx` (Microsoft Excel)
- **Google Slides** se convierte en `.pptx` (Microsoft PowerPoint)

Puedes configurar el formato de exportación en la configuración del remoto. Si tu equipo prefiere formatos PDF u OpenDocument, ajústalo antes de iniciar la migración. Ten en cuenta que los archivos exportados pierden funciones específicas de Google como comentarios, modo de sugerencias y enlaces de colaboración en tiempo real.

Para archivos que ya están en formatos estándar (PDF, imágenes, ZIP subidos), la transferencia es una copia directa byte por byte sin necesidad de conversión.

## Ejecutar la migración

Con ambos remotos configurados, abre el explorador de dos paneles. Coloca Google Drive a la izquierda y tu bucket de R2 a la derecha. Puedes migrar toda la unidad o seleccionar carpetas específicas.

Para una migración completa, usa un trabajo de sincronización. RcloneView enumerará todos los archivos en Google Drive, exportará los formatos nativos de Google y transferirá todo a R2. El panel de monitoreo en tiempo real muestra el progreso por archivo, la velocidad de transferencia y el tiempo estimado de finalización.

Para migraciones grandes (cientos de gigabytes o más), considera estas optimizaciones:

- **Aumentar las transferencias paralelas**: R2 maneja bien la alta concurrencia. Aumenta el número de transferencias paralelas a 8-16 para maximizar el rendimiento.
- **Usar programación de ancho de banda**: Si migras durante horas laborales, limita el ancho de banda para evitar afectar a otros usuarios de la red.
- **Ejecutar por etapas**: Migra carpeta por carpeta en lugar de todo a la vez. Esto facilita verificar cada lote y reanudar si se interrumpe.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Google Drive to R2 migration progress in RcloneView" class="img-large img-center" />

## Verificar la migración con Compare

Después de completar la migración, ejecuta la operación de comparación de RcloneView entre Google Drive y R2. La vista de comparación resalta:

- **Archivos solo en el origen**: Elementos que no se transfirieron o fueron omitidos
- **Archivos solo en el destino**: Extras inesperados (poco frecuentes, pero vale la pena revisarlos)
- **Archivos que difieren**: Discrepancias de tamaño o hash que indican transferencias incompletas

Ten en cuenta que los archivos de Google Docs siempre se mostrarán como diferentes porque el formato exportado difiere del formato nativo de Google de cero bytes. Concéntrate en los archivos no nativos para una comparación significativa. Si algún archivo estándar muestra discrepancias, vuelve a ejecutar una sincronización para transferir solo los elementos faltantes o modificados.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying Google Drive to R2 migration with compare in RcloneView" class="img-large img-center" />

## Después de la migración: sincronización incremental

Después de la migración inicial, es posible que desees mantener R2 sincronizado con Google Drive durante un período de transición. Configura un trabajo de sincronización programado en RcloneView — diario o cada hora, según tus necesidades. Esto garantiza que los nuevos archivos agregados a Google Drive se repliquen automáticamente en R2 hasta que completes la migración total.

Una vez que la transición esté completa y todos los puntos de acceso hagan referencia a R2, puedes desactivar el trabajo de sincronización y, opcionalmente, archivar o eliminar los datos de Google Drive.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling incremental sync from Google Drive to R2 in RcloneView" class="img-large img-center" />

## Historial de trabajos y registro de auditoría

Cada ejecución de migración se registra en el historial de trabajos de RcloneView. Puedes revisar el número de archivos transferidos, los bytes movidos, los errores encontrados y el tiempo transcurrido de cada ejecución. Esto proporciona un registro de auditoría para fines de cumplimiento y ayuda a solucionar cualquier problema que surja durante o después de la migración.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing Google Drive to R2 migration runs" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agrega tu Google Drive mediante OAuth y tu Cloudflare R2 como un remoto compatible con S3.
3. Configura los formatos de exportación de Google Docs (docx, xlsx, pptx u otras alternativas que prefieras).
4. Ejecuta la migración usando el explorador de dos paneles y verifica los resultados con la función de comparación.

Google Drive sobresale en la colaboración, pero cuando necesitas almacenamiento compatible con S3 y sin egreso, Cloudflare R2 es el destino — y RcloneView es el puente.

---

**Guías relacionadas:**

- [Agregar Google Drive](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [Agregar AWS S3 y compatibles con S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Comparar el contenido de carpetas](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
