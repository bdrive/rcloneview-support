---
slug: migrate-jottacloud-to-onedrive-rcloneview
title: "Migra Jottacloud a OneDrive — Transfiere archivos con RcloneView"
authors:
  - tayson
description: "Guía paso a paso para migrar todos tus archivos de Jottacloud a Microsoft OneDrive usando RcloneView. Mueve toda tu biblioteca sin herramientas de línea de comandos."
keywords:
  - migración de jottacloud a onedrive
  - transferir jottacloud a onedrive
  - migrar jottacloud a onedrive
  - gui de transferencia entre nubes
  - herramienta de migración de jottacloud
  - migración en la nube a onedrive
  - rcloneview jottacloud onedrive
  - guía de migración de almacenamiento en la nube
tags:
  - RcloneView
  - jottacloud
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migra Jottacloud a OneDrive — Transfiere archivos con RcloneView

> Mueve toda tu biblioteca de Jottacloud a Microsoft OneDrive sin tocar la línea de comandos — RcloneView gestiona la transferencia entre nubes con monitoreo de progreso completo y verificación de integridad de archivos.

Muchos equipos migran de Jottacloud a OneDrive al consolidarse en torno a Microsoft 365, ganando una integración más estrecha con las apps de Office y herramientas empresariales más amplias. El desafío es transferir años de archivos con precisión y a gran escala. El motor de trabajos de nube a nube de RcloneView te permite mapear ambos remotos, ejecutar una copia verificada y confirmar la completitud con una comparación de carpetas integrada — todo desde una única interfaz gráfica, sin archivos de configuración de rclone que editar manualmente.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta Jottacloud y OneDrive como remotos

Abre RcloneView y ve a la pestaña **Remote**, luego haz clic en **New Remote**. Selecciona Jottacloud de la lista de proveedores y sigue las indicaciones de configuración en pantalla para autenticar tu cuenta.

A continuación, agrega un segundo remoto para OneDrive. OneDrive utiliza OAuth basado en navegador — RcloneView abrirá tu navegador predeterminado automáticamente para iniciar sesión en la cuenta. Una vez autorizado, la conexión se guarda en tu configuración de rclone y queda inmediatamente accesible en los paneles del Explorer.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Jottacloud remote in RcloneView Remote Manager" class="img-large img-center" />

Con ambos remotos conectados, ábrelos lado a lado usando el Explorer de doble panel de RcloneView. Haz clic derecho en tu carpeta de origen y elige **Get Size** para confirmar el volumen total de datos antes de comenzar — esto te da una línea base clara de migración y te ayuda a detectar discrepancias inesperadas después de la transferencia.

## Crea un trabajo de copia en Job Manager

Ve a **Home → Job Manager**, luego haz clic en **Add Job**. Establece tu raíz de Jottacloud (o subcarpeta) como origen y la carpeta de destino en OneDrive como destino. Elige **Copy** como tipo de trabajo para la migración inicial — esto preserva los archivos de origen intactos mientras se llena OneDrive sin tocar el origen.

En el paso 2 del asistente, aumenta **Number of file transfers** para transferir varios archivos de forma concurrente; esto reduce significativamente el tiempo total de migración para bibliotecas grandes. Activa **Enable checksum** para que cada archivo transferido se verifique por hash y tamaño, no solo por nombre de archivo — algo crítico en una migración única donde debe detectarse cualquier corrupción silenciosa de datos antes de dar de baja el origen.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a cloud-to-cloud migration job in RcloneView Job Manager" class="img-large img-center" />

Antes de la ejecución real, haz clic en **Dry Run** para previsualizar qué archivos se copiarán. Para un archivo de proyecto con miles de carpetas anidadas, este paso de vista previa saca a la luz problemas de longitud de ruta y archivos demasiado grandes antes de que provoquen fallos a mitad de la transferencia.

## Monitorea el progreso y la velocidad de transferencia

Una vez que el trabajo comienza, la pestaña **Transferring** en la vista de información inferior muestra el progreso en tiempo real: nombres de archivos individuales, velocidad de transferencia, bytes totales movidos y un contador de archivos en curso. Puedes cancelar el trabajo en cualquier momento sin corromper los archivos ya transferidos — el motor rclone subyacente de RcloneView gestiona las transferencias parciales de forma limpia, y un trabajo de Copy reanudado omite los archivos que ya existen en el destino con el mismo tamaño y checksum.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a Jottacloud to OneDrive transfer in RcloneView" class="img-large img-center" />

Para migraciones muy grandes que se ejecutan durante la noche, usa la bandeja del sistema para mantener RcloneView en ejecución en segundo plano. Las notificaciones de finalización del trabajo te avisarán cuando termine la transferencia.

## Verifica la completitud con Folder Compare

Después de que el trabajo de copia se complete, abre **Folder Compare** desde la pestaña Home. Configura el panel izquierdo con tu origen de Jottacloud y el panel derecho con el destino de OneDrive. RcloneView escanea ambos lados y resalta los archivos que solo están en el lado izquierdo y no se transfirieron, los archivos de tamaño diferente que pueden haberse corrompido, y cualquier archivo que solo esté en el lado derecho.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Jottacloud source and OneDrive destination to verify migration completeness" class="img-large img-center" />

Usa **Copy Right** para los archivos restantes que solo están en el lado izquierdo y así completar la transferencia. Cuando la comparación no muestre entradas exclusivas del lado izquierdo ni de tamaño diferente, tu contenido de Jottacloud estará reflejado en OneDrive de forma completa y precisa — listo para los flujos de trabajo de Microsoft 365.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agrega tu cuenta de Jottacloud a través de la pestaña Remote → New Remote y sigue las indicaciones.
3. Agrega tu cuenta de OneDrive a través de la pestaña Remote → New Remote (inicio de sesión OAuth mediante navegador).
4. Crea un trabajo de Copy en Job Manager, activa el checksum y ejecuta primero un Dry Run.
5. Después de la transferencia, abre Folder Compare para confirmar que no haya archivos exclusivos del lado izquierdo ni discrepancias.

Una migración limpia de Jottacloud a OneDrive es alcanzable en una sola sesión — sin scripts, sin sorpresas, y con un resultado verificado en el que puedes confiar antes de dar de baja el origen.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento en la nube de Jottacloud — Sincronización y copia de seguridad con RcloneView](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [Migra Jottacloud a Google Drive — Transfiere archivos con RcloneView](https://rcloneview.com/support/blog/migrate-jottacloud-to-google-drive-rcloneview)
- [Gestiona el almacenamiento en la nube de OneDrive — Sincronización y copia de seguridad con RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
