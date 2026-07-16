---
slug: sync-internet-archive-cloud-backup-rcloneview
title: "Cómo subir y gestionar colecciones de Internet Archive con RcloneView"
authors:
  - tayson
description: "Internet Archive preserva contenido digital de forma gratuita. Aprende a subir colecciones, sincronizar archivos locales y gestionar tu cuenta de Internet Archive con RcloneView."
keywords:
  - internet archive upload
  - internet archive rclone
  - upload to internet archive
  - internet archive backup
  - internet archive manager
  - internet archive file transfer
  - internet archive collections
  - archive.org upload tool
  - digital preservation cloud
  - internet archive sync
tags:
  - internet-archive
  - digital-preservation
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cómo subir y gestionar colecciones de Internet Archive con RcloneView

> Internet Archive en archive.org es la biblioteca digital gratuita más grande del mundo. Si conservas documentos históricos, medios o conjuntos de datos, RcloneView puede gestionar tus cargas junto con tu otro almacenamiento en la nube.

Internet Archive ofrece almacenamiento gratuito e ilimitado para contenido digital de acceso público: libros, audio, video, software y conjuntos de datos. Muchos investigadores, bibliotecarios y especialistas en preservación digital lo utilizan para el archivo a largo plazo. RcloneView es compatible con Internet Archive como remoto, lo que te permite gestionar cargas junto con tus otras nubes.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ¿Por qué usar Internet Archive?

- **Almacenamiento gratuito** — Sin costo para contenido de acceso público.
- **Preservación permanente** — Diseñado para la preservación digital a largo plazo.
- **Acceso público** — El contenido está disponible libremente para todos.
- **Múltiples formatos** — Compatible con audio, video, texto, imágenes y software.
- **Compatibilidad con DOI** — Referencias citables para contenido académico.

## Configuración de Internet Archive en RcloneView

### Obtener credenciales de API

1. Crea una cuenta en [archive.org](https://archive.org/).
2. Obtén tus claves de API en [archive.org/account/s3.php](https://archive.org/account/s3.php).

### Agregar como remoto

1. Abre RcloneView y haz clic en **Add Remote**.
2. Selecciona **Internet Archive** como tipo.
3. Introduce tu clave de acceso y tu clave secreta.

<img src="/support/images/en/blog/new-remote.png" alt="Add Internet Archive remote" class="img-large img-center" />

## Flujos de trabajo comunes

### Subir colecciones locales

Transfiere libros digitalizados, grabaciones de audio o documentos históricos desde tu almacenamiento local a Internet Archive:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Upload to Internet Archive" class="img-large img-center" />

### Hacer copias de seguridad desde otras nubes

Copia contenido de preservación digital desde Google Drive o S3 a Internet Archive para obtener acceso público permanente.

### Cargas programadas

Para proyectos de digitalización continuos, programa cargas periódicas:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Internet Archive uploads" class="img-large img-center" />

### Verificar las cargas

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Internet Archive uploads" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Agrega Internet Archive** con tus claves de API.
3. **Sube, sincroniza y gestiona** tus colecciones.
4. **Programa cargas** para proyectos de digitalización continuos.

Preserva la historia digital con una herramienta que se conecta a todo.

---

**Guías relacionadas:**

- [Crear trabajos de sincronización](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Programación de trabajos](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Comparar contenido de carpetas](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
