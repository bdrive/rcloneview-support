---
slug: log-debug-troubleshoot-transfers-rcloneview
title: "Registrar y depurar transferencias en la nube — Solucionar problemas en RcloneView"
authors:
  - tayson
description: "Domina las funciones de registro y depuración de RcloneView para diagnosticar problemas de transferencia. Aprende a leer registros, activar el modo de depuración y resolver problemas de sincronización en la nube de forma sistemática."
keywords:
  - registros de transferencia en la nube
  - modo de depuración de problemas de transferencia
  - solución de problemas de transferencia
  - registro de rcloneview
  - depuración de sincronización en la nube
  - diagnóstico de errores de transferencia
  - configuración de registro de rclone
  - solucionar problemas de transferencias en la nube
tags:
  - RcloneView
  - feature
  - troubleshooting
  - monitoring
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Registrar y depurar transferencias en la nube — Solucionar problemas en RcloneView

> Los fallos de transferencia frustran a los usuarios, pero los mensajes de error misteriosos los frustran aún más. Las funciones completas de registro y depuración de RcloneView revelan exactamente qué salió mal y cómo solucionarlo.

Una transferencia de archivos se detiene a medio camino con un mensaje de tiempo de espera críptico. Un trabajo de sincronización informa éxito, pero los archivos permanecen desincronizados. Tu copia de seguridad programada no se ejecutó en su ventana sin aviso alguno. Sin visibilidad sobre lo que realmente ocurrió, la solución de problemas se convierte en adivinanzas. Las capacidades de registro y depuración de RcloneView transforman la opacidad en claridad, mostrándote exactamente qué archivos tuvieron éxito, cuáles fallaron y por qué exactamente.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Activar el modo de depuración en RcloneView

El modo de depuración expone cada operación que realizan RcloneView y rclone. Accede a él a través del menú Preferencias: Logging > Debug Level, y configúralo en "DEBUG". Esto captura solicitudes de red, flujos de autenticación, comparaciones de archivos y verificaciones de permisos con el máximo nivel de detalle.

Una vez activado, los registros de RcloneView documentan cada transacción. Ejecuta ahora tu transferencia problemática. Cada llamada a la API, verificación de archivo y decisión queda registrada. Este nivel de detalle ayuda a diagnosticar problemas sutiles: problemas de sincronización de autenticación, denegaciones de permisos, particularidades de la API de cada proveedor, fallos de red en puntos específicos.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView preferences and logging configuration" class="img-large img-center" />

## Leer e interpretar los registros de RcloneView

RcloneView almacena los registros en el directorio de configuración de tu usuario. En Windows, encuéntralos en `%APPDATA%/RcloneView/logs/`. En Linux/Mac, búscalos en `~/.config/rcloneview/logs/`. Cada trabajo crea un archivo de registro con marca de tiempo. Abre el registro correspondiente en cualquier editor de texto.

Secciones clave a examinar: "Authentication" muestra si las credenciales funcionaron correctamente. "File Enumeration" revela qué archivos descubrió RcloneView y sus propiedades. Las secciones "Transfer" muestran las subidas/descargas de archivos individuales con recuentos de bytes y duraciones. Las secciones "Errors" destacan problemas: permiso denegado, cuota insuficiente, discrepancias de checksum, ocurrencias de tiempo de espera.

Busca palabras clave que coincidan con tu problema. ¿Buscas errores de tiempo de espera? Busca "timeout" o "deadline exceeded". ¿Investigas fallos de permisos? Busca "permission denied" o "access denied". La mayoría de los errores se repiten de forma constante, apareciendo varias veces en la misma transferencia.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing detailed transfer records" class="img-large img-center" />

## Depuración avanzada: modo detallado y registro de trazas

Cuando el modo de depuración estándar no ofrece suficiente detalle, activa el modo detallado (Logging > Verbose) junto con el nivel de depuración. El modo detallado genera encabezados HTTP, cuerpos de solicitud y respuestas de API en bruto. Úsalo cuando investigues problemas específicos de un proveedor: ¿por qué Google Drive rechaza este archivo? ¿Por qué S3 limita la velocidad de tus transferencias?

Para un diagnóstico experto, activa el modo Trace (el nivel de registro más alto). Trace captura cada llamada al sistema, operación de memoria y detalle de paquete de red. Esto satura rápidamente los archivos de registro, pero revela problemas profundos en las pilas de red o en las interacciones del sistema de archivos. Reserva el modo trace para problemas reproducibles en condiciones controladas.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView job configuration with logging options" class="img-large img-center" />

## Problemas comunes revelados por los registros

Los registros identifican problemas recurrentes. Los errores de "Insufficient quota" significan que el almacenamiento de tu proveedor en la nube está lleno. "Rate limit exceeded" indica que estás alcanzando los límites de llamadas a la API; reduce los hilos paralelos o aumenta el espaciado entre solicitudes. "Checksum mismatch" muestra corrupción de archivos en tránsito o problemas de almacenamiento en caché del proveedor.

Los tiempos de espera de red aparecen como "context deadline exceeded" o "connection reset by peer"; aumenta los valores de tiempo de espera o reduce las velocidades de transferencia. Los errores de permisos "403 Forbidden" señalan problemas de credenciales o permisos de carpeta insuficientes. Cada tipo de error se corresponde con soluciones específicas una vez que lees los registros.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneView real-time transfer monitoring with detailed metrics" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Activa el modo de depuración a través de Preferences > Logging > Debug Level.
3. Ejecuta tu transferencia problemática y deja que falle de forma natural.
4. Abre el archivo de registro correspondiente y busca palabras clave de error para identificar la causa raíz.

Deja de tratar los fallos de transferencia como cajas negras misteriosas. El registro de RcloneView transforma la solución de problemas de una frustración en una resolución sistemática. Las respuestas están en los registros; solo necesitabas saber dónde buscar.

---

**Guías relacionadas:**

- [Solucionar transferencias en la nube lentas — Optimizar la velocidad en RcloneView](https://rcloneview.com/support/blog/fix-slow-cloud-transfers-speed-rcloneview)
- [Solucionar sincronización en la nube atascada o congelada — Resolver transferencias detenidas en RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-stuck-hanging-rcloneview)
- [Solucionar errores de límite de velocidad de la API en la nube — Resolver la limitación del proveedor en RcloneView](https://rcloneview.com/support/blog/fix-cloud-api-rate-limiting-errors-rcloneview)

<CloudSupportGrid />
