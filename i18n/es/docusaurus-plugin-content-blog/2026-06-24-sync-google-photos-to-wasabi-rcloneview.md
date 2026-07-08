---
slug: sync-google-photos-to-wasabi-rcloneview
title: "Sincroniza Google Photos con Wasabi — Copia de seguridad de archivo fotográfico asequible con RcloneView"
authors:
  - steve
description: "Aprende a sincronizar y hacer copia de seguridad de tu biblioteca de Google Photos en el almacenamiento compatible con S3 de Wasabi usando RcloneView — un archivo fotográfico externo redundante y asequible."
keywords:
  - sync Google Photos to Wasabi
  - Google Photos Wasabi backup
  - RcloneView Google Photos backup
  - Wasabi photo archive storage
  - affordable cloud photo backup
  - Google Photos offsite backup
  - rclone Google Photos Wasabi
  - cloud photo library backup
tags:
  - RcloneView
  - google-photos
  - wasabi
  - cloud-to-cloud
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincroniza Google Photos con Wasabi — Copia de seguridad de archivo fotográfico asequible con RcloneView

> Protege años de fotos irremplazables sincronizando tu biblioteca de Google Photos con el almacenamiento compatible con S3 de Wasabi — redundante, externo y económico.

Google Photos es donde millones de personas almacenan sus bibliotecas de fotos, pero depender de una sola plataforma para recuerdos irremplazables conlleva un riesgo real. Las cuotas de almacenamiento se llenan, las políticas de las cuentas cambian y el acceso puede revocarse con poco aviso. Sincronizar con Wasabi — un servicio de almacenamiento de objetos compatible con S3 — crea una copia externa confiable e independiente que tú controlas por completo. RcloneView conecta ambos servicios en una interfaz visual de dos paneles, lo que hace que las transferencias de fotos entre nubes sean sencillas sin ninguna configuración por línea de comandos.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta Google Photos y Wasabi en RcloneView

Comienza agregando Google Photos como remoto. Abre la pestaña **Remote**, haz clic en **New Remote** y selecciona Google Photos de la lista de proveedores. RcloneView abre una ventana del navegador para la autenticación OAuth — inicia sesión con tu cuenta de Google y concede el acceso. Tus fotos y álbumes se vuelven navegables de inmediato en el panel del explorador.

A continuación, agrega Wasabi como remoto compatible con S3. Haz clic de nuevo en **New Remote**, selecciona Amazon S3 como tipo y elige Wasabi como proveedor. Ingresa tu Access Key de Wasabi, tu Secret Key y el endpoint regional. Crea de antemano un bucket de destino en la consola de Wasabi para que esté listo para recibir archivos. Una vez guardados ambos remotos, podrás explorar tu biblioteca de Google Photos en un panel y tu bucket de Wasabi en el otro.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Photos and Wasabi remotes in RcloneView" class="img-large img-center" />

RcloneView ofrece acceso completo de lectura/escritura a proveedores compatibles con S3 como Wasabi en la licencia FREE, lo que lo convierte en un destino de copia de seguridad capaz sin necesidad de actualizar tu plan.

## Crea y ejecuta el trabajo de sincronización

Con ambos remotos visibles en el explorador, abre **Job Manager** y crea un nuevo trabajo de sincronización (Sync). Establece Google Photos como origen y tu bucket de Wasabi como destino. En el paso de Advanced Settings, habilita la **verificación de checksum** — esto compara los archivos transferidos por hash de contenido en lugar de solo por tamaño, detectando cualquier corrupción durante la transferencia.

Antes de ejecutar la sincronización completa, usa **Dry Run** para previsualizar la lista completa de archivos. Para una biblioteca de fotos acumulada durante años, un dry run te ayuda a entender el volumen de datos involucrado y a verificar que la configuración de tus filtros — si los hay — sea correcta.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Transferring Google Photos files to a Wasabi bucket in RcloneView" class="img-large img-center" />

## Supervisa el progreso de la transferencia en tiempo real

Una vez que el trabajo comienza, la pestaña **Transferring** en la parte inferior de RcloneView muestra el progreso en vivo: velocidad de transferencia, archivos completados y tamaño total movido. Para un fotógrafo con más de 80,000 originales, la sincronización inicial puede tardar varias horas — las ejecuciones posteriores transfieren solo los archivos nuevos o modificados, manteniendo rápida la copia de seguridad incremental.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time monitoring of the Google Photos to Wasabi transfer" class="img-large img-center" />

**Job History** registra cada ejecución con hora de inicio, duración, número de archivos y estado. Revisarlo periódicamente confirma que tus copias de seguridad se completan correctamente y te permite detectar errores recurrentes a tiempo.

## Programa copias de seguridad periódicas con PLUS

Con una licencia PLUS, puedes programar la sincronización de Google Photos a Wasabi para que se ejecute automáticamente según cualquier horario de crontab — diario, semanal o a una hora específica. La herramienta Simulate Schedule previsualiza las próximas ejecuciones antes de guardar el trabajo, para que puedas verificar que la frecuencia se ajusta a tu flujo de trabajo.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting a schedule for the Google Photos to Wasabi backup job" class="img-large img-center" />

Un fotógrafo de bodas que hace copia de seguridad de las galerías de sus clientes, por ejemplo, puede programar un trabajo nocturno para enviar las nuevas entregas desde Google Photos a un bucket de archivo en Wasabi — sin necesidad de intervención manual después de cada sesión.

## Cómo empezar

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agrega Google Photos mediante **New Remote** (inicio de sesión OAuth en el navegador).
3. Agrega Wasabi mediante **New Remote** — selecciona Amazon S3, elige Wasabi como proveedor e ingresa tus credenciales.
4. Crea un trabajo de sincronización en **Job Manager** con Google Photos como origen y tu bucket de Wasabi como destino.

Tu biblioteca de Google Photos gana un archivo externo asequible y controlado de forma independiente que mantiene tus recuerdos a salvo más allá de cualquier plataforma individual.

---

**Guías relacionadas:**

- [Sincroniza Google Photos con Backblaze B2 usando RcloneView](https://rcloneview.com/support/blog/sync-google-photos-to-backblaze-b2-rcloneview)
- [Administra el almacenamiento de Google Photos — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-google-photos-cloud-sync-backup-rcloneview)
- [Administra el almacenamiento en la nube de Wasabi con RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
