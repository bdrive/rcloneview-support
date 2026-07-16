---
slug: mount-sftp-smb-local-drive-rcloneview
title: "Monta almacenamiento SFTP o SMB como unidades locales con RcloneView — Integración de nube autoalojada"
authors:
  - tayson
description: Convierte cualquier servidor SFTP o SMB en una unidad local de primera clase con los montajes GUI de RcloneView, la caché VFS y el panel unificado multi-nube en Windows, macOS y Linux.
keywords:
  - rcloneview
  - rclone mount gui
  - mount smb windows
  - mount sftp mac
  - nas remote access
  - self hosted cloud
  - vfs cache
  - winfsp
  - macfuse
  - mount network drive
tags:
  - RcloneView
  - mount
  - sftp
  - smb
  - nas
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Monta almacenamiento SFTP o SMB como unidades locales con RcloneView — Integración de nube autoalojada

> Haz que tu NAS, servidor doméstico o servidor de archivos de oficina se comporte como Google Drive: monta SFTP o SMB como una letra de unidad real o una ruta `/Volumes` con caché, buffering y una GUI.

SFTP y SMB son la columna vertebral del almacenamiento autoalojado: NAS Synology/QNAP, servidores domésticos, VPS y servidores de archivos corporativos dependen de ellos. Pero montarlos de forma fiable en Windows, macOS y Linux suele implicar peculiaridades específicas del sistema operativo, autenticación frágil, ausencia de controles de caché y ninguna vista unificada con tus nubes.

RcloneView soluciona esto. Envuelve `rclone mount` en una aplicación de escritorio amigable para que tus recursos compartidos SFTP/SMB se comporten como unidades de nube modernas, con caché VFS, transmisión de miniaturas, ajustes de buffering y automatización.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Entendiendo SFTP frente a SMB

| Característica       | SFTP                                  | SMB                                          |
| --------------------- | -------------------------------------- | ---------------------------------------------- |
| Protocolo              | Basado en SSH                          | Recurso compartido de red de Windows           |
| Mejor uso              | Servidores remotos, seguro sobre WAN   | Compartición de archivos en LAN, red local     |
| Velocidad              | Moderada (cifrado)                     | Muy rápida en LAN                              |
| Seguridad              | Fuerte por defecto                     | Depende de la versión/política                 |
| Soporte de SO          | Universal                              | Mejor en Windows/macOS, sólido en Linux        |

¿Cuándo elegir cuál?

- **SFTP**: VPS a través de internet, acceso de confianza cero, laboratorio doméstico con reenvío de puertos, desarrolladores que descargan configuraciones.
- **SMB**: LAN de oficina, NAS de alto rendimiento, unidades compartidas para equipos, edición de medios de baja latencia dentro de la red.

RcloneView soporta ambos, junto con Google Drive, S3, Dropbox, OneDrive y más, gestionados desde el mismo panel.

## Por qué usar RcloneView para montar SFTP/SMB

- **No requiere CLI**: todas las opciones de `rclone mount` se generan en la GUI; consulta [Gestor de remotos](/howto/rcloneview-basic/remote-manager) para los remotos y [Montar almacenamiento en la nube como unidad local](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive) para montajes guiados.
- **Multiplataforma**: Windows (WinFsp), macOS (macFUSE), Linux (FUSE) con una interfaz consistente.
- **Montajes locales reales**: letras de unidad en Windows o `/Volumes/Server` en macOS; puntos de montaje estándar en Linux.
- **Listo para rendimiento**: caché VFS, transmisión de miniaturas, controles de buffering y ajuste de lectura anticipada disponibles en el diálogo de montaje.
- **Control unificado**: gestiona SFTP/SMB junto con el almacenamiento en la nube, programa remontajes y monitoriza el rendimiento en un solo lugar (consulta [Programación y ejecución de tareas](/howto/rcloneview-advanced/job-scheduling-and-execution) y [Monitorización de transferencias en tiempo real](/howto/rcloneview-basic/real-time-transfer-monitoring)).

## Paso a paso — Monta SFTP o SMB con RcloneView

### 1) Añadir remoto (SFTP o SMB)

- Abre **Gestor de remotos** → **Añadir remoto** → elige **SFTP** o **SMB**.
- Introduce **Host/IP** y **Puerto**.
- Autentícate con **Usuario/Contraseña** o **Clave SSH** para SFTP. Para SMB, configura el dominio/usuario si es necesario.
- Guarda el remoto; considera activar una contraseña de configuración en [Configuración general](/howto/rcloneview-basic/general-settings).
  <img src="/support/images/en/blog/add-sftp-remote.png" alt="Add SFTP Remote" class="img-large img-center" />

### 2) Crear una tarea de montaje

- En **Gestor de montajes** o en la barra de herramientas del Explorador, haz clic en **Montar**.
- Selecciona tu remoto SFTP/SMB y elige el destino:
  - Windows → `X:` (o cualquier letra de unidad libre)
  - macOS → `/Volumes/ServerName`
  - Linux → `/mnt/server` o la ruta que prefieras

### 3) Configurar la caché VFS y los buffers

- **Modo de caché**: `Full` para una navegación fluida y transmisión de miniaturas (ideal para fotos/Plex).
- **Directorio de caché**: apunta a una carpeta en SSD.
- **Lectura anticipada**: 4–8 MB para el escaneo de medios; aumenta para vídeo 4K.
- **Escritura diferida/Buffering**: actívalo para escrituras secuenciales grandes; limita el ancho de banda si compartes enlaces.

### 4) Montar y probar

- Haz clic en **Montar** y abre Finder/Explorador/Archivos.
- Navega por las carpetas; previsualiza imágenes y transmite vídeos para verificar la caché.
- Mantén guardada la entrada de montaje para que se reconecte automáticamente tras reiniciar (activa **Montaje automático**).

<img src="/support/images/en/blog/mount-sftp.png" alt="Mount SFTP/SMB from RcloneView Explorer" class="img-large img-center" />

## Casos de uso

- **Acceso remoto a NAS**: trata tu NAS como una unidad de nube desde cualquier sistema operativo.
- **Local ↔ nube ↔ autoalojado**: mueve archivos entre SFTP/SMB y Google Drive/S3/Dropbox en una sola interfaz.
- **Integración de unidades compartidas de oficina**: mapea recursos compartidos departamentales con miniaturas en caché para equipos de diseño.
- **Edición de medios**: edita vídeo/fotos directamente desde el NAS con caché VFS para evitar redescargas.
- **Concentrador multiservidor**: monta varios servidores SFTP/SMB uno junto a otro y arrastra y suelta entre ellos.

## Consejos de rendimiento

- Configura **Modo de caché: Full** para cargas de trabajo intensivas en medios (Plex/Fotos).
- Usa un **directorio de caché NVMe/SSD** para acelerar las miniaturas y el escaneo.
- Aumenta la **lectura anticipada** y el **tamaño de buffer** para lecturas/escrituras secuenciales grandes.
- Prefiere **LAN** para SMB cuando el rendimiento importe; para SFTP sobre WAN, usa claves SSH para mayor estabilidad.
- Monitoriza las transferencias en [Monitorización de transferencias en tiempo real](/howto/rcloneview-basic/real-time-transfer-monitoring) y programa remontajes mediante [Programación y ejecución de tareas](/howto/rcloneview-advanced/job-scheduling-and-execution).

## Conclusión — Lo autoalojado se encuentra con la multi-nube

SFTP y SMB ya no tienen por qué sentirse como unidades de red anticuadas. Con RcloneView obtienes montajes con la comodidad de la nube, caché inteligente y un panel unificado que combina NAS, VPS y nubes públicas sin scripts. Añade tu servidor una vez, elige una letra de unidad o una ruta `/Volumes`, y deja que RcloneView mantenga el montaje activo mientras tú te concentras en tus archivos.

<CloudSupportGrid />
