---
sidebar_position: 3
description: "Soluciona los casos en los que RcloneView no puede acceder a tu SSD externo en macOS explorando /Volumes y creando un acceso directo de tipo Alias."
keywords:
  - rcloneview
  - macos
  - external drive
  - offline backup
  - sync destination
  - alias remote
  - volumes
  - troubleshooting
  - faq
tags:
  - RcloneView
  - macOS
  - Troubleshooting
  - FAQ
  - external-drive
  - alias
date: 2025-02-20
author: Jay
---

# No puedo acceder a un SSD externo con RcloneView (macOS)

Si RcloneView no puede acceder a tu SSD externo en macOS (no ves la unidad o no sabes dónde escribir su ruta), usa esta solución rápida. Un problema temporal de UX (corregido en la próxima versión) oculta el acceso directo habitual, pero puedes explorar manualmente hasta el SSD y guardarlo como un Alias (favorito) para acceder con un solo clic más adelante.

---

## Opciones de solución rápida (elige una)

- **Usar la compilación con la corrección (hotfix) (incluye la corrección de UX):** [Descarga RcloneView 1.1.517 (macOS)](https://downloads.bdrive.com/rclone_view/builds/RcloneView-1.1.517.dmg) e instálalo para obtener de inmediato la corrección de la ruta del SSD. Esta es una compilación temporal compartida para los usuarios que se encuentran con este problema antes del próximo lanzamiento oficial.
- **Permanecer en la versión oficial actual:** Sigue los pasos manuales a continuación para explorar `/Volumes` y crear un Alias hacia tu SSD. Esto funciona en la compilación pública actual.

---

## Paso a paso: agregar tu SSD desde /Volumes

Puedes ver **`Local Disk`** en el panel izquierdo de RcloneView.

1) En la barra de ruta, escribe `/Volumes` y presiona **Enter**. Aquí es donde macOS monta las unidades externas (por ejemplo, Samsung T7).
2) En la lista de `/Volumes`, haz doble clic en tu SSD (por ejemplo, `SAMSUNG`). Algunas unidades tardan un momento en cargar; espera a que se abra la carpeta.

<img src="/support/images/en/howto/FAQ/browse-volumes-in-mac-system.png" alt="browse volumes in mac system" class="img-large img-center" />

3) Confirma que estás dentro del SSD (la barra de ruta debe mostrar `/Volumes/<tu-unidad>`).
4) Haz clic en el icono **☆** (Alias) en la barra de ruta para agregar esta ubicación a favoritos.
5) Ingresa un nombre simple (por ejemplo, `MySSD`) y
6) haz clic en **Create**. Esto agrega un remoto de tipo Alias que siempre abre la raíz de tu SSD.
<img src="/support/images/en/howto/FAQ/creat-alias-remote-for-external-hdd.png" alt="creat alias remote for external hdd" class="img-large img-center" />

7) El Alias se abre en una nueva pestaña y también aparece en la lista izquierda para reutilizarlo rápidamente.

<img src="/support/images/en/howto/FAQ/open-alias-remote-for-external-ssd.png" alt="open alias remote for external ssd" class="img-large img-center" />

---

## Cómo usar el Alias del SSD en las copias de seguridad

- Al crear un trabajo de Sync/Copy/Move, elige el remoto Alias que acabas de crear (por ejemplo, `MySSD`) como **destino** y tu remoto de origen (por ejemplo, Google Drive, Dropbox, otra carpeta local) como **origen**.
- El Alias apunta a la raíz del SSD; puedes elegir o crear una subcarpeta en esa pestaña antes de iniciar el trabajo.

---

## Si el SSD no aparece

- Asegúrate de que el SSD esté montado en Finder (desconéctalo y vuelve a conectarlo si es necesario).
- Vuelve a abrir `/Volumes` en la barra de ruta y espera unos segundos a que se complete la lista de unidades.
- ¿Sigue sin verse? Reinicia RcloneView y vuelve a intentar con `/Volumes`. Si el problema persiste, repórtalo en el [foro de RcloneView](https://forum.rcloneview.com).

---

## Guías relacionadas

- Descripción general de Alias y otros remotos virtuales: [Guía del remoto Alias](/howto/remote-storage-connection-settings/alias-remote)
- Controles generales del Explorer y pestañas: [Explorar y administrar almacenamiento remoto](/howto/rcloneview-basic/browse-and-manage-remote-storage)
