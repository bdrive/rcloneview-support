---
slug: fix-zoho-workdrive-sync-errors-rcloneview
title: "Solucionar errores de sincronización de Zoho WorkDrive — Guía de resolución de problemas para RcloneView"
authors:
  - tayson
description: "Solucione discrepancias de región, caídas de conexión y fallos de sincronización de Zoho WorkDrive en RcloneView con soluciones prácticas paso a paso."
keywords:
  - errores de sincronización Zoho WorkDrive
  - solucionar Zoho WorkDrive RcloneView
  - configuración de región Zoho WorkDrive
  - conexión de Zoho WorkDrive fallida
  - resolución de problemas Zoho WorkDrive
  - errores de sincronización RcloneView
  - solucionar copia de seguridad Zoho WorkDrive
  - depuración de registros rclone
  - autenticación de Zoho WorkDrive
tags:
  - RcloneView
  - troubleshooting
  - tips
  - zoho
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar errores de sincronización de Zoho WorkDrive — Guía de resolución de problemas para RcloneView

> La mayoría de los fallos de sincronización de Zoho WorkDrive en RcloneView se deben a una configuración de región incorrecta o a un token de OAuth caducado, no a un trabajo de transferencia averiado.

Zoho WorkDrive es un servicio regional, por lo que el remoto que configures debe apuntar exactamente al centro de datos donde reside realmente tu cuenta; una discrepancia ahí produce errores de conexión confusos que parecen no tener relación con la causa real. RcloneView muestra los detalles necesarios para aislar el problema en Job History y en la pestaña Log, convirtiendo un vago mensaje de "sincronización fallida" en una solución concreta.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Discrepancia de región y fallos de conexión

Zoho WorkDrive requiere seleccionar una región al configurar el remoto, y elegir la incorrecta es la causa más común de un remoto que se conecta brevemente y luego falla en cada operación posterior. Abre Remote Manager, edita el remoto de Zoho WorkDrive y confirma que la región coincide con el centro de datos mostrado en la configuración de tu cuenta de Zoho — un remoto creado con la región equivocada suele autenticarse una vez, pero falla al listar carpetas o al transferir.

<img src="/support/images/en/blog/new-remote.png" alt="Editing Zoho WorkDrive region setting in RcloneView Remote Manager" class="img-large img-center" />

RcloneView monta y sincroniza Zoho WorkDrive desde la misma ventana en Windows, macOS y Linux, así que una vez corregida la región, la solución se aplica a cada trabajo y montaje construido sobre ese remoto sin necesidad de reconfiguración específica por plataforma.

## Caducidad del token de OAuth durante la sincronización

Como Zoho WorkDrive se conecta mediante un inicio de sesión OAuth basado en navegador, una sincronización que funcionaba ayer pero falla hoy normalmente significa que el token almacenado caducó o fue revocado desde la cuenta de Zoho. Vuelve a autenticar el remoto en Remote Manager para activar un nuevo inicio de sesión en el navegador y luego vuelve a ejecutar el trabajo, en lugar de asumir que el problema está en la configuración de sincronización.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Re-running a Zoho WorkDrive sync job after re-authentication in RcloneView" class="img-large img-center" />

## Leer Job History y activar los registros de depuración

Job History registra si cada ejecución se Completó (Completed), tuvo un Error (Errored) o fue Cancelada (Canceled), junto con la hora exacta de finalización, lo que permite correlacionar de forma fiable un fallo con un archivo específico o una respuesta de la API en lugar de adivinar a partir del cuadro de resumen.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Zoho WorkDrive job history status in RcloneView" class="img-large img-center" />

Para fallos que persisten después de corregir la región y el token, activa rclone Logging en Settings, establece el nivel de registro en DEBUG, reinicia el proceso rclone integrado y reproduce la sincronización. El registro resultante aísla la llamada exacta de la API que falló, lo cual es mucho más preciso que interpretar solo el cuadro de diálogo de error.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html) si aún no lo has hecho.
2. Verifica que la configuración de región de tu remoto de Zoho WorkDrive coincide con el centro de datos real de tu cuenta.
3. Vuelve a autenticar el remoto si el fallo comenzó de repente después de haber funcionado antes.
4. Activa el registro DEBUG y reproduce el problema si la sincronización sigue fallando después de confirmar la región y el token.

Una vez alineados la región y la autenticación, las sincronizaciones de Zoho WorkDrive en RcloneView se comportan como las de cualquier otro remoto: predecibles, registradas y fáciles de reintentar.

---

**Guías relacionadas:**

- [Gestionar archivos y sincronización en la nube de Zoho WorkDrive con RcloneView](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [Sincronizar Zoho WorkDrive con OneDrive usando RcloneView](https://rcloneview.com/support/blog/sync-zoho-workdrive-to-onedrive-rcloneview)
- [Hacer copia de seguridad de Zoho WorkDrive en Google Drive y S3 con RcloneView](https://rcloneview.com/support/blog/backup-zoho-workdrive-google-drive-s3-rcloneview)

<CloudSupportGrid />
