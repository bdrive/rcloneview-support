---
slug: virtual-remotes-combine-union-alias-rcloneview
title: "Remotos virtuales de RcloneView: Combine, Union y Alias para crear un único espacio de trabajo multicloud"
authors:
  - tayson
description: "Usa los remotos virtuales de RcloneView para unificar carpetas multicloud sin copiar datos. Aprende cuándo elegir Alias, Combine o Union y cómo crear flujos de trabajo más limpios."
keywords:
  - virtual remote
  - combine remote
  - union remote
  - alias remote
  - multi cloud viewer
  - rcloneview virtual remote
  - cloud workspace
  - multi cloud management
  - rcloneview workflow
  - cloud file organization
tags:
  - RcloneView
  - cloud-storage
  - file-management
  - sync
  - multi-cloud
---

import RvCta from '@site/src/components/RvCta';

# Remotos virtuales de RcloneView: Combine, Union y Alias para crear un único espacio de trabajo multicloud

> La dispersión multicloud dificulta encontrar carpetas. Los remotos virtuales de RcloneView te permiten unificar vistas sin mover ni duplicar un solo archivo.

Los remotos virtuales son una de las formas más rápidas de ordenar tu flujo de trabajo multicloud. En lugar de saltar entre pestañas o reconfigurar tareas, puedes crear una vista virtual que apunte a remotos y carpetas existentes. Tus datos originales se quedan exactamente donde están, pero tu espacio de trabajo se vuelve más fácil de navegar y automatizar.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué importan los remotos virtuales

- Deja de bucear en rutas profundas cada vez que ejecutas una tarea o comparas carpetas.
- Presenta múltiples nubes como un solo espacio de trabajo sin copiar datos.
- Mantén tu organización consistente en Explorer, Compare, Sync y Jobs.

## ¿Qué son los remotos virtuales en RcloneView?

Los remotos virtuales se sitúan encima de remotos y carpetas existentes. No almacenan datos por sí mismos. En cambio, apuntan a ubicaciones que ya tienes y las presentan como una vista nueva y más limpia.

Créalos desde **New Remote → Virtual**:

- **Alias**: un acceso directo a una carpeta profunda.
- **Combine**: una única vista que lista varias carpetas una junto a otra.
- **Union**: una única vista fusionada que combina varias carpetas entre sí.

<img src="/support/images/en/blog/new-remote.png" alt="New Remote screen" class="img-large img-center" />

## Remoto Alias: acceso instantáneo a carpetas profundas

**Ideal para**: carpetas de acceso directo que abres todos los días.

Alias es un marcador. Abre una carpeta específica al instante, lo cual es perfecto para tareas recurrentes o rutas compartidas del equipo.

Ejemplo: marca una carpeta compartida del equipo como `Drive:Team/Projects/Client-A` y ábrela como `Alias_ClientA`.

<img src="/support/images/en/howto/remote-storage-connection-settings/alias/new-remote-add-alias.png" alt="Add alias remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-alias-file-browser.png" alt="Alias remote file browser" class="img-large img-center" />

Guía: [/support/howto/remote-storage-connection-settings/alias-remote](/howto/remote-storage-connection-settings/alias-remote)

## Remoto Combine: una vista, varias carpetas

**Ideal para**: paneles y colecciones de proyectos.

Combine muestra carpetas una junto a otra dentro de un único remoto. Cada carpeta conserva su estructura original, pero las navegas todas en un solo lugar.

Ejemplo: crea un remoto Combine `Marketing_Assets` que contenga:

- `Drive:Marketing`
- `Dropbox:Assets`

<img src="/support/images/en/howto/remote-storage-connection-settings/combine/new-remote-add-combine.png" alt="Add combine remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-check-folder-1.png" alt="Combine view example" class="img-large img-center" />

Guía: [/support/howto/remote-storage-connection-settings/combine-remote](/howto/remote-storage-connection-settings/combine-remote)

## Remoto Union: una carpeta fusionada entre nubes

**Ideal para**: archivos agrupados o ingesta multiorigen.

Union fusiona varias carpetas en una única vista combinada. Es ideal cuando quieres que todo parezca una sola carpeta, aunque los archivos estén en distintas nubes.

Ejemplo: combina el material bruto mensual de dos remotos en una única vista `Raw_Footage`.

<img src="/support/images/en/howto/remote-storage-connection-settings/union/new-remote-add-union.png" alt="Add union remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/union/union-check-folder-1.png" alt="Union view example" class="img-large img-center" />

Guía: [/support/howto/remote-storage-connection-settings/union-remote](/howto/remote-storage-connection-settings/union-remote)

## Guía rápida de decisión: Alias vs Combine vs Union

| Necesidad | Elige | Por qué |
| --- | --- | --- |
| Saltar rápido a una carpeta profunda | **Alias** | Acceso directo único a una ruta específica |
| Ver varias carpetas una junto a otra | **Combine** | Conserva la estructura de carpetas separada |
| Tratar varias carpetas como una sola | **Union** | Vista fusionada para datos agrupados |

## Flujos de trabajo prácticos con remotos virtuales

- **Comparar antes de sincronizar**: ejecuta Compare en una vista Combine o Union para ver primero las diferencias.  
  Guía: [/support/howto/rcloneview-basic/compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents)
- **Sincronizar entre varias fuentes**: sincroniza un remoto Union con un destino de copia de seguridad para reflejar un archivo combinado.  
  Guía: [/support/howto/rcloneview-basic/synchronize-remote-storages](/howto/rcloneview-basic/synchronize-remote-storages)
- **Guarda las tareas una sola vez**: usa Job Manager para programar una sincronización de un remoto virtual y mantenerla en ejecución automática.  
  Guía: [/support/howto/rcloneview-basic/create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs)
- **Montajes opcionales**: monta un remoto virtual y navégalo como una unidad local.  
  Guía: [/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results filters" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-scheduling.png" alt="Add job scheduling" class="img-large img-center" />
</div>
<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount from Remote Explorer" class="img-large img-center" />

## Buenas prácticas y convenciones de nomenclatura

- Usa prefijos claros: `Alias_ProjectX`, `Combine_Marketing`, `Union_Archive`.
- Mantén notas sobre el origen en los nombres de las tareas o en las descripciones de Job Manager.
- Evita mezclar carpetas no relacionadas en un mismo Union para reducir la confusión.
- Usa Combine cuando quieras claridad, Union cuando quieras simplicidad.

## Conclusión

Los remotos virtuales reducen la fricción en los flujos de trabajo multicloud. Alias, Combine y Union te permiten crear un espacio de trabajo limpio sin copiar datos, para que los equipos puedan avanzar más rápido y mantener su estructura intacta. Prueba uno hoy mismo y comprueba lo mucho más fácil que se vuelve tu navegación diaria.
