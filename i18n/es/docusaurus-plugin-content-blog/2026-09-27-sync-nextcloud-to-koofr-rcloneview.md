---
slug: sync-nextcloud-to-koofr-rcloneview
title: "Sincronizar Nextcloud con Koofr — Copia de seguridad en la nube con RcloneView"
authors:
  - robin
description: "Mantén una instancia de Nextcloud respaldada en Koofr con RcloneView — una sincronización directa de nube a nube entre dos proveedores de almacenamiento centrados en la privacidad."
keywords:
  - sincronizar Nextcloud con Koofr
  - copia de seguridad de Nextcloud a Koofr
  - RcloneView Nextcloud
  - RcloneView Koofr
  - copia de seguridad en la nube autoalojada
  - sincronización de nube a nube
  - transferencia Nextcloud Koofr
  - copia de seguridad de almacenamiento en la nube europeo
tags:
  - RcloneView
  - nextcloud
  - koofr
  - cloud-to-cloud
  - sync
  - european-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincronizar Nextcloud con Koofr — Copia de seguridad en la nube con RcloneView

> Dale a una instancia de Nextcloud autoalojada una copia de seguridad externa en Koofr, que se ejecute según un horario en lugar de una exportación manual.

Nextcloud es popular precisamente porque pone el almacenamiento bajo tu propio control, pero ese control también significa que un solo fallo de servidor, una actualización defectuosa o un error de disco pueden llevarse tu única copia de todo. Koofr es una pareja natural como copia secundaria, ya que es otro proveedor con base en la UE orientado a la privacidad — la copia de seguridad termina en un lugar con una postura de residencia de datos similar en lugar de una jurisdicción no relacionada. RcloneView se conecta a ambos como remotos normales y ejecuta la copia directamente entre ellos, de modo que la copia de seguridad no depende de que tu servidor de Nextcloud también actúe como cliente de subida.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Nextcloud y Koofr

Añade Nextcloud como remoto desde la pestaña Remoto > Nuevo remoto usando WebDAV — Nextcloud expone sus archivos por WebDAV en una URL que el panel de administración de tu instancia muestra en Configuración, así que necesitarás la dirección del servidor, tu nombre de usuario y una contraseña de aplicación en lugar de tu contraseña habitual de inicio de sesión. Añade Koofr por separado mediante su propio flujo de inicio de sesión OAuth. RcloneView monta Y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux, de modo que la misma configuración de dos remotos funciona tanto si tu servidor de Nextcloud está en un NAS doméstico como en un VPS alquilado.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Nextcloud WebDAV remote in RcloneView" class="img-large img-center" />

Una vez que ambos remotos aparezcan en el Administrador de remotos, abre dos paneles del Explorador uno junto al otro para confirmar que puedes navegar por la estructura de carpetas de Nextcloud y ver el destino (probablemente vacío) de Koofr antes de configurar nada automatizado.

## Crear el trabajo de sincronización

Usa el asistente de sincronización de 4 pasos en lugar de un arrastrar y soltar puntual para este tipo de copia de seguridad — establece Nextcloud como origen y Koofr como destino, elige sincronización unidireccional para que Koofr solo reciba copias y Nextcloud siga siendo la fuente autorizada, y ejecuta primero una simulación (Dry Run) para confirmar que la lista de archivos se ve correcta antes de que se transfiera nada de verdad.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync from Nextcloud to Koofr in RcloneView" class="img-large img-center" />

En el Paso 3, excluye todo lo que no quieras duplicar fuera de sitio — las propias carpetas de versiones estilo `.git` de Nextcloud o las grandes bibliotecas multimedia sincronizadas que ya respaldas en otro lugar son buenas candidatas para una regla de filtro, manteniendo la copia de Koofr enfocada en lo que realmente necesita redundancia.

## Programar copias de seguridad recurrentes

Una sincronización única solo te protege del fallo de hoy, no del del próximo mes. Con una licencia PLUS, el Paso 4 del asistente añade programación al estilo crontab, de modo que la sincronización de Nextcloud a Koofr se ejecute todas las noches o cada semana sin que tengas que abrir la aplicación.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Nextcloud to Koofr backup job in RcloneView" class="img-large img-center" />

El Historial de trabajos te da entonces un registro continuo de cada ejecución programada — estado de finalización, número de archivos y duración — para que puedas confirmar que la copia de seguridad realmente se ejecutó, en lugar de asumir que una tarea programada está funcionando silenciosamente en segundo plano.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade tu instancia de Nextcloud como remoto WebDAV y Koofr como remoto OAuth.
3. Crea un trabajo de sincronización unidireccional de Nextcloud a Koofr, filtrando todo lo que no necesites duplicar.
4. Programa el trabajo para que se ejecute automáticamente y revisa periódicamente el Historial de trabajos para confirmar que se completa.

Un servidor autoalojado es tan seguro como su copia de seguridad, y dirigir esa copia de seguridad a un segundo proveedor independiente cierra la brecha de punto único de fallo que el autoalojamiento deja abierta de otro modo.

---

**Guías relacionadas:**

- [Sincronizar Koofr con Proton Drive — Copia de seguridad en la nube con RcloneView](https://rcloneview.com/support/blog/sync-koofr-to-proton-drive-rcloneview)
- [Solucionar errores de sincronización de Nextcloud — Cómo resolverlos con RcloneView](https://rcloneview.com/support/blog/fix-nextcloud-sync-errors-rcloneview)
- [Migrar de Koofr a Jottacloud — Transferir archivos con RcloneView](https://rcloneview.com/support/blog/migrate-koofr-to-jottacloud-rcloneview)

<CloudSupportGrid />
