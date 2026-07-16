---
slug: photographer-multi-cloud-delivery-with-rcloneview-dec
title: "Guía para fotógrafos: entrega galerías a cualquier nube de cliente con RcloneView"
authors:
  - jay
description: "Cómo preparar una galería una sola vez y entregarla a Drive, Dropbox, OneDrive/SharePoint, Box y S3/Wasabi sin volver a subir archivos ni usar varias apps de proveedores."
keywords:
  - rcloneview
  - photography workflow
  - multi cloud
  - client delivery
  - google drive
  - dropbox
  - onedrive
  - box
  - wasabi
  - s3
tags:
  - cloud
  - sync
  - tutorial
  - photography
  - multi-cloud
  - wasabi
  - google-drive
  - onedrive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Guía para fotógrafos: entrega galerías a cualquier nube de cliente con RcloneView

> Prepara tus archivos finales una sola vez y luego distribúyelos al almacenamiento que cada cliente exija: Google Drive, Dropbox, OneDrive/SharePoint, Box o S3/Wasabi/R2. RcloneView te ofrece una interfaz de dos paneles sobre rclone con Comparar, Trabajos y velocidad de nube a nube para que dejes de volver a subir la misma galería toda la noche.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />
<!-- Image placeholder: two-pane RcloneView with local "Client_Finals" on the left and tabs for Drive, Dropbox, OneDrive, Box, and Wasabi on the right. -->


## Por qué los fotógrafos necesitan esto

- Los clientes a menudo requieren que las cargas se hagan en su propio almacenamiento (por política o retención) en lugar de un enlace público.  
- Cada trabajo tiene destinos distintos: la agencia quiere Drive, la marca quiere una solicitud de archivo de Dropbox, el retocador trabaja en OneDrive, el archivo va en Wasabi/S3.  
- Volver a subir 8-12 GB por cliente satura la subida de casa; las apps de los proveedores dan errores poco claros.  
- Se necesitan actualizaciones parciales: enviar solo las selecciones cambiadas sin volver a exportar ni volver a subir todo.  
- A veces preparas los archivos en una VM en la nube por velocidad; los inicios de sesión en el navegador ahí resultan incómodos.

RcloneView cubre más de 100 proveedores en una sola interfaz y puede trasladar las transferencias pesadas a un rclone alojado en la nube cuando tu enlace de subida es el cuello de botella.

<img src="/support/images/en/tutorials/new-remote-all-remotes.png" alt="rcloneview multi cloud explorer" class="img-large img-center" />



## Configuración rápida (10 minutos)

1. Instala RcloneView (Win/macOS/Linux): https://rcloneview.com/src/download.html  
2. Agrega los remotos que usan tus clientes mediante **Remote -> + New Remote**:  
   - Google Drive, Dropbox, OneDrive/SharePoint, Box (OAuth).  
   - S3/Wasabi/R2/B2 (compatible con S3: endpoint + claves).  
   - WebDAV/SFTP para endpoints personalizados.  
3. Opcional: ejecuta **rclone externo** en una VM en la nube para velocidad de nube a nube. Guía: https://rcloneview.com/support/tutorials/new-window-with-external-rclone (el patrón funciona para cualquier par).

👉 Referencias de configuración de remotos:  
- Agregar Google Drive: [guía paso a paso](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)  
- Agregar S3/Wasabi: [configuración compatible con S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)  

<!-- Image placeholder: “Add Remote” dialog with Drive, Dropbox, OneDrive, Box, Wasabi tiles highlighted. -->
<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## Flujo de entrega: prepara una vez, entrega en todas partes

1. Prepara los archivos finales en `Projects/Client/Finals` (SSD local o NAS).  
2. Abre dos paneles: izquierda = Finals, derecha = nube destino.  
3. Haz clic en **Compare** para ver qué falta; luego **Copy ->** para enviar solo los archivos nuevos o modificados.  
4. Cambia la pestaña derecha a la siguiente nube de cliente; reutiliza el mismo origen, sin una segunda carga local.  
5. Guarda cada flujo como un **Job** para clientes recurrentes; ejecútalo o prográmalo.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="compare display select" class="img-large img-center" />

👉 Documentación de funciones:  
- Compare: [cómo funciona](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)  
- Crear Jobs: [creación de trabajos](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)  
- Ejecutar y gestionar trabajos: [ejecución de trabajos](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)  
- Programación: [guía de programación](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<!-- Image placeholder: Compare results showing “missing on OneDrive/Dropbox” before copy. -->
<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="job run click" class="img-large img-center" />
## Gestión de solicitudes comunes de fotógrafos

- La agencia quiere Drive + Wasabi: copia a Drive, cambia la pestaña a Wasabi, copia de nuevo, sin una segunda carga local.  
- La marca envía un enlace de solicitud de Dropbox y el retocador usa Box: mantén ambos remotos abiertos, arrastra a cada uno sin volver a exportar ni volver a subir.  
- El cliente cambia 10 selecciones después de la aprobación: ejecuta Compare o Sync con **Dry Run**; solo se mueven los archivos modificados.  
- El cliente prohíbe enlaces públicos: entrega dentro de su tenant (Drive/OneDrive/Dropbox/Wasabi) sin generar comparticiones externas.  
- Estación de trabajo compartida: activa el bloqueo de la app (tutorials/enable-app-lock.md) para proteger las credenciales almacenadas.

<!-- Image placeholder: Transfer panel showing throughput, retries, and cloud-to-cloud copy success. -->

## Nube a nube cuando tu subida es débil

- Inicia `rclone rcd` en una VM en la nube (EC2/GCE), abre una **New Window** en RcloneView, conéctate a ese daemon, agrega los remotos ahí y ejecuta Compare/Copy.  
- Patrón de rclone externo (ejemplo OneDrive -> Wasabi): [ejemplo de nube a nube](https://rcloneview.com/support/tutorials/external-rclone-onedrive-sharepoint-to-wasabi)
- Guías de autenticación sin interfaz gráfica: [OneDrive headless](https://rcloneview.com/support/howto/remote-storage-connection-settings/ec2-onedrive-headless) y [Google Drive headless](https://rcloneview.com/support/howto/remote-storage-connection-settings/ec2-google-drive-connection)  


<!-- Image placeholder: New Window in RcloneView showing connection to an external rclone daemon. -->


## Mini guía práctica (semana ocupada)

1) Remotos: Drive (agencia), Dropbox (marca), OneDrive (retocador), Wasabi (archivo).  
2) Pestañas: izquierda = Finals; derecha = una pestaña por remoto.  
3) Automatiza: guarda cada uno como un Job; programa una actualización semanal para campañas en curso.  
4) Verifica: revisa el historial/registros de Jobs; envía enlaces con confianza.

<!-- Image placeholder: Job Manager listing four delivery jobs with last-run status. -->

## ¿Por qué no simplemente enviar un enlace público?

- Si el cliente solo quiere un enlace público, ya terminaste.  
- Usa RcloneView cuando los clientes necesiten los archivos dentro de su propio almacenamiento (por política/retención), o cuando debas entregar a múltiples destinos sin volver a subir, con actualizaciones parciales, registro y velocidad de nube a nube.

## Resumen

Los fotógrafos no necesitan tres apps de proveedores para satisfacer tres nubes. Con RcloneView preparas una vez, comparas, copias y programas Jobs entre Drive, Dropbox, OneDrive/SharePoint, Box y S3/Wasabi. Registros claros, reintentos y descarga opcional de nube a nube significan menos noches largas y entregas más rápidas.

<CloudSupportGrid />
