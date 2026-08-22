---
slug: migrate-opendrive-to-onedrive-rcloneview
title: "Migrar de OpenDrive a OneDrive — Transferir archivos con RcloneView"
authors:
  - alex
description: "Mueve archivos de OpenDrive a Microsoft OneDrive con la transferencia de nube a nube de RcloneView, la vista previa de Dry Run y el seguimiento del historial de trabajos."
keywords:
  - migrar opendrive a onedrive
  - transferencia opendrive onedrive
  - migración rcloneview opendrive
  - sincronización opendrive onedrive
  - migración de nube a nube
  - alternativa a opendrive
  - herramienta de migración a onedrive
  - transferir archivos de opendrive
  - transferencia de archivos multi-nube
  - gui de migración de almacenamiento en la nube
tags:
  - RcloneView
  - opendrive
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar de OpenDrive a OneDrive — Transferir archivos con RcloneView

> Mueve los archivos de una cuenta de OpenDrive directamente a Microsoft OneDrive con RcloneView, sin pasar por un paso local de descarga y posterior subida.

Consolidar el almacenamiento en menos proveedores es un motivo habitual para dejar OpenDrive, especialmente en equipos ya estandarizados en Microsoft 365 para la colaboración. RcloneView se conecta a ambos servicios en la misma ventana y transfiere los datos directamente entre ellos, de modo que la migración no depende de llenar el espacio de disco local con una copia temporal de todo.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar ambos remotos

Añade OpenDrive como remoto a través del asistente New Remote, introduciendo los datos de la cuenta que solicita, y luego añade OneDrive como segundo remoto usando su inicio de sesión OAuth basado en el navegador. Ambos remotos aparecen como pestañas separadas en el panel Explorer, y RcloneView monta Y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux, por lo que no hace falta una herramienta aparte una vez conectadas ambas cuentas.

Con ambos remotos visibles uno junto al otro, arrastrar y soltar entre ellos activa una copia directa — arrastrar entre remotos distintos siempre copia en lugar de mover, así que los archivos originales de OpenDrive permanecen intactos hasta que verifiques la transferencia.

<img src="/support/images/en/blog/new-remote.png" alt="Adding OpenDrive and OneDrive remotes in RcloneView" class="img-large img-center" />

## Ejecutar la migración como un trabajo de Sync

Para una migración completa de la cuenta, en lugar de una copia puntual de una carpeta, el asistente de Sync de 4 pasos es la vía más fiable. Selecciona el remoto y la carpeta de OpenDrive como origen, OneDrive como destino, y elige sincronización unidireccional para que el destino se construya igual que el origen sin ningún riesgo de que los cambios fluyan de vuelta. Los ajustes avanzados permiten ajustar el número de transferencias de archivos simultáneas y activar la comparación por checksum, que confirma que cada archivo coincide por hash y tamaño en lugar de fiarse solo del tamaño — algo que vale la pena activar en una migración donde la integridad de los datos importa más que la velocidad bruta.

Antes de confirmar la ejecución completa, Dry Run muestra una vista previa exacta de los archivos que se copiarán, para que puedas detectar algo inesperado — como una carpeta compartida obsoleta — antes de que llegue a OneDrive.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating files from OpenDrive to OneDrive with RcloneView Sync" class="img-large img-center" />

## Verificar que la transferencia se completó correctamente

Una vez finalizada la sincronización, la función Compare coteja el origen de OpenDrive con el destino de OneDrive lado a lado, señalando los archivos que solo existen a la izquierda, los que solo existen a la derecha y cualquiera con un tamaño diferente. Esto detecta transferencias parciales o archivos omitidos antes de que consideres seguro cerrar la cuenta de OpenDrive, y cualquier diferencia que aparezca se puede copiar directamente desde la vista de comparación.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing OpenDrive and OneDrive after migration in RcloneView" class="img-large img-center" />

## Seguir la migración en Job History

Cada ejecución del trabajo de migración — ya sea una repetición manual para recoger archivos rezagados o un reintento tras un fallo de red — queda registrada en Job History con hora de inicio, duración, estado, tamaño total y número de archivos. Ese registro es útil para confirmar exactamente qué se movió y cuándo, algo importante si más adelante necesitas dar cuenta de la migración.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade tanto OpenDrive como OneDrive como remotos.
3. Configura un trabajo de Sync unidireccional de OpenDrive a OneDrive, ejecuta primero un Dry Run y luego lleva a cabo la transferencia.
4. Usa Compare para verificar que todos los archivos llegaron antes de retirar la cuenta de OpenDrive.

Una migración directa de nube a nube mantiene el proceso rápido y evita la escasez de almacenamiento local que conlleva descargarlo todo primero.

---

**Guías relacionadas:**

- [Gestionar el almacenamiento de OneDrive — Sincronizar y hacer copias de seguridad con RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Sincronizar OpenDrive con Google Drive — Copia de seguridad en la nube con RcloneView](https://rcloneview.com/support/blog/sync-opendrive-to-google-drive-rcloneview)
- [Hacer copia de seguridad de OpenDrive en AWS S3 — Almacenamiento externo con RcloneView](https://rcloneview.com/support/blog/backup-opendrive-aws-s3-external-storage-rcloneview)

<CloudSupportGrid />
