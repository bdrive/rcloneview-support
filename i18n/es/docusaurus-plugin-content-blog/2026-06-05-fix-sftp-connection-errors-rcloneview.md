---
slug: fix-sftp-connection-errors-rcloneview
title: "Solucionar errores de conexión SFTP — Resuelve problemas de transferencia de archivos SSH con RcloneView"
authors:
  - alex
description: "Diagnostica y soluciona errores comunes de conexión SFTP en RcloneView — fallos de autenticación, discrepancias de clave de host y tiempos de espera — y consigue que las transferencias SSH funcionen."
keywords:
  - solucionar errores de conexión SFTP RcloneView
  - solución de problemas de transferencia de archivos SFTP SSH
  - guía de configuración SFTP de RcloneView
  - fallo de autenticación SFTP rclone
  - errores de transferencia de archivos SSH
  - solución de discrepancia de clave de host SFTP
  - solución de problemas SFTP de rclone
  - resolver errores de sincronización SFTP
  - sincronización en la nube remota SFTP
  - consejos de solución de problemas de RcloneView
tags:
  - sftp
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar errores de conexión SFTP — Resuelve problemas de transferencia de archivos SSH con RcloneView

> Los errores SFTP en RcloneView casi siempre se remontan a un puñado de causas raíz — configuración incorrecta de autenticación, reglas de firewall o fallos de verificación de clave de host — y cada una tiene una solución directa.

SFTP (SSH File Transfer Protocol, puerto 22) es un pilar para transferir archivos entre máquinas locales y servidores: hosts web, dispositivos NAS locales y máquinas virtuales en la nube suelen exponer una interfaz SFTP. Cuando RcloneView no puede conectarse a un remoto SFTP, el mensaje de error en la pestaña Log apunta hacia la causa, pero el rango de problemas posibles — credenciales incorrectas, puertos bloqueados, claves de host no coincidentes, rutas restringidas — puede hacer que el diagnóstico parezca una adivinanza. Esta guía repasa los errores SFTP más comunes y cómo resolver cada uno de forma sistemática.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurar correctamente el remoto SFTP

La mayoría de los errores de conexión comienzan en la configuración del remoto. En RcloneView, abre **Remote tab > New Remote** y selecciona **SFTP** de la lista de proveedores. Los campos requeridos son el **Host** (nombre de host o dirección IP sin más — omite `sftp://`), el **Port** (por defecto 22), un **Username** y tu método de **Authentication**, que es una contraseña o la ruta de un archivo de clave privada SSH.

Un error frecuente es introducir `sftp://hostname` en el campo Host. RcloneView (a través de rclone) espera solo el nombre de host o la IP sin prefijo, y el prefijo `sftp://` provoca un rechazo inmediato de la conexión. Si tu servidor usa autenticación basada en clave, asegúrate de que la ruta del archivo de clave privada apunte al archivo correcto en tu máquina local. En Linux y macOS, los permisos del archivo de clave deben ser `600` o más restrictivos — el cliente SSH se niega a usar claves legibles por cualquier usuario.

<img src="/support/images/en/blog/new-remote.png" alt="Creating a new SFTP remote in RcloneView" class="img-large img-center" />

## Diagnosticar fallos de autenticación

Los fallos de autenticación aparecen en la **pestaña Log** de RcloneView con mensajes como `ssh: handshake failed` o `Permission denied (publickey,password)`. Revisa estas comprobaciones en orden:

1. **Verifica el nombre de usuario** — conéctate una vez con un cliente SSH de terminal para confirmar el nombre exacto de la cuenta. RcloneView usa las mismas credenciales, y las mayúsculas y minúsculas importan.
2. **Comprueba el modo clave frente a contraseña** — si el servidor exige inicio de sesión basado en clave, una contraseña introducida en RcloneView fallará. Deja la contraseña en blanco y proporciona en su lugar la ruta de la clave privada.
3. **Activa el registro DEBUG** — ve a Settings > Embedded Rclone > Enable rclone Logging, establece el nivel en DEBUG y reproduce el fallo. El archivo de registro captura el handshake SSH completo y señala el paso exacto del rechazo.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView transfer view for an active SFTP sync job" class="img-large img-center" />

## Resolver errores de discrepancia de clave de host

La primera vez que rclone se conecta a un servidor SFTP, registra la clave de host del servidor. Si esa clave cambia más tarde — debido a una reconstrucción del servidor, una reinstalación del sistema operativo o una rotación de certificados — rclone genera un error de `host key mismatch` y rechaza la conexión para evitar ataques de intermediario (man-in-the-middle). Para resolverlo, abre la pestaña **Rclone Terminal** en RcloneView y ejecuta:

```
rclone config show <remote-name>
```

Identifica la ruta `known_hosts_file` mostrada en la salida, abre ese archivo en un editor de texto y elimina la entrada obsoleta correspondiente al host afectado. El siguiente intento de conexión te pedirá que confíes en la nueva clave y la almacenará correctamente.

## Corregir problemas de firewall y tiempo de espera

Si el intento de conexión se queda colgado sin producir un error — o genera `dial tcp: connection timed out` — el problema probablemente sea un firewall que bloquea el puerto 22 en el servidor o en la red del cliente. Usa la pestaña Terminal para comprobar si rclone puede alcanzar el servidor con `rclone about <remote-name>:` y compara el resultado con una conexión SSH directa por terminal. Si el cliente SSH tiene éxito pero rclone agota el tiempo de espera, comprueba si tu máquina o la red corporativa aplica reglas de firewall de salida que afecten a conexiones que no son de navegador. Para redes que bloquean el puerto 22 de salida, pide al administrador del servidor que exponga SFTP en un puerto alternativo — una solución común es el puerto 443 — y actualiza el campo Port en la configuración de tu remoto de RcloneView en consecuencia.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an SFTP sync job in the RcloneView Job Manager" class="img-large img-center" />

## Revisar el historial de trabajos tras transferencias fallidas

Una vez que la conexión sea estable, revisa la vista **Job History** para confirmar que las ejecuciones fallidas anteriores no dejaron archivos parciales en el destino. RcloneView registra el estado, el recuento de transferencias, la velocidad y los códigos de error de cada trabajo. Una revisión rápida identifica sincronizaciones incompletas que necesitan volver a ejecutarse, y la opción Dry Run te permite previsualizar exactamente qué archivos se copiarán o eliminarán antes de confirmar la operación.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history view showing SFTP sync results in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abre **Remote tab > New Remote > SFTP** e introduce el nombre de host sin prefijo (sin `sftp://`), el puerto, el nombre de usuario y las credenciales de autenticación.
3. Activa el registro DEBUG en Settings para capturar el handshake SSH completo cuando ocurran errores.
4. Comprueba **Job History** después de cualquier transferencia fallida para identificar sincronizaciones parciales que necesiten volver a ejecutarse.

Con las credenciales correctas y una visión clara de la salida de registro de rclone, la mayoría de los errores SFTP se resuelven rápidamente — y RcloneView facilita verificar los resultados y volver a transferencias de archivos productivas.

---

**Guías relacionadas:**

- [Gestionar archivos de servidor FTP — Sincronización en la nube y copia de seguridad con RcloneView](https://rcloneview.com/support/blog/manage-ftp-server-cloud-sync-backup-rcloneview)
- [Montar SFTP y SMB como unidades locales con RcloneView](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [Solucionar errores de Rclone con RcloneView](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />
