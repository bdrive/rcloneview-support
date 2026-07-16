---
slug: migrate-onedrive-to-dropbox-rcloneview
title: "Migra de OneDrive a Dropbox con RcloneView"
authors:
  - tayson
description: "Migra de OneDrive a Dropbox con RcloneView. Compara las funciones de cada plataforma, configura ambos remotos, transfiere datos y verifica la migración paso a paso."
keywords:
  - rcloneview
  - onedrive to dropbox
  - migrate onedrive to dropbox
  - onedrive dropbox migration
  - onedrive migration tool
  - cloud storage migration
  - dropbox from onedrive
  - microsoft to dropbox
  - onedrive data transfer
  - cloud to cloud migration gui
tags:
  - RcloneView
  - onedrive
  - dropbox
  - migration
  - cloud-migration
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migra de OneDrive a Dropbox con RcloneView

> Cambiar de OneDrive a Dropbox implica mover archivos entre dos ecosistemas distintos: **RcloneView** se encarga de la transferencia, la preservación de metadatos y la verificación a través de una interfaz visual.

OneDrive se integra profundamente con Microsoft 365, mientras que Dropbox se centra en la sincronización de archivos y la colaboración con una amplia integración de aplicaciones de terceros. Las organizaciones que cambian de suite de productividad, los equipos que se pasan a Dropbox por su superior sincronización inteligente o sus funciones de Paper, o las personas que prefieren las capacidades de recuperación de archivos de Dropbox, enfrentan todos el mismo desafío: transferir potencialmente años de datos entre plataformas. RcloneView se conecta a ambas a través de sus respectivas API y ofrece una ruta de migración sencilla.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué migrar de OneDrive a Dropbox

La decisión suele involucrar uno o más de estos factores:

- **Cambio de plataforma**: Pasar de Microsoft 365 a Google Workspace o a una suite que no incluye OneDrive, pero prefiriendo Dropbox para el almacenamiento de archivos.
- **Sincronización inteligente**: La sincronización inteligente de Dropbox (archivos disponibles solo en línea con marcadores locales) tiene un historial más largo y una compatibilidad de aplicaciones más amplia que Files On-Demand de OneDrive.
- **Integraciones de terceros**: Dropbox se conecta con una gama más amplia de herramientas creativas y de productividad a través de su ecosistema de API.
- **Recuperación de archivos**: Los planes de Dropbox Business ofrecen 180 días de historial de versiones, en comparación con el límite de 30 días de OneDrive en los planes Personal.
- **Consistencia entre plataformas**: Dropbox ofrece una experiencia más uniforme en Windows, macOS y Linux.

## Configuración de ambos remotos

### Remoto de OneDrive

Abre el Administrador de remotos de RcloneView y agrega un remoto de **Microsoft OneDrive**. Autoriza mediante OAuth, seleccionando OneDrive Personal o Business según el tipo de cuenta. Para cuentas Business, elige tu unidad personal o una biblioteca de documentos de SharePoint.

### Remoto de Dropbox

Agrega un remoto de **Dropbox**. Autoriza mediante OAuth: RcloneView abre una ventana del navegador para el inicio de sesión de Dropbox y la concesión de permisos. El token se almacena en tu configuración local de rclone. Los remotos de Dropbox proporcionan acceso a todo tu Dropbox, incluidas las carpetas de equipo si tienes un plan Business.

<img src="/support/images/en/blog/new-remote.png" alt="Adding OneDrive and Dropbox remotes in RcloneView" class="img-large img-center" />

## Planificación de la migración

Antes de iniciar la transferencia:

1. **Compatibilidad de nombres de archivo**: OneDrive for Business restringe caracteres como `#` y `%`, mientras que Dropbox tiene sus propias restricciones (por ejemplo, espacios y puntos al final). Los archivos que existen en OneDrive pueden necesitar renombrarse para ser compatibles con Dropbox. RcloneView gestiona la codificación automáticamente, pero revisa la estructura de tus archivos para detectar casos límite.
2. **Tamaño y estructura**: Usa el análisis de almacenamiento de RcloneView para determinar el volumen total de datos. Una migración de 500 GB a 50 Mbps tarda aproximadamente 22 horas.
3. **Archivos y enlaces compartidos**: Los permisos y enlaces para compartir de OneDrive no se transfieren a Dropbox. Documenta cualquier enlace compartido importante antes de migrar para poder recrearlo en Dropbox.
4. **Cuadernos de OneNote**: Los archivos de OneNote almacenados en OneDrive no son archivos estándar; requieren exportación antes de la migración. Considera exportarlos por separado.

## Ejecución de la migración

Abre OneDrive en el panel izquierdo y Dropbox en el derecho. Navega hasta la carpeta de origen y la ubicación de destino. Usa un trabajo de copia para la migración inicial, de modo que los archivos se conserven en ambos lados hasta que se complete la verificación.

RcloneView compara los archivos usando el tamaño y la hora de modificación. OneDrive utiliza QuickXorHash mientras que Dropbox usa su propio hash de contenido; dado que son incompatibles, RcloneView se basa en la comparación de tamaño y marca de tiempo para la detección de diferencias entre estos dos proveedores. Los archivos que coinciden se omiten y solo se transfieren los archivos nuevos o modificados.

Para migraciones grandes, habilita las transferencias multihilo y establece un límite de ancho de banda adecuado para evitar saturar tu conexión. La supervisión en tiempo real de RcloneView muestra el progreso de la transferencia, la velocidad y el tiempo estimado de finalización.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating OneDrive to Dropbox in RcloneView" class="img-large img-center" />

## Verificación de la migración

Después de la transferencia, usa la función de comparación de RcloneView para verificar que esté completa. Selecciona el origen de OneDrive y el destino de Dropbox y ejecuta una comparación. Los archivos que coinciden aparecen como idénticos; los archivos faltantes o diferentes se resaltan.

Presta atención a los archivos de tipo Google Docs si tenías documentos de Office Online: estos deberían haberse convertido a formatos estándar de Office durante la transferencia. Verifica que los archivos convertidos se abran correctamente en Dropbox.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying OneDrive to Dropbox migration in RcloneView" class="img-large img-center" />

## Pasos posteriores a la migración

1. Instala el cliente de escritorio de Dropbox y configura las preferencias de sincronización inteligente.
2. Recrea los enlaces compartidos o permisos de carpetas en Dropbox.
3. Actualiza las integraciones de aplicaciones que apuntaban a rutas de OneDrive.
4. Conserva los datos de OneDrive durante un período de transición (30-60 días) antes de eliminarlos.
5. Si ejecutas ambos en paralelo, programa un trabajo de sincronización diario en RcloneView para mantener Dropbox actualizado.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling ongoing OneDrive to Dropbox sync in RcloneView" class="img-large img-center" />

## Cómo empezar

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agrega los remotos de OneDrive y Dropbox en el Administrador de remotos.
3. Ejecuta un trabajo de copia de OneDrive a Dropbox.
4. Verifica con la función de comparación.
5. Completa los pasos posteriores a la migración y da de baja OneDrive cuando estés listo.

OneDrive y Dropbox sirven a ecosistemas diferentes, pero RcloneView garantiza que tus datos se muevan entre ellos de forma limpia y completa.

---

**Guías relacionadas:**

- [Agregar un remoto mediante inicio de sesión en el navegador (OAuth)](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [Comparar el contenido de carpetas](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Supervisión de transferencias en tiempo real](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />
