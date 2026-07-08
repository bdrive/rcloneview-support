---
slug: rcloneview-steam-deck-cloud-sync
title: "Usa RcloneView en Steam Deck para almacenamiento en la nube y copia de seguridad de juegos"
authors:
  - tayson
description: "El SSD limitado de la Steam Deck hace que el almacenamiento en la nube sea esencial. Aprende a instalar RcloneView en Steam Deck para hacer copias de seguridad de partidas guardadas, sincronizar capturas de pantalla y grabaciones con Google Drive, OneDrive o S3, y liberar espacio en tu dispositivo portátil."
keywords:
  - almacenamiento en la nube steam deck
  - copia de seguridad de juegos steam deck
  - rcloneview steam deck
  - sincronización google drive steam deck
  - copia de seguridad onedrive steam deck
  - copia de seguridad de partidas en la nube steam deck
  - instalación rcloneview steamos
  - sincronización de capturas de pantalla steam deck
  - administrador de archivos steam deck
  - almacenamiento en la nube externo steam deck
tags:
  - RcloneView
  - linux
  - platform
  - cloud-sync
  - guide
  - installation
  - backup
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Usa RcloneView en Steam Deck para almacenamiento en la nube y copia de seguridad de juegos

> La Steam Deck integra un PC completo en un dispositivo portátil, pero su SSD de 64 GB, 256 GB o 512 GB se llena rápido. El almacenamiento en la nube convierte tu Deck en un dispositivo con capacidad prácticamente ilimitada para copias de seguridad de juegos, capturas de pantalla, grabaciones y más.

La Steam Deck de Valve ejecuta SteamOS, una distribución Linux basada en Arch con un modo escritorio KDE Plasma personalizado. Si bien la función de guardado en la nube integrada de Steam cubre algunos juegos, no cubre títulos que no son de Steam, juegos emulados, configuraciones de mods, cachés de shaders ni las capturas de pantalla y grabaciones de partidas que se acumulan con el tiempo. El SSD limitado hace que la gestión del almacenamiento sea una preocupación constante. RcloneView ofrece a los usuarios de Steam Deck un administrador de archivos multicloud gráfico para hacer copias de seguridad de partidas guardadas en Google Drive, OneDrive o S3, sincronizar capturas de pantalla y grabaciones con almacenamiento en la nube, y descargar archivos grandes para liberar espacio en la unidad interna. Esta guía cubre la instalación en el modo escritorio, la configuración de remotos en la nube y flujos de trabajo prácticos para mantener seguros los datos de tu Steam Deck y tu almacenamiento optimizado.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué usar almacenamiento en la nube en Steam Deck

La Steam Deck es un PC de juegos capaz, pero sus limitaciones de almacenamiento crean problemas reales:

- **El espacio del SSD se llena rápido** — los juegos modernos pueden superar los 50-100 GB cada uno. Incluso el modelo de 512 GB se llena después de instalar unos pocos títulos AAA.
- **Steam Cloud no lo cubre todo** — muchos juegos no admiten guardados en Steam Cloud. Los juegos que no son de Steam (GOG, Epic mediante capas de compatibilidad, títulos emulados) no tienen ninguna copia de seguridad en la nube integrada.
- **Las capturas de pantalla y grabaciones se acumulan** — la Deck facilita capturar pantallas y grabar partidas, pero estos archivos consumen tu almacenamiento limitado.
- **Las configuraciones de mods son frágiles** — si modificas juegos en la Deck, esas configuraciones residen en el sistema de archivos local y pueden perderse durante una actualización de SteamOS o un restablecimiento de fábrica.
- **No hay copia de seguridad externa automática** — la Steam Deck no tiene un mecanismo integrado para hacer copias de seguridad de archivos arbitrarios en almacenamiento en la nube externo.

RcloneView resuelve estos problemas conectando tu Steam Deck a cualquier proveedor de nube principal, dándote la capacidad de enviar archivos a la nube bajo demanda o de forma programada.

## Cambiar al modo escritorio

Toda la instalación y configuración se realiza en el modo escritorio de la Steam Deck. Para cambiar:

1. Pulsa el **botón Steam** en tu Deck.
2. Ve a **Encendido > Cambiar a escritorio**.
3. La Deck se reinicia en un escritorio KDE Plasma completo con barra de tareas, administrador de archivos (Dolphin) y una terminal (Konsole).

El modo escritorio te ofrece un entorno de escritorio Linux completo. Puedes usar la pantalla táctil, los trackpads o conectar un teclado y un ratón por USB-C o Bluetooth para una experiencia más cómoda.

## Instalar RcloneView en Steam Deck

SteamOS tiene un sistema de archivos raíz de solo lectura por defecto, lo que limita la instalación tradicional de paquetes. Los dos mejores enfoques para instalar software son Flatpak (el método oficialmente compatible) y AppImage.

### Opción 1: AppImage (recomendado)

El método AppImage es el más simple y funciona sin modificar el sistema:

1. Abre el navegador **Firefox** en el modo escritorio (preinstalado en SteamOS).
2. Ve a [rcloneview.com](https://rcloneview.com/src/download.html) y descarga el AppImage para Linux.
3. Abre **Dolphin** (el administrador de archivos) y navega a tu carpeta de Descargas.
4. Haz clic derecho en el archivo AppImage, selecciona **Propiedades > Permisos**, y marca **Es ejecutable**.
5. Haz doble clic para ejecutarlo.

Alternativamente, desde Konsole (la terminal):

```bash
chmod +x ~/Downloads/RcloneView-*.AppImage
~/Downloads/RcloneView-*.AppImage
```

Mueve el AppImage a una ubicación permanente para mantener limpia tu carpeta de Descargas:

```bash
mkdir -p ~/Applications
mv ~/Downloads/RcloneView-*.AppImage ~/Applications/
```

Para añadir RcloneView a tu menú de aplicaciones, crea una entrada de escritorio:

```bash
cat > ~/.local/share/applications/rcloneview.desktop << 'EOF'
[Desktop Entry]
Name=RcloneView
Exec=/home/deck/Applications/RcloneView-latest.AppImage
Icon=rcloneview
Type=Application
Categories=Utility;FileManager;
EOF
```

Reemplaza el nombre de archivo por el nombre real de tu AppImage.

### Opción 2: Deshabilitar el sistema de archivos de solo lectura (avanzado)

Si quieres instalar paquetes mediante pacman (como en un sistema Arch normal), puedes deshabilitar el sistema de archivos de solo lectura:

```bash
sudo steamos-readonly disable
sudo pacman-key --init
sudo pacman-key --populate archlinux
sudo pacman -Syu rclone fuse3
```

**Advertencia:** Deshabilitar el sistema de archivos de solo lectura significa que las actualizaciones de SteamOS pueden sobrescribir tus cambios. El método AppImage es más duradero frente a las actualizaciones del sistema.

### Verificar la instalación

Inicia RcloneView. Deberías ver la interfaz principal con el explorador de remotos. Si usas la pantalla táctil, la interfaz es lo suficientemente receptiva para la navegación básica, aunque se recomienda un ratón para sesiones extendidas de gestión de archivos.

## Conectar cuentas de almacenamiento en la nube

Con RcloneView ejecutándose en el modo escritorio, añade tus proveedores de almacenamiento en la nube.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

### Google Drive

1. Haz clic en **New Remote** y selecciona **Google Drive**.
2. El flujo OAuth se abre en Firefox. Inicia sesión con tu cuenta de Google y concede acceso.
3. Guarda el remoto. Ahora todo tu Google Drive es accesible desde RcloneView.

### OneDrive

1. Haz clic en **New Remote** y selecciona **Microsoft OneDrive**.
2. Autentícate a través de la página de inicio de sesión de Microsoft en Firefox.
3. Elige OneDrive personal o OneDrive para empresas.
4. Guarda el remoto.

### Almacenamiento compatible con S3 (Backblaze B2, Wasabi, AWS)

1. Haz clic en **New Remote** y selecciona tu proveedor S3.
2. Introduce tu Access Key y Secret Key.
3. Especifica la región y el endpoint.
4. Guarda el remoto.

Para los usuarios de Steam Deck, Google Drive y OneDrive son las opciones más comunes porque muchos jugadores ya tienen estas cuentas. Los proveedores compatibles con S3 como Backblaze B2 o Wasabi ofrecen almacenamiento masivo rentable para archivos de copia de seguridad de juegos de gran tamaño.

## Hacer copias de seguridad de partidas guardadas

Este es el caso de uso principal para la mayoría de los usuarios de Steam Deck. Los archivos de partidas guardadas son pequeños pero irremplazables. Así es como hacer copias de seguridad de ellos con RcloneView.

### Localizar los archivos de guardado

Las partidas guardadas de Steam en la Deck suelen encontrarse en:

- **Guardados de Steam Proton:** `~/.local/share/Steam/steamapps/compatdata/[APPID]/pfx/drive_c/users/steamuser/`
- **Guardados nativos de Linux:** `~/.local/share/[GameName]/` o `~/.config/[GameName]/`
- **Guardados de juegos emulados:** dependen del emulador (los guardados de RetroArch suelen estar en `~/.config/retroarch/saves/`)

### Crear un trabajo de copia de seguridad de guardados

1. En RcloneView, abre tu sistema de archivos local en el panel izquierdo y navega hasta tu carpeta de guardados.
2. Abre tu remoto en la nube en el panel derecho y crea una carpeta de destino (por ejemplo, `SteamDeck/Saves/`).
3. Selecciona los archivos o carpetas de guardado y cópialos a la nube.

Para una protección continua, crea un trabajo de sincronización:

1. Establece el origen en tu directorio de guardados local.
2. Establece el destino en tu carpeta de copia de seguridad en la nube.
3. Programa el trabajo para que se ejecute a diario o con la frecuencia que prefieras.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

De esta forma, cada vez que terminas una sesión de juego y cambias al modo escritorio, tus últimos guardados se envían automáticamente a la nube (o puedes ejecutar el trabajo manualmente antes de volver al modo juego).

## Sincronizar capturas de pantalla y grabaciones

La Steam Deck almacena las capturas de pantalla en `~/.local/share/Steam/userdata/[USERID]/760/remote/[APPID]/screenshots/`. Las grabaciones de partidas (si usas herramientas como OBS en el modo escritorio) pueden almacenarse donde las configures.

### Configurar la sincronización de capturas de pantalla

1. En RcloneView, navega hasta tu directorio de capturas de pantalla en el panel izquierdo.
2. Abre una carpeta de destino en la nube (por ejemplo, `SteamDeck/Screenshots/`) en el panel derecho.
3. Crea un trabajo de sincronización para enviar las nuevas capturas a la nube.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

Las capturas de pantalla suelen ser pequeñas (1-5 MB cada una), por lo que los trabajos de sincronización se completan rápidamente incluso con una conexión a internet modesta. Para las grabaciones de partidas, que pueden ser de cientos de megabytes o varios gigabytes cada una, considera programar las subidas para cuando la Deck esté acoplada y conectada a Wi-Fi.

### Liberar espacio después de subir

Una vez que las capturas de pantalla y grabaciones están de forma segura en la nube, puedes eliminar las copias locales para recuperar espacio en el SSD. La operación de mover de RcloneView (a diferencia de copiar) transfiere los archivos y elimina el origen, haciendo esto en un solo paso. Usa esto con cuidado: verifica que la copia en la nube existe antes de eliminar los archivos locales.

## Gestionar el almacenamiento en el SSD limitado

Más allá de hacer copias de seguridad de guardados y contenido multimedia, RcloneView ayuda con una gestión de almacenamiento más amplia en la Steam Deck:

- **Archivar datos antiguos de juegos** — ¿terminaste un juego y quieres conservar los guardados pero recuperar el espacio? Sincroniza los datos de guardado con la nube y luego desinstala el juego. Si lo reinstalas más tarde, restaura los guardados desde la nube.
- **Descargar archivos de mods** — los paquetes de mods grandes (mejoras de texturas, conversiones totales) se pueden respaldar en almacenamiento en la nube y volver a descargar cuando sea necesario.
- **Montar almacenamiento en la nube para contenido multimedia** — monta una carpeta de Google Drive o OneDrive como un directorio local y transmite contenido multimedia (música, vídeos) desde la nube sin almacenarlo en el SSD.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />

### Montar almacenamiento en la nube en Steam Deck

Para montar un remoto en la nube como sistema de archivos local:

1. Asegúrate de que FUSE esté disponible. En la SteamOS por defecto, el soporte de FUSE normalmente está incluido. Si no:

```bash
sudo steamos-readonly disable
sudo pacman -S fuse3
sudo steamos-readonly enable
```

2. En RcloneView, haz clic derecho en un remoto y selecciona **Mount**, o usa el Administrador de Montajes.
3. Elige un punto de montaje (por ejemplo, `~/CloudDrive/`).
4. Configura los ajustes de caché — usa el modo de caché VFS "full" para la mejor experiencia con archivos multimedia.

La unidad montada aparece en Dolphin y es accesible desde cualquier aplicación. Por ejemplo, podrías apuntar un reproductor multimedia a una carpeta en la nube montada para transmitir tu biblioteca musical sin usar nada de espacio del SSD.

## Flujos de trabajo prácticos para usuarios de Steam Deck

### Antes de un viaje

1. Cambia al modo escritorio.
2. Ejecuta tu trabajo de copia de seguridad de guardados para enviar los últimos guardados a la nube.
3. Verifica que la copia de seguridad se completó en el historial de trabajos de RcloneView.
4. Vuelve al modo juego.

### Después de una sesión de juego

1. Cambia al modo escritorio.
2. Ejecuta la sincronización de capturas de pantalla para enviar las nuevas capturas a la nube.
3. Opcionalmente, elimina las capturas de pantalla locales para liberar espacio.
4. Vuelve al modo juego.

### Después de una actualización de SteamOS o un restablecimiento de fábrica

1. Cambia al modo escritorio.
2. Instala RcloneView de nuevo (el método AppImage lleva segundos).
3. Reconfigura tus remotos en la nube (o restaura el archivo de configuración de rclone si lo habías respaldado en la nube).
4. Recupera tus archivos de guardado desde la nube.
5. Reanuda el juego.

Para que la recuperación sea más rápida, respalda también tu archivo de configuración de rclone (`~/.config/rclone/rclone.conf`) en la nube. Este archivo contiene las definiciones de tus remotos y se puede restaurar para reconectar instantáneamente todas tus cuentas en la nube.

## Primeros pasos

1. **Cambia al modo escritorio** en tu Steam Deck.
2. **Descarga el AppImage de RcloneView** y hazlo ejecutable.
3. **Añade tus cuentas en la nube** — Google Drive, OneDrive o S3 son las opciones más comunes.
4. **Haz copias de seguridad de tus partidas guardadas** creando un trabajo de sincronización desde tus directorios de guardado a una carpeta en la nube.
5. **Sincroniza tus capturas de pantalla** para liberar espacio en el SSD y mantener seguras tus capturas.
6. **Programa copias de seguridad periódicas** para que tus datos estén siempre protegidos, incluso si olvidas ejecutar una sincronización manual.

Tu Steam Deck es una potencia de juegos portátil, pero su almacenamiento es finito. RcloneView convierte cualquier cuenta en la nube en una extensión del sistema de archivos de tu Deck, manteniendo los guardados seguros, las capturas de pantalla organizadas y tu SSD libre para el próximo juego.

---

**Guías relacionadas:**

- [Explorar y gestionar almacenamiento remoto](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Montar almacenamiento en la nube como unidad local](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [Ejecutar y gestionar trabajos](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)

<CloudSupportGrid />
