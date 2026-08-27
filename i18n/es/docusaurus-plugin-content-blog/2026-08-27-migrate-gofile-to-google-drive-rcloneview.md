---
slug: migrate-gofile-to-google-drive-rcloneview
title: "Migrar de Gofile a Google Drive — Transferir archivos con RcloneView"
authors:
  - steve
description: "Mueva archivos de Gofile a Google Drive con RcloneView — conecte ambos remotos, transfiera directamente de nube a nube y automatice recogidas recurrentes."
keywords:
  - migrar Gofile a Google Drive
  - transferencia de Gofile a Google Drive
  - mover archivos de Gofile a Google Drive
  - migración de RcloneView Gofile
  - configuración de token de acceso de Gofile
  - herramienta de transferencia de nube a nube
  - sincronización de Gofile Google Drive
  - consolidar almacenamiento en la nube
  - transferencia de archivos entre nubes
  - gestión de archivos de Gofile
tags:
  - RcloneView
  - gofile
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar de Gofile a Google Drive — Transferir archivos con RcloneView

> Traiga los archivos entregados a través de Gofile directamente a Google Drive con RcloneView, sin descargarlos localmente primero ni cambiar entre pestañas del navegador.

Gofile es un punto de entrega común para el intercambio puntual de archivos — un cliente envía un lote de recursos, un contratista sube entregables, un enlace de descarga se pasa por todo un equipo. Pero no es donde nadie quiere que ese contenido viva a largo plazo. RcloneView conecta tanto Gofile como Google Drive como remotos en la misma ventana, de modo que sacar archivos de Gofile e ingresarlos a un almacenamiento permanente y organizado en Google Drive es una transferencia directa en lugar de un ciclo de descarga y recarga.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Gofile y Google Drive

Gofile usa entrada de credenciales en lugar de OAuth: genere un Access Token desde la página de perfil de su cuenta de Gofile y péguelo en la pantalla New Remote. Google Drive, en cambio, usa OAuth basado en navegador — haga clic a través del asistente New Remote y autentíquese en la ventana emergente, sin token que copiar. Agregue ambos como remotos separados y aparecerán como pestañas que puede abrir en paneles Explorer adyacentes.

<img src="/support/images/en/blog/new-remote.png" alt="Agregando remotos de Gofile y Google Drive en RcloneView" class="img-large img-center" />

A diferencia de las herramientas que solo montan, RcloneView también sincroniza y compara carpetas entre remotos — con la licencia FREE — así que esta misma configuración de dos remotos cubre igual de bien una limpieza puntual o una rutina de recogida continua.

## Transferir archivos directamente entre remotos

Abra Gofile en el panel izquierdo y Google Drive en el derecho, luego seleccione los archivos o carpetas a mover. Arrastrar entre dos remotos distintos copia en lugar de mover, así que nada desaparece de Gofile hasta que lo elimine explícitamente — útil si quiere confirmar que la transferencia llegó bien antes de limpiar el origen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferencia de archivos de Gofile a Google Drive en RcloneView" class="img-large img-center" />

Para lotes más grandes, haga clic derecho y use Copy o Download en lugar de arrastrar y soltar — la pestaña Transferring en el Info View inferior muestra el progreso en vivo, la velocidad de transferencia y el número de archivos, para que pueda confirmar que todo llegó antes de cerrar la aplicación.

## Automatizar recogidas recurrentes

Si Gofile sigue recibiendo nuevas entregas — entregas recurrentes de clientes, exportaciones programadas — una tarea de sincronización guardada es mejor que repetir la transferencia manual cada vez. El asistente de cuatro pasos del Job Manager le permite establecer Gofile como origen y una carpeta específica de Google Drive como destino, aplicar un filtro de antigüedad máxima de archivo para que solo se recojan las subidas recientes, y ejecutar Dry Run para previsualizar exactamente qué se copiaría antes de que algo se mueva realmente.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Programando una tarea de sincronización recurrente de Gofile a Google Drive en RcloneView" class="img-large img-center" />

Job History registra después cada ejecución — estado, número de archivos, duración — así que puede confirmar que una recogida programada se completó sin abrir la aplicación para revisarlo.

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agregue Gofile como remoto usando su Access Token de la página de cuenta de Gofile.
3. Agregue Google Drive como remoto mediante el inicio de sesión OAuth en el navegador.
4. Abra ambos en paneles Explorer lado a lado y arrastre su primer lote, o cree una tarea de sincronización para cualquier transferencia recurrente.

Una vez que ambos remotos están en la misma ventana, sacar contenido de Gofile e ingresarlo a un almacenamiento organizado en Google Drive deja de depender de cuánto tiempo permanezca válido un enlace de compartición.

---

**Guías relacionadas:**

- [Gestionar el almacenamiento de Gofile — Sincronizar y respaldar archivos con RcloneView](https://rcloneview.com/support/blog/manage-gofile-cloud-sync-backup-rcloneview)
- [Gestionar archivos de Google Drive y sincronización en la nube con RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Solucionar la cuota de almacenamiento excedida de Google Drive — Transferir archivos con RcloneView](https://rcloneview.com/support/blog/fix-google-drive-storage-quota-exceeded-rcloneview)

<CloudSupportGrid />
