---
slug: migrate-azure-blob-to-google-drive-rcloneview
title: "Migra Azure Blob Storage a Google Drive con RcloneView"
authors:
  - tayson
description: "Migra Azure Blob Storage a Google Drive con RcloneView. Guía paso a paso para la configuración, el manejo de contenedores grandes, la verificación y la sincronización incremental."
keywords:
  - rcloneview
  - azure blob to google drive
  - migrate azure storage
  - azure blob migration
  - cloud to cloud migration
  - azure to google workspace
  - cloud storage migration tool
  - azure blob transfer
  - google drive migration gui
  - enterprise cloud migration
tags:
  - azure
  - google-drive
  - migration
  - cloud-migration
  - cloud-to-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migra Azure Blob Storage a Google Drive con RcloneView

> Azure Blob Storage está diseñado para desarrolladores, pero cuando tu equipo necesita funciones de colaboración, Google Drive es el destino — **RcloneView** cierra la brecha entre el almacenamiento de objetos y la nube para el consumidor.

Azure Blob Storage destaca a la hora de servir aplicaciones — los niveles hot, cool y archive dan a los desarrolladores un control de costos detallado para cargas de trabajo estructuradas. Pero cuando las necesidades del negocio se orientan hacia la colaboración de documentos, la edición compartida y la integración con Google Workspace, mover los datos de los contenedores de Azure a Google Drive se vuelve necesario. RcloneView se conecta a ambas plataformas y ofrece un flujo de migración visual que maneja contenedores grandes, preserva las estructuras de carpetas y verifica cada archivo transferido.

Esta guía cubre el proceso de migración completo, desde la configuración de ambos remotos hasta la puesta en marcha de una sincronización incremental durante el período de transición.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué migrar de Azure Blob a Google Drive

Los motivos de esta migración suelen encajar en unas pocas categorías:

- **Requisitos de colaboración**: Azure Blob Storage no cuenta con edición ni uso compartido de documentos integrados. Google Drive ofrece colaboración en tiempo real mediante Docs, Sheets y Slides, además de permisos de uso compartido granulares para equipos.
- **Integración con Google Workspace**: Las organizaciones que migran a Google Workspace se benefician de tener sus archivos en Google Drive, donde se integran con Gmail, Calendar, Meet y otras aplicaciones de Workspace.
- **Simplificación de costos**: Los precios de Azure Blob involucran niveles de almacenamiento, cargos de salida (egress), operaciones de lectura/escritura y opciones de redundancia de datos. Google Workspace agrupa el almacenamiento en un precio por usuario, lo que puede simplificar el presupuesto.
- **Accesibilidad para el usuario final**: Los usuarios no técnicos encuentran Google Drive mucho más accesible que Azure Storage Explorer o el portal de Azure.

## Configurar Azure Blob Storage en RcloneView

Abre el Administrador de remotos y añade un remoto de **Microsoft Azure Blob Storage**. Necesitas:

- **Nombre de cuenta**: El nombre de tu cuenta de Azure Storage
- **Clave de cuenta** o **URL SAS**: La clave de acceso principal desde el portal de Azure, o una Firma de Acceso Compartido (Shared Access Signature) con permisos de lectura y listado

Una vez configurado, RcloneView lista todos los contenedores de la cuenta de almacenamiento. Cada contenedor aparece como una carpeta de nivel superior en el explorador. Navega dentro de los contenedores para explorar los blobs organizados por su estructura de directorio virtual basada en prefijos.

Azure Blob Storage admite tres niveles de acceso — Hot, Cool y Archive. RcloneView puede leer directamente de los niveles Hot y Cool. Los blobs en el nivel Archive deben rehidratarse a Hot o Cool antes de poder transferirse. Si tu migración incluye blobs archivados, inicia la rehidratación a través del portal de Azure primero, y luego continúa con RcloneView una vez que los blobs sean accesibles.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Azure Blob Storage remote in RcloneView" class="img-large img-center" />

## Configurar Google Drive en RcloneView

Añade un remoto de Google Drive usando el flujo OAuth 2.0. Haz clic en autorizar en el Administrador de remotos, inicia sesión en tu cuenta de Google y concede acceso. Para cuentas de Google Workspace, puedes conectarte a Mi unidad o a una Unidad compartida específica.

Si el destino es una Unidad compartida, selecciónala durante la configuración. Las Unidades compartidas tienen reglas de propiedad diferentes — los archivos pertenecen a la organización en lugar de a usuarios individuales — lo que las hace ideales para migraciones en equipo.

Google Drive tiene una cuota de almacenamiento por usuario (15 GB gratis, o almacenamiento agrupado en los planes de Workspace). Verifica que tu destino tenga cuota suficiente antes de iniciar una migración grande. RcloneView reportará errores si se excede la cuota durante la transferencia.

## Manejo de contenedores grandes

Los contenedores de Azure pueden albergar millones de blobs que suman terabytes o petabytes de datos. Migrar todo de una vez es factible, pero requiere planificación:

- **Enumera primero**: Usa el explorador de RcloneView para navegar el contenedor y entender la estructura de carpetas y el tamaño total. Esto te ayuda a estimar la duración de la migración y los requisitos de cuota de Google Drive.
- **Migra por prefijo**: Si el contenedor usa una estructura de carpetas lógica (por ejemplo, `/projects/2024/`, `/projects/2025/`), migra un prefijo a la vez. Esto facilita la verificación y te permite priorizar los datos activos.
- **Transferencias paralelas**: Aumenta el número de transferencias concurrentes en la configuración de RcloneView. Azure Blob Storage maneja bien la alta concurrencia, y Google Drive admite cargas paralelas con el manejo adecuado de límites de tasa.

Google Drive impone límites de tasa en su API — 10 cargas por segundo para la mayoría de las cuentas. RcloneView regula automáticamente y reintenta ante respuestas 403 (Rate Limit Exceeded) o 429, pero las migraciones grandes naturalmente tomarán más tiempo debido a estas restricciones.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Azure Blob Storage to Google Drive in RcloneView" class="img-large img-center" />

## Ejecutar la migración

Abre el explorador de dos paneles con Azure Blob a la izquierda y Google Drive a la derecha. Selecciona el contenedor de origen (o un prefijo específico) y la carpeta de destino en Google Drive.

Crea un trabajo de copia o sincronización. RcloneView transfiere cada blob como un archivo, preservando la estructura de directorio basada en prefijos como carpetas reales en Google Drive. Los nombres de archivo, tamaños y fechas de modificación se conservan. Los metadatos de Azure (propiedades personalizadas de los blobs) no se transfieren porque Google Drive no admite metadatos arbitrarios de clave-valor.

Durante la transferencia, el panel de monitoreo en tiempo real muestra:

- Progreso y velocidad de transferencia por archivo
- Total de archivos completados frente a los restantes
- Tiempo estimado hasta la finalización
- Cualquier error o reintento

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Azure Blob to Google Drive migration in RcloneView" class="img-large img-center" />

## Verificar la migración

Después de que la transferencia se complete, usa la función de comparación de RcloneView para verificar la migración. Compara el contenedor de Azure con la carpeta de destino en Google Drive. La vista de comparación destaca:

- **Archivos faltantes**: Blobs que no se transfirieron (posiblemente debido a errores o restricciones del nivel archive)
- **Discrepancias de tamaño**: Archivos que se transfirieron de forma incompleta
- **Archivos coincidentes**: Elementos migrados exitosamente

Dado que Azure Blob Storage usa MD5 para la verificación de contenido y Google Drive usa su propia suma de verificación, RcloneView utiliza el tamaño de archivo y la fecha de modificación para la comparación de forma predeterminada. Para migraciones críticas, puedes habilitar la verificación por suma de verificación en la configuración del trabajo para lograr precisión a nivel de byte.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying Azure to Google Drive migration with compare" class="img-large img-center" />

## Programar sincronización incremental después de la migración

Las migraciones rara vez ocurren de forma instantánea — pueden llegar datos nuevos a Azure Blob Storage mientras la transferencia está en curso. Configura un trabajo de sincronización programado en RcloneView para que se ejecute diariamente (o con mayor frecuencia) durante el período de transición. Esta sincronización incremental detecta blobs nuevos o modificados y transfiere solo el delta a Google Drive.

Una vez que todos los sistemas apunten a Google Drive y los contenedores de Azure ya no reciban datos nuevos, ejecuta una sincronización final para capturar cualquier rezagado. Luego desactiva el trabajo programado.

Para transiciones de larga duración, el historial de trabajos de RcloneView proporciona un registro completo de cada ejecución de sincronización — archivos transferidos, bytes movidos, errores y duración. Este rastro de auditoría es invaluable para validar el cronograma de la migración e informar a las partes interesadas.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling incremental sync from Azure to Google Drive" class="img-large img-center" />

## Gestionar la transición

Durante el período de coexistencia, considera montar ambos remotos en RcloneView para tener acceso lado a lado. Los usuarios pueden explorar los contenedores de Azure y Google Drive simultáneamente, verificando que sus archivos estén disponibles en la nueva ubicación. La función de montaje permite a los usuarios acceder a Google Drive como una letra de unidad local, facilitando la transición para los equipos acostumbrados a unidades asignadas.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting Google Drive as local drive during migration" class="img-large img-center" />

## Cómo empezar

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade Azure Blob Storage (con clave de cuenta o SAS) y Google Drive (mediante OAuth) como remotos.
3. Ejecuta la migración desde el explorador de dos paneles, migrando por contenedor o prefijo para facilitar el manejo.
4. Verifica con la función de comparación, luego programa la sincronización incremental hasta que la transición esté completa.

Azure Blob Storage sirve bien a las aplicaciones, pero cuando tu equipo necesita colaboración con Google Workspace, RcloneView mueve tus datos de forma limpia y verificable.

---

**Guías relacionadas:**

- [Añadir Google Drive](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [Sincronizar almacenamientos remotos al instante](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)
- [Programación de trabajos](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
