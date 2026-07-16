---
slug: check-verify-cloud-file-integrity-rcloneview
title: "Verifica la integridad de archivos en la nube con las funciones Check y Compare de RcloneView"
authors:
  - tayson
description: "Usa las funciones de verificación y comparación de RcloneView para comprobar la integridad de archivos en la nube, detectar bit rot, validar checksums y confirmar migraciones exitosas entre proveedores."
keywords:
  - rclone check files
  - verificar integridad de archivos en la nube
  - rcloneview comparar carpetas
  - verificación de checksum en la nube
  - detectar bit rot en almacenamiento en la nube
  - verificación posterior a la migración
  - validación de archivos rclone
  - comparar origen destino en la nube
  - función check de rcloneview
  - herramienta de integridad de datos en la nube
tags:
  - feature
  - tips
  - best-practices
  - security
  - monitoring
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Verifica la integridad de archivos en la nube con las funciones Check y Compare de RcloneView

> Copiar archivos a la nube es solo la mitad del trabajo. Verificar que cada byte llegó intacto es lo que separa un flujo de trabajo confiable de uno meramente esperanzador.

Mover terabytes entre proveedores, ejecutar copias de seguridad nocturnas o archivar conjuntos de datos importantes comparten un riesgo común: la corrupción silenciosa. Un archivo puede aparecer presente en el destino y sin embargo diferir del origen debido a transferencias interrumpidas, errores del lado del proveedor o simple bit rot con el paso del tiempo. Rclone ofrece un comando dedicado, `check`, que compara archivo por archivo el origen y el destino, y RcloneView hace que ese proceso sea visual y accesible. Esta guía explica cuándo y cómo verificar tus archivos en la nube.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué importa la verificación de integridad de archivos

Los proveedores de nube replican datos internamente, pero ningún sistema es inmune a errores. Estos son los escenarios más comunes en los que la verificación detecta problemas reales:

- **Transferencias interrumpidas** -- una caída de red durante una copia grande puede dejar archivos parciales en el destino que, solo por el nombre, parecen completos.
- **Bit rot** -- los medios de almacenamiento pueden degradarse con el paso de meses o años, alterando bits en archivos que rara vez se acceden.
- **Errores del proveedor** -- errores ocasionales de la API pueden provocar cargas de cero bytes o escrituras truncadas que pasan sin generar un error.
- **Validación de migración** -- después de mover cientos de miles de archivos entre proveedores, necesitas una prueba de que nada se perdió ni se alteró.

Sin un paso de verificación, estos problemas pasan desapercibidos hasta que realmente necesitas el archivo.

## Cómo funciona Rclone Check

El comando `rclone check` compara una ruta de origen y una de destino e informa los archivos que difieren. Según los proveedores involucrados, usa uno de estos métodos:

| Método | Cómo funciona | Cuándo se usa |
|--------|-------------|-----------|
| **Verificación por hash** | Compara los checksums (MD5, SHA1, etc.) reportados por ambos proveedores | Ambos proveedores admiten un hash común |
| **Verificación por tamaño** | Compara solo el tamaño de los archivos | No hay ningún hash común disponible |
| **Verificación por descarga** | Descarga ambos archivos y los compara byte a byte | Se fuerza con el flag `--download` |

La verificación basada en hash es la más rápida y confiable cuando ambos proveedores la admiten. Google Drive, OneDrive, los proveedores compatibles con S3 y Backblaze B2 reportan hashes de archivo, aunque no siempre del mismo tipo.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView compare folders showing file differences" class="img-large img-center" />

## Uso de Compare en RcloneView

La función integrada **Compare** de RcloneView te ofrece una vista visual, lado a lado, de las carpetas de origen y destino:

1. Abre el panel **Explorer** y selecciona tu remoto de origen en un lado y el de destino en el otro.
2. Navega hasta las carpetas que deseas comparar.
3. Haz clic en **Compare** para ejecutar el análisis.
4. Revisa los resultados -- los archivos se codifican por color según su estado: coincidentes, solo en origen, solo en destino, o distintos.

Este enfoque visual es ideal para revisar carpetas específicas o comprobar resultados posteriores a una migración sin necesidad de memorizar la salida de la línea de comandos.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView two-pane explorer with source and destination" class="img-large img-center" />

## Ejecutar Rclone Check desde la terminal

Para un escaneo de integridad completo en todo un remoto, abre la **Terminal** en RcloneView y ejecuta:

```bash
rclone check source:path dest:path
```

Flags útiles que conviene conocer:

| Flag | Propósito |
|------|---------|
| `--size-only` | Comparar solo por tamaño, omitiendo la verificación por hash |
| `--download` | Forzar una comparación byte a byte descargando ambas copias |
| `--one-way` | Verificar únicamente que los archivos de origen existen en el destino (no al revés) |
| `--combined report.txt` | Escribir en un archivo un informe combinado de coincidencias y discrepancias |
| `--missing-on-src missing.txt` | Registrar archivos presentes en el destino pero ausentes en el origen |
| `--missing-on-dst missing.txt` | Registrar archivos presentes en el origen pero ausentes en el destino |
| `--error errors.txt` | Registrar los archivos que fallaron la verificación |

Ejemplo de una verificación exhaustiva posterior a una migración:

```bash
rclone check gdrive:/Archive s3-backup:archive-bucket --combined /tmp/check-report.txt
```

## Flujo de trabajo de verificación posterior a la migración

Después de migrar datos entre proveedores, sigue este flujo de trabajo para confirmar el éxito:

1. **Ejecuta una verificación unidireccional** de origen a destino para confirmar que llegaron todos los archivos de origen:
   ```bash
   rclone check source:path dest:path --one-way
   ```
2. **Revisa las discrepancias** -- cualquier diferencia reportada indica archivos que necesitan volver a copiarse.
3. **Vuelve a transferir los archivos fallidos** usando la copia o sincronización de RcloneView con `--ignore-existing` eliminado.
4. **Vuelve a ejecutar la verificación** para confirmar que todas las diferencias se han resuelto.
5. **Guarda el informe** con fines de auditoría usando el flag `--combined`.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing completed check operations" class="img-large img-center" />

## Detección de bit rot a lo largo del tiempo

Para archivos a largo plazo, programa verificaciones de integridad periódicas:

1. Crea un **Job** en RcloneView que ejecute `rclone check` sobre tu archivo.
2. Prográmalo semanal o mensualmente con el **Job Scheduler**.
3. Revisa el historial del job después de cada ejecución para detectar archivos recién corrompidos.

Esto es especialmente importante para los niveles de almacenamiento frío (S3 Glacier, archivos de Backblaze B2), donde los archivos se escriben una sola vez y se leen con poca frecuencia.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule periodic integrity check in RcloneView" class="img-large img-center" />

## Compatibilidad de checksums entre proveedores

No todos los proveedores admiten el mismo algoritmo de hash. Aquí tienes una referencia rápida:

| Proveedor | MD5 | SHA1 | Otro |
|----------|-----|------|-------|
| Google Drive | Sí | No | Quickxor disponible |
| OneDrive | No | No | QuickXorHash |
| Amazon S3 | Sí (ETag para partes únicas) | No | -- |
| Backblaze B2 | No | Sí | SHA1 nativo |
| Dropbox | No | No | Hash de contenido de Dropbox |
| SFTP/Local | Sí | Sí | Múltiples |

Cuando dos proveedores no comparten ningún hash común, rclone recurre a la comparación solo por tamaño. Usa `--download` para obtener certeza a nivel de byte en esos casos.

## Buenas prácticas

- **Verifica siempre después de migraciones grandes** -- que un comando de copia se ejecute con éxito no garantiza que todos los archivos estén intactos.
- **Usa informes con `--combined`** para crear un registro auditable de lo que coincidió y lo que no.
- **Programa verificaciones periódicas** para datos de archivo que permanecen sin tocar durante meses.
- **Prefiere las verificaciones por hash** frente a las de solo tamaño siempre que sea posible -- la corrupción con el mismo tamaño es rara, pero real.
- **Ejecuta sincronizaciones en modo dry-run** después de una verificación para corregir automáticamente cualquier discrepancia.

---

**Guías relacionadas:**

- [Transferencias y sincronización de nube a nube](https://rcloneview.com/support/blog/effortless-cloud-to-cloud-transfers-syncing)
- [Copia de seguridad incremental de Google Drive a Amazon S3](https://rcloneview.com/support/blog/incremental-backup-google-drive-to-amazon-s3)
- [Recuperar transferencias interrumpidas y fallidas](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)

<CloudSupportGrid />
