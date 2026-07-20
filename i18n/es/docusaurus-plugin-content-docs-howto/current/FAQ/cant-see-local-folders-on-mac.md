---
sidebar_position: 2
description: "Soluciona la falta de las carpetas Desktop, Documents o Downloads en RcloneView en macOS otorgando permisos, habilitando el acceso total al disco y recopilando registros para soporte."
keywords:
  - rcloneview
  - macos
  - permisos
  - archivos y carpetas
  - acceso total al disco
  - solución de problemas
  - preguntas frecuentes
tags:
  - RcloneView
  - macOS
  - Troubleshooting
  - FAQ
  - Permissions
date: 2025-11-07
author: Jay
---
# No se ven las carpetas locales en Mac (Desktop/Documents/Downloads)

Si acabas de instalar RcloneView en macOS y no puedes ver carpetas como **Desktop**, **Documents** o **Downloads** en el panel izquierdo "Local Disk", casi siempre se trata de un problema de permisos de privacidad de macOS. Esta guía muestra cómo permitir el acceso y qué probar si las carpetas siguen apareciendo vacías.

Para un recorrido rápido por el Explorador, consulta: [Explorar y administrar almacenamiento remoto](/howto/rcloneview-basic/browse-and-manage-remote-storage).

## Por qué ocurre esto

Desde macOS 10.15 (Catalina), Apple exige que las apps soliciten permiso antes de acceder a carpetas protegidas como Desktop, Documents y Downloads. Si hiciste clic en "No permitir" o la app aún no tiene permiso, esas carpetas aparecerán vacías en RcloneView.

## Cuando aparece una ventana emergente de permisos

Puede que veas un cuadro de diálogo de macOS la primera vez que abras RcloneView o cuando hagas clic en una carpeta protegida.

1) Si ves una ventana emergente que pide acceso a la carpeta Documents, haz clic en **Allow**.

<img src="/support/images/en/howto/FAQ/mac-allow-access-to-folder-and-files1.png" alt="mac allow access to folder and files1" class="img-medium img-center" />

2) Si haces clic en una carpeta protegida (por ejemplo, Downloads) en el panel izquierdo y aparece un aviso similar, haz clic en **Allow**.

<img src="/support/images/en/howto/FAQ/mac-allow-access-to-folder-and-files2.png" alt="mac allow access to folder and files2" class="img-medium img-center" />

3) Si hiciste clic en **Don't Allow**, la carpeta aparecerá vacía hasta que se otorgue el permiso.

<img src="/support/images/en/howto/FAQ/empth-folder-by-dont-allow.png" alt="empth folder by dont allow" class="img-large img-center" />

## Solución: otorgar acceso en Ajustes del Sistema (primera acción)

Si las carpetas siguen viéndose vacías, o hiciste clic accidentalmente en "No permitir", otorga el acceso desde Ajustes del Sistema de macOS.

**Pasos (macOS Ventura, Sonoma, Sequoia):**

1. Abre `System Settings > Privacy & Security > Files & Folders`.
2. Busca **RcloneView**.
3. Activa los interruptores para las carpetas que quieras (por ejemplo, **Documents Folder**, **Downloads Folder**).  
4. Vuelve a abrir la carpeta en RcloneView.

<img src="/support/images/en/howto/FAQ/change-setting-for-accessing-to-files-and-folders.png" alt="change setting for accessing to files and folders" class="img-large img-center" />

Si no ves RcloneView en esta lista, abre RcloneView una vez, intenta abrir una carpeta protegida, y macOS debería volver a mostrar el aviso.

## ¿Sigue sin funcionar? Agrega Acceso Total al Disco (segunda acción)

Si los interruptores de Files & Folders están activados y aún no puedes explorar el contenido, intenta agregar RcloneView a **Full Disk Access**.

1. Abre `System Settings > Privacy & Security > Full Disk Access`.
2. Haz clic en el botón `+` y elige la app **RcloneView** desde `Applications`.
3. Asegúrate de que el interruptor esté activado para RcloneView.
4. Reinicia RcloneView e inténtalo de nuevo.

<img src="/support/images/en/howto/FAQ/mac-allow-full-disk-access.png" alt="mac allow full disk access" class="img-medium img-center" />

## Si aún necesitas ayuda: recopila registros y contacta a soporte

Si el acceso sigue bloqueado después de los pasos anteriores, envíanos los registros para que podamos ayudarte.

1. En RcloneView, abre `Settings > Embedded Rclone`.
2. En **Logging Configuration**, habilita el registro, elige una **Log folder**, conserva el nombre del archivo (por ejemplo, `rclone.log`) y establece **Log level** en **DEBUG**.
3. Haz clic en **Restart Embedded Rclone** para aplicar los cambios.
4. Reproduce el problema (intenta abrir la carpeta problemática) y luego envía el archivo de registro a [rcloneview@bdrive.com](mailto:rcloneview@bdrive.com) con una breve descripción de los pasos que seguiste.

:::caution Reinicio requerido
Los registros solo se capturan después de hacer clic en **Restart Embedded Rclone**. No te saltes este paso.
:::

<img src="/support/images/en/howto/FAQ/setting-for-collecting-log-file.png" alt="setting for collecting log file" class="img-large img-center" />

## Guías relacionadas

- Administrar archivos locales/en la nube en el Explorador: [Explorar y administrar almacenamiento remoto](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- Descripción general completa de Settings (incluyendo Embedded Rclone y Logging): [Ajustes generales](/howto/rcloneview-basic/general-settings#logging-configuration)

---

Si necesitas más ayuda, escríbenos a **[rcloneview@bdrive.com](mailto:rcloneview@bdrive.com)**.
