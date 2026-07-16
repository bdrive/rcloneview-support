---
slug: plex-buffering-fix-rcloneview
title: "Soluciona rápido el buffering de Plex con RcloneView — Ajusta montajes, caché VFS y límites de red"
authors:
  - tayson
description: Detén el buffering de Plex al transmitir desde Google Drive, Dropbox, S3 u otras nubes usando el administrador de montajes, los ajustes predefinidos de caché VFS y los diagnósticos de rendimiento de RcloneView, en lugar de perseguir flags de la CLI.
keywords:
  - rcloneview
  - solución buffering plex
  - caché vfs plex
  - montaje rclone plex
  - plex con cortes en la nube
  - google drive plex
  - streaming plex 4k
tags:
  - plex
  - performance
  - troubleshooting
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Soluciona rápido el buffering de Plex con RcloneView — Ajusta montajes, caché VFS y límites de red

> Plex es tan fluido como el almacenamiento que hay detrás. Con RcloneView puedes ver, ajustar y monitorear cada configuración necesaria para transmitir bibliotecas 4K desde Google Drive, Dropbox, Wasabi o S3 sin pausas.

El buffering de Plex tiene múltiples culpables: discos lentos, caché VFS insuficiente, escáneres agresivos o limitación de Google Drive. RcloneView superpone una GUI sobre rclone para que puedas montar nubes, ajustar los modos de caché y observar el rendimiento en tiempo real sin memorizar flags. Este artículo ofrece a los administradores de Plex una lista de verificación para eliminar los cortes y recuperar las noches de maratón.

<!-- truncate -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Triaje rápido: ¿es Plex, la red o el montaje?

| Síntoma | Causa probable | Qué revisar en RcloneView |
| --- | --- | --- |
| Buffering después de 30–60 segundos | La caché no retiene el archivo completo o está en un disco lento | Detalles del montaje → Cache Mode (**Full**) y **Cache max size** suficientemente grande en SSD |
| Buffering al saltar capítulos | Los datos en caché expiran demasiado rápido | Opciones avanzadas de montaje → **Cache max age** con una ventana más larga y **Dir cache time** (5–15 minutos) |
| Reproduce bien en local pero falla remotamente | Cuello de botella de red/ISP | Confirma que el montaje esté en almacenamiento rápido; revisa la LAN/ISP. Usa el Mount Manager para verificar que permanece montado. |
| Reproduce SD pero falla en 4K | Caché demasiado pequeña para archivos grandes o cambio en la ruta de montaje | Opciones avanzadas → Aumenta **Cache max size** y mantén un **Target** fijo o **Mount to local path** para Plex |
| Los escaneos de biblioteca congelan Plex | Solicitudes repetidas de directorios | Opciones avanzadas → **Dir cache time** (p. ej., 5–15 minutos); programa los escaneos fuera de horario pico |

Si el montaje es el cuello de botella, la solución está en RcloneView.

## Paso 1 — Monta las nubes con los valores predeterminados correctos

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

1. Agrega tu remoto en la nube (Google Drive, Dropbox, Wasabi, S3, etc.) en **Explorer → + New Remote**. ¿Necesitas un repaso? Consulta [/support/howto/remote-storage-connection-settings/add-oath-online-login](/howto/remote-storage-connection-settings/add-oath-online-login).
2. Abre **Mount Manager → Add Mount**.
3. Elige la carpeta remota que contiene los medios (`gdrive-media:Movies`) y define una ruta de montaje visible para Plex (letra de unidad en Windows o `/Volumes/CloudMovies` en macOS/Linux).
4. Mantén **Target** en `Auto` a menos que Plex necesite una letra de unidad fija. Para fijarla, elige una letra (Windows) o habilita **Mount to local path** y apunta a una carpeta persistente (Linux/macOS).
5. En **Advanced**, mantén **Mount type** en `cmount` para Windows; usa `nfsmount` solo si ya dependes de NFS en Linux/macOS. Marca **Network drive** en Windows para que el servicio de Plex vea el montaje. Usa **Allow other** en Linux cuando Plex se ejecute como otro usuario. Deja **Read only** desactivado si agregas archivos o subtítulos a través del montaje.
6. En **Cache mode**, elige **Full** (lo mejor para Plex). Configura **Cache max size**, **Cache max age** y **Dir cache time** en el mismo diálogo para mantener en caché los medios grandes.
7. Habilita **Auto start on launch** para que los montajes vuelvan al reiniciar el servidor.

  <img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />


### Opciones avanzadas de montaje traducidas para usuarios de Plex

Estos nombres de campo coinciden con el diálogo de Mount de RcloneView. Los valores predeterminados siguen la guía [Mount Cloud Storage as a Local Drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive); la columna "Plex-friendly" aclara cómo configurarlos para streaming.

| Campo de RcloneView | Qué controla | Configuración amigable para Plex |
| --- | --- | --- |
| Volume name | Etiqueta mostrada por el SO/administrador de archivos. | Opcional; usa un nombre claro como `Plex Cloud`. |
| Mount type | Motor backend (`cmount` predeterminado en Windows, `nfsmount` mayormente en Linux/macOS). | Mantén `cmount` a menos que ya uses NFS; cambiarlo rara vez mejora el buffering. |
| Target | Letra de unidad o destino de montaje asignado automáticamente. | `Auto` está bien; elige una letra/ruta fija si Plex se ejecuta como servicio. |
| Mount to local path | Ubicación de montaje personalizada. | Úsala cuando Plex espera una ruta Unix estable (p. ej., `/mnt/plex-media`). |
| Network drive | Marca el montaje como unidad de red en Windows. | Habilítala para que las cuentas de servicio de Plex puedan ver el montaje. |
| Read only | Bloquea escrituras en el remoto. | Déjala desactivada para permitir descargas de subtítulos o cambios de metadatos; actívala solo para montajes de solo reproducción. |
| Allow other | Permite que otros usuarios del SO accedan al montaje (Linux). | Actívala si Plex se ejecuta bajo un usuario distinto al tuyo. |
| Cache mode | Comportamiento de la caché VFS: `off`, `minimal`, `writes`, `full` (predeterminado `writes`). | Usa **Full** para Plex y así mantener los archivos completos en caché y acelerar la búsqueda. |
| Cache max size | Tamaño máximo de la caché VFS (bytes). `-1` = sin límite. | Establece un tamaño explícito (p. ej., `75000000000` para ~75 GB) para proteger el espacio del SSD. |
| Cache max age | Cuánto tiempo permanecen válidos los datos en caché (nanosegundos). | 3600000000000 = 1h, 21600000000000 = 6h. Comienza con 6–12h para que los archivos 4K se mantengan disponibles. |
| Dir cache time | Cuánto tiempo se mantienen en caché los listados de directorios (nanosegundos). | 300000000000 = 5m, 900000000000 = 15m. Ajusta según la frecuencia de tus escaneos (típicamente 5–15m). |

## Paso 2 — Ajusta el tamaño y la vigencia de la caché VFS para Plex

RcloneView expone parámetros de caché que afectan directamente la reproducción de Plex. Ingresa los valores de tiempo en **nanosegundos**.

- **Cache mode**: Usa **Full** para Plex para que el archivo completo permanezca en caché y la búsqueda sea fluida. Si también escribes subtítulos/metadatos a través del montaje, Full sigue funcionando; deja **Read only** sin marcar para permitir escrituras.
- **Cache max size**: Reserva suficiente SSD para transmisiones concurrentes (p. ej., ~75–100 GB por usuario activo en 4K). Ejemplo: `107374182400` ≈ 100 GB.
- **Cache max age**: Mantén los medios en caché disponibles durante horas para que volver a un episodio no requiera volver a descargarlo. Ejemplo: `21600000000000` = 6 horas; `43200000000000` = 12 horas.
- **Dir cache time**: Reduce la rotación de directorios durante los escaneos de Plex. Ejemplo: `300000000000` = 5 minutos; `900000000000` = 15 minutos. Actualiza manualmente después de agregar contenido.
- RcloneView no expone `VFS read ahead`, `buffer-size` ni `--tpslimit`; enfócate en los campos de caché anteriores para obtener las mayores ganancias en Plex.

## Paso 3 — Ajusta el rendimiento de RcloneView a la demanda de Plex

- Mantén un **Target fijo o Mount to local path** para que las bibliotecas de Plex nunca pierdan su ruta de montaje después de un reinicio.
- Usa **Auto start on launch** para que los montajes vuelvan antes de que se inicien los servicios de Plex.
- En Windows, habilita **Network drive**; en Linux, habilita **Allow other** para que la cuenta de servicio de Plex pueda ver el montaje.
- Vigila el estado del **Mount Manager**. Si un montaje pasa a Unmounted, vuelve a montarlo desde ahí o desde el menú de la bandeja del sistema en lugar de reconstruir las bibliotecas.
- Para configuraciones con múltiples bibliotecas, crea montajes separados (p. ej., Movies vs. Shows) y establece **Cache max size** por montaje para evitar que una biblioteca desaloje la caché de otra.

## Paso 4 — Refuerza la configuración de red y del sistema operativo

- **Red local**: Conecta el servidor de Plex por Ethernet; configura QoS para que reciba prioridad de ancho de banda.
- **Windows**: Monta usando una letra de unidad fija y asegúrate de que el servicio de Plex se ejecute con el mismo usuario que posee el montaje.
- **Linux/macOS**: Usa `/etc/fstab` o un agente de inicio solo después de verificar que el automontaje de RcloneView funciona; la consistencia importa más que los scripts manuales.
- **Límites de ancho de banda**: En **Settings → Transfers**, deja el ancho de banda sin límite para streaming en LAN, pero establece un límite superior (p. ej., 300 Mbps) si otras cargas de trabajo comparten la misma conexión.


## Hoja de referencia para solución de problemas

| Problema | Solución |
| --- | --- |
| Buffering después de un período de inactividad | Aumenta **Cache max age** (p. ej., 6–12 horas) y mantén **Cache mode** en Full para que los fragmentos en caché sigan disponibles |
| Buffering cuando varios usuarios transmiten a la vez | Aumenta **Cache max size** para dar cabida a archivos 4K simultáneos y asegúrate de que el SSD tenga espacio libre |
| La unidad se desmonta durante la noche | Habilita **Auto start on launch** y usa un **Target** fijo o **Mount to local path** |
| Plex no puede ver el montaje | En Windows, revisa **Network drive** y ejecuta Plex con las mismas credenciales; en Linux, habilita **Allow other** |
| Los escaneos de biblioteca son lentos | Aumenta **Dir cache time** a 5–15 minutos; actualiza la caché después de agregar contenido nuevo |

## Soluciones reales de buffering

1. **Coleccionistas de 4K HDR**  
   - Cache Mode: Full  
   - Cache max size: 120 GB (SSD/NVMe)  
   - Cache max age: 12 horas (`43200000000000` ns)  
   - Dir cache time: 15 minutos (`900000000000` ns)  
   Resultado: Saltos de capítulo instantáneos, buffer &lt;1s para remuxes de Dolby Vision.

2. **Servidor familiar con contenido mixto 1080p/4K**  
   - Dos montajes: `Movies`, `Shows`, cada uno con su propio tamaño de caché  
   - Un trabajo programado precalienta cada noche las carpetas vistas con frecuencia  
   Resultado: Las cachés separadas evitan que los dibujos animados de los niños desalojen la caché de las películas.

3. **Usuarios en movimiento con LTE**  
   - Límite de ancho de banda: 80 Mbps  
   - Transcodificación de Plex configurada a 8 Mbps 1080p  
   - El montaje de RcloneView permanece en modo de caché **Full**; las escrituras quedan en cola hasta que vuelve la conectividad  
   Resultado: Transmisiones estables incluso a través de puntos de acceso celular.

## Preguntas frecuentes

**¿Necesito un montaje separado por biblioteca?**  
No es obligatorio, pero dividir las bibliotecas grandes mantiene las cachés manejables y te permite ajustar el tamaño/vigencia de la caché por biblioteca (p. ej., una vigencia de caché más larga para películas en 4K que para episodios de series).

## Reproduce sin pausas

El buffering de Plex es solucionable una vez que dominas los montajes, la caché y las cuotas. RcloneView proporciona la GUI para configurar correctamente la caché VFS, monitorear el rendimiento y automatizar los precalentamientos, sin adivinar con scripts de shell. Ajusta la configuración anterior, observa tus gráficos de transferencia y disfruta de bibliotecas de Plex que se comportan como almacenamiento local.


<CloudSupportGrid />
