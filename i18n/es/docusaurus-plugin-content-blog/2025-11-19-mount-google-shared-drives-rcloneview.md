---
slug: mount-google-shared-drives-rcloneview
title: "Monta unidades compartidas de Google en Windows y macOS con RcloneView -- Acceso total, sin cliente de sincronización"
authors:
  - tayson
description: Monta cualquier unidad compartida de Google directamente en Finder o el Explorador de archivos con el flujo guiado de RcloneView, superando las limitaciones de Drive para escritorio y manteniendo control a nivel de administrador.
keywords:
  - google shared drive mount
  - mount shared drive windows
  - mount shared drive mac
  - rcloneview
  - rclone mount google drive
  - team drive windows
  - shared drive explorer
  - google workspace shared drive
  - rclone gui
  - mount team drive
tags:
  - RcloneView
  - google-drive
  - mount
  - productivity
  - workspace
unlisted: true
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Monta unidades compartidas de Google en Windows y macOS con RcloneView -- Acceso total, sin cliente de sincronización

> Dale a cada equipo la unidad compartida que necesita sin forzar un cliente de sincronización completo en sus portátiles.

Las unidades compartidas de Google Workspace suelen contener tus recursos de diseño, carpetas de traspaso o archivos de cumplimiento normativo, pero Drive para escritorio solo mantiene una caché pequeña y tiene dificultades con docenas de unidades compartidas por usuario. RcloneView se apoya en el soporte de unidades compartidas de rclone para que puedas montar exactamente la unidad que necesitas como una letra de unidad real en Windows o un volumen de Finder en macOS, con montaje automático y caché VFS integrados.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Por qué los equipos necesitan montar unidades compartidas sin Drive para escritorio

- Drive para escritorio refleja toda la unidad, consumiendo espacio en el SSD y dejando los portátiles sin conexión al alcanzar las cuotas.
- Los equipos de soporte técnico no tienen forma de entregar a un contratista una sola unidad compartida sin conceder permisos de sincronización para toda la cuenta.
- Los ingenieros y equipos de medios necesitan rutas predecibles (X:\Marketing o /Volumes/Archive) para automatizaciones, scripts y aplicaciones creativas.

## Cómo RcloneView lleva las unidades compartidas a Windows y macOS

RcloneView agrega una interfaz gráfica sobre rclone, por lo que el selector de unidades compartidas, los tokens de autenticación y las opciones de montaje quedan gestionados por ti.

- El asistente guiado de remotos enumera todas las unidades compartidas a las que puede acceder tu cuenta de Google Workspace y las almacena de forma segura. Consulta los pasos de referencia en [/support/howto/remote-storage-connection-settings/connect-using-cli/add-google-shared-drive](/howto/remote-storage-connection-settings/connect-using-cli/add-google-shared-drive).
- El Administrador de montajes muestra las opciones descritas en [/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive) para que no tengas que memorizar la sintaxis de la CLI.
- El montaje automático se encuentra en el diálogo de Montaje; "Iniciar al arrancar sesión" está disponible en Configuración -> General (documentado en [/support/howto/rcloneview-basic/general-settings](/howto/rcloneview-basic/general-settings)).

## Qué necesitas antes de montar

| Requisito | Detalles |
| --- | --- |
| RcloneView + Rclone | Instala el paquete más reciente de RcloneView (incluye rclone). |
| Controladores de sistema de archivos | Windows usa WinFsp (incluido). macOS requiere macFUSE; sigue las indicaciones dentro de RcloneView. Consulta [/support/howto/FAQ/increase-file-handle-limit-on-macos](/howto/FAQ/increase-file-handle-limit-on-macos) para ajustar los límites. |


## Paso a paso: monta una unidad compartida de Google con RcloneView

Estos pasos reflejan lo que los administradores ya hacen en la CLI, pero en un asistente sencillo para que los equipos de soporte puedan repetirlos rápidamente.

### Paso 1 -- Conecta tu cuenta de Google Workspace

1. Abre **Administrador de remotos** -> **+ Nuevo remoto**.
2. Elige **Google Drive** -> **OAuth (Navegador)**.
3. Después de completar el inicio de sesión en el navegador, RcloneView almacena el token de actualización localmente para que la unidad compartida permanezca autorizada.

  <img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />


### Paso 2 -- Elige la unidad compartida que quieres

1. Cuando se te pregunte "¿Configurar esto como una unidad compartida?", selecciona **Sí**.
2. RcloneView enumera todas las unidades compartidas devueltas por Google. Escribe el número o busca para resaltar la unidad correcta.
3. Guarda el remoto con un nombre descriptivo como `shared_marketing` para que los compañeros de equipo sepan de inmediato qué contiene.

### Paso 3 -- Configura el perfil de montaje

1. Ve al **Administrador de montajes** (o haz clic en el icono de montaje dentro del Explorador de remotos).
2. Selecciona el remoto de la unidad compartida y elige la carpeta que quieres montar (raíz o subcarpeta).
3. Configura los destinos y opciones de montaje:
   - **Destino (Target)**: mantén `Auto` o asigna una letra de unidad fija/ruta de montaje con **Mount to local path**.
   - **Montaje automático (Auto mount)**: actívalo para que RcloneView vuelva a montar al iniciar (combínalo con "Iniciar al arrancar sesión" en Configuración).
   - **Opciones avanzadas**: define **Volume name** (etiqueta opcional), **Mount type** (`cmount` por defecto), **Network drive** (Windows), **Allow other** (Linux) y **Read only** si quieres bloquear la escritura.
   - **Opciones de caché**: elige **Cache mode** (`full` para la mejor compatibilidad), define **Cache max size**, **Cache max age** y **Dir cache time** usando los valores en nanosegundos mostrados en el diálogo.

### Paso 4 -- Inicia y verifica

1. Haz clic en **Save & Mount**. El indicador de estado se vuelve verde cuando el montaje está activo.
2. En el Explorador de archivos o Finder, abre la nueva unidad. Deberías ver las carpetas de la unidad compartida; los directorios grandes pueden tardar un momento mientras la caché de directorios se llena según tu configuración de **Dir cache time**.
3. Usa el Administrador de montajes para desmontar, abrir la carpeta montada o editar la configuración.

## Consejos de rendimiento y acceso

- Configura **Cache mode** en **Full** y define un **Cache max size** generoso para la experiencia de edición más fluida.
- Usa **Read only** para unidades de finanzas/legal y evitar borrados accidentales; crea un montaje escribible aparte cuando sea necesario.
- Ajusta **Dir cache time** según la frecuencia de cambios (más corto para unidades activas, más largo para archivos).
- Reutiliza un **Target** o **Mount to local path** fijo para que los scripts y aplicaciones siempre encuentren el mismo montaje.

## Automatiza, comparte y protege el acceso

RcloneView te permite mantener los montajes de unidades compartidas coherentes entre equipos:

- Activa **Auto mount** en cada montaje y **Launch at login** en Configuración para que las unidades estén listas al arrancar el sistema operativo.
- Usa el Programador de tareas para replicar el contenido de la unidad compartida en S3/Wasabi como retención fuera de sitio después del horario laboral.
- Revisa el estado del Administrador de montajes (Montado vs. Desmontado) para verificar la conectividad antes de que los usuarios abran Office o Adobe.

## Solución de problemas y preguntas frecuentes

| Síntoma | Causa probable | Solución |
| --- | --- | --- |
| La unidad desaparece tras suspender el equipo | El sistema operativo desmontó WinFsp/macFUSE | Activa **Auto mount** y **Launch at login** para que RcloneView vuelva a montar al iniciar. |
| Apertura de archivos lenta | Caché demasiado pequeña o en disco lento | Aumenta **Cache max size** y mantén **Cache mode** en Full. |
| Error de permisos en macOS | FUSE no tiene acceso total al disco | Concede a RcloneView y macFUSE el acceso total al disco (Full Disk Access) y reinicia el montaje (menú Apple -> Configuración del Sistema -> Privacidad y Seguridad). |
| `too many open files` | El ulimit predeterminado de macOS es 256 | Aplica el ajuste del plist en [/support/howto/FAQ/increase-file-handle-limit-on-macos](/howto/FAQ/increase-file-handle-limit-on-macos). |
| La lista de unidades compartidas está vacía | El administrador de Workspace desactivó la API de Drive | Vuelve a activar la API de Drive en Google Admin o solicita acceso delegado a la unidad compartida. |

## Despliega montajes de unidades compartidas sin scripts

RcloneView hace que el acceso a las unidades compartidas sea predecible: sin carpetas de sincronización sobrecargadas, sin scripts y sin esperar a que TI configure cada nuevo montaje. Da a cada equipo hoy mismo una letra de unidad limpia o un volumen de Finder y mantén bajo control tu almacenamiento en la nube de Google Workspace.


<CloudSupportGrid />
