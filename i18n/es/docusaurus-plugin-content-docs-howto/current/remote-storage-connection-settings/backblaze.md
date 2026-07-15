---
sidebar_position: 8
description: Aprende cómo agregar almacenamiento Backblaze B2 en RcloneView.
keywords:
  - rcloneview
  - rclone
  - backblaze
  - b2
  - remote storage
  - cloud storage
  - Remote Connection
tags:
  - backblaze
  - b2
  - remote-connection
  - Remote-Storage
  - cloud-storage
date: 2025-09-20
author: Jay
---

# Backblaze B2

## Cómo agregar Backblaze B2 usando RcloneView (Windows)

### Paso 1: Abre el Administrador de remotos

- Haz clic en **`+ New Remote`** en el menú superior, dentro de **`Remote`**.
- Alternativamente, haz clic en el botón **`+`** en el panel del Explorador y selecciona **`New Remote`** para comenzar la configuración del remoto.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>

### Paso 2: Selecciona Backblaze B2 como proveedor de almacenamiento

1. En la barra **Search Provider**, escribe `b2`.
2. Haz clic en la opción **Backblaze B2** que aparece.

<img src="/support/images/en/howto/remote-storage-connection-settings/add-backblaze-b2-remote.png" alt="add backblaze b2 remote" class="img-medium img-center" />

A continuación, se te llevará a la pantalla de configuración de Backblaze B2.

### Paso 3: Configura tu remoto de Backblaze B2

En el formulario de configuración, proporciona la siguiente información requerida:

- **Remote name**: Un nombre amigable para tu remoto (por ejemplo, `MyB2Master`).
- **account**: Tu **Application Key ID** de Backblaze.
- **key**: Tu **Application Key** de Backblaze.

Después de ingresar los valores requeridos, haz clic en **`Add Remote`** para guardar la conexión.
<img src="/support/images/en/howto/remote-storage-connection-settings/remote-configure-backblaze-b2.png" alt="remote configure backblaze b2" class="img-medium img-center" />

:::info ¿Dónde obtener estas credenciales?

- Inicia sesión en tu [cuenta de Backblaze B2](https://secure.backblaze.com/b2_buckets.htm).
- Ve a **App Keys**.
- Crea o copia un par de claves existente:
  - Usa el **Key ID** como `account`
  - Usa la **Application Key** como `key`
:::


### Paso 4: Confirma el remoto agregado

Una vez agregado, tu nuevo remoto de Backblaze B2 (por ejemplo, `MyB2Master`) aparecerá en la lista del **Administrador de remotos**.

Ahora puedes:
- Hacer clic en **`Open`** para explorar el remoto.
- Usarlo en operaciones de copia/sincronización/montaje.
- Administrarlo o eliminarlo en cualquier momento.

<img src="/support/images/en/howto/remote-storage-connection-settings/remote-manager-backblaze-view.png" alt="remote manager backblaze view" class="img-medium img-center" />

✅ **¡Listo!** Has conectado exitosamente tu almacenamiento **Backblaze B2** a **RcloneView**.


## 🔗 Recursos adicionales

- 🔐 Administra tus claves: [https://secure.backblaze.com/b2_buckets.htm](https://secure.backblaze.com/b2_buckets.htm)
- 📘 Documentación de claves de aplicación: [https://www.backblaze.com/b2/docs/application_keys.html](https://www.backblaze.com/b2/docs/application_keys.html)
