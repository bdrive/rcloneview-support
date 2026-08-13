---
slug: migrate-seafile-to-onedrive-rcloneview
title: "Migrar de Seafile a OneDrive — Transferir archivos con RcloneView"
authors:
  - casey
description: "Mueva bibliotecas desde un servidor Seafile autoalojado a Microsoft OneDrive usando el explorador de doble panel y el asistente de trabajos de RcloneView, con verificación mediante simulación."
keywords:
  - migración de Seafile
  - OneDrive
  - RcloneView
  - de autoalojado a la nube
  - transferencia de nube a nube
  - Seafile a OneDrive
  - migración a Microsoft 365
  - rclone seafile onedrive
tags:
  - RcloneView
  - seafile
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar de Seafile a OneDrive — Transferir archivos con RcloneView

> Retirar un servidor Seafile autoalojado en favor de Microsoft OneDrive no tiene por qué implicar descargas y nuevas cargas manuales — RcloneView se conecta directamente a ambos y mueve las bibliotecas entre ellos en un solo trabajo.

Los equipos que superan una implementación de Seafile autoalojada a menudo se trasladan a OneDrive para integrar el almacenamiento de archivos en una suscripción existente de Microsoft 365 y delegar el mantenimiento del servidor. RcloneView trata a Seafile y OneDrive como remotos equivalentes en la misma ventana, de modo que puede explorar ambos, comparar su contenido y ejecutar una transferencia controlada en lugar de exportar primero las bibliotecas a un disco local. RcloneView monta y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux, por lo que el mismo flujo de trabajo se aplica tanto si su servidor Seafile está local como en un centro de datos privado.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar su servidor Seafile

Abra **New Remote** y seleccione **Seafile**, luego introduzca la URL de su servidor, nombre de usuario y contraseña. Si la autenticación de dos factores está habilitada, proporcione el token de un solo uso cuando se le solicite. Una vez conectado, RcloneView enumera todas las bibliotecas a las que tiene acceso — personales y compartidas — en el explorador de archivos, con el mismo árbol de carpetas y lista de archivos que usaría para cualquier otro remoto.

Las bibliotecas cifradas necesitan su contraseña de biblioteca antes de que RcloneView pueda leer el contenido. Pruebe que el acceso funcione en una pequeña biblioteca cifrada antes de programar la migración completa, ya que una contraseña faltante aparecerá como una carpeta vacía en lugar de un error evidente.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir un remoto de Seafile en RcloneView" class="img-large img-center" />

## Añadir Microsoft OneDrive

Añada un segundo remoto mediante **New Remote** > **OneDrive**. RcloneView abre una ventana del navegador para el inicio de sesión OAuth — autentíquese con su cuenta de Microsoft y apruebe los permisos solicitados. Para los inquilinos de OneDrive for Business, se aplica el mismo flujo OAuth; no se requiere un registro de aplicación independiente para el uso estándar.

Cree una carpeta de destino como `Seafile Import/` en OneDrive antes de iniciar la transferencia. Mantener el contenido migrado aislado facilita verificar los resultados y evita mezclar los archivos migrados con el contenido ya existente en la raíz de OneDrive.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Remotos de Seafile y OneDrive abiertos lado a lado en RcloneView" class="img-large img-center" />

## Ejecutar el trabajo de migración

Con ambos remotos abiertos, las bibliotecas pequeñas pueden arrastrarse directamente — arrastrar y soltar entre dos remotos distintos realiza una copia, dejando intactos los originales de Seafile. Para una migración completa del servidor, use en su lugar el **Job Wizard** de cuatro pasos: establezca la biblioteca de Seafile como origen y su carpeta de OneDrive como destino, luego configure el número de transferencias y los verificadores de igualdad en el paso 2.

Ejecute siempre una **simulación** antes de la transferencia real. Enumera todos los archivos que se copiarán sin mover ningún dato, lo cual es la forma más rápida de detectar una carpeta de origen incorrecta o una biblioteca inesperadamente grande antes de confirmar la transferencia. Una vez que la vista previa se vea correcta, inicie el trabajo y siga el progreso en la pestaña Transferring; **Job History** mantiene un registro permanente de qué se movió y cuándo.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Ejecutar un trabajo de migración de Seafile a OneDrive en RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Haga clic en **New Remote** > **Seafile** e introduzca la URL de su servidor y sus credenciales.
3. Haga clic en **New Remote** > **OneDrive** y complete la autorización OAuth.
4. Ejecute una simulación, luego ejecute el trabajo de migración y confirme los resultados en Job History.

Migrar de Seafile a OneDrive de esta manera mantiene cada transferencia auditable, para que siempre sepa exactamente qué salió del antiguo servidor y adónde llegó.

---

**Guías relacionadas:**

- [Gestionar Seafile — Sincronización y copia de seguridad en la nube con RcloneView](https://rcloneview.com/support/blog/manage-seafile-cloud-sync-backup-rcloneview)
- [Gestionar OneDrive — Sincronización y copia de seguridad en la nube con RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Migrar Seafile a Google Drive con RcloneView](https://rcloneview.com/support/blog/migrate-seafile-to-google-drive-rcloneview)

<CloudSupportGrid />
