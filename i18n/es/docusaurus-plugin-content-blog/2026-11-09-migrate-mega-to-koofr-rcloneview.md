---
slug: migrate-mega-to-koofr-rcloneview
title: "Migra de MEGA a Koofr — Transfiere archivos con RcloneView"
authors:
  - casey
description: "Migra de MEGA a Koofr con RcloneView: conecta ambos remotos, previsualiza con Dry Run, copia de nube a nube y verifica los resultados con Folder Compare."
keywords:
  - migrar de MEGA a Koofr
  - transferencia de MEGA a Koofr
  - migración MEGA Koofr
  - mover archivos de MEGA a Koofr
  - RcloneView MEGA
  - RcloneView Koofr
  - transferencia de nube a nube
  - alternativa a MEGA almacenamiento europeo
tags:
  - RcloneView
  - mega
  - koofr
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migra de MEGA a Koofr — Transfiere archivos con RcloneView

> Mueve los archivos de una cuenta de MEGA a Koofr con un trabajo de nube a nube previsualizado y verificable, en lugar de descargar y volver a subir manualmente.

Sacar años de archivos de MEGA suele significar descargarlos a un portátil y subirlos de nuevo, lo que duplica el trabajo y falla con cada corte de red. RcloneView te permite conectar MEGA y Koofr lado a lado y ejecutar la transferencia como un único trabajo. RcloneView monta Y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta ambos remotos

Abre la pestaña Remote y haz clic en New Remote. MEGA usa la introducción de credenciales: escribe el correo y la contraseña de tu cuenta. Koofr se añade del mismo modo desde la lista de proveedores. Cuando ambos aparezcan en Remote Manager, ábrelos en dos paneles de Explorer para ver origen y destino juntos.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir remotos de MEGA y Koofr en RcloneView" class="img-large img-center" />

Explora primero el árbol de MEGA. Decide si vas a mover todo o solo ciertas carpetas, ya que un alcance menor mantiene la primera ejecución rápida y fácil de comprobar.

## Previsualiza y luego transfiere

Puedes arrastrar carpetas del panel de MEGA al panel de Koofr; arrastrar entre remotos distintos realiza una copia, así que los archivos originales de MEGA quedan intactos. Para un traslado mayor, crea en su lugar un trabajo de Sync o Copy. Ejecuta primero un Dry Run: lista los archivos que se copiarían, para que detectes una ruta de destino incorrecta antes de escribir nada.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferencia de nube a nube de MEGA a Koofr" class="img-large img-center" />

En los Advanced Settings del trabajo puedes ajustar las transferencias de archivos simultáneas. Si cualquiera de los servicios empieza a ralentizarse o a devolver errores, reduce el número de equality checkers y de transferencias y deja que el ajuste de reintentos gestione los fallos transitorios.

## Supervisa y verifica

Sigue el progreso en la pestaña Transferring, que muestra velocidad, número de archivos y tamaño. Cuando el trabajo termine, abre Job History para confirmar el estado y el total transferido.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History mostrando una transferencia completada de MEGA a Koofr" class="img-large img-center" />

Por último, usa Folder Compare con MEGA a la izquierda y Koofr a la derecha. Filtra los archivos solo a la izquierda y los diferentes para encontrar lo que no llegó, y cópialos directamente desde la vista de comparación.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare entre MEGA y Koofr" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade tus remotos de MEGA y Koofr desde la pestaña Remote.
3. Crea un trabajo de Copy o Sync y ejecuta un Dry Run para previsualizarlo.
4. Ejecuta el trabajo y verifica el resultado con Folder Compare antes de retirar nada en MEGA.

Conserva la copia de MEGA hasta que la comparación salga limpia, de modo que los datos originales sigan disponibles mientras verificas.

---

**Guías relacionadas:**

- [Migra de Koofr a MEGA](https://rcloneview.com/support/blog/migrate-koofr-to-mega-rcloneview)
- [Migra de MEGA a pCloud](https://rcloneview.com/support/blog/migrate-mega-to-pcloud-rcloneview)
- [Gestiona la sincronización y la copia de seguridad de Koofr en la nube](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
