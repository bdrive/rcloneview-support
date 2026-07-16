---
slug: backup-google-drive-to-amazon-s3
title: Copia de seguridad de Google Drive a Amazon S3 con RcloneView
authors:
  - jay
description: Copia carpetas de Google Drive a Amazon S3 con las herramientas de apuntar y hacer clic de RcloneView—conecta una vez, ejecuta una copia de seguridad y conserva copias adicionales para mayor tranquilidad.
keywords:
  - rcloneview
  - google drive
  - amazon s3
  - copia de seguridad en la nube
  - sincronización en la nube
  - rclone gui
tags:
  - google-drive
  - amazon-s3
  - cloud-backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Copia de seguridad de Google Drive a Amazon S3 con RcloneView

> Mantén el trabajo en equipo activo en Google Drive y guarda una copia de seguridad en Amazon S3. Con RcloneView completas toda la copia de seguridad con clics—sin scripts, sin línea de comandos.

## ¿Qué hace útil esta combinación?

- **Google Drive** es donde viven día a día tus documentos, hojas de cálculo y carpetas compartidas.
- **Amazon S3** conserva copias durante años con versionado, políticas de ciclo de vida y niveles de archivo de bajo costo.
- **RcloneView** los conecta con un explorador de doble panel, vistas previas de comparación y trabajos programados, para que siempre sepas qué se está moviendo.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Antes de empezar

1. **Elige las carpetas que importan** – revisa espacios de proyecto, unidades compartidas y cualquier carpeta de traspaso. Omite carpetas de caché o temporales que no necesites.
2. **Crea o elige un bucket de S3** – decide la región, el nombre del bucket y el cifrado predeterminado (SSE-S3 o SSE-KMS). [Documentación de AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/serv-side-encryption.html)
3. **Revisa los límites del proveedor** – Google limita las transferencias de la API de Drive a **750 GB por usuario al día** y archivos de hasta **5 TB**. Planifica los traslados grandes en varios días. [Google for Developers](https://developers.google.com/drive/api/guides/limits) [Ayuda de Google](https://support.google.com/drive/answer/37603)
4. **Planifica la estructura de carpetas** – prefijos de S3 como `drive-backup/marketing/2025/` facilitan la revisión posterior de las instantáneas.
5. **Míralo una vez en la app** – revisa rápidamente las capturas del explorador en [Explorar y gestionar almacenamiento remoto](/howto/rcloneview-basic/browse-and-manage-remote-storage) para familiarizarte con el diseño.

## Paso 1 — Conecta ambos servicios en RcloneView

1. Abre **RcloneView** → pulsa **`+ New Remote`**.
2. Elige **Google Drive**, inicia sesión y dale al remoto un nombre claro como `Drive-Main`. Si vas a respaldar unidades compartidas, actívalas durante la configuración.
3. Añade otro remoto para **Amazon S3**. Pega tu clave de acceso/secreto (o asume un rol de IAM), elige el bucket de destino y nómbralo `S3-Backup`.
4. Confirma que ambos remotos aparecen uno junto al otro en el explorador. La [guía del Gestor de remotos](/howto/rcloneview-basic/remote-manager) tiene capturas adicionales si necesitas un repaso.

<img src="/support/images/en/tutorials/browsing-aws-s3-and-google-drive-via-ec2-rclone.png" alt="browsing aws s3 and google drive via ec2 rclone" class="img-medium img-center" />

## Paso 2 — Planifica el trabajo de copia de seguridad

- **Simulacro con una carpeta**: Abre `Drive-Main` a la izquierda y `S3-Backup` a la derecha. Arrastra una pequeña carpeta de prueba de un lado a otro para ver el cuadro de diálogo de transferencia.
- **Usa Comparar**: La herramienta Comparar destaca los archivos nuevos y modificados antes de copiar. Es la misma vista que se muestra en [Comparar el contenido de carpetas](/howto/rcloneview-basic/compare-folder-contents).

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare view in RcloneView before copying Google Drive files" class="img-medium img-center" />

## Paso 3 — Ejecuta la primera copia de seguridad

1. En la barra de herramientas elige **Copiar** (una sola vez) o **Sincronizar (dirección de copia)** si quieres que el destino refleje Drive sin eliminar datos en Drive.
2. Añade reglas de filtrado si quieres omitir carpetas como `/Personal/`.
3. Ejecuta primero una **Simulación** (Dry Run). Verás un resumen claro de las transferencias pendientes.
4. Haz clic en **Iniciar**. Observa el progreso en el Monitor de trabajos—bytes transferidos, recuento de archivos y cualquier advertencia aparecen aquí.

## Paso 4 — Programa copias de seguimiento

Una vez que la primera ejecución se vea bien:

1. Guárdala como un **Trabajo** directamente desde el cuadro de diálogo de finalización.
2. Abre el **Gestor de trabajos** → configura una programación diaria o semanal. Esto sigue el mismo patrón que la [guía de programación de trabajos](/howto/rcloneview-advanced/job-scheduling-and-execution).
3. Revisa la vista previa del calendario para confirmar los horarios y deja que RcloneView se encargue del resto.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Scheduling a backup job in RcloneView" class="img-medium img-center" />

## Mantén ordenada la copia en S3

- **Políticas de ciclo de vida**: Mueve las copias de seguridad de más de 90 días a Glacier Instant Retrieval o Deep Archive para reducir costos. [Documentación de AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html)
- **Versionado de buckets**: Actívalo si quieres que se conserve cada sobrescritura. Cada ejecución de RcloneView se convierte entonces en un punto de restauración.
- **Etiquetas**: Añade etiquetas como `Team=Finance` o `Compliance=SOC2` a los objetos para que la facturación y las auditorías sean sencillas.

Nuestro blog sobre [transferencias de nube a nube con RcloneView](/blog/Effortless-Cloud-to-Cloud-Transfers-&-Syncing) tiene más ideas para filtrar y organizar copias en la nube.

## Supervisa y restaura con confianza

- **Historial de trabajos**: Cada ejecución registra bytes, duración y mensajes de error. Exporta un registro directamente desde la interfaz cuando los auditores lo pidan.
- **Paneles en la nube**: Usa S3 Storage Lens o CloudWatch para vigilar el crecimiento del bucket. [Documentación de AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-lens.html)
- **Pasos de restauración**: Elige la instantánea necesaria en S3 y luego cópiala de vuelta a Drive o a otro bucket usando la misma plantilla de trabajo de RcloneView.

## Guías y recursos relacionados

- [Configuración rápida de OAuth de Google en RcloneView](/howto/remote-storage-connection-settings/add-oath-online-login)
- [Configuración del remoto Amazon S3](/howto/remote-storage-connection-settings/s3) — capturas paso a paso de las credenciales.
- [Monitoreo de transferencias en tiempo real](/howto/rcloneview-basic/real-time-transfer-monitoring) — cómo leer los gráficos de progreso de los trabajos.

## Preguntas frecuentes

**¿Se incluyen Google Docs, Sheets y Slides?**
Sí. RcloneView los exporta en los formatos que elijas (DOCX, XLSX, etc.) al ejecutar la copia de seguridad.

**¿Qué pasa si alcanzo el límite diario de 750 GB?**
RcloneView se pausa con un mensaje claro. Espera 24 horas o cambia a otra cuenta de servicio de Google, luego reinicia el trabajo—se reanuda donde lo dejó.

**¿Puedo usar Wasabi o Cloudflare R2 en lugar de AWS S3?**
Claro que sí. Configura un remoto compatible con S3 en RcloneView y apúntalo al endpoint del proveedor.

**¿Listo para mantener seguros y localizables tus archivos de Google Drive a largo plazo?**

<CloudSupportGrid />
