---
slug: mount-azure-blob-storage-local-drive-rcloneview
title: "Monta Azure Blob Storage como una unidad local en Windows y macOS con RcloneView"
authors:
  - tayson
description: Convierte contenedores de Azure Blob en letras de unidad reales o montajes /Volumes con la GUI de RcloneView, la caché VFS y el programador—sin necesidad de scripts de CLI.
keywords:
  - rcloneview
  - azure blob storage mount
  - map azure drive letter
  - mount azure blob mac
  - rclone mount gui
  - azure storage explorer alternative
  - blob to local drive
  - winfsp
  - macfuse
tags:
  - RcloneView
  - azure
  - mount
  - windows
  - macos
unlisted: true
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Monta Azure Blob Storage como una unidad local en Windows y macOS con RcloneView

> Reemplaza scripts y Storage Explorer con un montaje de dos clics: RcloneView convierte los contenedores de Azure Blob en unidades locales reales con caché, buffering y remontaje automático en Windows, macOS y Linux.

Azure Blob es fantástico para descargar contenido multimedia, copias de seguridad y activos estáticos—pero montarlo como una unidad rápida y confiable es complicado. Las opciones de `rclone mount`, las instalaciones de WinFsp/macFUSE, las firmas de acceso compartido (SAS) y los scripts de reconexión se complican rápidamente.

RcloneView envuelve todo en una GUI: agrega tu remoto de Azure una vez, elige una letra de unidad o una ruta `/Volumes`, activa la caché VFS para miniaturas y visualización de medios, y deja que el Programador lo vuelva a montar al iniciar sesión. No se requiere CLI.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Por qué montar Azure Blob con RcloneView en lugar de scripts

- **Cero CLI**: el Administrador de remotos crea tu remoto de Azure y almacena las credenciales de forma segura (consulta [Administrador de remotos](/howto/rcloneview-basic/remote-manager)).
- **Consistencia multiplataforma**: Windows (WinFsp), macOS (macFUSE), Linux (FUSE) con la misma interfaz.
- **Mapeo de unidad real**: letras de unidad en Windows o `/Volumes/Azure` en macOS para cualquier contenedor.
- **Rendimiento integrado**: caché VFS, transmisión de miniaturas, lectura anticipada y buffering disponibles en el diálogo de Montaje (consulta [Montar almacenamiento en la nube como unidad local](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)).
- **Automatización y monitoreo**: montaje automático al iniciar, reconexión en caso de fallo y gráficos de rendimiento en vivo (consulta [Programación y ejecución de trabajos](/howto/rcloneview-advanced/job-scheduling-and-execution) y [Monitoreo de transferencia en tiempo real](/howto/rcloneview-basic/real-time-transfer-monitoring)).

## Paso a paso — Montar Azure Blob como unidad local

### 1) Prepara las credenciales de Azure

- Crea una cuenta de almacenamiento y un contenedor Blob.
- Genera una **Clave de acceso** o un **token SAS** (se recomienda el privilegio mínimo para producción).
- Anota el **Nombre de la cuenta** y el **Contenedor** que deseas montar.

### 2) Agrega el remoto de Azure

- Abre **Administrador de remotos** → **Agregar remoto** → elige **Compatible con S3** (funciona con la puerta de enlace S3 de Azure Blob) o **WebDAV** si usas ese endpoint.
- Para **Compatible con S3**:
  - **Proveedor**: Personalizado / Compatible con S3
  - **Endpoint**: `https://<account>.blob.core.windows.net`
  - **Región**: deja en blanco o usa el marcador de posición `us-east-1`
  - **Clave de acceso / Secreto**: tu clave de Azure o el par derivado de SAS
- Guarda el remoto. Usa una **Contraseña de configuración** segura en [Configuración general](/howto/rcloneview-basic/general-settings).

### 3) Crea un trabajo de montaje

- En **Administrador de montajes** (o en la barra de herramientas del Explorador), haz clic en **Montar**.
- Selecciona tu remoto de Azure y especifica la ruta del contenedor (por ejemplo, `azure:media-assets`).
- Elige el destino de montaje:
  - Windows → `Z:` (o cualquier letra libre)
  - macOS → `/Volumes/AzureMedia`
  - Linux → `/mnt/azure-media`
- - Activa **Montaje automático al iniciar** para que RcloneView se vuelva a conectar tras reiniciar.
   
<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />


### 4) Ajusta la caché VFS y los buffers

- **Modo de caché**: `Full` para miniaturas, vistas previas y visualización de medios.
- **Directorio de caché**: apunta a una carpeta en SSD.
- **Lectura anticipada**: 4–8 MB para navegación de fotos/video; aumenta para cargas de trabajo 4K o superiores.
- **Escritura diferida/Buffering**: actívalo para cargas secuenciales grandes; limita el ancho de banda si compartes la conexión de subida con otros.

## Casos de uso

- **Equipos de diseño y medios**: mantén grandes bibliotecas de activos en Blob mientras editas localmente con lecturas en caché.
- **Entornos de desarrollo/pruebas**: monta artefactos de compilación o sitios estáticos para iterar rápidamente.
- **Recolección de datos**: envía exportaciones de IoT o registros directamente a Blob sin cargas por navegador.
- **Flujos de trabajo en la nube híbrida**: arrastra y suelta entre Azure, S3, Google Drive y NAS desde un solo panel.
- **Preparación de copias de seguridad**: monta Blob como almacenamiento templado económico antes de archivar en Glacier/R2.

## Consejos de rendimiento

- Configura **Modo de caché: Full** para bibliotecas pesadas de medios/fotos.
- Usa un **directorio de caché NVMe/SSD**; mantén varios GB libres.
- Aumenta la **lectura anticipada** y el **tamaño de buffer** para lecturas/escrituras secuenciales; redúcelos para archivos pequeños aleatorios.
- Para equipos distribuidos, combina los montajes con el **Programador** para actualizar o precalentar la caché diariamente.
- Observa el rendimiento en [Monitoreo de transferencia en tiempo real](/howto/rcloneview-basic/real-time-transfer-monitoring) para detectar limitaciones.



## Solución de problemas

- **Errores 403 o de autenticación**: vuelve a emitir las claves/SAS y confirma el endpoint `https://<account>.blob.core.windows.net`.
- **Listados lentos**: aumenta el tamaño de la caché VFS y la lectura anticipada; asegúrate de que la ruta de caché esté en SSD.
- **El montaje desaparece tras el reposo**: activa Montaje automático junto con la opción "Reiniciar trabajos fallidos" del Programador.
- **Permisos en macOS**: aprueba las solicitudes de macFUSE; luego vuelve a montar mediante el Administrador de montajes.

## Conclusión — Azure Blob como unidad de primera clase

Con RcloneView, Azure Blob se siente como una unidad nativa: letras asignadas o `/Volumes`, caché inteligente y automatización—todo sin scripts de CLI. Agrega tu contenedor una vez, ajusta la VFS según tu carga de trabajo y mantén tu almacenamiento autoalojado y multi-nube en un solo panel de control.

<CloudSupportGrid />
