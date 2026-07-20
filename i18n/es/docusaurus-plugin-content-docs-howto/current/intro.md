---
sidebar_position: 1
description: Aprenda a instalar RcloneView y a conectar Google Drive como remoto siguiendo una sencilla guía paso a paso.
keywords:
  - rclone
  - cloud
  - sync
  - rcloneview
  - guide
  - google drive
  - remote storage
  - Quick Start
  - OAuth
tags:
  - RcloneView
  - Cloud
  - Sync
  - getting-started
  - google-drive
  - Remote-Storage
date: 2025-05-26
author: Jay
slug: /
---
# Guía de inicio rápido

Esta guía le mostrará paso a paso cómo instalar **RcloneView** y añadir un **almacenamiento remoto (Google Drive)**.

## **Paso 1: Instalar RcloneView**

1. Descargue el archivo de instalación desde la [**página de descarga de RcloneView**](https://rcloneview.com/src/download.html).
2. Ejecute el instalador descargado y siga las instrucciones en pantalla para completar la instalación.
3. Cuando la instalación se realice correctamente, verá la siguiente pantalla de confirmación:
<img src="/support/images/howto/Completed-install.png" alt="Completed-install" class="img-medium img-center" />

## **Paso 2: Añadir almacenamiento remoto (ejemplo con Google Drive)**

### **Abrir la ventana de nueva configuración de remoto**

- Haga clic en **`+ New Remote`** en el menú superior, dentro de **`Remote`**.
- Alternativamente, haga clic en el botón **`+`** en el panel del Explorador y seleccione **`New Remote`** para iniciar la configuración del remoto.
<img src="/support/images/howto/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
### Añadir un remoto de Google Drive

1. Escriba **`google`** en la barra de búsqueda.
2. Seleccione **`Google Drive`** en los resultados.
3. Introduzca un **`Remote name`** reconocible (por ejemplo, MyGoogleDrive).
4. Haga clic en **`Add Remote`** para finalizar la adición del remoto.

:::tip
Los campos marcados con un asterisco (*) son obligatorios. Asegúrese de completar todos los campos requeridos antes de guardar.
:::
<div class="img-grid-2">
<img src="/support/images/en/howto/new-remote-step1.png" alt="new remote step1" class="img-medium img-center" />
<img src="/support/images/en/howto/add-remote-step2.png" alt="add remote step2" class="img-medium img-center" />
</div>

:::tip Remotos en la nube basados en OAuth

La mayoría de los proveedores de almacenamiento en la nube que admiten OAuth (inicio de sesión basado en web), como **Google Drive**, **Dropbox**, **Google Photos**, **OneDrive**, **Box**, **pCloud**, **Yandex Disk**, **premiumize.me**, **put.io** y **HiDrive**, le permiten omitir el paso de `Options`: simplemente ponga nombre a su remoto e inicie sesión a través del navegador.

Sin embargo, **algunos proveedores requieren configuración adicional** en la pestaña `Options` antes del inicio de sesión con OAuth:
- **Zoho WorkDrive** – Selección de región
- **Google Cloud Storage** – Introducción del número de proyecto
- **Citrix ShareFile** – Introducción del ID de carpeta raíz
- **Google Drive Shared with Me** – Habilitar `shared_with_me`
- **Box for Business** – Seleccionar `enterprise` para box_sub_type

👉 Consulte la guía: [Conectar mediante inicio de sesión en el navegador web](/howto/remote-storage-connection-settings/add-oath-online-login#supported-cloud-providers--setup-requirements)
:::

## **Paso 3: Conectar su almacenamiento remoto (inicio de sesión único de GoogleDrive)**
### Autenticación de cuenta

- Será redirigido a la página de inicio de sesión de Google SSO.
- Seleccione su cuenta de Google o elija **"Use another account"** para iniciar sesión con una cuenta diferente.

<img src="/support/images/howto/google-choose-account.png" alt="google choose account" class="img-medium img-center" />
:::tip
Si está utilizando un método de inicio de sesión distinto al inicio de sesión basado en contraseña mostrado anteriormente, consulte [esta guía](https://support.google.com/accounts/answer/12849458) para completar el proceso de inicio de sesión.
:::

### Autorizar el acceso de RcloneView

- Haga clic en "Continue" para completar la conexión con su Google Drive.

<img src="/support/images/howto/google-trust-rclone.png" alt="google trust rclone" class="img-medium img-center" />
- Debería ver una página de confirmación que muestra **"Success!"**
<img src="/support/images/howto/google-login-complete.png" alt="google login complete" class="img-medium img-center" />
✅ **¡Listo!** Su remoto de Google Drive ahora está conectado correctamente y listo para usarse en RcloneView.

