---
slug: dry-run-preview-sync-before-transfer-rcloneview
title: "Vista previa de los cambios de sincronización con Dry Run antes de transferir en RcloneView"
authors:
  - tayson
description: "Usa dry run en RcloneView para obtener una vista previa de los cambios de sincronización antes de transferir archivos. Detecta eliminaciones inesperadas y desajustes de filtros antes de que causen pérdida de datos."
keywords:
  - rcloneview
  - dry run
  - vista previa de sincronización
  - rclone dry run
  - vista previa de sync
  - sincronización segura en la nube
  - prevenir pérdida de datos
  - simulación de sincronización
  - vista previa de transferencia en la nube
  - comparar antes de sincronizar
tags:
  - feature
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Vista previa de los cambios de sincronización con Dry Run antes de transferir en RcloneView

> Una sincronización mal configurada puede eliminar miles de archivos en segundos. **RcloneView** te permite previsualizar cada cambio con un dry run antes de transferir un solo byte, dándote total confianza antes de comprometerte con una sincronización.

La operación de sincronización es una de las funciones más potentes de rclone. Hace que el destino coincida con el origen, transfiriendo archivos nuevos, actualizando los modificados y eliminando los archivos que ya no existen en el origen. Esa última parte, la eliminación, es lo que hace que la sincronización sea a la vez potente y peligrosa.

Un dry run simula toda la operación de sincronización sin mover, copiar ni eliminar nada realmente. Te muestra exactamente qué ocurriría: qué archivos se transferirían, cuáles se eliminarían y cuáles se omitirían. Revisas el resultado, confirmas que coincide con lo esperado y solo entonces ejecutas la sincronización real.

RcloneView integra el dry run directamente en su flujo de trabajo de sincronización, facilitando la vista previa de los cambios a través de la GUI antes de confirmarlos. Ya sea que estés sincronizando dos remotos en la nube o haciendo una copia de seguridad de archivos locales en la nube, un dry run debería ser siempre tu primer paso.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Qué hace Dry Run

Cuando activas el modo dry run, rclone realiza el mismo análisis que haría para una sincronización real: examina el origen y el destino, compara los archivos por tamaño, marca de tiempo o checksum, y elabora una lista de operaciones a realizar. La única diferencia es que ninguna de esas operaciones se ejecuta realmente.

El resultado del dry run te indica:
- **Archivos a transferir**: archivos nuevos o modificados que se copiarían del origen al destino.
- **Archivos a eliminar**: archivos del destino que no existen en el origen y que se eliminarían.
- **Archivos a omitir**: archivos idénticos en ambos lados que no requieren ninguna acción.
- **Volumen total de datos**: cuántos datos se transferirían, lo que te ayuda a estimar el tiempo y el ancho de banda necesarios.

Esta simulación es de solo lectura. No se mueve, copia ni elimina ningún archivo. Tu origen y destino permanecen completamente intactos.

## Por qué Dry Run es fundamental para operaciones destructivas

El comando `sync` es intrínsecamente destructivo porque elimina en el destino los archivos que no están presentes en el origen. Esto es intencional, es lo que diferencia sync de copy. Pero también significa que los errores tienen consecuencias:

- **Dirección de sincronización incorrecta**: si accidentalmente intercambias origen y destino, la sincronización elimina tus archivos de origen para que coincidan con un destino vacío o desactualizado.
- **Ruta incorrecta**: sincronizar hacia el directorio equivocado puede sobrescribir archivos no relacionados o provocar eliminaciones masivas.
- **Configuración incorrecta de filtros**: si tus filtros de inclusión/exclusión son incorrectos, los archivos que querías conservar podrían quedar excluidos del escaneo del origen y, por lo tanto, eliminados en el destino.
- **Autenticación caducada**: si el remoto de origen tiene credenciales caducadas, podría aparecer como vacío, provocando que la sincronización elimine todo en el destino.

Un dry run detecta cada uno de estos problemas antes de que se produzca cualquier daño. Los pocos segundos que se tarda en revisar el resultado pueden ahorrar horas de trabajo de recuperación.

## Cómo activar Dry Run en RcloneView

RcloneView ofrece una forma sencilla de ejecutar vistas previas de sincronización:

1. Abre el **Job Manager** y selecciona el trabajo de sincronización que deseas previsualizar.
2. Agrega el indicador `--dry-run` en la sección **Custom Flags** de la configuración del trabajo.
3. Ejecuta el trabajo. RcloneView simulará la sincronización y mostrará los resultados.
4. Revisa el resultado en el monitor de transferencias para ver qué ocurriría.
5. Si todo parece correcto, elimina el indicador `--dry-run` y ejecuta el trabajo de verdad.

Alternativamente, puedes usar la terminal integrada para ejecutar directamente un comando de dry run:
```
rclone sync source: dest: --dry-run
```

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

## Cómo leer el resultado de Dry Run

El resultado del dry run usa el mismo formato que una sincronización real, pero no se ejecuta ninguna operación. Esto es lo que debes buscar:

**Archivos transferidos** se listan con sus rutas y tamaños. Verifica que estos sean los archivos que esperas que se actualicen o agreguen. Si ves archivos siendo transferidos que ya deberían estar sincronizados, podría indicar un desajuste de marca de tiempo o una diferencia de checksum que vale la pena investigar.

**Archivos eliminados** son los elementos más críticos a revisar. Cada archivo listado para eliminación se eliminará permanentemente del destino durante una sincronización real. Si ves aquí archivos que quieres conservar, es posible que necesites ajustar tu ruta de origen, filtros o dirección de sincronización.

**Archivos omitidos** confirman que los archivos ya sincronizados se identifican correctamente. Un resultado de dry run saludable debería mostrar mayoritariamente archivos omitidos, con un pequeño número de transferencias y eliminaciones.

**Las estadísticas de resumen** al final indican el número total de transferencias, eliminaciones y el volumen general de datos. Compara estas cifras con lo que esperabas. Si estás sincronizando una carpeta en la que cambiaste un solo archivo, pero el dry run muestra miles de transferencias, algo está mal configurado.

## Sorpresas comunes detectadas por Dry Run

Aquí tienes escenarios reales en los que un dry run ha evitado la pérdida de datos:

**Eliminación masiva inesperada**: configuras una sincronización de Google Drive a S3, pero el token de Google Drive caducó. Rclone ve un origen vacío y planea eliminar todo en el destino. El dry run muestra miles de eliminaciones y cero transferencias, señalando el problema de inmediato.

**Desajuste de filtros**: agregaste un filtro de exclusión para los archivos `*.tmp`, pero escribiste por error `*.tmpl`, que coincide con tus archivos de plantilla de Terraform. El dry run muestra que esos archivos de plantilla se eliminarían del destino, alertándote sobre el error tipográfico.

**Directorio base incorrecto**: querías sincronizar `remote:projects/2026`, pero escribiste `remote:projects`. El dry run revela que se sincronizarían archivos de todos los años de proyectos, sobrescribiendo potencialmente archivos en subdirectorios que no pretendías tocar.

**Problemas de sensibilidad a mayúsculas y minúsculas**: mover archivos entre un remoto que no distingue mayúsculas de minúsculas (como OneDrive) y uno que sí lo hace (como S3) puede crear archivos duplicados. El dry run muestra estas transferencias inesperadas para que puedas resolver los conflictos de mayúsculas y minúsculas antes de que se multipliquen.

## Cómo hacer que Dry Run forme parte de tu flujo de trabajo

Para máxima seguridad, incorpora el dry run a tu procedimiento operativo estándar:

**Para sincronizaciones manuales**: ejecuta siempre primero un dry run antes de realizar cualquier operación de sincronización. Revisa el resultado, luego elimina el indicador y ejecuta la sincronización real. El minuto extra vale la pena por la tranquilidad que aporta.

**Para nuevos trabajos programados**: al crear una nueva sincronización programada, ejecútala manualmente primero con `--dry-run`. Activa el programa solo después de haber verificado que el resultado del dry run coincide con lo esperado.

**Después de cambios de configuración**: cada vez que modifiques el origen, destino, filtros o indicadores de un trabajo, ejecuta un dry run antes de la siguiente ejecución. Los cambios de configuración pueden tener efectos secundarios inesperados que un dry run revelará.

**Periódicamente para trabajos existentes**: incluso los trabajos programados estables y de larga duración se benefician de una revisión ocasional con dry run. Los cambios en los datos de origen, la configuración del remoto o el comportamiento del proveedor pueden alterar el comportamiento de la sincronización con el tiempo.

## Combinar Dry Run con las funciones de comparación

La función de comparación de carpetas de RcloneView complementa el dry run al proporcionar una vista visual lado a lado del contenido del origen y el destino. Usadas juntas, te ofrecen una visibilidad completa previa a la sincronización:

1. Usa la función **Compare** para inspeccionar visualmente las diferencias entre el origen y el destino.
2. Ejecuta un **dry run** para ver exactamente qué haría la operación de sincronización con esas diferencias.
3. Verifica que las operaciones planificadas coincidan con lo que viste en la comparación.
4. Ejecuta la sincronización con confianza.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

La función de comparación te muestra el estado actual, mientras que el dry run te muestra las acciones planificadas. Juntas, eliminan las conjeturas y garantizan que comprendas tanto qué es diferente como qué se hará al respecto.

## Avanzado: usar --dry-run con otros indicadores

Dry run funciona con todos los demás indicadores de rclone, por lo que puedes simular tu configuración de producción exacta:

- `--dry-run --backup-dir remote:backup` previsualiza tanto la sincronización como el lugar donde se almacenarían las copias de seguridad.
- `--dry-run --filter-from filters.txt` verifica que tus reglas de filtro produzcan los resultados esperados.
- `--dry-run --max-age 24h` simula sincronizar solo los archivos modificados en las últimas 24 horas.
- `--dry-run -v` agrega salida detallada con más información sobre cada operación planificada.

Esta capacidad de combinación significa que puedes probar cualquier configuración de forma segura antes de implementarla en producción.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Crea un trabajo de sincronización con el origen y destino deseados.
3. Agrega `--dry-run` a los indicadores personalizados y ejecuta el trabajo para previsualizar los cambios.
4. Revisa el resultado con atención, luego elimina el indicador y ejecuta la sincronización real.

El dry run no cuesta nada, tarda solo segundos y puede evitar una pérdida catastrófica de datos. Conviértelo en el primer paso de cada operación de sincronización, y nunca te sorprenderá lo que una sincronización le hace a tus archivos.

---

**Guías relacionadas:**

- [Sincroniza almacenamientos remotos al instante](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)
- [Compara el contenido de carpetas](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Crea trabajos de sincronización](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)

<CloudSupportGrid />
