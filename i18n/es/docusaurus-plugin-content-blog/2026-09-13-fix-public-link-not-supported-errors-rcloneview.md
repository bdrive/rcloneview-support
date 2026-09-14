---
slug: fix-public-link-not-supported-errors-rcloneview
title: "Corrige los errores de enlace público no compatible — comparte archivos correctamente con RcloneView"
authors:
  - tayson
description: "Corrige los errores de Get Public Link en RcloneView, descubre qué remotos admiten enlaces para compartir y usa alternativas seguras para el resto."
keywords:
  - RcloneView
  - error de enlace público
  - enlace público no compatible
  - compartir archivos en la nube
  - enlace público de rclone
  - compartir almacenamiento en la nube
  - solución de enlace para compartir
  - solución de problemas al compartir archivos en la nube
  - administrador de remotos
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-storage
  - file-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corrige los errores de enlace público no compatible — comparte archivos correctamente con RcloneView

> Haces clic derecho en Get Public Link y no pasa nada — te explicamos por qué y qué hacer en su lugar.

El panel Explorer de RcloneView ofrece el comando **Get Public Link** en el menú contextual, pero solo funciona en remotos cuyo backend expone una API de compartición nativa. Si lo intentas en una conexión de protocolo puro o en un proveedor no compatible, la solicitud falla o devuelve un error en lugar de una URL. El Remote Manager y el Explorer de doble panel de RcloneView facilitan ver en qué remoto estás y mover el archivo a un lugar que sí permita generar enlaces.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué Get Public Link falla en algunos remotos

La generación de enlaces públicos depende de lo que admita el backend de almacenamiento subyacente. Los proveedores con una API de compartición nativa —entre ellos Google Drive, Dropbox, Microsoft OneDrive, Box y pCloud— devuelven una URL para compartir porque rclone llama al propio endpoint de enlaces de ese proveedor. Las conexiones basadas en protocolo como SFTP, FTP, WebDAV y SMB/CIFS no tienen este concepto en absoluto; son protocolos de transporte de archivos puros, no plataformas de compartición, así que no hay nada que el comando pueda invocar. Los endpoints compatibles con S3 (Amazon S3, Wasabi, Backblaze B2, Cloudflare R2) gestionan el acceso público mediante políticas de bucket o URLs prefirmadas configuradas en la propia consola del proveedor.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView new remote screen showing different provider types" class="img-large img-center" />

Antes de asumir que es un error, comprueba a qué categoría pertenece tu remoto. Abre el Remote Manager desde la pestaña Remote y confirma el tipo de remoto — un vistazo rápido suele explicar el fallo de inmediato.

## Confirma el remoto y los ajustes de permisos

Si el remoto es de los basados en OAuth que deberían admitir enlaces, el siguiente paso es verificar que la cuenta tiene permiso para compartir ese archivo o carpeta en concreto. Las variantes empresariales de estos remotos a veces restringen la compartición externa a nivel de organización, lo que en RcloneView se manifiesta como el mismo fallo de solicitud. Vuelve a autenticar el remoto desde el Remote Manager si el token parece caducado y prueba primero con un archivo que sepas que se puede compartir desde la propia interfaz web del proveedor.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView folder compare view for verifying file locations before sharing" class="img-large img-center" />

A diferencia de las herramientas de solo montaje, RcloneView también sincroniza y compara carpetas —con la licencia FREE—, por lo que puedes copiar rápidamente un archivo desde un remoto sin enlaces a uno que sí los admita, en lugar de seguir investigando el problema.

## Alternativas seguras cuando un remoto no admite enlaces

Para SFTP, FTP, WebDAV, SMB y la mayoría de los buckets compatibles con S3, la solución práctica es copiar el archivo a un remoto que admita enlaces nativos, o gestionar la distribución a través de la propia consola del proveedor (política de bucket, URL prefirmada o recurso compartido en el NAS). Usa el arrastrar y soltar de RcloneView entre dos paneles Explorer abiertos para mover una copia y luego ejecuta Get Public Link en el remoto de destino.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView job scheduling for repeatable copy-and-share workflows" class="img-large img-center" />

Si esta es una necesidad recurrente, guarda el paso de copia como un Job en el Job Manager para que los mismos archivos lleguen automáticamente a tu remoto con enlaces después de cada sincronización.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abre el Remote Manager para confirmar qué tipo de backend usa realmente el remoto con problemas.
3. Vuelve a autenticar los remotos OAuth cuyos tokens puedan haber caducado y luego reintenta el enlace en un archivo que sepas que se puede compartir.
4. Para remotos de protocolo o compatibles con S3, copia el archivo a un remoto con enlaces mediante arrastrar y soltar, y genera el enlace allí.

Saber de antemano qué remotos pueden compartir enlaces te ahorra un ticket de soporte más adelante.

---

**Guías relacionadas:**

- [Obtén enlaces públicos para compartir archivos en la nube con RcloneView](https://rcloneview.com/support/blog/link-public-shared-links-cloud-rcloneview)
- [Administra el almacenamiento de Google Drive — sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Corrige los errores de permiso denegado en transferencias en la nube con RcloneView](https://rcloneview.com/support/blog/fix-cloud-transfer-permission-denied-errors-rcloneview)

<CloudSupportGrid />
