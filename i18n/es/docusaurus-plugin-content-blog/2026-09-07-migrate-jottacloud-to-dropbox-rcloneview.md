---
slug: migrate-jottacloud-to-dropbox-rcloneview
title: "Migrar de Jottacloud a Dropbox — Transfiere archivos con RcloneView"
authors:
  - alex
description: "Mueve archivos de Jottacloud a Dropbox con RcloneView. Sincroniza carpetas, verifica las transferencias y gestiona ambos remotos en una sola ventana."
keywords:
  - migrar jottacloud a dropbox
  - transferencia de jottacloud a dropbox
  - migración jottacloud dropbox
  - RcloneView jottacloud
  - RcloneView dropbox
  - transferencia entre nubes
  - mover archivos entre almacenamientos en la nube
  - alternativa a jottacloud
  - herramienta de migración a dropbox
  - migración de almacenamiento en la nube europeo
tags:
  - RcloneView
  - jottacloud
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar de Jottacloud a Dropbox — Transfiere archivos con RcloneView

> Mueve tus archivos de Jottacloud a Dropbox sin descargar nada primero a tu escritorio.

Los equipos que empezaron con Jottacloud por su residencia de datos europea a veces necesitan consolidarse en Dropbox cuando la colaboración con socios internacionales pasa a ser prioritaria. Descargar todo localmente y volver a subirlo desperdicia ancho de banda y arriesga romper la estructura de carpetas. RcloneView se conecta a ambos remotos a la vez y mueve los archivos directamente entre ellos, de modo que la transferencia ocurre de nube a nube.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Jottacloud y Dropbox uno junto al otro

Añade ambas cuentas de almacenamiento desde la pestaña Remote > New Remote. Dropbox se conecta con un inicio de sesión estándar por navegador, sin claves de API que gestionar. Una vez añadido, cada remoto obtiene su propia pestaña en el panel Explorer, y puedes abrir Jottacloud en un panel y Dropbox en otro para ver una al lado de la otra ambas estructuras de carpetas antes de mover nada.

<img src="/support/images/en/blog/new-remote.png" alt="Añadiendo un nuevo remoto en la nube en RcloneView" class="img-large img-center" />

Explorar ambas cuentas antes de iniciar la transferencia te permite confirmar que las convenciones de nomenclatura de carpetas coinciden, o planificar una nueva estructura en el lado de Dropbox si el origen se ha desorganizado con el tiempo.

## Ejecutar la transferencia de nube a nube

Usa el asistente de sincronización desde la pestaña Home para configurar Jottacloud como origen y Dropbox como destino. Establece la dirección de sincronización en unidireccional para que Dropbox refleje el origen sin que RcloneView elimine nada de vuelta en Jottacloud. En el paso 3, aplica filtros para omitir los tipos de archivo que no necesitas en la nueva ubicación: excluir archivos `.iso` o carpetas `.git/` completas mantiene la transferencia centrada en el contenido que realmente importa.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configurando una tarea de sincronización de nube a nube de Jottacloud a Dropbox" class="img-large img-center" />

Ejecuta primero un Dry Run. Muestra exactamente qué archivos se copiarán sin tocar ninguna de las dos cuentas, lo que ayuda a detectar un filtro mal configurado antes de que afecte a miles de archivos.

## Verificar que cada archivo llegó correctamente

Después de completar la transferencia, abre Folder Compare y apúntalo a las mismas rutas en Jottacloud y Dropbox. Los archivos con el mismo tamaño se muestran como idénticos; cualquiera que difiera o no se haya copiado se marca para que puedas volver a ejecutar solo esos elementos. RcloneView monta y sincroniza más de 90 proveedores desde una sola ventana en Windows, macOS y Linux, por lo que este paso de verificación funciona igual sin importar qué dos nubes estés comparando.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparando las carpetas de Jottacloud y Dropbox después de la migración" class="img-large img-center" />

Job History registra el tamaño, la velocidad y el número de archivos de la sincronización completada, lo que te da un registro al que recurrir si alguien pregunta cómo fue la migración.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade tus remotos de Jottacloud y Dropbox desde la pestaña Remote.
3. Crea una tarea de sincronización unidireccional con Jottacloud como origen y Dropbox como destino, y luego ejecuta un Dry Run.
4. Ejecuta la sincronización y confirma los resultados con Folder Compare.

Una vez verificado, mantén ambos remotos conectados durante un tiempo para poder detectar cualquier archivo añadido a la cuenta antigua de Jottacloud antes de que el cambio esté completo.

---

**Guías relacionadas:**

- [Gestionar el almacenamiento de Jottacloud — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [Gestionar el almacenamiento de Dropbox — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Migrar de Jottacloud a Wasabi — Transfiere archivos con RcloneView](https://rcloneview.com/support/blog/migrate-jottacloud-to-wasabi-rcloneview)

<CloudSupportGrid />
