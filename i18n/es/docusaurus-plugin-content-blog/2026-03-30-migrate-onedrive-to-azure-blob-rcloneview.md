---
slug: migrate-onedrive-to-azure-blob-rcloneview
title: "Migra OneDrive a Azure Blob — Transfiere archivos con RcloneView"
authors:
  - tayson
description: "Migra archivos de OneDrive a Azure Blob Storage usando RcloneView. Traslada documentos empresariales a almacenamiento de objetos escalable sin herramientas de línea de comandos ni scripts."
keywords:
  - onedrive to azure blob
  - migrate onedrive to azure
  - onedrive azure blob transfer
  - cloud-to-cloud migration
  - azure blob storage migration
  - rcloneview onedrive transfer
  - microsoft cloud migration
  - enterprise cloud migration
  - onedrive backup azure
  - object storage migration
tags:
  - RcloneView
  - onedrive
  - azure
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migra OneDrive a Azure Blob — Transfiere archivos con RcloneView

> Graduarse de OneDrive a Azure Blob Storage le da a tu equipo almacenamiento de objetos escalable y programable — y RcloneView hace que el traslado sea sencillo.

OneDrive funciona bien para la colaboración diaria en documentos, pero los equipos empresariales a menudo superan sus límites de almacenamiento o necesitan acceso programático a los archivos mediante las API REST de Azure. Azure Blob Storage ofrece precios escalonados (Hot, Cool y Archive), una escalabilidad masiva e integración estrecha con Azure Functions, Logic Apps y Data Factory. RcloneView conecta ambos servicios de Microsoft, permitiéndote migrar archivos de OneDrive a contenedores de Azure Blob sin escribir una sola línea de código.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cuándo OneDrive alcanza sus límites

OneDrive for Business incluye 1 TB por usuario en la mayoría de los planes de Microsoft 365, con complementos opcionales de hasta 5 TB. Eso suena generoso hasta que tu organización acumula años de archivos de proyectos, activos multimedia o registros de cumplimiento. Azure Blob Storage escala a exabytes y cobra tan solo $0.018 por GB al mes en el nivel Cool — una fracción de lo que cuesta una capacidad equivalente en OneDrive.

Más allá de la capacidad bruta, Azure Blob admite funciones que OneDrive no puede igualar: políticas de almacenamiento inmutable para cumplimiento normativo, integración con Azure CDN para entrega de contenido global y control de acceso granular mediante Shared Access Signatures (SAS). Migrar datos de archivo o a gran escala de OneDrive a Azure Blob centraliza el almacenamiento donde ya vive tu infraestructura.

<img src="/support/images/en/blog/new-remote.png" alt="Creando remotos de OneDrive y Azure Blob en RcloneView" class="img-large img-center" />

## Configurando ambos remotos

Agrega un remoto de OneDrive en RcloneView seleccionando "Microsoft OneDrive" como tipo de proveedor. El flujo OAuth abre tu navegador para la autenticación con tu cuenta de Microsoft. Elige entre OneDrive Personal, OneDrive for Business o una biblioteca de documentos específica de SharePoint según dónde residan tus archivos de origen. RcloneView muestra la raíz de la unidad seleccionada una vez completada la autenticación.

Para Azure Blob, crea un nuevo remoto y selecciona "Microsoft Azure Blob Storage." Introduce el nombre de tu cuenta de almacenamiento y una clave de cuenta o una URL SAS. Si tu organización exige autenticación con Azure Active Directory, RcloneView también admite ese método. Selecciona el contenedor de destino — o anota el nombre del contenedor para la configuración del trabajo. RcloneView confirma la conexión y muestra los contenedores y blobs existentes.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configurando una transferencia de nube a nube de OneDrive a Azure Blob" class="img-large img-center" />

## Ejecutando la migración

Abre el explorador de dos paneles con OneDrive en un lado y Azure Blob en el otro. Navega hasta las carpetas de OneDrive que deseas migrar — por ejemplo, `/Documents/Projects` o toda la raíz. En el lado de Azure, navega hasta tu contenedor de destino.

Para una migración estructurada, crea un trabajo de copia en el Administrador de trabajos. Establece OneDrive como la ruta de origen y el contenedor de Azure Blob como el destino. Elige el modo "Copiar" para transferir archivos sin eliminarlos de OneDrive durante el período de transición. Activa la opción `--ignore-existing` si planeas ejecutar el trabajo varias veces, de modo que los archivos ya transferidos se omitan de forma eficiente.

La API de OneDrive impone límites de velocidad que pueden ralentizar las transferencias grandes. RcloneView gestiona la limitación y los reintentos automáticamente, y puedes configurar transferencias en paralelo (la opción `--transfers`) para optimizar el rendimiento dentro de los límites de Microsoft.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Historial de trabajos de migración mostrando transferencias de OneDrive a Azure Blob" class="img-large img-center" />

## Verificación posterior a la migración

Después de que el trabajo se complete, compara el número y el tamaño de los archivos entre OneDrive y Azure Blob usando la función de comparación de RcloneView. Abre ambos remotos uno al lado del otro y ejecuta una comparación para identificar posibles discrepancias. Azure Blob almacena hashes MD5 para los objetos subidos, por lo que la verificación de sumas de comprobación detecta cualquier corrupción ocurrida durante el tránsito.

Una vez verificado, configura tus aplicaciones para leer desde Azure Blob en lugar de OneDrive. Mantén el remoto de OneDrive conectado en RcloneView durante un período de transición, ejecutando trabajos de sincronización periódicos para capturar cualquier archivo que los usuarios sigan agregando a OneDrive antes de completar el cambio.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Programando sincronización periódica de OneDrive a Azure Blob durante la migración" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Autentica tu cuenta de OneDrive mediante Microsoft OAuth y selecciona el tipo de unidad correcto.
3. Agrega tu remoto de Azure Blob usando el nombre de tu cuenta de almacenamiento y la clave de acceso o el token SAS.
4. Crea un trabajo de copia de OneDrive a Azure Blob, activa la verificación de suma de comprobación y ejecútalo.

Una vez que todos los archivos estén confirmados en Azure Blob, redirige tus flujos de trabajo y retira el almacenamiento de OneDrive a tu propio ritmo.

---

**Guías relacionadas:**

- [Migra OneDrive a Google Drive con RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-google-drive-rcloneview)
- [Monta Azure Blob Storage como una unidad local con RcloneView](https://rcloneview.com/support/blog/mount-azure-blob-storage-local-drive-rcloneview)
- [Sincroniza Azure Blob con AWS S3 con RcloneView](https://rcloneview.com/support/blog/sync-azure-blob-to-aws-s3-rcloneview)

<CloudSupportGrid />
