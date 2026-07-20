---
slug: backup-dir-versioned-sync-rcloneview
title: "Usa Backup Dir para sincronización en la nube con versiones en RcloneView"
authors:
  - tayson
description: "Aprende a usar --backup-dir en RcloneView para crear sincronizaciones en la nube con control de versiones. Mantén a salvo las versiones anteriores de tus archivos moviendo los archivos sobrescritos a un directorio de copia de seguridad."
keywords:
  - rcloneview
  - backup-dir
  - sincronización con versiones
  - control de versiones de copias de seguridad en la nube
  - directorio de copia de seguridad de rclone
  - sincronización segura en la nube
  - historial de versiones de archivos
  - recuperación de archivos en la nube
  - sincronización con copia de seguridad
  - sufijo de rclone
tags:
  - RcloneView
  - feature
  - cloud-sync
  - backup
  - guide
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Usa Backup Dir para sincronización en la nube con versiones en RcloneView

> Sobrescribir o eliminar archivos accidentalmente durante una sincronización es la pesadilla de todo usuario de la nube. **RcloneView** facilita las sincronizaciones con control de versiones gracias al soporte integrado de `--backup-dir`, garantizando que nunca vuelvas a perder una versión anterior.

Cuando ejecutas una operación de sincronización estándar, los archivos en el destino que difieren de los del origen se sobrescriben, y los archivos que ya no existen en el origen se eliminan. Esto es eficiente, pero también destructivo. Si un archivo se corrompió en el origen, o si accidentalmente eliminaste algo que aún necesitabas, esos cambios se propagan al destino sin posibilidad de retroceder.

La bandera `--backup-dir` resuelve este problema de forma elegante. En lugar de eliminar permanentemente los archivos sobrescritos o borrados, rclone los mueve primero a un directorio de copia de seguridad independiente. Esto te ofrece una red de seguridad completa: cada archivo que se habría perdido queda preservado en una ubicación que tú controlas.

RcloneView te permite configurar `--backup-dir` a través de su interfaz de banderas personalizadas, de modo que obtienes todo el poder de las sincronizaciones con versiones sin necesidad de memorizar la sintaxis de línea de comandos. Combinado con `--suffix` para versiones con fecha, puedes construir un sistema ligero de control de versiones de archivos usando únicamente tu almacenamiento en la nube existente.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Qué hace realmente --backup-dir

Cuando una operación de sincronización encuentra un archivo en el destino que necesita ser sobrescrito o eliminado, `--backup-dir` intercepta esa acción. En lugar de destruir el archivo, rclone lo mueve al directorio de copia de seguridad especificado, preservando su estructura de ruta relativa.

Por ejemplo, si tu sincronización sobrescribe `documents/report.docx` en el destino, la versión antigua se mueve a `backup/documents/report.docx`. La jerarquía de directorios se mantiene, lo que facilita localizar y restaurar archivos específicos más adelante.

Esto se aplica a dos escenarios:
- **Archivos sobrescritos**: cuando un archivo de origen es más reciente o diferente, la copia antigua del destino se mueve al directorio de copia de seguridad antes de que la nueva versión la reemplace.
- **Archivos eliminados**: cuando un archivo existe en el destino pero no en el origen, se mueve al directorio de copia de seguridad en lugar de eliminarse permanentemente.

## Por qué las sincronizaciones con versiones son esenciales

Las operaciones de sincronización estándar asumen que siempre quieres que el destino refleje exactamente el origen. Eso funciona bien hasta que algo sale mal. Considera estos escenarios comunes:

- Un archivo se corrompe o se infecta con ransomware en el origen, y la corrupción se propaga a tu copia de seguridad antes de que te des cuenta.
- Eliminas accidentalmente una carpeta, y la siguiente sincronización programada también la elimina del destino.
- Un colega sobrescribe un documento compartido, y la versión anterior desaparece de ambas ubicaciones.

Con `--backup-dir`, cada una de estas situaciones es recuperable. Las versiones anteriores permanecen a salvo en tu directorio de copia de seguridad, sin verse afectadas por operaciones de sincronización posteriores.

## Configurar --backup-dir en RcloneView

RcloneView admite banderas personalizadas de rclone en la configuración de sus trabajos. Así es como se configura una sincronización con versiones:

1. Abre el **Job Manager** y crea un nuevo trabajo de sincronización o edita uno existente.
2. Configura tus remotos de origen y destino como de costumbre.
3. En la sección **Custom Flags**, añade: `--backup-dir remote:backup/2026-04-08`
4. Guarda y ejecuta el trabajo.

El directorio de copia de seguridad puede estar en el mismo remoto que el destino o en un remoto completamente diferente. Usar una ruta basada en fechas como `backup/2026-04-08` mantiene organizados los archivos desplazados de cada día en su propia carpeta.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

## Combinar --backup-dir con --suffix para versiones con fecha

Para una versión aún más granular, combina `--backup-dir` con `--suffix` para añadir una marca de tiempo a cada archivo respaldado. Esto evita colisiones de nombres de archivo cuando el mismo archivo se modifica y sincroniza varias veces.

Añade ambas banderas en la sección de banderas personalizadas:

```
--backup-dir remote:backup --suffix .2026-04-08
```

Con esta configuración, si `report.docx` se sobrescribe, la versión antigua se guarda como `backup/report.docx.2026-04-08`. Ejecuta la sincronización nuevamente al día siguiente con un sufijo actualizado, y acumularás un historial de versiones fechadas sin ningún conflicto.

Para trabajos automatizados que se ejecutan según una programación, puedes usar sufijos dinámicos vinculados a la fecha de ejecución, asegurando que cada ejecución cree copias de seguridad con nombres únicos.

## Ejemplos prácticos

**Copia de seguridad diaria con retención de versiones:**
Sincroniza tu Google Drive con Backblaze B2 cada noche, con los archivos desplazados de cada día almacenados en una carpeta de copia de seguridad con fecha. Después de 30 días, puedes limpiar los directorios de copia de seguridad antiguos para gestionar los costes de almacenamiento.

**Protección de proyectos de equipo:**
Sincroniza una carpeta compartida de Dropbox con S3, usando `--backup-dir` para capturar cualquier archivo que los miembros del equipo eliminen o sobrescriban. Esto actúa como un rastro de auditoría ligero sin necesidad de funciones de control de versiones premium de tu proveedor de la nube.

**Red de seguridad para migraciones:**
Al migrar de una nube a otra, usa `--backup-dir` durante la sincronización inicial para capturar cualquier archivo del destino que se sobrescribiría. Si la migración no sale según lo planeado, tendrás un punto de restauración completo.

## Flujo de recuperación

Restaurar archivos desde tu directorio de copia de seguridad es sencillo en RcloneView:

1. Abre el **Remote Explorer** y navega hasta tu directorio de copia de seguridad.
2. Explora la estructura de directorios para encontrar el archivo que necesitas. La jerarquía de carpetas original se conserva.
3. Usa arrastrar y soltar o una operación de copia para mover el archivo de vuelta a su ubicación original.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

Dado que los directorios de copia de seguridad son solo carpetas normales en tu remoto, también puedes explorarlos, descargar archivos, o incluso sincronizarlos a otra ubicación con fines de archivo.

## Gestión del almacenamiento de copias de seguridad a lo largo del tiempo

Las copias de seguridad con versiones se acumulan con el tiempo, por lo que es importante contar con una estrategia de retención. Aquí tienes algunos enfoques:

- **Carpetas basadas en fechas**: usa una ruta de directorio de copia de seguridad con fecha (por ejemplo, `backup/2026-04-08`) y elimina periódicamente las carpetas más antiguas que tu ventana de retención.
- **Limpieza basada en sufijos**: al usar `--suffix`, puedes identificar y eliminar archivos con sufijos de fecha antiguos.
- **Almacenamiento independiente de bajo coste**: dirige tu directorio de copia de seguridad a un proveedor de almacenamiento de objetos económico como Wasabi o Backblaze B2, donde los costes de retención a largo plazo son mínimos.

El Explorer de RcloneView facilita explorar los directorios de copia de seguridad y eliminar versiones obsoletas cuando estés listo para recuperar espacio.

## Buenas prácticas para --backup-dir

- Prueba siempre tu configuración de `--backup-dir` con una ejecución en seco (dry run) primero para confirmar que los archivos se están dirigiendo a la ubicación correcta.
- Mantén el directorio de copia de seguridad en el mismo remoto que el destino cuando sea posible, ya que los movimientos dentro del mismo remoto son instantáneos y no consumen ancho de banda.
- Usa convenciones de nomenclatura consistentes para tus rutas de copia de seguridad para que los scripts de limpieza automatizados puedan identificar fácilmente las versiones antiguas.
- Combina `--backup-dir` con `--backup-dir` en un remoto diferente para datos críticos, obteniendo así tanto una copia de seguridad local de recuperación rápida como un archivo geográficamente separado.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Crea un trabajo de sincronización con tus remotos de origen y destino configurados.
3. Añade `--backup-dir remote:backup/YYYY-MM-DD` en el campo de banderas personalizadas para habilitar las sincronizaciones con versiones.
4. Ejecuta primero una prueba en seco para verificar la configuración, y luego ejecuta el trabajo.

Con `--backup-dir` configurado, cada operación de sincronización se convierte en un proceso seguro y reversible. Obtienes la eficiencia de una sincronización unidireccional con la tranquilidad de que nada se pierde jamás de forma permanente.

---

**Guías relacionadas:**

- [Explorar y gestionar el almacenamiento remoto](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Crear trabajos de sincronización](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Ejecutar y gestionar trabajos](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)

<CloudSupportGrid />
