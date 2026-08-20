---
slug: sync-opendrive-to-google-drive-rcloneview
title: "Sincronizar OpenDrive con Google Drive — Copia de seguridad en la nube con RcloneView"
authors:
  - kai
description: "Sincroniza carpetas de OpenDrive con Google Drive usando RcloneView, con Folder Compare y trabajos programados para mantener ambas nubes alineadas."
keywords:
  - sincronizar OpenDrive con Google Drive
  - copia de seguridad OpenDrive Google Drive
  - sincronización RcloneView OpenDrive
  - copia de seguridad en la nube OpenDrive
  - sincronización nube a nube
  - OpenDrive Google Drive RcloneView
  - herramienta de copia de seguridad multi-nube
  - comparación de carpetas OpenDrive
tags:
  - RcloneView
  - opendrive
  - google-drive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincronizar OpenDrive con Google Drive — Copia de seguridad en la nube con RcloneView

> Mantén una carpeta de OpenDrive reflejada en Google Drive sin descargar nada primero a un disco local.

Los equipos que almacenan sus archivos de trabajo en OpenDrive pero colaboran con clientes o socios en Google Drive suelen terminar copiando archivos manualmente de un lado a otro, lo que desincroniza todo en cuanto cualquiera de los dos lados cambia. RcloneView conecta ambos remotos en una sola ventana y sincroniza directamente entre ellos, de modo que la transferencia se realiza de nube a nube en lugar de pasar por una carpeta local. A diferencia de las herramientas que solo montan unidades, RcloneView también sincroniza y compara carpetas, disponible en la licencia FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurar los remotos de OpenDrive y Google Drive

Añade primero OpenDrive como remoto en Remote Manager, y luego añade Google Drive mediante su inicio de sesión OAuth basado en navegador; una vez configurados, ambos remotos aparecen como pestañas independientes en el File Explorer, por lo que puedes explorar cada lado por separado antes de crear un trabajo de sincronización. Confirma que puedes listar carpetas en ambos remotos antes de pasar al asistente de sincronización — un remoto que falla al explorar también fallará a mitad de la sincronización, y es más fácil detectarlo a tiempo.

<img src="/support/images/en/blog/new-remote.png" alt="Adding OpenDrive and Google Drive remotes in RcloneView" class="img-large img-center" />

## Configurar el trabajo de sincronización unidireccional

En el asistente de sincronización, selecciona la carpeta de OpenDrive como origen y la carpeta de destino de Google Drive como destino, y luego elige sincronización unidireccional para que OpenDrive siga siendo la fuente de verdad. Ajusta el número de transferencias de archivos y de verificadores de igualdad en Advanced Settings según el tamaño de la carpeta — los valores predeterminados funcionan bien en la mayoría de los casos, pero una carpeta con decenas de miles de archivos pequeños se beneficia de un menor número de verificadores de igualdad si OpenDrive responde lentamente a las solicitudes de metadatos.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job from OpenDrive to Google Drive in RcloneView" class="img-large img-center" />

Ejecuta un Dry Run antes de la primera sincronización real para previsualizar qué archivos se copiarán — esto evita una transferencia completa e involuntaria de la carpeta, algo especialmente útil la primera vez que apuntas un trabajo a una carpeta de OpenDrive ya existente.

## Verificar el resultado con Folder Compare

Una vez completada la sincronización inicial, abre Folder Compare y apúntalo a las mismas dos carpetas para confirmar que ambos lados coinciden. Folder Compare resalta los archivos que existen solo en un lado o que difieren en tamaño, lo que permite detectar una transferencia parcial más rápido que revisar Job History en busca de errores.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing OpenDrive and Google Drive folders after sync in RcloneView" class="img-large img-center" />

## Programar sincronizaciones continuas

Una vez verificada la sincronización inicial, guarda el trabajo en Job Manager y configura una programación de tipo crontab — disponible con una licencia PLUS — para que los cambios de OpenDrive se propaguen a Google Drive en un intervalo fijo en lugar de requerir una ejecución manual cada vez. Job History mantiene un registro de cada ejecución programada, incluyendo el tamaño de la transferencia y el número de archivos, para que puedas confirmar que la programación se está activando como se espera.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring OpenDrive to Google Drive sync job in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade tanto OpenDrive como Google Drive como remotos en Remote Manager.
3. Crea un trabajo de sincronización unidireccional con un Dry Run primero, y luego ejecútalo de verdad.
4. Verifica con Folder Compare y, si es necesario, guarda el trabajo con una programación para copias de seguridad continuas.

Con ambos remotos visibles uno junto al otro, mantener OpenDrive y Google Drive alineados se convierte en un trabajo de sincronización rutinario en lugar de una tarea manual.

---

**Guías relacionadas:**

- [Gestionar archivos y sincronización en la nube de OpenDrive con RcloneView](https://rcloneview.com/support/blog/manage-opendrive-cloud-sync-backup-rcloneview)
- [Hacer copia de seguridad de OpenDrive en AWS S3 y almacenamiento externo con RcloneView](https://rcloneview.com/support/blog/backup-opendrive-aws-s3-external-storage-rcloneview)
- [Sincronizar Box con Google Drive usando RcloneView](https://rcloneview.com/support/blog/sync-box-to-google-drive-rcloneview)

<CloudSupportGrid />
