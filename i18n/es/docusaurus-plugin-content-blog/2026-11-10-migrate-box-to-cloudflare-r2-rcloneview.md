---
slug: migrate-box-to-cloudflare-r2-rcloneview
title: "Migrar de Box a Cloudflare R2 — Transfiera archivos con RcloneView"
authors:
  - robin
description: "Migre de Box a Cloudflare R2 con RcloneView: conecte ambos remotos, pruebe la copia con un Dry Run, ejecute una transferencia de nube a nube y verifique el resultado."
keywords:
  - migrar de Box a Cloudflare R2
  - transferencia de Box a R2
  - migración de Box en la nube
  - copia de seguridad en Cloudflare R2
  - RcloneView
  - transferencia de nube a nube
  - Box a almacenamiento compatible con S3
  - archivo de Box a almacenamiento de objetos
  - rclone GUI
tags:
  - RcloneView
  - box
  - s3-compatible
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar de Box a Cloudflare R2 — Transfiera archivos con RcloneView

> Traslade años de contenido de Box al almacenamiento de objetos Cloudflare R2 sin descargar nada a su propio disco.

Un equipo de finanzas que ha superado su plan de Box, o un departamento que cierra proyectos antiguos, suele querer en su lugar un archivo en almacenamiento de objetos. RcloneView conecta Box y Cloudflare R2 lado a lado y copia entre ellos directamente. Conecte S3, Azure o Backblaze B2 con lectura/escritura completa con la licencia FREE, y lo mismo se aplica a R2.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Box y Cloudflare R2

Box es un remoto OAuth: RcloneView abre su navegador, usted inicia sesión y el remoto se crea sin clave de API. Si su empresa usa Box for Business, el remoto necesita `box_sub_type = enterprise`. Compruébelo primero, porque un remoto de tipo personal no verá el contenido empresarial.

Cloudflare R2 usa credenciales. Cree un bucket de R2 en el panel de Cloudflare, genere un token de API con permiso Admin Read & Write e introduzca los datos del token y el endpoint de su cuenta, `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`, en el cuadro de diálogo New Remote.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir los remotos de Box y Cloudflare R2 en RcloneView" class="img-large img-center" />

## Planificar la estructura de carpetas

Abra Box en un panel del Explorer y R2 en el otro. R2 es un almacenamiento de objetos plano, así que decida una estructura de prefijos antes de copiar: por ejemplo, una carpeta de nivel superior por departamento de Box y debajo las subcarpetas originales. Use Get Size en las carpetas grandes de Box para estimar el volumen que va a mover.

Los Box Docs, como Box Notes, no son archivos ordinarios. Los filtros predefinidos del asistente de sincronización incluyen una opción Box Docs, que permite excluirlos si no los quiere en el archivo.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box y Cloudflare R2 lado a lado en los paneles del explorador de RcloneView" class="img-large img-center" />

## Primero Dry Run, después copiar

Cree un trabajo Copy en lugar de un trabajo Sync para la primera pasada, de modo que nunca se elimine nada de ninguno de los lados. Ejecútelo primero como Dry Run: RcloneView muestra los archivos que copiaría sin transferirlos, lo que ayuda a detectar una carpeta de origen equivocada.

En el paso Advanced Settings, aumente el número de transferencias de archivos si tiene muchos archivos pequeños y active la comparación por checksum si quiere comparar por hash y tamaño. Después ejecute el trabajo y siga el progreso en la pestaña Transferring: el porcentaje, la velocidad y el número de archivos se actualizan en directo.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Ejecución del trabajo de copia de Box a R2 en RcloneView" class="img-large img-center" />

## Verificar la migración

Cuando termine el trabajo, abra Folder Compare con Box a la izquierda y R2 a la derecha. Use el filtro left-only para ver lo que no llegó y el filtro different-files para detectar diferencias de tamaño. Job History conserva el estado, la duración, el tamaño total y el número de archivos de cada ejecución, lo que resulta útil como evidencia en una auditoría.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare verificando la migración de Box a R2" class="img-large img-center" />

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añada su remoto de Box (OAuth) y su remoto de Cloudflare R2 (token de API y endpoint).
3. Cree un trabajo Copy desde una carpeta de Box a un prefijo de bucket de R2 y ejecute un Dry Run.
4. Ejecute el trabajo y confirme el resultado con Folder Compare.

Trasladar contenido de Box a R2 requiere unos pocos clics una vez conectados ambos remotos.

---

**Guías relacionadas:**

- [Migrar de Box a AWS S3](https://rcloneview.com/support/blog/migrate-box-to-aws-s3-rcloneview)
- [Gestionar el almacenamiento de Box con RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Dry Run: previsualizar la sincronización antes de transferir](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
