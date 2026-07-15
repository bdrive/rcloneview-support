---
sidebar_position: 4
description: Aprenda a configurar WebDAV como almacenamiento remoto en RcloneView para la sincronización y el acceso a archivos.
keywords:
  - rcloneview
  - webdav
  - almacenamiento remoto
  - almacenamiento en la nube
  - sincronización
  - configuración de webdav
  - rclone
tags:
  - webdav
  - Remote-Storage
  - remote-connection
date: 2025-06-20
author: Jay
---
# WebDAV

## Cómo agregar WebDAV usando RcloneView

### Paso 1: Abrir la ventana de configuración de nuevo remoto

- Haga clic en **`+ New Remote`** en el menú superior, bajo **`Remote`**.
- Alternativamente, haga clic en el botón **`+`** en el panel del Explorador y seleccione **`New Remote`** para iniciar la configuración del remoto.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>

### Paso 2: Agregar el remoto WebDAV

#### En la pestaña **`Provider`**:
1. Busque **`webdav`**.
2. Seleccione **`WebDAV`** de la lista.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-webdav-remote-provider.png" alt="add webdav remote provider" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-webdav-remote-options.png" alt="add webdav remote options" class="img-medium img-center" />
</div>

#### En la pestaña **`Options`**:
3. Ingrese la URL del remoto
4. Ingrese su nombre de usuario de inicio de sesión
5. Ingrese su contraseña

<details>
<summary>Detalles de las opciones</summary>

Detalles de las opciones

| Campo          | Descripción                                                                                                                                                                                                                |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `url`          | La URL del WebDAV remoto (p. ej., https://webdav.example.com/) También puede especificar un número de puerto personalizado (p. ej., https://webdav.example.com:5020)                                                          |
| `vendor`       | (Opcional) Déjelo en blanco o indique el proveedor de servicio compatible con WebDAV (p. ej., fastmail, nextcloud, owncloud, sharepoint, sharepoint-ntlm, rclone)  Vea la lista completa: [WebDAV Provider Notes](https://rclone.org/webdav/#provider-notes) |
| `user`         | Su nombre de usuario de inicio de sesión                                                                                                                                                                                                     |
| `pass`         | Su contraseña de inicio de sesión (oculta)                                                                                                                                                                                               |
| `bearer_token` | (Opcional) Normalmente se deja en blanco                                                                                                                                                                                              |



</details>
#### En la pestaña **`Name`**:
6. Ingrese un nombre único e identificable para este remoto (p. ej., `myWebDAV`).

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-webdav-remote-name.png" alt="add webdav remote name" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-webdav-remote-save.png" alt="add webdav remote save" class="img-medium img-center" />
</div>
#### En la pestaña **`Save`**:
5. Haga clic en **`Save`** para completar la configuración del remoto.

### Paso 3: Verificar el remoto WebDAV agregado en RcloneView

1. En el menú superior, haga clic en **`Remote Manager`** bajo la pestaña **`Remote`**.
2. Confirme que su **remoto WebDAV** aparece en la ventana **Remote Manager**.

✅ **¡Listo!** Su remoto WebDAV ahora está configurado correctamente y listo para usarse en RcloneView.
