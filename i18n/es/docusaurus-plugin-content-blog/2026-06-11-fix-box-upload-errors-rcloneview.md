---
slug: fix-box-upload-errors-rcloneview
title: "Corregir errores de subida en Box — Cómo resolver problemas de transferencia con RcloneView"
authors:
  - alex
description: "Diagnostica y corrige errores de subida en Box usando RcloneView — aprende a ajustar la configuración de transferencia, revisar registros y sincronizar archivos de Box de forma fiable."
keywords:
  - corregir errores de subida en Box
  - errores de sincronización de Box RcloneView
  - fallo de transferencia de Box rclone
  - límite de tasa de API de Box RcloneView
  - solucionar problemas de sincronización en la nube de Box
  - error de autenticación de Box rclone
  - problemas de subida de archivos de Box
  - guía de solución de problemas de RcloneView
  - resolver errores de Box en la nube
tags:
  - RcloneView
  - box
  - troubleshooting
  - tips
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corregir errores de subida en Box — Cómo resolver problemas de transferencia con RcloneView

> Un solo error de la API de Box puede detener silenciosamente un trabajo de sincronización — aquí te mostramos cómo diagnosticar la causa exacta y corregirla en RcloneView.

Box es una plataforma de almacenamiento en la nube empresarial muy utilizada, pero su API impone límites de tasa, ventanas de expiración de tokens y reglas de rutas de archivo que pueden hacer que las subidas fallen a mitad de la transferencia. Cuando un trabajo de sincronización se detiene sin un mensaje claro, la mayoría de los usuarios reinician todo el trabajo y esperan tener más suerte. RcloneView te ofrece un registro de logs estructurado, un comportamiento de reintento configurable y controles de autenticación por remoto — las herramientas adecuadas para identificar el problema real y evitar que se repita.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Causas comunes de los errores de subida en Box

Los fallos de subida en Box suelen dividirse en unas pocas categorías. La **limitación de tasa de la API** es la causa más frecuente: cuando RcloneView envía demasiadas solicitudes simultáneas, Box devuelve errores HTTP 429 y limita la conexión. Ejecutar más transferencias paralelas hacia Box de las predeterminadas puede provocar esto, especialmente en una cuenta de Box for Business con cuotas de API más estrictas.

Los **tokens OAuth expirados** son la segunda causa principal. Los tokens de acceso de Box expiran después de un período fijo. Si un trabajo de larga duración está en curso cuando el token expira, las subidas comienzan a fallar con errores de autenticación. RcloneView almacena tus credenciales de Box de forma segura y renueva los tokens de acceso cuando expiran, pero si el propio token de renovación ha expirado — normalmente tras un período prolongado de inactividad — debes volver a autenticar el remoto.

Los **problemas de rutas y nombres de archivo** también causan errores. Box impone restricciones sobre ciertos caracteres especiales y la longitud de las rutas de archivo. Los archivos con caracteres que Box no acepta fallarán silenciosamente a menos que el registro esté habilitado.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView showing a Box sync transfer job in progress" class="img-large img-center" />

## Lee los registros para identificar el error exacto

Antes de cambiar cualquier configuración, habilita el registro de depuración para capturar el contexto completo del error. En RcloneView, ve a **Settings > Embedded Rclone** y marca **Enable rclone Logging**, luego establece el nivel de registro en **DEBUG**. Haz clic en **Restart Embedded Rclone** y reproduce el fallo de subida. Abre el archivo de registro desde la carpeta de logs configurada — el código de error y la respuesta HTTP de Box quedarán claramente registrados.

Alternativamente, revisa la pestaña **Log** en la parte inferior de la interfaz de RcloneView para ver entradas de error con marca de tiempo de la sesión actual. La pestaña **Job History** (accesible desde Job Manager) registra el estado, la duración y la velocidad de transferencia de cada trabajo pasado. Un trabajo que finalizó con estado "Errored" contiene el número de archivos y el contexto de tamaño que necesitas para acotar el problema.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history in RcloneView showing Box sync error details" class="img-large img-center" />

## Ajusta la configuración de transferencia según los límites de Box

Una vez que conozcas el tipo de error, abre el trabajo afectado en **Job Manager** y haz clic en **Edit**. En el Paso 2 (Advanced Settings), reduce **Number of file transfers** para disminuir el número de solicitudes simultáneas — comenzar con 2 o 3 es una base segura para Box. Reduce también **Number of equality checkers** a 4 o menos, ya que Box también puede tener dificultades con un alto paralelismo en el lado de los metadatos.

Aumenta el contador **Retry entire sync if fails** del valor predeterminado de 3 a 5 o más para condiciones de red inestables. La lógica de reintento de RcloneView omite los archivos ya transferidos en pasadas posteriores, por lo que reintentar no duplica el trabajo — retoma exactamente donde quedó el intento anterior. Habilita la verificación **checksum** si la integridad de los datos es crítica, aunque esto aumenta el volumen de solicitudes, por lo que conviene combinarlo con una concurrencia más baja.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring advanced transfer settings for Box in RcloneView" class="img-large img-center" />

## Vuelve a autenticar Box cuando persisten los errores de token

Si los registros muestran fallos de autenticación persistentes incluso después de reducir la concurrencia, el token OAuth de Box necesita renovarse. En RcloneView, ve a **Remote tab > Remote Manager**, selecciona tu remoto de Box y haz clic en **Edit**. Volver a ejecutar el flujo OAuth abre una ventana del navegador para que inicies sesión en Box de nuevo, generando un nuevo par de tokens. Para cuentas de Box for Business, confirma que la configuración `box_sub_type = enterprise` sigue presente en la configuración del remoto antes de guardar.

Después de volver a autenticar, ejecuta el trabajo de nuevo. Usa la opción **Dry Run** (disponible en Job Manager) para previsualizar qué archivos se transferirán sin realizar cambios reales — esto te permite confirmar que la conexión funciona y que la lista de archivos es la esperada antes de confirmar una subida completa.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Habilita el registro **DEBUG** en Settings > Embedded Rclone y reproduce el error de subida para capturar el código de error exacto.
3. Edita el trabajo fallido en Job Manager, reduce las transferencias simultáneas a 2–3 y aumenta el número de reintentos.
4. Si los errores de autenticación persisten, vuelve a autenticar el remoto de Box a través de Remote Manager y usa Dry Run para confirmar la conectividad antes de ejecutar el trabajo completo.

Con la configuración de concurrencia adecuada y un token válido, las subidas a Box a través de RcloneView funcionan de forma fiable — incluso para grandes archivos empresariales que abarcan decenas de miles de archivos.

---

**Guías relacionadas:**

- [Gestionar el almacenamiento en la nube de Box — Sincronización y copia de seguridad con RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Corregir errores de tiempo de espera de sincronización en la nube con RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-timeout-errors-rcloneview)
- [Corregir errores de límite de tasa de la API en la nube con RcloneView](https://rcloneview.com/support/blog/fix-cloud-api-rate-limiting-errors-rcloneview)

<CloudSupportGrid />
