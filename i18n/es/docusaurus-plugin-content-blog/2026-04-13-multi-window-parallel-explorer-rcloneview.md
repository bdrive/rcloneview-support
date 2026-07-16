---
slug: multi-window-parallel-explorer-rcloneview
title: "Soporte de Múltiples Ventanas — Gestiona Varios Almacenamientos en la Nube en Paralelo en RcloneView"
authors:
  - tayson
description: "Usa la función de Múltiples Ventanas de RcloneView para abrir ventanas independientes para diferentes tareas de almacenamiento en la nube. Gestiona Google Drive, S3 y OneDrive en paralelo en ventanas separadas."
keywords:
  - RcloneView multi-window
  - multiple windows cloud storage
  - parallel cloud management
  - RcloneView PLUS feature
  - cloud storage multi-window
  - side by side cloud management
  - RcloneView independent windows
  - cloud file manager multiple windows
  - RcloneView productivity
  - multi-window cloud sync
tags:
  - feature
  - productivity
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Soporte de Múltiples Ventanas — Gestiona Varios Almacenamientos en la Nube en Paralelo en RcloneView

> La función de Múltiples Ventanas de RcloneView (licencia PLUS) abre ventanas de aplicación independientes para que puedas gestionar diferentes tareas de almacenamiento en la nube simultáneamente sin cambiar de contexto.

El panel Explorer de RcloneView ya admite de 1 a 4 paneles en una sola ventana, lo cual es útil para la navegación en paralelo y las transferencias mediante arrastrar y soltar. Pero para flujos de trabajo complejos que involucran varias tareas distintas —supervisar una migración en curso en una vista mientras navegas por una nube diferente en otra, o ejecutar una comparación de carpetas mientras configuras un nuevo trabajo de sincronización— Múltiples Ventanas abre ventanas de RcloneView completamente independientes que funcionan sin interferir entre sí. Esta función está disponible con una licencia PLUS.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cómo Funciona Múltiples Ventanas

Cada nueva ventana abierta mediante Múltiples Ventanas es una instancia de RcloneView completamente independiente, con sus propios paneles de Explorer, pestaña de Transferencias y estado. Los cambios en una ventana no afectan a las demás. Las ventanas se comunican a través del mecanismo IPC interno de RcloneView, pero su estado de navegación de archivos y sus operaciones activas están aislados.

Para abrir una nueva ventana, haz clic en el botón **New Window** en la pestaña Home. La nueva ventana se abre en el mismo estado predeterminado que la ventana principal; luego puedes navegarla hacia un remoto diferente o iniciar un trabajo distinto de forma independiente. Las posiciones y tamaños de las ventanas se guardan automáticamente entre sesiones, de modo que tu diseño de múltiples ventanas se conserva la próxima vez que abras RcloneView.

<img src="/support/images/en/blog/new-remote.png" alt="Opening a new independent window in RcloneView" class="img-large img-center" />

## Flujos de Trabajo Prácticos con Múltiples Ventanas

**Navegación en paralelo entre proveedores de nube:** Abre la Ventana 1 para explorar tus buckets de Amazon S3 mientras la Ventana 2 muestra tu Google Drive. Arrastra archivos entre ventanas para activar copias entre proveedores, o supervisa el contenido de ambos proveedores simultáneamente durante una migración.

**Supervisión de trabajos junto con navegación de archivos:** Mantén la Ventana 1 mostrando la pestaña Transferring con el progreso del trabajo activo mientras la Ventana 2 te permite navegar por otra nube o configurar el siguiente trabajo, sin necesidad de cambiar de pestaña ni interrumpir tu vista de supervisión.

**Comparación de carpetas en una ventana dedicada:** Ejecuta una operación de Comparación de Carpetas grande en la Ventana 1 (que puede tardar tiempo en carpetas de nube extensas) mientras sigues trabajando con archivos en la Ventana 2. La comparación se ejecuta de forma independiente sin bloquear tus otras actividades.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Running folder comparison in one window while browsing another in RcloneView" class="img-large img-center" />

**Flujos de trabajo multiusuario o multiproyecto:** Los profesionales que gestionan almacenamiento en la nube para varios clientes o proyectos pueden dedicar una ventana a cada uno, manteniendo abiertas vistas específicas de contexto simultáneamente en lugar de navegar repetidamente entre remotos.

## Combinando Múltiples Ventanas con el Diseño de Paneles

Dentro de cada ventana, el diseño de paneles (de 1 a 4 paneles, división horizontal o vertical) es configurable de forma independiente a través de la pestaña Settings > Layout / View count. Una configuración de múltiples ventanas con 2 ventanas de 2 paneles cada una te ofrece efectivamente cuatro paneles Explorer concurrentes en dos espacios de trabajo organizados.

Esta combinación es especialmente útil para flujos de trabajo de sincronización: la Ventana 1 muestra los paneles de origen y destino con un trabajo de sincronización en curso; la Ventana 2 muestra un segundo par origen-destino para un trabajo de sincronización diferente. Ambos trabajos se ejecutan en paralelo sin compartir estado de visualización.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Multiple parallel sync operations in RcloneView multi-window mode" class="img-large img-center" />

## Primeros Pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html) y activa una licencia PLUS.
2. Haz clic en el botón **New Window** en la pestaña Home para abrir una segunda ventana independiente.
3. Navega cada ventana hacia un remoto o tarea diferente para trabajar en paralelo.
4. Personaliza el número de paneles por ventana en Settings > Layout para lograr el diseño más eficiente para tu flujo de trabajo.

Múltiples Ventanas transforma RcloneView de un gestor de archivos de una sola tarea en un espacio de trabajo paralelo para profesionales del almacenamiento en la nube que gestionan varios proveedores, proyectos u operaciones en curso simultáneamente.

---

**Guías Relacionadas:**

- [Consejos de Productividad del Explorer de Dos Paneles para RcloneView](https://rcloneview.com/support/blog/two-pane-explorer-productivity-tips-rcloneview)
- [Gestiona Múltiples Cuentas en la Nube con RcloneView](https://rcloneview.com/support/blog/manage-multiple-cloud-accounts-with-rcloneview)
- [Unifica Todas las Nubes — Gestiona Google Drive, Dropbox y OneDrive](https://rcloneview.com/support/blog/unify-all-clouds-manage-google-drive-dropbox-onedrive)

<CloudSupportGrid />
