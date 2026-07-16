---
slug: manage-linkbox-cloud-sync-backup-rcloneview
title: "Gestiona el almacenamiento de Linkbox — Sincroniza y haz copias de seguridad de archivos con RcloneView"
authors:
  - kai
description: "Conecta el almacenamiento en la nube de Linkbox a RcloneView para la gestión de archivos mediante arrastrar y soltar, copias de seguridad programadas y sincronización entre proveedores desde una sola aplicación de escritorio."
keywords:
  - Linkbox
  - almacenamiento en la nube de Linkbox
  - gestionar archivos de Linkbox
  - copia de seguridad de Linkbox
  - sincronización de Linkbox
  - RcloneView Linkbox
  - gestor de archivos en la nube
  - alternativa de cliente Linkbox
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - file-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona el almacenamiento de Linkbox — Sincroniza y haz copias de seguridad de archivos con RcloneView

> Integra Linkbox en tu flujo de trabajo diario de archivos con un explorador de escritorio completo, copias de seguridad programadas y transferencias con un clic a cualquier otra nube.

Linkbox es una opción conveniente para almacenar y compartir archivos en línea, pero su interfaz web no está diseñada para la gestión masiva de archivos, la comparación de carpetas ni las tareas de copia de seguridad recurrentes. RcloneView añade una capa de escritorio nativa sobre Linkbox, proporcionándote un explorador de archivos adecuado, cargas mediante arrastrar y soltar, y sincronización automatizada, de modo que Linkbox deja de ser un silo de almacenamiento aislado y pasa a formar parte de un flujo de trabajo multinube real.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Añadir Linkbox como remoto

Abre la pestaña Remote y haz clic en New Remote para iniciar el asistente de configuración. RcloneView te guía a través de la selección de Linkbox en la lista de proveedores y la introducción de los datos de conexión necesarios, y luego prueba la conexión antes de guardarla. Una vez añadido, Linkbox aparece como una pestaña en tu panel Explorer al igual que cualquier otro remoto configurado, para que puedas explorar carpetas, previsualizar archivos y comprobar tamaños sin tocar una pestaña del navegador.

Dado que RcloneView monta Y sincroniza más de 90 proveedores desde una sola ventana en Windows, macOS y Linux, Linkbox se sitúa junto a tu Google Drive, tus buckets de S3 o tus recursos compartidos NAS en la misma vista de explorador, sin necesidad de una aplicación distinta para cada servicio.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Linkbox remote in RcloneView remote setup wizard" class="img-large img-center" />

Una vez conectado, usa el Remote Manager para revisar o editar la configuración de Linkbox en cualquier momento, y alterna entre varios paneles si estás comparando el contenido de Linkbox con otro remoto lado a lado.

## Hacer copias de seguridad del contenido de Linkbox automáticamente

Volver a subir manualmente los archivos a Linkbox después de cada cambio es algo que se olvida con facilidad. El Job Manager de RcloneView te permite definir una tarea de Sync, Copy o Download que extrae los archivos nuevos y modificados de Linkbox hacia una unidad local, un SSD externo u otro proveedor en la nube de forma recurrente. El asistente de tareas de 4 pasos cubre la selección de origen/destino, la concurrencia de transferencia y el filtrado, para que puedas, por ejemplo, excluir archivos temporales o limitar la antigüedad máxima de los archivos antes de que se ejecute una copia de seguridad.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a backup job from Linkbox to another cloud destination in RcloneView" class="img-large img-center" />

Ejecuta primero un Dry Run para previsualizar exactamente qué archivos se copiarían o eliminarían antes de confirmar una transferencia real; resulta útil la primera vez que apuntas una tarea a una carpeta de Linkbox cuyo contenido no has auditado por completo.

## Programar y supervisar tareas de Linkbox

Para los usuarios con licencia PLUS, el paso de programación del Job Manager admite una temporización de estilo crontab, de modo que una copia de seguridad de Linkbox puede ejecutarse cada noche, cada semana o con la frecuencia que se ajuste a tus necesidades de retención, sin que tengas que recordar activarla. Los usuarios con licencia FREE pueden seguir ejecutando las mismas tareas manualmente o como una ejecución puntual cuando lo necesiten.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Linkbox backup job in RcloneView Job Manager" class="img-large img-center" />

Cada ejecución queda registrada en Job History con la hora de inicio, la duración, la velocidad de transferencia y el número de archivos, para que puedas confirmar que una copia de seguridad de Linkbox se completó correctamente o investigar una transferencia fallida sin tener que revisar los registros en bruto.

## Cómo empezar

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abre la pestaña Remote y añade Linkbox como nuevo remoto a través del asistente de configuración.
3. Crea una tarea de Sync o Backup que apunte de Linkbox a tu destino preferido.
4. Ejecuta un Dry Run, luego guarda la tarea y, opcionalmente, prográmala para su ejecución recurrente.

Una vez que Linkbox está integrado en RcloneView, deja de ser un destino separado que hay que recordar y se convierte simplemente en otra carpeta más dentro de tu flujo de trabajo unificado en la nube.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento de Gofile — Sincroniza y haz copias de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-gofile-cloud-sync-backup-rcloneview)
- [Gestiona el almacenamiento de Pixeldrain — Sincronización en la nube con RcloneView](https://rcloneview.com/support/blog/manage-pixeldrain-cloud-sync-rcloneview)
- [Gestiona las descargas en la nube de Uptobox con RcloneView](https://rcloneview.com/support/blog/manage-uptobox-cloud-downloads-rcloneview)

<CloudSupportGrid />
