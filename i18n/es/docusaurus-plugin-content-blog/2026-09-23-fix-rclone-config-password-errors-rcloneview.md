---
slug: fix-rclone-config-password-errors-rcloneview
title: "Solucionar errores de Config Password de Rclone — Resuelve problemas de configuración cifrada con RcloneView"
authors:
  - robin
description: "Soluciona los errores de Config Password de rclone.conf en RcloneView — bloqueos, fallos de descifrado y contraseñas olvidadas — y vuelve a conectar tus remotos."
keywords:
  - error de config password de rclone
  - rclone.conf cifrado
  - RcloneView config password
  - fallo de descifrado de rclone conf
  - olvidé la config password de rclone
  - config password no coincide
  - cifrado de configuración de rclone
  - remotos bloqueados en RcloneView
  - restaurar config de rclone
  - recuperación de config de rclone
tags:
  - RcloneView
  - troubleshooting
  - tips
  - security
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar errores de Config Password de Rclone — Resuelve problemas de configuración cifrada con RcloneView

> Cuando la Config Password que protege tu rclone.conf deja de coincidir, todos los remotos de RcloneView dejan de cargarse a la vez — aquí te explicamos cómo diagnosticarlo y recuperar el acceso.

La pestaña Settings de RcloneView incluye una opción **Config Password** bajo Embedded Rclone, que cifra todo tu archivo rclone.conf — el archivo que contiene todos los remotos que has configurado, no solo uno. Esto es diferente de cifrar archivos individuales con un remoto Crypt; una Config Password protege las credenciales y tokens de todos tus remotos a la vez. Cuando esa contraseña es incorrecta, falta o no coincide con la que realmente cifró el archivo, RcloneView no puede descifrar ningún remoto, y todo el explorador aparece vacío o muestra errores de conexión al iniciar.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Reconocer un problema de Config Password

El síntoma suele ser total, no parcial: en lugar de que un solo remoto falle al conectarse, todos los remotos —Google Drive, S3, Dropbox, todos ellos— fallan a la vez, normalmente justo después de iniciar RcloneView o tras reiniciarse el proceso de rclone integrado. Revisa la pestaña **Log** en la Info View inferior, o activa el registro basado en archivos en Settings > Embedded Rclone con el nivel de registro en DEBUG, y luego reinicia el proceso de rclone integrado. Un fallo de descifrado de la configuración aparece claramente en el registro, a diferencia de un error de autenticación específico de un proveedor, lo que ofrece una forma clara de distinguirlo de un token OAuth caducado o una clave de API revocada.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Revisando el historial de trabajos y los registros tras un error de config password en RcloneView" class="img-large img-center" />

## Causas comunes y soluciones

La mayoría de los problemas de Config Password se deben a una de estas situaciones:

**Contraseña introducida incorrectamente tras una actualización o reinstalación.** Si trasladaste RcloneView a una máquina nueva o lo reinstalaste, vuelve a introducir la Config Password exacta en Settings > Embedded Rclone > Config Password. No existe una coincidencia parcial — un solo carácter incorrecto impide el descifrado de todo el archivo.

**Una ruta de rclone.conf obsoleta.** La opción Local Rclone config location de RcloneView apunta a un archivo específico. Si una instalación anterior dejó una configuración sin cifrar o cifrada de forma diferente en esa ruta, RcloneView puede estar leyendo un archivo completamente distinto. Verifica que la ubicación de la configuración en Settings coincida con la ubicación real de tu rclone.conf cifrado.

**Contraseña olvidada sin opción de recuperación.** El cifrado de configuración de rclone no tiene puerta trasera — si la contraseña se ha perdido de verdad, el rclone.conf existente no se puede descifrar. Tu único camino es eliminar el archivo cifrado y volver a añadir cada remoto desde cero mediante **Remote** > **New Remote**, por lo que vale la pena guardar este valor en un gestor de contraseñas con la misma importancia que cualquier credencial de un proveedor de la nube.

<img src="/support/images/en/blog/new-remote.png" alt="Volviendo a añadir un remoto en RcloneView tras restablecer la config password" class="img-large img-center" />

## Prevenir bloqueos en el futuro

Antes de cambiar una Config Password, exporta tus definiciones de trabajos actuales con la opción **Export** del Job Manager — guarda la configuración de los trabajos como un archivo JSON portátil, documentando qué remotos y trabajos existían, aunque por sí sola no restaura las credenciales. RcloneView también monta y sincroniza más de 90 proveedores desde una sola ventana en Windows, macOS y Linux, por lo que reconstruir los remotos desde cero mediante New Remote lleva minutos en lugar de horas.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Revisando la configuración de los trabajos antes de cambiar la config password en RcloneView" class="img-large img-center" />

Al escalar el problema al soporte técnico, sigue los mismos pasos de recopilación de registros que se usan para otros problemas de rclone: activa el registro DEBUG, reinicia el proceso de rclone integrado, reproduce el fallo y envía el archivo de registro — los errores de descifrado son mucho más fáciles de diagnosticar a partir de la salida de registro sin procesar que de una captura de pantalla.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Revisa Settings > Embedded Rclone > Config Password y confirma que coincide con la que cifró originalmente tu rclone.conf.
3. Activa el registro DEBUG y reinicia el proceso de rclone integrado para confirmar que el fallo es un error de descifrado y no un problema de autenticación del proveedor.
4. Si la contraseña realmente no se puede recuperar, elimina la configuración cifrada y vuelve a añadir los remotos mediante New Remote.

Una Config Password protege todas las credenciales de tu rclone.conf a la vez, así que trátala con el mismo cuidado que una contraseña maestra — perderla significa empezar tu lista de remotos desde cero.

---

**Guías relacionadas:**

- [Fix Rclone Config Corruption and Recovery Issues in RcloneView](https://rcloneview.com/support/blog/fix-rclone-config-corruption-rcloneview)
- [Fix Crypt Remote Decryption Errors — Password and Config Issues with RcloneView](https://rcloneview.com/support/blog/fix-crypt-remote-password-decrypt-errors-rcloneview)
- [Fix License Key Activation Errors — Resolve PLUS License Issues with RcloneView](https://rcloneview.com/support/blog/fix-license-key-activation-errors-rcloneview)

<CloudSupportGrid />
