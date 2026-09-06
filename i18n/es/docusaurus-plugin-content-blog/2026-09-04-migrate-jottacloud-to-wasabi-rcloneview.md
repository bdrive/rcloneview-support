---
slug: migrate-jottacloud-to-wasabi-rcloneview
title: "Migrar de Jottacloud a Wasabi — Transferir archivos con RcloneView"
authors:
  - steve
description: "Migre archivos de Jottacloud a almacenamiento de objetos Wasabi con RcloneView, usando vistas previas de Dry Run y verificación por checksum para una transferencia segura."
keywords:
  - migrar jottacloud a wasabi
  - transferencia jottacloud a wasabi
  - migración jottacloud wasabi
  - rcloneview jottacloud
  - rcloneview wasabi
  - mover archivos jottacloud wasabi
  - herramienta de migración de nube a nube
  - migración de almacenamiento de objetos wasabi
  - respaldo jottacloud wasabi
tags:
  - RcloneView
  - jottacloud
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar de Jottacloud a Wasabi — Transferir archivos con RcloneView

> Mueva sus archivos de Jottacloud directamente al almacenamiento de objetos de bajo costo de Wasabi sin descargar nada primero a un disco local.

Los equipos que abandonan una nube orientada al consumidor como Jottacloud en favor de un almacenamiento de objetos a largo plazo más económico suelen toparse con un obstáculo: sus archivos residen en una cuenta de nube personal alojada en Noruega, y su nuevo hogar es un bucket compatible con S3 con un modelo de acceso completamente diferente. RcloneView salva esa brecha en una sola ventana, permitiéndole conectar ambos servicios como remotos y transferir directamente entre ellos, de nube a nube, sin necesidad de un rodeo por almacenamiento local.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar ambos remotos en RcloneView

Comience añadiendo Jottacloud como remoto mediante el flujo de inicio de sesión OAuth basado en navegador, luego añada Wasabi como remoto compatible con S3 usando su Access Key ID, Secret Access Key y el endpoint regional correcto. Ambos remotos aparecen como pestañas separadas en el panel Explorer, y puede abrir Jottacloud a la izquierda y Wasabi a la derecha usando un diseño de dos paneles.

A diferencia de las herramientas que solo montan, RcloneView también sincroniza y compara carpetas, incluso con la licencia FREE. Eso significa que no está limitado a simples copias de arrastrar y soltar; obtiene el motor de sincronización completo, filtrado y herramientas de Dry Run para esta migración.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir un nuevo remoto en RcloneView para una migración de nube a nube" class="img-large img-center" />

## Vista previa de la migración con Dry Run

Antes de mover nada, configure un trabajo de sincronización con Jottacloud como origen y su bucket de Wasabi de destino como destino. Establezca la dirección de sincronización en unidireccional "Modifying destination only" para que nada en Jottacloud se altere. Ejecute primero el trabajo en modo Dry Run — RcloneView muestra exactamente qué archivos se copiarán sin transferir un solo byte, algo esencial cuando está migrando una estructura de carpetas que no ha auditado completamente en años.

Si su cuenta de Jottacloud tiene bibliotecas multimedia o archivos grandes que no necesita en el nuevo bucket, use el paso de filtrado para excluir tipos de archivo o establecer un tamaño máximo de archivo antes de que comience la transferencia real.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferencia de nube a nube de Jottacloud a Wasabi en RcloneView" class="img-large img-center" />

## Verificar y monitorizar la transferencia

Una vez que el Dry Run se vea correcto, habilite la comparación por checksum en el paso Advanced Settings para que RcloneView compare los archivos por hash y tamaño en lugar de solo por la hora de modificación — importante al moverse entre dos backends de almacenamiento muy diferentes. Inicie el trabajo y cambie a la pestaña Transferring en la Info View inferior para ver el progreso en vivo, la velocidad de transferencia y el recuento de archivos mientras los datos llegan a Wasabi.

Para bibliotecas grandes, ajuste el número de transferencias de archivos y la configuración de transferencia multihilo para aprovechar mejor su ancho de banda, y deje que Job History registre la ejecución completa para referencia posterior.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Revisión del historial de trabajos tras una migración de Jottacloud a Wasabi" class="img-large img-center" />

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añada Jottacloud como remoto mediante inicio de sesión OAuth, luego añada Wasabi como remoto compatible con S3 con su Access Key ID y Secret Access Key.
3. Cree un trabajo de sincronización unidireccional de Jottacloud a su bucket de Wasabi y ejecute un Dry Run para previsualizar los archivos exactos que se copiarán.
4. Habilite la verificación por checksum, ejecute la sincronización real y confirme la transferencia completada en Job History.

Migrar de una nube de propósito general a un almacenamiento de objetos dedicado no tiene por qué significar manejar aplicaciones separadas ni una lenta recarga local — RcloneView gestiona todo el trayecto en una sola interfaz.

---

**Guías relacionadas:**

- [Solucionar errores de sincronización de Jottacloud — Cómo resolverlo con RcloneView](https://rcloneview.com/support/blog/fix-jottacloud-sync-errors-rcloneview)
- [Gestionar el almacenamiento de Wasabi — Sincronizar y respaldar archivos con RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Migrar de Backblaze B2 a Wasabi — Transferir archivos con RcloneView](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-wasabi-rcloneview)

<CloudSupportGrid />
