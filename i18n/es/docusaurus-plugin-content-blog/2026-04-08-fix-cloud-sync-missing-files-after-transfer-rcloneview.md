---
slug: fix-cloud-sync-missing-files-after-transfer-rcloneview
title: "Solucionar archivos faltantes tras la sincronización en la nube con RcloneView"
authors:
  - tayson
description: "Diagnostica y soluciona los archivos faltantes tras las operaciones de sincronización en la nube. Aprende las causas más comunes, como las reglas de filtro, los caracteres especiales y los problemas de dirección de sincronización en RcloneView."
keywords:
  - rcloneview
  - missing files after sync
  - cloud sync missing files
  - rclone files not syncing
  - cloud transfer missing data
  - sync direction wrong
  - google docs not syncing
  - rclone filter rules
  - cloud file transfer issues
  - fix cloud sync
tags:
  - RcloneView
  - troubleshooting
  - cloud-sync
  - tips
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar archivos faltantes tras la sincronización en la nube con RcloneView

> Ejecutaste un trabajo de sincronización y todo parecía haber salido bien, pero faltan algunos archivos en el destino. **RcloneView** ofrece las herramientas para diagnosticar exactamente qué ocurrió y evitar que vuelva a suceder.

Descubrir archivos faltantes tras una sincronización en la nube es una de las situaciones más estresantes en la gestión de archivos en la nube. La transferencia se completó sin errores, el registro del trabajo muestra éxito, pero al revisar el destino, ciertos archivos no aparecen por ningún lado. Antes de entrar en pánico, ten en cuenta que esto casi siempre se debe a un problema de configuración lógica y no a una pérdida de datos.

Esta guía repasa las razones más comunes por las que los archivos desaparecen tras las operaciones de sincronización y te muestra cómo usar las funciones de comparación, registro y ejecución en simulacro (dry-run) de RcloneView para identificar y solucionar el problema.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Reglas de filtro que excluyen archivos silenciosamente

La causa más frecuente de archivos faltantes son las reglas de filtro que los excluyen. Si configuraste reglas `--exclude`, `--include` o `--filter` y las olvidaste, los archivos que coincidan con esos patrones se omitirán silenciosamente durante la sincronización. Rclone no te avisa sobre los archivos excluidos en su salida estándar.

**Errores comunes de filtro:**

- Una regla `--include "*.jpg"` que inadvertidamente excluye todos los archivos que no son JPG, incluidos documentos y hojas de cálculo.
- Una regla `--exclude "*.tmp"` que también atrapa archivos con `.tmp` en medio de su nombre.
- Un indicador `--min-size` que omite archivos pequeños pero importantes, como archivos de configuración o notas de texto.
- Reglas de filtro sobrantes de un trabajo anterior que se arrastraron al crear uno nuevo.

**Cómo diagnosticarlo:** En RcloneView, revisa los indicadores y filtros asociados a tu trabajo de sincronización. Elimina temporalmente todos los filtros y ejecuta una comparación para ver si aparecen los archivos faltantes. Luego vuelve a añadir los filtros de uno en uno para identificar cuál regla los está excluyendo.

## Confusión en la dirección de sincronización

La diferencia entre `sync`, `copy` y `move` es fundamental, y elegir la opción incorrecta puede hacer que los archivos desaparezcan.

- **Sync** hace que el destino coincida con el origen. Los archivos en el destino que no existan en el origen serán **eliminados**. Si accidentalmente sincronizas en la dirección equivocada (destino a origen en lugar de origen a destino), tus archivos de origen podrían eliminarse.
- **Copy** solo añade archivos al destino. Nunca elimina nada. Esta es la opción más segura cuando no estás seguro.
- **Move** transfiere archivos y luego los elimina del origen.

Si faltan archivos en el origen tras una sincronización, es posible que hayas ejecutado una sincronización en la dirección equivocada. Verifica siempre qué panel es el origen y cuál es el destino en el explorador de dos paneles de RcloneView antes de ejecutar.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## Google Docs, Sheets y Slides

Los documentos de Google Workspace (Docs, Sheets, Slides, Drawings) no son archivos tradicionales. Son objetos nativos de la nube que no tienen un tamaño fijo ni un formato binario descargable en su estado nativo. Al sincronizar desde Google Drive, rclone los convierte a un formato descargable (por ejemplo, `.docx`, `.xlsx`, `.pdf`), pero este comportamiento depende de tu configuración.

**Problemas comunes:**

- Los documentos de Google aparecen como archivos de cero bytes o se omiten por completo si el formato de exportación no está configurado.
- Los archivos con nombres muy largos pueden fallar al exportarse en algunos sistemas operativos.
- Los accesos directos en Google Drive no son archivos reales y no se transferirán.

**Cómo solucionarlo:** Verifica que tu remoto de Google Drive esté configurado con los formatos de exportación adecuados. Alternativamente, si no necesitas los documentos de Google en el destino, exclúyelos explícitamente para evitar confusión sobre archivos faltantes.

## Sensibilidad a mayúsculas y caracteres especiales

Los diferentes proveedores de nube manejan los nombres de archivo de forma distinta. Un archivo llamado `Report.PDF` y `report.pdf` puede tratarse como el mismo archivo en Windows y OneDrive, pero como dos archivos diferentes en Linux y S3. Durante la sincronización, uno puede sobrescribir al otro silenciosamente.

**Los caracteres problemáticos incluyen:**

- Espacios o puntos al final (rechazados por OneDrive y Windows).
- Dos puntos, signos de interrogación y corchetes angulares (no válidos en Windows).
- Emojis o caracteres Unicode (algunos proveedores los manejan de forma inconsistente).
- Rutas de archivo muy largas que superan los 260 caracteres en Windows.

**Cómo diagnosticarlo:** Usa la función de comparación de RcloneView para listar archivos lado a lado. Busca archivos que existan en el origen pero que falten o tengan un nombre diferente en el destino. Los registros de rclone pueden mostrar advertencias de renombrado para archivos con caracteres incompatibles.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

## Límites de tamaño de archivo y restricciones del proveedor

Algunos proveedores de nube imponen límites máximos de tamaño de archivo que pueden hacer que los archivos grandes se omitan silenciosamente:

- Google Drive: 5 TB por archivo.
- OneDrive: 250 GB por archivo.
- Dropbox: 2 GB por archivo a través de la API (350 GB mediante el cliente de escritorio).
- MEGA: los límites de tamaño de archivo varían según el tipo de cuenta.
- Muchos proveedores compatibles con S3: 5 TB por objeto, pero las partes individuales de carga están limitadas a 5 GB.

Si estás sincronizando un archivo que supera el límite del proveedor de destino, la transferencia fallará. Revisa el historial de trabajos en RcloneView para detectar entradas de error relacionadas con archivos de tamaño excesivo.

## Usar Comparar para encontrar archivos faltantes

La función de comparación de carpetas de RcloneView es la forma más rápida de identificar exactamente qué archivos faltan. Abre el origen en un lado y el destino en el otro, y luego ejecuta una comparación. La herramienta resaltará los archivos que existen solo en el origen, solo en el destino, o que difieren entre ambos.

Esto te da una lista definitiva de lo que no se transfirió, que luego puedes investigar individualmente. Busca patrones: ¿todos los archivos faltantes están en una misma carpeta? ¿Comparten una extensión de archivo? ¿Están todos por debajo de cierto tamaño? Estos patrones señalan la causa raíz.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

## Ejecutar una simulación (dry run) antes de sincronizar

La mejor manera de evitar archivos faltantes es ejecutar una simulación antes de cada sincronización. Una simulación reproduce la operación sin transferir ni eliminar archivos realmente. Te muestra exactamente lo que haría rclone, incluidos los archivos que se omitirían, transferirían o eliminarían.

En RcloneView, puedes usar el indicador `--dry-run` al configurar un trabajo de sincronización. Revisa el resultado con atención. Si los archivos que esperas transferir no aparecen listados, investiga tus reglas de filtro y tu configuración antes de ejecutar la sincronización real.

## Estrategias de prevención

Para evitar archivos faltantes en futuras sincronizaciones:

1. **Compara siempre primero.** Usa la función de comparación de RcloneView antes de sincronizar para entender el estado actual de ambas ubicaciones.
2. **Usa copy en lugar de sync** cuando no quieras que se elimine nada en el destino.
3. **Empieza con simulaciones.** Añade `--dry-run` para probar nuevas configuraciones de sincronización antes de aplicarlas.
4. **Documenta tus reglas de filtro.** Mantén un registro de lo que hace cada regla de filtro y por qué existe.
5. **Revisa el historial de trabajos.** Después de cada sincronización, revisa el historial de trabajos en RcloneView para confirmar que se transfirió el número esperado de archivos.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="job history" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abre el explorador de dos paneles con tus remotos de origen y destino, y luego ejecuta una comparación de carpetas.
3. Revisa la configuración de tu trabajo de sincronización en busca de reglas de filtro, dirección de sincronización y cualquier indicador que pueda excluir archivos.
4. Usa `--dry-run` para previsualizar la operación de sincronización antes de ejecutarla.

Los archivos faltantes tras una sincronización son casi siempre un problema de configuración, no una pérdida de datos. Un diagnóstico metódico usando las herramientas de comparación y registro de RcloneView identificará la causa en cada ocasión.

---

**Guías relacionadas:**

- [Explorar y gestionar almacenamiento remoto](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Comparar el contenido de carpetas](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Sincronizar almacenamientos remotos al instante](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)

<CloudSupportGrid />
