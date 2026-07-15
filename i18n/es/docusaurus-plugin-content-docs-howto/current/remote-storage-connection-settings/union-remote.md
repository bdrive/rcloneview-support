---
sidebar_position: 4
description: Agrega un remoto Union en RcloneView para combinar varias ubicaciones Remote:Path en una vista de carpeta unificada sin duplicar datos.
keywords:
  - rcloneview
  - union remote
  - virtual remote
  - merged folder
  - multi cloud
  - remote manager
  - union
tags:
  - RcloneView
  - union
  - remote-storage
  - virtual-remote
  - multi-cloud
date: 2025-12-08
author: tayson
---

# Union

## Cómo agregar Union usando RcloneView

Un **remoto Union** combina carpetas de varios remotos en la nube en una única carpeta unificada. Es diferente de Combine:

- **Combine** muestra las carpetas una junto a otra.
- **Union** combina varias carpetas en una sola vista.

Union es útil para:

- Acceder a datos de varios remotos como si fueran una sola carpeta.
- Navegación en un solo panel y diseños de copia de seguridad multi-nube.
- Crear un sistema de archivos virtual sin copiar ni mover datos.

---

## Crear un remoto Union

### Paso 1 — **New Remote** → **Virtual** → **Union**

<img src="/support/images/en/howto/remote-storage-connection-settings/union/new-remote-add-union.png" alt="new remote add union" class="img-large img-center" />

### Paso 2 — Ingresar los detalles de Union

Completa:

- **Remote name**: por ejemplo, `MyUnion`.
- **Upstreams (Remote:Path)**: Cada Upstream es una ubicación de carpeta real.

Agrega el primer Upstream seleccionando un remoto y una carpeta:  
<img src="/support/images/en/howto/remote-storage-connection-settings/union/union-select-folder-1.png" alt="union select folder first" class="img-large img-center" />

Para agregar otro Upstream, haz clic en **Add Remote** y elige la siguiente carpeta:  
<img src="/support/images/en/howto/remote-storage-connection-settings/union/union-select-folder-2.png" alt="union select folder second" class="img-large img-center" />

Agrega tantos Upstreams como necesites y luego revisa la configuración:  
<img src="/support/images/en/howto/remote-storage-connection-settings/union/virtual-add-union-input.png" alt="union input window" class="img-large img-center" />

Haz clic en **Add Remote** para crear el remoto Union.

### Paso 3 — Confirmar en Remote Manager

<img src="/support/images/en/howto/remote-storage-connection-settings/union/virtual-remote-manager-union.png" alt="remote manager union" class="img-large img-center" />

---

## Comprobar el Union en el Explorer

Abre el remoto Union en el Explorer. El contenido de todos los Upstreams aparece como una sola carpeta combinada.

**Upstreams 1 — Ejemplo de Google Drive**  
<img src="/support/images/en/howto/remote-storage-connection-settings/union/union-check-folder-1.png" alt="union check folder google drive" class="img-large img-center" />  
Coincide con `mygoogledrive:Meet Recordings`.

**Upstreams 2 — Ejemplo de Dropbox**  
<img src="/support/images/en/howto/remote-storage-connection-settings/union/union-check-folder-2.png" alt="union check folder dropbox" class="img-large img-center" />  
Coincide con `drop:assets`.

---

## Combine vs Union (diferencias clave)

| Característica          | Remoto Combine                       | Remoto Union                                    |
| ------------------------ | ------------------------------------- | ------------------------------------------------ |
| Estilo de visualización  | Muestra varias carpetas por separado  | Muestra una única vista combinada                |
| Reglas de escritura      | No se combinan; carpetas separadas    | Las nuevas escrituras siguen las políticas de Union |
| Estructura de archivos   | Carpeta1 / Carpeta2                   | Una carpeta virtual combinada                    |
| Ideal para                | Organización                          | Fusión multi-nube y uso unificado                |

---

## Cuándo usar Union

- Ver datos de varias nubes a la vez en una sola carpeta.
- Proyectos distribuidos entre remotos que necesitan una vista unificada.
- Ejecutar trabajos de Sync/copia de seguridad contra un remoto virtual único.
- Ofrecer una vista combinada sin duplicar el almacenamiento.

---

## Resumen

| Característica     | Descripción                                                  |
| -------------------- | ------------------------------------------------------------- |
| **Remoto Union**     | Combina varias entradas `Remote:Path` en una sola vista       |
| **Upstreams**        | Carpetas remotas reales que forman la unión                   |
| **Beneficios**       | Consolidación multi-nube, acceso en un solo panel              |
| **Propósito**        | Navegación unificada, copias de seguridad/Sync, unificación de proyectos |

Union Remote es un potente remoto virtual para gestionar entornos multi-nube a través de una vista de carpeta combinada.
