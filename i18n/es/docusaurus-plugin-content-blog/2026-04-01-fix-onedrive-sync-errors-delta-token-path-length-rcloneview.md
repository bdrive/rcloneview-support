---
slug: fix-onedrive-sync-errors-delta-token-path-length-rcloneview
title: "Solucionar errores de sincronización de OneDrive: token delta expirado, ruta demasiado larga y fallos de autenticación"
authors:
  - tayson
description: "Resuelve errores comunes de sincronización de OneDrive con rclone y RcloneView: expiración del token delta, límites de longitud de ruta en Windows, fallos de autenticación y errores de cuota excedida."
keywords:
  - fix onedrive sync errors rclone
  - onedrive delta token expired rclone
  - onedrive path too long sync error
  - rclone onedrive authentication error
  - onedrive sync failed rcloneview
  - onedrive quota exceeded rclone
  - troubleshoot onedrive rclone
  - onedrive sync troubleshooting
  - rcloneview onedrive errors
  - onedrive 400 bad request rclone
tags:
  - RcloneView
  - onedrive
  - troubleshooting
  - tips
  - guide
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar errores de sincronización de OneDrive: token delta expirado, ruta demasiado larga y fallos de autenticación

> OneDrive es una plataforma de almacenamiento en la nube capaz, pero su comportamiento de sincronización tiene algunas particularidades que pueden confundir a los usuarios de rclone. Esta guía cubre los errores más comunes de OneDrive que encontrarás en RcloneView y cómo resolver cada uno.

OneDrive funciona bien para la gran mayoría de las operaciones de rclone, pero ciertas condiciones de error son exclusivas de la plataforma de Microsoft. La expiración del token delta, los límites de longitud de ruta de Windows, los fallos de renovación del token de autenticación y las cuotas de carga por archivo o por día aparecen en el uso real. Aquí tienes una guía sistemática para diagnosticar y solucionar cada uno de ellos.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Error 1: Token delta expirado

**Síntoma:** Verás un error como:
```
Failed to sync: invalidDeltaToken: The token is expired.
```

**Causa:** Rclone usa un token delta para rastrear cambios incrementales en OneDrive. Este token tiene una expiración de aproximadamente 30 días. Si no has ejecutado una sincronización en más de un mes, o si Microsoft invalidó el token, rclone no puede continuar el escaneo incremental.

**Solución:** Fuerza un reescaneo completo eliminando el token delta almacenado en caché:

1. En RcloneView, abre el panel **Terminal**.
2. Ejecuta: `rclone backend remove-expiry onedrive:` (reemplaza `onedrive` con el nombre de tu remoto).
3. Alternativamente, elimina la entrada de caché `vfs/delta` para el remoto desde la configuración de RcloneView.
4. Vuelve a ejecutar el trabajo de sincronización; rclone realizará un escaneo completo esta vez.

Esto tarda más en la primera ejecución después de la solución, pero resuelve el error por completo.

## Error 2: Ruta demasiado larga (> 400 caracteres)

**Síntoma:**
```
ERROR: path too long: cannot handle path > 400 characters
```
o archivos que no se sincronizan desde carpetas profundamente anidadas.

**Causa:** OneDrive impone una longitud máxima de ruta de 400 caracteres (para OneDrive Personal) o 400 caracteres para OneDrive for Business. Windows también tiene los límites heredados de MAX_PATH de 260 caracteres que afectan al cliente de sincronización de escritorio de OneDrive, aunque rclone en sí no tiene esta limitación de Windows.

**Solución:**
- **Acorta tu estructura de carpetas** — mantén el anidamiento de directorios superficial. Renombra los nombres de carpetas largos.
- **Usa una ruta base más corta en OneDrive** — si estás sincronizando a `OneDrive/Clients/Projects/2026/Active/Reports/`, considera aplanarla a `OneDrive/Projects-2026/Reports/`.
- **Usa las reglas de filtro de RcloneView** para omitir carpetas con problemas conocidos de longitud de ruta mientras las reestructuras.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Use folder comparison to identify path issues" class="img-large img-center" />

## Error 3: Errores de autenticación (401 Unauthorized)

**Síntoma:**
```
401 Unauthorized
Failed to refresh token
AADSTS700082: The refresh token has expired
```

**Causa:** Los tokens de actualización OAuth de Microsoft expiran si no se usan durante 90 días o después de un cambio de contraseña / restablecimiento de política de seguridad. Cuando el token almacenado en la configuración de rclone se vuelve inválido, todas las operaciones fallan.

**Solución:** Vuelve a autorizar el remoto de OneDrive en RcloneView:

1. Abre **Remotes** en RcloneView.
2. Selecciona tu remoto de OneDrive y elige **Edit**.
3. Haz clic en **Re-authorize** — se abrirá una ventana del navegador para iniciar sesión en Microsoft.
4. Inicia sesión y concede acceso nuevamente.
5. Guarda el token actualizado.

Las operaciones futuras usarán el token renovado. Establece un recordatorio para volver a autorizar si ejecutas trabajos de sincronización con poca frecuencia (mensualmente o menos).

## Error 4: 429 Too Many Requests / Limitación de tasa

**Síntoma:**
```
429 Too Many Requests: request throttled
```

**Causa:** La API de OneDrive impone límites de tasa por usuario. Sincronizar miles de archivos pequeños rápidamente activa la limitación.

**Solución:**

- **Reduce las transferencias simultáneas** — en la configuración de trabajos de RcloneView, baja el número de transferencias a 2–4.
- **Añade un límite de tasa** — usa el indicador `--tpslimit 10` en el campo de indicadores personalizados de RcloneView para limitar las transacciones por segundo.
- **Programa durante horas de menor actividad** — la limitación de Microsoft es más agresiva durante el horario laboral.
- **Usa cargas por partes para archivos grandes** — RcloneView maneja esto automáticamente para archivos de más de 100 MB.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OneDrive jobs during off-peak hours" class="img-large img-center" />

## Error 5: Cuota excedida

**Síntoma:**
```
403 Forbidden: insufficient storage
```
o cargas que fallan silenciosamente cuando OneDrive está cerca de su capacidad máxima.

**Causa:** La cuenta de OneDrive de destino tiene espacio libre insuficiente.

**Solución:**
- Verifica tu cuota de OneDrive en el centro de administración de Microsoft 365 o en onedrive.live.com.
- **Libera espacio** eliminando o moviendo archivos antiguos de OneDrive.
- **Actualiza tu plan** si la cuenta está legítimamente llena.
- **Divide la migración** — mueve archivos a una cuenta de OneDrive diferente o cambia a un destino distinto para el excedente.

## Error 6: Caracteres inválidos en nombres de archivo

**Síntoma:** Los archivos con ciertos caracteres no se transfieren a OneDrive.

**Causa:** OneDrive prohíbe ciertos caracteres en los nombres de archivo: `\`, `/`, `:`, `*`, `?`, `"`, `<`, `>`, `|`. Los archivos provenientes de sistemas Linux a menudo tienen dos puntos u otros caracteres en sus nombres.

**Solución:** RcloneView (a través de rclone) tiene una opción de codificación integrada `--onedrive-enc` que reemplaza automáticamente los caracteres prohibidos por equivalentes Unicode similares. Habilita esto en la configuración avanzada de tu remoto de OneDrive.

## Monitoreo de errores en RcloneView

El panel **Job History** en RcloneView muestra registros de transferencia con mensajes de error completos para cada archivo:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="View OneDrive error logs in RcloneView" class="img-large img-center" />

Usa esto para identificar rápidamente qué archivos fallaron y por qué, sin tener que revisar la salida de registro sin procesar de rclone.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Revisa el Job History** para ver los mensajes de error cuando falle una sincronización.
3. **Aplica la solución** para el tipo de error específico usando la guía anterior.
4. **Vuelve a ejecutar el trabajo** — rclone omitirá los archivos transferidos correctamente y reintentará solo los fallos.

La mayoría de los errores de OneDrive tienen soluciones directas. La clave está en identificar el mensaje de error exacto y aplicar la solución específica en lugar de depurar a ciegas.

---

**Guías relacionadas:**

- [Solucionar errores de límite de tasa 403 de Google Drive](https://rcloneview.com/support/blog/fix-google-drive-403-rate-limit-errors-rcloneview)
- [Solucionar errores de rclone con RcloneView](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [Resolver conflictos de sincronización en la nube](https://rcloneview.com/support/blog/resolve-cloud-sync-conflicts-rcloneview)

<CloudSupportGrid />
