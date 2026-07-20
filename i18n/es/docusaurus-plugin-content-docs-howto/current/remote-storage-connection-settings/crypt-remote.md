---
sidebar_position: 2
description: Agrega un Remoto Crypt en RcloneView para cifrar archivos y nombres de archivo sobre un remoto en la nube existente, manteniendo el acceso dentro de la app.
keywords:
  - rcloneview
  - crypt
  - remoto virtual
  - remoto cifrado
  - cifrado en la nube
  - gestor de remotos
  - privacidad
tags:
  - RcloneView
  - crypt
  - remote-storage
  - encryption
  - virtual-remote
date: 2025-12-08
author: tayson
---

# Crypt

## Cómo Agregar Crypt Usando RcloneView

Un **Remoto Crypt** agrega una capa de cifrado sobre un remoto en la nube existente (Google Drive, OneDrive, etc.).  
Los archivos siguen viviendo en el remoto original, mientras que el remoto Crypt se encarga del cifrado y descifrado.

Por qué es útil:

- Evita que los proveedores vean el contenido de los archivos.
- También puede cifrar los nombres de archivo para lograr privacidad total.
- El descifrado ocurre automáticamente dentro de RcloneView.
- Ideal para copias de seguridad sensibles.

---

## Por Qué un Remoto Crypt Puede Verse Vacío

Los usuarios suelen esperar ver sus archivos en texto plano en un remoto Crypt. En cambio:

- Crypt muestra solo archivos **cifrados**.
- Los archivos en texto plano del remoto subyacente **no** se muestran en la vista Crypt (esto es normal).

Ejemplo:

- `mygoogledrive:Meet Recordings` contiene archivos en texto plano.
- `MyCryptGoogle:` envuelve la misma carpeta con Crypt.
- En el remoto Crypt se ve vacío; esto es lo esperado.

Cuando subes archivos **a través de Crypt**, se almacenan cifrados, por lo que:

- Aparecen normalmente (descifrados) en el remoto Crypt.
- Aparecen con nombres cifrados en el remoto original.

---

## Crear un Remoto Crypt mediante Nuevo Remoto

### Paso 1 — Abre **Nuevo Remoto** → **Virtual** → **Crypt**

<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/new-remote-add-crypt.png" alt="new remote add crypt" class="img-large img-center" />

### Paso 2 — Ingresa los detalles de Crypt

Campos requeridos:

- **Nombre del remoto**: Nombre del remoto Crypt (por ejemplo, `MyCryptGoogle`).
- **Remoto (carpeta a cifrar)**: Haz clic en el selector de carpetas para elegir el remoto y la carpeta existentes que deseas proteger.

<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/virtual-add-select-remote-and-folder.png" alt="select target remote and folder for crypt" class="img-large img-center" />

Después de la selección, revisa la configuración y haz clic en **Agregar Remoto**.  
<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/virtual-add-crypt-input.png" alt="crypt input window" class="img-large img-center" />

### Paso 3 — Confirma en el Gestor de Remotos

<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/virtual-remote-manager-crypt.png" alt="remote manager crypt" class="img-large img-center" />

---

## Subir y Ver Archivos en un Remoto Crypt

Cuando subes archivos a través del remoto Crypt:

- Los archivos se **cifran al subirlos**.
- La vista Crypt muestra **nombres descifrados** por comodidad.
- El remoto subyacente muestra **nombres de archivo cifrados**.

Ejemplo de comparación:  
<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/crypt-upload-file-compare.png" alt="crypt upload file compare" class="img-large img-center" />

| Ubicación de la vista            | Lo que ves                            |
| --------------------------------- | -------------------------------------- |
| `MyCryptGoogle:`                  | Nombres de archivo en apariencia plana (descifrados) |
| `mygoogledrive:Meet Recordings`   | Nombres de archivo cifrados (esperado) |

---

## Por Qué Usar un Remoto Crypt

- Los proveedores de la nube no pueden leer el contenido de los archivos.
- Los nombres de archivo pueden cifrarse para lograr privacidad total.
- El descifrado automático en RcloneView mantiene el uso simple.
- Excelente para copias de seguridad seguras, documentos sensibles y unidades compartidas.
- Combínalo con el programador para copias de seguridad cifradas automatizadas.

---

## Resumen

| Función                          | Descripción                                              |
| --------------------------------- | --------------------------------------------------------- |
| **Remoto Crypt**                  | Capa de cifrado sobre un remoto existente                 |
| **Visibilidad de archivos planos**| Los archivos planos se ocultan en la vista Crypt (normal) |
| **Subidas vía Crypt**             | Almacenados cifrados; visibles descifrados en la vista Crypt |
| **Propósito**                     | Copias de seguridad en la nube seguras y protección de la privacidad |
