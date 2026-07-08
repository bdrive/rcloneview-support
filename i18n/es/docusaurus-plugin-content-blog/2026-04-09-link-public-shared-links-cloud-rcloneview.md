---
slug: link-public-shared-links-cloud-rcloneview
title: "Genera enlaces públicos compartidos para archivos en la nube con RcloneView"
authors:
  - tayson
description: "Genera enlaces de descarga públicos para archivos en la nube usando el comando link de RcloneView. Comparte archivos de Google Drive, OneDrive, Dropbox, S3 y más sin dar acceso a la cuenta."
keywords:
  - rcloneview
  - enlace público de archivo en la nube
  - compartir enlace de archivo en la nube
  - comando link de rclone
  - generar enlace de descarga
  - url pre-firmada s3
  - enlace compartido de google drive
  - compartir archivos en la nube
  - url pública de almacenamiento en la nube
  - compartir archivo sin cuenta
tags:
  - RcloneView
  - feature
  - cloud-storage
  - guide
  - tips
  - collaboration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Genera enlaces públicos compartidos para archivos en la nube con RcloneView

> Compartir un archivo en la nube normalmente implica navegar a la interfaz web del proveedor, ajustar permisos y copiar un enlace. La función de enlaces de RcloneView genera URLs para compartir directamente desde el explorador de archivos, en cualquier proveedor que lo admita.

Cuando necesitas compartir un archivo almacenado en la nube con alguien que no tiene acceso a tu cuenta, un enlace público o pre-firmado es la solución estándar. Google Drive crea enlaces para compartir, S3 genera URLs pre-firmadas y Dropbox proporciona enlaces compartidos, cada uno mediante interfaces y flujos de trabajo diferentes. RcloneView consolida todo esto en una sola acción: haz clic derecho en un archivo, genera un enlace y compártelo.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cómo funcionan los enlaces públicos entre proveedores

Los distintos proveedores de nube implementan el uso compartido de archivos de forma diferente:

| Proveedor | Tipo de enlace | Caducidad predeterminada | Notas |
|---|---|---|---|
| Google Drive | Enlace para compartir | Sin caducidad | Cambia los permisos del archivo a "cualquiera con el enlace" |
| OneDrive | Enlace para compartir | Configurable | Anónimo o restringido a la organización |
| Dropbox | Enlace compartido | Sin caducidad | Enlace de descarga de solo lectura |
| AWS S3 | URL pre-firmada | Configurable (máximo 7 días) | Temporal, firmada criptográficamente |
| Backblaze B2 | URL de descarga | Sin caducidad | Requiere que el bucket sea público o usa un token de autenticación |
| Cloudflare R2 | URL pre-firmada | Configurable | URLs pre-firmadas compatibles con S3 |

RcloneView usa el comando `link` de rclone internamente, que genera automáticamente el tipo de enlace adecuado para cada proveedor. No necesitas conocer el mecanismo de uso compartido específico del proveedor: RcloneView se encarga de ello.

## Cómo generar un enlace en RcloneView

Para generar un enlace público para un archivo:

1. Navega hasta el archivo en el explorador de RcloneView.
2. Haz clic derecho sobre el archivo y selecciona la opción de enlace/compartir.
3. RcloneView genera el enlace y lo copia en tu portapapeles (o lo muestra para copiarlo manualmente).

Para los proveedores que admiten caducidad (como las URLs pre-firmadas de S3), puedes especificar la duración del enlace usando la opción `--expire` en las opciones personalizadas. Por ejemplo, `--expire 24h` crea un enlace que caduca en 24 horas.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Generando un enlace público para un archivo en la nube en RcloneView" class="img-large img-center" />

## Uso del comando link mediante la terminal

Para tener más control, usa la terminal integrada de RcloneView para ejecutar el comando link directamente:

```
rclone link remote:path/to/file.pdf
```

Esto muestra la URL pública. Para proveedores compatibles con S3, agrega una caducidad:

```
rclone link remote:bucket/file.pdf --expire 48h
```

El enfoque de terminal resulta útil al generar enlaces para varios archivos o al automatizar la generación de enlaces como parte de un flujo de trabajo.

## Comportamiento específico de cada proveedor

### Google Drive

Cuando generas un enlace para un archivo de Google Drive, rclone cambia la configuración de uso compartido del archivo a "cualquiera con el enlace puede ver". El enlace no caduca a menos que revoques el uso compartido manualmente. Ten en cuenta que esto modifica los permisos del archivo: cualquiera con la URL puede acceder al archivo.

En las cuentas de Google Workspace, los administradores pueden restringir el uso compartido de enlaces solo a miembros de la organización. En ese caso, el enlace generado solo funcionará para personas dentro de tu organización.

### OneDrive y SharePoint

OneDrive genera enlaces para compartir a través de la API de Microsoft Graph. El tipo de enlace depende de las políticas de uso compartido de tu organización: puede ser anónimo (accesible para cualquiera) o restringido a miembros de la organización. Las cuentas personales de OneDrive pueden crear enlaces anónimos.

### AWS S3 y compatibles con S3

Las URLs pre-firmadas de S3 son la opción más segura. La URL contiene una firma criptográfica que otorga acceso temporal a un objeto específico. El enlace caduca después de la duración especificada (el valor predeterminado varía, con un máximo de 7 días para credenciales de usuario de IAM). No se realiza ningún cambio en los permisos del objeto: la propia URL pre-firmada lleva la autorización.

Esto hace que las URLs pre-firmadas de S3 sean ideales para compartir archivos temporalmente: el enlace funciona durante la duración especificada y luego deja de ser válido, sin necesidad de limpieza posterior.

### Dropbox

Dropbox crea un enlace compartido que proporciona acceso de solo lectura al archivo. El enlace no caduca por defecto en los planes Dropbox Plus y Professional. En Dropbox Business, los administradores pueden aplicar políticas de caducidad.

## Casos de uso

### Compartir archivos rápidamente

Genera un enlace para un informe, un archivo de diseño o un conjunto de datos almacenado en la nube y envíalo por correo electrónico, Slack o chat. El destinatario descarga el archivo sin necesitar una cuenta en la nube ni acceso a tu almacenamiento.

### Acceso temporal para clientes

Para autónomos y agencias, las URLs pre-firmadas de S3 son ideales para entregas a clientes. Sube el entregable a S3, genera una URL pre-firmada de 7 días y envíasela al cliente. Después de 7 días, el enlace caduca automáticamente, sin necesidad de limpieza manual.

### Distribución de contenido público

Para archivos destinados a una distribución amplia (documentación, versiones, kits de prensa), genera un enlace permanente desde Google Drive o Dropbox e incorpóralo en tu sitio web o documentación. RcloneView genera el enlace sin necesidad de navegar a la interfaz web del proveedor.

## Consideraciones de seguridad

- **Los enlaces permanentes exponen los archivos indefinidamente**: los enlaces de Google Drive y Dropbox no caducan por defecto. Si compartes un archivo sensible, recuerda revocar el enlace cuando ya no sea necesario el acceso.
- **Las URLs pre-firmadas tienen tiempo limitado pero son compartibles**: cualquiera con la URL puede acceder al archivo durante el período de validez. No compartas URLs pre-firmadas en canales públicos si el archivo es confidencial.
- **La generación de enlaces modifica permisos en algunos proveedores**: los enlaces de Google Drive cambian la configuración de uso compartido del archivo. Esto es visible para otros usuarios que tienen acceso al archivo.
- **Audita los enlaces compartidos periódicamente**: revisa y revoca enlaces compartidos antiguos, especialmente para archivos sensibles. El explorador de RcloneView facilita la navegación hasta los archivos y la verificación de su estado de uso compartido.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agrega tus remotos en la nube en el Gestor de Remotos.
3. Navega hasta un archivo en el explorador y genera un enlace público.
4. Para enlaces con tiempo limitado, usa URLs pre-firmadas de S3 con la opción `--expire`.

Generar enlaces para compartir desde RcloneView te ahorra tener que cambiar a la interfaz web de cada proveedor. Ya sea que necesites un enlace de uso compartido rápido, una URL temporal de entrega a un cliente o un enlace de descarga permanente, RcloneView lo gestiona desde el explorador de archivos.

---

**Guías relacionadas:**

- [Explorar y administrar almacenamiento remoto](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Agregar AWS S3 y compatibles con S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Agregar remoto mediante inicio de sesión en el navegador (OAuth)](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)

<CloudSupportGrid />
