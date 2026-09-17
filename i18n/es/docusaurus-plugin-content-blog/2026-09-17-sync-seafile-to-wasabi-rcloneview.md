---
slug: sync-seafile-to-wasabi-rcloneview
title: "Sincronizar Seafile con Wasabi — Copia de seguridad en la nube con RcloneView"
authors:
  - kai
description: "Sincroniza una biblioteca de Seafile autoalojada con el almacenamiento compatible con S3 de Wasabi mediante RcloneView. Mantén una copia externa sin exportar archivos a mano."
keywords:
  - sincronizar Seafile con Wasabi
  - copia de seguridad de Seafile
  - sincronización en la nube de Wasabi
  - copia de seguridad en la nube autoalojada
  - Seafile RcloneView
  - almacenamiento compatible con S3 de Wasabi
  - sincronización nube a nube
  - copia de seguridad externa autoalojada
  - RcloneView Seafile
  - RcloneView Wasabi
tags:
  - RcloneView
  - seafile
  - wasabi
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincronizar Seafile con Wasabi — Copia de seguridad en la nube con RcloneView

> Dale a una biblioteca de Seafile autoalojada una copia de seguridad externa en Wasabi sin escribir ni un solo script de sincronización.

Seafile es una opción popular para equipos que quieren ejecutar su propia plataforma de sincronización de archivos en su servidor, pero el autoalojamiento también significa que la estrategia de copia de seguridad es responsabilidad exclusiva del equipo — si el disco del servidor falla, también lo hace la única copia. Wasabi es un destino externo natural: compatible con S3, asequible a gran escala y accesible desde cualquier lugar. RcloneView se conecta directamente a ambos, de modo que una biblioteca de Seafile puede reflejarse en un bucket de Wasabi según un calendario, en lugar de depender de exportaciones manuales.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Seafile y Wasabi como remotos

Añade primero tu servidor de Seafile como remoto, apuntando RcloneView a la URL de tu servidor y a las credenciales de la biblioteca. Añade Wasabi por separado usando tu Access Key ID, tu Secret Access Key y el endpoint regional de Wasabi correspondiente. Una vez configurados ambos remotos, aparecen como árboles de archivos navegables en los paneles del Explorer, de modo que puedes confirmar la estructura de la biblioteca y el número de archivos antes de montar un trabajo de sincronización. RcloneView monta Y sincroniza más de 90 proveedores desde una sola ventana en Windows, macOS y Linux, así que Seafile y Wasabi conviven junto a cualquier otra nube que ya tengas configurada.

<img src="/support/images/en/blog/new-remote.png" alt="Añadiendo remotos de Seafile y Wasabi en RcloneView" class="img-large img-center" />

## Crear un trabajo de sincronización unidireccional

Configura un trabajo de sincronización con tu biblioteca de Seafile como origen y un bucket de Wasabi como destino, usando "Modificar solo el destino" para que Wasabi permanezca como un espejo puro que nunca escribe de vuelta en Seafile. Para un equipo de diseño con una biblioteca compartida de 500 GB de archivos fuente y exportaciones, el paso de Filtering te permite excluir los archivos temporales y de bloqueo que Seafile genera internamente, manteniendo limpia la copia en Wasabi en lugar de llena de artefactos de sincronización.

Activa la comparación por checksum en Advanced Settings para que los archivos se comparen por hash y tamaño en lugar de solo por la fecha de modificación — útil porque Seafile y el almacenamiento compatible con S3 registran los metadatos de archivo de forma diferente.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Sincronizando una biblioteca de Seafile con un bucket de Wasabi con RcloneView" class="img-large img-center" />

Ejecuta Dry Run antes de la primera sincronización real. Muestra exactamente qué se transferiría sin mover ningún dato, algo que importa especialmente en ese primer paso, cuando aún no sabes lo grande que es realmente la biblioteca.

## Programar y verificar la copia de seguridad

Con una licencia PLUS, asocia al trabajo una programación tipo crontab para que se vuelva a ejecutar automáticamente — cada noche para una biblioteca de uso activo, semanalmente para algo más parecido a un archivo. Job History registra la duración, la velocidad de transferencia y el estado de cada ejecución, ofreciendo un registro claro de cuándo se actualizó por última vez la copia de Wasabi.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Programación de un trabajo recurrente de sincronización de Seafile a Wasabi en RcloneView" class="img-large img-center" />

Después de la primera sincronización completa, ejecuta Folder Compare entre el origen de Seafile y el destino de Wasabi para confirmar que todos los archivos llegaron y coinciden en tamaño — una forma rápida de detectar cualquier cosa que se haya perdido por una interrupción de red.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade tu servidor de Seafile como remoto con su URL de servidor y las credenciales de la biblioteca.
3. Añade Wasabi como remoto usando tu Access Key ID, tu Secret Access Key y el endpoint regional.
4. Crea un trabajo de sincronización unidireccional, ejecuta Dry Run y luego programa ejecuciones recurrentes para mantener la copia de seguridad al día.

Una biblioteca autoalojada solo permanece segura si también existe en otro lugar, y una sincronización programada de Seafile a Wasabi convierte ese requisito en algo que funciona por sí solo.

---

**Guías relacionadas:**

- [Gestionar la sincronización en la nube autoalojada de Seafile con RcloneView](https://rcloneview.com/support/blog/manage-seafile-self-hosted-cloud-sync-rcloneview)
- [Gestionar la sincronización y copia de seguridad en la nube de Wasabi con RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Migrar Seafile a Backblaze B2 con RcloneView](https://rcloneview.com/support/blog/migrate-seafile-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
