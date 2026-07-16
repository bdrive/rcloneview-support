---
slug: manage-synology-c2-cloud-sync-backup-rcloneview
title: "Administra el almacenamiento Synology C2 — Sincroniza y respalda archivos con RcloneView"
authors:
  - tayson
description: "Conecta Synology C2 a RcloneView y administra tu copia de seguridad en la nube con facilidad. Sincroniza archivos, programa tareas y monitorea transferencias a través de una interfaz de escritorio pulida."
keywords:
  - Synology C2 RcloneView
  - copia de seguridad Synology C2
  - administrar almacenamiento Synology C2
  - Synology C2 rclone GUI
  - sincronización en la nube compatible con S3
  - copia de seguridad de almacenamiento en la nube Synology
  - automatizar sincronización Synology C2
  - configuración S3 RcloneView
  - transferencia de archivos Synology C2
  - copia de seguridad programada Synology C2
tags:
  - synology
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Administra el almacenamiento Synology C2 — Sincroniza y respalda archivos con RcloneView

> Synology C2 es el almacenamiento en la nube diseñado específicamente por Synology — y con RcloneView puedes administrarlo desde una interfaz visual sin escribir un solo comando.

Synology C2 es el servicio de almacenamiento en la nube diseñado para extender el ecosistema de los propietarios de NAS Synology, ofreciendo almacenamiento de objetos compatible con S3 que se integra sin problemas con herramientas basadas en rclone. Ya sea que tengas un DiskStation en casa, administres un servidor de archivos de una pequeña empresa, o necesites un nivel adicional de copia de seguridad externa, RcloneView facilita explorar, sincronizar y automatizar transferencias hacia y desde Synology C2. Dado que Synology C2 expone una API estándar compatible con S3, obtienes el mismo rendimiento confiable de rclone que esperarías de cualquier proveedor importante de almacenamiento de objetos — envuelto en una interfaz de escritorio limpia.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Synology C2 como remoto compatible con S3

El almacenamiento de objetos de Synology C2 utiliza una API estándar compatible con S3, por lo que lo conectas dentro de RcloneView seleccionando Amazon S3 como tipo de remoto y apuntándolo al endpoint de Synology C2. Abre la pestaña Remote, haz clic en New Remote y elige Amazon S3 como proveedor. Ingresa tu C2 Access Key ID, Secret Access Key y el endpoint regional de tu cuenta C2 — disponible en el portal de Synology C2 después de crear tu almacenamiento y generar un par de claves de acceso. Configura el campo de región para que coincida con tu región de C2 y guarda.

Una vez creado el remoto, aparece en tu panel Explorer al igual que cualquier otro almacenamiento en la nube. Puedes explorar buckets y carpetas, inspeccionar tamaños de archivo y fechas de modificación, y navegar árboles de directorios anidados sin salir de la interfaz.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Synology C2 S3-compatible remote in RcloneView" class="img-large img-center" />

## Explorar y transferir archivos

Con tu remoto de Synology C2 abierto en un panel de Explorer y una unidad local u otra nube en el panel adyacente, puedes arrastrar archivos entre ellos para iniciar una transferencia inmediata. RcloneView confirma la operación antes de tocar nada, y la pestaña Transferring en la parte inferior de la pantalla muestra el progreso en vivo: cantidad de archivos, bytes transferidos y rendimiento actual.

Para grandes volúmenes — un estudio fotográfico respaldando 2 TB de archivos RAW, por ejemplo — el motor multihilo de RcloneView mueve varios archivos en paralelo. Puedes configurar flujos de transferencia simultáneos en la Configuración avanzada de la tarea para maximizar el rendimiento sin saturar tu conexión de red.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files into Synology C2 storage in RcloneView" class="img-large img-center" />

## Crear tareas de sincronización para copias de seguridad continuas

Más allá de las transferencias puntuales, el Job Manager de RcloneView te permite definir tareas de sincronización que mantienen una carpeta de origen reflejada en un bucket de Synology C2 bajo demanda o según un horario. Elige Sync como tipo de tarea, selecciona tu origen — una carpeta local, un remoto de NAS Synology u otra nube — apunta el destino a tu bucket de C2 y configura las preferencias de filtrado: límites de antigüedad de archivos, límites de tamaño y exclusiones de extensiones son todos configurables sin editar ningún archivo de configuración.

Antes de la primera sincronización en vivo, ejecuta el Dry Run integrado. Muestra exactamente qué archivos se copiarán o eliminarán para que no haya sorpresas cuando estén involucrados miles de archivos. Job History registra cada ejecución con marcas de tiempo, cantidad de archivos, tamaños de transferencia y códigos de estado para un registro de auditoría completo.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Synology C2 in RcloneView" class="img-large img-center" />

## Programar copias de seguridad automatizadas (licencia PLUS)

Para una protección de datos sin intervención manual, la licencia PLUS de RcloneView desbloquea la programación al estilo crontab. Configura una tarea de sincronización de Synology C2 para que se ejecute cada noche, semanalmente, o en cualquier intervalo personalizado completando los campos de Minuto, Hora y Día de la semana en el paso de programación del asistente de tareas. RcloneView ejecuta la transferencia en el horario configurado y registra el resultado en Job History — brindándote un registro de auditoría completo para verificar que las copias de seguridad se ejecutaron y confirmar exactamente qué archivos se transfirieron, incluso cuando estés lejos de la máquina.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Synology C2 backup job in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. En el portal de Synology C2, crea un bucket de almacenamiento y genera un par de claves de acceso.
3. En RcloneView, abre la pestaña Remote > New Remote, elige Amazon S3 e ingresa tu C2 Access Key ID, Secret Access Key y endpoint regional.
4. Abre el bucket de C2 en un panel de Explorer junto a tu origen, crea una tarea de sincronización en el Job Manager, y ejecuta primero un Dry Run.
5. Habilita la programación (licencia PLUS) para automatizar copias de seguridad nocturnas o semanales sin intervención manual.

Synology C2 te ofrece un nivel de copia de seguridad externa estrechamente integrado — RcloneView lo convierte en un flujo de trabajo programado y monitoreado que puedes configurar en minutos.

---

**Guías relacionadas:**

- [Respaldar NAS en múltiples nubes con RcloneView](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)
- [Administrar la sincronización y copia de seguridad en la nube de Wasabi con RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Respaldar Synology sin Hyper Backup — RcloneView](https://rcloneview.com/support/blog/backup-synology-without-hyper-backup-rcloneview)

<CloudSupportGrid />
