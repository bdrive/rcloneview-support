---
slug: migrate-cloudflare-r2-to-wasabi-rcloneview
title: "Migrar Cloudflare R2 a Wasabi — transfiera archivos con RcloneView"
authors:
  - robin
description: "Mueva buckets de Cloudflare R2 a Wasabi con RcloneView: conecte ambos remotos compatibles con S3, haga un Dry Run, copie de bucket a bucket y verifique con Folder Compare."
keywords:
  - migrar Cloudflare R2 a Wasabi
  - transferencia de R2 a Wasabi
  - mover bucket de R2 a Wasabi
  - migración de buckets compatibles con S3
  - transferencia de nube a nube
  - RcloneView Cloudflare R2
  - RcloneView Wasabi
  - migración de almacenamiento de objetos con GUI
tags:
  - RcloneView
  - cloudflare-r2
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar Cloudflare R2 a Wasabi — transfiera archivos con RcloneView

> Copie un bucket de Cloudflare R2 a Wasabi desde una sola ventana, con un Dry Run primero y una comprobación visual después.

Tanto Cloudflare R2 como Wasabi usan el protocolo S3, así que mover datos entre ellos es conceptualmente sencillo; sin embargo, hacerlo con indicadores de CLI implica manejar dos endpoints, dos juegos de credenciales y ninguna forma sencilla de confirmar qué ha llegado. RcloneView conecta ambos como remotos y le permite copiar, supervisar y verificar en una GUI. Conecte servicios compatibles con S3 con acceso completo de lectura y escritura con la licencia FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecte ambos remotos compatibles con S3

Abra el diálogo New Remote y añada primero Cloudflare R2. R2 necesita un token de API, su Account ID y el endpoint con el formato `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`. Genere el token en el panel de Cloudflare después de crear el bucket; la configuración de R2 en RcloneView requiere permisos Admin Read & Write en el token.

A continuación añada Wasabi. Introduzca la Access Key y la Secret Key de su consola de Wasabi y elija el endpoint correspondiente a la región donde se encuentra su bucket de destino. Cree el bucket de destino en Wasabi de antemano, o cree una carpeta desde el panel Explorer.

<img src="/support/images/en/blog/new-remote.png" alt="Añadiendo remotos de Cloudflare R2 y Wasabi en RcloneView" class="img-large img-center" />

## Planifique la copia en dos paneles

Abra el remoto de R2 en el panel Explorer izquierdo y el de Wasabi en el derecho. Navegue hasta el bucket o prefijo que desea mover. Para un estudio con un archivo de medios de varios terabytes, podría migrar primero un prefijo de proyecto para confirmar los permisos y la nomenclatura antes de comprometerse con el bucket completo.

Como ambos extremos son remotos, RcloneView ejecuta esto como una transferencia de nube a nube entre los dos remotos, de modo que no tiene que gestionar usted mismo un paso manual de descarga y posterior subida. Arrastrar entre paneles copia de forma predeterminada cuando los remotos son distintos; también puede crear un trabajo Copy en el asistente Sync para ejecuciones repetibles.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferencia de nube a nube entre dos paneles en RcloneView" class="img-large img-center" />

## Dry Run, ajuste y ejecución

Antes de la transferencia real, active Dry Run en el asistente del trabajo. Muestra exactamente qué archivos se copiarían, para que detecte un prefijo equivocado antes de mover ningún dato. En Advanced Settings, aumente el número de transferencias de archivos para buckets con muchos objetos pequeños y active la comparación por checksum si quiere comparar por hash y tamaño en lugar de solo por tamaño. Use el paso de filtros para omitir carpetas temporales o limitar por antigüedad de archivo.

Inicie el trabajo desde Job Manager y siga el progreso en la pestaña Transferring: la velocidad, el número de archivos y los bytes movidos se actualizan en vivo.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Ejecución del trabajo de migración desde Job Manager en RcloneView" class="img-large img-center" />

## Verifique con Folder Compare

Cuando termine el trabajo, abra Compare con R2 a la izquierda y Wasabi a la derecha. Filtre por archivos left-only para ver lo que falta, o por archivos different para detectar diferencias de tamaño. Si queda algo pendiente, use Copy right para completarlo y vuelva a comparar hasta que el resultado esté limpio. Consulte en Job History el estado, la duración y los totales de archivos de la ejecución.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare verificando una migración de bucket en RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añada sus remotos de Cloudflare R2 y Wasabi desde New Remote.
3. Ábralos en paneles lado a lado y ejecute un trabajo Copy con Dry Run.
4. Ejecute el trabajo y confirme el resultado con Folder Compare.

Mantenga R2 intacto hasta que Compare muestre una coincidencia limpia y podrá cambiar de almacenamiento con confianza.

---

**Guías relacionadas:**

- [Migrar Wasabi a Cloudflare R2](https://rcloneview.com/support/blog/migrate-wasabi-to-cloudflare-r2-rcloneview)
- [Gestionar el almacenamiento de Wasabi con RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Gestionar Cloudflare R2 con RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)

<CloudSupportGrid />
