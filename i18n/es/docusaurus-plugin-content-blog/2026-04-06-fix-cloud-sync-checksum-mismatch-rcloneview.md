---
slug: fix-cloud-sync-checksum-mismatch-rcloneview
title: "Solucionar errores de discrepancia de checksum en la sincronización en la nube en RcloneView"
authors:
  - tayson
description: "Resuelve los errores de discrepancia de checksum durante la sincronización en la nube en RcloneView. Aprende cómo rclone gestiona los checksums, las diferencias de hash entre proveedores y cuándo usar --ignore-checksum."
keywords:
  - rclone checksum mismatch
  - cloud sync checksum error
  - rclone hash mismatch fix
  - rcloneview checksum error
  - rclone ignore checksum
  - md5 sha1 cloud storage hash
  - rclone data integrity check
  - fix sync mismatch rclone
  - cloud provider hash comparison
  - rclone checksum verification
tags:
  - troubleshooting
  - tips
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar errores de discrepancia de checksum en la sincronización en la nube en RcloneView

> Las discrepancias de checksum durante la sincronización en la nube suelen significar que el origen y el destino usan algoritmos de hash diferentes, no que tus datos estén corruptos. A continuación te explicamos cómo diagnosticarlas y resolverlas.

Cuando rclone sincroniza archivos entre proveedores en la nube, compara los checksums para verificar que los datos transferidos coincidan con el original. Si el proveedor de origen y el de destino usan algoritmos de hash diferentes, o si uno de ellos no devuelve checksums en absoluto, rclone puede reportar una discrepancia o volver a transferir archivos innecesariamente. Esta guía explica qué está ocurriendo y cómo solucionarlo en RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Qué significan las discrepancias de checksum

Un checksum (o hash) es una cadena de longitud fija calculada a partir del contenido de un archivo. Si dos archivos producen el mismo checksum, son idénticos. Rclone usa los checksums para:

- **Verificar cargas** — confirmar que el archivo de destino coincide con el origen después de la transferencia.
- **Detectar cambios** — durante la sincronización, omitir archivos cuyo checksum y tamaño no hayan cambiado.
- **Garantizar la integridad** — señalar corrupción si el hash de un archivo no coincide con lo esperado.

Una discrepancia significa que el hash calculado en un lado no coincide con el otro. Esto puede indicar corrupción real de datos, pero con más frecuencia refleja una **incompatibilidad de algoritmo de hash** entre proveedores.

## Diferencias de hash específicas de cada proveedor

Diferentes proveedores en la nube admiten distintos algoritmos de hash:

| Proveedor | Hashes admitidos |
|----------|-----------------|
| **Disco local** | MD5, SHA-1, SHA-256 (depende del SO) |
| **Google Drive** | MD5 |
| **OneDrive** | SHA-1, QuickXorHash |
| **Dropbox** | Hash de contenido de Dropbox (personalizado) |
| **Amazon S3** | MD5 (ETag, pero no para cargas multiparte) |
| **Backblaze B2** | SHA-1 |
| **Azure Blob** | MD5 |
| **SFTP** | MD5, SHA-1 (si el servidor lo admite) |
| **Wasabi** | MD5 (ETag) |
| **Cloudflare R2** | MD5 (ETag) |

Al sincronizar entre proveedores que comparten un hash común (por ejemplo, Google Drive MD5 a Azure Blob MD5), los checksums funcionan sin problemas. Cuando no hay un hash común (por ejemplo, Google Drive MD5 frente a OneDrive QuickXorHash), rclone no puede comparar los checksums directamente.

## Cómo gestiona rclone los hashes no coincidentes

Rclone es inteligente en las comparaciones de hash:

1. **Se encuentra un hash común** — rclone usa el algoritmo compartido para comparar los archivos. Sin problemas.
2. **No hay hash común** — rclone recurre a comparar el tamaño del archivo y la fecha de modificación. Los archivos con tamaño y fecha coincidentes se consideran idénticos.
3. **Marca `--checksum` activada** — rclone usa únicamente checksums (sin comparación de fecha). Si no existe un hash común, rclone volverá a transferir todos los archivos porque no puede confirmar que coincidan.

Este tercer escenario es la causa más común de comportamiento inesperado: activar `--checksum` entre proveedores incompatibles obliga a retransferencias innecesarias.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folders in RcloneView to identify mismatched files" class="img-large img-center" />

## Escenarios de error comunes

### Escenario 1: Discrepancia de ETag en cargas multiparte de S3

Cuando subes un archivo grande a S3 usando carga multiparte, el ETag resultante no es un simple hash MD5, sino un hash compuesto de las partes. El MD5 local de rclone del archivo no coincidirá con el ETag de S3, lo que provoca una discrepancia en la siguiente sincronización.

**Solución:** este es el comportamiento esperado. Rclone lo gestiona almacenando el hash esperado en los metadatos cuando es posible. Si observas retransferencias de archivos grandes, puedes usar `--ignore-checksum` de forma segura para ese trabajo de sincronización en concreto.

### Escenario 2: Sincronización de Google Drive a OneDrive

Google Drive usa MD5 mientras que OneDrive usa QuickXorHash. No hay ningún algoritmo de hash en común.

**Solución:** rclone recurre automáticamente al tamaño más la fecha de modificación. No uses `--checksum` para esta combinación, o se volverán a transferir todos los archivos.

### Escenario 3: Remotos cifrados (Crypt)

Cuando usas rclone crypt, el archivo cifrado tiene un hash diferente al del origen en texto plano. Rclone gestiona esto internamente, pero si comparas el hash del remoto crypt con el hash del proveedor original, nunca coincidirán.

**Solución:** compara siempre los archivos a través de la capa del remoto crypt, no observando directamente el almacenamiento cifrado subyacente.

## Configurar el comportamiento de checksum en RcloneView

### Uso de la marca --checksum

La marca `--checksum` indica a rclone que use únicamente checksums (no la fecha de modificación) para determinar si es necesario transferir los archivos. Actívala cuando:

- Tanto el origen como el destino admitan el mismo algoritmo de hash.
- Quieras la garantía de integridad más fuerte.
- Estés sincronizando entre un disco local y un proveedor que admita MD5.

No la uses cuando:

- El origen y el destino no tengan un hash común: obligará a retransferir todos los archivos.
- Estés sincronizando archivos grandes a S3 (los ETags multiparte no coincidirán).

### Uso de la marca --ignore-checksum

La marca `--ignore-checksum` omite toda la verificación de checksum. Úsala cuando:

- Hayas confirmado que los datos son correctos pero los checksums nunca coincidirán (por ejemplo, ETags multiparte de S3).
- Quieras una sincronización más rápida omitiendo el cálculo de hash en conjuntos de datos muy grandes.
- Un proveedor devuelva hashes inconsistentes o incorrectos (poco común, pero posible).

No la uses como opción predeterminada: los checksums existen para detectar corrupción real.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configure sync job flags in RcloneView before execution" class="img-large img-center" />

## Verificar la integridad de los datos

Si sospechas que hay corrupción real en lugar de una discrepancia de algoritmo de hash:

1. **Ejecuta `rclone check`** — esto compara los archivos de origen y destino e informa de cualquier diferencia. En RcloneView, puedes usar la vista de comparación de carpetas.
2. **Descarga y compara localmente** — descarga el archivo tanto del origen como del destino, y luego calcula los checksums locales con `md5sum` o `sha256sum`.
3. **Revisa los registros de transferencia** — revisa el historial de trabajos de RcloneView en busca de errores durante la transferencia original.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor transfer progress and verify checksums in RcloneView" class="img-large img-center" />

## Referencia rápida: matriz de compatibilidad de hash

| Dirección de sincronización | Hash común | ¿Marca de checksum segura? |
|---------------|-------------|-------------------|
| Local a Google Drive | MD5 | Sí |
| Local a OneDrive | SHA-1 | Sí |
| Local a S3 (archivos pequeños) | MD5 | Sí |
| Local a S3 (multiparte) | Ninguno (el ETag difiere) | No |
| Google Drive a OneDrive | Ninguno | No |
| Google Drive a S3 | MD5 | Sí (archivos pequeños) |
| S3 a Backblaze B2 | Ninguno (MD5 frente a SHA-1) | No |
| S3 a Azure Blob | MD5 | Sí (archivos pequeños) |

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Comprueba el soporte de hash de tus proveedores** usando la tabla anterior.
3. **Evita `--checksum` entre proveedores incompatibles** para prevenir retransferencias innecesarias.
4. **Usa la comparación de carpetas** en RcloneView para verificar visualmente los resultados de la sincronización.

La mayoría de los errores de discrepancia de checksum no son corrupción de datos, sino incompatibilidades de algoritmo de hash entre proveedores. Comprender qué hashes admite cada proveedor es la clave para resolver estos problemas rápidamente.

---

**Guías relacionadas:**

- [Solucionar errores de rclone en RcloneView](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [Solucionar errores de acceso denegado en S3](https://rcloneview.com/support/blog/fix-s3-access-denied-permission-errors-rcloneview)
- [Solucionar errores de sincronización de OneDrive](https://rcloneview.com/support/blog/fix-onedrive-sync-errors-delta-token-path-length-rcloneview)

<CloudSupportGrid />
