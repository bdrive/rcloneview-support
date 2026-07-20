---
sidebar_position: 2
description: Aprende a configurar Google Shared Drive como remoto en Rclone usando la CLI en Windows y gestionarlo mediante RcloneView.
keywords:
  - rcloneview
  - howto
  - cloud
  - sync
  - rclone
  - google drive
  - shared drive
  - team drive
  - rclone cli
  - remote storage
  - cloud storage
  - windows
  - Remote Connection
tags:
  - google-drive
  - shared-drive
  - team-drive
  - cli
  - cloud-storage
  - Remote-Storage
  - remote-connection
date: 2025-05-22
author: Jay
---
# Google Shared Drive (anteriormente Team Drive)

## Cómo agregar Google Shared Drive usando Rclone CLI (Windows)

### Paso 1: Abrir el símbolo del sistema
  
- Presiona Win + R, escribe cmd y presiona Enter.  

<img src="/support/images/en/howto/remote-storage-connection-settings/connect-using-cli/windows-command-prompt.png" alt="windows command prompt" class="img-medium img-left" />
#### Paso 2: Iniciar la configuración de Rclone

Abre el símbolo del sistema e inicia el proceso de configuración de Rclone:

```windows
rclone config
```

Verás un menú:

```
No remotes found - make a new one
n) New remote
s) Set configuration password
q) Quit config
n/s/q> n
```

Escribe n y presiona Enter para crear un nuevo remoto.

### Paso 3: Configurar Google Shared Drive

Sigue estas indicaciones:

- **Nombre**: Asigna un nombre a tu nuevo remoto (por ejemplo, mySharedDrive).

```windows
Enter name for new remote.
name> mySharedDrive
```

- **Almacenamiento**: Selecciona Google Drive escribiendo `drive` o su número correspondiente (normalmente `20`) de la lista de opciones de almacenamiento.

```
Storage> 20
```

- **client_id y client_secret**: Déjalos en blanco a menos que tengas credenciales específicas.

```
client_id> (press Enter)
client_secret> (press Enter)
```

- **Scope**: Ingresa `1` para otorgar acceso completo a tu Google Drive.

```
scope> 1
```

- **Credenciales de cuenta de servicio**: Déjalo en blanco a menos que sea específicamente necesario.
```
service_account_file> (press Enter)
```

- **Configuración avanzada**: Omite la configuración avanzada a menos que sea necesaria.

```
Edit advanced config? (y/n)
y/n> n
```

- **Configuración automática**: Usa la configuración automática para una instalación más sencilla.

```
If not sure try Y. If Y failed, try N.
y) Yes (default)
n) No
y/n> y
```

Se abrirá automáticamente una ventana del navegador. [Inicia sesión con tu cuenta de Google y otorga los permisos solicitados.](/howto/#step-3-connecting-your-remote-storage-googledrive-single-sign-on)


### Paso 4: Configurar Shared Drive

Después de completar la autenticación de Google:

- Verás una indicación: "Configure this as a Shared Drive?" Escribe `y` para confirmar.

```
Configure this as a Shared Drive (Team Drive)?
y) Yes
n) No (default)
y/n> y
```

- Rclone mostrará una lista de tus Shared Drives. Ingresa el número correspondiente al Shared Drive que deseas agregar.

```
Choose a number from below, or type in your own value of type string.
Press Enter for the default (0APnCeqmeA1p1Uk9PVA).
 1 / Team shared drive
   \ (0APnCeqmeA1p1Uk9PVA)
config_team_drive> 1
```

- Revisa los detalles de configuración mostrados y confirma.

```
Keep this "mySharedDrive" remote?
y) Yes this is OK (default)
e) Edit this remote
d) Delete this remote
y/e/d> y
```

- Sal de la interfaz de configuración de Rclone.

```
Current remotes:

Name                 Type
====                 ====
mySharedDrive        drive

e) Edit existing remote
n) New remote
d) Delete remote
r) Rename remote
c) Copy remote
s) Set configuration password
q) Quit config
e/n/d/r/c/s/q> q
```

**¡Listo!** Tu Google Shared Drive ahora está configurado correctamente y listo para usarse con Rclone.

### Paso 5: Probar la conexión

Verifica tu configuración listando el contenido de tu Google Shared Drive:

```
rclone ls mySharedDrive:
```

Deberías ver una lista de archivos de tu Shared Drive si todo está configurado correctamente.

#### Paso 5: Verificar el iCloud Drive agregado en RcloneView

Inicia **RcloneView**.

1. En la barra de menú, haz clic en **Remote Manager** bajo la pestaña **Remote**.
2. Verifica que tu **Google Shared Drive** aparezca en la ventana **Remote Manager**.

<div class="img-grid-2">
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-icloud-verify-step1.png" alt="add icloud drive verify step1" class="img-medium img-center" />
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-google-shared-drive.png" alt="add google shared drive - team drive" class="img-medium img-center" />
</div>

