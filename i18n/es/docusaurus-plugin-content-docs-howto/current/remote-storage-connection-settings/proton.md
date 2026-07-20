---
sidebar_position: 10
description: Aprenda a añadir el almacenamiento de Proton Drive en RcloneView.
keywords:
  - rcloneview
  - rclone
  - proton
  - protondrive
  - cloud storage
  - remote storage
  - Remote Connection
tags:
  - proton
  - protondrive
  - remote-connection
  - Remote-Storage
  - cloud-storage
date: 2025-09-21
author: Jay
---

# Proton Drive

## Cómo añadir Proton Drive usando RcloneView (Windows)

### Paso 1: Abrir el Administrador de Remotos

- Haga clic en **`+ New Remote`** en la esquina superior derecha del **Administrador de Remotos**.
- Alternativamente, haga clic en el botón **`+`** en el panel del Explorador y seleccione **`New Remote`** para iniciar la configuración del remoto.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>
---

### Paso 2: Seleccionar Proton Drive como proveedor de almacenamiento

1. En la barra **Search Provider**, escriba `proton`.
2. Seleccione **Proton Drive** de la lista.

A continuación, se le llevará a la pantalla de configuración de Proton Drive.

<img src="/support/images/en/howto/remote-storage-connection-settings/select-proton-drive-remote.png" alt="select proton drive remote" class="img-medium img-center" />

### Paso 3: Configurar su remoto de Proton Drive

Complete los campos requeridos en el formulario de configuración:

- **Remote name**: Un nombre descriptivo para su remoto (por ejemplo, `MyProtonDrive`)
- **username**: Su dirección de correo electrónico de Proton
- **password**: La contraseña de su cuenta de Proton
- **2fa** (opcional): Su código 2FA actual (solo si la 2FA está habilitada)

Después de introducir toda la información necesaria, haga clic en **`Add Remote`** para finalizar la configuración.

<img src="/support/images/en/howto/remote-storage-connection-settings/remote-configure-proton.png" alt="remote configure proton" class="img-medium img-center" />

### Paso 4: Confirmar el remoto añadido

Una vez añadido, su remoto de Proton Drive (por ejemplo, `MyProtonDrive`) aparecerá en la lista del **Administrador de Remotos**.

Ahora puede:
- Hacer clic en **`Open`** para explorar el contenido de su Proton Drive.
- Usarlo en transferencias, montajes o tareas programadas.
- Editar o eliminar la configuración del remoto en cualquier momento.

<img src="/support/images/en/howto/remote-storage-connection-settings/remote-manager-proton-view.png" alt="remote manager proton view" class="img-medium img-center" />


✅ **¡Listo!** Su **Proton Drive** ahora está conectado correctamente a **RcloneView**.


## 🔗 Recursos adicionales

- 🌐 [Inicio de sesión en Proton Drive](https://drive.proton.me/)
- 🔐 [Administrar su cuenta de Proton](https://account.proton.me/)
- 🛡️ [Guía de configuración de la 2FA de Proton](https://proton.me/support/two-factor-authentication)
