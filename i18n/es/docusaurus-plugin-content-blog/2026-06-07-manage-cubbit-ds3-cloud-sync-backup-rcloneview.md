---
slug: manage-cubbit-ds3-cloud-sync-backup-rcloneview
title: "Gestiona el almacenamiento Cubbit DS3 — Sincroniza y respalda archivos con RcloneView"
authors:
  - alex
description: "Aprende a conectar Cubbit DS3 a RcloneView y a sincronizar, respaldar o gestionar tu almacenamiento en la nube europeo geodistribuido desde una sencilla interfaz gráfica de escritorio."
keywords:
  - Cubbit DS3 sync
  - Cubbit DS3 backup
  - Cubbit S3-compatible storage
  - RcloneView Cubbit
  - European cloud storage backup
  - geo-distributed object storage
  - Cubbit DS3 setup guide
  - private cloud backup RcloneView
  - S3 compatible storage management
  - Cubbit DS3 file manager
tags:
  - s3-compatible
  - object-storage
  - european-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona el almacenamiento Cubbit DS3 — Sincroniza y respalda archivos con RcloneView

> RcloneView se conecta a Cubbit DS3 a través del protocolo S3, permitiéndote explorar, sincronizar y respaldar tu almacenamiento en la nube europeo geodistribuido sin escribir un solo comando de CLI.

Cubbit DS3 es un servicio de almacenamiento de objetos geodistribuido y compatible con S3, construido sobre nodos europeos. A diferencia de los proveedores centralizados, Cubbit fragmenta y cifra tus datos en una red de celdas distribuidas, lo que lo convierte en una opción atractiva para equipos sujetos a los requisitos del RGPD o para quienes buscan un almacenamiento privado por diseño. Dado que Cubbit DS3 es totalmente compatible con S3, RcloneView se conecta a él usando el mismo flujo de credenciales que otros proveedores S3, sin necesidad de complementos ni configuraciones especiales.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Cubbit DS3 a RcloneView

Abre RcloneView y ve a **pestaña Remoto > Nuevo remoto**. Selecciona **Amazon S3** como tipo de remoto y luego elige **Cubbit DS3** en la lista de proveedores S3. Introduce tu Cubbit Access Key ID, tu Secret Access Key y la URL del endpoint S3 copiada desde el panel de control de tu consola de Cubbit. Deja la región en blanco o usa el valor recomendado en la documentación de Cubbit. Haz clic en **Guardar**, y tu remoto Cubbit DS3 aparecerá como una nueva pestaña en el explorador de archivos.

La conexión surte efecto de inmediato. Puedes expandir tu bucket en el árbol de carpetas de la izquierda, explorar objetos con la vista de lista detallada, o cambiar a la vista de miniaturas para previsualizar los archivos de imagen almacenados en el bucket.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Cubbit DS3 as a new S3-compatible remote in RcloneView" class="img-large img-center" />

## Subir y gestionar archivos en Cubbit DS3

El diseño de doble panel de RcloneView facilita la subida de archivos a Cubbit DS3. Abre una carpeta local en un panel y tu bucket de Cubbit DS3 en el otro. Arrastra una carpeta —por ejemplo, una colección de planos CAD de un estudio de arquitectura— desde el panel izquierdo hacia el panel de Cubbit a la derecha. RcloneView gestiona automáticamente las subidas concurrentes multihilo, y el monitor de transferencias en la parte inferior muestra la velocidad de transferencia en vivo, el número de archivos y el progreso.

Al hacer clic derecho sobre cualquier objeto en el panel de Cubbit se despliega el menú contextual completo: Copiar, Cortar, Eliminar, Renombrar, Obtener tamaño y Obtener enlace público. La opción **Obtener tamaño** es especialmente útil para calcular el consumo de almacenamiento en carpetas de buckets grandes antes de decidir una estrategia de sincronización.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag-and-drop upload to Cubbit DS3 bucket in RcloneView" class="img-large img-center" />

## Configurar trabajos de sincronización programados hacia Cubbit DS3

Para copias de seguridad automatizadas, usa el botón **Sincronizar** en la pestaña Inicio para lanzar el asistente de trabajos de 4 pasos. Selecciona tu carpeta local u otro remoto en la nube como origen, y tu bucket de Cubbit DS3 como destino. En el paso 2, aumenta el número de transferencias de archivos concurrentes para aprovechar al máximo el ancho de banda distribuido de Cubbit. En el paso 3, aplica filtros por tipo de archivo; por ejemplo, excluye los archivos `.tmp` y `.log` para mantener limpia la copia de seguridad.

Los usuarios con licencia PLUS desbloquean el paso 4: programación estilo cron. Configura un trabajo para que se ejecute cada noche a las 3 AM, añade un filtro de antigüedad máxima de archivo para sincronizar solo los archivos modificados recientemente, y configura notificaciones por correo electrónico para confirmar cada ejecución. Esto es ideal para un equipo de investigación que necesita instantáneas nocturnas automáticas de su archivo de conjuntos de datos hacia un backend de almacenamiento europeo conforme a la normativa.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated sync jobs to Cubbit DS3 in RcloneView" class="img-large img-center" />

## Seguimiento de transferencias con el historial de trabajos

Después de cada ejecución de sincronización, la vista **Historial de trabajos** de RcloneView registra la hora de ejecución, la duración, el total de bytes transferidos, la velocidad de transferencia y el estado final. Para Cubbit DS3, este registro de auditoría es valioso cuando necesitas confirmar que una copia de seguridad crítica se completó correctamente, o al investigar una ejecución fallida para identificar qué archivos causaron errores.

Usa la función **Ejecución en seco** antes de cualquier operación destructiva: simula la sincronización y enumera todos los archivos que se copiarían o eliminarían, para que puedas verificar el alcance sin tocar el bucket.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log for Cubbit DS3 sync in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ve a **pestaña Remoto > Nuevo remoto**, selecciona Amazon S3 y elige Cubbit DS3 como proveedor.
3. Introduce tu Access Key, tu Secret Key y el endpoint S3 de Cubbit desde la consola de Cubbit.
4. Explora tu bucket en el explorador de archivos y arrastra archivos para empezar a subirlos de inmediato.

Con Cubbit DS3 conectado a RcloneView, obtienes un flujo de trabajo completamente visual para el almacenamiento europeo geodistribuido, sin necesidad de terminal.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento en la nube Cloudflare R2 con RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Gestiona DigitalOcean Spaces — Sincroniza y respalda con RcloneView](https://rcloneview.com/support/blog/manage-digitalocean-spaces-cloud-sync-backup-rcloneview)
- [Centraliza el almacenamiento S3, Wasabi y R2 con RcloneView](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
