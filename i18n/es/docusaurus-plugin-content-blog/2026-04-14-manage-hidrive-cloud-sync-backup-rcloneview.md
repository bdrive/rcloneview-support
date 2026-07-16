---
slug: manage-hidrive-cloud-sync-backup-rcloneview
title: "Gestiona el almacenamiento HiDrive — Sincroniza y respalda archivos con RcloneView"
authors:
  - tayson
description: "Aprende a conectar, sincronizar y respaldar el almacenamiento en la nube HiDrive con RcloneView. Gestiona todos tus archivos de HiDrive desde una GUI sin necesidad de comandos CLI."
keywords:
  - HiDrive RcloneView
  - sincronización en la nube HiDrive
  - copia de seguridad HiDrive
  - gestión de STRATO HiDrive
  - transferencia de archivos HiDrive
  - GUI de rclone para HiDrive
  - herramienta de sincronización HiDrive
  - gestión de almacenamiento en la nube HiDrive
tags:
  - hidrive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona el almacenamiento HiDrive — Sincroniza y respalda archivos con RcloneView

> RcloneView aporta control total mediante GUI a HiDrive, permitiéndote explorar, sincronizar, respaldar y programar transferencias sin necesidad de abrir nunca una línea de comandos.

HiDrive, ofrecido por STRATO y operado en centros de datos europeos, es una opción popular para usuarios preocupados por la privacidad y empresas sujetas al RGPD. Gestionar HiDrive de forma programática con rclone siempre ha sido posible, pero RcloneView envuelve ese poder en una interfaz limpia, haciendo que las transferencias de archivos, las copias de seguridad programadas y las sincronizaciones entre nubes sean accesibles para cualquiera en Windows, macOS o Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar HiDrive a RcloneView

Agregar HiDrive como remoto en RcloneView es sencillo. Haz clic en **Remote tab → New Remote**, desplázate hasta HiDrive en la lista de proveedores y sigue el inicio de sesión OAuth en el navegador. RcloneView abre tu navegador predeterminado, te autenticas con tus credenciales de STRATO y el remoto se guarda automáticamente, sin necesidad de copiar ningún token.

Una vez conectado, tus carpetas de HiDrive aparecen instantáneamente en el panel Explorer. Puedes abrir varias pestañas para comparar una carpeta local con tu copia de seguridad de HiDrive, o dividir la vista para mostrar HiDrive junto a otra nube como Amazon S3.

<img src="/support/images/en/blog/new-remote.png" alt="Adding HiDrive as a new remote in RcloneView" class="img-large img-center" />

HiDrive admite operaciones de archivo estándar a través de RcloneView: subir, descargar, renombrar, eliminar, crear carpeta y generar enlaces públicos. Arrastra y suelta archivos desde el Explorador de Windows directamente en el panel Explorer de HiDrive para subirlos, o arrastra entre paneles para activar una copia de nube a nube.

## Programar copias de seguridad automáticas de HiDrive

Para las empresas que almacenan archivos de proyectos o entregables de clientes en HiDrive, las copias de seguridad automáticas son esenciales. El Job Manager de RcloneView (licencia PLUS) te permite configurar programaciones al estilo crontab; por ejemplo, una sincronización nocturna de una carpeta local `D:\Projects` con `hidrive:Backups/Projects` todos los días a las 2:00 a. m.

El asistente de sincronización de 4 pasos te guía a través de la selección de origen y destino, la configuración de concurrencia de transferencias, los filtros de archivos y la programación. Activa la verificación de checksum en el paso 2 para confirmar la integridad de los archivos byte a byte en lugar de basarte únicamente en las fechas de modificación, algo importante al sincronizar con un servidor europeo donde las diferencias de zona horaria pueden causar falsas discrepancias.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting up a scheduled HiDrive backup job in RcloneView" class="img-large img-center" />

Usa la opción Dry Run antes de la primera sincronización real para previsualizar exactamente qué archivos se copiarán o eliminarán. Esto es especialmente valioso al configurar una sincronización unidireccional en la que los archivos de destino pueden sobrescribirse.

## Supervisar transferencias e historial de tareas

La pestaña inferior **Transferring** de RcloneView te ofrece visibilidad en tiempo real de las transferencias activas de HiDrive: número de archivos, velocidad de transferencia, bytes movidos y tiempo transcurrido. Si una tarea falla debido a un problema de red, RcloneView reintenta automáticamente (de forma predeterminada: 3 reintentos).

La pestaña **Job History** almacena un registro completo de las ejecuciones anteriores: tipo de ejecución (manual o programada), hora de inicio, duración, estado y tamaño total transferido. Para los equipos de cumplimiento normativo que necesitan demostrar una actividad regular de protección de datos, este registro de auditoría resulta inmediatamente útil.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing HiDrive backup job history in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abre RcloneView y haz clic en **Remote tab → New Remote**, selecciona HiDrive y completa el inicio de sesión OAuth.
3. Usa el panel Explorer para explorar tus carpetas de HiDrive y verificar la conexión.
4. Abre **Job Manager**, crea una nueva tarea de sincronización desde tu unidad local hacia HiDrive y establece una programación.

Con RcloneView, HiDrive se convierte en una parte totalmente gestionada de tu estrategia de copias de seguridad: programada, supervisada y verificada automáticamente.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento OneDrive — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Gestiona Jottacloud — Sincronización y copia de seguridad en la nube con RcloneView](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [Automatiza copias de seguridad diarias en la nube con RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
