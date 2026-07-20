---
slug: mount-digitalocean-spaces-local-drive-rcloneview
title: "Monta DigitalOcean Spaces como una unidad local para un acceso sencillo a tus archivos con RcloneView"
authors:
  - tayson
description: "Accede a tu almacenamiento de objetos DigitalOcean Spaces como si fuera una carpeta normal — móntalo como una unidad local, arrastra y suelta archivos, y sincroniza con otras nubes usando RcloneView."
keywords:
  - digitalocean spaces mount
  - digitalocean spaces local drive
  - spaces s3 compatible mount
  - digitalocean spaces gui
  - digitalocean spaces file manager
  - mount object storage local drive
  - digitalocean spaces sync
  - digitalocean spaces backup
  - spaces rclone gui
  - digitalocean spaces desktop
tags:
  - RcloneView
  - digitalocean-spaces
  - cloud-storage
  - mount
  - s3-compatible
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Monta DigitalOcean Spaces como una unidad local para un acceso sencillo a tus archivos con RcloneView

> DigitalOcean Spaces es genial para almacenar recursos, pero acceder a los archivos a través de la consola web es lento y engorroso. ¿Qué pasaría si pudieras navegar por tu bucket de Spaces como una carpeta normal en tu escritorio?

DigitalOcean Spaces ofrece almacenamiento de objetos compatible con S3 a precio asequible, pero el panel web no está pensado para la gestión diaria de archivos. Subir carpetas, organizar archivos o previsualizar contenido rápidamente implica un cambio constante de pestañas del navegador. RcloneView te permite montar cualquier bucket de Spaces como una unidad local — navega, arrastra y suelta, y sincroniza archivos con la misma naturalidad que trabajar con tu sistema de archivos local.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ¿Por qué montar DigitalOcean Spaces localmente?

Spaces funciona bien como almacenamiento de backend para aplicaciones, pero cuando las personas necesitan interactuar con él directamente:

- **La consola web es lenta** — Navegar por buckets grandes con miles de archivos resulta tedioso. No hay renombrado masivo, ni vista previa rápida, ni arrastrar y soltar.
- **Las herramientas de línea de comandos requieren memorizar comandos** — `s3cmd` y `aws s3` funcionan, pero no todo el mundo quiere escribir comandos para operaciones básicas de archivos.
- **Sin integración nativa de escritorio** — A diferencia de Dropbox o Google Drive, Spaces no tiene un cliente de sincronización de escritorio.

Montar Spaces como una unidad local resuelve los tres problemas. Tu bucket aparece como una carpeta en tu gestor de archivos — abre archivos, copia carpetas, elimina elementos, todo con herramientas familiares.

## Configurar DigitalOcean Spaces como remoto

Como Spaces es compatible con S3, la configuración en RcloneView utiliza el tipo de proveedor S3:

1. Abre RcloneView y haz clic en **Add Remote**.
2. Selecciona **Amazon S3** como tipo de proveedor (Spaces usa la API de S3).
3. Elige **DigitalOcean Spaces** en el menú desplegable de proveedores S3.
4. Introduce tus credenciales:
   - **Access Key** y **Secret Key** de la configuración de la API de DigitalOcean.
   - **Region**: Tu región de Spaces (por ejemplo, `nyc3`, `sfo3`, `ams3`, `sgp1`).
   - **Endpoint**: `https://{region}.digitaloceanspaces.com`
5. Guarda el remoto — tus buckets de Spaces ya son navegables.

<img src="/support/images/en/blog/new-remote.png" alt="Add DigitalOcean Spaces as S3-compatible remote" class="img-large img-center" />

## Montar Spaces como una unidad local

Una vez conectado, montar tu bucket de Spaces como una unidad local solo requiere unos pocos clics:

1. Navega hasta tu remoto de Spaces en el Explorador.
2. Haz clic derecho en el bucket o carpeta que quieres montar.
3. Selecciona **Mount** en el menú contextual.
4. Elige un punto de montaje local (letra de unidad en Windows, ruta de montaje en Mac/Linux).
5. Haz clic en **Mount** — tu bucket de Spaces ahora aparece como una unidad local.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount DigitalOcean Spaces from Explorer" class="img-large img-center" />

Alternativamente, usa el Mount Manager para tener más control sobre las opciones de montaje:

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure Spaces mount in Mount Manager" class="img-large img-center" />

### Qué puedes hacer con la unidad montada

- **Abrir archivos directamente** — Haz doble clic en imágenes, documentos o vídeos para abrirlos con tus aplicaciones predeterminadas.
- **Copiar y pegar** — Mueve archivos entre tu sistema de archivos local y Spaces usando el gestor de archivos de tu sistema operativo.
- **Arrastrar y soltar** — Arrastra archivos desde tu escritorio a la unidad montada.
- **Usar en aplicaciones** — Apunta aplicaciones como Photoshop, VS Code o editores de vídeo directamente a los archivos de la unidad montada.

## Explorar y gestionar archivos

Incluso sin montar, el Explorador de dos paneles de RcloneView te ofrece un potente gestor de archivos para Spaces:

- **Navega por buckets y carpetas** con una navegación en árbol familiar.
- **Arrastra y suelta** archivos entre Spaces y cualquier otro remoto (Google Drive, S3, disco local).
- **Crea, renombra y elimina** archivos y carpetas.
- **Consulta tamaños y fechas de archivo** para una gestión sencilla.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files to DigitalOcean Spaces" class="img-large img-center" />

## Sincronizar Spaces con otras nubes

DigitalOcean Spaces no existe de forma aislada. Los flujos de trabajo habituales incluyen:

### Sincronizar Spaces ↔ AWS S3

Mantén una copia de seguridad de tus datos de Spaces en AWS S3 (o viceversa):

1. Crea un trabajo de Sync con Spaces como origen y S3 como destino.
2. Prográmalo para que se ejecute cada noche.
3. Usa [Folder Comparison](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents) para verificar que ambos lados coinciden.

### Sincronizar Spaces ↔ carpeta local de desarrollo

Mantén una copia local de tus recursos de Spaces para desarrollo:

1. Crea un trabajo de Sync desde Spaces a una carpeta local.
2. Haz los cambios localmente y luego sincronízalos de vuelta a Spaces.

### Distribuir desde Spaces a varias nubes

Usa los [Batch Jobs](https://rcloneview.com/support/blog/batch-jobs-run-multiple-cloud-tasks-rcloneview) de la v1.3 para copiar contenido de Spaces a Google Drive, OneDrive y S3 en una única secuencia automatizada.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Sync DigitalOcean Spaces with other clouds" class="img-large img-center" />

## Automatizar los flujos de trabajo de Spaces

### Copias de seguridad programadas

Configura un trabajo de Copy diario desde tu bucket de Spaces a otra nube o almacenamiento local:

1. Crea el trabajo en el Job Manager.
2. Prográmalo mediante [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution).
3. Recibe notificaciones por [Slack](https://rcloneview.com/support/blog/rcloneview-slack-remote-control) o [Telegram](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control).

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule DigitalOcean Spaces sync jobs" class="img-large img-center" />

### Consejos de rendimiento

- **Transferencias paralelas**: 8–16 (Spaces gestiona bien la concurrencia alta).
- **Tamaño de fragmento (chunk size)**: 64 MB para archivos grandes.
- **Fast-list**: Actívalo para un listado de directorios más rápido en buckets grandes.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Añade Spaces** como remoto compatible con S3 usando tus claves de API.
3. **Monta** tu bucket como unidad local o navégalo en el Explorador.
4. **Sincroniza o crea copias de seguridad** hacia otras nubes con trabajos programados.

Deja de luchar con la consola web. Monta tu DigitalOcean Spaces como una unidad local y trabaja con tus archivos de la misma forma en que trabajas con todo lo demás — desde tu escritorio.

---

**Guías relacionadas:**

- [Añadir AWS S3 y almacenamiento compatible con S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Montar almacenamiento en la nube como unidad local](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [Explorar y gestionar remotos](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Comparar contenido de carpetas](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Programación de trabajos](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
