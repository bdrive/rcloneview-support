---
slug: migrate-proton-drive-to-google-drive-rcloneview
title: "Migrar Proton Drive a Google Drive — Transfiere archivos con RcloneView"
authors:
  - tayson
description: "Mueve archivos de Proton Drive a Google Drive con RcloneView. Transfiere datos cifrados en la nube directamente entre proveedores, sin descargas manuales y conservando toda la estructura de carpetas."
keywords:
  - migrar Proton Drive a Google Drive
  - transferencia Proton Drive Google Drive
  - RcloneView migración Proton Google Drive
  - herramienta de migración de Proton Drive
  - mover archivos Proton Drive Google Drive
  - GUI de migración en la nube de Proton Drive
  - importar a Google Drive desde Proton Drive
  - migración de nube a nube
  - herramienta de transferencia de archivos de Proton Drive
  - sincronización RcloneView Proton Drive
tags:
  - RcloneView
  - proton-drive
  - google-drive
  - cloud-to-cloud
  - migration
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar Proton Drive a Google Drive — Transfiere archivos con RcloneView

> RcloneView migra el contenido de tu Proton Drive a Google Drive directamente en la nube, descifrando los archivos al vuelo y subiéndolos sin almacenar nada localmente.

El cifrado de extremo a extremo de Proton Drive lo convierte en una plataforma de almacenamiento de confianza para usuarios preocupados por la privacidad. Al pasar a un entorno de equipo basado en Google Workspace, migrar documentos, fotos y archivos de proyectos de Proton Drive a Google Drive es un requisito habitual. RcloneView gestiona esta migración de forma eficiente, conectándose a ambos proveedores y coordinando la transferencia mediante un único trabajo de sincronización.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Proton Drive y Google Drive en RcloneView

Añadir Proton Drive como remoto requiere rclone v1.69 o posterior, requisito que el rclone integrado de RcloneView cumple por defecto. Ve a la pestaña Remoto > Nuevo Remoto, selecciona Proton Drive e introduce el correo electrónico y la contraseña de tu cuenta Proton. Si tienes activada la autenticación de dos factores, también se te pedirá el código 2FA.

Para Google Drive, selecciona Google Drive y completa el flujo OAuth en el navegador. Ambos remotos aparecerán en el explorador de archivos de RcloneView una vez configurados. Abre Proton Drive y Google Drive uno junto al otro en la vista de panel dual para evaluar el alcance de la migración.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Proton Drive and Google Drive remotes in RcloneView" class="img-large img-center" />

## Configurar el trabajo de migración

Crea un trabajo de Copia o Sincronización con Proton Drive como origen y tu carpeta de Google Drive como destino. En el asistente de sincronización de RcloneView:

- **Modo:** Elige Copia para mover los archivos sin eliminarlos de Proton Drive (conservando el original como copia de seguridad durante la migración)
- **Filtrado:** Usa el filtro predefinido de Google Docs para evitar problemas de incompatibilidad de tipos de archivo
- **Suma de verificación:** Actívala para verificar la integridad de los archivos transferidos

El cifrado de Proton Drive implica que rclone descifra el contenido durante la descarga y vuelve a subir el texto plano a Google Drive. Verifica que tu carpeta de destino en Google Drive tenga cuota suficiente antes de comenzar.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring Proton Drive to Google Drive migration in RcloneView" class="img-large img-center" />

## Ejecutar una simulación (dry run) y vista previa

Usa siempre el modo de simulación antes de ejecutar una migración de gran tamaño. La simulación de RcloneView escanea el origen de Proton Drive y enumera todos los archivos que se transferirían, mostrándote el recuento de archivos, una vista previa de la estructura de carpetas y estimaciones del tamaño de la transferencia antes de confirmar. Esto ayuda a identificar carpetas que podrías querer excluir, como las versiones internas de archivos de Proton Drive o los enlaces compartidos.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the Proton Drive to Google Drive migration in RcloneView" class="img-large img-center" />

## Supervisar el progreso y validar los resultados

La pestaña Transferencia de RcloneView muestra el progreso de la migración en tiempo real. El almacenamiento cifrado de Proton Drive añade cierta sobrecarga de procesamiento en comparación con proveedores de texto plano, por lo que las transferencias pueden ser algo más lentas que las operaciones equivalentes entre dos cuentas de Google Drive. Una vez finalizado el trabajo, el Historial de Trabajos muestra el resumen completo: archivos migrados, bytes transferidos, duración y errores.

Compara el recuento de archivos y los tamaños en Google Drive con los de tu origen en Proton Drive para validar que la migración se completó correctamente.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Proton Drive to Google Drive migration progress in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade Proton Drive (correo electrónico + contraseña) y Google Drive (OAuth) como remotos.
3. Crea un trabajo de Copia desde Proton Drive hacia tu carpeta de destino en Google Drive.
4. Ejecuta una simulación para confirmar el alcance y luego realiza la migración completa.

Con RcloneView, migrar de Proton Drive a Google Drive es un proceso sencillo, con supervisión del progreso y un registro de historial de transferencias detallado.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento de Proton Drive — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [Migra Proton Drive a OneDrive con RcloneView](https://rcloneview.com/support/blog/migrate-proton-drive-to-onedrive-rcloneview)
- [Gestiona el almacenamiento de Google Drive — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
