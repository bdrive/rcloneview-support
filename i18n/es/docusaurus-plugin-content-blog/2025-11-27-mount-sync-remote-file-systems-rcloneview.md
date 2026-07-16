---
slug: mount-sync-remote-file-systems-rcloneview
title: "Monta, sincroniza y gestiona sistemas de archivos remotos fácilmente con RcloneView"
authors:
  - tayson
description: "Conecta SFTP, SMB, WebDAV y almacenamiento en la nube en una sola GUI. Monta, sincroniza y automatiza sistemas de archivos remotos con el Explorador de doble panel, Comparar, Trabajos y el gestor de montaje de RcloneView."
keywords:
  - rcloneview
  - sftp
  - smb
  - webdav
  - mount remote drive
  - cloud file system
  - rclone gui
  - nas backup
  - remote explorer
  - sync automation
tags:
  - RcloneView
  - cloud
  - sync
  - mount
  - nas
  - sftp
  - webdav
  - smb
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Monta, sincroniza y gestiona sistemas de archivos remotos fácilmente con RcloneView

> Los remotos de sistemas de archivos como **SFTP**, **SMB** y **WebDAV** merecen la misma comodidad que las unidades en la nube. RcloneView te ofrece un Explorador de doble panel, Comparar, Sincronización y un gestor de montaje para que puedas tratar servidores remotos y equipos NAS como discos locales, sin necesidad de memorizar los flags de rclone.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


<!-- Image verified: /images/en/howto/rcloneview-basic/rcloneview-user-interface.png exists -->

## FS local vs. FS remoto: por qué importa

- **FS local:** latencia instantánea, permisos nativos, sin saltos de red. Ideal para editar, pero no siempre redundante.
- **FS remoto (SFTP/SMB/WebDAV):** añade latencia de red y autenticación, pero permite un NAS central, servidores externos y colaboración.
- **Almacenamiento de objetos en la nube:** económico y duradero, pero no POSIX; montarlo mejora los flujos de trabajo para aplicaciones que esperan un sistema de archivos.
- **Objetivo:** unificarlos en una sola interfaz para poder explorar, montar, sincronizar y automatizar sin cambiar de herramienta.

## Conecta SFTP y WebDAV en minutos

RcloneView envuelve la lista de backends de rclone (más de 100 proveedores) en un sencillo asistente de remotos. Para la mayoría de los remotos de tipo FS, solo tienes que elegir el proveedor y completar host/credenciales.

<!-- Image verified: /images/en/howto/rcloneview-basic/create-remote-by-remote-manager.png -->
<img src="/support/images/en/howto/rcloneview-basic/create-remote-by-remote-manager.png" alt="Create remote from Remote Manager" class="img-large img-center" />

👉 Guía de remotos: [Gestor de remotos](https://rcloneview.com/support/howto/rcloneview-basic/remote-manager/)

### Remoto SFTP

1. Abre **Remote -> + New Remote** (o el **+** en el Explorador).
2. Elige **SFTP**.
3. Introduce `host`, `port`, `user` y una contraseña o un archivo de clave.
4. Guarda: tu servidor SFTP aparecerá en el Gestor de remotos.

### Remoto WebDAV

1. Selecciona **WebDAV** en la lista de proveedores.
2. Introduce la **URL de WebDAV**, el nombre de usuario y la contraseña/token.
3. Guarda y prueba a navegar en el Explorador de doble panel.

### Recurso compartido SMB / NAS

1. Elige **SMB** (Samba/CIFS).
2. Proporciona la dirección del servidor y el nombre del recurso compartido; añade el dominio si es necesario.
3. Guarda y ábrelo como cualquier otro remoto.

### Nube + FS juntos

Puedes combinar SFTP, SMB, WebDAV y remotos en la nube (Google Drive, Dropbox, Mega, S3) en la misma sesión del Explorador y copiar directamente entre ellos.

## Explorador de doble panel para una gestión rápida

Los sistemas de archivos remotos se sienten locales cuando puedes verlos uno junto al otro.

<!-- Image: two-pane explorer -->
<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />
   
- Abre el **servidor** (SFTP/SMB/WebDAV) a la izquierda y un destino en la **nube/NAS** a la derecha.
- Arrastra y suelta para copiar; el progreso aparece en **Transferencia**.
- Haz clic derecho para acciones de `**Copy ->**`/ `**<- Copy**`, **Eliminar** o **Montar**.
- Usa filtros para ocultar carpetas de caché/temporales antes de sincronizar.

👉 Fundamentos del Explorador: 
 - [Explorar y gestionar remotos](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)  
  - [Arrastrar y soltar archivos](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

## Monta sistemas de archivos remotos como unidades locales

¿Necesitas tu recurso SFTP o WebDAV como una letra de unidad o montaje de Finder? Usa el gestor de montaje integrado.

<!-- Image verified: /images/en/howto/rcloneview-basic/mount-from-remote-explorer.png -->
<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />
  
- Haz clic en **Montar** desde la barra de herramientas o la tarjeta del remoto.
- Elige el tipo de montaje (letra de unidad/ruta) y configura las opciones de caché/búfer.
- Supervisa el estado en el **Gestor de montaje**; detén/reinicia sin usar la CLI.
- Ideal para aplicaciones que solo entienden rutas locales (NLEs, DAWs, herramientas CAD).

👉 Guía de montaje: [Montar almacenamiento en la nube como unidad local](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

## Compara antes de sincronizar

Las copias de FS remoto deben ser deliberadas. Usa **Comparar** para evitar sobrescribir ediciones más recientes.

<!-- Image: compare before copy -->
<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="compare folders" class="img-large img-center" />

- Resalta archivos **faltantes**, de **tamaño diferente** y **coincidentes**.
- Copia solo lo que cambió, de NAS -> nube o de nube -> NAS.
- Ideal para preparar ediciones desde un SSD local hacia un SFTP remoto sin sorpresas.

👉 Guía de Comparar: [Comparar el contenido de carpetas](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

## Resuelve problemas de permisos rápidamente

- **SFTP:** asegúrate de que el UID/GID sea correcto en el servidor; si fallan las escrituras, revisa la propiedad del directorio y el `chmod` en el host.
- **SMB:** haz coincidir el dominio/grupo de trabajo; configura "Allow guest/NTLMv2" según sea necesario en el servidor; verifica los permisos del recurso compartido por separado de las ACL del sistema de archivos.
- **WebDAV:** algunos hosts bloquean MOVE/DELETE, usa COPY y luego DELETE; presta atención a los montajes de solo lectura.
- **Montajes locales:** si las aplicaciones no pueden escribir, vuelve a montar con el usuario adecuado o ajusta las opciones de montaje en el cuadro de diálogo correspondiente.
- Usa la pestaña **Registros** para ver errores HTTP/SFTP (401/403/550) y ajustar las credenciales o rutas en consecuencia.

<!-- Image verified: /images/en/howto/rcloneview-basic/log-tab.png -->
<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />
   
## Ejemplos de copia de seguridad y automatización

### Ejemplo 1: NAS -> S3 (nocturno)

1. Origen: recurso compartido **SMB**; Destino: bucket de **S3**.
2. Haz clic en **Sincronizar** y elige **unidireccional** (NAS -> S3).
3. Activa **checksum** (si es compatible) y excluye las carpetas de temporales/caché.
4. **Guardar en Trabajos** (por ejemplo, `nas-to-s3-nightly`).
5. Abre **Gestor de trabajos -> Añadir trabajo**, programa **02:00 diario**.

<!-- Image: job scheduling -->
<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Create job schedule" class="img-large img-center" />

👉 Guías de trabajos: [Crear trabajos de sincronización](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs), [Ejecutar y gestionar trabajos](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job), [Programación de trabajos](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution), [Monitoreo de transferencias](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

### Ejemplo 2: recurso de edición SFTP -> Google Drive (trabajo en curso)

1. Panel izquierdo: carpeta de proyecto **SFTP**; panel derecho: espacio de equipo de **Google Drive**.
2. Usa **Comparar** para sincronizar solo los renders nuevos.
3. Guárdalo como un Trabajo reutilizable para copias de seguridad diarias a las 03:00.
4. Mantén un segundo trabajo solo para **EXPORT**, de modo que los enlaces de revisión estén siempre actualizados.

### Ejemplo 3: CMS WebDAV -> SSD local (montar + copiar)

1. Monta el sitio WebDAV a través del **Gestor de montaje** para compatibilidad de aplicaciones.
2. Copia los recursos del sitio a una carpeta de SSD local; ejecuta **Comparar** semanalmente para obtener las diferencias.
3. Si las eliminaciones están bloqueadas, usa solo copia y elimina manualmente después de verificar.

## Consejos de velocidad y estabilidad para FS remotos

- Usa **límites de ancho de banda** durante el horario de oficina; aumenta la concurrencia fuera de horario.
- Prefiere **reanudar** para cargas grandes; RcloneView gestiona los reintentos automáticamente.
- Para SFTP de larga distancia, activa la compresión solo si hay margen de CPU disponible.
- En SMB, evita montar el mismo recurso compartido dos veces en redes inestables: mantén un único montaje activo.
- Para hosts WebDAV con límites de velocidad, reduce las transferencias paralelas en el cuadro de diálogo de sincronización.

## Organiza las carpetas de NAS y nube de forma ordenada

- Mantén una plantilla de carpeta compartida (por ejemplo, `Project/RAW`, `EDIT`, `EXPORT`, `ARCHIVE`) almacenada tanto en el NAS como en la nube; cópiala antes de cada proyecto.
- Usa **Comparar** semanalmente: NAS vs. archivo en la nube para asegurarte de que el almacenamiento en frío esté actualizado.
- Mantén la **copia unidireccional** para los archivos (evita la propagación de eliminaciones).
- Guarda los **proxies** en la nube para colaborar; conserva los **RAW** en NAS/S3 por seguridad.

## Cuándo montar frente a cuándo sincronizar

- **Montar** cuando las aplicaciones necesitan identificadores de archivo (NLEs, exploradores de recursos).
- **Sincronizar/Copiar** para movimientos masivos, copias de seguridad externas o cuando los enlaces de red son inestables.
- Combina ambos: monta para las ediciones diarias y luego ejecuta una sincronización programada para archivar.

## Registro y recuperación

- Usa el **Historial de trabajos** para ver qué archivos fallaron y por qué; vuelve a ejecutarlo para recuperar solo los elementos faltantes.
- Ante errores de permisos, vuelve a autenticar el remoto o ajusta las ACL del servidor antes de reintentar.
- Mantén abierta la pestaña **Registro** durante las primeras ejecuciones para detectar códigos 401/403/550/429 a tiempo.
- Si un montaje se bloquea, detenlo/reinícialo desde el **Gestor de montaje** en lugar de reiniciar el equipo.

## Lista de verificación de inicio rápido

1. Añade remotos SFTP/SMB/WebDAV en el Gestor de remotos.
2. Abre el Explorador de doble panel y verifica el listado.
3. Ejecuta **Comparar** en una carpeta pequeña; confirma las direcciones de copia.
4. Monta si tu aplicación necesita una letra de unidad/ruta.
5. Guarda Sincronizar/Copiar como Trabajos; prográmalos fuera de horario.
6. Revisa los registros después de la primera ejecución completa; activa el checksum donde sea compatible.

## Resumen

RcloneView convierte a los sistemas de archivos remotos en ciudadanos de primera clase. Conecta remotos SFTP, SMB, WebDAV, NAS y de nube, móntalos como unidades locales, compara antes de sincronizar y automatiza las copias de seguridad con Trabajos y programaciones, todo desde una GUI construida sobre el motor de rclone. Trata cada punto de almacenamiento de la misma manera: visible, verificable y automatizado.

<CloudSupportGrid />
