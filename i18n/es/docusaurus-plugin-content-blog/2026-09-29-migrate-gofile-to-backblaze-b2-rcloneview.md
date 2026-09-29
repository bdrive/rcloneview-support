---
slug: migrate-gofile-to-backblaze-b2-rcloneview
title: "Migrar Gofile a Backblaze B2 — transfiere archivos con RcloneView"
authors:
  - tayson
description: "Migra Gofile a Backblaze B2 con RcloneView: conecta ambos remotos, prueba la copia con Dry Run, verifica con Folder Compare y conserva una copia de seguridad duradera."
keywords:
  - migrar gofile a backblaze b2
  - gofile a b2
  - copia de seguridad de gofile
  - migración a backblaze b2
  - RcloneView gofile
  - transferencia de nube a nube
  - herramienta de transferencia de archivos gofile
  - mover archivos desde gofile
  - rclone gofile backblaze
  - migración a la nube GUI
tags:
  - RcloneView
  - gofile
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar Gofile a Backblaze B2 — transfiere archivos con RcloneView

> Mueve los archivos compartidos mediante Gofile al almacenamiento de objetos de Backblaze B2 y comprueba que cada archivo haya llegado, sin escribir un solo comando.

Gofile es cómodo para entregar archivos a otras personas, pero no es un buen sitio para guardar la única copia de algo importante. Backblaze B2 es un almacenamiento de objetos pensado para la conservación a largo plazo, con control por bucket sobre lo que conservas. RcloneView conecta ambos servicios en una sola ventana y copia desde una única interfaz, así que no tienes que descargar y volver a subir cada archivo a mano.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta Gofile y Backblaze B2

Gofile se autentica con un Access Token. Cópialo desde el campo del token de API en tu página de perfil de Gofile, elige Gofile en **New Remote** y pégalo. Backblaze B2 necesita un Application Key ID y una Application Key, que generas en la página de gestión de claves de Backblaze. Crea una clave limitada al bucket de destino en lugar de una clave maestra, de modo que las credenciales de la migración solo puedan tocar lo necesario.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir los remotos de Gofile y Backblaze B2 en RcloneView" class="img-large img-center" />

Cuando ambos remotos existan, abre Gofile en un panel del Explorer y tu bucket de B2 en otro. RcloneView muestra hasta cuatro paneles a la vez, así que también puedes mantener abierta una carpeta local para comprobaciones puntuales. Conecta S3, Azure o Backblaze B2 con acceso completo de lectura y escritura con la licencia FREE.

## Planifica la estructura antes de copiar

Decide cómo se corresponde el contenido de Gofile con el bucket. Un estudio fotográfico con entregas a clientes en una docena de carpetas de Gofile podría crear un bucket de B2 y reflejar cada carpeta como un prefijo de nivel superior, lo que mantiene las rutas legibles más adelante. Crea primero las carpetas de destino con **New Folder** en el panel de B2.

Arrastra carpetas del panel de Gofile al panel de B2. Entre remotos distintos, arrastrar y soltar realiza una copia, así que los originales de Gofile permanecen intactos hasta que decidas otra cosa. Para una migración mayor y repetible, usa en su lugar el asistente Sync: elige Gofile como origen, la ruta del bucket como destino y ponle al trabajo un nombre con letras, números, guiones o guiones bajos.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferencia de nube a nube de Gofile a Backblaze B2 en RcloneView" class="img-large img-center" />

## Dry Run, transferencia y seguimiento

Antes de la ejecución real, usa **Dry Run**. Enumera los archivos que se copiarían y los que se eliminarían, de modo que un origen o destino equivocado se detecta antes de que te cueste algo. Si eliges una sincronización unidireccional, recuerda que modifica el destino para igualarlo al origen, así que un Dry Run merece el minuto que tarda.

En Advanced Settings puedes ajustar el número de transferencias de archivos simultáneas y activar la comparación por checksum. Empieza con prudencia en la primera ejecución y aumenta la concurrencia si la transferencia es estable. Sigue el progreso, la velocidad y el número de archivos en la pestaña **Transferring** de la parte inferior de la ventana.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Seguimiento del progreso de la transferencia en la pestaña Transferring" class="img-large img-center" />

## Verifica con Folder Compare

Cuando termine la transferencia, abre **Compare** desde la pestaña Home con Gofile a la izquierda y B2 a la derecha. Filtra por archivos left-only para ver lo que no llegó y por archivos different para detectar diferencias de tamaño. Copy right rellena los huecos sin reenviar los archivos que ya coinciden. Job History registra cada ejecución con su estado, tamaño y duración, lo que te deja un registro de la migración.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare mostrando las diferencias entre Gofile y B2" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade tu remoto de Gofile con el Access Token y tu remoto de Backblaze B2 con una clave de aplicación limitada al bucket.
3. Abre ambos remotos en paralelo, ejecuta un **Dry Run** y luego copia o sincroniza las carpetas.
4. Usa **Compare** para confirmar que no falta nada antes de limpiar el lado de Gofile.

Una copia verificada en B2 convierte enlaces compartidos temporales en una copia de seguridad que controlas tú.

---

**Guías relacionadas:**

- [Migrar Gofile a Google Drive](https://rcloneview.com/support/blog/migrate-gofile-to-google-drive-rcloneview)
- [Gestionar el almacenamiento de Gofile](https://rcloneview.com/support/blog/manage-gofile-cloud-sync-backup-rcloneview)
- [Migrar IDrive e2 a Backblaze B2](https://rcloneview.com/support/blog/migrate-idrive-e2-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
