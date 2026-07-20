---
sidebar_position: 2
description: "Aprenda a configurar remotos en la nube en RcloneView usando OAuth o inicio de sesión basado en navegador."
keywords:
  - rcloneview
  - SSO
  - OAuth
  - Dropbox
  - Onedrive
  - Box
  - pCloud
  - Yandex
  - premiumize
  - put
  - zoho
  - google cloud storage
  - citrix
  - sharefile
  - hidrive
  - rclone
  - Remote Connection
tags:
  - SSO
  - OAuth
  - dropbox
  - onedrive
  - box
  - pcloud
  - yandex
  - premiumizw
  - PLUS-Feature
  - zoho
  - google-cloud-storage
  - citrix
  - sharefile
  - hidrive
date: 2025-06-23
author: Jay
---
# Inicio de Sesión Automático (OneDrive, Box ...)

RcloneView facilita la conexión a los principales proveedores de la nube como **Google Drive, OneDrive, Dropbox, Box** mediante un sencillo inicio de sesión basado en navegador (OAuth).

:::important No se requieren opciones
**✅ Para la mayoría de los proveedores, solo necesita ingresar un nombre de remoto.**  
**✅ Puede omitir la pestaña Options y continuar directamente al inicio de sesión del navegador.**
:::

Al hacer clic en **Save**, RcloneView abrirá una ventana del navegador donde podrá iniciar sesión en su cuenta en la nube. Una vez completado el inicio de sesión, su remoto se agregará automáticamente y estará listo para usar, sin necesidad de configuración manual.

## Guía de Configuración Rápida

1. Inicie **RcloneView** y haga clic en **`+ New Remote`** en el menú superior o en el panel Explorer.
2. En la pestaña **Provider**, seleccione su servicio en la nube (por ejemplo, Google Drive, OneDrive).
3. Omita la pestaña **Options** (a menos que se le solicite información adicional). Consulte la tabla a continuación para más orientación.
4. Vaya al paso **Save** y haga clic en **Save**.
5. Se abrirá una ventana del navegador; inicie sesión en su cuenta en la nube.
6. Después de iniciar sesión, el remoto se agregará automáticamente.

👉 ¿Desea un ejemplo detallado? Consulte: [Cómo conectar Google Drive](../#step-2-adding-remote-storage-google-drive-example)
## Proveedores de Nube Compatibles y Requisitos de Configuración

| Proveedor de Nube           | Opción(es) Requerida(s)                                           |
| --------------------------- | ---------------------------------------------------------------- |
| Google Drive                | Ninguna                                                           |
| Google Drive Compartido conmigo | **Advanced Options:**<br />`shared_with_me` = **true**       |
| Google Drive Computers      | **Advanced Options:**<br />`root_folder_id` = `<ID de su carpeta>` |
| Dropbox                     | Ninguna                                                           |
| Dropbox for Business        | **Advanced Options:**<br />`dropbox_business` = **true**         |
| Microsoft OneDrive          | Ninguna                                                           |
| Box                         | Ninguna                                                           |
| Box for Business            | `box_sub_type = enterprise`                                      |
| pCloud                      | Ninguna                                                           |
| Yandex Disk                 | Ninguna                                                           |
| premiumize.me               | Ninguna                                                           |
| put.io                      | Ninguna                                                           |
| Zoho WorkDrive              | Se requiere `Region`                                              |
| Google Cloud Storage        | Se requiere `Project Number`                                      |
| Citrix ShareFile            | Se requiere `Root Folder ID`                                      |
| HiDrive                     | Ninguna                                                           |

## Ejemplo: Google Drive Compartido conmigo (requiere Advanced Options)

**Google Drive Compartido conmigo** permite a los usuarios acceder a archivos y carpetas que otros usuarios han compartido explícitamente con ellos, sin agregarlos a su propia unidad. Esto es útil al colaborar entre organizaciones o equipos sin duplicar el almacenamiento.

RcloneView admite esta función a través de una configuración de opción avanzada durante la configuración del remoto.

En la pestaña **Options**:

1. Desplácese hacia abajo y haga clic en **`Show advanced options`** en la parte inferior de la pantalla.
2. Localice el campo `shared_with_me` y configúrelo en **`true`** desde el menú desplegable.
3. Deje las demás opciones en su valor predeterminado a menos que se requiera una configuración personalizada.
4. Haga clic en **Next** y luego complete el inicio de sesión en su navegador cuando se le solicite.

:::tip
La configuración `shared_with_me = true` indica a Rclone que solo muestre los archivos y carpetas compartidos con su cuenta de Google.
:::

<img src="/support/images/en/howto/remote-storage-connection-settings/google-drive-shared-with-me-options.png" alt="google drive shared with me options" class="img-medium img-center" />
## Ejemplo: Google Drive Computers (requiere Advanced Options)

**Google Drive "Computers"** es una función que sincroniza archivos locales de sus dispositivos (por ejemplo, portátiles o computadoras de escritorio) con la nube bajo una sección especial de "Computers" en Google Drive. Cada computadora aparece como una carpeta separada y requiere un `root_folder_id` único para acceder mediante Rclone.

🔗 Obtenga más información sobre esta función: [Acceder a computadoras sincronizadas en Google Drive](https://support.google.com/drive/answer/3096479)

### Cómo Conectar Google Drive Computers en RcloneView

1. Abra [drive.google.com](https://drive.google.com/) y haga clic en su computadora de destino (por ejemplo, **My Laptop**) en la sección **Computers**.
2. Copie el **Computer ID** de la URL.  
   Por ejemplo, en  
   `https://drive.google.com/drive/folders/1CxHRI9sdfeeeerAW_1dThrh0W-ze0m2snZ`,  
   el ID es la cadena después de `folders/`:  
   `1CxHRI9sdfeeeerAW_1dThrh0W-ze0m2snZ  
3. Abra **RcloneView**, haga clic en **`+ New Remote`** bajo el menú **Remote**, seleccione **Google Drive** y continúe a la pestaña **Options**.
4. Desplácese hacia abajo y haga clic en **`Show advanced options`**.
5. Pegue el Computer ID copiado en el campo `root_folder_id`.
6. Haga clic en **Next** y siga el inicio de sesión OAuth para finalizar la configuración.

<div class="img-grid-3">
  <img src="/support/images/en/howto/remote-storage-connection-settings/google-drive-computers-id-copy.png" alt="google drive computers id copy" class="img-medium img-center" />
  <img src="/support/images/en/howto/remote-storage-connection-settings/add-google-drive-computer-remote-options.png" alt="add google drive computer remote options" class="img-medium img-center" />
  <img src="/support/images/en/howto/remote-storage-connection-settings/add-google-drive-computers-options-root-folder-id.png" alt="add google drive computers options root folder id" class="img-medium img-center" />
</div>

✅ Una vez completada la configuración, podrá explorar y acceder a las carpetas de Google Drive sincronizadas de su dispositivo directamente dentro de RcloneView.

## Ejemplo: Conexión de Box for Business

En la pestaña **Options**:
- Seleccione **enterprise** para `box_sub_type`
- Continúe con la configuración predeterminada  
- Cuando se le solicite, inicie sesión a través del portal SSO de su organización en el navegador


✅ Una vez que haya iniciado sesión, el remoto aparecerá en RcloneView y estará listo para usar.

