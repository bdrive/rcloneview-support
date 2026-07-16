---
slug: sync-yandex-disk-with-google-drive-using-rcloneview
title: "Sincroniza Yandex Disk con Google Drive usando RcloneView — Flujo de trabajo multi-nube simplificado"
authors:
  - tayson
description: "Conecta Yandex Disk y Google Drive, previsualiza diferencias y ejecuta sincronizaciones programadas con verificación de checksum en RcloneView."
keywords:
  - rcloneview
  - yandex disk
  - google drive
  - sincronización en la nube
  - rclone sync
  - multi nube
  - verificación de checksum
  - programador
  - comparar
  - montar
  - webdav
  - copia de seguridad
  - migración
  - gui
  - de nube a nube
  - monitor de transferencia
  - historial de tareas
  - límites de ancho de banda
  - dry run
  - tareas de sincronización
tags:
  - RcloneView
  - cloud-storage
  - cloud-to-cloud
  - sync
  - google-drive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincroniza Yandex Disk con Google Drive usando RcloneView — Flujo de trabajo multi-nube simplificado

> Mueve y sincroniza archivos entre Yandex Disk y Google Drive sin tocar flags de CLI. RcloneView te ofrece comparaciones lado a lado, tareas verificadas por checksum y un programador para mantener ambas nubes en sincronía.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## ¿Por qué sincronizar Yandex Disk y Google Drive?

- Consolida carpetas dispersas entre cuentas personales y de equipo.
- Mantén un espejo en vivo para redundancia o acceso regional.
- Prepara migraciones de forma segura con previsualizaciones, dry-runs y checksums antes del cambio definitivo.
- Reduce la dependencia de un proveedor: mantén una copia verificada en otra nube sin exportaciones manuales.
- Mantén la disponibilidad: si un proveedor limita la velocidad, el otro sigue siendo utilizable.

## Paso 1 — Conecta ambos remotos

- Agrega Yandex Disk (WebDAV u OAuth) mediante `+ New Remote`. Guía: [add-oath-online-login](/howto/remote-storage-connection-settings/add-oath-online-login).
- Agrega Google Drive con el mismo flujo; elige el alcance correcto (My Drive o Shared Drive).
- Verifica ambos en **Remote Explorer** para asegurarte de que las rutas y permisos sean correctos.
- Verificaciones opcionales: confirma la zona horaria y la coherencia de la fecha de modificación en algunos archivos de prueba para evitar sobrescrituras inesperadas.  

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## Paso 2 — Compara antes de sincronizar

- Abre **Compare** para ver qué difiere entre Yandex Disk y Google Drive: [compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents).
- Filtra por extensiones si quieres enfocarte en documentos, medios o archivos comprimidos.
- Guarda la comparación como una tarea para poder volver a ejecutar verificaciones después de cada sincronización.
- Usa la comparación como tu dry-run: muestra adiciones, actualizaciones y eliminaciones sin cambiar los datos.
- Si ves eliminaciones inesperadas, cambia tu tarea a `copy` (no `sync`) hasta que tengas confianza.  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />
  
  

## Paso 3 — Crea una tarea de sincronización segura

- Crea una tarea de Yandex Disk a Google Drive (o bidireccional si es necesario): [create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs).
- Comienza con **copy** en la primera ejecución para evitar eliminaciones no deseadas; cambia a **sync** una vez validado.
- Habilita la verificación de checksum para detectar cualquier corrupción silenciosa.
- Excluye carpetas temporales/caché para mover solo lo que importa.
- Para Shared Drives, elige la carpeta de destino correcta (evita la raíz) para mantener las ACL limpias.
- Mantén la capitalización de rutas consistente para evitar carpetas que parezcan duplicadas entre backends sensibles y no sensibles a mayúsculas/minúsculas.
- Considera el tamaño de los fragmentos y la concurrencia solo si alcanzas los límites de la API; los valores predeterminados son adecuados para la mayoría de los usuarios.  

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />



## Paso 4 — Programa y monitorea

- Configura el programador para horas de baja actividad y reducir la limitación de la API: [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)    
- Observa el rendimiento en vivo y los archivos estancados en **Transfer Monitor**: [real-time-transfer-monitoring](/howto/rcloneview-basic/real-time-transfer-monitoring).
- Hábito de notificación: revisa el historial de tareas cada mañana durante las semanas de migración para detectar anomalías a tiempo.  

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />


## Paso 5 — Monta para acceso bajo demanda (opcional)

- Monta cualquiera de las nubes localmente para explorar sin descargar todo: [mount-cloud-storage-as-a-local-drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive).
- Windows: asigna una letra de unidad; macOS: elige una ruta de montaje bajo `/Volumes`.
- Bueno para validación: abre algunos archivos directamente desde cada montaje después de una sincronización para confirmar permisos y legibilidad.  

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />
  

## Restaurar o revertir

- Para revertir la dirección (Google Drive a Yandex Disk), duplica la tarea e invierte origen/destino.
- Para restauraciones selectivas, ejecuta **copy** con una lista de inclusión acotada para evitar sobrescribir datos correctos.
- Mantén una pequeña carpeta "canario" de estado conocido y asegúrate de que cada ejecución la preserve sin cambios; es tu verificación rápida de salud.

## Consejos rápidos

- Mantén estructuras de carpetas consistentes en ambos lados para reducir discrepancias de rutas.
- Usa preajustes por equipo (Docs, Media, Archives) para que las ejecuciones sean predecibles.
- Prueba primero con una carpeta pequeña y luego escala al árbol completo.
- Documenta la configuración de tus tareas (modo, filtros, programación) para que cualquiera del equipo pueda volver a ejecutarlas de forma segura.
- Durante migraciones intensivas, mantén los montajes como solo lectura para los usuarios y evitar ediciones en curso.

RcloneView hace que la sincronización Yandex Disk ↔ Google Drive sea sencilla: compara primero, copia de forma segura, programa el resto y monitorea todo desde un solo panel.


<CloudSupportGrid />
