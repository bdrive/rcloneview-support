---
slug: migrate-zoho-workdrive-to-backblaze-b2-rcloneview
title: "Migrar de Zoho WorkDrive a Backblaze B2 — Transferir archivos con RcloneView"
authors:
  - steve
description: "Mueva archivos de Zoho WorkDrive a Backblaze B2 directamente con RcloneView, usando transferencia de nube a nube, vista previa de Dry Run y programación de trabajos."
keywords:
  - migrar Zoho WorkDrive a Backblaze B2
  - copia de seguridad de Zoho WorkDrive
  - migración a Backblaze B2
  - transferencia de nube a nube
  - guía de migración de RcloneView
  - Zoho WorkDrive a B2
  - herramienta de migración de almacenamiento en la nube
  - rclone Zoho WorkDrive
  - transferencia de archivos entre nubes
  - archivo en la nube económico
tags:
  - RcloneView
  - zoho
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar de Zoho WorkDrive a Backblaze B2 — Transferir archivos con RcloneView

> Mueva archivos de Zoho WorkDrive directamente a Backblaze B2 sin pasar primero por un disco local.

Los equipos que usan Zoho WorkDrive para la colaboración diaria a menudo necesitan un nivel de almacenamiento más económico y de largo plazo para proyectos terminados y carpetas de clientes antiguos; Backblaze B2 es una opción habitual para esa capa de archivo. RcloneView conecta ambos remotos en una sola ventana y copia archivos de nube a nube, de modo que una unidad compartida llena de documentos y contenido multimedia no tiene que descargarse y volver a subirse a través del almacenamiento local de un portátil. RcloneView monta y sincroniza más de 90 proveedores desde una sola ventana en Windows, macOS y Linux, por lo que explorar Zoho WorkDrive y archivar en Backblaze B2 nunca requiere cambiar de aplicación.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Zoho WorkDrive y Backblaze B2

Añada Zoho WorkDrive como remoto mediante New Remote y seleccione la configuración basada en OAuth; como Zoho WorkDrive requiere seleccionar una región durante la configuración, elija el centro de datos que corresponda a su cuenta antes de finalizar la configuración. Backblaze B2 utiliza en cambio la introducción de credenciales: escriba el Application Key ID y la Application Key desde la página de gestión de claves de B2, y RcloneView valida la conexión antes de guardarla. Ambos remotos aparecen entonces como pestañas en los paneles del Explorer, listos para explorarse uno junto al otro.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir Zoho WorkDrive y Backblaze B2 como remotos en RcloneView" class="img-large img-center" />

Una vez conectados, abra el Remote Manager para confirmar ambas entradas y ajustar configuraciones como el alcance de carpetas antes de la primera transferencia.

## Ejecutar la transferencia de nube a nube

Abra una vista de dos paneles con Zoho WorkDrive en un lado y su bucket de Backblaze B2 en el otro, y luego arrastre las carpetas que desea migrar — arrastrar entre dos remotos diferentes siempre realiza una copia, dejando los originales de Zoho WorkDrive intactos hasta que esté listo para limpiarlos. Para migraciones más grandes, cree en su lugar un trabajo de Sync: elija Zoho WorkDrive como origen y el bucket de B2 como destino, configure el número de transferencias de archivos simultáneas en Advanced Settings, y ejecute primero un Dry Run para ver exactamente qué archivos se moverán antes de que ocurra ninguna transferencia real.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Trabajo de transferencia de nube a nube de Zoho WorkDrive a Backblaze B2" class="img-large img-center" />

## Verificar y programar la migración

Active la comparación por checksum en Advanced Settings del trabajo de sincronización para que RcloneView confirme que los archivos coinciden por hash y tamaño, no solo por tamaño de archivo, y configure el número de reintentos para el caso de que un lote grande encuentre un error de red transitorio. Cuando el trabajo termine, revise Job History para ver el total de archivos transferidos, el tiempo empleado y cualquier elemento con errores antes de archivar la carpeta de origen.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History mostrando una transferencia completada de Zoho WorkDrive a Backblaze B2" class="img-large img-center" />

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añada su remoto de Zoho WorkDrive, seleccionando la región correcta.
3. Añada su remoto de Backblaze B2 usando su Application Key ID y Key.
4. Ejecute un Dry Run, luego ejecute el trabajo de sincronización o copia y confirme los resultados en Job History.

Una migración limpia de nube a nube mantiene ligero su espacio de trabajo de Zoho WorkDrive, a la vez que ofrece a los archivos terminados un hogar duradero y de menor costo.

---

**Guías relacionadas:**

- [Gestionar Zoho WorkDrive — Sincronizar y respaldar archivos con RcloneView](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [Gestionar Backblaze B2 — Sincronizar y respaldar archivos con RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Sincronizar Zoho WorkDrive con OneDrive — Copia de seguridad en la nube con RcloneView](https://rcloneview.com/support/blog/sync-zoho-workdrive-to-onedrive-rcloneview)

<CloudSupportGrid />
