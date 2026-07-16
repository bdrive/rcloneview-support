---
slug: system-tray-background-sync-rcloneview
title: "Bandeja del sistema y sincronización en segundo plano — Mantén tus tareas en la nube activas en RcloneView"
authors:
  - steve
description: "Aprende cómo la integración de RcloneView con la bandeja del sistema mantiene las tareas de sincronización en ejecución en segundo plano, gestiona los montajes en la nube y envía notificaciones de finalización de tareas sin necesidad de mantener la ventana abierta."
keywords:
  - RcloneView sincronización en segundo plano bandeja del sistema
  - modo en segundo plano sincronización en la nube
  - RcloneView minimizar a la bandeja
  - copia de seguridad en la nube en segundo plano RcloneView
  - RcloneView icono de bandeja tareas
  - notificaciones de sincronización en la nube RcloneView
  - mantener sincronización en la nube activa en segundo plano
  - RcloneView copia de seguridad continua
tags:
  - feature
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Bandeja del sistema y sincronización en segundo plano — Mantén tus tareas en la nube activas en RcloneView

> La integración de RcloneView con la bandeja del sistema te permite minimizar la aplicación y mantener las tareas de sincronización en ejecución, las unidades en la nube montadas y las notificaciones activas, sin interrumpir tu flujo de trabajo.

La mayoría de las herramientas de sincronización en la nube requieren mantener una ventana abierta para confirmar que las tareas se están ejecutando. El soporte de bandeja del sistema de RcloneView elimina esa limitación. Una vez configurado, puedes minimizar RcloneView por completo, y tus tareas de sincronización programadas, transferencias activas y unidades en la nube montadas seguirán funcionando en segundo plano. El icono de la bandeja te da acceso rápido a todo sin saturar tu espacio de trabajo.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Activar el modo en segundo plano y la bandeja del sistema

De forma predeterminada, RcloneView se puede configurar para minimizarse a la bandeja del sistema en lugar de cerrarse al cerrar la ventana. En **pestaña Settings → General**, busca la opción **Quit on close**. Desactívala para asegurarte de que RcloneView pase a la bandeja del sistema al hacer clic en el botón X, en lugar de cerrarse por completo.

También puedes activar **Launch at login** para que RcloneView se inicie automáticamente con tu sistema y comience de inmediato a supervisar las tareas programadas. Combina esto con **Start minimized** para que RcloneView se ejecute silenciosamente en segundo plano desde el momento en que arranca tu equipo.

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="RcloneView running in background with system tray active" class="img-large img-center" />

## Gestionar los montajes en la nube desde la bandeja

Una de las funciones más útiles de la bandeja es la gestión rápida de montajes. Haz clic derecho en el icono de RcloneView en la bandeja para ver una lista de todos los montajes en la nube configurados junto con su estado actual (montado o desmontado). Haz clic en cualquier entrada para alternar su estado de montaje —montar una unidad en la nube como volumen local o desmontarla— sin necesidad de abrir la ventana principal.

Esto resulta especialmente valioso para profesionales que mantienen varias unidades en la nube montadas durante todo el día. Un desarrollador podría tener un bucket de S3 montado como unidad de red, un montaje de Google Drive para acceder a documentos y un montaje de NAS para transferencia de archivos local. La bandeja ofrece control instantáneo sobre todos ellos.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Quick access to cloud mounts via system tray in RcloneView" class="img-large img-center" />

## Notificaciones de finalización de tareas

Cuando una tarea de sincronización finaliza —ya sea programada o iniciada manualmente—, RcloneView puede mostrar una notificación de escritorio con el nombre de la tarea, su duración y el estado final. Activa esta función en **pestaña Settings → Interfaces & Notifications → Show sync completion notification**.

Esto significa que puedes iniciar una gran tarea de copia de seguridad nocturna, minimizar RcloneView a la bandeja y recibir una notificación de escritorio cuando la tarea se complete. Si la tarea presentó un error, lo sabrás de inmediato.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing background sync completions in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. En **Settings → General**, desactiva **Quit on close** y activa **Launch at login**.
3. Configura las tareas de sincronización o programadas como de costumbre.
4. Minimiza RcloneView: las tareas y los montajes seguirán funcionando en segundo plano.

Una vez configurado, RcloneView funciona como un servicio silencioso en segundo plano para tu almacenamiento en la nube, sin necesidad de mantener una ventana abierta.

---

**Guías relacionadas:**

- [Automatiza copias de seguridad diarias en la nube con RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [Alertas de notificación al completar la sincronización — RcloneView](https://rcloneview.com/support/blog/notification-alerts-sync-complete-rcloneview)
- [Notificaciones de tareas por correo SMTP en RcloneView](https://rcloneview.com/support/blog/email-smtp-job-notifications-rcloneview)

<CloudSupportGrid />
