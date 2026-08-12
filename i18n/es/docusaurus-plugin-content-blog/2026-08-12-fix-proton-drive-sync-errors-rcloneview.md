---
slug: fix-proton-drive-sync-errors-rcloneview
title: "Solucionar errores de sincronización de Proton Drive — Guía de solución de problemas de RcloneView"
authors:
  - tayson
description: "Soluciona problemas de autenticación, 2FA y fallos de sincronización de Proton Drive en RcloneView con soluciones prácticas y pasos de registro."
keywords:
  - errores de sincronización de Proton Drive
  - solucionar Proton Drive RcloneView
  - fallo de autenticación de Proton Drive
  - inicio de sesión 2FA de Proton Drive
  - solución de problemas de Proton Drive
  - errores de sincronización de RcloneView
  - problemas de conexión de Proton Drive
  - solucionar copia de seguridad de Proton Drive
  - depuración de registros de rclone
tags:
  - RcloneView
  - troubleshooting
  - tips
  - proton-drive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar errores de sincronización de Proton Drive — Guía de solución de problemas de RcloneView

> Cuando una sincronización de Proton Drive se detiene o falla al autenticarse, la causa suele estar en la configuración de credenciales o en el registro del trabajo, no en un error de la propia transferencia.

Proton Drive se conecta a RcloneView con un correo electrónico, una contraseña y un código de dos factores opcional en lugar de un flujo OAuth de navegador, por lo que la mayoría de los fallos de sincronización se remontan a ese intercambio de credenciales o a un trabajo que no se ha vuelto a probar desde que cambiaron los ajustes de tu cuenta Proton. RcloneView muestra estos fallos en Job History y en la pestaña Log, lo que facilita aislar la causa real una vez que sabes dónde mirar.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Fallos de autenticación y 2FA

Si un remoto de Proton Drive no logra conectarse, vuelve a comprobar primero el correo electrónico y la contraseña introducidos en Remote Manager — a diferencia de los proveedores OAuth, no hay un reinicio de sesión en el navegador al que recurrir, así que una contraseña de Proton modificada rompe el remoto silenciosamente hasta que lo edites. Si la autenticación de dos factores está habilitada en tu cuenta Proton, asegúrate de introducir el código con rapidez, ya que los códigos 2FA caducan pronto y un código caducado produce el mismo error de autenticación genérico que una contraseña incorrecta.

<img src="/support/images/en/blog/new-remote.png" alt="Editando las credenciales de Proton Drive en Remote Manager de RcloneView" class="img-large img-center" />

RcloneView monta y sincroniza Proton Drive desde la misma ventana en Windows, macOS y Linux, por lo que una corrección de credenciales se aplica en todos los lugares donde hayas configurado el remoto, sin necesidad de reconfigurar por plataforma.

## Trabajos de sincronización atascados o que fallan a mitad de la transferencia

Un trabajo que se inicia pero nunca se completa suele señalar una regla de filtro que excluye más de lo previsto, o un número de reintentos demasiado bajo para una conexión inestable. Abre la sección Advanced Settings del trabajo y confirma el número de reintentos — el valor predeterminado de 3 intentos gestiona pequeños contratiempos de red, pero reducirlo a 1 elimina por completo esa red de seguridad. Ejecuta un Dry Run antes de volver a lanzar el trabajo para ver exactamente qué archivos se verán afectados.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Ejecutando un Dry Run antes de reintentar un trabajo de sincronización de Proton Drive" class="img-large img-center" />

## Consultar Job History y activar registros de depuración

Job History registra si una ejecución fue Completed, Errored o Canceled, junto con la hora exacta en que se detuvo — esa marca de tiempo es una forma fiable de relacionar un fallo con un archivo o evento de red concreto.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Revisando el estado del historial de trabajos de Proton Drive en RcloneView" class="img-large img-center" />

Para fallos persistentes o poco claros, activa el registro de rclone en Settings, establece el nivel de registro en DEBUG, reinicia el proceso de rclone incorporado y reproduce la sincronización. El archivo de registro resultante señala exactamente qué llamada a la API falló, lo cual es mucho más útil que adivinar solo a partir del cuadro de diálogo de error.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html) si aún no lo has hecho.
2. Vuelve a introducir tu correo electrónico y contraseña de Proton Drive en Remote Manager, completando el 2FA con rapidez si se solicita.
3. Ejecuta un Dry Run en el trabajo de sincronización afectado para confirmar qué archivos están incluidos.
4. Activa el registro DEBUG y reproduce el problema si no se resuelve con una actualización de las credenciales.

La mayoría de los errores de sincronización de Proton Drive se resuelven una vez verificadas las credenciales y la configuración de reintentos — para el resto, ahí están los registros.

---

**Guías relacionadas:**

- [Gestiona los archivos de Proton Drive y la sincronización en la nube con RcloneView](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [Cifra y realiza copia de seguridad de tu disco duro en Proton Drive con RcloneView](https://rcloneview.com/support/blog/hard-drive-to-proton-drive-with-rcloneview)
- [Proton Drive se une a tus nubes — Copia de seguridad y sincronización fáciles con RcloneView](https://rcloneview.com/support/blog/proton-drive-multi-cloud-sync-with-rcloneview)

<CloudSupportGrid />
