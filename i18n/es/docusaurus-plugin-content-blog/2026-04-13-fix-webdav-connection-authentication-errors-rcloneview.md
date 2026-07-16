---
slug: fix-webdav-connection-authentication-errors-rcloneview
title: "Solucionar errores de conexión y autenticación de WebDAV — Resuélvelos con RcloneView"
authors:
  - tayson
description: "Soluciona los fallos de conexión y los errores de autenticación de WebDAV en RcloneView. Correcciones paso a paso para los problemas comunes de WebDAV, incluidos SSL, credenciales y URL."
keywords:
  - error de conexión WebDAV
  - error de autenticación WebDAV
  - solucionar sincronización WebDAV
  - WebDAV RcloneView
  - solución de problemas WebDAV
  - error SSL WebDAV
  - solución WebDAV Nextcloud
  - credenciales WebDAV
  - almacenamiento en la nube WebDAV
  - RcloneView WebDAV
tags:
  - webdav
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar errores de conexión y autenticación de WebDAV — Resuélvelos con RcloneView

> Diagnostica y soluciona los fallos de conexión WebDAV en RcloneView — desde formatos de URL incorrectos y problemas de credenciales hasta errores de certificado SSL y problemas de compatibilidad del servidor.

WebDAV es un protocolo ampliamente utilizado para almacenamiento en la nube y autoalojado: Nextcloud, ownCloud, Seafile, SharePoint (legado) y muchos dispositivos NAS exponen puntos de conexión WebDAV. Cuando un remoto WebDAV en RcloneView no logra conectarse, los mensajes de error pueden variar desde vagos tiempos de espera de red hasta respuestas HTTP 401 o 403 específicas. Esta guía repasa los problemas de WebDAV más comunes en RcloneView y cómo resolver cada uno.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Verifica el formato de la URL de WebDAV

La causa más frecuente de los fallos de conexión WebDAV es una URL incorrecta. Los puntos de conexión WebDAV tienen requisitos de ruta específicos que difieren según el software del servidor:

- **Nextcloud/ownCloud:** `https://your-server.com/remote.php/dav/files/USERNAME/`
- **Seafile:** `https://your-server.com/seafdav`
- **SharePoint (WebDAV legado):** `https://your-domain.sharepoint.com/sites/sitename/Documents`

Un error común es omitir la barra final, usar el segmento de ruta incorrecto (por ejemplo, `/dav` en lugar de `/dav/files/username/` para Nextcloud) o usar HTTP en lugar de HTTPS. En RcloneView, edita el remoto WebDAV a través del Administrador de remotos y verifica que la URL coincida exactamente con la documentación de tu servidor.

<img src="/support/images/en/blog/new-remote.png" alt="Editing WebDAV remote URL in RcloneView" class="img-large img-center" />

## Resuelve los fallos de autenticación (HTTP 401/403)

Una respuesta 401 No autorizado significa que el servidor rechazó tus credenciales. Una respuesta 403 Prohibido significa que las credenciales fueron aceptadas pero la cuenta no tiene permiso para acceder a la ruta solicitada. Pasos para abordar los errores de autenticación:

**Para errores 401:** Verifica que tu nombre de usuario y contraseña sean correctos. Algunos servidores (particularmente Nextcloud) requieren una contraseña de aplicación en lugar de la contraseña principal de tu cuenta; genera una en la configuración de seguridad de tu cuenta. Confirma que no haya espacios finales en tus campos de credenciales.

**Para errores 403:** Comprueba que la cuenta tenga permisos de lectura/escritura en la carpeta de destino. Para Nextcloud, verifica la configuración de uso compartido o de acceso a carpetas. Para servidores WebDAV corporativos, confirma que tu cuenta tenga acceso WebDAV concedido específicamente; puede estar deshabilitado de forma predeterminada.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Troubleshooting WebDAV authentication in RcloneView" class="img-large img-center" />

## Gestiona los errores de certificado SSL

Si tu servidor WebDAV usa un certificado autofirmado o una CA interna, RcloneView rechazará la conexión con un error SSL de forma predeterminada. Hay dos enfoques para abordar esto:

**Opción 1 — Confiar en el certificado:** El enfoque preferido. Agrega el certificado de CA del servidor al almacén de certificados de confianza de tu sistema y luego reinicia RcloneView.

**Opción 2 — Desactivar la verificación de certificados:** En Configuración de RcloneView > Rclone integrado > Indicadores globales de Rclone, agrega `--no-check-certificate`. Esto desactiva la verificación de certificados de forma global. Úsalo solo en entornos de red interna de confianza.

Para probar la conexión, la terminal integrada de rclone de RcloneView (en la pestaña Terminal) te permite ejecutar `rclone ls webdavremote:` directamente para ver la salida de error en bruto, que a menudo proporciona más detalles de diagnóstico que el mensaje de error de la interfaz gráfica.

## Habilita el registro detallado para diagnósticos

Cuando los errores no son claros, habilita el registro detallado en RcloneView. Ve a Configuración > Rclone integrado y marca Habilitar registro de rclone. Establece el Nivel de registro en DEBUG para obtener la salida más detallada. Después de reiniciar el rclone integrado y reproducir el error, el archivo de registro captura el intercambio HTTP completo (encabezados de solicitud, códigos de respuesta y cuerpos de error), lo que te brinda información precisa para diagnosticar el problema.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing WebDAV error logs in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Verifica que el formato de tu URL WebDAV coincida con la ruta del punto de conexión documentada por el software de tu servidor.
3. Confirma que estés usando las credenciales correctas (contraseña de aplicación para Nextcloud, no tu contraseña principal).
4. Habilita el registro DEBUG para capturar información detallada del error si el problema persiste.

La mayoría de los errores de conexión WebDAV se deben a discrepancias de URL o problemas de credenciales; revisar metódicamente estas dos áreas resuelve la mayoría de los casos.

---

**Guías relacionadas:**

- [Conectar un servidor WebDAV y sincronizar almacenamiento en la nube con RcloneView](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [Hacer copia de seguridad de Nextcloud y almacenamiento WebDAV con RcloneView](https://rcloneview.com/support/blog/backup-nextcloud-webdav-with-rcloneview)
- [Solucionar errores de Rclone con RcloneView](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />
