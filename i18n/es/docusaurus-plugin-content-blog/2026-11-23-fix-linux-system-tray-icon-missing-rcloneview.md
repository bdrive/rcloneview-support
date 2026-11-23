---
slug: fix-linux-system-tray-icon-missing-rcloneview
title: "Soluciona el icono de la bandeja del sistema que falta en Linux — Recupera el control en segundo plano de RcloneView"
authors:
  - steve
description: "¿No ves el icono de bandeja de RcloneView en Linux? Instala la biblioteca AppIndicator, activa la compatibilidad con la bandeja en tu escritorio y recupera los montajes y los trabajos en segundo plano."
keywords:
  - rcloneview icono bandeja no aparece linux
  - linux icono bandeja del sistema no se muestra
  - libayatana-appindicator3-1
  - libappindicator3-1
  - gnome appindicator bandeja
  - rcloneview linux solución de problemas
  - menú bandeja montaje nube linux
  - sincronización en segundo plano linux gui
  - rcloneview ubuntu bandeja
tags:
  - RcloneView
  - troubleshooting
  - tips
  - linux
  - ubuntu
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Soluciona el icono de la bandeja del sistema que falta en Linux — Recupera el control en segundo plano de RcloneView

> Sin icono en la bandeja no hay accesos rápidos para montar ni una forma sencilla de volver a la aplicación minimizada. Así puedes recuperarlo.

En Windows y macOS, el icono de bandeja de RcloneView simplemente aparece. En Linux depende de dos cosas que la aplicación no controla: una biblioteca AppIndicator en el sistema y un entorno de escritorio que muestre iconos de indicador. Si falta cualquiera de las dos, RcloneView sigue funcionando, pero el icono que lista las unidades montadas, alterna los montajes y vuelve a abrir la ventana nunca aparece.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué desaparece el icono

RcloneView es una aplicación de escritorio desarrollada con Flutter. En Linux necesita una sesión X11 o Wayland en ejecución, GTK+ 3.0 y **libayatana-appindicator3-1** o **libappindicator3-1** para la bandeja del sistema. Los paquetes `.deb` y `.rpm` se compilan y prueban sobre Ubuntu 22.04 LTS, por lo que una instalación mínima, otra distribución o un AppImage ejecutado en un sistema reducido pueden carecer de la biblioteca de indicadores.

La segunda causa es el escritorio. Algunos entornos, en particular GNOME estándar, no muestran los iconos AppIndicator hasta que se activa una extensión de indicadores. La biblioteca puede estar instalada y aun así el icono sigue oculto.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount Manager de RcloneView como alternativa cuando falta el icono de bandeja en Linux" class="img-large img-center" />

## Paso 1: Instala la biblioteca AppIndicator

En Debian, Ubuntu y sus derivadas, instala `libayatana-appindicator3-1` desde los repositorios de tu distribución (o `libappindicator3-1` en versiones antiguas). En Fedora y sistemas basados en RHEL, instala el paquete GTK3 equivalente de ayatana o libappindicator que ofrezca tu versión. Confirma también que GTK+ 3 está presente.

Cierra RcloneView por completo y vuelve a iniciarlo. La bandeja se configura al arrancar la aplicación, así que una biblioteca instalada con la aplicación abierta no surtirá efecto hasta reiniciar.

## Paso 2: Activa la compatibilidad con indicadores en tu escritorio

En GNOME, activa una extensión AppIndicator/KStatusNotifierItem desde el gestor de extensiones de tu distribución; Ubuntu incluye una activada de forma predeterminada. KDE Plasma, Xfce, Cinnamon y MATE muestran los iconos de indicador mediante su propio widget de panel o de área de notificación. Asegúrate de que ese widget esté en el panel y no se haya ocultado.

Si usas un gestor de ventanas en mosaico, añade una barra compatible con StatusNotifierItem; de lo contrario, el icono no tendrá dónde aparecer.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Montar un remoto en la nube desde el Explorer de RcloneView en Linux" class="img-large img-center" />

## Paso 3: Revisa los ajustes de inicio minimizado y salir al cerrar

Sin icono de bandeja, **Start minimized** (iniciar minimizado) puede hacer que parezca que RcloneView nunca se inició, porque arranca directamente en una bandeja que no puedes ver. Hasta que el icono funcione, abre **Settings > General**, desactiva Start minimized y activa **Quit on close** (salir al cerrar) para que al cerrar la ventana no quede un proceso oculto en ejecución.

No necesitas la bandeja para el trabajo principal. **Mount Manager** monta y desmonta unidades, **Job Manager** ejecuta los trabajos guardados y **Job History** muestra qué se ejecutó y si terminó.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History de RcloneView confirmando trabajos en segundo plano en Linux" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html) como `.deb`, `.rpm` o `.AppImage` para x86_64 o ARM64.
2. Instala `libayatana-appindicator3-1` (o `libappindicator3-1`) y confirma que GTK+ 3 está presente.
3. Activa la compatibilidad con AppIndicator en tu entorno de escritorio y reinicia RcloneView por completo.
4. Vuelve a activar **Start minimized** cuando aparezca el icono y puedas acceder a los montajes desde la bandeja.

A diferencia de las herramientas que solo montan, RcloneView también sincroniza y compara carpetas con la FREE License, y una vez que vuelve el icono de bandeja, todo está a un clic.

---

**Guías relacionadas:**

- [Bandeja del sistema y sincronización en segundo plano — Mantén los trabajos en la nube en marcha con RcloneView](https://rcloneview.com/support/blog/system-tray-background-sync-rcloneview)
- [Cómo instalar RcloneView en Ubuntu y Debian Linux — Guía completa de configuración](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [Soluciona errores de montaje de rclone y FUSE en RcloneView](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)

<CloudSupportGrid />
