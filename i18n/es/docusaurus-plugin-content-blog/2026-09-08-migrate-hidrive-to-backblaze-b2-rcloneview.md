---
slug: migrate-hidrive-to-backblaze-b2-rcloneview
title: "Migrar de HiDrive a Backblaze B2 — Transferir archivos con RcloneView"
authors:
  - steve
description: "Mueva archivos de HiDrive a Backblaze B2 con RcloneView mediante sincronización verificada por checksum, vistas previas de ejecución en seco y seguimiento del historial de trabajos."
keywords:
  - migrar HiDrive a Backblaze B2
  - transferencia HiDrive Backblaze B2
  - migración de nube HiDrive
  - herramienta de copia de seguridad Backblaze B2
  - RcloneView HiDrive
  - transferencia de nube a nube
  - migración verificada por checksum
  - de HiDrive a almacenamiento de objetos
  - de nube europea a Backblaze B2
tags:
  - RcloneView
  - hidrive
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar de HiDrive a Backblaze B2 — Transferir archivos con RcloneView

> Traslade una cuenta de HiDrive en crecimiento al almacenamiento de objetos de Backblaze B2 con transferencias verificadas por checksum y una ejecución en seco previa.

HiDrive funciona bien para el acceso diario a archivos, pero los equipos que necesitan una retención a largo plazo más económica o una copia de almacenamiento de objetos externa suelen recurrir a Backblaze B2 cuando el conjunto de datos supera lo previsto para un plan de nube personal o empresarial. RcloneView conecta ambos servicios desde la misma ventana — HiDrive mediante OAuth y Backblaze B2 con una Application Key — de modo que la migración se ejecuta como un único trabajo configurado en lugar de descargar todo localmente primero. RcloneView monta Y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar HiDrive y Backblaze B2

HiDrive se agrega mediante el inicio de sesión OAuth basado en navegador de RcloneView — no se requiere ingresar una clave API por separado. Backblaze B2 necesita un Application Key ID y una Application Key, generados desde la consola de la cuenta de Backblaze, introducidos directamente en el formulario de configuración del remoto. Una vez que ambos remotos aparecen en el Remote Manager, se muestran como pestañas separadas en el Explorer, de modo que puede examinar la fuente de HiDrive y el destino de B2 uno al lado del otro antes de iniciar una transferencia.

<img src="/support/images/en/blog/new-remote.png" alt="Adding HiDrive and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## Configurar el trabajo de migración

Use el botón Sync de la pestaña Home para abrir el asistente de 4 pasos. En el Paso 1, seleccione la carpeta de origen de HiDrive y el bucket de Backblaze B2 como destino, y elija sincronización unidireccional para que la migración solo escriba en B2 sin afectar a HiDrive. El Paso 2 permite habilitar la comparación por checksum para que los archivos se cotejen por hash y tamaño en lugar de solo por la fecha de modificación, algo importante al moverse entre dos backends de almacenamiento muy distintos. El Paso 3 admite filtrar por tipo de archivo, tamaño máximo o antigüedad si primero solo desea migrar un subconjunto.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a HiDrive to Backblaze B2 sync job in RcloneView" class="img-large img-center" />

Ejecute una Dry Run antes de la transferencia real — enumera exactamente lo que se copiará sin mover ni un solo byte, la forma más segura de detectar una ruta de carpeta mal configurada antes de que se convierta en una gran transferencia no deseada.

## Verificar la migración

Una vez completada la sincronización, abra Folder Compare entre el origen de HiDrive y el destino de B2 para confirmar que el número de archivos y los tamaños coinciden en ambos lados. Job History registra el tamaño total transferido, la velocidad de transferencia y el número de archivos de cada ejecución, para que tenga un registro con el que comparar si algo no cuadra.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing HiDrive and Backblaze B2 folders after migration in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Conecte su cuenta de HiDrive mediante OAuth y agregue Backblaze B2 con su Application Key ID y Key.
3. Configure un trabajo de sincronización unidireccional con la comparación por checksum habilitada y ejecute primero una Dry Run.
4. Confirme el resultado con Folder Compare y Job History antes de retirar la copia de HiDrive.

Pasar a Backblaze B2 no significa renunciar a la estructura de carpetas y la organización de archivos ya creada en HiDrive — RcloneView la mantiene intacta durante toda la transferencia.

---

**Guías relacionadas:**

- [Gestionar el almacenamiento de HiDrive — Sincronizar y respaldar archivos con RcloneView](https://rcloneview.com/support/blog/manage-hidrive-cloud-sync-backup-rcloneview)
- [Gestionar el almacenamiento de Backblaze B2 — Sincronizar y respaldar archivos con RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Solucionar errores de sincronización de HiDrive — Copia de seguridad en la nube confiable con RcloneView](https://rcloneview.com/support/blog/fix-hidrive-sync-errors-rcloneview)

<CloudSupportGrid />
