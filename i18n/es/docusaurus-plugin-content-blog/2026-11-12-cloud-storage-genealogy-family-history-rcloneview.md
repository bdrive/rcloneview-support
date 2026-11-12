---
slug: cloud-storage-genealogy-family-history-rcloneview
title: "Almacenamiento en la nube para genealogistas — Preserva archivos de historia familiar con RcloneView"
authors:
  - tayson
description: "Protege registros escaneados, archivos de árboles genealógicos y grabaciones de historia oral con RcloneView: copia de seguridad multinube, cifrado y verificación para archivos genealógicos."
keywords:
  - almacenamiento en la nube para genealogía
  - copia de seguridad de historia familiar
  - copia de seguridad de archivos genealógicos
  - respaldar archivos de árbol genealógico
  - documentos familiares escaneados en la nube
  - copia de seguridad de grabaciones de historia oral
  - almacenamiento de archivos para sociedades genealógicas
  - preservar fotos familiares en varias nubes
  - copia de seguridad cifrada de datos de ADN
  - RcloneView genealogía
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

# Almacenamiento en la nube para genealogistas — Preserva archivos de historia familiar con RcloneView

> Décadas de investigación pueden estar en un solo disco de portátil. RcloneView las copia a varias nubes y comprueba que cada copia coincida.

Los archivos genealógicos crecen de formas peculiares. Un investigador de historia familiar puede tener 40.000 escaneos TIFF de registros parroquiales, algunas exportaciones GEDCOM del árbol familiar, horas de entrevistas WAV con familiares mayores y archivos de datos de ADN en bruto. Las sociedades genealógicas de voluntarios guardan la misma mezcla en unidades compartidas y discos USB sobrantes. RcloneView ofrece a ambos grupos una sola aplicación de escritorio para copiar ese archivo al almacenamiento en la nube que ya utilizan y mantener las copias al día.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Todas las ubicaciones del archivo en una sola ventana

La mayoría de los investigadores reparten su material entre varios servicios: una carpeta de Google Drive compartida con primos, un enlace de Dropbox de un archivo lejano y un disco externo con los escaneos maestros. En RcloneView, agregas cada uno como un remoto. Google Drive, Dropbox, OneDrive y pCloud se conectan mediante un inicio de sesión en el navegador. Backblaze B2 necesita un Application Key ID y una clave. Un NAS Synology puede detectarse en la red local.

Abre hasta cuatro paneles del Explorer uno al lado del otro y arrastra una carpeta de escaneos desde el disco externo a un remoto en la nube. Arrastrar entre remotos distintos copia los archivos, así que los originales permanecen en su lugar.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a cloud storage remote in RcloneView for a genealogy archive" class="img-large img-center" />

## Más de una copia de los escaneos irremplazables

Volver a escanear una página de censo es una molestia. Una grabación perdida de la voz de un abuelo desaparece para siempre. Usa la sincronización 1:N para enviar una carpeta de origen a varios destinos en un solo trabajo, por ejemplo, una carpeta de escaneos maestros tanto a pCloud como a un bucket de Backblaze B2. Conecta S3, Azure o Backblaze B2 con lectura/escritura completa en la FREE License.

Antes de la primera ejecución, usa Dry Run para listar lo que se copiará y eliminará. La sincronización unidireccional solo modifica el destino, así que la carpeta maestra de tu disco nunca se toca.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Copying family history scans between cloud remotes in RcloneView" class="img-large img-center" />

## Protege los datos de ADN y los registros de familiares vivos

Los archivos de ADN en bruto y los registros sobre personas vivas requieren más cuidado que un registro matrimonial del siglo XIX. Envuelve una carpeta en la nube con un remoto **Crypt** y RcloneView cifrará los nombres de archivo, los nombres de carpeta y el contenido antes de subirlos. El proveedor solo almacena datos cifrados, y tú los exploras descifrados en RcloneView como de costumbre. Guarda la contraseña de Crypt en un lugar seguro: sin ella, los archivos no se pueden descifrar.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare in RcloneView showing differences between archive copies" class="img-large img-center" />

## Verifica las copias y automatiza las actualizaciones

Usa Folder Compare para comparar el maestro local con cada copia en la nube. Los filtros muestran los archivos que existen solo en un lado o cuyo tamaño difiere, y Copy right o Copy left corrige una diferencia con un clic. Con una PLUS License, una programación al estilo crontab puede ejecutar la sincronización cada domingo por la noche, y Job History registra el estado, el tamaño y el número de archivos de cada ejecución.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a weekly family archive backup job in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agrega tu disco externo o NAS y dos remotos en la nube, como pCloud y Backblaze B2.
3. Crea un trabajo de sincronización desde tu carpeta de archivo maestro con ambas nubes como destino y luego ejecuta un Dry Run.
4. Agrega un remoto Crypt para los archivos de ADN y los registros de personas vivas, y comprueba las copias con Folder Compare.

Con dos copias verificadas fuera del sitio, tu investigación sobrevivirá a cualquier disco individual.

---

**Guías relacionadas:**

- [Almacenamiento en la nube para museos y archivos](https://rcloneview.com/support/blog/cloud-storage-museums-archives-rcloneview)
- [Sincronización uno a muchos con varios destinos](https://rcloneview.com/support/blog/one-to-many-sync-multiple-destinations-rcloneview)
- [Cifra copias de seguridad en la nube con un remoto Crypt](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
