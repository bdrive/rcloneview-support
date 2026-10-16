---
slug: migrate-mega-to-pcloud-rcloneview
title: "Migrar de Mega a pCloud — transferir archivos con RcloneView"
authors:
  - morgan
description: "Migra de Mega a pCloud con RcloneView: conecta ambos remotos, previsualiza con Dry Run, copia de nube a nube y verifica el resultado con Folder Compare."
keywords:
  - migrar de mega a pcloud
  - transferencia de mega a pcloud
  - mover archivos de mega a pcloud
  - RcloneView mega
  - RcloneView pcloud
  - migración de nube a nube
  - sincronización mega pcloud
  - transferir archivos de mega
tags:
  - RcloneView
  - mega
  - pcloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar de Mega a pCloud — transferir archivos con RcloneView

> Traslada una cuenta completa de Mega a pCloud con un trabajo de copia que puedes previsualizar y verificar, en lugar de descargar y volver a subir manualmente.

Pasar de Mega a pCloud suele implicar miles de archivos repartidos en carpetas anidadas, y la vía del navegador obliga a descargarlo todo primero. RcloneView conecta ambos servicios en paralelo y transfiere de nube a nube, con un Dry Run para previsualizar el trabajo y Folder Compare para confirmar que no falta nada. RcloneView gestiona más de 90 servicios de almacenamiento en la nube desde una sola ventana en Windows, macOS y Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta Mega y pCloud como remotos

Mega usa la introducción de credenciales: añade un nuevo remoto, elige Mega e introduce tu correo y contraseña. pCloud usa OAuth en el navegador: RcloneView abre una página de inicio de sesión, apruebas el acceso y el remoto se conecta automáticamente, sin ninguna clave de API que copiar.

Cuando existan ambos remotos, ábrelos en dos paneles del Explorer. Examina cada lado para confirmar que la cuenta es accesible y ver cómo está organizado el árbol de carpetas antes de mover nada.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir remotos de Mega y pCloud en RcloneView" class="img-large img-center" />

## Planifica la transferencia

Decide si quieres la cuenta completa o solo una parte. Un enfoque habitual es copiar una carpeta de nivel superior por trabajo, lo que mantiene cada ejecución corta y fácil de reintentar. En el asistente de sincronización puedes limitar el alcance con filtros: tamaño máximo de archivo, antigüedad máxima o grupos predefinidos como Document, Image o Video.

Elige Copy en lugar de Sync si pCloud ya contiene archivos que quieres conservar, porque una sincronización unidireccional hace que el destino coincida con el origen. Ejecuta primero un Dry Run: muestra los archivos que se copiarían o eliminarían sin cambiar nada.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparación de carpetas de Mega y pCloud antes de la migración" class="img-large img-center" />

## Ejecuta la migración y sigue el progreso

Arrastra una carpeta del panel de Mega al panel de pCloud para una copia rápida puntual, o guarda un trabajo para ejecuciones repetibles. Arrastrar entre remotos distintos copia en lugar de mover, así que tus datos de Mega permanecen intactos hasta que estés satisfecho.

Sigue el progreso en la pestaña Transferring, que muestra velocidad, número de archivos y porcentaje. Si vas a mover un archivo grande, reduce el número de transferencias simultáneas en Advanced Settings para que sea menos probable que los límites de cuenta de Mega interrumpan la ejecución. Los trabajos de sincronización reintentan la ejecución completa si falla (valor predeterminado: 3 veces).

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferencia de nube a nube de Mega a pCloud" class="img-large img-center" />

## Verifica y termina

Cuando termine la copia, abre Folder Compare sobre las dos raíces. Los filtros muestran los archivos solo a la izquierda, solo a la derecha, idénticos y diferentes, y puedes copiar los rezagados con un clic. Job History registra la hora de inicio, la duración, el estado y el número de archivos de cada ejecución, lo que resulta útil como registro de la migración.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Historial del trabajo de migración de Mega a pCloud" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade un remoto de Mega (correo y contraseña) y un remoto de pCloud (inicio de sesión en el navegador).
3. Ejecuta un Dry Run en una carpeta y luego el trabajo de copia.
4. Usa Folder Compare para verificar y repite con las carpetas restantes.

Una migración por etapas y verificada te permite dejar Mega con la confianza de que cada archivo ha llegado.

---

**Guías relacionadas:**

- [Migrar de pCloud a Mega](https://rcloneview.com/support/blog/migrate-pcloud-to-mega-rcloneview)
- [Gestionar el almacenamiento de Mega](https://rcloneview.com/support/blog/manage-mega-cloud-sync-backup-rcloneview)
- [Gestionar el almacenamiento de pCloud](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
