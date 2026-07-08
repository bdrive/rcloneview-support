---
slug: fix-sftp-connection-refused-timeout-rcloneview
title: "Solucionar errores de conexión rechazada y tiempo de espera de SFTP en RcloneView"
authors:
  - tayson
description: "Resuelve errores de conexión rechazada, tiempo de espera y autenticación de SFTP en RcloneView. Cubre reglas de firewall, claves SSH, configuración de puertos y ajuste de tiempos de espera."
keywords:
  - sftp connection refused rclone
  - sftp timeout error rcloneview
  - fix sftp connection rclone
  - rclone sftp ssh key error
  - sftp firewall blocked
  - sftp port configuration rclone
  - rcloneview sftp setup
  - ssh connection timeout fix
  - sftp authentication failed rclone
  - rclone sftp troubleshoot
tags:
  - RcloneView
  - troubleshooting
  - sftp
  - guide
  - tips
  - self-hosted
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar errores de conexión rechazada y tiempo de espera de SFTP en RcloneView

> Los errores de SFTP en RcloneView casi siempre se deben a la configuración de red, la configuración de autenticación o los ajustes del lado del servidor. Esta guía repasa todas las causas comunes y sus soluciones.

SFTP (SSH File Transfer Protocol) es uno de los remotos más utilizados en rclone, y conecta RcloneView con cualquier servidor con acceso SSH: dispositivos NAS, servidores Linux, hosting compartido e infraestructura autoalojada. A diferencia de las API de los proveedores de la nube, SFTP depende de la accesibilidad de red, las reglas de firewall y la configuración de SSH, lo que significa que hay más puntos de fallo posibles. A continuación se explica cómo diagnosticar y resolver los problemas de SFTP más comunes.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mensajes de error comunes de SFTP

| Mensaje de error | Causa probable |
|--------------|-------------|
| `connection refused` | El servidor SSH no está en ejecución, el puerto es incorrecto o hay un bloqueo del firewall |
| `connection timed out` | El firewall descarta paquetes, el servidor es inaccesible o hay un problema de red |
| `ssh: handshake failed` | Incompatibilidad de claves SSH, algoritmos incompatibles o configuración del lado del servidor |
| `permission denied (publickey)` | Archivo de clave incorrecto, clave no autorizada en el servidor o problema con la frase de contraseña |
| `permission denied (password)` | Contraseña incorrecta o autenticación por contraseña deshabilitada en el servidor |
| `no supported methods remain` | El servidor requiere un método de autenticación que rclone no está configurado para usar |
| `ssh: unable to authenticate` | No se proporcionaron credenciales o fueron rechazadas |
| `too many authentication failures` | El agente SSH ofrece demasiadas claves antes de la correcta |

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Ver detalles del error de SFTP en el historial de tareas de RcloneView" class="img-large img-center" />

## Solución 1: Conexión rechazada

Un error de "conexión rechazada" significa que la conexión TCP fue rechazada activamente. La pila de red del servidor es accesible, pero nada está escuchando en el puerto de destino.

### Comprueba que SSH esté en ejecución

En el servidor remoto, ejecuta `sudo systemctl status sshd`. Si SSH no está en ejecución, inícialo con `sudo systemctl start sshd && sudo systemctl enable sshd`.

### Verifica el puerto

El puerto SSH predeterminado es el 22, pero muchos servidores usan un puerto personalizado. Compruébalo con `grep -i "^Port" /etc/ssh/sshd_config`. En RcloneView, asegúrate de que la configuración de puerto del remoto SFTP coincida. Un desajuste entre el puerto 22 y un puerto personalizado como el 2222 es una de las causas más comunes.

<img src="/support/images/en/blog/new-remote.png" alt="Configurar el puerto del remoto SFTP en RcloneView" class="img-large img-center" />

### Comprueba bloqueos del firewall local

En el servidor, verifica que el firewall permita conexiones entrantes en el puerto SSH. Usa `sudo ufw status` (Ubuntu/Debian), `sudo firewall-cmd --list-ports` (RHEL/Fedora) o `sudo iptables -L -n | grep 22`. Si el puerto está bloqueado, añade una regla para permitirlo.

## Solución 2: Tiempo de espera de conexión

Un tiempo de espera agotado significa que se envían paquetes pero no se recibe respuesta. Esto suele ser un problema a nivel de red más que un problema de configuración del lado del servidor.

### Accesibilidad de la red

Prueba la conectividad básica desde tu máquina:

```bash
ping server-hostname
telnet server-hostname 22
```

Si `ping` funciona pero `telnet` al puerto 22 falla, un firewall entre tú y el servidor está bloqueando el puerto SSH.

### Firewalls de router y NAT

Si el servidor SFTP está detrás de un router NAT, asegúrate de que la redirección de puertos esté configurada para enrutar el tráfico externo en el puerto SSH hacia la IP interna del servidor. Sin la redirección de puertos, las conexiones desde fuera de la red local agotarán el tiempo de espera.

### Bloqueos del ISP o del firewall corporativo

Algunos ISP y redes corporativas bloquean las conexiones salientes en el puerto 22. Prueba con un puerto alternativo o usa una VPN para evitar la restricción.

### Ajuste de tiempos de espera en Rclone

El tiempo de espera de conexión predeterminado de rclone puede ser demasiado corto para conexiones de alta latencia. Puedes aumentarlo añadiendo la opción `--contimeout`. Para retrasos de respuesta específicos del servidor SFTP, considera establecer `--timeout` con un valor más alto (por ejemplo, `5m` para servidores lentos).

## Solución 3: Fallos de autenticación con clave SSH

La autenticación basada en claves es el método más seguro y recomendado para las conexiones SFTP, pero una mala configuración es habitual.

### Verifica la ruta del archivo de clave

En RcloneView, la configuración del remoto SFTP incluye un campo para la ruta del archivo de clave SSH. Asegúrate de que:

- La ruta apunte a la clave **privada** (por ejemplo, `~/.ssh/id_rsa` o `~/.ssh/id_ed25519`), no a la clave pública.
- El archivo exista y sea legible por tu cuenta de usuario.
- El archivo de clave tenga los permisos correctos (`600` en Linux/macOS).

### Autoriza la clave en el servidor

La clave pública debe estar listada en `~/.ssh/authorized_keys` en el servidor. Añádela con `cat ~/.ssh/id_ed25519.pub >> ~/.ssh/authorized_keys`, y luego asegúrate de que los permisos sean `600` para el archivo y `700` para el directorio `.ssh`.

### Claves protegidas con frase de contraseña

Si tu clave privada tiene una frase de contraseña, rclone la necesita para descifrar la clave. En la configuración del remoto SFTP de RcloneView, introduce la frase de contraseña en el campo correspondiente. Si lo dejas en blanco, la autenticación fallará silenciosamente.

### Conflictos del agente SSH

Si hay un agente SSH en ejecución con muchas claves cargadas, el servidor puede rechazar la conexión después de demasiados intentos fallidos de clave (el límite predeterminado suele ser 6). Especifica el archivo de clave exacto en la configuración de rclone para evitar el agente, o reduce el número de claves cargadas en tu agente.

## Solución 4: Problemas de autenticación por contraseña

### Autenticación por contraseña deshabilitada en el servidor

Muchos servidores deshabilitan la autenticación por contraseña por seguridad. Compruébalo con `grep -i "PasswordAuthentication" /etc/ssh/sshd_config`. Si está establecido en `no`, debes usar autenticación basada en claves en su lugar.

### Contraseña incorrecta

Asegúrate de introducir la contraseña correcta en la configuración del remoto SFTP de RcloneView. Rclone almacena la contraseña en un formato ofuscado en `rclone.conf`; si editas la configuración manualmente, usa `rclone obscure` para codificar la contraseña correctamente.

## Solución 5: Límites de conexiones simultáneas

Los servidores SFTP suelen limitar el número de sesiones simultáneas. Rclone usa 4 transferencias simultáneas de forma predeterminada, pero algunos servidores solo permiten 1 o 2 conexiones.

Si observas fallos de conexión intermitentes durante transferencias grandes, reduce la concurrencia:

- Establece `--transfers 1` o `--transfers 2` para limitar las conexiones paralelas.
- Establece `--checkers 1` para reducir el número de operaciones de verificación simultáneas.

Algunos proveedores de hosting compartido son especialmente restrictivos. Comienza con baja concurrencia y auméntala gradualmente.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitorizar el progreso de la transferencia SFTP en RcloneView" class="img-large img-center" />

## Solución 6: Incompatibilidad de algoritmos SSH

Los servidores más antiguos pueden no admitir algoritmos SSH modernos, o los servidores reforzados pueden rechazar algoritmos antiguos. Si ves errores de "handshake failed", actualiza el software del servidor SSH si es posible, o revisa `/etc/ssh/sshd_config` en busca de restricciones de `KexAlgorithms`, `Ciphers` y `MACs`.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Explorador de RcloneView con un remoto SFTP conectado" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Añade un remoto SFTP** con el host, el puerto y la configuración de autenticación correctos.
3. **Prueba la conexión** navegando por el remoto en el explorador.
4. **Repasa la lista de verificación** anterior si encuentras errores.

Los problemas de SFTP casi siempre son problemas de configuración, no fallos del software. Comprobar metódicamente cada capa (red, firewall, autenticación y configuración del servidor) resuelve la gran mayoría de los casos.

---

**Guías relacionadas:**

- [Solucionar errores de rclone en RcloneView](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [Solucionar la corrupción de la configuración de rclone](https://rcloneview.com/support/blog/fix-rclone-config-corruption-rcloneview)
- [Recuperar transferencias interrumpidas](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)

<CloudSupportGrid />
