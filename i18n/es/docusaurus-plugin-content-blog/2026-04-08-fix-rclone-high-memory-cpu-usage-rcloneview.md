---
slug: fix-rclone-high-memory-cpu-usage-rcloneview
title: "Cómo solucionar el alto uso de memoria y CPU en las transferencias de rclone con RcloneView"
authors:
  - tayson
description: "Soluciona el alto uso de memoria y CPU de rclone durante las transferencias en la nube. Aprende a ajustar transfers, checkers, la caché VFS y los buffers usando la interfaz visual de RcloneView."
keywords:
  - rcloneview
  - rclone high memory usage
  - rclone cpu usage
  - rclone performance tuning
  - rclone transfers checkers
  - rclone vfs cache
  - rclone buffer size
  - cloud sync performance
  - rclone slow transfer
  - fix rclone memory
tags:
  - troubleshooting
  - performance
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cómo solucionar el alto uso de memoria y CPU en las transferencias de rclone con RcloneView

> ¿Las transferencias de rclone consumen toda tu RAM o mantienen tu CPU al 100%? **RcloneView** facilita identificar la causa y ajustar los parámetros de rendimiento sin necesidad de memorizar flags de línea de comandos.

Si has notado que tu sistema se ralentiza durante las transferencias en la nube, no estás solo. Rclone es potente, pero su configuración predeterminada o unas opciones mal configuradas pueden consumir recursos significativos del sistema, especialmente al trabajar con grandes cantidades de archivos, unidades montadas o transferencias en paralelo. Los síntomas son conocidos: los ventiladores se aceleran, las aplicaciones dejan de responder y las transferencias parecen usar más recursos de los que deberían.

La buena noticia es que la mayoría de estos escenarios de alto consumo tienen soluciones sencillas. Esta guía repasa las causas más comunes del uso excesivo de memoria y CPU en rclone y muestra cómo resolverlas usando las herramientas de configuración visual de RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Síntomas comunes

Antes de entrar en las soluciones, así es como suele verse el alto uso de recursos durante las operaciones de rclone:

- **Uso elevado de RAM**: el proceso de rclone consume 1 GB o más de memoria, a veces creciendo continuamente hasta agotar el sistema.
- **Picos de CPU**: uno o más núcleos de CPU al 100% durante las transferencias, especialmente al listar directorios grandes.
- **Sistema poco receptivo**: otras aplicaciones se congelan o van lentas mientras rclone se ejecuta.
- **Fallos en las transferencias**: errores de falta de memoria que hacen que las transferencias se interrumpan inesperadamente.
- **Rendimiento lento**: paradójicamente, demasiadas operaciones en paralelo pueden ralentizarlo todo debido a la contención de recursos.

## Demasiadas transferencias y verificaciones simultáneas

La causa más común del alto uso de recursos es ejecutar demasiadas transferencias y verificaciones (checkers) en paralelo. Rclone usa por defecto 4 transfers y 8 checkers, pero los usuarios suelen aumentar estos números pensando que acelerará el proceso. Ejecutar 32 o 64 transferencias simultáneas puede saturar tanto tu sistema como tu conexión de red.

**Cómo solucionarlo en RcloneView:**

Al crear o editar un trabajo de sincronización, establece el flag `--transfers` en un valor razonable. Empieza con 4 y auméntalo solo si tu ancho de banda y tu sistema pueden soportarlo. Establece `--checkers` en 8 o menos. Para la mayoría de conexiones domésticas, entre 2 y 4 transfers y entre 4 y 8 checkers logran el equilibrio adecuado entre velocidad y consumo de recursos.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

## Listas de archivos grandes y escaneo de directorios

Cuando rclone escanea directorios con cientos de miles o millones de archivos, crea una lista en memoria de cada archivo y sus metadatos. Esto puede consumir varios gigabytes de RAM en directorios muy grandes.

**Cómo solucionarlo:**

- Usa `--fast-list` donde esté disponible. Este flag obtiene los listados de directorios en menos llamadas a la API, lo que puede reducir el uso de memoria para algunos proveedores (como S3) mientras lo aumenta para otros. Pruébalo con tu proveedor específico.
- Divide los trabajos de sincronización grandes en fragmentos más pequeños, apuntando a subdirectorios específicos en lugar de sincronizar toda una cuenta en la nube de una sola vez.
- Usa reglas de filtro (`--include`, `--exclude`) para limitar el alcance de cada operación de sincronización. Menos archivos que listar significa menos memoria consumida.

## Sobrecarga de la caché VFS en unidades montadas

Si estás montando almacenamiento en la nube como una unidad local, la caché VFS (Virtual File System) puede crecer considerablemente. Por defecto, rclone puede almacenar en caché grandes cantidades de datos para ofrecer un rendimiento de lectura/escritura fluido en unidades montadas. Con el tiempo, esta caché puede consumir un espacio en disco y memoria considerable.

**Cómo solucionarlo:**

- Establece `--vfs-cache-max-size` en un límite razonable, como `1G` o `5G`, según los recursos disponibles.
- Establece `--vfs-cache-max-age` para limpiar automáticamente los archivos en caché antiguos. Un valor como `1h` o `4h` funciona bien para la mayoría de los flujos de trabajo.
- Elige el `--vfs-cache-mode` adecuado. Usa `minimal` o `writes` en lugar de `full` si solo necesitas acceso de lectura o escrituras ocasionales. El modo de caché completo almacena en caché archivos enteros antes de que estén accesibles, lo que consume la mayor cantidad de memoria y disco.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />

## Configuración incorrecta del tamaño de buffer

El flag `--buffer-size` controla cuánta memoria asigna rclone por archivo para el almacenamiento en búfer durante las transferencias. El valor predeterminado es 16 MB por transferencia. Si estás ejecutando 16 transferencias simultáneas, eso equivale a 256 MB solo en memoria de buffer. Aumentar `--buffer-size` a 256 MB con 16 transfers consumiría 4 GB solo en buffers.

**Cómo solucionarlo:**

- Mantén `--buffer-size` en el valor predeterminado `16M` a menos que tengas un motivo específico para aumentarlo.
- Si lo aumentaste para transferencias de archivos grandes, reduce `--transfers` proporcionalmente para mantenerte dentro de tu RAM disponible.
- Para sistemas con RAM limitada (4 GB o menos), considera reducir `--buffer-size` a `8M` o incluso `4M`.

## Sobrecarga de montaje y operaciones FUSE

Las unidades montadas añaden sobrecarga de CPU porque cada operación de archivo (abrir, leer, escribir, stat) pasa por la capa FUSE y desencadena llamadas a la API. Las aplicaciones que escanean directorios de forma agresiva -- como el software antivirus, los generadores de miniaturas o los indexadores de búsqueda -- pueden provocar un uso continuo de CPU y de la API en las unidades montadas.

**Cómo solucionarlo:**

- Excluye las rutas de las unidades montadas del escaneo antivirus.
- Desactiva la generación de miniaturas para las unidades montadas en la configuración de tu explorador de archivos.
- Usa `--dir-cache-time` para aumentar la duración de la caché de los listados de directorios (por ejemplo, `5m` o `30m`), reduciendo las llamadas repetidas a la API.
- Establece `--attr-timeout` para almacenar en caché los atributos de archivo durante más tiempo, lo que reduce las llamadas stat.
- Si solo necesitas leer archivos, usa `--read-only` para evitar la sobrecarga relacionada con la escritura.

## Monitoreo del uso de recursos en RcloneView

RcloneView ofrece monitoreo de transferencias en tiempo real que te ayuda a identificar cuándo se están consumiendo recursos en exceso. Durante una transferencia activa, puedes observar las velocidades de transferencia, el número de archivos y el progreso general. Si las velocidades caen o la interfaz se vuelve lenta, es una señal para reducir el paralelismo.

Usa la vista de historial de trabajos para revisar transferencias anteriores e identificar patrones. Si ciertos trabajos tardan constantemente más o fallan, son candidatos para ajustar su configuración.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

## Referencia rápida: configuraciones recomendadas

| Configuración | Sistema de recursos bajos | Sistema estándar | Alto rendimiento |
|---|---|---|---|
| `--transfers` | 2 | 4 | 8-16 |
| `--checkers` | 4 | 8 | 16 |
| `--buffer-size` | 4M | 16M | 32M |
| `--vfs-cache-max-size` | 512M | 2G | 10G |
| `--vfs-cache-mode` | minimal | writes | full |

Ajusta estos valores según tu RAM disponible, tus núcleos de CPU y tu ancho de banda de internet. Empieza de forma conservadora y aumenta gradualmente.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abre un trabajo de sincronización existente o crea uno nuevo, y revisa la configuración de transfers y checkers.
3. Reduce `--transfers` y `--checkers` si tu sistema tiene dificultades durante las transferencias.
4. Para las unidades montadas, configura los límites de la caché VFS para evitar un crecimiento de memoria sin límites.

Pequeños ajustes en el paralelismo y en la configuración de la caché pueden mejorar drásticamente la capacidad de respuesta del sistema sin afectar de forma significativa a la velocidad de transferencia.

---

**Guías relacionadas:**

- [Explorar y gestionar el almacenamiento remoto](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Monitoreo de transferencias en tiempo real](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [Montar almacenamiento en la nube como unidad local](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

<CloudSupportGrid />
