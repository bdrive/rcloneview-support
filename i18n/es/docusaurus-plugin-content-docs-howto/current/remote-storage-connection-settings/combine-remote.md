---
sidebar_position: 3
description: Combina varias carpetas en la nube en una sola vista virtual en RcloneView sin copiar datos, ideal para la navegación multicloud y trabajos unificados.
keywords:
  - rcloneview
  - combine remote
  - virtual remote
  - multi cloud
  - union remote
  - cloud viewer
  - remote manager
tags:
  - RcloneView
  - combine
  - remote-storage
  - virtual-remote
  - multi-cloud
date: 2025-12-08
author: tayson
---

# Combine

## Cómo agregar Combine usando RcloneView

Un **Remoto Combine** fusiona carpetas de varios remotos en la nube en una sola vista virtual. No copia ni mueve datos; simplemente te permite explorar varias ubicaciones como una única carpeta.

Por qué es útil:

- Ver datos dispersos entre nubes en un solo lugar.
- Tratar carpetas de proyecto de diferentes servicios como un único espacio de trabajo.
- Ejecutar trabajos de copia de seguridad/sincronización como si fueran un solo remoto.
- Sin almacenamiento adicional ni archivos duplicados.

El Remoto Combine es, en la práctica, un visor multicloud.

---

## Crear un remoto Combine

### Paso 1 — **New Remote** → **Virtual** → **Combine**

<img src="/support/images/en/howto/remote-storage-connection-settings/combine/new-remote-add-combine.png" alt="new remote add combine" class="img-large img-center" />

### Paso 2 — Ingresa los detalles de Combine

Necesitas tres campos para cada entrada:

- **Remote name**: Nombre del remoto Combine (por ejemplo, `MyCombine`).
- **Directory**: Nombre de la carpeta tal como aparecerá dentro de la vista Combine (por ejemplo, `Folder1`).
- **Remote Path**: Ruta real en la nube que se incluirá. Haz clic en el ícono de carpeta para elegir entre los remotos registrados.

<img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-select-folder-1.png" alt="combine select folder first" class="img-large img-center" />

Después de elegir la primera ruta:  
<img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-select-folder-2.png" alt="combine select folder second" class="img-large img-center" />

Usa **Add Remote** para agregar Folder2, Folder3 y más.  
Cuando todas las entradas estén configuradas:  
<img src="/support/images/en/howto/remote-storage-connection-settings/combine/virtual-add-combine-input.png" alt="combine input window" class="img-large img-center" />

Haz clic en **Add Remote** para crear el remoto Combine.

### Paso 3 — Confirmar en el Remote Manager

<img src="/support/images/en/howto/remote-storage-connection-settings/combine/virtual-remote-manager-combine.png" alt="remote manager combine" class="img-large img-center" />

---

## Comprobar las carpetas combinadas en el Explorer

Abre el remoto Combine en el Explorer para ver cada carpeta agregada.

**Folder1 — ejemplo de Google Drive**  
<img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-check-folder-1.png" alt="combine check folder google drive" class="img-large img-center" />  
Muestra el mismo contenido que `mygoogledrive:Meet Recordings`.

**Folder2 — ejemplo de Dropbox**  
<img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-check-folder-2.png" alt="combine check folder dropbox" class="img-large img-center" />  
Muestra el mismo contenido que `drop:assets`.

---

## Cuándo usar Combine

- Ver datos de varias nubes a la vez.
- Consolidar carpetas de proyecto repartidas entre remotos.
- Gestionar trabajos de copia de seguridad o sincronización a través de un único remoto virtual.
- Mantener intactas las estructuras originales mientras se unifica la vista.
- Evitar el almacenamiento duplicado al obtener un espacio de trabajo combinado.

---

## Resumen

| Feature                 | Description                                    |
| ----------------------- | ---------------------------------------------- |
| **Remoto Combine**      | Fusiona varias carpetas en una sola vista virtual |
| **Sin duplicación de datos** | Los archivos permanecen en sus ubicaciones originales |
| **Agrega varios remotos** | Funciona con Drive, Dropbox, OneDrive, S3, etc. |
| **Casos de uso**        | Navegación unificada, copia de seguridad multicloud, proyectos |

El Remoto Combine te permite gestionar datos multicloud como si estuvieran en un solo lugar, sin mover ni duplicar archivos.
