---
slug: equality-checkers-slow-backends-sync-tuning-rcloneview
title: "Number of Equality Checkers — Ajusta las comparaciones de sincronización para backends lentos en RcloneView"
authors:
  - kai
description: "Descubre qué hace el ajuste Number of equality checkers en el asistente de sincronización de RcloneView y cómo ajustarlo para SFTP, FTP, WebDAV y remotos en la nube con límites de solicitudes."
keywords:
  - ajuste rclone checkers
  - number of equality checkers
  - rclone checkers GUI
  - ajustar sincronización para backends lentos
  - rendimiento de sincronización SFTP
  - sincronización WebDAV lenta
  - límite de solicitudes de API en la nube sincronización
  - ajustes avanzados de sincronización de RcloneView
  - sincronización con comparación de checksum
tags:
  - RcloneView
  - feature
  - performance
  - cloud-sync
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Number of Equality Checkers — Ajusta las comparaciones de sincronización para backends lentos en RcloneView

> Antes de copiar nada, una sincronización tiene que decidir qué archivos ya coinciden. El número de checkers controla cuánto presiona ese paso a tu almacenamiento.

Todo trabajo de Sync en RcloneView empieza comparando los archivos de origen y destino para determinar qué hay que transferir realmente. Ese trabajo lo realizan los equality checkers, y el Step 2 del asistente de sincronización te permite fijar cuántos se ejecutan en paralelo. El valor predeterminado de 8 sirve para la mayoría de proveedores en la nube, pero un servidor SFTP pequeño, un recurso compartido WebDAV o un proveedor con límites de API estrictos suelen comportarse mejor con menos.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Qué hacen los equality checkers

Un checker examina un archivo en ambos lados y decide si es el mismo. De forma predeterminada, la comparación usa el tamaño y la fecha de modificación. Si marcas **Enable checksum** en el mismo paso, los archivos se comparan por hash y tamaño, lo que es más estricto pero exige pedir al backend el hash de cada archivo.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Opening a sync job in RcloneView to adjust advanced settings" class="img-large img-center" />

Los checkers son independientes de **Number of file transfers**, que controla cuántos archivos se copian a la vez. Una sincronización de 200.000 archivos pequeños, la mayoría sin cambios, pasa mucho más tiempo comprobando que transfiriendo, por lo que el número de checkers puede importar más que el de transferencias.

## Cuándo reducir el número de checkers

La recomendación de RcloneView es usar 4 o menos para backends lentos. Casos típicos:

- **SFTP o FTP en un servidor modesto.** Las comprobaciones en paralelo implican más conexiones simultáneas, y un VPS pequeño o un NAS antiguo puede rechazar o limitar las sesiones adicionales.
- **Recursos compartidos WebDAV** que responden lentamente a las solicitudes de metadatos.
- **Proveedores en la nube con límites de solicitudes estrictos**, donde las ráfagas de solicitudes en paralelo provocan errores de límite y reintentos.

Reducir los checkers cambia paralelismo bruto por un progreso más estable. Si el registro muestra reintentos o errores de conexión repetidos durante la fase de comparación, baja a 4, luego a 2, y vuelve a ejecutar.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring sync progress and speed in the RcloneView Transferring tab" class="img-large img-center" />

## Cuándo basta el valor predeterminado

El almacenamiento de objetos compatible con S3, como Amazon S3, Wasabi o Cloudflare R2, suele manejar 8 checkers sin problemas, y los discos locales o un NAS en una LAN rápida rara vez necesitan ajustes. RcloneView monta Y sincroniza 90+ proveedores desde una sola ventana, en Windows, macOS y Linux, así que es habitual que un mismo equipo necesite valores de checkers distintos por trabajo: deja el trabajo de S3 con el valor predeterminado y reduce solo el de SFTP.

## Mide el cambio con Dry Run y Job History

Cambia un ajuste cada vez. Ejecuta un Dry Run para confirmar el alcance del trabajo, luego lanza la sincronización y abre Job History, que registra Time Spent, Status y el número de archivos de cada ejecución. Comparar dos ejecuciones del mismo trabajo con valores de checkers diferentes muestra si el cambio ayudó. Si el ajuste de reintento (**Retry entire sync if fails**, predeterminado 3) se activa continuamente, es otra señal de que el backend necesita menos solicitudes en paralelo.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Comparing sync run durations in RcloneView Job History after changing the checker count" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abre Job Manager y edita el trabajo de sincronización que apunta a tu remoto lento.
3. En el Step 2, fija **Number of equality checkers** en 4 y decide si necesitas **Enable checksum**.
4. Ejecuta el trabajo y compara Time Spent y el estado con ejecuciones anteriores en Job History.

Unos minutos de ajuste convierten una sincronización que se atasca en la fase de comparación en una que termina de forma constante.

---

**Guías relacionadas:**

- [Acelera las transferencias en la nube — Subidas multihilo y flujos paralelos en RcloneView](https://rcloneview.com/support/blog/multi-threaded-transfers-parallel-streams-rcloneview)
- [Soluciona transferencias lentas en la nube — Acelera la sincronización y la copia en RcloneView](https://rcloneview.com/support/blog/fix-slow-cloud-transfers-speed-rcloneview)
- [Migraciones en la nube verificadas por checksum con RcloneView (Drive, Dropbox, S3, R2)](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
