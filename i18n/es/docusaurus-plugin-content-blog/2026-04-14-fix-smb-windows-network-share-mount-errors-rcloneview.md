---
slug: fix-smb-windows-network-share-mount-errors-rcloneview
title: "Solucionar errores de montaje de recursos compartidos SMB — Resuelve problemas de conexión con RcloneView"
authors:
  - tayson
description: "Diagnostica y soluciona errores de conexión y montaje de recursos compartidos de red SMB/CIFS en RcloneView. Resuelve fallos de autenticación, discrepancias de protocolo y problemas de permisos en recursos compartidos de Windows."
keywords:
  - error de montaje SMB RcloneView
  - solucionar error de conexión SMB rclone
  - solución de problemas de recursos compartidos de red CIFS
  - error de montaje de recurso compartido de red de Windows
  - error de autenticación SMB rclone
  - solución de discrepancia de protocolo SMB
  - solucionar error de conexión de unidad de red RcloneView
  - error de permisos de recurso compartido SMB
tags:
  - RcloneView
  - troubleshooting
  - smb
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar errores de montaje de recursos compartidos SMB — Resuelve problemas de conexión con RcloneView

> Los errores de recursos compartidos de red SMB/CIFS en RcloneView suelen deberse a discrepancias de autenticación, conflictos de versión de protocolo o bloqueo del firewall. Aquí te explicamos cómo diagnosticar y solucionar cada caso.

SMB (Server Message Block) / CIFS es el protocolo que Windows utiliza para compartir archivos en red: los dispositivos NAS, los servidores de archivos de Windows y los recursos compartidos de Samba lo utilizan. RcloneView se conecta a recursos compartidos SMB como remoto, permitiéndote sincronizar entre SMB y almacenamiento en la nube o montar recursos compartidos SMB junto con otros proveedores de nube. Pero las conexiones SMB son sensibles a la configuración de red: el modo de autenticación, la versión del dialecto y las reglas del firewall afectan todos a si la conexión se establece correctamente. Esta guía repasa los errores SMB más comunes y sus soluciones.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mensajes de error SMB comunes en RcloneView

Revisa la **pestaña Log** después de un intento fallido de conexión SMB. Las firmas de error comunes incluyen:

- `NT_STATUS_LOGON_FAILURE` — el nombre de usuario o la contraseña son incorrectos
- `NT_STATUS_ACCESS_DENIED` — las credenciales son correctas, pero los permisos del recurso compartido deniegan el acceso
- `connection refused` o `no route to host` — el firewall está bloqueando el puerto 445 (SMB)
- `SMB negotiation failed: Protocol negotiate error` — discrepancia de versión de protocolo entre el cliente y el servidor
- `NT_STATUS_IO_TIMEOUT` — el servidor SMB no está disponible o no responde

Cada error apunta a una causa raíz y una solución diferentes.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring an SMB remote connection in RcloneView" class="img-large img-center" />

## Cómo solucionar errores de autenticación y permisos

Para `NT_STATUS_LOGON_FAILURE`, verifica el formato del nombre de usuario. La autenticación SMB requiere el nombre de usuario en el formato correcto para el servidor:
- Cuentas de dominio: `DOMAIN\username` o `username@domain.com`
- Cuentas locales en un NAS: solo `username` (sin prefijo de dominio)
- Acceso de invitado: deja el nombre de usuario y la contraseña en blanco, o usa `guest`

Para `NT_STATUS_ACCESS_DENIED`, las credenciales son válidas, pero la ACL del recurso compartido no otorga acceso al usuario autenticado. Inicia sesión en el panel de administración del NAS o del servidor de Windows y verifica que los permisos del recurso compartido incluyan acceso de lectura (o lectura/escritura) para tu cuenta.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Testing SMB share connection and browsing files in RcloneView" class="img-large img-center" />

## Cómo solucionar problemas de versión de protocolo

Los dispositivos NAS antiguos y los servidores Samba pueden no ser compatibles con el último dialecto SMB3 que rclone negocia por defecto. En el Administrador de remotos de RcloneView, edita el remoto SMB y establece explícitamente el campo **Versión SMB**: prueba con `SMB2` o `SMB1` para hardware heredado. Ten en cuenta que SMB1 está deshabilitado por defecto en Windows 10/11 y Windows Server 2016+ por motivos de seguridad; evita usar SMB1 siempre que sea posible.

Para servidores Samba (NAS Linux, Synology, QNAP con Samba), revisa la configuración `min protocol` y `max protocol` del archivo `smb.conf`. Asegúrate de que Samba esté configurado para ofrecer al menos SMB2.

## Cómo solucionar problemas de firewall y conectividad

SMB requiere el puerto TCP 445. Si RcloneView muestra `connection refused` o `no route to host`, verifica lo siguiente:
- Que el firewall del servidor (Firewall de Windows, firewall del NAS) permita el tráfico TCP 445 entrante desde la IP de tu cliente
- Que tu router o switch de red no esté bloqueando el tráfico entre VLAN en el puerto 445
- Para SMB remoto a través de internet: SMB debe tunelizarse a través de VPN, no exponerse directamente

Usa la pestaña Terminal de RcloneView para ejecutar `rclone about smb-remote:` después de corregir la configuración; una respuesta exitosa confirma que la conexión funciona.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting an SMB share as a virtual drive through RcloneView Mount Manager" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Revisa la pestaña Log para conocer el código de error SMB específico tras una conexión fallida.
3. Corrige los problemas de autenticación, versión de protocolo o firewall según lo indicado por el error.
4. Vuelve a probar la conexión a través del Administrador de remotos antes de crear tareas de sincronización o montaje.

Los errores SMB en RcloneView casi siempre se pueden solucionar sin reinstalar nada: el cambio de configuración correcto logra que tu recurso compartido de red se conecte y sincronice de forma fiable.

---

**Guías relacionadas:**

- [Montar SFTP y SMB como unidades locales con RcloneView](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [Solucionar errores de conexión rechazada y tiempo de espera de SFTP con RcloneView](https://rcloneview.com/support/blog/fix-sftp-connection-refused-timeout-rcloneview)
- [Solucionar errores de rclone con RcloneView](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />
