---
slug: manage-rackcorp-object-storage-cloud-sync-rcloneview
title: "Gestiona el almacenamiento de objetos de RackCorp — Sincroniza y respalda archivos con RcloneView"
authors:
  - tayson
description: "Conecta el almacenamiento de objetos compatible con S3 de RackCorp a RcloneView para explorar archivos con arrastrar y soltar, sincronización programada y copias de seguridad entre nubes."
keywords:
  - almacenamiento de objetos RackCorp
  - RackCorp S3
  - RcloneView RackCorp
  - gestionar archivos de RackCorp
  - copia de seguridad en la nube de RackCorp
  - sincronización de RackCorp
  - GUI de almacenamiento compatible con S3
  - cliente GUI de almacenamiento de objetos
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona el almacenamiento de objetos de RackCorp — Sincroniza y respalda archivos con RcloneView

> Explora, sincroniza y respalda los buckets de almacenamiento de objetos de RackCorp con el mismo flujo de arrastrar y soltar que usas para cualquier otra nube en RcloneView.

El almacenamiento de objetos compatible con S3 de RackCorp ofrece a los equipos una alternativa regional frente a los grandes hyperscalers, pero gestionar buckets suele implicar alternar entre herramientas CLI independientes o una pestaña del navegador con la consola. RcloneView se conecta a RackCorp mediante el protocolo S3 de rclone y coloca tus buckets en la misma ventana del explorador que Google Drive, OneDrive o cualquier otro remoto que ya administres. A diferencia de las herramientas que solo montan unidades, RcloneView también sincroniza y compara carpetas — con la licencia FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar RackCorp a RcloneView

El almacenamiento de objetos de RackCorp se agrega igual que cualquier otro proveedor compatible con S3: abre la pestaña Remote > New Remote, selecciona la opción compatible con S3 e introduce tu Access Key ID, Secret Access Key y la URL del endpoint de RackCorp. RcloneView pasa estas credenciales directamente a la configuración de rclone, por lo que no hay que instalar un controlador ni un complemento aparte — el binario de rclone integrado se encarga de la negociación del protocolo.

Una vez creado el remoto, aparece como una nueva pestaña en el panel Explorer. Puedes explorar los buckets con la List View para ver metadatos detallados, o cambiar a la Thumbnail View si almacenas imágenes y quieres un vistazo visual rápido. El árbol de carpetas de la izquierda te permite saltar entre prefijos sin volver a escribir rutas.

<img src="/support/images/en/blog/new-remote.png" alt="Agregando un nuevo remoto compatible con S3 para el almacenamiento de objetos de RackCorp en RcloneView" class="img-large img-center" />

Haz clic derecho en cualquier objeto de la lista de archivos para acceder a Copy, Cut, Rename, Get Size o Get Public Link — el mismo menú contextual que usarías con archivos locales, aplicado directamente a tu bucket de RackCorp.

## Sincronizar RackCorp con otras nubes

El almacenamiento de objetos rara vez se usa de forma aislada. Un patrón común es mantener una copia de trabajo en Google Drive o OneDrive para la edición diaria, mientras se archivan los recursos terminados en RackCorp para una retención más económica y a largo plazo. El asistente de Sync de 4 pasos de RcloneView gestiona esto sin tocar una terminal: elige RackCorp como origen o destino, configura filtros para excluir archivos temporales o recursos demasiado grandes, y selecciona sincronización unidireccional para que el archivo solo reciba material nuevo.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configurando un trabajo de sincronización entre nubes entre RackCorp y otro remoto en RcloneView" class="img-large img-center" />

Antes de realizar una transferencia completa, ejecuta un Dry Run para previsualizar exactamente qué archivos se copiarán o eliminarán. Esto es especialmente útil con el almacenamiento de objetos, donde volver a subir buckets grandes por error puede desperdiciar ancho de banda y tiempo.

## Automatizar copias de seguridad con trabajos programados

Para equipos con licencia PLUS, los trabajos de sincronización de RackCorp pueden ejecutarse según un calendario tipo crontab en lugar de requerir un disparo manual cada vez. Configura los campos de minuto, hora y día de la semana una sola vez, y RcloneView mantendrá tu bucket de RackCorp actualizado en segundo plano — luego revisa la pestaña Job History para confirmar el estado, la velocidad de transferencia y el número de archivos de cada ejecución.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configurando un trabajo de sincronización programado para el almacenamiento de objetos de RackCorp en RcloneView" class="img-large img-center" />

Activa la verificación por checksum en el paso de Advanced Settings si la integridad de los datos importa más que la velocidad bruta — RcloneView compara los hashes de los archivos en lugar de solo el tamaño y la marca de tiempo, detectando así la corrupción silenciosa durante la transferencia.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ve a la pestaña Remote > New Remote y selecciona la opción compatible con S3 para RackCorp.
3. Introduce tu Access Key ID, Secret Access Key y el endpoint de RackCorp para conectarte.
4. Configura un trabajo de sincronización o copia de seguridad para mantener RackCorp al día con tus otros remotos en la nube.

Una vez conectado, RackCorp se comporta como cualquier otra pestaña de tu espacio de trabajo de RcloneView — sin consola aparte, sin flags de CLI que memorizar.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento de objetos de Scaleway — Sincronización y copia de seguridad en la nube con RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Gestiona el almacenamiento en la nube de Selectel — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-selectel-cloud-sync-backup-rcloneview)
- [Caché VFS — Rendimiento de montaje en la nube más rápido en RcloneView](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)

<CloudSupportGrid />
