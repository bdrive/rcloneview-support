---
slug: fix-oauth-token-expired-cloud-sync-rcloneview
title: "Solucionar errores de token OAuth expirado — Reautorizar cuentas en la nube en RcloneView"
authors:
  - tayson
description: "Tu copia de seguridad programada dejó de funcionar porque el token OAuth expiró. Aquí te mostramos cómo diagnosticar y solucionar tokens expirados para Google Drive, OneDrive, Dropbox y otros proveedores OAuth en RcloneView."
keywords:
  - oauth token expired
  - rclone token expired
  - google drive token refresh
  - onedrive oauth expired
  - fix cloud auth error
  - rclone re-authorize
  - cloud sync authentication
  - oauth refresh token
  - fix cloud connection
  - rcloneview re-auth
tags:
  - RcloneView
  - troubleshooting
  - cloud-storage
  - tips
  - security
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar errores de token OAuth expirado — Reautorizar cuentas en la nube en RcloneView

> Tu copia de seguridad nocturna ha estado fallando en silencio durante dos semanas. El error: "token expired". Tu conexión de Google Drive, OneDrive o Dropbox solo necesita una reautorización — aquí te mostramos cómo solucionarlo.

Los tokens OAuth conectan RcloneView con proveedores en la nube como Google Drive, OneDrive, Dropbox y Box. Estos tokens tienen políticas de expiración — los tokens de Google duran indefinidamente pero pueden ser revocados, los tokens de Microsoft expiran si no se usan durante 90 días, y los cambios de contraseña o eventos de seguridad invalidan todos los tokens. Cuando expiran, los trabajos de sincronización fallan en silencio hasta que lo notas.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Causas comunes de expiración de tokens

| Proveedor | Comportamiento del token |
|----------|---------------|
| Google Drive | El token de actualización es válido hasta que se revoca (pero puede ser revocado por el usuario o el administrador) |
| OneDrive | 90 días si no se usa; el cambio de contraseña lo invalida |
| Dropbox | Válido hasta que se revoca explícitamente |
| Box | 60 días sin actualización |

## Síntomas

- Los trabajos programados fallan con errores de "authentication" o "token"
- La navegación manual muestra mensajes de "unauthorized"
- El historial de trabajos muestra fallos crecientes en los últimos días

## Cómo solucionarlo

### Revisa primero el historial de trabajos

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Identify auth errors" class="img-large img-center" />

Busca patrones — si todos los trabajos de un proveedor comenzaron a fallar en la misma fecha, es un problema de token.

### Reautoriza el remoto

Abre el administrador de remotos y reautoriza el remoto afectado. Esto activa un nuevo flujo OAuth — inicia sesión en el proveedor y concede acceso de nuevo.

<img src="/support/images/en/blog/new-remote.png" alt="Re-authorize remote" class="img-large img-center" />

Tus configuraciones de trabajo existentes se conservan. Solo se actualiza el token de autenticación.

### Verifica la solución

Ejecuta una sincronización de prueba para confirmar que la conexión funciona:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Test after re-auth" class="img-large img-center" />

## Prevención

- **Activa las notificaciones** — las alertas de Slack/Discord/Telegram te avisan de inmediato cuando falla un trabajo
- **Revisa el historial de trabajos semanalmente** — detecta los fallos antes de que se acumulen
- **Evita cambios de contraseña** sin reautorizar los remotos en la nube
- **Usa cuentas de servicio** para Google Workspace (no expiran como los tokens de usuario)

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Revisa el historial de trabajos** en busca de fallos relacionados con la autenticación.
3. **Reautoriza** los remotos afectados en el administrador de remotos.
4. **Configura notificaciones** para detectar fallos futuros a tiempo.

Una reautorización de 2 minutos evita semanas de copias de seguridad perdidas.

---

**Guías relacionadas:**

- [Solucionar errores de permiso denegado](https://rcloneview.com/support/blog/fix-permission-denied-cloud-sync-errors-rcloneview)
- [Solucionar errores de Rclone](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [Notificaciones de Slack](https://rcloneview.com/support/blog/automate-cloud-sync-slack-notifications-rcloneview)

<CloudSupportGrid />
