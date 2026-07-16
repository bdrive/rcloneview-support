---
slug: mount-google-drive-local-drive-rcloneview
title: "Monta Google Drive como una unidad local en Windows y macOS con RcloneView"
authors:
  - tayson
description: Convierte las más de 40 mil búsquedas mensuales sobre cómo montar Google Drive en una solución de un par de clics usando RcloneView para reemplazar pasos complejos de CLI con montajes guiados, caché y automatización en Windows y macOS.
keywords:
  - mount google drive windows
  - mount google drive mac
  - google drive local drive
  - rcloneview
  - rclone mount gui
  - google drive file stream alternative
  - map google drive letter
  - mount google drive finder
  - scheduler auto mount
  - multi cloud explorer
tags:
  - google-drive
  - mount
  - windows
  - macos
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Monta Google Drive como una unidad local en Windows y macOS con RcloneView

> Más de 40 mil personas al mes buscan "mount Google Drive" (montar Google Drive). RcloneView convierte esa respuesta cargada de CLI en un flujo de dos clics con caché, inicio automático y monitoreo mediante GUI.

`rclone mount` es legendario pero intimidante: tokens de OAuth, contraseñas de configuración, instalaciones de WinFsp/macFUSE, largas cadenas de parámetros y scripts para relanzarlo después de reiniciar. RcloneView agrupa todas esas piezas en una aplicación de escritorio para que puedas montar Google Drive (y cualquier otro servicio en la nube) como una letra de unidad real en Windows o como un volumen de Finder en macOS, sin necesidad de terminal.

<!-- truncate -->


<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Por qué elegir RcloneView en lugar de montajes CLI manuales

- **OAuth guiado**: el Gestor de remotos abre un navegador seguro y almacena los tokens de actualización (consulta [Gestor de remotos](/howto/rcloneview-basic/remote-manager)).
- **Ayudantes de controladores**: los avisos de WinFsp y macFUSE están integrados en el instalador, y RcloneView los valida antes de que pulses Montar.
- **Plantillas repetibles**: el Gestor de montajes recuerda cada Google Drive, Unidad compartida u otro remoto para que puedas volver a montarlos tras un reinicio con solo un interruptor.
- **Control multi-nube**: mientras montas Google Drive, también puedes sincronizar con Dropbox, comparar buckets de S3 o programar tareas desde la misma interfaz.
- **Monitoreo y programador**: el Programador y los monitores de transferencia integrados muestran el rendimiento y pueden reiniciar los montajes automáticamente si así lo eliges.

## Paso 1 -- Prepara tu escritorio

1. **Instala RcloneView** (el paquete incluye rclone). En Windows, acepta el aviso de WinFsp; en macOS, instala macFUSE.
2. **Asigna nombre a tus letras de unidad externas o volúmenes de Finder** donde quieras que aparezca Google Drive (por ejemplo `G:` o `/Volumes/GDrive`).
3. **Decide el espacio de caché**: elige una carpeta en un SSD con al menos unos pocos GB libres; más adelante apuntarás los montajes ahí para obtener vistas previas más rápidas.

  <img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />
  

## Paso 2 -- Conecta Google Drive (y otros servicios)

- Abre el Gestor de remotos y haz clic en **Añadir remoto** -> **Google Drive**. Sigue los pasos de OAuth descritos en [Añadir inicio de sesión OAuth en línea](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide).
- Etiqueta el remoto como `gdrive-main` (y, opcionalmente, añade Unidades compartidas u otras nubes como Dropbox, OneDrive o S3 para poder compararlas/sincronizarlas más adelante).
- Usa [Explorar y gestionar almacenamiento remoto](/howto/rcloneview-basic/browse-and-manage-remote-storage) para crear preajustes de carpetas que montarás con frecuencia (Diseño, Finanzas, Unidades compartidas, etc.).

  <img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />
  


## Paso 3 -- Monta Google Drive desde el Explorador o el Gestor de montajes

1. Abre el Explorador de doble panel, selecciona tu remoto de Google Drive y haz clic en el **icono de Montar** en la barra de herramientas.
2. Elige **Letra de unidad/Volumen**, selecciona tu ruta de caché y activa lectura/escritura, modo de caché y límites de ancho de banda.
3. Pulsa **Montar** y luego abre el Explorador de archivos o Finder para ver la nueva unidad.

  <img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount Google Drive from RcloneView Explorer" class="img-large img-center" />

El Gestor de montajes (Herramientas -> Gestor de montajes) mantiene una lista de montajes con interruptores de inicio automático, reconexión y arranque al iniciar sesión. Incluso puedes exponer varias cuentas de Google simultáneamente, algo que normalmente requeriría varias terminales de comandos.


## Paso 4 -- Automatiza flujos de trabajo más allá del montaje

Montar es solo el primer paso. RcloneView añade capas de flujos de trabajo multi-nube sobre esa base:

- **Compara y limpia** Google Drive frente a un SSD local o Dropbox usando [Comparar contenido de carpetas](/howto/rcloneview-basic/compare-folder-contents) mientras el montaje sigue activo.

  <img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />
  

- **Sincroniza o copia** carpetas completas a unidades externas usando [Crear tareas de sincronización](/howto/rcloneview-basic/create-sync-jobs) y [Sincronizar almacenamientos remotos](/howto/rcloneview-basic/synchronize-remote-storages) para copias de seguridad sin conexión.

  <img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />
  

- **Programa** esas tareas para que cada noche tu Google Drive montado ponga en cola una sincronización hacia un NAS o Wasabi sin clics manuales (consulta [Programación y ejecución de tareas](/howto/rcloneview-advanced/job-scheduling-and-execution)).

  <img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />
  

- **Monta otras nubes** en paralelo (OneDrive, Dropbox, S3) y arrastra archivos entre ventanas de Finder como si fueran discos locales.

## Casos de uso que desbloquea RcloneView

- **Diseñadores y equipos de medios**: transmite activos directamente a Adobe o DaVinci Resolve sin almacenar toda la biblioteca localmente.
- **Desarrolladores y DevOps**: monta Unidades compartidas para archivos de configuración y luego automatiza tareas de Comparar o Sincronizar hacia buckets de staging/producción.
- **Auditoría y cumplimiento**: monta Google Drive en modo solo lectura para revisores mientras el Programador mantiene copias inmutables en S3 o unidades externas.
- **Usuarios avanzados**: reemplaza Drive para escritorio con un montaje más ligero que respeta tus propias rutas de caché, límites de ancho de banda y registros.

## Solución de problemas y preguntas frecuentes

**¿Sigo necesitando la CLI?**  
No. RcloneView genera todos los parámetros de `rclone mount` de forma automática en segundo plano. Los usuarios avanzados pueden abrir los detalles de la tarea para ver el comando exacto.

**¿Qué pasa con los permisos de macOS?**  
Aprueba los avisos de Extensión del sistema para macFUSE y luego revisa el Gestor de montajes si Finder no puede ver el volumen. La guía práctica incluye capturas de pantalla para conceder permisos.

**¿Puedo montar varias cuentas de Google?**  
Sí. Añade un remoto por cada cuenta en el Gestor de remotos y luego crea una entrada de montaje para cada una. RcloneView mantiene los tokens separados para que puedas ver `gdrive-marketing` y `gdrive-personal` simultáneamente.

Montar Google Drive sigue siendo una de las principales búsquedas en Google porque las respuestas basadas en CLI son complejas. RcloneView ofrece a esos más de 40 mil buscadores un camino sin código: conecta tu cuenta de Google una vez, pulsa Montar y obtén una letra de unidad o volumen de Finder confiable, junto con todo el poder multi-nube (Comparar, Sincronizar, Programador) que ya utilizas. Descarga la última versión y jubila tus scripts de montaje hoy mismo.

<CloudSupportGrid />
