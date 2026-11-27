---
slug: migrate-pcloud-to-koofr-rcloneview
title: "Migrar de pCloud a Koofr — Transfiere archivos con RcloneView"
authors:
  - jay
description: "Migra de pCloud a Koofr con RcloneView. Copia carpetas de nube a nube, previsualiza con Dry Run, verifica con Folder Compare y evita el ciclo de descargar y volver a subir."
keywords:
  - migrar pcloud a koofr
  - transferencia de pcloud a koofr
  - migración pcloud koofr
  - mover archivos de pcloud a koofr
  - migración de nube a nube
  - migración de almacenamiento en la nube europeo
  - rcloneview pcloud
  - rcloneview koofr
  - herramienta de transferencia de archivos koofr
  - migración en la nube con rclone gui
tags:
  - RcloneView
  - pcloud
  - koofr
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar de pCloud a Koofr — Transfiere archivos con RcloneView

> Mueve tu biblioteca de pCloud a Koofr carpeta por carpeta, previsualiza cada cambio primero y confirma que no quedó nada atrás.

Equipos y particulares pasan de pCloud a Koofr por muchas razones: consolidar cuentas, adoptar Koofr como centro principal o mantener una segunda copia en otro proveedor. Descargar todo a un portátil y volver a subirlo desperdicia espacio en disco y días de trabajo. RcloneView conecta ambos servicios en una sola ventana y copia los datos entre ellos mediante rclone, de modo que la migración se ejecuta como un trabajo gestionado que puedes supervisar, repetir y verificar.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta pCloud y Koofr como remotos

Abre la pestaña **Remote** y haz clic en **New Remote**. pCloud usa OAuth: elige pCloud y se abrirá tu navegador para que inicies sesión y apruebes el acceso. No se necesita clave de API. Después añade un segundo remoto para Koofr e introduce las credenciales de la cuenta que solicita el formulario de configuración.

Cuando ambos remotos existan, ábrelos uno al lado del otro en dos paneles de Explorer. Puedes cambiar el diseño a una división horizontal o vertical en **Settings > Layout** y explorar cada cuenta con el árbol de carpetas, la vista de lista o la vista de miniaturas para carpetas de fotos.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir remotos de pCloud y Koofr en RcloneView" class="img-large img-center" />

Antes de mover nada, haz clic derecho en tus carpetas principales de pCloud y usa **Get Size**. Conocer el total te ayuda a confirmar que la cuenta de Koofr tiene espacio suficiente.

## Copia carpetas de nube a nube

Para un pequeño conjunto de carpetas, arrástralas del panel de pCloud al panel de Koofr. Arrastrar entre remotos diferentes realiza una **Copy**, por lo que tus originales de pCloud permanecen intactos.

Para una migración completa, crea un trabajo. Haz clic en **Sync** en la pestaña Home, elige la carpeta de pCloud como origen y una carpeta de Koofr como destino, y asigna al trabajo un nombre como `pcloud-to-koofr`. En Advanced Settings, habilita **checksum** si quieres comparar los archivos por hash y tamaño, y deja **Retry entire sync if fails** en su valor predeterminado de 3 para que una conexión perdida no detenga la ejecución.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferencia de nube a nube de pCloud a Koofr en RcloneView" class="img-large img-center" />

Ejecuta primero un **Dry Run**. Muestra cada archivo que se copiaría o eliminaría, lo que es una forma fiable de detectar una ruta de destino incorrecta antes de que se muevan datos reales. RcloneView monta y sincroniza más de 90 proveedores desde una sola ventana en Windows, macOS y Linux, así que el mismo flujo de trabajo sirve para cualquier par que migres más adelante.

## Supervisa la transferencia y revisa el historial

Mientras el trabajo se ejecuta, la pestaña **Transferring** muestra el progreso, la velocidad y el número de archivos, y puedes cancelar en cualquier momento. Una fotógrafa que mueve 400 GB de sesiones exportadas puede minimizar la aplicación en la bandeja del sistema, y el trabajo sigue ejecutándose en segundo plano.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Supervisar el progreso de la transferencia de pCloud a Koofr en RcloneView" class="img-large img-center" />

Cuando termine, abre **Job History** para comprobar el estado (Completed, Errored o Canceled), el tamaño total, la velocidad y el número de archivos. Si añades archivos nuevos a pCloud durante la transición, vuelve a ejecutar el mismo trabajo. Solo se transfieren los archivos nuevos o modificados.

## Verifica con Folder Compare

Haz clic en **Compare** y carga la carpeta de pCloud a la izquierda y la de Koofr a la derecha. Filtra por **left-only files** para detectar lo que falta en Koofr y usa **Copy right** para completar los huecos. Cuando ambos lados aparezcan como iguales, la migración habrá terminado y podrás decidir cuándo retirar la copia de pCloud.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparar carpetas de pCloud y Koofr después de la migración en RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade pCloud (inicio de sesión OAuth en el navegador) y Koofr como remotos desde **New Remote**.
3. Crea un trabajo Sync de pCloud a Koofr y previsualízalo con **Dry Run**.
4. Ejecuta el trabajo, revisa **Job History** y confirma con **Folder Compare**.

Una migración planificada y verificada significa que cambias de proveedor según tu calendario, no cuando por fin termina una copia manual.

---

**Guías relacionadas:**

- [Gestionar el almacenamiento de pCloud — Sincroniza y haz copias de seguridad con RcloneView](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Gestionar el almacenamiento de Koofr — Sincroniza y haz copias de seguridad con RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Solucionar errores de sincronización de Koofr con RcloneView](https://rcloneview.com/support/blog/fix-koofr-sync-errors-rcloneview)

<CloudSupportGrid />
