---
sidebar_position: 1
description: "Crea remotos Alias en RcloneView para marcar carpetas profundas en la nube como remotos virtuales para un acceso más rápido y una organización más limpia."
keywords:
  - rcloneview
  - howto
  - cloud
  - sync
  - rclone
  - alias remote
  - virtual remote
  - quick access
  - cloud remote shortcut
  - remote shortcut
  - cloud storage
  - remote manager
  - bookmark
tags:
  - RcloneView
  - alias
  - remote-storage
  - shortcut
  - virtual-remote
date: 2025-12-05
author: tayson
---

# Alias

## Cómo agregar un Alias usando RcloneView

Un **remoto Alias** es un remoto virtual que marca una carpeta específica dentro de un remoto en la nube existente. En lugar de navegar por un árbol de carpetas profundo cada vez, haz clic en el Alias y la carpeta de destino se abre de inmediato.

Usa Alias cuando:

- Visitas con frecuencia carpetas de proyectos profundas.
- Mantienes estructuras de carpetas complejas y necesitas puntos de acceso rápido.
- Administras muchos remotos y quieres un diseño más limpio.
- Quieres seleccionar carpetas específicas más rápido en Sync / Compare / Jobs.

**Resumen:** Alias = marcador de carpeta en la nube.

---

### Agregar un remoto Alias (mediante Nuevo remoto)

#### Paso 1 — Abre **Nuevo remoto** y elige **Virtual > Alias**

<img src="/support/images/en/howto/remote-storage-connection-settings/alias/new-remote-add-alias.png" alt="alias remote selection" class="img-large img-center" />

#### Paso 2 — Ingresa la información del Alias

1. **Nombre del remoto**: Ingresa el nombre del Alias (por ejemplo, `MyAlias`).
2. **Remoto (carpeta de destino)**: Haz clic en el ícono de carpeta y elige el remoto y la carpeta existentes que deseas.  
   <img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-add-select-remote-and-folder.png" alt="select target remote and folder" class="img-medium img-center" />

   Después de seleccionar, confirma los detalles del Alias:  
   <img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-add-alias-input.png" alt="alias input window" class="img-large img-center" />

3. Haz clic en **Agregar remoto** para crear el Alias.

#### Paso 3 — Verifica el Alias en el Administrador de remotos

<img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-remote-manager-alias.png" alt="remote manager alias" class="img-large img-center" />

Ábrelo en el explorador de archivos para confirmar que apunta exactamente a la carpeta de destino:  
<img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-alias-file-browser.png" alt="alias file browser" class="img-large img-center" />

---

### Crea un Alias más rápido desde el Explorador

Puedes crear rápidamente un remoto Alias para marcar carpetas remotas de uso frecuente y así lograr un acceso más rápido y sencillo.

1. En el panel del **Explorador**, haz clic en el ícono **`☆` Alias** en el lado derecho de la barra de ruta.
2. Ingresa un nombre para tu nuevo **Alias**.
3. El remoto se agregará y abrirá al instante como un **remoto Alias**, listo para usar.
<div class="img-grid-3">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-alias-remote.png" alt="add new alias remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-alias-remote-name.png" alt="add new alias remote name" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-alias-remote-complete.png" alt="add new alias remote complete" class="img-large img-center" />
</div>

---

### Verifica el remoto Alias agregado en RcloneView

El remoto Alias agregado se puede verificar de la misma manera que cualquier otro remoto en la nube en RcloneView.

1. En el menú superior, haz clic en **`Administrador de remotos`** dentro de la pestaña **`Remoto`**.
2. Confirma que tu **remoto Alias** recién creado aparece en la ventana del **`Administrador de remotos`**.
3. Alternativamente, abre una nueva pestaña en el panel del Explorador usando el botón **`☆`** y verifica que el remoto Alias esté disponible para explorar.

<div class="img-grid-3">
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-icloud-verify-step1.png" alt="verify aws s3 step1" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/added-alias-remote-verify.png" alt="added alias remote verify" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/added-alias-remote-explorer-verify.png" alt="added alias remote explorer verify" class="img-medium img-center" />
</div>

---

### Por qué usar remotos Alias

- Ahorra tiempo: entra a carpetas profundas con un solo clic.
- Mantén el Administrador de remotos ordenado al mostrar rutas clave como entradas separadas.
- Ideal para estructuras complejas de equipos o unidades compartidas.
- Totalmente utilizable en flujos de trabajo de Sync / Compare / Job como cualquier remoto.

---

### Resumen

| Función                          | Descripción                                          |
| --------------------------------- | ----------------------------------------------------- |
| **Alias mediante Nuevo remoto**  | Crea un remoto dedicado para una carpeta profunda    |
| **Alias mediante el Explorador** | Agrega la carpeta actual como Alias al instante       |
| **Visualización en el Administrador de remotos** | Se muestra como cualquier otro remoto |
| **Casos de uso**                  | Acceso rápido, organización, automatización          |

Alias es simple pero poderoso: aplana árboles complejos, salta directamente a lo que importa y acelera cada tarea en la nube.
