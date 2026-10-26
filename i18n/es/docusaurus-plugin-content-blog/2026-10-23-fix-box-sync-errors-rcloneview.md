---
slug: fix-box-sync-errors-rcloneview
title: "Solucionar errores de sincronización de Box — Cómo resolverlos con RcloneView"
authors:
  - kai
description: "Soluciona errores de sincronización de Box con RcloneView: resuelve problemas de OAuth, Box for Business, límites de velocidad y nombres de archivo con Dry Run, registros e historial de trabajos."
keywords:
  - solucionar errores de sincronización de Box
  - la sincronización de Box no funciona
  - error de límite de velocidad de Box
  - token OAuth de Box caducado
  - Box for Business rclone
  - RcloneView box
  - solución de problemas de Box
  - transferencia de Box fallida
tags:
  - RcloneView
  - box
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar errores de sincronización de Box — Cómo resolverlos con RcloneView

> Una lista de comprobación práctica para diagnosticar transferencias fallidas de Box con las herramientas que ya incluye RcloneView.

Los trabajos de sincronización de Box suelen fallar por unas pocas razones recurrentes: un inicio de sesión caducado, un tipo de cuenta incorrecto, llamadas a la API limitadas o archivos que Box trata de forma distinta a los documentos normales. RcloneView ofrece el historial de trabajos, los registros y el terminal integrado para distinguir rápidamente estas causas. Además, RcloneView permite montar y sincronizar más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux, de modo que también puedes probar los mismos archivos con otro remoto.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Empieza por el historial de trabajos y la pestaña de registros

Abre el historial de trabajos (Job History) y consulta el estado de la ejecución fallida: Completed, Errored o Canceled, además del tamaño y el número de archivos transferidos. Una transferencia parcial apunta a un problema con archivos concretos. Un trabajo que falla de inmediato suele indicar un problema de autenticación o de configuración.

Para ver más detalle, cambia a la pestaña de registros (Log) de la parte inferior. Para capturar más información, activa el registro de rclone en los ajustes de Embedded Rclone, establece el nivel en DEBUG, reinicia el rclone integrado y reproduce el fallo.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Revisar el historial de trabajos fallidos en RcloneView" class="img-large img-center" />

## Vuelve a autenticarte y comprueba el tipo de cuenta

Si todas las solicitudes fallan, es posible que el token OAuth haya caducado o haya sido revocado. Abre el administrador de remotos (Remote Manager), edita el remoto de Box e inicia sesión de nuevo a través del navegador.

Si puedes iniciar sesión pero faltan carpetas o aparecen errores de permisos, comprueba el tipo de cuenta. Box for Business requiere `box_sub_type = enterprise` en el remoto. Usar la configuración de una cuenta personal con una cuenta empresarial es una causa frecuente de resultados confusos.

<img src="/support/images/en/blog/new-remote.png" alt="Editar la configuración de un remoto de Box en RcloneView" class="img-large img-center" />

## Gestiona la limitación y los trabajos grandes

Cuando se procesan miles de archivos pequeños a la vez, Box puede limitar las solicitudes. En la configuración avanzada (Advanced Settings) del trabajo, reduce el número de transferencias de archivos y el de verificadores de igualdad (equality checkers); se recomiendan 4 o menos para backends lentos. Deja los reintentos en su valor predeterminado de 3 para que los fallos transitorios se recuperen automáticamente.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Supervisar una transferencia en la pestaña Transferring" class="img-large img-center" />

## Filtra los archivos problemáticos

Los elementos que solo existen en línea, como Box Notes, no son archivos normales. El filtro predefinido Box Docs del paso de filtrado los excluye para que dejen de provocar fallos en el trabajo. También puedes añadir reglas personalizadas, establecer un tamaño máximo de archivo o excluir una carpeta problemática mientras investigas. Después, ejecuta un Dry Run para confirmar qué se copiará.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparar carpetas para encontrar archivos que no se sincronizaron" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Revisa el historial de trabajos y la pestaña de registros para ver el error exacto.
3. Vuelve a autenticar el remoto de Box y confirma la configuración de Box for Business si corresponde.
4. Reduce la concurrencia, aplica el filtro Box Docs, ejecuta un Dry Run y vuelve a lanzar el trabajo.

La mayoría de los fallos de Box son problemas de configuración que unos minutos con los registros pueden revelar.

---

**Guías relacionadas:**

- [Solucionar errores de subida a Box](https://rcloneview.com/support/blog/fix-box-upload-errors-rcloneview)
- [Solucionar la caducidad del token OAuth en la sincronización en la nube](https://rcloneview.com/support/blog/fix-oauth-token-expired-cloud-sync-rcloneview)
- [Solucionar errores de límite de velocidad de la API en la nube](https://rcloneview.com/support/blog/fix-cloud-api-rate-limiting-errors-rcloneview)

<CloudSupportGrid />
