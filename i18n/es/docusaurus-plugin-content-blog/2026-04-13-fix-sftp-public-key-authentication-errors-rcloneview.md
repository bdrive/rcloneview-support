---
slug: fix-sftp-public-key-authentication-errors-rcloneview
title: "Solucionar errores de autenticación con clave pública SFTP — Resolver problemas de SSH con RcloneView"
authors:
  - tayson
description: "Solucione los fallos de autenticación con clave pública SFTP en RcloneView. Diagnostique rutas de clave incorrectas, permisos, problemas de frase de contraseña y problemas de formato de clave."
keywords:
  - error de clave pública SFTP RcloneView
  - solucionar fallo de autenticación SFTP
  - autenticación con clave SSH rclone SFTP
  - permiso denegado clave pública SFTP
  - solución de problemas SFTP RcloneView
  - formato de clave SSH rclone
  - error de frase de contraseña de clave SFTP
  - solución de conexión SFTP rclone
tags:
  - sftp
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar errores de autenticación con clave pública SFTP — Resolver problemas de SSH con RcloneView

> Los fallos de autenticación con clave pública SFTP casi siempre se deben a discrepancias en la ruta de la clave, los permisos del archivo o la frase de contraseña; esta guía repasa cada uno de forma sistemática.

SFTP es una de las formas más comunes de conectar servidores Linux remotos en RcloneView, y la autenticación con clave pública es el método de seguridad preferido frente a las contraseñas. Cuando falla la autenticación con clave, los errores pueden ser crípticos: `ssh: handshake failed`, `permission denied (publickey)` o `no supported methods remain`. Esta guía cubre las causas más frecuentes y cómo diagnosticar y solucionar cada una.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configuración del remoto SFTP en RcloneView

Al crear un remoto SFTP en RcloneView, los campos relevantes para la autenticación basada en claves son:

- **Host**: el nombre de host o la IP del servidor
- **User**: el nombre de usuario SSH
- **Key file**: la ruta a su archivo de clave privada (por ejemplo, `~/.ssh/id_rsa` o `C:\Users\you\.ssh\id_ed25519`)
- **Key file passphrase**: la frase de contraseña que descifra la clave (si está configurada)

La autenticación por contraseña y la autenticación por clave son mutuamente excluyentes por remoto. Si especifica un archivo de clave, deje vacío el campo de contraseña.

<img src="/support/images/en/blog/new-remote.png" alt="SFTP remote configuration with key auth in RcloneView" class="img-large img-center" />

## Error común 1: Ruta del archivo de clave incorrecta

La causa más frecuente de fallo en la autenticación con clave es una ruta de archivo de clave incorrecta o inaccesible. Verifique:

- Que la ruta exista y apunte a la clave **privada** (no a la clave pública `.pub`)
- En Windows, use la ruta absoluta completa (por ejemplo, `C:\Users\username\.ssh\id_rsa`)
- En Linux/macOS, `~/.ssh/id_rsa` se expande correctamente; si tiene dudas, use la ruta completa

En RcloneView, abra la configuración del remoto SFTP y verifique la ruta del archivo de clave. Si el archivo no existe en esa ubicación, la autenticación fallará silenciosamente o con un error poco útil.

## Error común 2: Permisos del archivo de clave demasiado abiertos

En Linux y macOS, SSH se niega a usar archivos de clave privada que sean legibles por cualquier usuario. Si los permisos del archivo de clave son demasiado permisivos, verá `Permissions 0644 for '~/.ssh/id_rsa' are too open`. Solución:

```
chmod 600 ~/.ssh/id_rsa
chmod 700 ~/.ssh
```

En Windows, los permisos del archivo de clave se gestionan mediante la configuración de seguridad del archivo. Asegúrese de que el archivo de clave sea accesible solo para su cuenta de usuario y no esté compartido con Everyone.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an SFTP connection test in RcloneView" class="img-large img-center" />

## Error común 3: Discrepancia en la frase de contraseña

Si su clave privada está protegida con frase de contraseña, el campo de frase de contraseña en la configuración del remoto SFTP de RcloneView debe coincidir exactamente. Un campo de frase de contraseña en blanco cuando la clave tiene uno configurado provocará un fallo de autenticación. Por el contrario, introducir una frase de contraseña para una clave que no la tiene también fallará.

Para comprobar si la frase de contraseña de su clave es correcta, abra una terminal y ejecute `ssh -i /path/to/key user@host`; si solicita la frase de contraseña y la acepta, las credenciales son correctas. Luego actualice el remoto de RcloneView en consecuencia.

## Error común 4: Formato de clave no compatible

Las claves privadas OpenSSH más antiguas (formato PEM) son ampliamente compatibles, pero algunas claves ED25519 más recientes en el formato nativo de OpenSSH pueden causar problemas según la versión de la biblioteca Go SSH incluida en rclone. Si encuentra `ssh: no supported methods remain`:

- Convierta la clave a formato PEM: `ssh-keygen -p -m PEM -f ~/.ssh/id_ed25519`
- O genere una clave RSA: `ssh-keygen -t rsa -b 4096`

## Lectura de registros para diagnóstico

Abra la pestaña **Log** en RcloneView después de un intento fallido de conexión SFTP. El registro muestra el error completo del handshake SSH. Para mayor detalle, use la pestaña **Terminal** en RcloneView para ejecutar un comando de rclone con las banderas `-vv` directamente, lo que imprime la negociación SSH completa.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing SFTP connection errors in RcloneView logs" class="img-large img-center" />

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abra la configuración de su remoto SFTP y verifique que la ruta del archivo de clave apunte a la clave privada correcta.
3. En Linux/macOS, verifique los permisos del archivo de clave con `ls -la ~/.ssh/` y corríjalos con `chmod 600`.
4. Confirme que el campo de frase de contraseña coincida con la frase de contraseña de su clave, luego pruebe la conexión desde Remote Manager.

La verificación sistemática de la ruta, los permisos y la frase de contraseña resuelve la gran mayoría de los fallos de autenticación con clave pública SFTP.

---

**Guías relacionadas:**

- [Solucionar errores de conexión rechazada y tiempo de espera agotado en SFTP](https://rcloneview.com/support/blog/fix-sftp-connection-refused-timeout-rcloneview)
- [Solucionar errores de rclone con RcloneView](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [Solucionar sincronización en la nube interrumpida por errores de red](https://rcloneview.com/support/blog/fix-cloud-sync-interrupted-network-retry-rcloneview)

<CloudSupportGrid />
