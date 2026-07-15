---
sidebar_position: 8
description: "Aprenda a montar almacenamiento en la nube remoto como una unidad virtual con RcloneView, incluyendo la configuración a través de Remote Explorer, Mount Manager y el acceso desde la bandeja del sistema."
keywords:
  - rcloneview
  - rclone
  - mount
  - mount manager
  - cloud drive
  - virtual drive
  - rclone mount
  - local drive
  - remote explorer
  - remote storage management
tags:
  - RcloneView
  - mount
  - local-drive
  - virtual-drive
  - cloud-storage
  - Remote-storage-managent
date: 2025-06-19
author: Jay
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Montar almacenamiento en la nube como unidad local

:::important Requisitos previos para montar
Antes de montar, asegúrese de que el remoto de destino ya se haya agregado a RcloneView.   
Consulte: [Agregar un nuevo remoto](/howto/rcloneview-basic/remote-manager#add-a-new-remote)
:::

## Montar almacenamiento remoto en RcloneView

RcloneView le permite montar almacenamiento remoto como una unidad virtual para facilitar el acceso y la gestión.  
Esta guía explica cómo montar almacenamiento remoto usando dos métodos y cómo gestionar las configuraciones de montaje.

### Método 1: Montar desde Remote Explorer

Puede montar una carpeta remota directamente mientras explora su contenido.

1. En el panel **Remote Explorer**, seleccione la carpeta remota que desea montar. 
2. Haga clic en el **ícono de montaje** (<img src="/support/icons/mount-icon.png" alt="mount icon" class="inline-icon" />) en la esquina superior del panel Remote Explorer.
3. Se abrirá el diálogo **Mount** con la ruta remota seleccionada completada automáticamente.
4. Configure los ajustes de montaje:
   - **Target**: Elija `Auto` o asigne manualmente una letra de unidad de la lista.
   - (opcional) marque "Mount to local path" para especificar una ubicación de montaje personalizada.
   - Active **Auto mount** para montar automáticamente este remoto cuando se inicie RcloneView.
5. Haga clic en **Save and mount** para aplicar la configuración y montar de inmediato.
   - Alternativamente, haga clic en **Save** para solo guardar la configuración de montaje y montarla más tarde.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-medium img-center" />

<details>
<summary>Opciones avanzadas de montaje</summary>

Opciones avanzadas de montaje

| Campo                        | Descripción                                                                                                                                                                                                                                                      |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Volume name**    | (Opcional) Establezca un nombre personalizado para el volumen montado. Este puede mostrarse en su explorador de archivos o en la interfaz del sistema.                                                                                                          |
| **Mount type**     | Seleccione el backend de montaje: <br /> - `cmount` (predeterminado para Windows): utiliza el motor de montaje interno tipo FUSE basado en C de Rclone, con alta compatibilidad  <br />- `nfsmount` (alternativa, principalmente para entornos Linux/macOS). Utiliza el protocolo NFS para montar el remoto |
| **Network drive**  | Marque esta casilla para señalar el montaje como una unidad de red. Esto puede afectar cómo el sistema operativo trata la carpeta montada.                                                                                                                      |
| **Read only**      | Habilita el modo de solo lectura, impidiendo operaciones de escritura en el remoto.                                                                                                                                                                              |
| **Allow other**    | Permite el acceso al sistema de archivos montado a usuarios distintos del que realizó el montaje (usado principalmente en Linux).                                                                                                                                |
| **Cache mode**     | Controla el comportamiento de la caché. Las opciones incluyen:  <br />- `off`  <br />- `minimal`  <br />- `writes`  <br />- `full`  <br />El modo predeterminado `writes` almacena en caché las operaciones de escritura.                                       |
| **Cache max size** | Tamaño máximo permitido de la caché en bytes.  <br />Ejemplo: 1073741824 = 1GB.  <br />Establezca `-1` para sin límite.                                                                                                                                          |
| **Cache max age**  | Cuánto tiempo pueden permanecer válidos los datos en caché.  La unidad de tiempo es en **nanosegundos**.  Ejemplo: 3600000000000 = 1 hora.                                                                                                                       |
| **Dir cache time** | Tiempo de validez de la caché de directorios.  La unidad de tiempo es en **nanosegundos**.  Ejemplo: 300000000000 = 5 minutos.                                                                                                                                   |

💡 Use estas opciones solo si está familiarizado con la configuración de montaje. Los valores predeterminados funcionan bien para la mayoría de los usuarios.

</details>
### Método 2: Montar mediante Mount Manager

También puede configurar y montar almacenamiento usando el **Mount Manager**.

1. Haga clic en el botón **`Mount Manager`** en la pestaña **`Remote`** de la barra de menú superior.  
2. Haga clic en **`New mount`** para crear una nueva configuración de montaje.  
3. Seleccione el remoto y, opcionalmente, especifique un subdirectorio para montar.  
4. Configure las opciones de montaje:  
   - **Target**: Elija `Auto` o asigne manualmente una letra de unidad de la lista.  
   - (Opcional) Active **Mount to local path** para especificar una ruta de montaje personalizada.  
   - Active **Auto mount** para montar automáticamente este remoto cuando se inicie RcloneView.  
1. Haga clic en **`Save`** para guardar la configuración de montaje sin montar de inmediato.  
   - Para guardar y montar el remoto de inmediato, haga clic en **`Save and mount`**.  

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="mount from mount manager" class="img-medium img-center" />
## Ver y gestionar unidades montadas

Para ver o gestionar sus configuraciones de montaje, abra el diálogo **Mount Manager** haciendo clic en el botón **`Mount Manager`** en la pestaña **`Remote`** del menú principal.

Todas las configuraciones de montaje guardadas se enumerarán en la ventana de Mount Manager.  
Cada configuración se clasifica según su **estado** actual:
- **Mounted**: el remoto está actualmente montado y activo.
- **Unmounted**: el montaje está guardado pero no está montado actualmente.
  <img src="/support/images/en/howto/rcloneview-basic/mount-manager-status.png" alt="mount manager status" class="img-medium img-center" />
Puede realizar las siguientes acciones según el estado:


<Tabs>
<TabItem value="Status: mounted" label="🟢 Estado: montado">

- <img src="/support/icons/unmount-icon.png" alt="unmount icon" class="inline-icon" /> : **Unmount** — Haga clic para desmontar el remoto actualmente montado.
- <img src="/support/icons/disabled-edit-mount.png" alt="disabled edit mount" class="inline-icon" /> : (Deshabilitado) Edit
- <img src="/support/icons/open-mount-folder.png" alt="open mount folder" class="inline-icon" /> : **Open** — Haga clic para abrir la carpeta montada en su explorador de archivos.
- <img src="/support/icons/disabled-delete-mount-configuration.png" alt="disabled delete mount configuration" class="inline-icon" /> : (Deshabilitado) Delete
</TabItem>



<TabItem value="Status: Configured" label="🟠 Estado: desmontado">

- <img src="/support/icons/mount-run-icon.png" alt="mount run icon" class="inline-icon" /> : **Mount** — Haga clic para montar manualmente el remoto seleccionado.
- <img src="/support/icons/edit-mount-configuration.png" alt="edit mount configuration" class="inline-icon" /> : **Edit** — Haga clic para modificar la configuración de montaje.
- <img src="/support/icons/disabled-open-mount-folder.png" alt="disabled open mount folder" class="inline-icon" /> : (Deshabilitado) Open
- <img src="/support/icons/delete-mount-configuration.png" alt="delete mount configuration" class="inline-icon" /> : **Delete** — Haga clic para eliminar la configuración de montaje.
</TabItem>

</Tabs>


<br />
<br />

:::tip Montaje rápido desde la bandeja del sistema
También puede gestionar montajes rápidamente mediante el ícono de la bandeja del sistema.

1. Haga clic derecho en el **ícono de RcloneView** en la bandeja del sistema.
2. Pase el cursor sobre el menú **Mount**.
3. Puede:
   - Ver las unidades actualmente montadas y montar o desmontar la unidad
   - Desmontar todo
   - Iniciar un nuevo montaje
<img src="/support/images/en/howto/rcloneview-basic/mount-from-system-tray.png" alt="mount from system tray" class="img-small img-left" />

:::

