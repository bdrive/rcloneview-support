---
slug: install-rcloneview-ubuntu-debian-linux
title: "Cómo instalar RcloneView en Ubuntu y Debian Linux — Guía completa de configuración"
authors:
  - tayson
description: "Guía paso a paso para instalar RcloneView en Ubuntu 22.04/24.04 y Debian 12. Cubre descarga, dependencias, configuración de FUSE para montar y solución de problemas comunes."
keywords:
  - install rcloneview linux
  - rcloneview ubuntu
  - rcloneview debian
  - rclone gui linux
  - rcloneview linux setup
  - cloud sync tool linux
  - rclone desktop linux
  - mount cloud storage linux
  - rcloneview installation guide
  - linux cloud file manager
tags:
  - linux
  - ubuntu
  - debian
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cómo instalar RcloneView en Ubuntu y Debian Linux — Guía completa de configuración

> RcloneView funciona de forma nativa en Linux. Esta guía te explica la instalación en Ubuntu y Debian, incluyendo la configuración de FUSE para montar almacenamiento en la nube como unidades locales.

Los usuarios de Linux han confiado durante mucho tiempo en la línea de comandos de rclone para la gestión de almacenamiento en la nube. RcloneView añade una interfaz gráfica completa sobre rclone: explorador de archivos de dos paneles, trabajos de sincronización visuales, programación y montaje con un solo clic. Así es como puedes ponerlo en marcha en Ubuntu y Debian.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Requisitos del sistema

- **SO**: Ubuntu 20.04, 22.04, 24.04 o Debian 11, 12
- **Arquitectura**: x86_64 (AMD64)
- **RAM**: 4 GB como mínimo (8 GB recomendado para transferencias grandes)
- **Disco**: 200 MB para la instalación
- **Dependencias**: FUSE 3 (para montar), bibliotecas de tiempo de ejecución de Qt 6

## Paso 1: Descargar RcloneView

Descarga el paquete `.deb` desde el sitio oficial:

Visita [rcloneview.com/src/download.html](https://rcloneview.com/src/download.html) y descarga el paquete `.deb` para Linux.

## Paso 2: Instalar el paquete

Instala usando `dpkg`:

```bash
sudo dpkg -i rcloneview_*.deb
```

Si faltan dependencias, corrígelas:

```bash
sudo apt-get install -f
```

Esto instala RcloneView y descarga automáticamente las bibliotecas de Qt necesarias.

## Paso 3: Configurar FUSE para montar

Para montar almacenamiento en la nube como directorios locales, necesitas FUSE:

```bash
sudo apt-get install fuse3
```

Verifica que FUSE funciona:

```bash
fusermount3 --version
```

### Permitir montaje sin privilegios de root

Edita la configuración de FUSE:

```bash
sudo nano /etc/fuse.conf
```

Descomenta la línea:

```
user_allow_other
```

Esto permite que RcloneView monte con la opción `--allow-other`, haciendo que las unidades montadas sean accesibles para tu usuario.

## Paso 4: Iniciar RcloneView

Inícialo desde el menú de aplicaciones o la terminal:

```bash
rcloneview
```

En el primer inicio, RcloneView detectará o descargará automáticamente el binario más reciente de rclone.

## Paso 5: Añadir tu primer remoto

Haz clic en **Add Remote** y configura tu proveedor de nube:

<img src="/support/images/en/blog/new-remote.png" alt="Add cloud remote on Linux" class="img-large img-center" />

## Paso 6: Montar almacenamiento en la nube

Monta cualquier remoto como un directorio local. Accede a tu Google Drive, buckets de S3 u OneDrive como si fueran carpetas locales:

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount cloud storage on Linux" class="img-large img-center" />

Los remotos montados aparecen como directorios normales: navégalos en Nautilus, Dolphin o cualquier gestor de archivos.

## Solución de problemas

### "rclone not found"

RcloneView incluye o descarga rclone automáticamente. Si no lo encuentra:

```bash
which rclone
```

Si rclone no está instalado, RcloneView te pedirá que lo descargues. Alternativamente, instálalo manualmente:

```bash
sudo apt-get install rclone
```

### El montaje falla con "Permission denied"

Asegúrate de que FUSE esté instalado y que `user_allow_other` esté habilitado en `/etc/fuse.conf`. Luego reinicia RcloneView.

### Errores de bibliotecas de Qt

Si ves errores de bibliotecas de Qt faltantes:

```bash
sudo apt-get install libqt6widgets6 libqt6gui6 libqt6core6 libqt6network6
```

### Alternativa AppImage

Si prefieres no instalar en todo el sistema, RcloneView también ofrece un AppImage:

```bash
chmod +x RcloneView-*.AppImage
./RcloneView-*.AppImage
```

El AppImage incluye todas las dependencias y se ejecuta sin instalación.

## Inicio automático al iniciar sesión

Para que RcloneView se inicie automáticamente cuando inicias sesión, añádelo al inicio automático de tu entorno de escritorio:

**GNOME (Ubuntu):**

Crea `~/.config/autostart/rcloneview.desktop`:

```ini
[Desktop Entry]
Type=Application
Name=RcloneView
Exec=rcloneview
Hidden=false
X-GNOME-Autostart-enabled=true
```

Esto garantiza que tus trabajos de sincronización programados y unidades montadas estén disponibles en cuanto inicias sesión.

## Qué puedes hacer ahora

Con RcloneView funcionando en Linux, puedes:

- **Explorar** más de 70 proveedores de nube en un explorador de dos paneles.
- **Montar** cualquier nube como un directorio local.
- **Sincronizar** entre nubes, NAS y almacenamiento local.
- **Programar** trabajos de copia de seguridad automatizados.
- **Comparar** carpetas antes de sincronizar para evitar conflictos.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView running on Linux" class="img-large img-center" />

## Cómo empezar

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Instálalo** con `dpkg -i` y `apt-get install -f`.
3. **Configura FUSE** para montar.
4. **Añade remotos**, monta, sincroniza y programa.

---

**Guías relacionadas:**

- [Montar almacenamiento en la nube como una unidad local](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [Crear trabajos de sincronización](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Programación de trabajos](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Comparar contenido de carpetas](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
