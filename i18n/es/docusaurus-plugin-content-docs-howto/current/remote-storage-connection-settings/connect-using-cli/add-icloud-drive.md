---
sidebar_position: 1
description: Aprende a configurar iCloud Drive como remoto en Rclone usando la CLI en Windows, incluyendo los pasos para la autenticación de dos factores y la integración con RcloneView.
keywords:
  - rcloneview
  - howto
  - cloud
  - sync
  - rclone
  - icloud
  - cli
  - icloud drive
  - rclone cli
  - windows
  - 2fa
  - remote storage
  - cloud storage
  - Remote Connection
  - apple id
tags:
  - cli
  - icloud
  - windows
  - 2fa
  - Remote-Storage
  - remote-connection
  - cloud-storage
date: 2025-05-21
author: Jay
---
# iCloud Drive

Actualmente, el remoto de iCloud solo se puede agregar mediante la CLI de Rclone.

:::info
Actualmente, los remotos como iCloud, que admiten la autenticación de dos factores (2FA) interactiva, solo se pueden configurar mediante la CLI. La compatibilidad para configurar estos remotos a través de la interfaz de usuario se implementará en futuras versiones.
:::

## Cómo agregar iCloud Drive usando la CLI de Rclone (Windows)

#### Paso 1: Abrir el Símbolo del sistema

- Presiona Win + R, escribe cmd y presiona Enter.

<img src="/support/images/en/howto/remote-storage-connection-settings/connect-using-cli/windows-command-prompt.png" alt="windows command prompt" class="img-medium img-left" />

#### Paso 2: Iniciar la configuración de Rclone

Abre el Símbolo del sistema e inicia el proceso de configuración de Rclone:

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

#### Paso 3: Configurar el remoto de iCloud Drive

Sigue las indicaciones:

- **Name**: Asigna un nombre a tu nuevo remoto (por ejemplo, icloud).

```windows
Enter name for new remote.
name> Myicloud
```

- **Storage**: Selecciona iCloud Drive escribiendo `iclouddrive` o su número correspondiente (generalmente `59`) en la lista de opciones de almacenamiento. Si no aparece en la lista, asegúrate de estar usando Rclone v1.69 o posterior.

```
Storage> iclouddrive
```

- **Apple ID**: Ingresa la dirección de correo electrónico de tu Apple ID.

```
apple_id> your_email@icloud.com
```

- **Password**: Elige escribir tu contraseña.

```
y) Yes, type in my own password
g) Generate random password
y/g> y
```

- Ingresa tu contraseña de Apple ID cuando se te solicite.

```
Enter the password
password:
Confirm the password
password:
```

- **Advanced Config**: A menos que tengas requisitos específicos, puedes omitir la configuración avanzada.

```
Edit advanced config? (y/n)
y/n> n
```

- **Two-Factor Authentication (2FA)**: Si tu Apple ID tiene la 2FA habilitada (lo cual es recomendable), se te pedirá que ingreses el código de 2FA enviado a tu dispositivo de confianza.

```
Two-factor authentication: please enter your 2FA code
Enter a value.
config_2fa> 123456
```

- **Confirm Configuration**: Revisa la configuración y confírmala.

```
y) Yes this is OK (default)
e) Edit this remote
d) Delete this remote
y/e/d> y
```

Tu remoto de iCloud Drive ya está configurado.

Puedes verificar que iCloud Drive se haya agregado correctamente como se muestra a continuación. Escribe q para salir de rclone config.

```
Current remotes:

Name                 Type
====                 ====
Myicloud             iclouddrive

e) Edit existing remote
n) New remote
d) Delete remote
r) Rename remote
c) Copy remote
s) Set configuration password
q) Quit config
e/n/d/r/c/s/q> q
```
#### Paso 4: Probar la conexión

Para verificar que la configuración se realizó correctamente, enumera el contenido de tu iCloud Drive:

```
rclone lsd Myicloud:
```

Deberías ver una lista de directorios en tu iCloud Drive.

#### Paso 5: Verificar que se agregó iCloud Drive en RcloneView

Inicia **RcloneView**.

1. En la barra de menú, haz clic en **Remote Manager** dentro de la pestaña **Remote**.
2. Verifica que tu **iCloud Drive** aparezca en la ventana de **Remote Manager**.

<div class="img-grid-2">
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-icloud-verify-step1.png" alt="add icloud drive verify step1" class="img-medium img-center" />
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-icloud-verify-step2.png" alt="add icloud drive verify step2" class="img-medium img-center" />
</div>

:::danger Consideraciones importantes
- **Advanced Data Protection**: Si has habilitado **Advanced Data Protection (ADP)** en tu Apple ID, Rclone no podrá acceder a tu iCloud Drive. Para usar Rclone con iCloud Drive, debes deshabilitar ADP. Puedes hacerlo en tu iPhone navegando a:

```
Settings > [Your Name] > iCloud > Advanced Data Protection
```

- Asegúrate de que "Advanced Data Protection" esté **desactivado**. Además, "Access iCloud Data on the Web" debe estar **habilitado**.

- **Session Validity**: El token de confianza obtenido durante la configuración es válido por **30 días**. Después de este período, deberás volver a autenticarte usando:

```
rclone reconnect Myicloud:
```

- **App-Specific Passwords**: Actualmente, Rclone **no** admite contraseñas específicas de aplicación para iCloud Drive. Debes usar tu contraseña habitual de Apple ID junto con la 2FA durante la configuración.

Para obtener información más detallada, consulta la documentación oficial de Rclone sobre [iCloud Drive](https://rclone.org/iclouddrive/).
:::




