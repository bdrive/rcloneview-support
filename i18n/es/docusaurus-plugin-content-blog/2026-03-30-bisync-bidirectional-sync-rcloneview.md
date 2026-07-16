---
slug: bisync-bidirectional-sync-rcloneview
title: "Bisync bidireccional — Sincronización en la nube en dos sentidos en RcloneView"
authors:
  - tayson
description: "Aprende a usar la sincronización bidireccional bisync de RcloneView para mantener los archivos locales y en la nube sincronizados en ambos sentidos en múltiples dispositivos y proveedores."
keywords:
  - bisync rcloneview
  - sincronización bidireccional
  - sincronización en la nube en dos sentidos
  - rclone bisync
  - sincronización de archivos en la nube
  - sincronización de archivos en dos sentidos
  - configuración de bisync
  - sincronización rcloneview
  - sincronización multidispositivo
  - copia de seguridad bidireccional
tags:
  - feature
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Bisync bidireccional — Sincronización en la nube en dos sentidos en RcloneView

> Bisync propaga los cambios en ambas direcciones, manteniendo tus archivos locales y el almacenamiento en la nube perfectamente reflejados sin sobrescribir ningún lado.

Las operaciones de sincronización estándar son unidireccionales: hacen que el destino coincida con el origen, eliminando en el destino todo lo que no exista en el origen. Bisync funciona de otra manera. Registra los cambios en ambos lados desde la última ejecución y propaga adiciones, modificaciones y eliminaciones en ambas direcciones. RcloneView expone la función bisync de rclone a través de su interfaz gráfica, haciendo que la sincronización bidireccional en la nube sea accesible sin necesidad de escribir scripts de línea de comandos.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cómo funciona Bisync

El comando bisync de rclone mantiene un par de archivos de listado que registran el estado tanto del origen (Path1) como del destino (Path2) después de cada ejecución exitosa. En las ejecuciones posteriores, bisync compara el estado actual de cada lado con su listado almacenado para determinar qué cambió. Los archivos nuevos en Path1 se copian a Path2, los archivos nuevos en Path2 se copian a Path1, y las eliminaciones se reflejan en ambas direcciones.

La detección de conflictos está integrada. Si el mismo archivo se modifica en ambos lados entre ejecuciones, bisync lo marca como un conflicto en lugar de sobrescribir silenciosamente una versión. El comportamiento predeterminado renombra la copia en conflicto, preservando ambas versiones para que puedas resolver la diferencia manualmente. Esto es fundamental para flujos de trabajo compartidos donde varios usuarios o dispositivos pueden editar el mismo documento.

La primera ejecución de bisync requiere el indicador `--resync` para establecer los listados de referencia iniciales. RcloneView gestiona esto automáticamente cuando creas un nuevo trabajo de bisync: la ejecución inicial realiza un resync, y todas las ejecuciones programadas posteriores operan en modo delta normal.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Bisync bidirectional transfer configuration in RcloneView" class="img-large img-center" />

## Configurar Bisync en RcloneView

Para crear un trabajo de bisync en RcloneView, abre el administrador de trabajos y selecciona bisync como tipo de operación. Elige tus dos rutas — por ejemplo, un directorio local como `/home/user/Documents` como Path1 y una carpeta de Google Drive como Path2. También puedes hacer bisync entre dos remotos en la nube, como mantener una carpeta de Dropbox reflejada en OneDrive.

Las reglas de filtro funcionan con bisync igual que con la sincronización estándar. Usa patrones de inclusión y exclusión para limitar bisync a tipos de archivo o subdirectorios específicos. Por ejemplo, podrías hacer bisync solo de archivos `*.docx` y `*.xlsx` entre una carpeta de proyecto local y un directorio compartido de OneDrive, ignorando archivos temporales y metadatos del sistema operativo.

El programador de trabajos de RcloneView admite ejecutar bisync a intervalos regulares — cada 15 minutos, cada hora, o con una programación cron personalizada. Los intervalos frecuentes minimizan la ventana para conflictos y garantizan una sincronización casi en tiempo real entre tu máquina local y el almacenamiento en la nube.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a bisync job from the RcloneView job manager" class="img-large img-center" />

## Casos de uso prácticos para Bisync

**Sincronización de documentos multidispositivo:** Mantén una carpeta de documentos de trabajo sincronizada entre tu escritorio y el almacenamiento en la nube. Cuando editas un archivo en tu portátil (que se sincroniza con la misma carpeta en la nube mediante su propio trabajo bisync), los cambios se propagan a todos los dispositivos conectados en la siguiente ejecución.

**Carpetas de proyectos colaborativos:** Los equipos que comparten una carpeta de almacenamiento en la nube pueden usar bisync para mantener copias de trabajo locales. Los cambios locales de cada miembro del equipo se envían a la nube, y los cambios remotos de los colegas se descargan automáticamente. La detección de conflictos garantiza que las ediciones simultáneas no se sobrescriban silenciosamente entre sí.

**Flujos de trabajo híbridos entre local y la nube:** Los desarrolladores o diseñadores que necesitan acceso rápido a archivos locales pero también quieren copia de seguridad en la nube pueden hacer bisync de sus directorios de proyecto. Las operaciones de archivos locales siguen siendo instantáneas, mientras que la copia en la nube permanece actualizada para fines de copia de seguridad y compartición.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring bisync job in RcloneView" class="img-large img-center" />

## Buenas prácticas de Bisync

Ejecuta bisync con una programación constante para minimizar los conflictos. Cuanto mayor sea el intervalo entre ejecuciones, mayor será la probabilidad de ediciones en conflicto. Para directorios de trabajo activos, un intervalo de 15 a 30 minutos logra un buen equilibrio entre capacidad de respuesta y uso de recursos. Evita ejecutar bisync en árboles de directorios extremadamente grandes sin filtros, ya que la comparación de listados puede llevar mucho tiempo. Usa el historial de trabajos de RcloneView para monitorear conflictos recurrentes y ajustar tu flujo de trabajo en consecuencia.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Bisync job history showing completed two-way synchronization runs" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Configura tus remotos de origen y destino (carpeta local, Google Drive, OneDrive, etc.).
3. Crea un nuevo trabajo de bisync en el administrador de trabajos y ejecuta el resync inicial.
4. Programa el trabajo de bisync para que se ejecute en el intervalo que prefieras para una sincronización bidireccional continua.

Bisync en RcloneView aporta una verdadera sincronización bidireccional en la nube a tu escritorio sin scripts, tareas cron ni complejidad de línea de comandos.

---

**Guías relacionadas:**

- [Sincronizar, copiar, mover — Diferencia explicada en RcloneView](https://rcloneview.com/support/blog/sync-copy-move-difference-explained-rcloneview)
- [Reglas de filtro y sincronización selectiva en RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [RcloneView vs Syncthing — Comparación](https://rcloneview.com/support/blog/rcloneview-vs-syncthing-comparison)

<CloudSupportGrid />
