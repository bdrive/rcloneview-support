---
slug: manage-put-io-cloud-sync-backup-rcloneview
title: "Gestiona el almacenamiento de Put.io — Sincroniza y haz copias de seguridad de archivos con RcloneView"
authors:
  - tayson
description: "Aprende a conectar Put.io con RcloneView usando OAuth, explorar tus archivos en la nube y sincronizar contenido multimedia hacia o desde otros proveedores de almacenamiento en la nube fácilmente."
keywords:
  - put.io RcloneView
  - sincronización en la nube put.io
  - copia de seguridad put.io
  - gestionar archivos put.io
  - put.io rclone GUI
  - gestión de contenido multimedia put.io
  - transferencia de archivos en la nube put.io
  - sincronización en la nube put.io
tags:
  - putio
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona el almacenamiento de Put.io — Sincroniza y haz copias de seguridad de archivos con RcloneView

> Put.io es un servicio de torrents y descargas en la nube que almacena el contenido obtenido directamente en la nube — RcloneView facilita explorar, sincronizar y hacer copias de seguridad de esos archivos.

Put.io te permite obtener torrents, enlaces directos y contenido de hosts de archivos premium directamente en almacenamiento en la nube, lo que lo convierte en una opción popular para los entusiastas de los medios. Una vez que tus archivos llegan a Put.io, necesitas una forma fiable de moverlos — a una unidad local, a otra nube o a un archivo personal. RcloneView se conecta a Put.io mediante inicio de sesión OAuth en el navegador y te ofrece una interfaz gráfica completa para gestionar transferencias sin tocar la línea de comandos.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Put.io a RcloneView

Abre RcloneView y ve al **Gestor de Remotos**. Haz clic en **Nuevo Remoto**, desplázate por la lista de proveedores y selecciona **Put.io**. RcloneView abrirá tu navegador automáticamente para la autenticación OAuth — inicia sesión en tu cuenta de Put.io y concede acceso. No hay que copiar claves de API manualmente; el flujo OAuth se encarga de todo.

Una vez autorizado, el remoto aparecerá en tu Gestor de Remotos. Haz clic en **Abrir** para iniciar el explorador de archivos y navegar por tu almacenamiento de Put.io. Verás tus archivos guardados, carpetas organizadas por torrent o trabajo de descarga, y cualquier directorio que hayas creado manualmente.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Put.io remote in RcloneView" class="img-large img-center" />

## Explorar y gestionar archivos de Put.io

El Explorador de Archivos de RcloneView muestra el contenido de Put.io en la conocida vista de árbol y lista. Puedes navegar por carpetas, seleccionar varios archivos e iniciar transferencias directamente desde el panel. Si tienes grandes bibliotecas multimedia — películas, series de TV, archivos de audio — la vista de miniaturas te ofrece una cuadrícula de imágenes para identificar el contenido rápidamente.

Para copiar o mover archivos entre Put.io y otra nube (por ejemplo, Google Drive o Backblaze B2), abre un segundo panel apuntando a tu remoto de destino. Selecciona archivos en el panel de Put.io, haz clic derecho y elige **Copiar** o **Mover**. RcloneView gestiona la transferencia sin descargar primero a tu equipo local cuando se realizan operaciones de nube a nube.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Put.io to another provider" class="img-large img-center" />

## Configurar un trabajo de sincronización para Put.io

Para copias de seguridad periódicas o sincronización unidireccional desde Put.io a tu almacenamiento a largo plazo, la función **Trabajos** es más fiable que las transferencias manuales. Ve a **Trabajos**, haz clic en **Nuevo Trabajo** y selecciona tu remoto de Put.io como origen. Configura el destino a cualquier otro remoto configurado — Backblaze B2 es una opción habitual para el archivado multimedia asequible.

En el paso de configuración del trabajo, puedes activar **Simulación (Dry Run)** para previsualizar qué archivos se transferirán antes de confirmar. Esto es útil cuando tu biblioteca de Put.io es grande y quieres confirmar el alcance de la sincronización. Después de revisarlo, desactiva la Simulación y ejecuta el trabajo. RcloneView registra cada transferencia con el número de archivos, la velocidad y el estado en la pestaña **Historial de Trabajos**.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Put.io sync job in RcloneView" class="img-large img-center" />

## Casos de uso: flujos de trabajo de contenido multimedia

Los usuarios de Put.io suelen seguir unos pocos patrones: archivar contenido multimedia obtenido en almacenamiento frío, replicar contenido en un servidor doméstico o sincronizar con Google Drive para transmitirlo mediante reproductores de terceros. RcloneView cubre todos estos casos. Puedes crear trabajos independientes para diferentes subdirectorios de Put.io — uno para películas, otro para series de TV — y programarlos de forma independiente con una licencia PLUS.

La función **Comparar Carpetas** es útil cuando no estás seguro de qué se ha copiado ya. Abre la carpeta de Put.io y tu destino uno al lado del otro, y RcloneView resalta las diferencias para que solo transfieras lo que falta.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing Put.io transfer logs in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abre el **Gestor de Remotos**, haz clic en **Nuevo Remoto** y selecciona **Put.io**.
3. Completa el inicio de sesión OAuth en el navegador para autorizar el acceso.
4. Abre el remoto de Put.io en el Explorador de Archivos y configura un trabajo de sincronización hacia tu destino preferido.

RcloneView convierte Put.io de un simple receptor pasivo de descargas en una parte activa de tu flujo de trabajo de almacenamiento en la nube.

---

**Guías relacionadas:**

- [Copia de seguridad de pCloud a AWS S3 con RcloneView](https://rcloneview.com/support/blog/backup-pcloud-to-aws-s3-rcloneview)
- [Migración de nube a nube con RcloneView](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)
- [Monitoreo del historial de trabajos y registros de transferencia](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
