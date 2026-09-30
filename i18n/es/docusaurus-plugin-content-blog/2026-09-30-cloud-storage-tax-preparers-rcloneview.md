---
slug: cloud-storage-tax-preparers-rcloneview
title: "Almacenamiento en la nube para asesores fiscales — Copias de seguridad organizadas de clientes con RcloneView"
authors:
  - casey
description: "Almacenamiento en la nube para asesores fiscales: usa RcloneView para respaldar las declaraciones de tus clientes, cifrar archivos sensibles y mantener cada temporada una copia externa verificada."
keywords:
  - almacenamiento en la nube para asesores fiscales
  - copia de seguridad de archivos de asesor fiscal
  - copia de seguridad en la nube en temporada de impuestos
  - copia de seguridad de documentos de clientes
  - copia de seguridad cifrada en la nube
  - RcloneView impuestos
  - respaldar declaraciones de impuestos en la nube
  - copia de seguridad multinube contabilidad
  - remoto crypt archivos sensibles
  - comparación de carpetas en la nube
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

# Almacenamiento en la nube para asesores fiscales — Copias de seguridad organizadas de clientes con RcloneView

> Mantén las declaraciones de clientes, los documentos de origen y las cartas de encargo respaldados fuera de las instalaciones, cifrados y verificados, todo desde una sola aplicación de escritorio.

Una asesoría fiscal acumula miles de PDF cada temporada: formularios W-2, declaraciones de años anteriores, autorizaciones firmadas. La mayor parte reside en una estación de trabajo de la oficina o en un NAS, y un solo disco averiado en marzo puede costar días. RcloneView ofrece a una asesoría pequeña una forma de copiar esos datos al almacenamiento en la nube de forma programada, cifrarlos antes y demostrar que la copia está completa.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Respalda las carpetas locales de clientes en la nube

Supongamos que una asesoría de dos personas guarda las carpetas de clientes en un disco local, una por cliente y año. Añade un remoto en la nube como Backblaze B2, Amazon S3 u OneDrive en **New Remote** y luego abre la carpeta local en un panel del Explorer y el destino en la nube en el otro.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a cloud remote for tax client backups in RcloneView" class="img-large img-center" />

Usa el asistente de Sync para crear un trabajo desde la carpeta local hasta el bucket. Ponle un nombre como `clients-2026` y usa Advanced Settings para activar la comparación por suma de verificación, de modo que los archivos modificados se detecten por hash y tamaño, no solo por la marca de tiempo.

## Cifra los documentos sensibles antes de subirlos

Las declaraciones contienen nombres, números de identificación y datos bancarios. RcloneView admite remotos virtuales Crypt, que cifran los nombres de archivo, los nombres de carpeta y el contenido antes de que lleguen al proveedor. Crea un remoto Crypt que envuelva la ruta de tu bucket y luego dirige el trabajo de sincronización al remoto Crypt en lugar de al bucket sin cifrar. Guarda la contraseña de crypt en un lugar seguro fuera de la misma cuenta en la nube; sin ella, la copia de seguridad no se puede descifrar.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing encrypted client folders to cloud storage" class="img-large img-center" />

## Programa copias de seguridad de temporada y revisa el historial

Durante la temporada de declaraciones, los cambios ocurren a diario. La programación es una función PLUS: usa el Step 4 de estilo crontab para ejecutar el trabajo cada noche y usa Simulate schedule para ver las próximas ejecuciones. Con la licencia FREE, aún puedes ejecutar manualmente el mismo trabajo con un clic desde el Job Manager.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a nightly tax client backup job" class="img-large img-center" />

Job History muestra cada ejecución con su estado, duración, tamaño y número de archivos, de modo que puedas demostrar que las copias se ejecutaron en las noches que importaban. Ejecuta **Dry Run** antes de cualquier sincronización unidireccional para ver qué se copiaría o eliminaría.

## Verifica antes de archivar la temporada

Al final de la temporada, abre **Compare** con la carpeta local a la izquierda y la copia en la nube a la derecha. Filtra por archivos que solo estén a la izquierda o que sean distintos para encontrar lo que falte y cópialo. Cuando la comparación esté limpia, puedes liberar espacio en el equipo de la oficina.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing local client folders with the cloud backup" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade un remoto en la nube y, si es necesario, un remoto Crypt encima.
3. Crea un trabajo de sincronización desde la carpeta de tus clientes y ejecuta primero un Dry Run.
4. Verifica con Folder Compare y revisa Job History.

Una copia externa cifrada y probada convierte una avería de hardware durante la temporada de declaraciones en un contratiempo en lugar de una crisis.

---

**Guías relacionadas:**

- [Almacenamiento en la nube para despachos de contabilidad y finanzas](https://rcloneview.com/support/blog/cloud-storage-accounting-finance-firms-rcloneview)
- [Remoto Crypt sin CLI](https://rcloneview.com/support/blog/zero-cli-crypt-remote-rcloneview)
- [Lista de comprobación de seguridad del almacenamiento en la nube](https://rcloneview.com/support/blog/cloud-storage-security-checklist-rcloneview)

<CloudSupportGrid />
