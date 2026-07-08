---
slug: fix-backblaze-b2-upload-errors-rcloneview
title: "Cómo solucionar errores de subida a Backblaze B2 — Resuelve problemas de transferencia en la nube con RcloneView"
authors:
  - alex
description: "Resuelve errores de subida a Backblaze B2 en RcloneView. Corrige fallos de autenticación, límites de velocidad, problemas con archivos grandes y errores de permisos al sincronizar con B2."
keywords:
  - solucionar errores de subida a Backblaze B2
  - errores de sincronización de Backblaze B2 en RcloneView
  - error de autenticación de Backblaze B2
  - solución al límite de velocidad de B2
  - error de subida de archivos grandes en Backblaze B2
  - solución de problemas de Backblaze en RcloneView
  - error de permisos de bucket en B2
  - solucionar errores de subida en la nube
  - acceso denegado en Backblaze B2
tags:
  - RcloneView
  - troubleshooting
  - backblaze-b2
  - tips
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cómo solucionar errores de subida a Backblaze B2 — Resuelve problemas de transferencia en la nube con RcloneView

> Diagnostica y soluciona los errores de subida a Backblaze B2 más comunes directamente desde la interfaz de RcloneView, sin tocar la línea de comandos.

Backblaze B2 es un backend de almacenamiento de objetos popular para copias de seguridad y archivos, pero surgen errores de subida por varias razones: credenciales caducadas o mal configuradas, incompatibilidades en los permisos del bucket, límites de velocidad de la API o transferencias estancadas en archivos grandes. Una productora de vídeo que sube diariamente sus renders a un bucket de B2, o un desarrollador que sincroniza un conjunto de datos de varios terabytes, puede toparse con estos problemas sin una vía clara de solución. RcloneView ofrece las herramientas de diagnóstico y los controles de transferencia necesarios para identificar y corregir estos problemas desde una única interfaz gráfica, incluyendo registros de errores detallados, edición de credenciales del remoto y ajuste de la transferencia por trabajo.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Diagnóstico de errores de autenticación y credenciales

La causa más frecuente de los fallos de subida a B2 son las credenciales inválidas o caducadas. Backblaze B2 utiliza Application Key IDs y Application Keys, no la contraseña de tu cuenta principal, y estas claves pueden eliminarse o rotarse en la consola de B2 en cualquier momento. Cuando RcloneView encuentra un error de tipo Unauthorized o "Bad credentials", la causa casi siempre es una discrepancia de claves.

Para diagnosticar esto en RcloneView, abre la pestaña Remote y haz clic en Remote Manager. Localiza tu remoto de B2 y haz clic en Edit para revisar el Application Key ID configurado. Compara este valor con las claves listadas en tu consola de Backblaze B2, en App Keys. Si la clave ha sido eliminada o ya no está visible, genera una nueva Application Key y actualiza la configuración del remoto en RcloneView con las nuevas credenciales.

<img src="/support/images/en/blog/new-remote.png" alt="Editing Backblaze B2 remote credentials in RcloneView Remote Manager" class="img-large img-center" />

Otro problema de autenticación habitual es el alcance de la clave. Las claves de aplicación en B2 pueden restringirse a buckets específicos. Si tu clave se creó con acceso al bucket A pero intentas subir al bucket B, la transferencia fallará con un error de permisos. Verifica siempre que el alcance de bucket de tu clave coincide con el bucket de destino configurado en tu trabajo de sincronización.

## Cómo solucionar la limitación de velocidad y las transferencias lentas

Backblaze B2 aplica límites de velocidad en las llamadas a la API, lo que puede provocar que las subidas fallen o se detengan cuando se ejecutan demasiadas solicitudes simultáneas. En RcloneView, soluciona esto ajustando la configuración de concurrencia de transferencia en tu trabajo de sincronización. Abre el trabajo en Job Manager, ve al Paso 2 (Advanced Settings) y reduce el Number of file transfers a 2 o 3. En cuanto al Number of multi-thread transfers, configurarlo en 0 desactiva la fragmentación en múltiples partes y reduce el volumen total de llamadas a la API.

Si necesitas ejecutar transferencias a B2 junto con otras operaciones sin saturar tu conexión, la pestaña Transferring de RcloneView muestra la velocidad y el número de archivos en tiempo real. Presta atención a las transferencias que empiezan rápido y luego se degradan: esto indica que B2 está limitando tu conexión. Reducir la concurrencia y reiniciar el trabajo suele resolver los fallos intermitentes por límite de velocidad.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Backblaze B2 upload speed and transfer progress in RcloneView" class="img-large img-center" />

## Cómo resolver errores de archivos grandes y de permisos

Backblaze B2 divide los archivos de más de 5 MB en partes mediante subida multiparte. Si una subida multiparte se interrumpe a mitad de la transferencia, por ejemplo debido a un corte de red o al reinicio de la aplicación, pueden quedar partes incompletas en B2, lo que impide que las resubidas se completen correctamente. El mecanismo de reintento integrado de RcloneView (configurable en el Paso 2, en "Retry entire sync if fails") gestiona automáticamente la mayoría de los fallos transitorios. Para fallos persistentes en archivos grandes, ejecutar un nuevo trabajo de sincronización limpia el estado multiparte estancado y reinicia el proceso desde cero.

Los errores de permisos se manifiestan como mensajes de "Access Denied" en la vista de registro de RcloneView. Más allá de los problemas de alcance de bucket, estos ocurren cuando tu Application Key de B2 carece de acceso de escritura al bucket de destino. En la consola de Backblaze, confirma que la clave tiene permisos tanto de lectura como de escritura sobre el destino. Después de actualizar los permisos de la clave en B2, simplemente edita el remoto en RcloneView para volver a introducir las credenciales; los permisos actualizados surten efecto de inmediato sin necesidad de recrear el remoto.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Backblaze B2 upload error history in RcloneView Job History" class="img-large img-center" />

Usa la pestaña Job History después de cada ejecución para revisar el estado, el número de errores y el tamaño de las transferencias. Filtrar por el estado "Errored" aísla rápidamente los trabajos fallidos, y el detalle del registro de cada ejecución muestra los mensajes de error exactos devueltos por la API de B2, lo que facilita distinguir un error de autenticación de un tiempo de espera de red o de una respuesta por límite de velocidad.

## Cómo empezar

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abre Remote Manager y verifica tu Application Key ID y el valor de la clave de Backblaze B2.
3. Confirma que el alcance de bucket de la clave coincide con tu destino de subida en la consola de App Keys de B2.
4. En Job Manager, reduce las transferencias concurrentes a 2–3 si observas fallos por límite de velocidad.
5. Consulta Job History con el filtro Errored para leer los mensajes de error exactos de la API y aplicar soluciones específicas.

Con las herramientas de diagnóstico y los controles de transferencia integrados de RcloneView, resolver errores de subida a Backblaze B2 se reduce a verificar credenciales, ajustar la concurrencia y leer el registro del trabajo, sin necesidad de flags de línea de comandos.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento en la nube de Backblaze B2 — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Cómo solucionar errores de subida a Cloudflare R2 — Solución de problemas con RcloneView](https://rcloneview.com/support/blog/fix-cloudflare-r2-upload-errors-rcloneview)
- [Cómo solucionar errores de límite de capacidad excedido en Backblaze B2 — Resuelve problemas de límite de almacenamiento con RcloneView](https://rcloneview.com/support/blog/fix-backblaze-b2-cap-exceeded-errors-rcloneview)

<CloudSupportGrid />
