---
sidebar_position: 6
description: Aprenda cómo agregar el almacenamiento Gofile en RcloneView.
keywords:
  - rcloneview
  - rclone
  - gofile
  - remote storage
  - cloud storage
  - Remote Connection
tags:
  - gofile
  - remote-connection
  - Remote-Storage
  - cloud-storage
date: 2025-05-27
author: Jay
---
# Gofile

## Cómo agregar Gofile usando RcloneView (Windows)


### Paso 1: Abrir la ventana de nueva configuración de remoto

- Haga clic en **`+ New Remote`** en el menú superior, dentro de **`Remote`**.
- Alternativamente, haga clic en el botón **`+`** en el panel del Explorador y seleccione **`New Remote`** para comenzar la configuración del remoto.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>
### Paso 2: Agregar el remoto Gofile

#### En la pestaña **`Provider`**:

1. Busque **`gofile`**.
2. Seleccione **`Gofile`** de la lista.

#### En la pestaña **`Options`**:

3. Ingrese su **Access Token**.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-provider.png" alt="add go file provider" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-option.png" alt="add gofile remote option" class="img-medium img-center" />
</div>
:::info Cómo obtener el Access Token
 - Visite [https://gofile.io/myprofile](https://gofile.io/myprofile)
 - Inicie sesión en su cuenta de Gofile.
- Desplácese hacia abajo para encontrar **`Account API Token`** y cópielo.
:::

#### En la pestaña **`Name`**:

4. Asigne un **`Remote name`** a este remoto (por ejemplo, `myGofile`).

#### En la pestaña **`Save`**:

5. Haga clic en **`Save`** para finalizar la adición del remoto.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-name.png" alt="add go file remote name" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-save.png" alt="add gofile remote save" class="img-medium img-center" />
</div>


### Paso 3: Verificar el remoto Gofile agregado en RcloneView

Inicie **RcloneView**.

1. Desde la barra de menú, haga clic en **`Remote Manager`** dentro de la pestaña **`Remote`**.
2. Confirme que su remoto **`Gofile`** aparece en la ventana **`Remote Manager`**.

<div class="img-grid-2">
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-icloud-verify-step1.png" alt="verify aws s3 step1" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-verify.png" alt="add go file remote verify" class="img-medium img-center" />
</div>


✅ **¡Listo!** Su remoto **`Gofile`** ahora está configurado correctamente y listo para usarse en **RcloneView**.


## 🔗 Recursos adicionales

- 🔐 Obtenga su token: [https://gofile.io/myprofile](https://gofile.io/myprofile)
