---
slug: fix-linux-system-tray-icon-missing-rcloneview
title: "Solucionar el icono de la bandeja del sistema que falta en Linux — Restaura montajes y trabajos en segundo plano con RcloneView"
authors:
  - alex
description: "¿El icono de bandeja de RcloneView no aparece en Linux? Aprende cómo las bibliotecas AppIndicator, la configuración del escritorio y las opciones de RcloneView restauran los montajes de la bandeja y los trabajos en segundo plano."
keywords:
  - icono de bandeja de rcloneview no aparece en linux
  - icono de bandeja del sistema linux no se muestra
  - libayatana-appindicator3-1
  - icono de bandeja appindicator gnome
  - solución de problemas de rcloneview en linux
  - bandeja del sistema rclone gui linux
  - sincronización en la nube en segundo plano linux
  - mount manager bandeja del sistema
  - rcloneview iniciar minimizado
tags:
  - RcloneView
  - troubleshooting
  - tips
  - linux
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar el icono de la bandeja del sistema que falta en Linux — Restaura montajes y trabajos en segundo plano con RcloneView

> Si RcloneView se ejecuta en Linux pero su icono de bandeja nunca aparece, la causa casi siempre es una biblioteca AppIndicator ausente o un escritorio que oculta los iconos de la bandeja.

El icono de la bandeja del sistema de RcloneView es más que decoración. Muestra tus unidades montadas, alterna entre montar y desmontar, inicia nuevos montajes y mantiene la aplicación accesible mientras los trabajos se ejecutan en segundo plano. Cuando el icono falta en Linux — algo común en instalaciones nuevas de Ubuntu, Fedora o escritorios mínimos —, los usuarios o mantienen la ventana principal abierta todo el día o pierden de vista la aplicación tras cerrarla. Así puedes diagnosticarlo y solucionarlo.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué desaparece el icono de la bandeja

En Linux, RcloneView se integra con el escritorio a través de D-Bus y AppIndicator. Eso requiere una de dos bibliotecas: **libayatana-appindicator3-1** o **libappindicator3-1**. Si ninguna está instalada, la aplicación se abre igualmente — para ello necesita GTK+ 3.0 y una sesión X11 o Wayland —, pero el icono de la bandeja no tiene dónde registrarse.

La segunda causa es el entorno de escritorio. Algunos escritorios, en particular GNOME, no muestran los iconos AppIndicator de forma predeterminada y necesitan habilitar una extensión AppIndicator. KDE Plasma, Xfce, Cinnamon y MATE generalmente los muestran sin pasos adicionales.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount Manager de RcloneView usado cuando el icono de bandeja de Linux no está disponible" class="img-large img-center" />

## Solución paso a paso

1. **Instala una biblioteca AppIndicator.** Usa el gestor de paquetes de tu distribución para instalar libayatana-appindicator3-1 (o libappindicator3-1 en distribuciones que aún la incluyen). Los nombres de paquete varían ligeramente entre distribuciones, así que busca "appindicator" en tu gestor de paquetes.
2. **Habilita la compatibilidad con la bandeja en tu escritorio.** En GNOME, activa una extensión AppIndicator/KStatusNotifierItem y luego cierra sesión y vuelve a iniciarla.
3. **Reinicia RcloneView por completo.** Sal de la aplicación — no te limites a cerrar la ventana — y vuelve a abrirla para que se registre en la bandeja al iniciarse.

Si el icono sigue sin aparecer, abre la pestaña **Log** en la Info View inferior para ver errores, o habilita el registro de rclone en nivel DEBUG en Settings > Embedded Rclone para recopilar detalles para el soporte.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Montar un remoto en la nube desde el explorador de RcloneView en Linux" class="img-large img-center" />

## Revisa los ajustes que dependen de la bandeja

Dos ajustes de General interactúan con la bandeja. **Start minimized** inicia RcloneView directamente en la bandeja; sin un icono de bandeja funcional, puede parecer que la aplicación no se inicia en absoluto. **Quit on close** decide si el botón de cerrar sale de la aplicación o la mantiene ejecutándose en segundo plano. Hasta que la bandeja funcione, desactiva Start minimized y ten en cuenta Quit on close para no detener por accidente los trabajos en curso.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History de RcloneView confirmando que los trabajos en segundo plano finalizaron" class="img-large img-center" />

## Confirma que el trabajo en segundo plano se está ejecutando

Cuando el icono vuelva, cierra la ventana principal y comprueba que el menú de la bandeja sigue mostrando tus montajes. Los trabajos continúan en segundo plano y aparece una notificación cuando cada uno termina. Después, **Job History** muestra si cada ejecución se completó, tuvo errores o fue cancelada. RcloneView monta Y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux, y la bandeja es lo que mantiene esa ventana fuera de tu camino.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html) como .deb, .rpm o .AppImage.
2. Instala libayatana-appindicator3-1 o libappindicator3-1 con el gestor de paquetes de tu distribución.
3. Habilita la compatibilidad con AppIndicator en tu entorno de escritorio si oculta los iconos de la bandeja.
4. Reinicia RcloneView por completo y confirma que tus montajes aparecen en el menú de la bandeja.

Con la bandeja funcionando, tus unidades en la nube y tus trabajos de sincronización quedan a un clic sin ocupar tu pantalla.

---

**Guías relacionadas:**

- [Bandeja del sistema y sincronización en segundo plano en RcloneView](https://rcloneview.com/support/blog/system-tray-background-sync-rcloneview)
- [Instalar RcloneView en Ubuntu y Debian Linux](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [Solucionar errores FUSE de montaje de Rclone con RcloneView](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)

<CloudSupportGrid />
