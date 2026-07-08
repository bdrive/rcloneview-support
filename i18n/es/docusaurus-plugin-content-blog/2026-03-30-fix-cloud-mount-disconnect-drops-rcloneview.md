---
slug: fix-cloud-mount-disconnect-drops-rcloneview
title: "Solucionar desconexiones de montajes en la nube: unidades virtuales estables con RcloneView"
authors:
  - tayson
description: "Soluciona las desconexiones de montajes en la nube y las unidades virtuales que se pierden. Aprende cómo la caché VFS y la configuración de montaje de RcloneView mantienen tus unidades en la nube conectadas y con buena respuesta."
keywords:
  - desconexión de montaje en la nube
  - unidad virtual que se pierde
  - montaje rclone inestable
  - desconexión de caché VFS
  - la unidad en la nube se desconecta constantemente
  - solución de montaje de RcloneView
  - la unidad montada desaparece
  - tiempo de espera agotado en montaje en la nube
  - montaje en la nube estable
  - reconexión de unidad virtual
tags:
  - RcloneView
  - troubleshooting
  - tips
  - mount
  - vfs
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar desconexiones de montajes en la nube: unidades virtuales estables con RcloneView

> Una unidad virtual que desaparece en medio de un flujo de trabajo puede corromper archivos abiertos y romper canalizaciones automatizadas.

Montar almacenamiento en la nube como una letra de unidad local es una de las funciones más potentes de cualquier herramienta de gestión en la nube, pero las desconexiones convierten esa comodidad en un riesgo. Cuando una unidad montada de Google Drive o un bucket de S3 se desconecta de forma inesperada, las aplicaciones pierden acceso a los archivos abiertos, las operaciones de guardado fallan silenciosamente y los scripts programados se detienen. El gestor de montajes de RcloneView y la configuración de la caché VFS te dan los controles necesarios para mantener montajes en la nube estables y persistentes incluso en conexiones poco fiables.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Causas comunes de las desconexiones de montaje

Las desconexiones de montajes en la nube suelen provenir de tres fuentes: interrupciones de red, tokens de autenticación caducados y agotamiento de la caché VFS. Un breve corte de Wi-Fi que dura solo unos segundos puede hacer que la capa FUSE o WinFsp reporte el montaje como no disponible, y muchas aplicaciones no reintentan automáticamente la operación de lectura o escritura.

La caducidad del token OAuth es otro culpable frecuente. Los tokens de Google Drive caducan al cabo de una hora de forma predeterminada, y si el intercambio del token de actualización falla —debido a un fallo de red en el momento menos oportuno—, el montaje pierde la autorización. La letra de unidad sigue siendo visible en el Explorador, pero cada operación de archivo devuelve un error de acceso denegado o de E/S.

La presión sobre la caché VFS provoca una forma más sutil de desconexión. Cuando la partición de caché local se llena, las nuevas solicitudes de lectura y escritura no pueden almacenarse en búfer, y el montaje prácticamente se detiene. RcloneView registra estos eventos de caché llena para que puedas rastrear la causa raíz en lugar de culpar a la red.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="RcloneView mount manager showing active cloud drives" class="img-large img-center" />

## Configurar la caché VFS para lograr estabilidad

La caché VFS es el búfer entre tus aplicaciones locales y la API de la nube. Establecer `--vfs-cache-mode full` garantiza que todas las operaciones de lectura y escritura pasen por la caché local, aislando a las aplicaciones de problemas de red transitorios. Los archivos se leen desde la caché y se escriben de vuelta en la nube de forma asíncrona.

Los parámetros clave que hay que ajustar incluyen `--vfs-cache-max-size` (configúralo en al menos 10 GB si el espacio en disco lo permite), `--vfs-cache-max-age` (24h es un buen valor predeterminado para flujos de trabajo activos) y `--vfs-write-back` (de 5s a 30s según la frecuencia con la que se guarden los archivos). Estos ajustes permiten que el montaje absorba interrupciones de red breves sin exponer errores a las aplicaciones.

El panel de configuración de montaje de RcloneView expone estas opciones en una interfaz sencilla, y puedes guardar perfiles para diferentes casos de uso: una caché grande para edición de vídeo, una más pequeña para el acceso a documentos.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a cloud remote as a local drive in RcloneView" class="img-large img-center" />

## Gestionar las interrupciones de red con elegancia

Los indicadores `--low-level-retries` y `--retries` controlan con qué agresividad el montaje reintenta las llamadas a la API que fallan. Aumentar `--low-level-retries` a 20 y `--retries` a 10 le da al montaje tiempo para recuperarse de interrupciones breves sin mostrar errores al usuario.

Establecer `--contimeout 30s` y `--timeout 5m` evita cortes de conexión prematuros cuando el proveedor tarda en responder. Para usuarios en conexiones VPN o enlaces satelitales con alta latencia, estos tiempos de espera más largos son esenciales para la estabilidad del montaje.

RcloneView también se puede configurar para volver a montar automáticamente una unidad si el proceso termina de forma inesperada. El gestor de montajes detecta cuándo se desconecta un montaje y puede reiniciarlo en cuestión de segundos, minimizando la ventana de interrupción.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring mount activity and connection status in RcloneView" class="img-large img-center" />

## Prevenir problemas de caducidad de tokens

Para proveedores basados en OAuth como Google Drive y OneDrive, los fallos en la actualización de tokens son un asesino silencioso de montajes. RcloneView almacena los tokens de forma segura y gestiona el ciclo de actualización automáticamente. Si una actualización falla, el gestor de montajes registra el evento y reintenta antes de declarar el montaje no disponible.

Ejecutar `rclone config reconnect` periódicamente a través de la interfaz de RcloneView garantiza que tus tokens de actualización sigan siendo válidos, especialmente para cuentas de Google con políticas de sesión estrictas.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Mount event history showing reconnection attempts in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Activa el modo de caché VFS completo** y establece `--vfs-cache-max-size` en al menos 10 GB para operaciones de lectura/escritura estables.
3. **Aumenta los valores de reintento y tiempo de espera** para absorber problemas de red transitorios sin perder el montaje.
4. **Usa el gestor de montajes** para configurar el remontaje automático ante desconexiones inesperadas.

Un montaje en la nube correctamente configurado debería ser tan fiable como una unidad local; RcloneView lo hace posible.

---

**Guías relacionadas:**

- [Caché VFS y rendimiento de montaje: optimiza unidades virtuales con RcloneView](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [Montar Google Drive como unidad local con RcloneView](https://rcloneview.com/support/blog/mount-google-drive-as-local-drive-rcloneview)
- [Solucionar errores de token OAuth caducado: reconectar la sincronización en la nube con RcloneView](https://rcloneview.com/support/blog/fix-oauth-token-expired-cloud-sync-rcloneview)

<CloudSupportGrid />
