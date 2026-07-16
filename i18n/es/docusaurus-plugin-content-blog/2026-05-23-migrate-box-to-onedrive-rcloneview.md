---
slug: migrate-box-to-onedrive-rcloneview
title: "Migrar de Box a OneDrive — Transfiere archivos con RcloneView"
authors:
  - morgan
description: "Guía paso a paso para migrar tus archivos de Box a Microsoft OneDrive usando RcloneView. Transferencia de archivos de nube a nube rápida y fiable con monitorización completa del progreso."
keywords:
  - migrar box a onedrive
  - transferencia de box a onedrive
  - migración en la nube box onedrive
  - rcloneview box onedrive
  - guía de migración box onedrive
  - transferir archivos de box a onedrive
  - herramienta de migración de box
  - migración a onedrive desde box rcloneview
  - mover archivos de box a microsoft onedrive
tags:
  - RcloneView
  - box
  - onedrive
  - cloud-to-cloud
  - migration
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar de Box a OneDrive — Transfiere archivos con RcloneView

> RcloneView hace que migrar de Box a Microsoft OneDrive sea sencillo — conecta ambas cuentas, configura un trabajo de transferencia y mueve toda tu biblioteca de archivos sin tocar un navegador.

Las organizaciones que cambian de Box a Microsoft OneDrive se enfrentan al mismo desafío recurrente: mover miles de archivos de forma fiable sin perder datos, duplicar contenido o soportar un lento ciclo manual de descarga y resubida. RcloneView gestiona toda la migración a través de una interfaz de escritorio, transfiriendo archivos directamente entre los dos servicios en la nube mediante una ruta de nube a nube mientras monitorizas el progreso en tiempo real.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Box y OneDrive

El primer paso es añadir ambas cuentas como remotos en RcloneView. En la pestaña **Remote**, haz clic en **New Remote** y selecciona **Box**. RcloneView abrirá una ventana del navegador para la autenticación OAuth — inicia sesión, concede acceso y vuelve a la aplicación. Repite el proceso para **OneDrive**, que también utiliza el inicio de sesión OAuth basado en navegador.

Una vez guardados ambos remotos, abre dos paneles del explorador uno junto al otro usando la opción **Layout** en la pestaña Settings. Navega hasta tu carpeta de origen de Box en el panel izquierdo y hasta tu carpeta de destino de OneDrive en el panel derecho. Esta vista de doble panel te ofrece una imagen clara de la estructura existente antes de que comience la transferencia.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and OneDrive as remotes in RcloneView" class="img-large img-center" />

Si estás migrando una cuenta Box for Business, establece `box_sub_type = enterprise` en la configuración del remoto — el asistente de configuración incluye este campo. Para OneDrive for Business o una biblioteca de documentos de SharePoint, selecciona el tipo de cuenta adecuado durante el paso de configuración de OneDrive. Ambas variantes empresariales se autentican de la misma forma mediante OAuth en el navegador.

## Ejecutar el trabajo de migración

Con ambos remotos configurados, abre el **Job Manager** y haz clic en **Add Job**. Selecciona tu carpeta de Box como origen y la carpeta de destino de OneDrive como destino. Para una migración única, el tipo de trabajo **Copy** conserva todos los archivos en Box mientras rellena OneDrive — usa **Move** solo si quieres que los archivos se eliminen de Box a medida que se transfieren.

En la configuración avanzada, activa la **verificación de checksum** para confirmar que cada archivo llega intacto. Esto resulta especialmente valioso en migraciones grandes, donde las interrupciones de red podrían producir copias corruptas de forma silenciosa. Establece también un número de reintentos (por defecto: 3) para manejar errores transitorios de la API de cualquiera de los proveedores sin necesidad de reinicios manuales.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud copy job from Box to OneDrive in RcloneView" class="img-large img-center" />

Antes de ejecutar la transferencia completa, usa el modo **Dry Run** para simular el trabajo. La vista previa muestra exactamente qué archivos se copiarán, ayudándote a detectar estructuras de carpetas no coincidentes o archivos inesperadamente grandes antes de comprometer ancho de banda y tiempo en la migración real.

## Monitorizar el progreso y verificar los resultados

Durante la transferencia, la pestaña **Transferring** en la parte inferior de la interfaz de RcloneView muestra el progreso en vivo: velocidad actual, archivos completados, datos totales movidos y tiempo transcurrido. Para migraciones grandes — un equipo legal que mueve una década de documentos contractuales, por ejemplo — esta visibilidad es esencial para estimar cuánto tiempo tomará la operación y planificar en torno al horario laboral.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Monitoring Box to OneDrive transfer progress in RcloneView" class="img-large img-center" />

Cuando el trabajo termina, consulta el panel **Job History** para obtener un resumen completo de la ejecución. Si algún archivo generó errores, el registro muestra las rutas exactas y los mensajes de error para que puedas abordarlos individualmente sin volver a ejecutar todo el trabajo. Después de revisar el historial, usa la función **Folder Compare** de RcloneView para comparar el origen de Box y el destino de OneDrive lado a lado y confirmar que todos los archivos se transfirieron correctamente antes de dar de baja la cuenta de Box.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Box to OneDrive migration in RcloneView" class="img-large img-center" />

## Cómo empezar

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade **Box** como remoto a través de **Remote > New Remote** con autenticación OAuth.
3. Añade **OneDrive** como segundo remoto con autenticación OAuth.
4. Crea un trabajo **Copy** en el Job Manager con Box como origen y OneDrive como destino, activa la verificación de checksum y ejecútalo.

Pasar de Box a OneDrive es una operación limpia y auditable con RcloneView — sin descargas manuales, sin almacenamiento intermedio y con visibilidad completa del progreso de principio a fin.

---

**Guías relacionadas:**

- [Sincronizar Box con Google Drive usando RcloneView](https://rcloneview.com/support/blog/sync-box-to-google-drive-rcloneview)
- [Migración de Box a Dropbox sin tiempo de inactividad con RcloneView](https://rcloneview.com/support/blog/zero-downtime-box-to-dropbox-rcloneview)
- [Migrar de Box a Backblaze B2 con RcloneView](https://rcloneview.com/support/blog/migrate-box-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
