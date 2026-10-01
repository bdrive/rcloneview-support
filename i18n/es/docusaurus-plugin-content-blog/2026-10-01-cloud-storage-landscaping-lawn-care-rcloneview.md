---
slug: cloud-storage-landscaping-lawn-care-rcloneview
title: "Almacenamiento en la nube para empresas de jardinería — Protege los archivos de tus proyectos con RcloneView"
authors:
  - alex
description: "Almacenamiento en la nube para empresas de jardinería y cuidado de césped: respalda fotos de obra, diseños y presupuestos con la sincronización programada y el cifrado de RcloneView."
keywords:
  - almacenamiento en la nube para empresas de jardinería
  - copia de seguridad de archivos de diseño paisajístico
  - copia de seguridad para empresas de cuidado de césped
  - copia de seguridad de fotos de obra
  - sincronización en la nube para jardinería
  - copia de seguridad cifrada en la nube
  - copia de seguridad con RcloneView
  - copia de seguridad en la nube para pequeñas empresas
  - copia de seguridad programada en la nube
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

# Almacenamiento en la nube para empresas de jardinería — Protege los archivos de tus proyectos con RcloneView

> Mantén fotos de obra, planos de diseño y presupuestos respaldados fuera de las instalaciones, sin pedir a las cuadrillas que cambien su forma de trabajar.

Una empresa de jardinería acumula archivos en lugares dispersos: fotos del antes y el después en los teléfonos, exportaciones de CAD o diseño en el PC de la oficina, presupuestos firmados en una carpeta compartida. Cuando un portátil se estropea en plena temporada, también se pierde el historial de lo prometido a cada cliente. RcloneView ofrece a una pequeña empresa una forma visual de copiar ese trabajo al almacenamiento en la nube y confirmar que llegó.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Organiza los archivos de cada trabajo antes de la copia de seguridad

Empieza con una estructura de carpetas predecible en el equipo de la oficina: una carpeta por cliente, con subcarpetas para fotos, diseños, presupuestos y facturas. Las fotos de las cuadrillas pueden guardarse en la carpeta del cliente al final de cada jornada.

Abre la carpeta local en un panel del Explorer de RcloneView y tu remoto en la nube en otro. En el File Explorer puedes confirmar que las fotos de obra llegaron a la carpeta de trabajo correcta antes de subirlas.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir un remoto en la nube para archivos de trabajos de jardinería en RcloneView" class="img-large img-center" />

## Elige un almacenamiento adecuado para el negocio

RcloneView es compatible con Google Drive, OneDrive, Dropbox, Backblaze B2, Wasabi, Amazon S3 y más de 90 proveedores, de modo que puedes usar una cuenta que ya tengas o elegir almacenamiento de objetos para archivos fotográficos grandes.

Si hay direcciones de clientes y contratos de por medio, añade un remoto Crypt sobre el destino. Los nombres y el contenido de los archivos se cifran mediante rclone Crypt antes de subirlos.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Copiar carpetas de trabajo al almacenamiento en la nube con RcloneView" class="img-large img-center" />

## Automatiza la copia nocturna

Crea un trabajo Sync o Copy desde la carpeta de trabajos al destino en la nube. Usa primero Dry Run para previsualizar qué se copiará o eliminará. La sincronización unidireccional solo modifica el destino, algo adecuado para una copia de seguridad. Con una licencia PLUS puedes añadir una programación al estilo crontab para que el trabajo se ejecute cada noche después de que las cuadrillas suban sus fotos.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Programar un trabajo de copia de seguridad nocturna en RcloneView" class="img-large img-center" />

## Comprueba que las copias de seguridad realmente funcionaron

Job History muestra la hora de inicio, la duración, el estado, el tamaño y el número de archivos de cada ejecución. Usa Folder Compare entre la carpeta local y la copia en la nube para detectar lo que falte, especialmente tras una semana ajetreada de instalaciones.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Historial de trabajos de las ejecuciones de copia de seguridad en RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade tu almacenamiento en la nube mediante New Remote y, opcionalmente, un remoto Crypt para los archivos sensibles.
3. Crea un trabajo Sync desde la carpeta de trabajos a la nube y ejecuta un Dry Run.
4. Prográmalo (PLUS) o ejecútalo manualmente y revisa Job History cada semana.

Con copias de seguridad fiables, un portátil averiado es solo un inconveniente, no una temporada perdida de registros de clientes.

---

**Guías relacionadas:**

- [Almacenamiento en la nube para contratistas de climatización y fontanería](https://rcloneview.com/support/blog/cloud-storage-hvac-plumbing-contractors-rcloneview)
- [Almacenamiento en la nube para estudios de diseño de interiores](https://rcloneview.com/support/blog/cloud-storage-interior-design-firms-rcloneview)
- [Almacenamiento en la nube para empresas de topografía](https://rcloneview.com/support/blog/cloud-storage-surveying-firms-rcloneview)

<CloudSupportGrid />
