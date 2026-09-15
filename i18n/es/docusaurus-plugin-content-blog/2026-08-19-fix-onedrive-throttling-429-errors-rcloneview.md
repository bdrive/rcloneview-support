---
slug: fix-onedrive-throttling-429-errors-rcloneview
title: "Solucionar errores de limitación 429 de OneDrive — Sincronización fiable con RcloneView"
authors:
  - steve
description: "Evita que los errores de limitación 429 Too Many Requests de OneDrive interrumpan sincronizaciones grandes — configura reintentos y límites de transferencia en RcloneView."
keywords:
  - OneDrive 429 error
  - OneDrive throttling fix
  - OneDrive too many requests
  - RcloneView OneDrive sync
  - fix OneDrive API rate limit
  - OneDrive sync failed retry
  - reduce OneDrive throttling
  - OneDrive large sync errors
  - Microsoft Graph API throttling
tags:
  - RcloneView
  - onedrive
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar errores de limitación 429 de OneDrive — Sincronización fiable con RcloneView

> Cuando OneDrive empieza a devolver 429 Too Many Requests en mitad de una sincronización, la solución no es reintentar a ciegas, sino reducir la intensidad con la que estás golpeando la API de Microsoft Graph.

OneDrive aplica límites de velocidad de solicitudes en la API de Microsoft Graph, y un trabajo de sincronización que mueve miles de archivos pequeños o que se ejecuta junto con varios otros trabajos puede superar rápidamente esos límites, provocando que las transferencias se detengan o fallen a mitad de camino con respuestas 429. Esto es diferente de un error de cuota o de almacenamiento lleno — la cuenta tiene espacio disponible, pero Microsoft está rechazando temporalmente las solicitudes porque llegan demasiado rápido. RcloneView te da control directo sobre la concurrencia de transferencias y el comportamiento de reintento, para que puedas ajustar un trabajo de OneDrive de modo que se mantenga por debajo del umbral en lugar de saturar la API y fallar.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Reconocer un error de limitación 429

Revisa la pestaña Log en la Info View inferior y busca respuestas HTTP 429 o mensajes que hagan referencia a limitación de velocidad durante un trabajo de OneDrive — esto es distinto de un fallo de autenticación o un mensaje de "cuota excedida", que apuntan a tokens caducados o a una cuenta llena. Los errores de limitación tienden a aparecer en ráfagas a mitad de trabajos grandes, a menudo cuando se transfieren simultáneamente muchos archivos pequeños en lugar de unos pocos grandes. Si el trabajo finalmente se completa tras varios reintentos con pausas entre ellos, es una señal clara de que la lógica de reintento incorporada ya se está recuperando por sí sola de la limitación.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log showing a OneDrive sync job with retries" class="img-large img-center" />

## Reducir la concurrencia para disminuir la limitación

La solución más directa es reducir cuántas solicitudes envía RcloneView a OneDrive a la vez. En el paso Advanced Settings del trabajo de sincronización, reduce el número de transferencias de archivos y el número de comprobadores de igualdad (equality checkers) — la especificación recomienda 4 o menos comprobadores de igualdad para backends que limitan de forma agresiva, y OneDrive es uno de ellos. Las transferencias multihilo también pueden reducirse desde el valor predeterminado de 4, o desactivarse por completo estableciéndolo en 0, lo que intercambia algo de rendimiento bruto por un trabajo que se completa sin activar los límites de velocidad.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring transfer settings for a OneDrive sync job" class="img-large img-center" />

## Dejar que los reintentos hagan su trabajo

Los trabajos de sincronización de RcloneView incluyen una opción "Retry entire sync if fails", con un valor predeterminado de 3 intentos, que a menudo es suficiente para superar una ventana temporal de limitación, ya que los límites de velocidad de OneDrive se restablecen tras un breve período de enfriamiento. Evita configurar este valor en 1 (desactivando el reintento) en cualquier trabajo de OneDrive que mueva un gran número de archivos, ya que de lo contrario una sola respuesta 429 haría fallar todo el trabajo en lugar de reintentarlo automáticamente. RcloneView monta y sincroniza más de 90 proveedores desde una sola ventana en Windows, macOS y Linux, así que si OneDrive es solo uno de varios remotos en tu flujo de trabajo, puedes escalonar los trabajos entre distintos proveedores para evitar concentrar solicitudes en el backend más propenso a la limitación.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a OneDrive sync job to run at off-peak times" class="img-large img-center" />

## Espaciar los trabajos programados

Si ejecutas trabajos de sincronización de OneDrive según un horario, evita activar varios trabajos de OneDrive exactamente al mismo tiempo — incluso contra carpetas diferentes, comparten el límite de velocidad de la misma cuenta. Los usuarios con licencia PLUS pueden escalonar los horarios estilo crontab por unos minutos entre trabajos para que las solicitudes no se acumulen, y pueden previsualizar los próximos horarios de ejecución con el simulador de programación antes de guardar. En transferencias únicas muy grandes, ejecutar el trabajo en horas de menor actividad también puede reducir la probabilidad de colisionar con otro tráfico automatizado de la misma cuenta de Microsoft.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html) si aún no lo has hecho.
2. Abre el trabajo de OneDrive que está generando errores 429 y revisa su pestaña Log para ver el patrón de fallos.
3. Reduce las transferencias de archivos y los comprobadores de igualdad en Advanced Settings, y confirma que el reintento está configurado en al menos 3.
4. Vuelve a ejecutar el trabajo y observa la pestaña Transferring para confirmar que se completa sin detenerse.

Una sincronización más lenta y constante que termina de forma fiable es mejor que una rápida que falla a mitad de camino y te deja sin saber qué se transfirió realmente.

---

**Guías relacionadas:**

- [Gestionar el almacenamiento de OneDrive — Sincronizar y respaldar archivos con RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Solucionar errores de sincronización de OneDrive — Cómo resolverlos con RcloneView](https://rcloneview.com/support/blog/fix-onedrive-sync-errors-rcloneview)
- [Solucionar errores de límite de velocidad de la API en la nube con RcloneView](https://rcloneview.com/support/blog/fix-cloud-api-rate-limiting-errors-rcloneview)

<CloudSupportGrid />
