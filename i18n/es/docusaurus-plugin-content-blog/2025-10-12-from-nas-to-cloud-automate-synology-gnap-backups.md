---
slug: from-nas-to-cloud-automate-synology-qnap-backups
title: "De NAS a la nube: automatiza las copias de seguridad de Synology y QNAP con RcloneView"
authors:
  - steve
description: Haz una copia de seguridad de tu NAS Synology o QNAP en Google Drive, OneDrive, S3 o cualquier nube compatible con RcloneView. Configura sincronizaciones programadas, supervisa los trabajos y mantén copias externas sin esfuerzo, sin necesidad de línea de comandos.
keywords:
  - copia de seguridad en la nube para Synology
  - sincronización en la nube para QNAP
  - copia de seguridad externa de NAS
  - WebDAV
  - configuración de Rclone para NAS
  - rcloneview
  - automatización de copias de seguridad en la nube
tags:
  - nas
  - synology
  - qnap
  - cloud-backup
  - webdav
  - s3
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# De NAS a la nube: automatiza las copias de seguridad de Synology y QNAP con RcloneView

> Protege los datos de tu NAS sin necesidad de scripts. Usa **RcloneView** para conectar dispositivos **Synology** o **QNAP** directamente a tu almacenamiento en la nube favorito—**Google Drive**, **OneDrive**, **Amazon S3** o **WebDAV**—y programa copias de seguridad externas automáticas.

## Por qué hacer copias de seguridad de tu NAS en la nube

Los sistemas NAS como Synology y QNAP son perfectos para el almacenamiento local, las bibliotecas multimedia y la compartición de archivos, pero siguen siendo vulnerables a robos, incendios o fallos de hardware. Las copias de seguridad externas en la nube añaden una capa crítica de protección, ya que garantizan que tus datos sobrevivan aunque tu NAS no lo haga.

**RcloneView** ofrece a los propietarios de NAS una forma sencilla de automatizar ese proceso, con:
- **Sin configuración de línea de comandos**
- **Transferencias mediante arrastrar y soltar**
- **Vistas previas visuales de sincronización**
- **Copias de seguridad programadas**
- **Compatibilidad con más de 40 proveedores de nube**

<!-- truncate -->

### Flujos de trabajo comunes de NAS a la nube

| Tipo de NAS | Nube recomendada | Protocolo | Caso de uso ideal |
|---|---|---|---|
| **Synology** | Google Drive, OneDrive, S3 | WebDAV / S3 | Copia de seguridad personal o de pequeña empresa |
| **QNAP** | Amazon S3, Backblaze B2, Dropbox | S3 / WebDAV | Archivo de medios y proyectos |
| **Ambos** | Cloudflare R2, Wasabi, pCloud | Compatible con S3 | Almacenamiento asequible a largo plazo |

> Combina la velocidad local con la resiliencia de la nube: **RcloneView** conecta tu NAS y la nube en una sola interfaz gráfica.

---

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Paso 1 — Preparación

Antes de comenzar la configuración de tu copia de seguridad:

1. **Habilita el acceso de red en tu NAS**  
   - Para **Synology**, habilita el **servidor WebDAV** o el **servicio compatible con S3** en DSM.  
   - Para **QNAP**, usa **Hybrid Backup Sync (HBS3)** o habilita **WebDAV/S3** en App Center.  

2. **Planifica tus destinos de copia de seguridad**  
   - `/homes/` o `/photo/` para datos personales  
   - `/projects/` o `/shared/` para carpetas de equipo  

3. **Comprueba el espacio de almacenamiento disponible** en el proveedor de nube elegido.  

4. **Decide tu programación** — sincronizaciones diarias, archivos semanales o duplicado continuo.  

🔍 Guías útiles:  
- [Conectar un NAS mediante WebDAV en RcloneView](/howto/remote-storage-connection-settings/webdav)  
- [Añadir un remoto compatible con S3 (Wasabi, Cloudflare R2, etc.)](/howto/remote-storage-connection-settings/s3)  

---

## Paso 2 — Conecta tu NAS y tu almacenamiento en la nube en RcloneView

El asistente de configuración de RcloneView facilita la conexión de cuentas de NAS y de la nube.

1. Abre **RcloneView** → haz clic en **`+ New Remote`**.  
2. Selecciona tu **proveedor de nube** (por ejemplo, Google Drive, OneDrive, Amazon S3, Wasabi).  
3. Sigue las indicaciones de inicio de sesión o clave de API y asígnale un nombre reconocible (por ejemplo, `MyS3Backup` o `Drive-Archive`).  
4. En la pestaña **Local** de la izquierda, navega hasta tu **directorio NAS montado** o conéctate a tu NAS mediante WebDAV u otros protocolos compatibles.
5. Confirma que ambos lados (NAS local y remoto en la nube) sean visibles en el panel del Explorador.

---

## Paso 3 — Automatiza tu copia de seguridad de NAS a la nube

Elige el método que mejor se adapte a tu flujo de trabajo:

### A) **Arrastrar y soltar (copia única)**  
Arrastra carpetas desde el lado de tu NAS hasta el panel del remoto en la nube para subidas rápidas. Perfecto para copias de seguridad puntuales o archivos pequeños.  

👉 Más información: [Copiar archivos mediante arrastrar y soltar](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

---

### B) **Comparar y copiar (actualizaciones incrementales)**  
Previsualiza qué es nuevo, ha cambiado o falta antes de sincronizar. Copia solo los archivos actualizados para minimizar el uso de ancho de banda.  

👉 Más información: [Comparar y gestionar archivos](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results highlighting changed files in RcloneView" class="img-medium img-center" />

---

### C) **Sincronización y trabajos programados (copia de seguridad totalmente automatizada)**  
Configura un **trabajo de sincronización** que duplique tu NAS en la nube automáticamente.  
Ejecuta primero **pruebas en seco (dry-run)** y luego configura programaciones recurrentes (por ejemplo, nocturnas o semanales).  

👉 Más información:  
- [Sincronizar almacenamientos remotos](/howto/rcloneview-basic/synchronize-remote-storages)  
- [Crear trabajos de sincronización](/howto/rcloneview-basic/create-sync-jobs)  
- [Programación y ejecución de trabajos](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a scheduled NAS to Cloud backup job" class="img-medium img-center" />

---

## Consejos profesionales

- **Usa WebDAV por simplicidad** — la mayoría de los sistemas NAS lo admiten de forma nativa.  
- **Supervisa tu ancho de banda** — programa las copias de seguridad en horas de menor tráfico.  
- **Divide los conjuntos de datos grandes** — haz primero la copia de seguridad de las carpetas críticas y luego de los archivos.  
- **Habilita el cifrado** — añade una capa `crypt` de rclone para datos sensibles.  
- **Prueba las restauraciones** — confirma que tus datos en la nube se pueden descargar y abrir correctamente.  

---

## Conclusión — Tranquilidad externa, hecha fácil

- **Por qué importa:** tu NAS almacena tus datos más importantes; hacer una copia de seguridad en la nube lo protege de un fallo físico.  
- **Cómo funciona:** RcloneView conecta tu NAS mediante WebDAV o S3, sincroniza con la nube y automatiza los trabajos recurrentes.  
- **Qué obtienes:** una rutina de copia de seguridad segura, escalable y sin intervención manual, con total transparencia.

Se acabaron los scripts o los comandos SSH: **RcloneView** convierte la copia de seguridad de NAS a la nube en un flujo de trabajo de un solo clic.

---

## Preguntas frecuentes

**P. ¿Puedo hacer copias de seguridad de Synology y QNAP con RcloneView?**  
**R.** Sí—cualquier NAS compatible con **WebDAV**, **S3** o integración **SMB** puede conectarse a RcloneView.

**P. ¿Qué servicios en la nube son mejores para la copia de seguridad de NAS?**  
**R.** Google Drive y OneDrive para uso general; almacenamiento compatible con S3 (Wasabi, R2, Backblaze) para archivos grandes o a largo plazo.

**P. ¿Necesito experiencia con la línea de comandos?**  
**R.** En absoluto—RcloneView gestiona todas las configuraciones de rclone a través de su interfaz gráfica.

**P. ¿Con qué frecuencia puedo programar copias de seguridad?**  
**R.** Con la frecuencia que quieras—diaria, cada hora, o incluso sincronizaciones continuas.

**P. ¿Puedo cifrar las copias de seguridad de mi NAS?**  
**R.** Sí—usa el backend `crypt` de rclone en RcloneView para añadir cifrado a tus copias de seguridad en la nube.

**¿Listo para automatizar tus copias de seguridad de NAS a la nube y olvidarte de las subidas manuales para siempre?**

<CloudSupportGrid />
