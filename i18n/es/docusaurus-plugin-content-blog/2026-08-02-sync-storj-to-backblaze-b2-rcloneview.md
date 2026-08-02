---
slug: sync-storj-to-backblaze-b2-rcloneview
title: "Sincronizar Storj con Backblaze B2 — Copia de seguridad en la nube con RcloneView"
authors:
  - alex
description: "Sincroniza archivos desde el almacenamiento descentralizado de Storj a Backblaze B2 con RcloneView. Mantén una copia redundante fuera de red de tus datos compatibles con S3."
keywords:
  - Storj a Backblaze B2
  - sincronizar Storj
  - copia de seguridad de Storj
  - sincronización Backblaze B2
  - copia de seguridad de almacenamiento descentralizado
  - Storj RcloneView
  - sincronización de almacenamiento compatible con S3
  - copia de seguridad de nube a nube
  - redundancia de almacenamiento de objetos
  - sincronización RcloneView
tags:
  - RcloneView
  - storj
  - backblaze-b2
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincronizar Storj con Backblaze B2 — Copia de seguridad en la nube con RcloneView

> Mantén una copia redundante y centralizada de tus datos de almacenamiento descentralizado de Storj en Backblaze B2 con RcloneView: un trabajo, dos arquitecturas de almacenamiento muy diferentes.

Storj distribuye fragmentos de archivos cifrados en una red de nodos independiente, lo cual es excelente para la resistencia a la censura y el costo, pero también significa que los equipos suelen querer una copia de seguridad convencional y alojada centralmente como segunda capa de protección. Backblaze B2 cumple bien ese papel: un bucket estándar compatible con S3 con una recuperación sencilla. RcloneView se conecta a ambos mediante su compatibilidad con remotos S3 y mueve datos directamente entre ellos, sin necesidad de una unidad de preparación local.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Storj y Backblaze B2

Añade Storj como remoto en RcloneView usando su punto de conexión de puerta de enlace compatible con S3 y el acceso concedido, o el par de claves de acceso nativo de Storj, según cómo esté configurado tu proyecto. Añade Backblaze B2 por separado usando tu Application Key ID y Application Key desde la consola de B2. Ambos remotos aparecen entonces como árboles de archivos navegables uno al lado del otro en los paneles del Explorador, para que puedas confirmar la estructura de los buckets y el número de objetos antes de crear un trabajo de sincronización.

RcloneView monta y sincroniza más de 90 proveedores desde una sola ventana en Windows, macOS y Linux, por lo que la misma interfaz que usas para Storj y B2 también gestiona cualquier otra nube que ya tengas en tu conjunto de herramientas.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Storj and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## Crear el trabajo de sincronización

Crea un trabajo de sincronización unidireccional con tu bucket de Storj como origen y un bucket de Backblaze B2 como destino: "Modificar solo el destino" mantiene B2 como un espejo puro que nunca escribe de vuelta en Storj. En el paso de Configuración Avanzada (Advanced Settings), activa la comparación de sumas de verificación para que los archivos se cotejen por hash y tamaño en lugar de solo por la fecha de modificación, algo importante cuando los metadatos de los objetos se comportan de forma diferente entre dos backends de almacenamiento distintos.

Para un equipo que archiva un conjunto de datos descentralizado —por ejemplo, un grupo de investigación con 4 TB de material de video fragmentado en Storj—, el paso de Filtrado (Filtering) permite delimitar la primera ejecución por antigüedad de archivo o extensión, de modo que puedas validar el flujo en un subconjunto antes de comprometerte con la transferencia completa. Una vez completada la sincronización inicial, las reejecuciones programadas solo mueven los objetos nuevos o modificados.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing a Storj bucket to Backblaze B2 with RcloneView" class="img-large img-center" />

Ejecuta primero la Ejecución de Prueba (Dry Run). Enumera cada objeto que se copiaría sin transferir nada, la forma más segura de confirmar el alcance antes de mover datos entre dos proveedores con características de precio y recuperación diferentes.

## Supervisar y verificar la transferencia

Sigue el progreso en la pestaña de Transferencia (Transferring) de la Vista de Información inferior: el recuento de archivos, la velocidad de transferencia y el porcentaje completado se actualizan en tiempo real mientras se ejecuta la sincronización. Una vez finalizada, abre Comparar Carpetas (Folder Compare) entre el origen de Storj y el destino de B2 para confirmar que cada objeto llegó y coincide en tamaño, detectando así cualquier objeto que haya fallado a mitad de camino debido a un contratiempo de red en cualquiera de los dos lados.

El Historial de Trabajos (Job History) mantiene un registro permanente de cada ejecución de sincronización, incluyendo duración, datos totales movidos y estado, para que tengas un rastro de auditoría que muestre exactamente cuándo se actualizó por última vez tu copia de seguridad de B2 con respecto a Storj.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Storj to Backblaze B2 sync job history in RcloneView" class="img-large img-center" />

## Cómo empezar

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade Storj como remoto usando su punto de conexión compatible con S3 y las credenciales de acceso.
3. Añade Backblaze B2 usando tu Application Key ID y Application Key.
4. Crea un trabajo de sincronización unidireccional, ejecuta la Ejecución de Prueba y luego ejecútalo para reflejar Storj en B2.

Una segunda copia, alojada centralmente, de los datos de almacenamiento descentralizado cierra una brecha fácil de pasar por alto en la mayoría de las estrategias de copia de seguridad, y RcloneView convierte su mantenimiento en una rutina programada e impulsada por interfaz gráfica en lugar de una tarea manual.

---

**Guías relacionadas:**

- [Gestionar la sincronización de la nube descentralizada de Storj con RcloneView](https://rcloneview.com/support/blog/manage-storj-decentralized-cloud-sync-rcloneview)
- [Migrar Backblaze B2 a Wasabi con RcloneView](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-wasabi-rcloneview)
- [Solucionar errores de carga de Storj con RcloneView](https://rcloneview.com/support/blog/fix-storj-upload-errors-rcloneview)

<CloudSupportGrid />
