---
slug: bisync-bidirectional-cloud-sync-rcloneview
title: "Bisync: sincronización bidireccional real en la nube con RcloneView"
authors:
  - tayson
description: "Usa la función bisync de rclone a través de RcloneView para mantener sincronizadas dos ubicaciones en la nube en ambas direcciones. Aprende cuándo usar bisync, cómo configurarlo y cómo manejar conflictos."
keywords:
  - bisync rcloneview
  - sincronización bidireccional en la nube rclone
  - guía de rclone bisync
  - sincronización en dos direcciones en la nube
  - sincronizar ambas direcciones en la nube
  - configuración de bisync en rcloneview
  - sincronización bidireccional de rclone
  - sincronización bidireccional de google drive
  - sincronización en dos vías de onedrive
  - espejo bidireccional de carpeta en la nube
tags:
  - RcloneView
  - sync
  - cloud-sync
  - feature
  - guide
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Bisync: sincronización bidireccional real en la nube con RcloneView

> El Sync estándar de rclone es unidireccional: hace que el destino coincida con el origen. Bisync va más allá: los cambios en cualquiera de las dos ubicaciones se propagan a la otra. Si añades un archivo en la Ubicación A, aparece en la Ubicación B, y viceversa. Así se configura en RcloneView.

La mayoría de los escenarios de sincronización en la nube son unidireccionales: una máquina local hace copia de seguridad en la nube, o una nube principal se refleja en una nube de respaldo. Pero algunos flujos de trabajo requieren una sincronización bidireccional real: una carpeta compartida que editan dos personas, un equipo de trabajo y uno del hogar que deben mantenerse sincronizados, o dos cuentas en la nube que actúan como iguales. El comando `bisync` de rclone ofrece esto, y RcloneView permite configurarlo sin usar la línea de comandos.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Sync frente a Bisync: ¿cuál es la diferencia?

| Comportamiento | rclone sync | rclone bisync |
|----------|------------|--------------|
| Dirección | Unidireccional (origen → destino) | Bidireccional (ambas direcciones) |
| Eliminaciones | Elimina del destino si falta en el origen | Propaga las eliminaciones en ambas direcciones |
| Conflictos | El origen siempre gana | Se requiere manejo explícito de conflictos |
| Riesgo de pérdida de datos | Posible si la dirección es incorrecta | Menor riesgo; se revisan ambos lados |
| Complejidad | Simple | Más compleja; requiere una configuración cuidadosa |

## Cuándo usar Bisync

**Usa bisync cuando:**
- Dos personas o sistemas contribuyen cambios a la misma carpeta.
- Editas archivos en varios dispositivos que no siempre pueden estar en línea al mismo tiempo.
- Mantienes dos cuentas en la nube como espejos activos con cambios provenientes de ambos lados.

**Usa la sincronización normal cuando:**
- Tienes un origen (fuente) principal claro y uno secundario.
- Solo un lado crea archivos nuevos; el otro es de solo lectura.
- La simplicidad y la previsibilidad son prioridades.

## Configuración de Bisync en RcloneView

Bisync requiere una inicialización única (resync) para establecer el estado de referencia antes de que cualquier ejecución posterior pueda rastrear cambios.

### Paso 1 — Agrega tus dos remotos

Asegúrate de que ambas ubicaciones estén configuradas como remotos en RcloneView. Por ejemplo:
- `gdrive-work:/Projects/Active/` (cuenta de trabajo de Google Drive)
- `onedrive-home:/Projects/Active/` (cuenta doméstica de OneDrive)

<img src="/support/images/en/blog/new-remote.png" alt="Configure remotes for bisync in RcloneView" class="img-large img-center" />

### Paso 2 — Ejecuta el resync inicial

La primera ejecución de bisync debe usar `--resync` para establecer la referencia. En el **Terminal** de RcloneView:

```bash
rclone bisync gdrive-work:/Projects/Active/ onedrive-home:/Projects/Active/ --resync --verbose
```

Esto crea los archivos de estado de referencia (almacenados en `~/.cache/rclone/bisync/`) que bisync usa para detectar cambios en ejecuciones posteriores. El resync hace que ambos lados sean idénticos copiando los archivos más recientes a cada lado.

### Paso 3 — Crea un trabajo de Bisync en RcloneView

1. Abre **Jobs** en RcloneView.
2. Selecciona **Custom Command** o usa el panel de Terminal.
3. Introduce el comando de bisync para las ejecuciones continuas:

```bash
rclone bisync gdrive-work:/Projects/Active/ onedrive-home:/Projects/Active/ --verbose --log-file /tmp/bisync.log
```

4. Guárdalo como un trabajo y programa su ejecución cada hora o diariamente.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule bisync job in RcloneView" class="img-large img-center" />

## Manejo de conflictos

Bisync detecta conflictos cuando un archivo se modifica en ambas ubicaciones entre ejecuciones. De forma predeterminada, rclone bisync marca estos conflictos y no sobrescribe ninguna de las dos versiones.

Añade `--conflict-resolve newer` para preferir automáticamente el archivo más reciente:

```bash
rclone bisync path1 path2 --conflict-resolve newer
```

O `--conflict-resolve larger` para preferir el archivo más grande (útil en escenarios de crecimiento de documentos).

Los archivos en conflicto que no se resuelven automáticamente se renombran con el sufijo `.conflict` para preservar ambas versiones.

## Indicadores comunes de Bisync

| Indicador | Propósito |
|------|---------|
| `--resync` | Inicializa o restablece la referencia (usar una sola vez) |
| `--conflict-resolve newer` | Resuelve conflictos automáticamente prefiriendo el archivo más reciente |
| `--filters-file /path/to/filters` | Aplica reglas de inclusión/exclusión |
| `--max-delete 10` | Aborta si se eliminarían más de 10 archivos (seguridad) |
| `--dry-run` | Muestra una vista previa de los cambios sin realizar ninguno |
| `--verbose` | Salida detallada para depuración |

El indicador `--max-delete` es especialmente importante: evita que bisync elimine accidentalmente una gran cantidad de archivos debido a una mala configuración.

## Monitoreo de las ejecuciones de Bisync

Revisa la salida de bisync en el **Job History** de RcloneView después de cada ejecución:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor bisync results in RcloneView" class="img-large img-center" />

Una ejecución de bisync saludable muestra:
- Archivos copiados de path1 a path2
- Archivos copiados de path2 a path1
- Cualquier conflicto detectado y cómo se resolvió
- Tiempo total y estadísticas de transferencia

## Limitaciones de Bisync

- **No es adecuado para ediciones simultáneas del mismo archivo**: bisync compara entre ejecuciones, no en tiempo real.
- **La propagación de eliminaciones puede ser peligrosa**: un archivo eliminado en un lado se eliminará en el otro después de la siguiente ejecución.
- **Requiere un estado estable entre ejecuciones**: si una ejecución falla a mitad de camino, vuelve a ejecutarla con `--resync` para reconstruir la referencia.
- **Las rutas grandes son más lentas**: la comparación de referencia escanea completamente ambas ubicaciones en cada ejecución.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Configura ambos remotos** en RcloneView.
3. **Ejecuta el `--resync` inicial** desde el terminal de RcloneView para establecer la referencia.
4. **Programa ejecuciones regulares de bisync** para la sincronización continua.

Bisync aporta una sincronización bidireccional real a cualquier par de remotos compatibles con rclone: discos locales, proveedores en la nube, recursos compartidos NAS y más.

---

**Guías relacionadas:**

- [Sync, Copy, Move: diferencias explicadas](https://rcloneview.com/support/blog/sync-copy-move-difference-explained-rcloneview)
- [Reglas de filtro y sincronización selectiva](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Evita la pérdida de datos por una dirección de sincronización incorrecta](https://rcloneview.com/support/blog/avoid-data-loss-wrong-sync-direction-rcloneview)

<CloudSupportGrid />
