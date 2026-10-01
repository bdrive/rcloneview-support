---
slug: migrate-pcloud-to-mega-rcloneview
title: "Migrar de pCloud a MEGA — Transfiere archivos con RcloneView"
authors:
  - robin
description: "Migra de pCloud a MEGA con RcloneView: conecta ambos remotos, ejecuta un dry run, copia de nube a nube y verifica con Folder Compare. Guía paso a paso."
keywords:
  - migrar de pCloud a MEGA
  - transferencia de pCloud a MEGA
  - mover archivos de pCloud a MEGA
  - migración de nube a nube
  - RcloneView pCloud
  - RcloneView MEGA
  - sincronización pCloud MEGA
  - transferir archivos de pCloud
  - migración con GUI de rclone
tags:
  - RcloneView
  - pcloud
  - mega
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar de pCloud a MEGA — Transfiere archivos con RcloneView

> Traslada toda una biblioteca de pCloud a MEGA con un trabajo de nube a nube previsualizado y verificable, en lugar de descargar y volver a subir manualmente.

Cambiar de pCloud a MEGA suele implicar un archivo grande que nadie quiere descargar primero a un portátil. RcloneView conecta ambos servicios como remotos, de modo que puedes copiar carpeta a carpeta desde una sola ventana y comprobar el resultado antes de dar de baja la cuenta antigua.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta pCloud y MEGA como remotos

pCloud usa OAuth basado en el navegador: RcloneView abre una página de inicio de sesión, apruebas el acceso y el remoto se crea sin clave de API. MEGA usa tu correo electrónico y contraseña. Abre **Remote > New Remote**, elige cada proveedor y ponles nombres claros, por ejemplo `pcloud-old` y `mega-new`.

Cuando ambos aparezcan en el Remote Manager, ábrelos uno junto al otro en dos paneles del Explorer. RcloneView permite montar y sincronizar más de 90 proveedores desde una sola ventana en Windows, macOS y Linux, así que la misma disposición sirve para cualquier traslado futuro.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir remotos de pCloud y MEGA en RcloneView" class="img-large img-center" />

## Copia archivos de nube a nube

Arrastrar una carpeta de un remoto a otro la copia, ya que las transferencias entre remotos distintos son copias y no movimientos. Para una carpeta pequeña basta con eso. Para una biblioteca completa, crea un trabajo Copy o Sync para poder guardarlo, volver a ejecutarlo y revisarlo en Job History.

Deja intacto el origen hasta que hayas verificado el resultado. Un trabajo Copy deja pCloud sin tocar, lo que hace que la migración se pueda repetir con seguridad si algo se interrumpe.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferencia de nube a nube de pCloud a MEGA en RcloneView" class="img-large img-center" />

## Previsualiza con Dry Run y ajusta las transferencias

Ejecuta primero un Dry Run. Muestra los archivos que se copiarían o eliminarían sin cambiar nada, lo que detecta una carpeta de destino equivocada antes de que cueste horas. En el paso avanzado puedes ajustar las transferencias de archivos simultáneas y los equality checkers. Si ves errores, reducir estos valores es un buen primer paso.

Usa el paso de filtrado para omitir tipos de archivo o carpetas que no quieras trasladar, como instaladores antiguos o exportaciones de Google Docs.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Ejecutar un trabajo de migración en RcloneView" class="img-large img-center" />

## Verifica con Folder Compare

Tras la transferencia, abre **Compare** con pCloud a la izquierda y MEGA a la derecha. Filtra por archivos solo a la izquierda y diferentes para ver lo que falta o no coincide, y copia el resto directamente desde la vista de comparación. La pestaña Transferring y Job History registran el tamaño y el estado de cada ejecución.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare entre pCloud y MEGA" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade pCloud (OAuth) y MEGA (correo y contraseña) mediante New Remote.
3. Crea un trabajo Copy de pCloud a MEGA y ejecuta un Dry Run.
4. Ejecuta el trabajo y verifica con Folder Compare antes de cerrar la cuenta antigua.

Una copia previsualizada y verificada convierte un cambio de cuenta arriesgado en una tarea rutinaria.

---

**Guías relacionadas:**

- [Migrar de pCloud a Proton Drive](https://rcloneview.com/support/blog/migrate-pcloud-to-proton-drive-rcloneview)
- [Migrar de MEGA a Dropbox](https://rcloneview.com/support/blog/migrate-mega-to-dropbox-rcloneview)
- [Solucionar errores de sincronización de pCloud](https://rcloneview.com/support/blog/fix-pcloud-sync-errors-rcloneview)

<CloudSupportGrid />
