---
slug: cache-remote-accelerate-slow-storage-rcloneview
title: "Cache Remote — Acelera el almacenamiento en la nube lento en RcloneView"
authors:
  - robin
description: "Descubre cómo el remoto virtual cache de RcloneView acelera backends de nube lentos almacenando en caché listados de directorios y datos de archivos, incluida la integración con Plex."
keywords:
  - rclone cache remote
  - configurar cache remote en rcloneview
  - acelerar almacenamiento en la nube lento
  - integración rclone cache con plex
  - acelerar navegación de archivos en la nube
  - remoto virtual cache rclone
  - remotos virtuales de rcloneview
  - solución para almacenamiento en la nube lento
  - caché en la nube para plex media server
  - caché de directorios rclone
tags:
  - RcloneView
  - feature
  - performance
  - plex
  - mount
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cache Remote — Acelera el almacenamiento en la nube lento en RcloneView

> Algunos backends en la nube tardan en listar y volver a listar cada vez que los navegas — el remoto virtual cache soluciona esto recordando lo que ya obtuvo.

No todos los proveedores de almacenamiento responden con rapidez. Los backends con límites estrictos de tasa de la API o alta latencia por solicitud pueden hacer que la navegación se sienta lenta, especialmente en árboles de carpetas grandes o cuando un servidor multimedia como Plex escanea repetidamente la misma biblioteca. RcloneView expone el remoto virtual cache de rclone directamente en el asistente New Remote, permitiéndote envolver un remoto lento en una capa de caché sin tocar un archivo de configuración manualmente.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Qué hace el Cache Remote

El cache remote es un envoltorio, no un tipo de almacenamiento independiente — se sitúa entre RcloneView y un remoto existente que ya has configurado, interceptando los listados de directorios y las lecturas de archivos para que las solicitudes repetidas no vuelvan a llegar al backend. La primera vez que navegas por una carpeta, RcloneView la obtiene del remoto envuelto como de costumbre; la siguiente vez, la caché sirve el resultado localmente, lo cual es especialmente notable en remotos con tiempos de respuesta de API lentos o límites de tasa agresivos.

Esto es distinto del modo de caché VFS integrado en el montaje, que almacena datos en caché solo para una sesión de montaje individual. El remoto virtual cache, en cambio, crea un remoto propio, persistente y con nombre, que puedes navegar, montar o sincronizar directamente, y cuyo estado en caché sobrevive a los reinicios de la aplicación. El caso de uso real más común es combinar un cache remote con la integración de Plex media server, donde el escaneo constante de la biblioteca generaría de otro modo un flujo continuo de llamadas redundantes a la API contra el almacenamiento en la nube subyacente.

<img src="/support/images/en/blog/new-remote.png" alt="Creación de un remoto virtual cache que envuelve un remoto de almacenamiento en la nube existente en RcloneView" class="img-large img-center" />

## Configurar un Cache Remote en RcloneView

Abre la pestaña Remote > New Remote y selecciona Cache entre las opciones de remotos virtuales. Se te pedirá elegir el remoto subyacente a envolver — este debe estar ya configurado en RcloneView, ya sea un proveedor de nube, un bucket compatible con S3 o una conexión basada en protocolo como SFTP o WebDAV. Dale al cache remote un nombre distintivo para que quede claro en Tab Bar y Remote Manager que estás navegando por la versión en caché y no por la conexión original.

Una vez creado, el cache remote aparece en Remote Manager junto a tus demás remotos y se comporta como cualquier otra entrada para navegar, montar o sincronizar. RcloneView monta Y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux, así que un cache remote construido sobre un backend lento obtiene el mismo conjunto de funciones que una conexión nativa — puedes hacer un Dry Run de una sincronización contra él, añadirlo a Job Manager o montarlo como una unidad local.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Montaje de un cache remote desde la barra de herramientas del panel Remote Explorer" class="img-large img-center" />

## Cuándo la caché realmente ayuda

El almacenamiento en caché es más rentable en remotos donde las operaciones de listado son costosas en relación con la cantidad de datos que cambian — grandes bibliotecas de fotos o vídeos escaneadas repetidamente por Plex, árboles de carpetas profundos o proveedores con límites de tasa conservadores que limitan solicitudes sucesivas rápidas. Resulta menos útil en remotos en los que escribes con frecuencia, ya que los archivos modificados necesitan propagarse a través de la caché antes de que otras herramientas los vean de forma consistente.

Si vas a montar un cache remote para streaming multimedia, combínalo con el propio modo de caché VFS del montaje configurado en writes o full — las dos capas de caché trabajan en niveles distintos y se complementan entre sí.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Job Manager mostrando un trabajo de sincronización en ejecución contra un cache remote" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Configura el remoto lento que quieres acelerar, si aún no lo has hecho.
3. Abre New Remote, selecciona Cache y elige ese remoto como el que se va a envolver.
4. Monta o navega por el nuevo cache remote y compara la velocidad de listado en una segunda visita a la misma carpeta.

Un cache remote no hará que tu conexión a internet sea más rápida, pero para patrones de navegación que se repiten — especialmente escaneos de bibliotecas multimedia — convierte un backend lento en uno que se siente instantáneo después de la primera pasada.

---

**Guías relacionadas:**

- [Remotos virtuales en RcloneView — Combine, Union y Alias explicados](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [Streaming en la nube con Plex y RcloneView](https://rcloneview.com/support/blog/plex-cloud-mount-rcloneview)
- [Solución al buffering de Plex — Ajuste de caché VFS en RcloneView](https://rcloneview.com/support/blog/plex-vfs-cache-rcloneview)

<CloudSupportGrid />
