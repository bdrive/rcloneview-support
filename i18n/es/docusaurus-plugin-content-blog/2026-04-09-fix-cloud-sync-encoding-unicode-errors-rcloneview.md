---
slug: fix-cloud-sync-encoding-unicode-errors-rcloneview
title: "Solucionar errores de codificación y nombres de archivo Unicode en la sincronización en la nube con RcloneView"
authors:
  - tayson
description: "Diagnostica y soluciona errores de codificación y nombres de archivo Unicode durante la sincronización en la nube en RcloneView. Resuelve incompatibilidades de caracteres entre proveedores."
keywords:
  - rcloneview
  - error de nombre de archivo unicode
  - error de codificación en sincronización en la nube
  - caracteres especiales sincronización en la nube
  - solución de codificación de nombres de archivo
  - codificación rclone
  - error de nombre de archivo en la nube
  - transferencia unicode en la nube
  - solución de codificación de caracteres
  - problemas de nombres de archivo multiplataforma
tags:
  - RcloneView
  - troubleshooting
  - cloud-sync
  - cloud-storage
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar errores de codificación y nombres de archivo Unicode en la sincronización en la nube con RcloneView

> Los distintos proveedores de la nube y sistemas operativos gestionan los nombres de archivo de forma diferente. Los caracteres Unicode, los símbolos especiales y las discrepancias de codificación provocan fallos de sincronización — aquí te explicamos cómo diagnosticarlos y solucionarlos en RcloneView.

Un archivo llamado `résumé_2026.pdf` en Google Drive podría fallar al sincronizarse con OneDrive for Business. Una carpeta con caracteres japoneses en un NAS local podría no transferirse a S3. Un nombre de archivo que contenga `#`, `%` o `:` podría funcionar en Dropbox pero ser rechazado por SharePoint. Estos problemas de codificación y compatibilidad de caracteres se encuentran entre los más frustrantes de la sincronización en la nube, porque omiten archivos en silencio o producen errores difíciles de interpretar.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Síntomas comunes

- **Errores de "nombre de archivo no válido" o "carácter no admitido"**: el proveedor de destino rechaza los nombres de archivo que contienen caracteres que no admite.
- **Archivos omitidos en silencio durante la sincronización**: la transferencia se completa "correctamente", pero algunos archivos faltan en el destino. Estos archivos suelen tener caracteres problemáticos en sus nombres.
- **Nombres de archivo ilegibles en el destino**: los archivos llegan, pero sus nombres contienen secuencias de escape `%xx`, caracteres de reemplazo (`?`) o mojibake (renderizado incorrecto de caracteres).
- **Errores de "ruta demasiado larga"**: los nombres de archivo codificados se vuelven más largos que el límite de longitud de ruta del destino (por ejemplo, 400 caracteres para SharePoint, 1024 para S3).
- **Archivos duplicados con nombres similares**: dos archivos que parecen idénticos (por ejemplo, `café` con Unicode compuesto frente a descompuesto) se tratan como archivos diferentes.

## Comprender el problema

### Restricciones de caracteres del proveedor

Cada proveedor de la nube tiene reglas diferentes sobre los caracteres permitidos en los nombres de archivo:

| Proveedor | Caracteres restringidos |
|---|---|
| OneDrive Business | `" * : < > ? / \ \|` y `#` `%` en algunos contextos |
| SharePoint | `" * : < > ? / \ \| #` `%` `~` y espacios al inicio o al final |
| Google Drive | Solo `/` y bytes nulos restringidos |
| Dropbox | `/` y bytes nulos; espacios y puntos finales en Windows |
| AWS S3 | Casi ninguna restricción (cualquier secuencia de bytes UTF-8) |
| Sistema de archivos local (Windows) | `" * : < > ? / \ \|` y nombres reservados (CON, PRN, etc.) |

Al sincronizar desde un proveedor permisivo (Google Drive, S3) hacia uno restrictivo (OneDrive Business, SharePoint), los archivos con caracteres restringidos fallarán a menos que se codifiquen.

### Normalización Unicode

Unicode ofrece múltiples formas de representar el mismo carácter. Por ejemplo, `é` puede ser:
- **NFC (compuesto)**: un único punto de código U+00E9
- **NFD (descompuesto)**: dos puntos de código U+0065 + U+0301

macOS normalmente usa NFD, mientras que Windows y Linux usan NFC. Google Drive conserva la codificación original, mientras que OneDrive normaliza a NFC. Esto significa que un archivo creado en macOS y subido a Google Drive podría no coincidir con el mismo archivo en OneDrive durante una comparación, aunque el nombre del archivo parezca idéntico para los humanos.

## Solución 1: Habilitar la codificación automática de caracteres

RcloneView (a través de rclone) codifica automáticamente los caracteres restringidos al transferir entre proveedores. De forma predeterminada, cada tipo de remoto tiene un preajuste de codificación que gestiona sus restricciones específicas. Por ejemplo, al copiar a OneDrive, caracteres como `"`, `*` y `:` se reemplazan automáticamente por equivalentes Unicode que se ven similares pero están permitidos.

Si sigues viendo errores de codificación a pesar de esto, verifica que la codificación no esté deshabilitada. En la configuración del remoto, comprueba que el parámetro `encoding` esté establecido en su valor predeterminado (no lo establezcas en `None`). Puedes ver y modificar esto en el Gestor de remotos de RcloneView.

## Solución 2: Gestionar la normalización Unicode

Si estás sincronizando entre archivos originados en macOS y proveedores en la nube basados en Windows, las diferencias de normalización Unicode pueden causar falsos positivos durante la comparación (los archivos parecen diferentes cuando no lo son) o archivos duplicados en el destino.

Usa la marca `--no-unicode-normalization` en las marcas personalizadas de RcloneView si quieres conservar la secuencia exacta de bytes de los nombres de archivo. Alternativamente, la mayoría de los proveedores de la nube normalizan los nombres de archivo del lado del servidor, y el comportamiento predeterminado de rclone maneja esto correctamente en los casos más comunes.

Para problemas persistentes, la marca `--fix-case` puede ayudar cuando las diferencias de sensibilidad a mayúsculas y minúsculas entre proveedores causan problemas (por ejemplo, S3 distingue mayúsculas de minúsculas; el sistema de archivos local de Windows no).

## Solución 3: Renombrar archivos problemáticos

Para una cantidad pequeña de archivos con caracteres problemáticos, la solución más simple es renombrarlos en el origen. Usa el explorador de RcloneView para identificar archivos con caracteres especiales y renombrarlos directamente. Caracteres comunes a evitar en todos los proveedores:

- `# % & { } \ < > * ? / $ ! ' " : @ + \`` \| =`
- Espacios y puntos al inicio o al final
- Nombres reservados de Windows (CON, PRN, AUX, NUL, COM1-9, LPT1-9)

## Solución 4: Usar reglas de filtro para omitir archivos problemáticos

Si no puedes renombrar los archivos (por ejemplo, están en una unidad compartida que no controlas), usa reglas de filtro para excluir de la sincronización archivos con patrones de caracteres específicos. Esto es una solución alternativa en lugar de una corrección definitiva, pero evita que la sincronización falle o se detenga en archivos problemáticos.

En la configuración de trabajos de RcloneView, agrega reglas de filtro como:
- `--exclude "**/*#*"` para omitir archivos que contengan `#`
- `--exclude "**/*%*"` para omitir archivos que contengan `%`

Revisa los registros de sincronización después para identificar qué archivos se omitieron y gestionarlos manualmente si es necesario.

## Solución 5: Comprobar los límites de longitud de ruta

Cuando los nombres de archivo se codifican, se vuelven más largos (cada carácter restringido se reemplaza por una secuencia Unicode de varios bytes). Si la ruta de origen ya está cerca del límite del destino, la codificación la supera.

SharePoint tiene un límite de ruta de 400 caracteres. Windows tiene un límite de 260 caracteres de forma predeterminada (configurable). S3 tiene un límite de clave de 1024 caracteres.

Si encuentras errores de ruta demasiado larga, acorta los nombres de carpeta en la jerarquía de origen o aplana estructuras profundamente anidadas. El explorador de RcloneView muestra la ruta completa, lo que facilita identificar archivos muy anidados.

## Prevenir problemas futuros

- **Estandariza los nombres de archivo antes de subirlos**: evita caracteres especiales en los nombres de archivo desde el principio. Limítate a caracteres alfanuméricos, guiones, guiones bajos y puntos.
- **Prueba con una ejecución en seco**: antes de sincronizaciones grandes entre proveedores con reglas de caracteres diferentes, usa el modo de ejecución en seco de RcloneView para identificar posibles problemas de codificación sin transferir datos.
- **Revisa los registros de sincronización**: después de cada sincronización, comprueba el historial de trabajos en busca de advertencias sobre archivos omitidos o renombrados. Aborda estos casos de forma proactiva antes de que se acumulen.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Verifica que las configuraciones de tu remoto usen los ajustes de codificación predeterminados.
3. Usa la ejecución en seco para identificar problemas de codificación antes de confirmar una transferencia.
4. Renombra o filtra los archivos problemáticos según sea necesario.

Los problemas de codificación y Unicode son sutiles pero comunes al sincronizar entre proveedores. La codificación automática de RcloneView gestiona la mayoría de los casos, y los pasos de solución de problemas anteriores resuelven el resto.

---

**Guías relacionadas:**

- [Explorar y gestionar almacenamiento remoto](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Crear trabajos de sincronización](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Historial de trabajos](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job#view-job-history)

<CloudSupportGrid />
