---
slug: rcloneview-nixos-linux-cloud-sync
title: "Ejecuta RcloneView en NixOS para sincronización y copia de seguridad en la nube"
authors:
  - tayson
description: "Guía paso a paso para instalar y ejecutar RcloneView en NixOS para sincronización y copia de seguridad en la nube, incluyendo configuración de AppImage, montajes FUSE y consejos de configuración específicos de NixOS."
keywords:
  - rcloneview
  - nixos cloud sync
  - rclone nixos
  - nixos appimage
  - nixos cloud backup
  - nixos fuse mount
  - nix package manager rclone
  - nixos cloud storage
  - appimage-run nixos
  - declarative cloud sync
tags:
  - linux
  - platform
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Ejecuta RcloneView en NixOS para sincronización y copia de seguridad en la nube

> NixOS ofrece un enfoque declarativo único para la configuración del sistema, pero ejecutar aplicaciones GUI de terceros requiere algunos pasos adicionales. **RcloneView** funciona sin problemas en NixOS una vez que configuras el soporte para AppImage y FUSE, ofreciéndote un potente gestor visual de almacenamiento en la nube en una de las distribuciones de Linux más reproducibles.

NixOS es una distribución de Linux construida en torno al gestor de paquetes Nix y un modelo de configuración totalmente declarativo. En lugar de instalar paquetes de forma imperativa, defines todo el estado de tu sistema en un archivo de configuración y lo reconstruyes. Este enfoque hace que los sistemas sean reproducibles, fáciles de revertir e ideales para desarrolladores y usuarios avanzados que desean control total sobre su entorno.

Sin embargo, la estructura de sistema de archivos poco convencional de NixOS (sin `/lib`, sin `/usr/lib`, sin FHS tradicional) significa que los binarios estándar de Linux, incluidos los AppImages, no se ejecutan de forma inmediata. RcloneView se distribuye como un AppImage para Linux, por lo que necesitas habilitar la compatibilidad con AppImage en NixOS antes de ejecutarlo.

Esta guía recorre todo el proceso: instalar rclone, habilitar el soporte para AppImage, ejecutar RcloneView, configurar FUSE para montajes en la nube y configurar sincronización automatizada como un servicio systemd.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Descripción general de NixOS y por qué es importante para el almacenamiento en la nube

NixOS trata la configuración del sistema como código. Tu archivo `/etc/nixos/configuration.nix` define cada paquete instalado, servicio habilitado y ajuste del sistema. Cuando ejecutas `nixos-rebuild switch`, el sistema pasa de forma atómica al nuevo estado. Si algo se rompe, puedes volver a una generación anterior en segundos.

Para los flujos de trabajo de almacenamiento en la nube, esto significa que puedes controlar mediante versiones toda tu configuración de sincronización y copia de seguridad. Tu instalación de rclone, la configuración de FUSE y los servicios systemd están todos definidos en un archivo y se pueden reproducir en cualquier máquina NixOS.

## Instalación de Rclone mediante Nixpkgs

Rclone está disponible en el repositorio oficial de Nixpkgs. Agrégalo a la configuración de tu sistema:

```nix
# /etc/nixos/configuration.nix
environment.systemPackages = with pkgs; [
  rclone
];
```

Luego reconstruye tu sistema:

```bash
sudo nixos-rebuild switch
```

Verifica la instalación ejecutando `rclone version`. Esto te da el backend de rclone que la GUI de RcloneView gestiona.

## Ejecutar el AppImage de RcloneView en NixOS

Los AppImages agrupan todas las dependencias en un único ejecutable, pero dependen de rutas FHS que NixOS no proporciona. NixOS ofrece dos soluciones principales: `appimage-run` y `nix-ld`.

### Opción A: Usar appimage-run

Agrega `appimage-run` a los paquetes de tu sistema:

```nix
environment.systemPackages = with pkgs; [
  rclone
  appimage-run
];
```

Después de reconstruir, descarga el AppImage de RcloneView desde [rcloneview.com](https://rcloneview.com/src/download.html), hazlo ejecutable y lánzalo:

```bash
chmod +x RcloneView-*.AppImage
appimage-run RcloneView-*.AppImage
```

### Opción B: Usar nix-ld

El módulo `nix-ld` proporciona una capa de compatibilidad que permite que los binarios estándar de Linux encuentren sus bibliotecas dinámicas. Habilítalo en tu configuración:

```nix
programs.nix-ld.enable = true;
```

Después de reconstruir, el AppImage debería ejecutarse directamente sin el envoltorio `appimage-run`:

```bash
chmod +x RcloneView-*.AppImage
./RcloneView-*.AppImage
```

Ambos enfoques funcionan. Elige `appimage-run` por simplicidad o `nix-ld` si ejecutas muchos binarios de terceros.

## Configurar FUSE para montajes en la nube

RcloneView puede montar el almacenamiento en la nube como un directorio local, pero esto requiere FUSE (Filesystem in Userspace). En NixOS, habilita FUSE en tu configuración:

```nix
# Habilitar FUSE
environment.systemPackages = with pkgs; [
  fuse
  fuse3
];

# Permitir que usuarios regulares monten sistemas de archivos FUSE
programs.fuse.userAllowOther = true;
```

Reconstruye y verifica que `/dev/fuse` exista. Ahora puedes usar la función de montaje de RcloneView para acceder al almacenamiento en la nube como si fuera una carpeta local.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />

## Configurar remotos en la nube en RcloneView

Inicia RcloneView y usa el asistente de configuración de remotos para agregar tus proveedores de nube. El proceso es el mismo que en cualquier distribución de Linux:

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

RcloneView es compatible con Google Drive, OneDrive, Dropbox, AWS S3, Wasabi, Backblaze B2, Cloudflare R2 y docenas más. La GUI te guía a través de la autenticación para cada proveedor, incluidos los flujos OAuth que se abren en tu navegador.

Tu configuración de rclone se almacena en `~/.config/rclone/rclone.conf` de forma predeterminada. En NixOS, esta ruta funciona con normalidad ya que reside en tu directorio home, fuera del almacén de Nix.

## Crear trabajos de sincronización y programar transferencias

Una vez que tus remotos estén configurados, usa el explorador de dos paneles de RcloneView para navegar por tu almacenamiento en la nube y crear trabajos de sincronización. Arrastra archivos entre paneles para iniciar transferencias, o configura trabajos recurrentes con el programador de trabajos.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

Para los usuarios de NixOS que prefieren integrarse con el modelo declarativo del sistema, también puedes definir un servicio systemd que ejecute comandos de sincronización de rclone en un temporizador, complementando el programador integrado de RcloneView.

## Configurar un servicio systemd para sincronización automatizada

NixOS facilita la definición de servicios systemd personalizados de forma declarativa. Agrega un servicio de sincronización basado en temporizador a tu configuración:

```nix
systemd.user.services.rclone-backup = {
  description = "Rclone cloud backup";
  serviceConfig = {
    ExecStart = "${pkgs.rclone}/bin/rclone sync /home/user/documents remote:backup/documents";
    Type = "oneshot";
  };
};

systemd.user.timers.rclone-backup = {
  description = "Run rclone backup daily";
  timerConfig = {
    OnCalendar = "daily";
    Persistent = true;
  };
  wantedBy = [ "timers.target" ];
};
```

Esto funciona junto con el programador GUI de RcloneView. Usa el enfoque systemd para servidores sin interfaz gráfica y el programador de RcloneView para estaciones de trabajo interactivas.

## Consejos específicos de NixOS

**Fija la versión de rclone.** NixOS facilita fijar versiones de paquetes usando overlays o flakes. Si una nueva versión de rclone introduce cambios incompatibles, puedes permanecer en una versión estable conocida hasta que estés listo para actualizar.

**Usa Home Manager para la configuración a nivel de usuario.** Si usas Home Manager, puedes gestionar tu archivo de configuración de rclone, la entrada de escritorio del AppImage y los ajustes de inicio automático de forma declarativa dentro de tu entorno de usuario.

**Entrada de escritorio para el lanzador de aplicaciones.** Crea un archivo `.desktop` para que RcloneView aparezca en tu menú de aplicaciones:

```nix
xdg.desktopEntries.rcloneview = {
  name = "RcloneView";
  exec = "appimage-run /home/user/Applications/RcloneView.AppImage";
  icon = "rcloneview";
  type = "Application";
  categories = [ "Utility" "FileManager" ];
};
```

**Seguridad de reversión.** Dado que NixOS admite reversiones atómicas, puedes experimentar con seguridad con configuraciones de rclone. Si un trabajo de sincronización está mal configurado, revierte tu generación de NixOS y tu sistema vuelve a su estado anterior.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agrega `rclone`, `appimage-run` y `fuse3` a tu configuración de NixOS y reconstruye.
3. Inicia RcloneView con `appimage-run`, agrega tus remotos en la nube y comienza a sincronizar.
4. Opcionalmente, define un temporizador systemd en tu configuración de NixOS para copias de seguridad automatizadas totalmente declarativas.

NixOS y RcloneView juntos te ofrecen un flujo de trabajo de almacenamiento en la nube reproducible y controlado por versiones que puedes replicar en cualquier máquina.

---

**Guías relacionadas:**

- [Explorar y gestionar almacenamiento remoto](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Montar almacenamiento en la nube como una unidad local](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [Agregar AWS S3 y compatibles con S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)

<CloudSupportGrid />
