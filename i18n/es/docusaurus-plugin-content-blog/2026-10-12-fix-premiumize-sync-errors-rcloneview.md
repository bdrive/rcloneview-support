---
slug: fix-premiumize-sync-errors-rcloneview
title: "Soluciona los errores de sincronización de premiumize.me — Problemas de autorización y transferencia resueltos con RcloneView"
authors:
  - casey
description: "Resuelve errores de sincronización de premiumize.me como autorización caducada, transferencias fallidas y archivos que faltan usando los registros, el historial de trabajos y Folder Compare de RcloneView."
keywords:
  - solucionar errores de sincronización de premiumize.me
  - error de premiumize rclone
  - autorización de premiumize fallida
  - transferencia de premiumize fallida
  - solución de problemas de premiumize
  - RcloneView premiumize
  - solución de problemas de sincronización en la nube
  - premiumize GUI
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Soluciona los errores de sincronización de premiumize.me — Problemas de autorización y transferencia resueltos con RcloneView

> Cuando falla un trabajo de premiumize.me, el historial de trabajos, los registros DEBUG y Folder Compare de RcloneView muestran si la causa es el inicio de sesión, la carga de transferencia o archivos que nunca llegaron.

Un trabajo de premiumize.me que se detiene antes de tiempo, o que deja una carpeta copiada a medias, es difícil de diagnosticar solo con la línea de comandos. RcloneView reúne en una sola ventana la comprobación del remoto, el registro del trabajo, el log y una comparación lado a lado, de modo que puedes corregir la causa real en lugar de volver a ejecutar a ciegas. RcloneView monta Y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Vuelve a autorizar el remoto

premiumize.me se conecta mediante OAuth en el navegador. Si los trabajos fallan en cuestión de segundos, lo primero que hay que sospechar es el inicio de sesión. Abre Remote Manager desde la pestaña Remote, edita el remoto de premiumize.me e inicia sesión de nuevo a través del aviso del navegador.

Luego abre el remoto en un panel Explorer y explora la carpeta raíz. Si se lista con normalidad, la conexión está sana y el fallo está en la transferencia en sí.

<img src="/support/images/en/blog/new-remote.png" alt="Reautorización de un remoto de premiumize.me en RcloneView" class="img-large img-center" />

## Lee el historial de trabajos y activa los registros DEBUG

Abre Job History y comprueba el estado, la duración y el número de archivos de la ejecución fallida. Un trabajo que da error a mitad de camino suele apuntar a archivos concretos o a la carga, no a las credenciales.

Para ver el mensaje exacto de cada archivo, ve a Settings > Embedded Rclone, activa el registro de rclone, establece el nivel en DEBUG y haz clic en Restart Embedded Rclone. Reproduce el fallo y luego lee la pestaña Log o el archivo de registro en la carpeta que hayas configurado.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Historial de trabajos de RcloneView con un trabajo de premiumize.me con errores" class="img-large img-center" />

## Reduce la carga y previsualiza la nueva ejecución

Los fallos intermitentes suelen aliviarse con menos transferencias simultáneas. En el paso 2 del asistente de sincronización, reduce el número de transferencias de archivos y establece los equality checkers en 4 o menos. Mantén "Retry entire sync if fails" en 3 para que se reintenten los errores transitorios.

Antes de volver a ejecutar, usa Dry Run para ver qué archivos se copiarían o eliminarían, de modo que el reintento no tenga sorpresas.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Nueva ejecución de un trabajo de premiumize.me con menor concurrencia" class="img-large img-center" />

## Confirma con Folder Compare

Tras la nueva ejecución, abre Compare con una carpeta local en un lado y premiumize.me en el otro. Filtra por archivos solo a la izquierda, solo a la derecha y distintos, y copia únicamente lo que aún falta en lugar de repetir todo el trabajo.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare mostrando archivos que faltan en premiumize.me" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Vuelve a autorizar el remoto de premiumize.me y confirma que se lista la carpeta raíz.
3. Revisa Job History y activa el registro DEBUG del trabajo que falla.
4. Reduce la concurrencia, ejecuta un Dry Run, vuelve a ejecutar y verifica con Folder Compare.

Con la causa visible en los registros y la comparación, un fallo de premiumize.me se convierte en una corrección breve y repetible.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento en la nube de premiumize.me con RcloneView](https://rcloneview.com/support/blog/manage-premiumize-me-cloud-sync-backup-rcloneview)
- [Sincroniza las descargas en la nube de premiumize.me con RcloneView](https://rcloneview.com/support/blog/sync-premiumize-cloud-downloads-rcloneview)
- [Soluciona los errores de sincronización de put.io con RcloneView](https://rcloneview.com/support/blog/fix-put-io-sync-errors-rcloneview)

<CloudSupportGrid />
