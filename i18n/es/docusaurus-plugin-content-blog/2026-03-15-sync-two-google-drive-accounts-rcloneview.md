---
slug: sync-two-google-drive-accounts-rcloneview
title: "Cómo sincronizar dos cuentas de Google Drive — Sincronización de Drive personal y de trabajo con RcloneView"
authors:
  - tayson
description: "Muchas personas tienen varias cuentas de Google Drive — personal, de trabajo, escolar. Aprende a sincronizar archivos entre ellas sin descargar nada localmente usando RcloneView."
keywords:
  - sync two google drive accounts
  - google drive to google drive
  - transfer between google drives
  - multiple google drive sync
  - google drive personal to work
  - sync google accounts
  - google drive account transfer
  - google drive cross account
  - two google drive sync tool
  - google drive migration between accounts
tags:
  - RcloneView
  - google-drive
  - sync
  - cloud-storage
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cómo sincronizar dos cuentas de Google Drive — Sincronización de Drive personal y de trabajo con RcloneView

> Tu Google Drive personal tiene fotos familiares. Tu Drive de trabajo tiene archivos de proyectos. Tu Drive universitario está a punto de expirar. Google no te permite sincronizar entre cuentas de forma nativa — pero RcloneView sí.

Casi todo el mundo termina con varias cuentas de Google Drive. Una cuenta personal de Gmail, una cuenta de Workspace del trabajo, tal vez una cuenta escolar que está a punto de expirar. Google facilita usar cada cuenta de forma individual, pero no ofrece ninguna manera de sincronizar o transferir archivos entre ellas. Terminas descargando de una cuenta y subiendo a otra — manual, lento, y consume tu almacenamiento local. RcloneView conecta varias cuentas de Google Drive simultáneamente y transfiere directamente entre ellas.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Añadir varias cuentas de Google Drive

<img src="/support/images/en/blog/new-remote.png" alt="Add multiple Google Drive accounts" class="img-large img-center" />

Añade cada cuenta de Google Drive como un remoto independiente en RcloneView. Nómbralos con claridad — "GDrive-Personal", "GDrive-Trabajo", "GDrive-Escuela" — para poder diferenciarlos fácilmente.

## Transferir entre cuentas

Abre una cuenta en el panel izquierdo y otra en el derecho. Arrastra archivos y carpetas entre ellas:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfer between Google Drive accounts" class="img-large img-center" />

Los archivos se transfieren directamente a través de los servidores de Google — nada se descarga a tu computadora, y la transferencia es rápida.

## Casos de uso comunes

### Guardar archivos de una cuenta escolar a punto de expirar

Las cuentas de Google Workspace universitarias suelen eliminarse después de la graduación. Transfiere todo a tu Drive personal antes de perder el acceso.

### Separar archivos personales y de trabajo

¿Guardaste accidentalmente archivos personales en tu Drive de trabajo? Muévelos a tu cuenta personal sin involucrar a IT.

### Consolidar cuentas antiguas

Fusiona archivos de una cuenta antigua de Gmail con tu cuenta actual. RcloneView lo convierte en una simple operación de arrastrar y soltar.

### Reflejar carpetas importantes

Mantén una carpeta específica sincronizada entre ambas cuentas. Crea un trabajo de sincronización que se ejecute automáticamente:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Sync job between accounts" class="img-large img-center" />

## Programar sincronización continua

Para las carpetas que quieras mantener sincronizadas de forma continua entre cuentas, programa una sincronización automática:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule cross-account sync" class="img-large img-center" />

## Verificar las transferencias

Usa la Comparación de carpetas para confirmar que los archivos se transfirieron correctamente entre cuentas:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify cross-account transfer" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Añade ambas cuentas de Google Drive** como remotos independientes.
3. **Abre ambas cuentas** en el explorador de dos paneles.
4. **Transfiere directamente** — no se necesita descarga local.

Tus cuentas de Google, finalmente conectadas.

---

**Guías relacionadas:**

- [Migrar de Google Drive a OneDrive](https://rcloneview.com/support/blog/migrate-google-drive-to-onedrive-rcloneview)
- [Sincronizar Google Drive con Dropbox](https://rcloneview.com/support/blog/sync-google-drive-to-dropbox-rcloneview)
- [Subir archivos grandes a Google Drive](https://rcloneview.com/support/blog/upload-large-files-google-drive-sync-rcloneview)

<CloudSupportGrid />
