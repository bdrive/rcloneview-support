---
slug: fix-icloud-drive-sync-errors-rcloneview
title: "Solucionar errores de sincronización de iCloud Drive — Cómo resolverlos con RcloneView"
authors:
  - tayson
description: "Diagnostica y soluciona los errores de sincronización de iCloud Drive en RcloneView — cubriendo problemas de autenticación, requisitos de versión de rclone y problemas de conexión comunes en macOS."
keywords:
  - iCloud Drive sync errors RcloneView
  - fix iCloud Drive rclone errors
  - iCloud Drive authentication problem
  - RcloneView iCloud troubleshoot
  - iCloud Drive connection failed
  - rclone iCloud Drive setup
  - fix iCloud backup RcloneView
  - iCloud Drive macOS sync issues
tags:
  - macos
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar errores de sincronización de iCloud Drive — Cómo resolverlos con RcloneView

> El soporte de iCloud Drive en rclone requiere una configuración específica. Aquí te explicamos cómo diagnosticar fallos de autenticación, incompatibilidades de versión y errores de conexión al usar iCloud con RcloneView.

iCloud Drive es uno de los proveedores de almacenamiento en la nube más complejos de configurar con rclone, porque la autenticación de Apple depende de las credenciales del Apple ID y puede implicar desafíos de autenticación de dos factores. RcloneView gestiona esto mediante el backend de rclone integrado, pero para que iCloud funcione correctamente es necesario cumplir algunos requisitos previos. Esta guía repasa los puntos de fallo más comunes.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Requisito previo: se necesita rclone v1.69 o posterior

El soporte de iCloud Drive se introdujo en rclone v1.69. Si ves un error como `unknown provider type: iclouddrive` o `remote type not found`, tu versión de rclone integrada es demasiado antigua. En RcloneView, comprueba la versión actual de rclone en la **barra inferior** de la ventana. Si muestra una versión anterior a v1.69.1, usa **la pestaña Ayuda → Buscar actualizaciones** para actualizar a la última versión de rclone integrada.

RcloneView incluye un binario de rclone integrado moderno, pero si estás usando una instalación antigua, iniciar una actualización automática resuelve por completo este tipo de errores.

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive as a new remote in RcloneView" class="img-large img-center" />

## Fallos de autenticación y 2FA del Apple ID

Al agregar iCloud Drive mediante **la pestaña Remoto → Nuevo remoto**, RcloneView solicita tu Apple ID (correo electrónico) y contraseña. Si utilizas autenticación de dos factores — que Apple ahora exige para la mayoría de las cuentas — también se te pedirá el código 2FA que aparece en tu dispositivo Apple de confianza. Introdúcelo cuando se te solicite durante el asistente de configuración del remoto.

Los errores comunes en esta etapa incluyen `INVALID_EMAIL` (verifica que tu dirección de correo del Apple ID sea correcta), `AUTHENTICATION_FAILED` (es posible que se requieran contraseñas específicas de la app si tu cuenta de Apple tiene seguridad reforzada) y errores de tiempo de espera si no se responde rápidamente al aviso de 2FA. Si Apple exige contraseñas específicas de la app para tu cuenta, genera una en appleid.apple.com y úsala en lugar de tu contraseña habitual.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Testing iCloud Drive connection in RcloneView" class="img-large img-center" />

## Listados lentos o visibilidad parcial de archivos

iCloud Drive utiliza almacenamiento bajo demanda, lo que significa que los archivos pueden estar almacenados solo en iCloud y no descargados localmente. Al navegar mediante rclone, los archivos que aún no están almacenados en caché localmente en el Mac pueden aparecer con metadatos limitados o tardar más en listarse. Este es un comportamiento normal: iCloud debe recuperar los metadatos de los archivos desde los servidores de Apple.

Si los listados de carpetas parecen incompletos, intenta actualizar el panel (F5 o **Recargar** desde el menú contextual). Para bibliotecas de iCloud grandes, establece el **número de verificadores de igualdad** en un valor más bajo (2–4) en la configuración del trabajo para reducir la frecuencia con la que rclone satura la API de iCloud durante las operaciones de comparación.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="iCloud Drive transfer monitoring in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Verifica que tu versión de rclone integrada sea v1.69.1 o posterior a través de la barra inferior.
3. Usa tu Apple ID y el código 2FA (o una contraseña específica de la app) al configurar el remoto.
4. Reduce la concurrencia de verificadores si experimentas listados lentos o tiempos de espera agotados.

Una vez configurado correctamente, iCloud Drive se integra sin problemas en tu flujo de trabajo de RcloneView para copias de seguridad y transferencias entre nubes.

---

**Guías relacionadas:**

- [Gestionar la sincronización en la nube de iCloud Drive con RcloneView](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [Solucionar el error "Demasiados archivos abiertos" de macOS en RcloneView](https://rcloneview.com/support/blog/fix-macos-too-many-open-files-rcloneview)
- [RcloneView en macOS Sonoma — Sincronización y copia de seguridad en la nube](https://rcloneview.com/support/blog/rcloneview-macos-sonoma-cloud-sync)

<CloudSupportGrid />
