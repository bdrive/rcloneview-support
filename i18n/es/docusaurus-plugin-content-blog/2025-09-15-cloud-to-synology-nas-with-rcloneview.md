---
slug: cloud-to-synology-nas-with-rcloneview
title: "Puente de la nube a NAS: haz copia de seguridad de Google Drive y OneDrive en Synology con RcloneView"
authors:
  - jay
description: "Mueve y sincroniza archivos desde unidades en la nube (p. ej., Google Drive, OneDrive) a tu NAS Synology usando el flujo de trabajo de clic primero de RcloneView: transferencias por arrastrar y soltar, comparación visual y sincronizaciones programadas sin línea de comandos."
keywords:
  - rcloneview
  - synology nas
  - copia de seguridad de google drive
  - copia de seguridad de onedrive
  - de la nube a nas
  - webdav
  - sftp
  - rclone GUI
  - sincronización programada
tags:
  - synology
  - google-drive
  - onedrive
  - cloud-file-transfer
---



import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Puente de la nube a NAS: haz copia de seguridad de Google Drive y OneDrive en Synology con RcloneView

> Mantén una copia de seguridad local y toma el control de tus datos. Refleja tus **unidades en la nube** en un **NAS Synology** con un flujo de trabajo limpio y de apuntar y hacer clic, sin necesidad de línea de comandos.

## De la nube al NAS, la forma inteligente: por qué importa

El almacenamiento en la nube es cómodo para la colaboración y el acceso desde cualquier lugar. Pero mantener una **segunda copia local** en un NAS Synology te ofrece copias de seguridad con versiones, restauraciones a velocidad de LAN e independencia de cualquier proveedor único. Con **RcloneView**, puedes conectar servicios en la nube populares (p. ej., **Google Drive**, **OneDrive** y otros compatibles con rclone) y tu NAS, y luego **previsualizar, copiar y programar** tareas desde una sola pantalla.

<!-- truncate -->

**Entendiendo las unidades en la nube (de un vistazo)**  
- Excelentes para la colaboración y el uso compartido en tiempo real.  
- Los límites/cuotas del proveedor pueden afectar a las migraciones grandes (planifica por lotes).  

**Entendiendo el NAS Synology (de un vistazo)**  
- Tu centro de almacenamiento siempre disponible en casa o en la oficina.  
- Accesible mediante **SMB/NFS** (montado como carpetas locales), o protocolos de red como **WebDAV** y **SFTP**.  
- Ideal para copias de seguridad centralizadas, alojamiento de contenido multimedia y archivado a largo plazo.

**¿Por qué llevar la nube al NAS?**  
- **Resiliencia**: mantén una copia utilizable sin conexión que controlas tú.  
- **Velocidad**: restaura carpetas grandes por LAN sin esperar por el ancho de banda de internet.  
- **Gobernanza**: unifica la retención, el acceso y la auditoría de forma local.

<!-- Obsidian note: CTA 컴포넌트 -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />
## Paso 1 – Preparación

Antes de empezar:

1. **Elige tu alcance** — ¿qué carpetas de Google Drive/OneDrive debe conservar el NAS?  
2. **Confirma la capacidad del NAS** — asegúrate de tener suficiente espacio libre y de que el recurso compartido/carpeta de destino esté listo.  
3. **Elige un método de conexión para tu NAS**  

   - **WebDAV**: habilita el **servidor WebDAV** de Synology y luego conéctate mediante WebDAV en RcloneView.  
   - **SMB**: habilita **SMB** en Synology y luego conéctate mediante SMB en RcloneView.  
   - **SFTP**: habilita SSH/SFTP en Synology y conéctate mediante **SFTP**.  
4. **Planifica tu cadencia** — migración única, sincronización periódica o tareas programadas nocturnas.  
5. **Ten en cuenta los límites del proveedor** — los movimientos grandes pueden requerir dividirse en lotes; considera hacer primero una prueba.

🔍 Tutorial útil: 

- [Integración de NAS Synology con RcloneView](/tutorials/synology-nas-cloud-transfer)

## Paso 2 – Configura las conexiones en RcloneView

RcloneView envuelve la configuración de rclone en un flujo guiado de clic en clic.

1. Abre **RcloneView** → haz clic en **`+ New Remote`**  
2. Agrega tu **unidad en la nube**  
   - **Google Drive**: inicio de sesión OAuth → asígnale un nombre (p. ej., `MyGoogleDrive`)  
   - **OneDrive**: inicio de sesión OAuth → asígnale un nombre (p. ej., `MyOneDrive`)  
   - (Otros compatibles con rclone se pueden agregar de forma similar)  
3. Agrega tu **NAS Synology de destino** usando **uno** de los siguientes métodos:  
   - **WebDAV**: endpoint del servidor WebDAV de Synology, credenciales → asígnale un nombre (p. ej., `MyNAS-WebDAV`)  
   - **SMB**: hostIP, puerto y cuenta del NAS → asígnale un nombre (p. ej., `MyNAS-SMB`)  
   - **SFTP**: hostname/IP, puerto y cuenta del NAS → asígnale un nombre (p. ej., `MyNAS-SFTP`)  
4. Confirma que ambos aparecen uno junto al otro en el panel del Explorador.

🔍 Guías útiles:  
- [Integración de NAS Synology con RcloneView](/tutorials/synology-nas-cloud-transfer)
- [Cómo agregar un remoto de Google Drive](https://rcloneview.com/support/howto/intro#step-2-adding-remote-storage-google-drive-example)  
- [Configuración rápida de OAuth (OneDrive/Google)](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)


<img src="/support/images/en/tutorials/synology-nas-webdav-and-google-drive.png" alt="synology nas webdav and google drive" class="img-medium img-center" />

## Paso 3 – Ejecuta las tareas de copia de seguridad/sincronización

RcloneView ofrece tres métodos prácticos. Empieza en pequeño y luego escala.

### A) Arrastrar y soltar (copia manual)
- Abre **Google Drive/OneDrive** en un lado y tu destino **NAS** en el otro, y luego **arrastra carpetas/archivos entre ambos**.  
- Ideal para movimientos selectivos y resultados rápidos.  

👉 Más información: [Copiar archivos mediante arrastrar y soltar](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

### B) Comparar y copiar (previsualizar cambios)
- Ejecuta **Comparar** para ver qué es nuevo/ha cambiado en la nube frente a tu NAS.  
- Copia solo lo que cambió: reduce sorpresas y tiempo.  

👉 Más información: [Comparar y administrar archivos](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results highlighting changed files" class="img-medium img-center" />

### C) Sincronización y tareas programadas (automatiza)
- Usa **Sincronizar** para reflejar las carpetas en la nube seleccionadas en tu recurso compartido del NAS.  
- Haz primero una **ejecución de prueba (dry-run)**, luego guárdala como una **tarea** reutilizable y añade una programación (nocturna/semanal).  

👉 Más información:
- [Sincronizar almacenamientos remotos](/howto/rcloneview-basic/synchronize-remote-storages)
- [Crear tareas de sincronización](/howto/rcloneview-basic/create-sync-jobs)
- [Programación y ejecución de tareas](/howto/rcloneview-advanced/job-scheduling-and-execution)
<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a saved job in RcloneView" class="img-medium img-center" />

## Conclusión — Puntos clave y consejos adicionales

- **Por qué hacerlo**: una segunda copia bajo tu control, restauraciones más rápidas por LAN y retención unificada.  
- **Cómo funciona**: RcloneView te permite conectar unidades en la nube y tu NAS Synology, y luego usar **Arrastrar y soltar**, **Comparar** o **Sincronizar**, con **programación** para copias de seguridad sin intervención.  
- **Escala con seguridad**: haz primero una prueba piloto, respeta las cuotas del proveedor y supervisa los registros de las tareas para mantener un rastro de auditoría limpio.

## Preguntas frecuentes

**P. ¿Puede RcloneView ejecutar copias de seguridad recurrentes automáticamente?**  
**R.** Sí: guarda tu sincronización como una **tarea** y prográmala (p. ej., nocturna). Verás el historial y el estado en el Administrador de tareas.

**P. ¿Qué pasa con iCloud?**  
**R.** Rclone es compatible con muchos proveedores. Para servicios sin un backend directo, considera exportar los datos localmente primero y luego usar RcloneView para moverlos a tu NAS.


**¿Listo para mantener una copia local y confiable de tu vida en la nube?**  


<!-- Obsidian note: Download 컴포넌트 -->
<CloudSupportGrid />
