---
slug: cloud-storage-funeral-homes-rcloneview
title: "Almacenamiento en la nube para funerarias — Protege los registros de las familias con RcloneView"
authors:
  - alex
description: "Las funerarias pueden hacer copias de seguridad de registros de servicios, contratos, fotos y videos conmemorativos en varias nubes con RcloneView: sincronización programada, cifrado y Folder Compare."
keywords:
  - almacenamiento en la nube para funerarias
  - copia de seguridad de archivos de funeraria
  - almacenamiento de documentos de funeraria
  - copia de seguridad de video conmemorativo
  - copia de seguridad cifrada en la nube
  - copia de seguridad en la nube para pequeñas empresas
  - rcloneview funeraria
  - copia de seguridad multinube
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Almacenamiento en la nube para funerarias — Protege los registros de las familias con RcloneView

> Mantén los contratos de servicios, las fotos conmemorativas y los videos de homenaje respaldados de forma segura en más de un lugar.

Una funeraria custodia registros que las familias esperan que existan durante décadas: contratos firmados, esquelas, documentación de planes de previsión, presentaciones de fotos y grabaciones de ceremonias que pueden alcanzar varios gigabytes. Con frecuencia, estos datos residen en un único PC de oficina o en una sola cuenta en la nube. RcloneView ofrece a un equipo pequeño una forma visual de copiar esos datos a una segunda y una tercera ubicación sin necesidad de scripts.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué una sola copia no es suficiente

Imagina una funeraria con 15 años de carpetas de casos en una unidad compartida y una cuenta de Dropbox para las fotos que envían las familias. Un fallo de disco, un borrado accidental o un inicio de sesión comprometido afectan a todos los casos a la vez. Un patrón sólido consiste en una copia principal, una copia externa en la nube y una segunda nube independiente o una unidad local.

RcloneView se conecta a más de 90 proveedores, entre ellos Google Drive, OneDrive, Dropbox, Backblaze B2, Wasabi y discos locales o externos. Combinar una unidad empresarial con un bucket de almacenamiento de objetos mantiene la copia de seguridad en una cuenta y un proveedor distintos del original.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir remotos en la nube y locales para las copias de seguridad de una funeraria en RcloneView" class="img-large img-center" />

## Crea un trabajo de copia de seguridad repetible

Crea un trabajo **Sync** o **Copy** desde el asistente de 4 pasos: el origen es la carpeta de registros de casos y el destino es el remoto de copia de seguridad. Usa Copy si no quieres que un borrado en el origen se propague. Ejecuta primero un **Dry Run** para ver qué se copiaría o eliminaría.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Copiar carpetas de casos a una nube de copia de seguridad en RcloneView" class="img-large img-center" />

Con una licencia PLUS, el último paso del asistente añade programación al estilo crontab, de modo que un trabajo nocturno puede ejecutarse cuando la oficina cierra. El Job History registra el estado, el tamaño y el número de archivos de cada ejecución, lo que resulta útil como evidencia de que las copias de seguridad se realizan.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Programar un trabajo de copia de seguridad nocturno en RcloneView" class="img-large img-center" />

## Protege los registros sensibles

Los datos familiares y financieros merecen cifrado. Crea un remoto virtual **Crypt** sobre el destino de la copia de seguridad y RcloneView cifrará los nombres de archivo, los nombres de carpeta y el contenido antes de que salgan del equipo. Guarda la contraseña de Crypt en un lugar distinto del ordenador de la oficina; sin ella, los datos no se pueden descifrar.

Usa **Folder Compare** periódicamente para confirmar que la copia de seguridad coincide con el origen. Los archivos solo a la izquierda muestran lo que aún no se ha copiado, y los archivos con distinto tamaño señalan cargas parciales.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare verificando la copia de seguridad de una funeraria" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade tu almacenamiento principal y un destino de copia de seguridad con **New Remote**.
3. Envuelve el destino en un remoto Crypt para los archivos de casos sensibles.
4. Crea un trabajo Copy, ejecútalo primero con Dry Run y luego prográmalo (PLUS) o ejecútalo después de cada servicio.

Los registros que sobreviven a sus creadores merecen un plan de copia de seguridad que sobreviva a cualquier cuenta individual.

---

**Guías relacionadas:**

- [Cloud Storage for Law Firms — Secure Client Files with RcloneView](https://rcloneview.com/support/blog/cloud-storage-law-firms-rcloneview)
- [Cloud Storage for Tax Preparers](https://rcloneview.com/support/blog/cloud-storage-tax-preparers-rcloneview)
- [Encrypt Cloud Backups with a Crypt Remote](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
