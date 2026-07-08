---
slug: fix-cloud-oauth-token-expired-refresh-rcloneview
title: "Corregir tokens OAuth caducados para almacenamiento en la nube — Reconéctate con RcloneView"
authors:
  - tayson
description: "Aprende a diagnosticar y corregir errores de tokens OAuth caducados en RcloneView para Google Drive, Dropbox, OneDrive y otros proveedores de nube basados en OAuth."
keywords:
  - token OAuth caducado almacenamiento en la nube
  - corregir token OAuth de rclone caducado
  - token de Google Drive caducado RcloneView
  - error de token de autorización de Dropbox
  - actualización de token de OneDrive rclone
  - error de autenticación de almacenamiento en la nube
  - reconectar proveedor de nube con rclone
  - corregir inicio de sesión en la nube caducado RcloneView
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corregir tokens OAuth caducados para almacenamiento en la nube — Reconéctate con RcloneView

> Los tokens OAuth de Google Drive, Dropbox, OneDrive y otros proveedores caducan periódicamente. Así es como reconocer el error en RcloneView y volver a autenticarte sin perder la configuración de tu remoto.

Los proveedores de nube basados en OAuth —Google Drive, Dropbox, Microsoft OneDrive, Box, pCloud, Yandex Disk y otros— conceden acceso mediante tokens en lugar de contraseñas. Estos tokens tienen políticas de caducidad: algunos se renuevan automáticamente mientras la aplicación permanece activa, mientras que otros caducan tras 90–180 días de inactividad o cuando el sistema de seguridad del proveedor detecta patrones de acceso inusuales. Cuando un token caduca, los trabajos de sincronización de RcloneView comienzan a fallar con errores de autenticación que resultan alarmantes pero son fáciles de solucionar.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cómo reconocer errores de token caducado

Los errores de token OAuth caducado aparecen en la **pestaña Log** de RcloneView con mensajes como:

- Google Drive: `oauth2: cannot fetch token: 401 Unauthorized` o `Token has been expired or revoked`
- Dropbox: `invalid_grant` o `Token is expired`
- OneDrive: `AADSTS70008: The refresh token has expired`
- Box: `401 Unauthorized: The access token provided has expired`

La pestaña Transferring muestra los trabajos fallando inmediatamente al 0% sin ningún archivo transferido. El remoto también puede aparecer como inaccesible en el panel Explorer: al explorarlo se devuelve un error en lugar del listado de la carpeta.

<img src="/support/images/en/blog/new-remote.png" alt="Viewing remote configuration in RcloneView to fix token errors" class="img-large img-center" />

## Volver a autenticarse mediante el Administrador de remotos

Para renovar un token OAuth caducado, ve a **pestaña Remote → Remote Manager**, selecciona el remoto afectado y haz clic en **Edit**. En la pantalla de configuración del remoto, localiza la sección del token OAuth y haz clic en el botón de reautenticación (o borra el token existente). RcloneView abrirá en tu navegador la página de autorización OAuth del proveedor.

Inicia sesión con las credenciales de tu cuenta en la nube, vuelve a conceder acceso a RcloneView (a través de rclone), y el nuevo token se guardará automáticamente. Cierra la pestaña del navegador y vuelve a RcloneView: el remoto debería conectarse correctamente ahora. Compruébalo explorando el remoto en el panel Explorer.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring reconnected cloud remote transfer in RcloneView" class="img-large img-center" />

## Proveedores con políticas de token más estrictas

**Google Drive**: los tokens de actualización permanecen válidos indefinidamente si el propietario de la cuenta autorizó la aplicación y el acceso de rclone no se ha revocado en la configuración de seguridad de Google. Si revocaste el acceso en Cuenta de Google → Aplicaciones de terceros, deberás volver a autorizar desde cero.

**Microsoft OneDrive**: los tokens caducan tras 90 días de inactividad. Si no has sincronizado en tres meses, espera tener que volver a autenticarte. Los tokens de OneDrive for Business también pueden caducar antes debido a las políticas organizativas establecidas por el administrador de Azure AD.

**Box** y **Dropbox**: los tokens suelen ser de larga duración, pero caducan si cambias la contraseña de tu cuenta, activas la autenticación de dos factores por primera vez, o si el proveedor detecta un evento de seguridad.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing failed jobs due to token expiry in RcloneView job history" class="img-large img-center" />

## Prevenir futuras interrupciones

Programa al menos un pequeño trabajo de sincronización para cada remoto OAuth que se ejecute semanalmente, aunque no transfiera nada. El uso activo del token evita la caducidad por inactividad en proveedores como OneDrive. Revisa la pestaña Job History con regularidad para detectar rápidamente los fallos de los trabajos en lugar de que pasen desapercibidos durante días.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Revisa la pestaña Log en busca de mensajes de error de caducidad de OAuth tras el fallo de un trabajo de sincronización.
3. Abre Remote Manager, selecciona el remoto afectado y haz clic en Edit para volver a autenticarte.
4. Prueba la conexión en el panel Explorer antes de volver a ejecutar los trabajos fallidos.

La renovación del token OAuth tarda menos de dos minutos en RcloneView; una vez reautenticado, todos los trabajos de sincronización configurados previamente vuelven a funcionar sin ningún otro cambio.

---

**Guías relacionadas:**

- [Corregir errores de cuota y límite de velocidad de Google Drive con RcloneView](https://rcloneview.com/support/blog/fix-google-drive-quota-rate-limit-api-errors)
- [Solucionar errores de Rclone con RcloneView](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [Alertas de notificación para la finalización de sincronización con RcloneView](https://rcloneview.com/support/blog/notification-alerts-sync-complete-rcloneview)

<CloudSupportGrid />
