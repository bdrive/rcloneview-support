---
slug: migrate-cloudflare-r2-to-backblaze-b2-rcloneview
title: "Migrar de Cloudflare R2 a Backblaze B2 — Transfiere archivos con RcloneView"
authors:
  - tayson
description: "Aprende a migrar archivos de Cloudflare R2 a Backblaze B2 usando la interfaz visual de RcloneView. Transfiere almacenamiento compatible con S3 sin comandos de CLI."
keywords:
  - cloudflare r2 to backblaze b2
  - migrate r2 to b2
  - cloudflare r2 migration
  - backblaze b2 transfer
  - cloud-to-cloud migration
  - rcloneview cloud transfer
  - s3 compatible migration
  - object storage migration
  - r2 backup to b2
tags:
  - RcloneView
  - cloudflare-r2
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar de Cloudflare R2 a Backblaze B2 — Transfiere archivos con RcloneView

> Pasar de Cloudflare R2 a Backblaze B2 no tiene por qué significar escribir scripts o gestionar tokens de API en una terminal.

Cloudflare R2 ofrece precios sin costo de egress, pero algunos equipos descubren que las integraciones más profundas del ecosistema de Backblaze B2, sus políticas de ciclo de vida y sus asociaciones con Bandwidth Alliance lo convierten en una mejor opción a largo plazo. Ya sea que estés consolidando almacenamiento de objetos o trasladando cargas de trabajo, RcloneView te permite migrar cada bucket de R2 a B2 mediante una interfaz de apuntar y hacer clic, sin necesidad de CLI.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué migrar de Cloudflare R2 a Backblaze B2

Backblaze B2 ofrece integraciones nativas con socios de CDN como Cloudflare (a través de Bandwidth Alliance) y Fastly, lo que significa que el egress desde B2 a través de esas redes es gratuito o tiene un descuento considerable. B2 también admite endpoints de API compatibles con S3 junto con su propia API nativa, lo que te da flexibilidad en cómo se conectan las aplicaciones. Para los equipos que necesitan reglas de ciclo de vida a nivel de aplicación, gestión de claves de cifrado del lado del servidor o notificaciones de eventos, B2 ofrece funciones que el conjunto de características actual de R2 todavía no iguala.

La previsibilidad de costos es otro factor. Backblaze B2 cobra una tarifa fija de $6 por TB al mes por almacenamiento, con egress gratuito a través de redes asociadas. Si tu arquitectura ya enruta el tráfico a través de la CDN de Cloudflare, la combinación de almacenamiento en B2 con entrega mediante Cloudflare puede resultar más económica que R2 por sí solo una vez que tienes en cuenta los costos de cómputo y de Workers.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Cloudflare R2 and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## Configurar ambos remotos en RcloneView

Abre RcloneView y crea un nuevo remoto para Cloudflare R2. Selecciona "Amazon S3 Compliant" como tipo de proveedor y luego elige "Cloudflare R2" en el menú desplegable de proveedores S3. Introduce tu Access Key ID de R2, tu Secret Access Key y la URL del endpoint, normalmente con el formato `https://<account-id>.r2.cloudflarestorage.com`. RcloneView valida la conexión antes de guardarla.

A continuación, agrega un remoto de Backblaze B2. Puedes usar el tipo de proveedor nativo de B2 o la interfaz compatible con S3. Para la opción nativa, introduce tu Application Key ID y tu Application Key de B2. RcloneView listará automáticamente tus buckets existentes una vez conectado. Si el bucket de destino aún no existe, créalo primero en la consola de B2 con la región y las configuraciones de cifrado que prefieras.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring cloud-to-cloud transfer from R2 to B2" class="img-large img-center" />

## Ejecutar la migración

Con ambos remotos configurados, abre el explorador de dos paneles de RcloneView. Selecciona tu remoto de R2 en un lado y el remoto de B2 en el otro. Navega hasta el bucket de origen en R2 y el bucket de destino en B2. Puedes arrastrar y soltar todo el contenido del bucket o seleccionar prefijos y carpetas específicas para transferir.

Para migraciones grandes, crea un trabajo de sincronización o copia en su lugar. Ve al Job Manager, establece R2 como origen y B2 como destino, y elige el modo "Copy" para asegurarte de que los archivos lleguen a B2 sin eliminar nada de R2 durante la transición. Activa la verificación de checksum para validar que cada objeto llegue intacto: tanto R2 como B2 admiten checksums MD5 en las subidas compatibles con S3, por lo que RcloneView puede verificar la integridad de extremo a extremo.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files from Cloudflare R2 to Backblaze B2" class="img-large img-center" />

## Programar y monitorear las transferencias

Si tus buckets de R2 contienen terabytes de datos, divide la migración en trabajos programados. El programador de RcloneView te permite ejecutar transferencias durante horas de menor actividad para evitar saturar tu red. Establece límites de ancho de banda por trabajo para mantener otros servicios funcionando sin problemas.

Monitorea el progreso en el panel de transferencias, que muestra el rendimiento en tiempo real, el recuento de archivos y cualquier error. Una vez que se complete la copia inicial, cambia el trabajo al modo "Sync" y ejecútalo periódicamente hasta que traslades los endpoints de tu aplicación de R2 a B2.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling R2 to B2 migration jobs in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agrega tu remoto de Cloudflare R2 usando credenciales compatibles con S3 y el endpoint de tu cuenta.
3. Agrega tu remoto de Backblaze B2 con tu Application Key ID y tu Application Key.
4. Crea un trabajo de copia de R2 a B2 con la verificación de checksum activada y luego prográmalo para que se ejecute durante horas de menor actividad.

Una vez que todos los objetos estén verificados en B2, actualiza los endpoints de tu aplicación y desmantela los buckets de R2 a tu propio ritmo.

---

**Guías relacionadas:**

- [Pasar de Cloudflare R2 a AWS S3 con RcloneView](https://rcloneview.com/support/blog/move-from-cloudflare-r2-to-aws-s3-with-rcloneview)
- [Comparar Cloudflare R2 y AWS S3 con RcloneView](https://rcloneview.com/support/blog/compare-cloudflare-r2-and-aws-s3-with-rcloneview)
- [Centralizar S3, Wasabi y R2 con RcloneView](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
