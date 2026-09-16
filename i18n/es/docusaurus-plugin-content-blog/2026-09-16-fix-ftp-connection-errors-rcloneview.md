---
slug: fix-ftp-connection-errors-rcloneview
title: "Solucionar errores de conexión FTP — Resolución de problemas con RcloneView"
authors:
  - jay
description: "Soluciona los fallos de conexión FTP en RcloneView, desde remotos bloqueados hasta errores de autenticación, usando el terminal integrado y las herramientas de registro."
keywords:
  - solucionar errores de conexión ftp
  - resolución de problemas ftp rcloneview
  - fallo de autenticación ftp
  - errores de remoto ftp en rclone
  - conexión ftp rechazada
  - remoto ftp de rcloneview
  - resolver errores de sincronización ftp
  - problemas de conexión con servidor ftp
  - diagnóstico del terminal de rclone
  - problemas de sincronización en la nube con ftp
tags:
  - RcloneView
  - troubleshooting
  - tips
  - ftp
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar errores de conexión FTP — Resolución de problemas con RcloneView

> Cuando un remoto FTP no se conecta o los trabajos de sincronización siguen fallando, revisa primero las herramientas de diagnóstico integradas de RcloneView antes de asumir que el servidor está caído.

FTP sigue siendo la columna vertebral de mucha infraestructura heredada — hosting web, unidades NAS antiguas, servidores de archivos internos — y conectarlo a RcloneView te permite incorporar ese almacenamiento a tu rutina habitual de sincronización y copia de seguridad. Pero los remotos FTP también son más sensibles a las condiciones de red y a errores tipográficos en las credenciales que los proveedores basados en OAuth, por lo que los errores de conexión aparecen con más frecuencia. Aquí te mostramos cómo aislar la causa en lugar de adivinar.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Confirma que la configuración del remoto sea correcta

La mayoría de los errores de "conexión fallida" se deben a un host, puerto o ruta mal escritos en la configuración del remoto, más que al servidor en sí. Abre **pestaña Remote > Remote Manager**, busca tu remoto FTP y ábrelo para editarlo, para volver a comprobar la dirección del host y las credenciales de inicio de sesión con lo que te indicó el administrador del servidor.

<img src="/support/images/en/blog/new-remote.png" alt="Revisando la configuración de conexión de un remoto FTP en RcloneView" class="img-large img-center" />

Si la configuración parece correcta pero la conexión sigue fallando, es más probable que el problema esté en la red: un firewall bloqueando el puerto, una VPN interfiriendo con la ruta, o que el propio servidor FTP no sea accesible desde tu red actual.

## Prueba la conexión desde el terminal integrado

RcloneView también incluye un terminal de rclone completo junto a la GUI, disponible con la licencia FREE, por lo que no necesitas instalar una línea de comandos aparte para investigar un problema de conexión. Abre la pestaña **Terminal** en la Info View inferior y ejecuta `rclone about "remote:"` sobre tu remoto FTP — una conexión que funciona devuelve los detalles de almacenamiento de inmediato, mientras que un fallo muestra el mensaje de error real de rclone en lugar de un diálogo genérico de RcloneView.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Probando una conexión de remoto FTP desde el terminal de RcloneView" class="img-large img-center" />

Ese texto de error en bruto es una forma rápida de distinguir un rechazo de autenticación de un tiempo de espera agotado, que requieren soluciones completamente distintas.

## Recopila registros para fallos persistentes

Si el problema no se resuelve después de corregir las credenciales, activa el registro detallado: ve a **Settings > Embedded Rclone**, habilita **rclone Logging**, establece el nivel de registro en **DEBUG**, luego haz clic en **Restart Embedded Rclone** y reproduce la sincronización fallida. El archivo de registro resultante captura el protocolo de enlace completo con el servidor FTP y resulta mucho más útil para el diagnóstico que el resumen mostrado únicamente en la pestaña Log.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Revisando el historial de trabajos tras reproducir un fallo de conexión FTP" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Vuelve a verificar el host, puerto y credenciales de tu remoto FTP en Remote Manager.
3. Ejecuta `rclone about "remote:"` en la pestaña Terminal para ver el error de conexión en bruto.
4. Activa el registro de nivel DEBUG si el error persiste y luego reproduce el problema.

Unos minutos con el terminal y la configuración de registro suelen convertir un mensaje vago de "conexión fallida" en una solución concreta que puedes aplicar.

---

**Guías relacionadas:**

- [Gestionar un servidor FTP — Sincronización y copia de seguridad en la nube con RcloneView](https://rcloneview.com/support/blog/manage-ftp-server-cloud-sync-backup-rcloneview)
- [Migrar un servidor FTP a almacenamiento en la nube](https://rcloneview.com/support/blog/migrate-ftp-server-to-cloud-storage-rcloneview)
- [Solucionar errores de conexión SFTP rechazada y de tiempo de espera](https://rcloneview.com/support/blog/fix-sftp-connection-refused-timeout-rcloneview)

<CloudSupportGrid />
