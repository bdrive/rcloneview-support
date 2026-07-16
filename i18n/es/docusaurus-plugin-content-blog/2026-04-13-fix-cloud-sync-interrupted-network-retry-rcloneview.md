---
slug: fix-cloud-sync-interrupted-network-retry-rcloneview
title: "Solucionar la sincronización en la nube interrumpida por errores de red — Reintentar y reanudar con RcloneView"
authors:
  - tayson
description: "Aprende a recuperar trabajos de sincronización en la nube interrumpidos por caídas de red en RcloneView. Usa la configuración de reintentos, la reejecución desde el Historial de trabajos y Dry Run para verificar el estado tras la interrupción."
keywords:
  - cloud sync interrupted network RcloneView
  - resume interrupted sync rclone
  - fix network error cloud sync
  - retry cloud sync RcloneView
  - cloud backup network drop fix
  - interrupted transfer recovery
  - rclone network retry settings
  - RcloneView sync resume
tags:
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar la sincronización en la nube interrumpida por errores de red — Reintentar y reanudar con RcloneView

> Las caídas de red durante una sincronización en la nube son frustrantes pero no catastróficas: el mecanismo de reintentos de RcloneView y la capacidad de reejecutar desde el Historial de trabajos vuelven a poner en marcha tu transferencia.

Las interrupciones de red a mitad de la sincronización son una realidad, especialmente en transferencias largas a través de conexiones domésticas, VPN o conexiones limitadas. Cuando la conectividad se pierde durante un trabajo de sincronización activo, los archivos ya transferidos están a salvo, pero necesitas saber qué se completó, qué falló y cómo reanudar correctamente. RcloneView ofrece configuración de reintentos, reejecución de trabajos desde el historial y verificación con Dry Run para gestionar este escenario de forma limpia.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Qué sucede cuando la red se cae

Cuando se pierde la conectividad de red durante un trabajo de sincronización, rclone (el motor detrás de RcloneView) intentará reintentar las operaciones fallidas según la configuración de reintentos del trabajo. Si la red no se recupera dentro de la ventana de reintentos, el trabajo se reporta como fallido. Los archivos transferidos correctamente antes de la interrupción permanecen en el destino: no se corromperán, pero tampoco se volverán a transferir innecesariamente en la siguiente ejecución.

La clave está en entender que los trabajos de sincronización de RcloneView son idempotentes: al volver a ejecutar un trabajo de sincronización se compara el origen y el destino y solo se transfiere lo que falta o ha cambiado.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing an interrupted sync in RcloneView" class="img-large img-center" />

## Configurar el comportamiento de reintentos

En RcloneView, abre tu trabajo de sincronización y ve al paso 2 (opciones de transferencia). Busca la configuración de reintentos:

- **Reintentar toda la sincronización si falla**: activa esta opción para volver a ejecutar automáticamente toda la sincronización si alguna transferencia falla. El valor predeterminado es 3 reintentos.
- **Reintentos de bajo nivel**: controla cuántas veces se reintentan las transferencias de archivos individuales antes de marcarlas como fallidas (predeterminado: 10)
- **Reintentar en caso de fallo**: garantiza que los errores transitorios (incluidos los tiempos de espera de red) activen reintentos automáticos con backoff

Para trabajos de sincronización en conexiones inestables, establecer **Reintentar toda la sincronización** en 5 y mantener **Reintentos de bajo nivel** en 10 proporciona una resiliencia considerable.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring retry settings in RcloneView job options" class="img-large img-center" />

## Reanudar desde el Historial de trabajos

Si un trabajo falla a pesar de los reintentos, ve a **Historial de trabajos** y busca la ejecución fallida. La entrada del historial muestra cuántos archivos se transfirieron y cuántos fallaron. Haz clic en **Reejecutar**: RcloneView vuelve a lanzar el mismo trabajo con la misma configuración. Como la sincronización compara el estado de origen y destino, los archivos ya transferidos se omiten y solo se procesan los archivos restantes o fallidos.

Esto es considerablemente más rápido que empezar de nuevo y evita volver a subir datos que ya llegaron correctamente al destino.

## Usar Dry Run para verificar el estado

Después de una interrupción de red, es posible que no tengas claro el estado actual de la sincronización, especialmente si el fallo ocurrió a mitad de un archivo grande. Activa **Dry Run** en el trabajo y vuelve a ejecutarlo. Dry Run muestra lo que transferiría la siguiente ejecución sin mover nada realmente. Esto te da una imagen clara de cuántos archivos quedan pendientes antes de comprometerte con la sincronización real.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Using Dry Run to verify sync state after network interruption" class="img-large img-center" />

## Gestionar interrupciones en archivos grandes

En transferencias de archivos individuales muy grandes (varios GB), una caída de red a mitad de archivo implica que ese archivo se volverá a transferir por completo en la siguiente ejecución (a menos que el proveedor de la nube admita cargas reanudables y el modo de transferencia fragmentada de rclone). Para minimizar la sobrecarga de retransferencia en archivos grandes, activa **cargas fragmentadas** en la configuración avanzada del trabajo donde esté disponible (proveedores compatibles con S3, Google Drive). Esto permite que las cargas parciales se reanuden desde el último fragmento completado.

## Cómo empezar

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abre la configuración de tu trabajo de sincronización y activa **Reintentar toda la sincronización si falla** con 3-5 reintentos.
3. Tras un trabajo interrumpido por la red, ve a **Historial de trabajos** y usa **Reejecutar** para reanudar.
4. Usa **Dry Run** para verificar el alcance restante de la transferencia antes de la reejecución final.

Con una configuración de reintentos adecuada y las reejecuciones desde el Historial de trabajos, las interrupciones de red son un inconveniente menor en lugar de un fallo de sincronización.

---

**Guías relacionadas:**

- [Recuperar transferencias interrumpidas y fallidas con RcloneView](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)
- [Monitoreo del Historial de trabajos y registros de transferencia](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)
- [Solucionar errores de rclone con RcloneView](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />
