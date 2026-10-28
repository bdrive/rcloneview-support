---
slug: fix-mailru-cloud-sync-errors-rcloneview
title: "Soluciona los errores de sincronización de Mail.ru Cloud — Guía de solución de problemas con RcloneView"
authors:
  - casey
description: "Resuelve los fallos de sincronización más comunes de Mail.ru Cloud en RcloneView: errores de autenticación, tiempos de espera, archivos omitidos y discrepancias, con soluciones prácticas."
keywords:
  - solucionar errores de sincronización de mail.ru cloud
  - mailru cloud sincronización fallida
  - mail.ru cloud rcloneview
  - error de autenticación de mailru
  - tiempo de espera de mailru
  - solución de problemas de mail.ru cloud
  - errores de sincronización en la nube
  - solución de problemas de rcloneview
  - errores de copia de seguridad de mailru
tags:
  - RcloneView
  - mailru
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Soluciona los errores de sincronización de Mail.ru Cloud — Guía de solución de problemas con RcloneView

> La mayoría de los fallos de sincronización de Mail.ru Cloud en RcloneView se deben a las credenciales, la concurrencia o un filtro, y cada uno se corrige con unos pocos clics.

Cuando un trabajo de Mail.ru Cloud se detiene o informa de errores, la causa rara vez es misteriosa. RcloneView registra cada ejecución en Job History y en la pestaña Log, de modo que puedes relacionar el mensaje con una causa conocida. Esta guía cubre los problemas más frecuentes y los ajustes que los resuelven.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Fallos de autenticación y conexión

Si un trabajo que funcionaba la semana pasada ahora falla de inmediato, las credenciales almacenadas son el primer sospechoso. Abre Remote Manager, selecciona el remoto de Mail.ru Cloud y edítalo para volver a introducir los datos de la cuenta; si la cuenta tiene seguridad adicional activada, confirma que las credenciales que introdujiste son las que el servicio acepta para acceso de terceros. Tras guardar, explora el remoto en un panel Explorer. Si la lista de carpetas se carga, la conexión está sana y el problema está en el propio trabajo.

<img src="/support/images/en/blog/new-remote.png" alt="Recreación de un remoto de Mail.ru Cloud en RcloneView" class="img-large img-center" />

## Tiempos de espera y transferencias detenidas

Las transferencias lentas o interrumpidas suelen indicar demasiada concurrencia para la conexión. En Advanced Settings del trabajo, reduce Number of file transfers y establece Number of equality checkers en 4 o menos, ya que los backends más lentos funcionan mejor con menos comprobaciones en paralelo. Aumenta "Retry entire sync if fails" por encima de su valor predeterminado de 3 en trabajos largos para que las caídas de red transitorias se recuperen automáticamente. Observa la pestaña Transferring para confirmar que la velocidad se estabiliza.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Supervisión de una transferencia de Mail.ru Cloud en la pestaña Transferring" class="img-large img-center" />

## Archivos que faltan o no coinciden

Si los archivos se ven diferentes tras completarse una sincronización, ejecuta Compare entre el origen y el remoto de Mail.ru Cloud. Muestra los archivos left-only para encontrar lo que nunca llegó y cópialos directamente desde la vista de comparación. Si el contenido no coincide, activa la opción de suma de comprobación en el paso 2 del asistente de Sync para que los archivos se comparen por hash y tamaño en lugar de solo por marca de tiempo.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparación de carpetas para encontrar archivos que faltan en Mail.ru Cloud" class="img-large img-center" />

## Filtros, Dry Run y Job History

Un trabajo también puede omitir archivos por diseño. Revisa en el paso 3 Filtering Settings el tamaño máximo de archivo, la antigüedad máxima o las reglas de exclusión personalizadas que hayas olvidado. Después ejecuta un Dry Run para ver exactamente qué archivos se copiarían o eliminarían antes de tocar datos reales. Luego abre Job History para comparar el estado, el tamaño y el número de archivos con ejecuciones anteriores correctas. RcloneView puede montar y sincronizar más de 90 proveedores desde una sola ventana, así que también puedes montar el remoto de Mail.ru Cloud para inspeccionar su contenido como si fuera una unidad local.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Revisión del historial de trabajos de Mail.ru Cloud en RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abre Job History y lee la entrada de la pestaña Log del trabajo de Mail.ru Cloud que falló.
3. Aplica la solución correspondiente de las anteriores: credenciales, concurrencia, suma de comprobación o filtros.
4. Ejecuta un Dry Run, vuelve a ejecutar el trabajo y confirma con Compare.

Las comprobaciones metódicas superan a las conjeturas: corrige la causa una vez y tus trabajos de Mail.ru Cloud volverán a ejecutarse sin problemas.

---

**Guías relacionadas:**

- [Gestiona Mail.ru Cloud — Sincroniza y haz copias de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-mailru-cloud-sync-rcloneview)
- [Migra Mail.ru Cloud a Backblaze B2 — Transfiere archivos con RcloneView](https://rcloneview.com/support/blog/migrate-mailru-cloud-to-backblaze-b2-rcloneview)
- [Soluciona los errores de límite de tasa de la API en la nube con RcloneView](https://rcloneview.com/support/blog/fix-cloud-api-rate-limiting-errors-rcloneview)

<CloudSupportGrid />
