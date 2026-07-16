---
slug: vfs-cache-mount-performance-rcloneview
title: "Caché VFS — Mejora el rendimiento de montaje para unidades en la nube en RcloneView"
authors:
  - tayson
description: "Configura los modos de caché VFS en RcloneView para mejorar el rendimiento de las unidades en la nube montadas. Aprende las estrategias de caché minimal, writes y full para tu flujo de trabajo."
keywords:
  - caché VFS
  - rendimiento de montaje
  - velocidad de unidad en la nube
  - caché de rclone
  - modos VFS
  - optimización de caché
  - almacenamiento en la nube montado
  - estrategia de caché en disco
  - ajuste de rendimiento
  - optimización de acceso a archivos
tags:
  - RcloneView
  - vfs
  - mount
  - performance
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Caché VFS — Mejora el rendimiento de montaje para unidades en la nube en RcloneView

> Las unidades en la nube montadas se sienten lentas por defecto—la caché VFS en RcloneView intercambia espacio en disco por velocidad, permitiéndote trabajar a velocidades de unidad local.

Cuando montas una unidad en la nube (Google Drive, Dropbox, AWS S3) a través de RcloneView, cada acceso a un archivo pasa por la red. Esto funciona, pero se siente lento—abrir un documento tarda uno o dos segundos, listar carpetas se traba y la lectura de archivos se siente limitada. La caché VFS resuelve esto almacenando en caché local los archivos accedidos con frecuencia.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ¿Qué es la caché VFS?

La caché VFS (Sistema de Archivos Virtual) almacena en tu disco local los archivos y metadatos de carpetas accedidos recientemente. Cuando abres un archivo desde una unidad en la nube montada, RcloneView revisa primero la caché—acceso instantáneo si está ahí, obtención por red si no lo está. A medida que trabajas, la caché crece; las entradas más antiguas se eliminan para hacer espacio.

Esta estrategia simple elimina la latencia de red de las operaciones comunes.

## Modos de caché VFS

RcloneView admite tres modos de caché, cada uno equilibrando velocidad frente al uso de disco:

### Modo 1: Desactivado (sin caché)
Cada acceso pasa por la red. Es el modo más seguro para archivos dinámicos, pero el más lento para accesos repetidos. Úsalo solo si el espacio en disco es crítico o si los conflictos de caché son un problema.

### Modo 2: Caché mínima
Almacena en caché los metadatos de archivos (nombres, tamaños) y los archivos abiertos recientemente. Rápido para la navegación de carpetas y lecturas repetidas. Usa un mínimo de disco—normalmente menos de 1 GB para la mayoría de los flujos de trabajo.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="RcloneView remote explorer and mount interface" width="600" />

**Ideal para**: edición de documentos, exploración de fotos, acceso regular a archivos en equipos con disco limitado.

### Modo 3: Caché de escrituras
Como la mínima, pero también almacena en caché las operaciones de escritura. Los archivos que acabas de modificar permanecen locales antes de la sincronización en segundo plano. Acelera drásticamente los flujos de trabajo con escrituras frecuentes.

**Ideal para**: creación de contenido, edición de video, operaciones masivas de archivos—cambios de gran volumen antes de la sincronización con la nube.

### Modo 4: Caché completa
Caché agresiva—todos los archivos accedidos se almacenan en caché de forma permanente hasta que se borran manualmente. La más rápida para accesos repetidos, con la mayor huella en disco. Requiere gestión manual de la caché.

**Ideal para**: datos archivados, flujos de trabajo con mucha lectura, equipos con abundante espacio en disco.

## Configuración de la caché VFS en RcloneView

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView cloud-to-cloud transfer configuration" width="600" />

Abre RcloneView y navega a una configuración de montaje:

1. Selecciona tu remoto en la nube (por ejemplo, Google Drive)
2. Ve a **Configuración avanzada** → **Caché VFS**
3. Elige el modo de caché: Minimal, Writes o Full
4. Establece el directorio de caché (por defecto: `/tmp/rcloneview-cache` en Linux, `%TEMP%\rcloneview-cache` en Windows)
5. Configura el límite de tamaño de la caché (por ejemplo, 10 GB)—RcloneView elimina automáticamente los archivos antiguos cuando se supera
6. Activa el backend de caché si usas un SSD local para más velocidad

Aplica y vuelve a montar—el rendimiento mejora al instante.

## Buenas prácticas para el directorio de caché

- **Ubica la caché en almacenamiento rápido**: se prefiere SSD sobre HDD
- **Sepárala del sistema**: usa una partición dedicada para evitar llenar la unidad de tu sistema operativo
- **Monitorea el uso de disco**: revisa el tamaño de la caché regularmente; aumenta el límite si las eliminaciones son frecuentes
- **Limpia periódicamente**: borra cachés antiguas si dejas de usar un remoto (es seguro—la caché se reconstruye)

## Mejoras de rendimiento en el mundo real

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneView monitoring and performance tracking" width="600" />

Sin caché, listar una carpeta de 50 MB tarda de 2 a 3 segundos. Con caché mínima, es instantáneo en el segundo acceso. ¿Escribiendo en una unidad montada? Con la caché de escrituras activada, obtienes velocidades de disco local (milisegundos) en lugar de latencia de red (segundos).

Compensación: requiere de 5 a 50 GB de espacio en disco según tu flujo de trabajo. Para la mayoría de los usuarios, vale la pena.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Crea un nuevo montaje para tu almacenamiento en la nube.
3. En Configuración avanzada, activa la caché Minimal (empieza de forma conservadora).
4. Vuelve a montar y prueba—abre archivos, navega por carpetas, evalúa la mejora de velocidad.
5. Si tu flujo de trabajo implica muchas escrituras, actualiza al modo de caché Writes.
6. Monitorea la tasa de aciertos de caché en el panel de estadísticas; ajusta los límites de tamaño según sea necesario.

La caché VFS es una de las funciones ocultas más potentes de RcloneView—un pequeño ajuste, un enorme aumento de velocidad.

---

**Guías relacionadas:**

- [Montar almacenamiento en la nube como unidad local — Guía completa en RcloneView](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)
- [Solucionar transferencias lentas en la nube — Acelera la sincronización en RcloneView](https://rcloneview.com/support/blog/fix-slow-cloud-transfers-speed-rcloneview)
- [Remoto Alias — Crea atajos y rutas personalizadas en RcloneView](https://rcloneview.com/support/blog/alias-remote-shortcut-paths-rcloneview)

<CloudSupportGrid />
