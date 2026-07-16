---
slug: migrate-koofr-to-google-drive-rcloneview
title: "Migrar de Koofr a Google Drive — Transfiere archivos con RcloneView"
authors:
  - tayson
description: "Mueve tus archivos de Koofr a Google Drive con RcloneView. Transfiere datos en la nube directamente entre proveedores, conservando la estructura de carpetas sin descargas locales."
keywords:
  - migrar Koofr a Google Drive
  - transferencia de Koofr a Google Drive
  - migración RcloneView Koofr Google Drive
  - herramienta de migración entre nubes
  - GUI de migración de Koofr
  - mover archivos de Koofr a Google Drive
  - migración de nube de Koofr
  - importar a Google Drive desde Koofr
  - migración en la nube con RcloneView
  - herramienta de transferencia de archivos de Koofr
tags:
  - koofr
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar de Koofr a Google Drive — Transfiere archivos con RcloneView

> RcloneView mueve tus archivos de Koofr directamente a Google Drive, conservando la estructura de carpetas, verificando la integridad y sin necesitar almacenamiento local intermedio.

El almacenamiento europeo de Koofr, centrado en la privacidad, es popular entre usuarios que priorizan el cumplimiento del RGPD y la residencia de datos. Cuando los equipos migran a Google Workspace y necesitan su contenido de Koofr en Google Drive, RcloneView gestiona la migración de forma limpia: conectándose a ambos proveedores simultáneamente y transfiriendo datos en una ruta directa de nube a nube.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta Koofr y Google Drive en RcloneView

Agrega ambos proveedores como remotos antes de iniciar la migración. Para Koofr, ve a la pestaña Remoto > Nuevo remoto, selecciona Koofr y completa la conexión con tus credenciales de Koofr. Para Google Drive, selecciona Google Drive y completa la autenticación OAuth en el navegador — el flujo OAuth de Google Drive está totalmente automatizado y no requiere claves de API.

Una vez configurados ambos remotos, el explorador de doble panel te permite ver Koofr en un lado y Google Drive en el otro. Esta comparación visual te ayuda a planificar la migración: confirmar las estructuras de carpetas, identificar directorios anidados y decidir si migrar toda la raíz de Koofr o carpetas específicas.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Koofr and Google Drive remotes in RcloneView" class="img-large img-center" />

## Configura el trabajo de sincronización para la migración

Crea un trabajo de sincronización con nombre en RcloneView para una migración controlada y repetible:

1. **Origen:** Selecciona tu remoto de Koofr (raíz o carpeta específica)
2. **Destino:** Selecciona tu remoto de Google Drive y la carpeta de destino
3. **Nombre del trabajo:** Usa algo descriptivo como `koofr-to-gdrive-migration`
4. **Modo:** Elige Copiar para mover archivos sin eliminarlos de Koofr

Para equipos que migran directorios compartidos grandes, el filtro **Profundidad máxima de carpetas** puede ayudarte a migrar carpetas de nivel superior de forma independiente, validando cada nivel antes de continuar.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring cloud-to-cloud transfer from Koofr to Google Drive in RcloneView" class="img-large img-center" />

## Previsualiza con una simulación antes de transferir

Usa el modo de simulación (dry run) de RcloneView para previsualizar el alcance de la migración sin mover ningún archivo. El resultado de la simulación enumera cada archivo que se copiaría, organizado por carpeta, dándote una imagen precisa de lo que hará el trabajo. Esto es especialmente útil al migrar estructuras de carpetas anidadas de Koofr donde quieres verificar el diseño del destino antes de confirmar.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the Koofr to Google Drive migration in RcloneView" class="img-large img-center" />

## Supervisa el progreso de la transferencia y revisa el historial

La pestaña Transferencia de RcloneView muestra el progreso en vivo de la migración de Koofr a Google Drive: archivos que se están transfiriendo, velocidad actual y bytes totales movidos. Al finalizar, el Historial de trabajos registra el resumen completo: tamaño total de la transferencia, duración, cantidad de archivos y cualquier error encontrado. Si los límites de velocidad de la API de Google Drive ralentizaron la transferencia, el registro de historial captura esos eventos de reintento.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Koofr to Google Drive migration in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agrega Koofr y Google Drive como remotos en la pestaña Remoto > Nuevo remoto.
3. Crea un trabajo de Copia o Sincronización de Koofr a tu destino de Google Drive.
4. Ejecuta una simulación para previsualizar y luego ejecuta la migración.

Pasar de Koofr a Google Drive es una operación directa de nube a nube en RcloneView: no requiere espacio en disco local y ofrece total transparencia sobre cada archivo transferido.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento de Koofr — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Gestiona el almacenamiento de Google Drive — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Koofr vs Jottacloud — Comparación de almacenamiento en la nube europeo con RcloneView](https://rcloneview.com/support/blog/koofr-vs-jottacloud-european-cloud-storage-rcloneview)

<CloudSupportGrid />
