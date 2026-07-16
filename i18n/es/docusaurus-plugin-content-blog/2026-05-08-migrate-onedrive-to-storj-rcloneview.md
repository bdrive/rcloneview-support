---
slug: migrate-onedrive-to-storj-rcloneview
title: "Migra OneDrive a Storj — Transfiere archivos con RcloneView"
authors:
  - steve
description: "Guía paso a paso para migrar archivos de Microsoft OneDrive a Storj, almacenamiento en la nube descentralizado, usando RcloneView — con verificación de checksum y sin necesidad de conocimientos de CLI."
keywords:
  - OneDrive to Storj migration RcloneView
  - migrate OneDrive Storj cloud
  - OneDrive Storj file transfer
  - switch OneDrive to Storj
  - decentralized cloud migration
  - Storj backup OneDrive
  - OneDrive Storj sync
  - rclone OneDrive Storj GUI
tags:
  - onedrive
  - storj
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migra OneDrive a Storj — Transfiere archivos con RcloneView

> Traslada tus archivos de OneDrive al almacenamiento de objetos descentralizado y cifrado de extremo a extremo de Storj — completo, verificado y guiado por GUI con RcloneView.

Storj ofrece una alternativa interesante para los equipos que buscan reducir la dependencia de proveedores de nube centralizados. Su arquitectura descentralizada cifra y fragmenta los archivos en una red global de nodos independientes, ofreciendo sólidas garantías de privacidad sin un único punto de fallo. Para las organizaciones que actualmente usan OneDrive y consideran una alternativa centrada en la privacidad, RcloneView simplifica la migración — conectando con ambos proveedores y transmitiendo los datos directamente entre ellos.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar OneDrive y Storj a RcloneView

Agrega Microsoft OneDrive como remoto mediante **pestaña Remote → New Remote** y completa la autenticación OAuth con tu cuenta de Microsoft. Para Storj, tienes dos opciones: usar el tipo de proveedor nativo de Storj (introduciendo tu Access Grant desde la consola de Storj) o usar acceso compatible con S3 (Access Key + Secret Key + endpoint S3 de Storj `https://gateway.storjshare.io`). El enfoque compatible con S3 suele ofrecer mejor rendimiento para transferencias masivas grandes.

Con ambos remotos configurados, abre OneDrive en el panel izquierdo y tu bucket de Storj en el panel derecho. Verifica que puedes explorar archivos en ambos lados antes de iniciar la migración.

<img src="/support/images/en/blog/new-remote.png" alt="Setting up OneDrive and Storj as remotes in RcloneView" class="img-large img-center" />

## Ejecutar la migración

Abre el asistente de trabajos mediante **pestaña Home → Sync**. Establece tu carpeta de origen de OneDrive y el bucket de destino de Storj. En el paso Advanced Settings, activa la verificación de **Checksum** para confirmar la integridad de cada archivo después de la transferencia. La arquitectura distribuida de Storj implica que cada archivo se divide en fragmentos y se reensambla al descargarse — los checksums confirman que este proceso produce datos idénticos en ambos extremos.

Comienza con un **Dry Run** para previsualizar qué archivos se migrarán y detectar posibles problemas de rutas o conflictos de nombres. OneDrive permite algunos caracteres especiales en los nombres de archivo que la interfaz compatible con S3 de Storj puede manejar de forma diferente — la salida del dry run señalará cualquier problema de codificación.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OneDrive to Storj migration in progress in RcloneView" class="img-large img-center" />

## Supervisar y verificar la transferencia

La pestaña **Transferring** muestra el progreso de la transferencia en tiempo real, incluyendo la velocidad de transferencia, el número de archivos y los bytes movidos. Para migraciones grandes, usa entre 8 y 16 transferencias de archivos concurrentes si tu conexión a internet lo permite.

Una vez completada la migración, ejecuta una **Folder Compare** entre el origen de OneDrive y el destino de Storj para confirmar que todos los archivos llegaron correctamente. Revisa el **Job History** para ver el resumen final de la transferencia y su estado.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Live transfer monitoring of OneDrive to Storj transfer" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agrega OneDrive (OAuth) y Storj (compatible con S3 o nativo) como remotos.
3. Crea un trabajo de sincronización con el checksum activado y ejecuta primero un dry run.
4. Supervisa el progreso en la pestaña Transferring y verifica con Folder Compare.

Migrar de OneDrive a Storj con RcloneView es un proceso limpio y auditable que respeta la integridad de tus datos en cada etapa.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento en la nube de Storj con RcloneView](https://rcloneview.com/support/blog/manage-storj-cloud-sync-backup-rcloneview)
- [Gestiona el almacenamiento en la nube de OneDrive con RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Migra Dropbox a Storj con RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-storj-rcloneview)

<CloudSupportGrid />
