---
slug: manage-terabox-cloud-sync-backup-rcloneview
title: "Gestiona el almacenamiento de Terabox — Sincroniza y haz copias de seguridad de archivos con RcloneView"
authors:
  - alex
description: "Gestiona el almacenamiento en la nube de Terabox con RcloneView — sincroniza, haz copias de seguridad y transfiere archivos entre más de 90 proveedores desde una sola interfaz multiplataforma. No se requiere CLI."
keywords:
  - Terabox sync
  - Terabox backup
  - manage Terabox storage
  - Terabox RcloneView
  - Terabox cloud management
  - Terabox file transfer
  - sync Terabox to Google Drive
  - Terabox cloud backup tool
  - RcloneView Terabox guide
  - cloud storage manager Terabox
tags:
  - RcloneView
  - terabox
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona el almacenamiento de Terabox — Sincroniza y haz copias de seguridad de archivos con RcloneView

> Conecta Terabox a RcloneView para obtener una experiencia completa de gestión en la nube — explora, sincroniza, haz copias de seguridad y transfiere tus archivos sin tocar la línea de comandos.

Terabox ofrece una amplia cuota de almacenamiento en la nube gratuita, lo que lo convierte en una opción popular para almacenar archivos de video, proyectos y copias de seguridad personales. Pero gestionar ese almacenamiento de manera eficiente — especialmente cuando necesitas mover archivos a otros proveedores o programar copias de seguridad periódicas — requiere una herramienta adecuada. RcloneView monta Y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux, por lo que Terabox encaja de forma natural en cualquier flujo de trabajo multi-nube que ya tengas.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta Terabox a RcloneView

Añadir Terabox como remoto solo lleva un minuto. Abre RcloneView y ve a la pestaña **Remote**, luego haz clic en **New Remote**. Desplázate por la lista de proveedores y selecciona Terabox, introduce las credenciales de tu cuenta cuando se te solicite y guarda. RcloneView almacena la conexión en su configuración de rclone integrada, para que nunca tengas que repetir la configuración.

Una vez conectado, Terabox aparece como una pestaña en el panel Explorer. Puedes explorar tus carpetas, crear nuevos directorios, renombrar archivos y comprobar el uso del almacenamiento — todo desde la misma interfaz de dos paneles que usas para el resto de proveedores. La barra de ruta de navegación (breadcrumb) facilita moverse por jerarquías de carpetas profundas sin perder de vista dónde estás.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Terabox as a new remote in RcloneView" class="img-large img-center" />

## Sincroniza y haz copias de seguridad de archivos de Terabox

El asistente de sincronización de cuatro pasos de RcloneView te permite configurar un trabajo de copia de seguridad de Terabox en cuestión de minutos. Establece Terabox como origen, elige cualquier destino — una carpeta local, una unidad externa u otro proveedor en la nube — y nombra el trabajo. El paso avanzado te permite ajustar las transferencias simultáneas y habilitar la verificación de checksum, garantizando que cada archivo que llega al destino coincida con el original byte a byte.

Antes de comprometerte con una sincronización completa, ejecuta una **Dry Run** desde el Job Manager para previsualizar exactamente qué archivos se copiarán o eliminarán. Esto resulta especialmente útil al trabajar con archivos grandes de Terabox, donde una eliminación accidental podría ser costosa. Una vez que estés satisfecho con la vista previa, ejecuta el trabajo y supervisa el progreso en tiempo real en la pestaña Transferring, en la parte inferior de la pantalla.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job from Terabox in RcloneView" class="img-large img-center" />

## Transfiere archivos de Terabox a otras nubes

Un caso de uso común es migrar contenido fuera de Terabox hacia un proveedor con una residencia de datos regional más estricta o costos de salida más bajos. Con ambos remotos abiertos en paneles Explorer lado a lado, puedes arrastrar archivos directamente desde Terabox a Amazon S3, Google Drive, Backblaze B2 o cualquier otro de los proveedores compatibles con RcloneView. Arrastrar y soltar entre diferentes remotos siempre copia en lugar de mover, por lo que tus archivos originales de Terabox permanecen intactos hasta que decidas eliminarlos.

Para migraciones más grandes, crea un trabajo de Copy o Sync dedicado. RcloneView admite sincronización 1:N en la licencia FREE, lo que significa que puedes enviar una sola carpeta de Terabox a múltiples destinos en una sola ejecución de trabajo — útil cuando quieres tanto una copia de seguridad principal como una copia de archivo en frío.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Terabox to another provider" class="img-large img-center" />

## Revisa el historial de trabajos y supervisa las transferencias

Después de cada ejecución, RcloneView registra el resultado en **Job History**. Puedes filtrar por rango de fechas, comprobar si un trabajo se completó, falló o fue cancelado, y revisar el total de bytes transferidos y la velocidad de transferencia. Para cualquiera que gestione una gran biblioteca de Terabox a través de múltiples flujos de trabajo, este registro de auditoría es invaluable para detectar anomalías — un aumento repentino en el número de errores suele indicar un límite de cuota o un problema de red que vale la pena investigar.

Los titulares de la licencia PLUS pueden adjuntar una programación de tipo cron a cualquier trabajo de Terabox y habilitar notificaciones al finalizar, de modo que la copia de seguridad se ejecute verdaderamente sin intervención.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history view showing Terabox sync results in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abre la pestaña **Remote** y haz clic en **New Remote**, luego selecciona Terabox e introduce tus credenciales.
3. Explora tus carpetas de Terabox en el panel Explorer e identifica qué contenido deseas respaldar o transferir.
4. Crea un trabajo de Sync o Copy usando el asistente de cuatro pasos, ejecuta un Dry Run para verificar el plan y luego ejecútalo.

Una copia de seguridad de Terabox bien configurada toma minutos en configurarse y te brinda plena confianza de que tu contenido almacenado está replicado de forma segura dondequiera que lo necesites.

---

**Guías relacionadas:**

- [Sincroniza el almacenamiento gratuito de Terabox con otras nubes usando RcloneView](https://rcloneview.com/support/blog/sync-terabox-free-storage-other-clouds-rcloneview)
- [Gestiona el almacenamiento en la nube de MEGA — Sincroniza y haz copias de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-mega-cloud-sync-backup-rcloneview)
- [Migración de nube a nube con RcloneView](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)

<CloudSupportGrid />
