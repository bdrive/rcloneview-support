---
slug: combine-remote-merge-cloud-folders-rcloneview
title: "Combine Remote — Fusiona Varias Carpetas en la Nube en un Solo Árbol en RcloneView"
authors:
  - alex
description: "Usa el remoto Combine de RcloneView para fusionar carpetas de distintos proveedores de nube en un único árbol de carpetas virtual."
keywords:
  - combine remote rclone
  - fusionar carpetas en la nube
  - remoto virtual RcloneView
  - unificar múltiples almacenamientos en la nube
  - rclone combine backend
  - estructura de carpetas multi-nube
  - árbol de archivos virtual en la nube
  - remotos virtuales de RcloneView
  - organizar carpetas de almacenamiento en la nube
  - fusión de carpetas entre proveedores
tags:
  - feature
  - multi-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Combine Remote — Fusiona Varias Carpetas en la Nube en un Solo Árbol en RcloneView

> Deja de saltar entre cinco pestañas de remotos: el remoto Combine de RcloneView une carpetas de distintos proveedores de nube en un único árbol de carpetas virtual.

Imagina un estudio de producción de vídeo que guarda el material bruto en Google Drive, los archivos del proyecto en Dropbox y los renders finales en Backblaze B2. Cada remoto funciona bien por separado, pero averiguar "dónde está el montaje maestro del Proyecto X" implica revisar tres pestañas cada vez. El remoto Combine de RcloneView —uno de los envoltorios de remotos virtuales de rclone— resuelve esto presentando varias carpetas de origen como subdirectorios con nombre dentro de un único remoto virtual, de modo que toda la producción vive bajo una sola raíz sin mover físicamente ningún archivo.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Qué Hace Realmente el Remoto Combine

Combine es distinto de Union, que fusiona varias fuentes en una vista unificada donde los archivos parecen compartir un único directorio. Combine, en cambio, asigna cada remoto de origen (o una subcarpeta específica dentro de uno) a un subdirectorio con nombre en el árbol virtual resultante, de modo que `footage:` y `renders:` aparecen como `production/footage` y `production/renders` bajo un mismo remoto, completamente separados pero navegables en conjunto. Nada se copia ni se duplica; RcloneView enruta las lecturas y escrituras directamente al remoto original en tiempo real.

<img src="/support/images/en/blog/new-remote.png" alt="Creating a Combine virtual remote in RcloneView" class="img-large img-center" />

## Configurar un Remoto Combine en RcloneView

Desde la pestaña Remote, abre Remote Manager y crea un nuevo remoto de tipo Combine. Asigna cada remoto de origen (o remote:path) al nombre de subdirectorio bajo el que quieres que aparezca en el árbol combinado, y guarda. El resultado aparece en el panel Explorer como cualquier otro remoto: al expandirlo, cada fuente asignada aparece como su propia carpeta de nivel superior, lista para las mismas operaciones de copiar, mover y arrastrar y soltar que usarías en un remoto nativo. RcloneView monta y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux, así que un remoto Combine construido a partir de carpetas de Google Drive, Dropbox y B2 se comporta igual sin importar el sistema operativo que estés usando.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browsing a Combine remote's merged folder structure" class="img-large img-center" />

## Casos de Uso Prácticos

Más allá de la producción de medios, los remotos Combine sirven a cualquiera que haya ido acumulando cuentas en la nube de forma orgánica: un estudio fotográfico con archivos RAW repartidos entre un antiguo plan de Dropbox y un bucket de S3 más reciente, o un pequeño equipo cuyos contratos viven en SharePoint mientras las facturas están en Google Drive. Envolver ambos bajo un mismo remoto Combine significa que un solo trabajo de Folder Compare o Sync puede apuntar a toda la estructura lógica en lugar de ejecutar trabajos separados por proveedor, y el Job History muestra un rastro consolidado en lugar de varios registros desconectados.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a sync job against a Combine remote" class="img-large img-center" />

## Combine frente a Otros Remotos Virtuales

Es fácil recurrir al envoltorio equivocado. Alias simplemente le da un nombre corto a una ruta profundamente anidada, sin fusión alguna. Union mezcla varias fuentes en algo que parece una única carpeta compartida, útil para agrupar niveles de almacenamiento gratuito. Crypt cifra los nombres de archivos y carpetas sobre un remoto existente. Combine es el que hay que elegir específicamente cuando quieres mantener fuentes distintas separadas pero navegables desde una única raíz.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a Combine remote from Mount Manager" class="img-large img-center" />

## Primeros Pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html) si aún no lo has hecho.
2. Añade los remotos individuales que quieres combinar (pestaña Remote > New Remote) si aún no están configurados.
3. Crea un nuevo remoto Combine en Remote Manager y asigna cada fuente de origen a un nombre de subdirectorio.
4. Explora el árbol combinado en el panel Explorer y ejecuta tu primer trabajo de Compare o Sync sobre él.

Una vez que tus cuentas en la nube dispersas se encuentren bajo un mismo remoto Combine, la estructura de carpetas deja de ser un impuesto que pagas cada vez que necesitas encontrar un archivo.

---

**Guías Relacionadas:**

- [Union Remote — Combina Almacenamiento Gratuito Entre Proveedores en RcloneView](https://rcloneview.com/support/blog/union-remote-combine-free-storage-rcloneview)
- [Remotos Virtuales — Combine, Union y Alias Explicados](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [Alias Remote — Rutas de Acceso Rápido en RcloneView](https://rcloneview.com/support/blog/alias-remote-shortcut-paths-rcloneview)

<CloudSupportGrid />
