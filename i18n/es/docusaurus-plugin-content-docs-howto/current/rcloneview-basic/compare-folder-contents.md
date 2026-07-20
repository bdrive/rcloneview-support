---
sidebar_position: 4
description: "Aprenda a comparar carpetas locales y remotas, filtrar resultados, y copiar o eliminar archivos directamente usando la función avanzada de Comparar de RcloneView."
keywords:
  - rcloneview
  - rclone
  - comparar carpetas
  - copia de carpetas
  - diferencias de archivos
  - sincronización en la nube
  - gestión de archivos
  - transferencia de archivos
  - explorador de archivos
  - gestión de almacenamiento remoto
tags:
  - RcloneView
  - compare
  - cloud-storage
  - folder-differences
  - Remote-storage-managent
date: 2025-05-30
author: Jay
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Comparar el contenido de carpetas

RcloneView le ayuda a identificar diferencias entre dos carpetas—ya sea en el disco local o entre remotos en la nube—y a copiar o gestionar archivos de forma eficiente usando su función integrada de Comparar.

## Seleccionar carpetas para comparar

Para comenzar a comparar carpetas:
- Abra dos pestañas en el panel del Explorador.
- Seleccione las carpetas que desea comparar desde el árbol de carpetas o escriba manualmente la ruta completa usando la Barra de ruta.
- Haga clic en el botón **`Compare`** en el menú superior **`Home`** para iniciar la comparación.

<img src="/support/images/en/howto/rcloneview-basic/select-compare-folder.png" alt="select compare folder" class="img-medium img-center" />
Cuando la comparación se complete, aparecerá una ventana emergente de resumen.
Para desactivar este mensaje en el futuro, marque **"Don't show this message again."**
<img src="/support/images/en/howto/rcloneview-basic/folder-comparison-completed.png" alt="folder comparison completed" class="img-medium img-center" />
Para obtener detalles sobre el diseño de la pantalla de comparación de carpetas y el significado de cada icono, consulte la guía de comparación de carpetas.

## Resultados de la comparación y gestión de archivos

La comparación de carpetas le permite comparar y seleccionar archivos directamente para su gestión.

Sin embargo, si necesita sincronizar carpetas grandes o gestionar múltiples carpetas remotas de forma eficiente, usar **`Sync`** es un método más conveniente.

### Mostrar por tipo de resultado seleccionado

Puede filtrar los resultados de la comparación para mostrar únicamente los archivos relevantes para su operación.  
Esto le ayuda a centrarse en lo que necesita ser copiado o revisado.

Por ejemplo, si desea copiar archivos de la carpeta del remoto izquierdo al derecho:

- Haga clic en el icono **`Show left-only files`** <img src="/support/icons/show-left-only-files.png" alt="show left only files" class="inline-icon" /> para mostrar solo los archivos que existen en la carpeta izquierda pero no en la derecha.
- Haga clic en el icono **`Show different files`** <img src="/support/icons/show-different-files.png" alt="show different files" class="inline-icon" /> para mostrar los archivos que existen en ambas carpetas pero difieren en tamaño.
- De esta manera, puede centrarse únicamente en los archivos objetivo para copiar hacia el lado derecho, sin distraerse con los archivos que ya están sincronizados.

> ✅ Esto facilita mucho seleccionar y copiar únicamente los archivos necesarios en una dirección.
<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="compare display select" class="img-medium img-center" />



<details>
<summary>Más detalles de iconos</summary>

#### Comprender los iconos en la ventana de Comparar
<Tabs>
<TabItem value="Display Icons" label="Iconos de visualización">
Cuando hace clic en cada icono con el ratón, se aplica el siguiente comportamiento de filtrado.  
Al hacer clic nuevamente se activa o desactiva el filtro.

Cuando se seleccionan varios iconos, se muestran los archivos que coinciden con **cualquiera** de las condiciones seleccionadas (lógica **OR**).

<img src="/support/icons/show-left-only-files.png" alt="show left only files" class="inline-icon" /> : Muestra solo los archivos que existen en la carpeta izquierda pero no en la derecha.

<img src="/support/icons/show-left-only-files.png" alt="show left only files" class="inline-icon" /> : Muestra solo los archivos que existen en la carpeta derecha pero no en la izquierda.

<img src="/support/icons/same-file-icon.png" alt="same file icon" class="inline-icon" /> : Muestra solo los archivos que existen en ambas carpetas y son idénticos.

<img src="/support/icons/show-different-files.png" alt="show different files" class="inline-icon" />  : Muestra los archivos que existen en ambas carpetas pero difieren en tamaño.

<img src="/support/icons/show-errored-files.png" alt="show errored files" class="inline-icon" /> : Muestra cualquier error o conflicto

</TabItem>

<TabItem value="Navigate Icons" label="Iconos de navegación">
Estos iconos se usan en la vista **Compare** para desplazarse hacia arriba o hacia abajo a través de la jerarquía de carpetas según la estructura de lista de carpetas plana actual.

<img src="/support/icons/navigate-to-upper-folder.png" alt="navigate to upper folder" class="inline-icon" /> : Navega a la **carpeta superior** en la lista actual.

<img src="/support/icons/navigate-to-lower-folder.png" alt="navigate to lower folder" class="inline-icon" /> : Navega a la **carpeta inferior** en la lista actual.

</TabItem>

<TabItem value="Operation Icons" label="Iconos de operación">
Estos iconos se usan para realizar operaciones de archivos dentro de las carpetas—como eliminar archivos o copiarlos hacia la izquierda o la derecha.

<img src="/support/icons/copy-file-to-right.png" alt="copy file to right" class="inline-icon" /> : Copia los archivos seleccionados a la carpeta derecha.

<img src="/support/icons/copy-files-to-left.png" alt="copy files to left" class="inline-icon" /> : Copia los archivos seleccionados a la carpeta izquierda.

<img src="/support/icons/delete-files.png" alt="delete files" class="inline-icon" /> : Elimina los archivos seleccionados de cualquiera de los dos lados.

</TabItem>

<TabItem value="Find Icons" label="Iconos de búsqueda">
Los iconos de **Find** se usan en la **vista Compare** para localizar carpetas donde los cambios en el número o tamaño de archivos son más significativos.

<img src="/support/icons/find-folder-by-count.png" alt="find folder by count" class="inline-icon" /> : Busca carpetas según el número de archivos modificados durante la comparación.

<img src="/support/icons/find-folder-by-size.png" alt="find folder by size" class="inline-icon" /> : Busca carpetas según el tamaño total de los archivos modificados durante la comparación.

<img src="/support/icons/find-folder-with-largest-change.png" alt="find folder with largest change" class="inline-icon" /> : Busca y se desplaza a la carpeta con el cambio más significativo en número de archivos o tamaño.

<img src="/support/icons/find-folder-with-next-large-change.png" alt="find folder with next large change" class="inline-icon" /> : Se desplaza a la siguiente carpeta con una diferencia mayor en número de archivos o tamaño.

<img src="/support/icons/find-folder-with-smallest-change.png" alt="find folder with smallest change" class="inline-icon" /> : Busca y se desplaza a la carpeta con la menor cantidad de cambios.

<img src="/support/icons/find-folder-with-next-smaller-change.png" alt="find folder with next smaller change" class="inline-icon" /> : Se desplaza a la siguiente carpeta con una diferencia menor en número de archivos o tamaño.

</TabItem>

</Tabs>


</details>


### Copiar archivos entre carpetas remotas

#### Seleccionar archivos para copiar

- Use `Ctrl + Click` para seleccionar archivos individuales
- Use `Shift + Click` para seleccionar un rango
- O simplemente use arrastrar y soltar entre paneles

#### Realizar la operación de copia

Una vez seleccionados los archivos:
- Haga clic en el botón **`Copy →`** para copiar los archivos seleccionados del lado izquierdo al lado derecho.
- Haga clic en el botón **`← Copy`** para copiar de derecha a izquierda.

💡 La copia solo ocurre si:
- El archivo no existe en el lado de destino
- El archivo existe en ambos lados pero tiene un tamaño diferente

Después de completar la copia:
- Los archivos copiados se marcarán con el icono **`equal`** <img src="/support/icons/equal-icon.png" alt="equal icon" class="inline-icon" />en la vista de comparación
- La barra de estado en la parte inferior se actualizará con los detalles de finalización
<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/compare-copy-operation.png" alt="compare copy operation" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/compare-copy-operation-completed.png" alt="compare copy operation completed" class="img-medium img-center" />
</div>
:::important Checksum (próximamente)
De forma predeterminada, RcloneView compara los archivos por nombre y tamaño.  
Sin embargo, esto podría no ser suficiente para detectar diferencias de contenido cuando los nombres y tamaños de archivo son iguales.
✅ La comparación por checksum permitirá la verificación a nivel de byte del contenido de los archivos.  
Esta función está planificada para una futura actualización y ayudará a garantizar una mayor precisión de sincronización.
:::
#### Eliminar archivos

También puede eliminar archivos seleccionados de cualquiera de las carpetas:
- Haga clic en el botón **`Delete`** de la izquierda para eliminar archivos de la carpeta izquierda
- Haga clic en el botón **`Delete`** de la derecha para eliminar archivos de la carpeta derecha

⚠️ La eliminación es permanente. Verifique dos veces los archivos seleccionados antes de continuar.
 
## Usar filtros para refinar la comparación

La función de filtro le permite ejecutar comparaciones de carpetas de forma más eficiente excluyendo archivos o carpetas específicos del resultado.

 :::important Se requiere licencia Plus
El filtrado está disponible en la versión de licencia **Plus** de RcloneView.
:::

### ¿Por qué usar filtros?

Es posible que desee excluir ciertas carpetas o tipos de archivo que no son relevantes para su tarea de comparación.  
Con la herramienta de filtro, puede definir fácilmente qué archivos o carpetas deben ignorarse durante la comparación.

### Cómo excluir una carpeta específica:

Por ejemplo, para excluir todas las carpetas llamadas `folder2` de la comparación:
1. Haga clic en el icono **`Filter`** <img src="/support/icons/filter-run-icon.png" alt="filter run icon" class="inline-icon" /> en la pantalla Compare.
2. En el campo de entrada de filtro, escriba `folder2/` y haga clic en **`Add`**.
3. La carpeta aparecerá en la categoría **`Others`**.
4. Marque la casilla junto a `folder2/` y haga clic en **`OK`** para aplicar el filtro.
5. Vuelva a ejecutar la comparación.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/add-custom-filter-rule.png" alt="add custom filter rule" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/addjust-custom-filter-rule.png" alt="addjust custom filter rule" class="img-medium img-center" />
</div>

💡 El filtrado es especialmente útil cuando carpetas como `cache`, `temp`, o directorios de configuración personal solo existen como referencia y no necesitan ser comparadas o copiadas.



<details>
<summary>Reglas de filtro de uso frecuente</summary>

#### Ejemplos de filtros de uso común

**`.iso`** : Excluye todos los archivos .iso

**`/.git/*`** : Excluye solo los archivos dentro de la carpeta .git en la raíz, no las subcarpetas

**`/.git/`** :  Excluye toda la carpeta .git en la raíz, incluyendo todo lo que contiene

**`.git/`** :Excluye todas las carpetas .git y todo su contenido, sin importar la ubicación

</details>

