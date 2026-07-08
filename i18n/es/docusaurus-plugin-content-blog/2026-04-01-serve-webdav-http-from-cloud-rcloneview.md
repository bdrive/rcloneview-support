---
slug: serve-webdav-http-from-cloud-rcloneview
title: "Sirve almacenamiento en la nube como WebDAV o HTTP con RcloneView"
authors:
  - tayson
description: "Usa el comando serve de rclone a través de RcloneView para exponer almacenamiento en la nube como un servidor local WebDAV o HTTP. Accede a archivos en apps compatibles con WebDAV sin necesidad de montar una unidad."
keywords:
  - rclone serve webdav
  - expose cloud storage webdav
  - rcloneview serve http
  - cloud storage webdav server
  - rclone webdav local server
  - access cloud via webdav
  - serve google drive webdav
  - rclone serve command guide
  - webdav from cloud storage
  - rcloneview serve feature
tags:
  - RcloneView
  - webdav
  - cloud-storage
  - feature
  - guide
  - self-hosted
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sirve almacenamiento en la nube como WebDAV o HTTP con RcloneView

> RcloneView puede exponer cualquier proveedor de almacenamiento en la nube como un servidor local WebDAV o HTTP. Cualquier app compatible con WebDAV — administradores de archivos, herramientas DAM, apps creativas, clientes móviles — puede entonces leer y escribir archivos en la nube directamente.

Montar una unidad en la nube con la capa VFS de rclone es la forma más común de exponer almacenamiento en la nube localmente. Pero algunos escenarios requieren un enfoque diferente: un servidor WebDAV al que las aplicaciones puedan conectarse a través de la red, un servidor HTTP simple para servir archivos a un navegador, o una forma ligera de acceder al almacenamiento en la nube desde un dispositivo que no puede montar unidades FUSE. El comando `serve` de rclone maneja todos estos casos — y RcloneView te da acceso a él a través de la interfaz de terminal y trabajos.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Qué puede servir rclone

Rclone admite múltiples protocolos de servidor a través del comando `rclone serve`:

| Protocolo | Caso de uso |
|----------|----------|
| `webdav` | Administradores de archivos, herramientas DAM, apps con soporte WebDAV |
| `http` | Acceso de solo lectura desde el navegador a archivos en la nube |
| `ftp` | Compatibilidad con apps antiguas |
| `sftp` | Acceso seguro a archivos basado en shell |
| `s3` | Expone cualquier nube como compatible con S3 (usar con clientes S3) |
| `dlna` | Streaming de medios a dispositivos compatibles con DLNA |

Esta guía se centra en WebDAV y HTTP, los más útiles para flujos de trabajo de escritorio.

## Caso de uso 1: WebDAV para integración de apps

Muchas aplicaciones profesionales admiten WebDAV de forma nativa: Cyberduck, Finder (macOS), Adobe Bridge, herramientas DAM, herramientas de gestión de proyectos, y más. Exponer tu almacenamiento en la nube como WebDAV lo hace accesible a estas apps sin necesidad de montar una unidad.

### Inicia un servidor WebDAV desde RcloneView

Abre el panel **Terminal** en RcloneView y ejecuta:

```bash
rclone serve webdav gdrive:/Documents/ --addr 127.0.0.1:8888 --user myuser --pass mypassword
```

Esto inicia un servidor WebDAV en `http://127.0.0.1:8888` exponiendo tu carpeta `/Documents/` de Google Drive.

<img src="/support/images/en/blog/new-remote.png" alt="Open RcloneView terminal to start serve command" class="img-large img-center" />

### Conéctate desde una app

En cualquier app compatible con WebDAV, agrega una conexión WebDAV:
- **URL**: `http://127.0.0.1:8888`
- **Usuario**: `myuser`
- **Contraseña**: `mypassword`

La app verá tu carpeta Documents de Google Drive como un recurso compartido WebDAV — navegable, legible y con permisos de escritura.

## Caso de uso 2: HTTP para acceso de solo lectura desde el navegador

Para compartir archivos con colegas sin darles acceso a la cuenta en la nube, sirve una carpeta como HTTP:

```bash
rclone serve http s3-remote:my-bucket/reports/ --addr 0.0.0.0:8080
```

Cualquier persona en la red puede abrir `http://your-machine-ip:8080` en un navegador y ver un listado de directorios con enlaces de descarga — sin necesidad de cuenta en la nube.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Browse served cloud files in browser" class="img-large img-center" />

## Caso de uso 3: Servir S3 para compatibilidad con clientes S3

Una técnica poderosa: exponer una nube que no es S3 (como Google Drive o la API nativa de Backblaze B2) como un endpoint compatible con S3, de modo que cualquier cliente S3 pueda acceder a ella:

```bash
rclone serve s3 gdrive:/Backups/ --addr 127.0.0.1:9000 --auth-key ACCESSKEY,SECRETKEY
```

Los clientes S3 (AWS CLI, s3cmd, cualquier SDK de S3) pueden entonces conectarse a `http://127.0.0.1:9000` e interactuar con Google Drive como si fuera S3.

## Crear un trabajo de servidor persistente

Para ejecutar un comando serve al inicio o según una programación:

1. En RcloneView, crea un nuevo **Trabajo** con el modo **Comando personalizado**.
2. Ingresa tu comando `rclone serve webdav` con los flags deseados.
3. Configúralo para que inicie automáticamente cuando se lance RcloneView, o prográmalo según sea necesario.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule serve job to run on startup" class="img-large img-center" />

## Consideraciones de seguridad

| Escenario | Recomendación |
|----------|---------------|
| Solo uso local | Enlaza a `127.0.0.1` — no accesible fuera de tu máquina |
| Compartir en LAN | Enlaza a la IP local de tu máquina, agrega `--user` y `--pass` |
| Expuesto a internet | Usa HTTPS (agrega los flags `--cert` y `--key`) o colócalo detrás de un proxy inverso |
| Servidor HTTP público | Usa `rclone serve http` con VFS de solo lectura: agrega `--read-only` |

Siempre establece un usuario/contraseña para cualquier servidor accesible más allá de `127.0.0.1`:

```bash
rclone serve webdav remote:path --addr 0.0.0.0:8888 --user admin --pass strongpassword --read-only
```

## Flags útiles de serve

| Flag | Propósito |
|------|---------|
| `--addr host:port` | Dirección y puerto de enlace |
| `--user` / `--pass` | Autenticación básica HTTP |
| `--read-only` | Evitar escrituras |
| `--vfs-cache-mode full` | Almacena archivos en caché localmente para mejor rendimiento |
| `--no-modtime` | Desactiva el reporte de fecha de modificación (útil para algunas apps) |
| `--htpasswd /path/file` | Usa un archivo htpasswd para múltiples usuarios |

## Cómo empezar

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Abre la Terminal** en RcloneView.
3. **Ejecuta `rclone serve webdav remote:path --addr 127.0.0.1:8888`** para iniciar un servidor WebDAV.
4. **Conéctate desde tu app** usando la URL WebDAV y las credenciales.

WebDAV desbloquea el acceso al almacenamiento en la nube para decenas de apps que de otro modo no podrían leer tus archivos en la nube. No se requiere montaje.

---

**Guías relacionadas:**

- [Montar almacenamiento en la nube como una unidad local](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)
- [Montar SFTP y SMB como unidades locales](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [Terminal de RcloneView: CLI dentro de la GUI](https://rcloneview.com/support/blog/rcloneview-terminal-rclone-cli-inside-gui)

<CloudSupportGrid />
