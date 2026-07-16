---
slug: migrate-icloud-drive-to-google-drive-rcloneview
title: "Migrar iCloud Drive a Google Drive — Transfiere archivos con RcloneView"
authors:
  - jay
description: "Migra iCloud Drive a Google Drive usando RcloneView — una guía paso a paso para transferir archivos de la nube de Apple a Google sin descargas manuales."
keywords:
  - iCloud Drive a Google Drive
  - migrar iCloud Drive a Google Drive
  - migración de iCloud Drive
  - transferir archivos de iCloud a Google Drive
  - RcloneView iCloud Drive
  - herramienta de migración en la nube
  - mover archivos de iCloud a Google Drive
  - transferencia de archivos entre nubes
  - sincronización de iCloud Drive con RcloneView
tags:
  - RcloneView
  - cloud-to-cloud
  - migration
  - google-drive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar iCloud Drive a Google Drive — Transfiere archivos con RcloneView

> Mueve toda tu biblioteca de iCloud Drive a Google Drive sin necesidad de descargar todo primero — RcloneView gestiona la transferencia directamente entre ambos servicios.

Pasar de un flujo de trabajo centrado en Apple a Google Workspace — o simplemente querer archivos accesibles en todas las plataformas — a menudo implica migrar iCloud Drive a Google Drive. Descargar y volver a subir manualmente gigabytes de datos desperdicia tiempo y arriesga transferencias incompletas. RcloneView se conecta directamente a ambos servicios y mueve los archivos a través de la nube, manteniendo tus originales intactos durante todo el proceso.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué pasar de iCloud Drive a Google Drive

iCloud Drive se integra estrechamente con el ecosistema de Apple, pero fuera de macOS e iOS la experiencia se vuelve fragmentada. Google Drive funciona de forma nativa en todas las plataformas principales y se conecta a las herramientas de Google Workspace de las que dependen a diario los equipos multiplataforma. Un estudio de diseño con 300 GB de archivos de proyectos, por ejemplo, puede necesitar tenerlo todo en Google Drive al incorporar clientes que trabajan exclusivamente con Google Docs y Slides.

iCloud Drive sincroniza silenciosamente las carpetas Escritorio, Documentos y otras con los servidores de Apple — lo que significa que años de archivos acumulados a menudo residen allí sin un inventario claro. Migrar a Google Drive te ofrece visibilidad centralizada, controles de uso compartido granulares y acceso desde cualquier dispositivo sin necesidad de una cuenta de Apple.

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive and Google Drive as remotes in RcloneView" class="img-large img-center" />

## Configurar iCloud Drive en RcloneView

El binario de rclone integrado en RcloneView (v1.69.1+) cumple con el mínimo requerido de rclone v1.69 para el soporte de iCloud Drive. No es necesario instalar nada por separado.

Para añadir iCloud Drive, abre la pestaña **Remote** y haz clic en **New Remote**. Selecciona iCloud Drive de la lista de proveedores, luego introduce el correo electrónico de tu Apple ID y tu contraseña. Si tu cuenta de Apple utiliza autenticación de dos factores, genera una contraseña específica de aplicación desde la configuración de seguridad de tu Apple ID y úsala en lugar de tu contraseña habitual. Una vez guardado, tus carpetas de iCloud Drive aparecen de inmediato en el panel del explorador de archivos — Escritorio, Documentos y cualquier otro directorio sincronizado son totalmente navegables.

## Conectar Google Drive

Google Drive utiliza autenticación OAuth. En RcloneView, añade un nuevo remoto y selecciona Google Drive — se abre automáticamente una ventana del navegador para que inicies sesión en tu cuenta de Google y concedas acceso. No se requieren claves de API ni credenciales de desarrollador. La conexión se completa en segundos, y tus carpetas de Drive aparecen en un segundo panel junto a iCloud Drive.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from iCloud Drive to Google Drive in RcloneView" class="img-large img-center" />

## Ejecutar la migración

Con ambos remotos configurados, abre el **Job Manager** y crea un trabajo de **Copy**. Establece tu carpeta de origen en iCloud Drive, selecciona tu carpeta de destino en Google Drive y nombra el trabajo. El modo Copy transfiere los archivos que aún no existen en el destino sin tocar los originales — el contenido de tu iCloud Drive permanece intacto.

Antes de comprometerte con la transferencia completa, ejecuta **Dry Run** desde las opciones del trabajo. RcloneView muestra cada archivo que se copiaría — nombres, rutas, tamaños — sin mover un solo byte. Esta vista previa es especialmente útil cuando iCloud Drive contiene años de contenido mixto y quieres confirmar el alcance antes de comenzar.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a cloud migration job in RcloneView" class="img-large img-center" />

Una vez satisfecho, ejecuta el trabajo y observa el progreso en la pestaña **Transferring** en la parte inferior de la interfaz. La velocidad, el número de archivos y el porcentaje completado se actualizan en tiempo real. Para bibliotecas grandes, activa la verificación de suma de comprobación en la Configuración avanzada del trabajo para confirmar que todos los archivos llegaron sin corrupción.

## Cómo empezar

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abre la pestaña **Remote**, haz clic en **New Remote** y añade iCloud Drive con tus credenciales de Apple ID.
3. Añade Google Drive como segundo remoto mediante inicio de sesión OAuth en el navegador.
4. Crea un trabajo de Copy con tu carpeta de iCloud Drive como origen y una carpeta de Google Drive como destino.
5. Ejecuta Dry Run para previsualizar la transferencia, luego ejecuta el trabajo y supervisa el progreso en la pestaña Transferring.

Con ambos servicios conectados uno junto al otro, migrar toda tu iCloud Drive a Google Drive se reduce a configurar un trabajo y dejar que se ejecute.

---

**Guías relacionadas:**

- [Gestionar iCloud Drive — Sincronización en la nube con RcloneView](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [Migrar Dropbox a Google Drive con RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-google-drive-with-rcloneview)
- [Migrar Google Drive a pCloud con RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-pcloud-rcloneview)

<CloudSupportGrid />
