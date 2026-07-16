---
slug: synology-to-cloud-backup-with-rcloneview
title: "Synology → Nube, fácil: copias de seguridad y sincronización fuera del sitio con RcloneView"
authors:
  - jay
description: Protege tu NAS Synology con copias de seguridad fuera del sitio en Backblaze, Google Drive, Amazon S3, pCloud, Wasabi y más—planifica, previsualiza y automatiza en la interfaz gráfica de RcloneView.
keywords:
  - rcloneview
  - copia de seguridad de synology nas
  - backblaze b2
  - google drive
  - amazon s3
  - wasabi
  - pcloud
  - copia de seguridad en la nube
  - sincronización programada
  - rclone GUI
tags:
  - synology
  - cloud-backup
  - s3
  - google-drive
  - Backblaze
  - wasabi
  - pcloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synology → Nube, fácil: copias de seguridad y sincronización fuera del sitio con RcloneView

> Mantén una segunda copia fuera del sitio sin scripts ni terminales. Haz copias de seguridad de tu **NAS Synology** en **Backblaze, Google Drive, Amazon S3, pCloud, Wasabi**, y más—de forma visual, fiable y programada.

## Introducción — ¿Por qué llevar tus copias de seguridad de Synology fuera del sitio?

Un NAS es fantástico para el acceso local y rápido—las fotos familiares, los proyectos creativos y las carpetas compartidas del equipo están a solo un salto de LAN. Pero **solo en las instalaciones** conlleva riesgos: robo, incendio, eliminación accidental o fallos de múltiples discos. Añadir una **copia en la nube fuera del sitio** te ofrece:

<!-- truncate -->

- **Resiliencia**: sobrevive a desastres locales con una copia remota y recuperable.  
- **Flexibilidad**: restaura desde cualquier lugar, incluso cuando estás fuera de la oficina/casa.  
- **Gobernanza**: combina la retención del NAS con el versionado y las políticas de los buckets en la nube.

**El NAS Synology de un vistazo**  
- Almacenamiento central accesible mediante **SMB/NFS** (montado como carpeta local) o mediante endpoints de red como **WebDAV** y **SFTP**.  
- Ideal para copias de seguridad siempre activas, alojamiento de multimedia y centros de archivos de equipo.

**Los destinos en la nube de un vistazo**  
- **Google Drive**: colaboración y compartición en Google Workspace.  
- **Amazon S3 / Wasabi / Backblaze B2**: almacenamiento de objetos con buckets, regiones y reglas de ciclo de vida.  
- **pCloud**: almacenamiento fácil de usar con una gestión de archivos generosa.  

**¿Por qué enviar del NAS a la nube ahora?**  
- Crea una **red de seguridad fuera del sitio**.  
- **Estandariza** las copias de seguridad en un único destino (o multi-nube).  
- Aprovecha las **políticas y el versionado** disponibles en muchas plataformas en la nube.

<!-- Obsidian note: CTA 컴포넌트 -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />
## Paso 1 — Preparación

Antes de empezar:

1. **Elige el alcance** — ¿qué carpetas compartidas de Synology (p. ej., `/photo`, `/projects`, `/backup`) irán a la nube?  
2. **Confirma la capacidad en la nube** — asegúrate de que la cuenta o el bucket de destino tienen espacio suficiente (más margen para las versiones).  
3. **Elige un método de conexión al NAS**  
   - **Ruta local**: monta el recurso compartido del NAS mediante **SMB/NFS** en tu sistema operativo y úsalo como **Local** en RcloneView.  
   - **WebDAV**: activa el **servidor WebDAV** de Synology y conéctate con WebDAV en RcloneView.  
   - **SFTP**: activa SSH/SFTP en Synology y conéctate con **SFTP**.  
4. **Elige tu nube** — Google Drive, Amazon S3/Wasabi, Backblaze B2, pCloud, etc.  
5. **Decide la periodicidad** — archivado puntual, sincronización periódica o **trabajos programados nocturnos**.  
6. **Haz una prueba piloto primero** — ejecuta una pequeña prueba para validar rutas, permisos y rendimiento.

🔍 Resumen útil:
- [Tutorial de Nube ↔ Synology](/tutorials/synology-nas-cloud-transfer)


## 3) Paso 2 — Configura las conexiones en RcloneView

RcloneView envuelve la configuración de rclone en un flujo guiado paso a paso.

1. Abre **RcloneView** → haz clic en **`+ New Remote`**  
2. **Añade Synology (origen)** mediante una de estas opciones:  
   - **Local**: elige tu carpeta NAS montada (p. ej., `Z:\NAS\Projects` o `/Volumes/NAS/Projects`)  
   - **WebDAV**: usa el endpoint/credenciales WebDAV de Synology → nómbralo (p. ej., `NAS-WebDAV`)  
   - **SFTP**: host/IP, puerto y cuenta → nómbralo (p. ej., `NAS-SFTP`)  
3. **Añade la Nube (destino)**, por ejemplo:  
   - **Google Drive**: inicio de sesión OAuth → nómbralo `MyGoogleDrive`  
   - **Amazon S3 / Wasabi**: proveedor **S3** → clave de acceso/secreto, región, bucket → nómbralo `MyS3` / `MyWasabi`  
   - **Backblaze B2**: proveedor **B2** (o endpoint compatible con S3 si procede) → nómbralo `MyB2`  
   - **pCloud**: flujo de inicio de sesión/token → nómbralo `MyPcloud`  
4. Confirma que ambos aparecen uno junto al otro en el panel del Explorador.

🔍 Guías útiles:  
- [Configuración rápida de OAuth (Google Drive, etc.)](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)
- [Añadir un remoto S3 (Amazon S3/Wasabi)](/howto/remote-storage-connection-settings/s3)
- [Tutorial de Nube ↔ Synology](/tutorials/synology-nas-cloud-transfer)

<img src="/support/images/en/tutorials/synology-nas-webdav-and-google-drive.png" alt="synology nas webdav and google drive" class="img-medium img-center" />

## 4) Paso 3 — Ejecuta la copia de seguridad/sincronización (tres métodos prácticos)

RcloneView ofrece tres enfoques sencillos. Empieza en pequeño y luego escala con confianza.

### A) Arrastrar y soltar (copia manual)
- Abre **Synology (Local/WebDAV/SFTP)** en un lado y tu **nube** en el otro, y luego **arrastra carpetas/archivos entre ambos**.  
- Ideal para movimientos selectivos y resultados rápidos.  

👉 Más información: [Copiar archivos mediante arrastrar y soltar](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

### B) Comparar y copiar (previsualizar cambios)
- Ejecuta **Comparar** para ver qué es nuevo/ha cambiado en el NAS frente a tu bucket/unidad en la nube.  
- Copia solo las diferencias—menos sorpresas, ejecuciones más rápidas.  

👉 Más información: [Comparar y gestionar archivos](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results highlighting changed files" class="img-medium img-center" />

### C) Sincronización y trabajos programados (automatizar)
- Usa **Sincronizar** para reflejar las carpetas seleccionadas del NAS en tu destino en la nube.  
- Haz primero una **ejecución de prueba (dry-run)**, y luego guárdala como un **Job** reutilizable y añade una programación (nocturna/semanal).  

👉 Más información:
- [Sincronizar almacenamientos remotos](/howto/rcloneview-basic/synchronize-remote-storages)
- [Crear trabajos de sincronización](/howto/rcloneview-basic/create-sync-jobs)
- [Programación y ejecución de trabajos](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a saved job in RcloneView" class="img-medium img-center" />

**Consejos profesionales**
- Para **nubes de tipo S3** (S3/Wasabi/B2 compatible con S3), crea los buckets con antelación y elige la región correcta.  
- Activa el **versionado** en los buckets compatibles para reversiones más seguras.  
- Mantén las fuentes del NAS **de solo lectura durante la transición** para evitar desviaciones.  
- Usa filtros para excluir carpetas de caché/temporales de las copias de seguridad.


## 5) Conclusión — Puntos clave y consejos adicionales

- **Por qué hacerlo**: una red de seguridad duradera fuera del sitio, opciones de recuperación ante desastres más rápidas y una retención unificada.  
- **Cómo funciona**: RcloneView conecta tu NAS Synology y tus destinos en la nube, y luego te permite **arrastrar y soltar**, **comparar** o **sincronizar**—con **programación** para copias de seguridad sin intervención manual.  
- **Escala con seguridad**: haz una prueba piloto primero, respeta las cuotas del proveedor y supervisa los registros de trabajos para tener un rastro de auditoría claro.


## Preguntas frecuentes

**P. ¿Puedo hacer copias de seguridad en varias nubes?**  
**R.** Sí—añade varios destinos (p. ej., S3 y Google Drive) y crea trabajos o programaciones separados para cada uno.

**P. ¿Necesito la línea de comandos?**  
**R.** No. RcloneView es una interfaz gráfica completa—configura remotos, previsualiza cambios, ejecuta sincronizaciones y programa trabajos sin CLI.


**¿Listo para poner tus copias de seguridad de Synology en piloto automático—fuera del sitio y bajo control?**  

<CloudSupportGrid />
