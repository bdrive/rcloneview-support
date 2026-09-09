---
slug: migrate-hidrive-to-backblaze-b2-rcloneview
title: "Migrar de HiDrive a Backblaze B2 — Transferir archivos con RcloneView"
authors:
  - kai
description: "Migre archivos de HiDrive a Backblaze B2 con RcloneView, una interfaz gráfica multiplataforma que mueve datos entre ambos proveedores sin almacenar archivos localmente de forma temporal."
keywords:
  - migrar de HiDrive a Backblaze B2
  - transferencia HiDrive a Backblaze B2
  - migración RcloneView HiDrive
  - herramienta de copia de seguridad en la nube HiDrive
  - GUI de migración Backblaze B2
  - mover archivos de HiDrive a B2
  - transferencia de nube a nube RcloneView
  - sincronización HiDrive B2
tags:
  - RcloneView
  - hidrive
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar de HiDrive a Backblaze B2 — Transferir archivos con RcloneView

> Mueva archivos directamente de HiDrive a Backblaze B2 con RcloneView, sin descargarlos antes a una unidad local.

Los equipos que superan la capacidad de una cuenta de HiDrive suelen pasarse a Backblaze B2 por su almacenamiento de objetos de menor coste y su modelo de claves de aplicación, pero ambos servicios no se comunican de forma nativa entre sí. RcloneView los conecta en una sola ventana: conecte ambos como remotos, arrastre archivos entre paneles y deje que el motor rclone integrado se encargue de la transferencia de servidor a servidor allí donde los proveedores lo permitan. La transferencia en sí no requiere exportación manual ni una carpeta de almacenamiento temporal local.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar HiDrive y Backblaze B2

Añada primero HiDrive mediante **Remote tab → New Remote**. HiDrive utiliza un inicio de sesión OAuth en el navegador, así que RcloneView abre una ventana del navegador para que inicie sesión y autorice el acceso, sin necesidad de copiar claves de API manualmente. Backblaze B2 se configura de forma distinta: elija Backblaze B2 como tipo de remoto e introduzca su Application Key ID y su Application Key, generados desde la página de gestión de claves de Backblaze. Una vez que ambos remotos aparezcan en Remote Manager, abra dos paneles Explorer uno junto al otro: uno apuntando a HiDrive y el otro a su bucket de B2.

A diferencia de las herramientas que solo permiten montar, RcloneView también sincroniza y compara carpetas entre este tipo de remotos, con la licencia FREE.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir un remoto de HiDrive en RcloneView" class="img-large img-center" />

## Ejecutar una transferencia puntual o una sincronización recurrente

Para una migración puntual, seleccione las carpetas en el panel de HiDrive, arrástrelas al panel de B2 y confirme la transferencia; RcloneView trata un arrastre entre remotos como una copia, dejando intactos los originales de HiDrive hasta que confirme que los datos llegaron correctamente. Para una migración continua en la que HiDrive sigue recibiendo archivos nuevos durante el período de transición, cree en su lugar un trabajo de sincronización: elija HiDrive como origen y B2 como destino en el asistente de 4 pasos, configure la dirección como unidireccional "Modifying destination only" y ejecútelo manualmente cada vez que quiera actualizar la diferencia.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Trabajo de sincronización de nube a nube de HiDrive a Backblaze B2" class="img-large img-center" />

Antes del cambio definitivo, ejecute la opción Dry Run del trabajo para previsualizar exactamente qué archivos se copiarán y cuáles (si los hay) se eliminarían en el destino; una comprobación útil antes de dirigir los flujos de trabajo de producción hacia el nuevo bucket de B2.

## Verificar y automatizar la migración

Una vez finalizada la migración inicial, use Folder Compare para revisar ambos lados archivo por archivo, confirmando que coinciden el número y el tamaño de los archivos en lugar de confiar en un único mensaje de estado de finalización. Si la migración debe repetirse según una programación —por ejemplo, para reflejar continuamente en B2 las nuevas subidas a HiDrive durante una transición gradual—, una licencia PLUS desbloquea la programación tipo crontab para que el trabajo de sincronización se ejecute sin supervisión con el intervalo que mejor se adapte al plan de transición.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Programación de un trabajo de sincronización recurrente de HiDrive a Backblaze B2" class="img-large img-center" />

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añada HiDrive mediante inicio de sesión OAuth en el navegador desde Remote Manager.
3. Añada Backblaze B2 con su Application Key ID y su Application Key.
4. Ejecute un Dry Run y luego realice la transferencia o el trabajo de sincronización entre ambos paneles.

Una vez configurados ambos remotos, el traslado de HiDrive a B2 es solo otro arrastrar y soltar o trabajo programado más dentro de la misma interfaz que ya utiliza para la gestión diaria de archivos.

---

**Guías relacionadas:**

- [Administrar el almacenamiento de HiDrive — Sincronizar y respaldar archivos con RcloneView](https://rcloneview.com/support/blog/manage-hidrive-cloud-sync-backup-rcloneview)
- [Administrar el almacenamiento de Backblaze B2 — Sincronizar y respaldar archivos con RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Sincronizar HiDrive con Amazon S3 — Copia de seguridad en la nube con RcloneView](https://rcloneview.com/support/blog/sync-hidrive-to-amazon-s3-rcloneview)

<CloudSupportGrid />
