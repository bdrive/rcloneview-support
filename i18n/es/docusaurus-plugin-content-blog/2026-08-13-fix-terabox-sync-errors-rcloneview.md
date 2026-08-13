---
slug: fix-terabox-sync-errors-rcloneview
title: "Solucionar errores de sincronización de Terabox — Cómo resolverlos con RcloneView"
authors:
  - morgan
description: "Diagnostique y resuelva fallos comunes de sincronización de Terabox en RcloneView, desde tiempos de espera de conexión hasta transferencias detenidas, usando registros, reintentos y filtros."
keywords:
  - errores de sincronización de Terabox
  - solución de problemas de RcloneView
  - problemas de conexión de Terabox
  - solucionar errores de sincronización
  - solución de problemas de sincronización en la nube
  - tiempo de espera de Terabox
  - rclone terabox
  - solución de transferencia detenida
tags:
  - RcloneView
  - terabox
  - troubleshooting
  - tips
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar errores de sincronización de Terabox — Cómo resolverlos con RcloneView

> Los trabajos de sincronización de Terabox que se detienen, agotan el tiempo de espera o fallan a mitad de camino suelen deberse a un puñado de causas — los registros, los ajustes de reintento y la herramienta de simulación de RcloneView facilitan identificarlas.

El almacenamiento de nivel gratuito de Terabox lo convierte en un destino de copia de seguridad popular, pero su API puede ser menos tolerante que la de proveedores más grandes bajo una carga de transferencia sostenida, especialmente con muchos archivos pequeños o grandes cargas por lotes. Cuando un trabajo de Terabox en RcloneView reporta errores o simplemente deja de avanzar, la solución rara vez es simplemente hacer clic en ejecutar de nuevo — se trata de identificar si el trabajo está alcanzando un límite de conexión, una sesión caducada o un problema a nivel de archivo, y luego ajustar la configuración del trabajo en consecuencia. RcloneView también sincroniza y compara carpetas, no solo las monta, lo que le da una forma de confirmar exactamente qué se transfirió y qué no antes de reintentar.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Patrones comunes de fallo de sincronización de Terabox

La mayoría de los errores de Terabox en RcloneView se dividen en tres grupos. Los errores de conexión aparecen como tiempos de espera o conexiones rechazadas a mitad de la transferencia, generalmente por demasiadas transferencias simultáneas que alcanzan a la vez los límites de tasa de Terabox. Los errores de autenticación aparecen cuando un token de sesión de Terabox ha caducado, lo que se manifiesta como un fallo repentino en un trabajo que antes funcionaba bien. Los errores a nivel de archivo — un único archivo que falla repetidamente mientras el resto del trabajo se completa — suelen apuntar a un carácter de nombre de archivo no admitido o a un archivo que cambió en el lado de Terabox durante la transferencia.

Revise primero la **pestaña Transferring** para ver con qué categoría está lidiando: un trabajo que falla inmediatamente en cada archivo sugiere autenticación, mientras que uno que falla de forma intermitente en archivos dispersos apunta a límites de tasa o inestabilidad de conexión.

<img src="/support/images/en/blog/new-remote.png" alt="Reconectar un remoto de Terabox en RcloneView" class="img-large img-center" />

## Leer registros e historial de trabajos

Active el registro detallado en **Settings > Embedded Rclone > Enable rclone Logging**, y establezca el nivel de registro en **DEBUG** antes de reproducir el problema. Esto captura la respuesta exacta de la API que devolvió Terabox, lo cual es mucho más útil para el diagnóstico que el error resumido que se muestra en el diálogo del trabajo. **Job History** en el Job Manager también registra si una ejecución fallida fue Completed, Errored o Canceled, junto con el tamaño total y el número de archivos — útil para detectar si un error ocurrió cerca del inicio (probablemente autenticación) o a mitad de camino (probablemente límite de tasa).

Si una sesión ha caducado, vuelva a conectar el remoto de Terabox a través de **Remote Manager** para actualizar las credenciales antes de reintentar el trabajo.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Revisión del historial de trabajos y estado de errores de Terabox en RcloneView" class="img-large img-center" />

## Ajustar reintentos, número de transferencias y filtros

Para fallos provocados por límites de tasa, reduzca el **Number of file transfers** y el **Number of multi-thread transfers** en el paso 2 del asistente de trabajo — menos conexiones simultáneas reducen la probabilidad de que Terabox limite la sesión a mitad del trabajo. Aumentar **Retry entire sync if fails** por encima del valor predeterminado de 3 da a los fallos transitorios más oportunidades de recuperarse automáticamente sin intervención manual.

Si un tipo de archivo específico falla de forma constante, agregue un filtro personalizado en el paso 3 para excluirlo temporalmente, complete el resto de la sincronización y luego investigue ese archivo por separado. Ejecutar una **simulación** después confirma que la exclusión funcionó antes de confirmar el trabajo ajustado.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoreo de un trabajo de sincronización de Terabox reintentado en RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Active el registro DEBUG en Settings > Embedded Rclone antes de reproducir el error.
3. Revise Job History para identificar si el fallo es temprano (autenticación) o disperso (límites de tasa).
4. Reduzca el número de transferencias o agregue reintentos, y luego confirme la solución con una simulación.

Con la configuración adecuada ajustada a los límites de Terabox, los trabajos de sincronización dejan de fallar en silencio y comienzan a completarse de forma fiable.

---

**Guías relacionadas:**

- [Gestionar Terabox — Sincronización y copia de seguridad en la nube con RcloneView](https://rcloneview.com/support/blog/manage-terabox-cloud-sync-backup-rcloneview)
- [Sincronizar el almacenamiento gratuito de Terabox con otras nubes usando RcloneView](https://rcloneview.com/support/blog/sync-terabox-free-storage-other-clouds-rcloneview)
- [Solucionar la sincronización en la nube atascada o congelada — Cómo resolverlo con RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-stuck-hanging-rcloneview)

<CloudSupportGrid />
