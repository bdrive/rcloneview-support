---
slug: manage-magalu-cloud-sync-backup-rcloneview
title: "Gestionar el almacenamiento de Magalu Cloud — Sincroniza y respalda archivos con RcloneView"
authors:
  - casey
description: "Conecta el almacenamiento de objetos de Magalu Cloud a RcloneView para gestión de archivos mediante arrastrar y soltar, sincronización programada y copias de seguridad entre nubes."
keywords:
  - Magalu Cloud RcloneView
  - GUI de almacenamiento de objetos Magalu
  - gestionar almacenamiento de Magalu Cloud
  - copia de seguridad en la nube compatible con S3
  - herramienta de sincronización Magalu Cloud
  - GUI de almacenamiento de objetos Brasil
  - administrador de archivos Magalu Cloud
  - RcloneView remoto compatible con S3
  - sincronización y copia de seguridad en la nube
tags:
  - RcloneView
  - s3-compatible
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestionar el almacenamiento de Magalu Cloud — Sincroniza y respalda archivos con RcloneView

> Explora, sincroniza y respalda el almacenamiento de objetos de Magalu Cloud con un administrador de archivos completo de arrastrar y soltar, en lugar de manejar credenciales de API en una terminal.

Magalu Cloud es un servicio de almacenamiento de objetos compatible con S3, lo que significa que encaja directamente en cualquier herramienta construida alrededor del protocolo S3. RcloneView lo trata exactamente igual que Amazon S3 o Backblaze B2: introduce una Clave de acceso, una Clave secreta y un endpoint, y el bucket aparece en el explorador de archivos junto a cualquier otro remoto que gestiones. Eso lo hace práctico para equipos que ya ejecutan cargas de trabajo desde Brasil o Latinoamérica y que quieren una opción de almacenamiento de objetos sin abandonar las herramientas S3 que ya conocen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar un remoto de Magalu Cloud

Agregar Magalu Cloud sigue el mismo flujo de introducción de credenciales que RcloneView usa para cada proveedor compatible con S3: abre New Remote, elige el tipo compatible con S3 y proporciona el Access Key ID, la Secret Access Key y la URL del endpoint de Magalu Cloud para tu región. Una vez guardado, el bucket se carga en un panel de Explorer con navegación completa del árbol de carpetas, vistas previas en miniatura para imágenes y acceso mediante clic derecho para copiar, renombrar, eliminar y obtener el tamaño — sin necesidad de una pestaña separada de la consola de S3.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Magalu Cloud S3-compatible remote in RcloneView" class="img-large img-center" />

Dado que RcloneView se conecta a través del backend S3 de rclone, se aplica el comportamiento estándar del almacenamiento de objetos: las carpetas son construcciones virtuales formadas a partir de prefijos de claves, y las operaciones de archivo se corresponden con las llamadas subyacentes PUT/GET/DELETE que emite rclone. A diferencia de las herramientas de solo montaje, RcloneView también sincroniza y compara carpetas — con la licencia FREE — por lo que un bucket de Magalu no se limita a la navegación pasiva.

## Sincronizar Magalu Cloud con otro almacenamiento

La mayoría de los equipos no usan el almacenamiento de objetos de forma aislada — convive junto a unidades locales, dispositivos NAS u otros proveedores en la nube como parte de un plan de copia de seguridad o migración. El asistente de sincronización de 4 pasos te permite configurar un bucket de Magalu como origen o destino, ajustar los recuentos de transferencias simultáneas y de verificadores de igualdad para transferencias grandes y fiables, y aplicar filtros (tamaño máximo de archivo, antigüedad máxima, exclusiones de extensión) para que solo se muevan los archivos que realmente quieres.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job with a Magalu Cloud bucket as destination" class="img-large img-center" />

Ejecuta primero un Dry Run para previsualizar exactamente qué archivos se copiarán o eliminarán antes de comprometerte con una transferencia real — especialmente útil la primera vez que apuntas un trabajo de sincronización a un bucket nuevo, cuando acertar con las carpetas de origen y destino importa más.

## Programar copias de seguridad recurrentes de Magalu

Para rutinas de respaldo continuas, los usuarios con licencia PLUS pueden adjuntar una programación de estilo crontab a cualquier trabajo de sincronización, de modo que una carpeta de proyecto local u otro remoto en la nube se refleje automáticamente en Magalu Cloud con la periodicidad que mejor convenga — cada noche, cada semana o en un intervalo personalizado. Job History registra entonces la duración, la velocidad de transferencia, el número de archivos y el estado de finalización de cada ejecución, ofreciendo un registro de auditoría claro sin revisar un log de terminal.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring backup job to a Magalu Cloud bucket" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abre New Remote, selecciona el tipo de proveedor compatible con S3 e introduce tu Clave de acceso, Clave secreta y endpoint de Magalu Cloud.
3. Explora el bucket en el panel de Explorer para confirmar la conexión y la estructura de carpetas.
4. Crea un trabajo de sincronización o respaldo dirigido al remoto de Magalu, ejecuta un Dry Run y luego ejecuta la transferencia.

Una vez conectado, un bucket de Magalu Cloud se comporta como cualquier otro remoto en RcloneView — listo para el uso diario, transferencias entre nubes y protección programada.

---

**Guías relacionadas:**

- [Gestionar la copia de seguridad en la nube de IDrive e2 S3 con RcloneView](https://rcloneview.com/support/blog/manage-idrive-e2-s3-cloud-backup-rcloneview)
- [Gestionar Cloudflare R2 — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Dry Run — Previsualiza la sincronización en la nube antes de transferir con RcloneView](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
