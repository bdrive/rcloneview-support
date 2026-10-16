---
slug: fix-external-rclone-rcd-connection-refused-rcloneview
title: "Solucionar «conexión rechazada» con Rclone externo — diagnóstico de acceso a rcd con RcloneView"
authors:
  - casey
description: "Soluciona errores de conexión de rclone externo en RcloneView: revisa rclone rcd, el puerto 5572, las credenciales, el firewall y SSL con Test Connection."
keywords:
  - rclone rcd conexión rechazada
  - RcloneView rclone externo
  - rclone control remoto no conecta
  - rclone rcd puerto 5572
  - RcloneView Connect Manager
  - rclone rcd autenticación fallida
  - solucionar conexión rclone rc
  - rclone rcd firewall
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cli
  - self-hosted
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar «conexión rechazada» con Rclone externo — diagnóstico de acceso a rcd con RcloneView

> Cuando RcloneView no puede alcanzar tu servidor rclone externo, la causa casi siempre es una de cinco cosas que puedes comprobar en minutos.

RcloneView incluye un rclone integrado, pero muchos usuarios lo apuntan a un rclone externo que se ejecuta en un NAS, un VPS o una instancia de AWS EC2 mediante el Connect Manager. Cuando ese enlace falla con «connection refused», un tiempo de espera agotado o un error de autenticación, una lista de comprobación breve permite encontrar la causa.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Confirma que rclone rcd realmente se está ejecutando

RcloneView se comunica con un rclone externo a través de su API de control remoto (Remote Control), que se inicia con `rclone rcd`. En el servidor, ejecútalo con credenciales y dirección explícitas, por ejemplo `rclone rcd --rc-user=<user> --rc-pass=<pass> --rc-addr=127.0.0.1:5572`. El puerto externo predeterminado es 5572, mientras que la instancia integrada usa 5582 en localhost.

Un error frecuente es enlazar a `127.0.0.1` y luego conectarse desde otra máquina. El loopback solo acepta tráfico local. Para un servidor remoto, enlaza a `0.0.0.0:5572` y restringe el acceso por IP en tu firewall. Ten en cuenta que RcloneView es una herramienta con interfaz gráfica y no se instala en el servidor; el servidor solo ejecuta rclone.

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="Conexión de RcloneView a un host rclone externo" class="img-large img-center" />

## Revisa la ruta de red y las credenciales

Si rcd está en ejecución pero la conexión sigue rechazada, prueba la ruta. Desde la máquina que ejecuta RcloneView, una comprobación de estado contra `/rc/noop` con tu usuario y contraseña debería devolver una respuesta. Si se queda colgada, un firewall o un grupo de seguridad en la nube está bloqueando el puerto 5572. En AWS EC2, el grupo de seguridad necesita una regla TCP personalizada para el 5572 además de SSH restringido.

Los fallos de autenticación son un caso aparte: el usuario y la contraseña introducidos en RcloneView deben coincidir exactamente con `--rc-user` y `--rc-pass`, incluidas las mayúsculas y minúsculas.

<img src="/support/images/en/blog/new-remote.png" alt="Introducción de los datos de conexión externa en RcloneView" class="img-large img-center" />

## Verifica la configuración en Connect Manager

Abre Settings > Connect Manager > New Connection y completa el nombre para mostrar, la dirección con el formato `http://<host>:5572` y tus credenciales. Si tu servidor usa un certificado autofirmado, la opción para desactivar la verificación del certificado SSL permite que la conexión continúe. Pulsa Test Connection antes de guardar para ver el resultado de inmediato.

Si sigue fallando, activa el registro de rclone en Settings > Embedded Rclone, establece el nivel en DEBUG, reinicia y reproduce el problema para capturar un registro.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Revisión de registros e historial en RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Inicia `rclone rcd` en el servidor con un usuario, una contraseña y una dirección accesible.
3. Abre el puerto en tu firewall o grupo de seguridad.
4. Añade la conexión en Connect Manager y pulsa Test Connection.

Una vez que el enlace sea estable, podrás gestionar el almacenamiento en la nube de un servidor remoto desde tu escritorio.

---

**Guías relacionadas:**

- [RcloneView Connection Manager — integrado y externo](https://rcloneview.com/support/blog/rcloneview-connection-manager-embedded-external)
- [Solucionar errores de certificado SSL/TLS](https://rcloneview.com/support/blog/fix-ssl-tls-certificate-errors-cloud-rcloneview)
- [Solucionar conexión rechazada y tiempo de espera en SFTP](https://rcloneview.com/support/blog/fix-sftp-connection-refused-timeout-rcloneview)

<CloudSupportGrid />
