---
slug: migrate-ibm-cos-to-scaleway-rcloneview
title: "Migrar IBM Cloud Object Storage a Scaleway — Transferir archivos con RcloneView"
authors:
  - kai
description: "Mueve buckets de IBM Cloud Object Storage a Scaleway Object Storage con RcloneView, verificados por checksum y previsualizados con dry run."
keywords:
  - migrar IBM COS a Scaleway
  - migración de IBM Cloud Object Storage
  - Scaleway Object Storage
  - transferencia de almacenamiento compatible con S3
  - RcloneView
  - migración de almacenamiento de objetos
  - transferencia de nube a nube
  - sincronización verificada por checksum
  - herramienta de migración de buckets
  - almacenamiento de objetos multi-nube
tags:
  - RcloneView
  - object-storage
  - s3-compatible
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar IBM Cloud Object Storage a Scaleway — Transferir archivos con RcloneView

> Mueve buckets directamente entre dos proveedores de almacenamiento de objetos compatibles con S3, con vistas previas de dry-run y verificación por checksum en el camino.

Los equipos cambian de proveedor de almacenamiento de objetos por requisitos de residencia de datos, latencia regional, o simplemente para consolidar infraestructura, pero volver a subir manualmente terabytes de contenido de buckets entre dos endpoints compatibles con S3 es lento y propenso a errores. RcloneView se conecta tanto a IBM Cloud Object Storage como a Scaleway Object Storage como remotos estándar compatibles con S3, y luego transfiere datos de bucket a bucket sin enrutar los archivos primero a través de un disco local. Puedes conectar S3, Azure File Storage o Backblaze B2 con lectura/escritura completa ya en la licencia FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar ambos endpoints de almacenamiento de objetos

Tanto IBM COS como Scaleway se añaden como remotos compatibles con S3 en RcloneView, cada uno requiere una Access Key, una Secret Key y la URL de endpoint específica del proveedor en lugar de un inicio de sesión OAuth. Añade primero IBM Cloud Object Storage usando la clave de API y el endpoint de tu instancia de IBM Cloud, y luego repite el proceso para tus credenciales de Scaleway Object Storage.

<img src="/support/images/en/blog/new-remote.png" alt="Añadiendo remotos de IBM Cloud Object Storage y Scaleway en RcloneView" class="img-large img-center" />

Con ambos remotos configurados, aparecen como pestañas separadas en los paneles del explorador, para que puedas revisar el contenido de los buckets en ambos lados antes de decidir qué es lo que realmente necesita moverse.

## Previsualizar y ejecutar la migración

Un trabajo de sincronización o copia configurado con IBM COS como origen y Scaleway como destino se encarga de la transferencia masiva. Antes de comprometerte con una ejecución completa, usa Dry Run para ver exactamente qué objetos se copiarán — esto detecta problemas de nomenclatura o de rutas desde el principio, algo especialmente útil cuando las estructuras de los buckets no coinciden exactamente entre los dos proveedores.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfiriendo objetos directamente de IBM Cloud Object Storage a Scaleway" class="img-large img-center" />

Habilitar la comparación por checksum en la configuración avanzada del trabajo verifica los archivos por hash y tamaño en lugar de solo por fecha de modificación, lo cual importa al mover datos entre dos backends de almacenamiento diferentes que pueden manejar las marcas de tiempo de forma distinta. La configuración de filtros también te permite excluir tipos de archivo específicos u objetos que excedan cierto tamaño si solo necesitas mover parte de un bucket.

## Monitorear y programar la transferencia

Las migraciones grandes de almacenamiento de objetos rara vez terminan en una sola sesión. La pestaña Transferring muestra el progreso en vivo, la velocidad y el número de archivos del trabajo en ejecución, y Job History mantiene un registro de cada ejecución completada o cancelada — incluyendo estado, duración y tamaño total transferido — para que puedas confirmar que la migración finalizó correctamente o retomar donde quedó un trabajo cancelado.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Revisando el historial de trabajos tras migrar buckets de IBM COS a Scaleway" class="img-large img-center" />

Ajustar el número de transferencias de archivos y de transferencias multi-hilo en la configuración avanzada de un trabajo puede ayudar a mover grandes cantidades de objetos de forma más eficiente, y la configuración de reintento en caso de fallo reduce la probabilidad de que una conexión inestable arruine una transferencia de varias horas.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade tus credenciales de IBM Cloud Object Storage como un nuevo remoto compatible con S3.
3. Añade tus credenciales de Scaleway Object Storage como un segundo remoto compatible con S3.
4. Ejecuta un dry run y luego ejecuta un trabajo de sincronización verificado por checksum entre ambos.

Una vez que ambos endpoints están uno junto al otro en el mismo explorador, mover buckets entre proveedores de almacenamiento de objetos se convierte en un trabajo monitoreado en lugar de un juego de adivinanzas manual.

---

**Guías relacionadas:**

- [Gestionar IBM Cloud Object Storage — Sincronizar y respaldar archivos con RcloneView](https://rcloneview.com/support/blog/manage-ibm-cos-cloud-sync-backup-rcloneview)
- [Gestionar Scaleway Object Storage — Sincronización y copia de seguridad en la nube con RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Wasabi vs Backblaze B2 vs IDrive e2: Almacenamiento compatible con S3 asequible comparado](https://rcloneview.com/support/blog/wasabi-vs-backblaze-b2-vs-idrive-e2-comparison-rcloneview)

<CloudSupportGrid />
