---
slug: manage-premiumize-me-cloud-sync-backup-rcloneview
title: "Administra el almacenamiento de Premiumize.me — Sincroniza y respalda archivos con RcloneView"
authors:
  - tayson
description: "Conecta Premiumize.me a RcloneView mediante inicio de sesión OAuth en el navegador y sincroniza tus archivos almacenados con cualquier otro proveedor de nube para copia de seguridad y gestión a largo plazo."
keywords:
  - premiumize.me RcloneView
  - sincronización en la nube premiumize
  - copia de seguridad premiumize
  - administrar archivos premiumize
  - premiumize rclone GUI
  - almacenamiento de medios premiumize
  - transferencia en la nube premiumize
  - gestión de archivos premiumize
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - media
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Administra el almacenamiento de Premiumize.me — Sincroniza y respalda archivos con RcloneView

> Premiumize.me combina alojamiento de archivos premium con almacenamiento en la nube personal — RcloneView te permite gestionar y respaldar ese contenido a través de una interfaz gráfica limpia.

Premiumize.me es conocido principalmente como generador de enlaces premium y servicio de descarga en la nube, pero también ofrece almacenamiento en la nube personal donde vive el contenido que obtienes. Si lo usas para almacenar medios, descargas o archivos de proyectos, eventualmente necesitarás una forma de mover esos archivos — a otra nube para archivarlos, o a almacenamiento local para acceso sin conexión. RcloneView se conecta a Premiumize.me mediante inicio de sesión OAuth en el navegador, por lo que la configuración toma menos de un minuto.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectando Premiumize.me mediante OAuth

Abre RcloneView y accede al **Administrador de remotos**. Haz clic en **Nuevo remoto** y busca **Premiumize** en la lista de proveedores. Al seleccionarlo, RcloneView abre tu navegador predeterminado y te redirige a la página de autorización OAuth de Premiumize.me. Inicia sesión y concede acceso — RcloneView almacena el token localmente, por lo que no necesitarás volver a autorizar a menos que revoques el acceso.

Después de la autorización, el remoto aparece en tu lista del Administrador de remotos. Haz doble clic para abrirlo en el Explorador de archivos. Tu árbol de archivos de Premiumize.me se carga con todas las carpetas y archivos que has acumulado a través del servicio.

<img src="/support/images/en/blog/new-remote.png" alt="Creating a Premiumize.me remote in RcloneView" class="img-large img-center" />

## Explorando tu biblioteca de Premiumize.me

El Explorador de archivos de RcloneView ofrece un diseño familiar de dos paneles. Navega tu almacenamiento de Premiumize.me en un lado y cualquier otro remoto configurado — Google Drive, Backblaze B2 o una carpeta local — en el otro. Puedes seleccionar varios archivos, hacer clic derecho para copiar o mover, y seguir el progreso en el panel de transferencias.

Para bibliotecas con mucho contenido multimedia, el modo **Vista de miniaturas** muestra vistas previas de imágenes en una cuadrícula, lo cual resulta útil cuando tu almacenamiento de Premiumize.me contiene fotos o miniaturas de video que deseas identificar visualmente antes de transferirlos.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Browsing and transferring Premiumize.me files in RcloneView" class="img-large img-center" />

## Sincronizando Premiumize.me con otra nube

La navegación manual de archivos funciona para movimientos ocasionales, pero para copias de seguridad regulares, el sistema de **Trabajos** es la herramienta adecuada. Ve a **Trabajos**, haz clic en **Nuevo trabajo** y establece Premiumize.me como origen. Elige cualquier remoto de destino — Backblaze B2 es una opción rentable para el archivado de medios a largo plazo, mientras que Google Drive funciona bien si deseas acceder a los archivos desde el móvil.

En el segundo paso del asistente de trabajos, puedes configurar las **opciones de transferencia**: establece el número de transferencias simultáneas, activa o desactiva las sumas de comprobación, y activa **Ejecución de prueba** para previsualizar lo que se copiará antes de que se mueva algo. Esto es especialmente útil si tu almacenamiento de Premiumize.me ha crecido de forma orgánica con el tiempo y no estás seguro de su estructura exacta.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring and running a Premiumize.me backup job" class="img-large img-center" />

## Monitoreo e historial de trabajos

Una vez que se ejecuta un trabajo, RcloneView registra el resultado en el **Historial de trabajos**. Cada entrada muestra la hora de inicio, la duración, el número de archivos transferidos, el total de datos movidos y cualquier error. Esto te brinda un registro de auditoría de cada operación de sincronización, lo cual es importante si estás migrando sistemáticamente una gran biblioteca de Premiumize.me a lo largo de varias sesiones.

Si una transferencia falla a mitad de camino — debido a un problema de red o a un límite de tasa de la API de Premiumize.me — puedes volver a ejecutar el mismo trabajo desde el Historial de trabajos sin necesidad de reconfigurarlo. RcloneView omite los archivos que ya se transfirieron correctamente, de modo que las sincronizaciones interrumpidas continúan donde se quedaron.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing Premiumize.me sync results" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abre el **Administrador de remotos**, haz clic en **Nuevo remoto** y selecciona **Premiumize**.
3. Completa el inicio de sesión OAuth en el navegador para autorizar tu cuenta.
4. Crea un trabajo de sincronización con Premiumize.me como origen y la nube que elijas como destino.

Con RcloneView, tus archivos de Premiumize.me ya no están encerrados en un único servicio — respáldalos, archívalos o migralos según tu propio calendario.

---

**Guías relacionadas:**

- [Administra el almacenamiento de Put.io — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-put-io-cloud-sync-backup-rcloneview)
- [Migración de nube a nube con RcloneView](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)
- [Monitoreo del historial de trabajos y registros de transferencia](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
