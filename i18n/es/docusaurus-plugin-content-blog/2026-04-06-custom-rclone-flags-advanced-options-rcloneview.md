---
slug: custom-rclone-flags-advanced-options-rcloneview
title: "Usa Flags Personalizados de Rclone y Opciones Avanzadas en los Trabajos de RcloneView"
authors:
  - tayson
description: "Aprende a añadir flags personalizados de rclone en RcloneView para el ajuste de rendimiento, la depuración y la configuración avanzada de trabajos. Cubre transfers, checkers, fast-list y más."
keywords:
  - rclone custom flags
  - rcloneview advanced options
  - rclone transfers flag
  - rclone fast-list performance
  - rclone checkers setting
  - rclone no-traverse flag
  - rclone size-only flag
  - rcloneview job configuration
  - rclone performance tuning
  - rclone debugging flags
tags:
  - feature
  - rclone
  - tips
  - cli
  - performance
  - best-practices
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Usa Flags Personalizados de Rclone y Opciones Avanzadas en los Trabajos de RcloneView

> RcloneView gestiona automáticamente los casos comunes, pero el verdadero poder de rclone está en sus flags. Saber cuáles añadir -- y dónde -- puede reducir a la mitad los tiempos de transferencia o resolver casos límite persistentes.

Rclone tiene cientos de flags de línea de comandos que controlan todo, desde el paralelismo de transferencia hasta el comportamiento de checksums y la lógica de reintentos. RcloneView ofrece una interfaz clara para las operaciones más comunes, pero también te permite inyectar flags personalizados en cualquier trabajo para situaciones en las que los valores predeterminados no son suficientes. Esta guía cubre los flags más útiles, cuándo usarlos y cómo configurarlos en RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Dónde Añadir Flags Personalizados en RcloneView

RcloneView admite flags personalizados en dos lugares:

1. **Configuración de trabajo** -- al crear o editar un trabajo (copy, sync, move), hay un campo para flags adicionales. Introdúcelos exactamente como lo harías en la línea de comandos.
2. **Terminal** -- para comandos puntuales, abre el panel de Terminal y escribe el comando completo de rclone con los flags que necesites.

Los flags añadidos a un trabajo guardado persisten entre ejecuciones, por lo que los configuras una vez y se aplican cada vez que el trabajo se ejecuta -- incluidas las ejecuciones programadas.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView job configuration with custom flags" class="img-large img-center" />

## Flags de Ajuste de Rendimiento

Estos flags impactan directamente la velocidad de transferencia y el uso de recursos.

### --transfers N

Controla cuántos archivos se transfieren en paralelo. El valor predeterminado es 4.

```bash
--transfers 16
```

Aumenta este valor para muchos archivos pequeños o cuando el proveedor admite alta concurrencia. S3, B2 y Wasabi manejan bien 16-32 transferencias en paralelo. Google Drive puede limitar por encima de 8-10.

### --checkers N

Controla cuántos archivos se verifican (comparan) en paralelo. El valor predeterminado es 8.

```bash
--checkers 32
```

Aumenta este valor al ejecutar operaciones de sync o check en directorios con muchos archivos. La fase de verificación suele ser el cuello de botella, no la transferencia.

### --fast-list

Utiliza menos llamadas a la API para listar directorios al solicitar todos los objetos en una sola petición. Notablemente más rápido para proveedores compatibles con S3 con buckets grandes.

```bash
--fast-list
```

Contrapartida: utiliza más memoria, ya que todo el listado se mantiene en memoria. En buckets con millones de objetos, esto puede consumir varios gigabytes de RAM.

### --no-traverse

Omite por completo el listado del destino. Útil al copiar unos pocos archivos a un destino con millones de archivos existentes.

```bash
--no-traverse
```

Sin este flag, rclone lista todo el destino para verificar archivos existentes. Si sabes que el destino es en su mayoría irrelevante (por ejemplo, copiar 10 archivos nuevos en un bucket con 5 millones de objetos), `--no-traverse` ahorra minutos de tiempo de listado.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView two-pane view for configuring transfer jobs" class="img-large img-center" />

### --buffer-size

Controla el búfer en memoria por transferencia de archivo. El valor predeterminado es 16 MiB.

```bash
--buffer-size 64M
```

Auméntalo para archivos grandes en conexiones de alto ancho de banda para reducir las esperas de E/S. Redúcelo si la memoria es limitada.

### --multi-thread-streams N

Número de streams para descargas multihilo de un solo archivo. El valor predeterminado es 4.

```bash
--multi-thread-streams 8
```

Ayuda al descargar archivos individuales grandes desde proveedores que admiten solicitudes de rango de bytes.

## Flags de Comparación y Comportamiento

Estos flags cambian cómo rclone decide qué transferir.

### --size-only

Compara archivos solo por tamaño, ignorando la fecha de modificación y los checksums.

```bash
--size-only
```

Úsalo cuando las marcas de tiempo no son fiables (común con algunos servidores SFTP) o cuando quieras la comparación más rápida posible a costa de pasar por alto cambios de igual tamaño.

### --ignore-existing

Omite los archivos que ya existen en el destino, independientemente del tamaño o la fecha.

```bash
--ignore-existing
```

Ideal para subidas incrementales en las que nunca modificas archivos existentes -- solo añades nuevos. Mucho más rápido que comparar cada archivo.

### --ignore-size

Compara archivos solo por fecha de modificación, ignorando el tamaño.

```bash
--ignore-size
```

Rara vez es necesario, pero útil con proveedores que reportan tamaños incorrectos para ciertos tipos de archivo.

### --update

Omite los archivos que son más recientes en el destino.

```bash
--update
```

Útil para flujos de trabajo de estilo bidireccional en los que solo quieres copiar archivos que son más antiguos en el destino.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folders with custom comparison flags" class="img-large img-center" />

## Flags de Reintentos y Fiabilidad

### --retries N

Número de reintentos para operaciones fallidas. El valor predeterminado es 3.

```bash
--retries 10
```

Auméntalo para redes poco fiables o proveedores con errores intermitentes.

### --retries-sleep DURATION

Tiempo de espera entre reintentos. El valor predeterminado es 0.

```bash
--retries-sleep 5s
```

Añade un retardo entre reintentos, útil cuando el proveedor limita la tasa de solicitudes.

### --low-level-retries N

Número de reintentos para operaciones de bajo nivel (solicitudes HTTP). El valor predeterminado es 10.

```bash
--low-level-retries 20
```

### --timeout DURATION

Tiempo de espera de inactividad de E/S. El valor predeterminado es 5m0s.

```bash
--timeout 10m
```

Auméntalo para conexiones muy lentas o proveedores con alta latencia.

## Flags de Depuración y Registro

Cuando un trabajo falla o se comporta de forma inesperada, estos flags ayudan a diagnosticar el problema.

### -v / -vv

Salida detallada y muy detallada.

```bash
-v
```

Muestra cada archivo a medida que se transfiere e información básica de progreso. Usa `-vv` para una salida de depuración detallada que incluye las solicitudes HTTP.

### --log-file PATH

Escribe los registros en un archivo en lugar de la consola.

```bash
--log-file /tmp/rclone-debug.log
```

### --log-level DEBUG

Establece el nivel de registro explícitamente.

```bash
--log-level DEBUG
```

Produce la salida más detallada. Úsalo al reportar problemas o investigar comportamientos inesperados.

### --dry-run

Simula la operación sin realizar ningún cambio.

```bash
--dry-run
```

Ejecuta siempre esto primero al probar una nueva combinación de flags para confirmar que hace lo que esperas.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor transfer with verbose logging in RcloneView" class="img-large img-center" />

## Configuración de Flags por Trabajo

RcloneView te permite guardar diferentes conjuntos de flags para diferentes trabajos. Algunas combinaciones prácticas:

**Sincronización de archivos grandes a S3:**
```
--transfers 8 --checkers 16 --fast-list --buffer-size 64M
```

**Copia de seguridad incremental de archivos pequeños:**
```
--transfers 32 --checkers 64 --ignore-existing --fast-list
```

**Sincronización cuidadosa con dry-run primero:**
```
--dry-run -v
```
Luego elimina `--dry-run` para la ejecución real.

**Depurar una transferencia fallida:**
```
-vv --log-file /tmp/debug.log --retries 1
```

## Flags a Evitar a Menos que Sepas lo que Haces

| Flag | Riesgo |
|------|------|
| `--delete-before` | Elimina los archivos del destino antes de transferir -- peligroso si la transferencia falla a mitad de camino |
| `--max-delete N` sin pruebas | Puede impedir la limpieza si se establece demasiado bajo |
| `--no-check-certificate` | Desactiva la verificación TLS -- riesgo de seguridad |
| `--ignore-checksum` | Omite la verificación de integridad -- anula el propósito de los checksums |

## Buenas Prácticas

- **Empieza con los valores predeterminados** -- los valores predeterminados de rclone son razonables para la mayoría de las cargas de trabajo. Añade flags solo cuando tengas un problema específico o un cuello de botella medible.
- **Prueba con --dry-run** antes de aplicar nuevos flags a los trabajos de producción.
- **Documenta tus flags** -- al guardar un trabajo con flags personalizados, anota por qué está ahí cada flag para que tú mismo (o tus compañeros) entiendan la intención en el futuro.
- **Compara antes y después** -- mide los tiempos de transferencia con y sin flags de rendimiento para confirmar que realmente ayudan en tu carga de trabajo.
- **Usa -v para trabajos de producción** -- la ligera sobrecarga vale la pena por la visibilidad de lo ocurrido durante cada ejecución.

---

**Guías relacionadas:**

- [Verifica la Integridad de Archivos en la Nube con Check y Compare](https://rcloneview.com/support/blog/check-verify-cloud-file-integrity-rcloneview)
- [Recupera Transferencias Interrumpidas y Fallidas](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)
- [Transferencias y Sincronización de Nube a Nube](https://rcloneview.com/support/blog/effortless-cloud-to-cloud-transfers-syncing)

<CloudSupportGrid />
