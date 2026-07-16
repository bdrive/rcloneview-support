---
slug: lsf-lsjson-remote-file-listing-rcloneview
title: "Lista y analiza archivos remotos con RcloneView Explorer"
authors:
  - tayson
description: "Usa RcloneView Explorer para listar, ordenar y analizar archivos remotos en la nube de forma visual. Reemplaza los comandos rclone lsf y lsjson por una interfaz gráfica intuitiva para la gestión de archivos."
keywords:
  - rcloneview
  - rclone lsf
  - rclone lsjson
  - listado de archivos remotos
  - análisis de almacenamiento en la nube
  - análisis de tamaño de archivos
  - gestión de archivos en la nube
  - uso de almacenamiento
  - comparación de directorios
  - explorador de archivos en la nube
tags:
  - feature
  - file-management
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Lista y analiza archivos remotos con RcloneView Explorer

> Entender qué se almacena en tus cuentas en la nube es el primer paso para gestionarlas de forma eficaz. **RcloneView** Explorer ofrece una experiencia visual de listado de archivos que reemplaza los complejos comandos de CLI por una navegación, ordenación y análisis intuitivos.

El CLI de rclone ofrece potentes comandos de listado de archivos como `lsf` y `lsjson`, que muestran los detalles de los archivos en varios formatos. Estos comandos son útiles para scripting, pero no son ideales para la exploración diaria de archivos. Leer miles de líneas de salida de terminal para encontrar un archivo específico o identificar qué consume más espacio es tedioso y propenso a errores.

El Explorer de RcloneView transforma esta experiencia en algo visual e interactivo. Obtienes los mismos datos subyacentes, pero presentados en una interfaz de gestor de archivos familiar con ordenación, filtrado y vistas multicolumna. Puedes ver el tamaño de los archivos, las fechas de modificación y los tipos de un vistazo, y explorar la estructura de directorios con un solo clic.

Para los usuarios que aún necesitan la salida sin procesar del CLI, el terminal integrado de RcloneView pone los comandos `rclone lsf` y `lsjson` a una tecla de distancia, dándote lo mejor de ambos mundos en una sola aplicación.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Listado visual de archivos en el Explorer

El panel Explorer de RcloneView muestra el contenido de cualquier remoto configurado en un diseño de gestor de archivos estándar. Cuando seleccionas un remoto y navegas a un directorio, ves:

- **Nombres de archivos y carpetas** con iconos reconocibles para los tipos de archivo más comunes.
- **Tamaños de archivo** mostrados en formato legible (KB, MB, GB).
- **Fechas de modificación** que indican cuándo se actualizó cada archivo por última vez.
- **Recuento de archivos** en los directorios, para que puedas ver cuántos elementos contiene cada carpeta.

Este es el equivalente visual de ejecutar `rclone lsf --format "pst" remote:path`, pero con la posibilidad de interactuar directamente con cada elemento. Haz clic en una carpeta para abrirla. Haz clic derecho en un archivo para acciones como copiar, mover o eliminar. Selecciona varios archivos para operaciones por lotes.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## Ordenar por tamaño, fecha y nombre

Uno de los motivos más habituales para listar archivos remotos es encontrar elementos específicos o identificar patrones. El Explorer de RcloneView admite ordenación por columnas que hace esto trivial:

- **Ordenar por tamaño** para encontrar rápidamente los archivos más grandes que consumen tu cuota de almacenamiento. Esto es especialmente útil para proveedores de almacenamiento en la nube con límites de espacio, donde unos pocos archivos grandes pueden representar la mayor parte de tu uso.
- **Ordenar por fecha** para identificar archivos modificados recientemente, encontrar contenido obsoleto que no se ha tocado en meses o verificar que una operación de sincronización reciente actualizó los archivos esperados.
- **Ordenar por nombre** para una navegación alfabética cuando sabes aproximadamente lo que buscas.

Haz clic en cualquier encabezado de columna para ordenar por esa columna. Haz clic de nuevo para invertir el orden. Esta simple interacción reemplaza el tener que canalizar la salida de `rclone lsf` a través de comandos `sort` en el CLI.

## Encontrar archivos grandes y analizar el uso de almacenamiento

Los costos de almacenamiento se acumulan, y saber a dónde va tu espacio es esencial para gestionar los costos. RcloneView te ayuda a analizar el uso de almacenamiento sin ejecutar scripts de auditoría independientes:

1. Navega a la raíz de un remoto en el Explorer.
2. Ordena por tamaño de forma descendente para hacer emerger inmediatamente los archivos más grandes.
3. Profundiza en directorios grandes para ver qué subdirectorios contribuyen más al uso total.

Este flujo de trabajo reemplaza el patrón habitual de CLI de ejecutar `rclone lsjson --recursive remote: | jq 'sort_by(.Size) | reverse'` e intentar interpretar visualmente la salida JSON. En el Explorer, la misma información se presenta en una interfaz ordenable y con la que se puede interactuar.

Para un análisis más profundo, puedes usar el terminal integrado de RcloneView para ejecutar `rclone ncdu remote:`, que proporciona un desglose interactivo del uso de almacenamiento directamente dentro de la aplicación.

## Comparar árboles de directorios

El diseño de Explorer de dos paneles de RcloneView está pensado para comparar el contenido de directorios entre remotos. Carga un remoto en el panel izquierdo y otro en el derecho, y luego compara visualmente sus estructuras:

- Identifica archivos que existen en un remoto pero no en el otro.
- Detecta diferencias en el tamaño de los archivos que podrían indicar transferencias incompletas.
- Verifica que una operación de sincronización produjo los resultados esperados.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

La función de comparación integrada va más allá, resaltando automáticamente las diferencias entre dos directorios. Este es el equivalente visual de ejecutar `rclone check source: dest:`, pero con una pantalla interactiva que te permite actuar sobre las diferencias de inmediato.

## Uso del terminal integrado para consultas avanzadas

Para necesidades avanzadas de listado de archivos que van más allá de lo que ofrece el Explorer visual, RcloneView incluye un terminal integrado. Esto te da acceso directo a todos los comandos del CLI de rclone, incluyendo:

**`rclone lsf`** para listados con formato simple:
```
rclone lsf remote:documents --format "pst" --recursive
```
Esto lista todos los archivos con ruta, tamaño y marca de tiempo en un formato plano adecuado para canalizar o guardar.

**`rclone lsjson`** para datos estructurados:
```
rclone lsjson remote:documents --recursive --no-modtime
```
Esto genera metadatos de archivos en formato JSON, útil para análisis programático o para alimentar otras herramientas.

**`rclone size`** para resúmenes de almacenamiento:
```
rclone size remote:
```
Esto proporciona un total rápido de archivos y bytes almacenados en un remoto.

El terminal se ejecuta dentro de RcloneView, por lo que no necesitas abrir una consola independiente ni configurar rutas de rclone. Tus configuraciones de remotos existentes ya están disponibles.

## Explorar varios remotos simultáneamente

El Explorer de RcloneView admite abrir varios remotos al mismo tiempo. Esto es especialmente útil para usuarios que gestionan archivos en varios proveedores de la nube:

- Abre Google Drive en un panel y OneDrive en el otro para comparar estructuras de carpetas.
- Navega por un bucket de S3 mientras haces referencia al directorio local correspondiente.
- Revisa archivos en Backblaze B2 y Wasabi lado a lado para verificar una copia de seguridad entre proveedores.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

Cada panel funciona de forma independiente, por lo que puedes navegar, ordenar y explorar a tu propio ritmo sin afectar al otro panel. Cuando encuentres archivos que deban moverse entre remotos, simplemente arrástralos y suéltalos.

## Flujos de trabajo prácticos de análisis de archivos

Aquí tienes algunas tareas comunes de análisis de archivos y cómo llevarlas a cabo en RcloneView:

**Auditar el almacenamiento en la nube antes de una migración:**
Explora el remoto de origen, ordena por fecha para identificar archivos activos frente a obsoletos, y decide qué migrar frente a qué archivar o eliminar. Este paso de preparación puede reducir significativamente el tiempo y el costo de la migración.

**Verificar la integridad de una copia de seguridad:**
Abre los remotos de origen y de copia de seguridad lado a lado, navega al mismo directorio en cada uno y usa la función de comparación para confirmar que todos los archivos se copiaron correctamente.

**Encontrar archivos duplicados u obsoletos:**
Ordena por nombre para detectar archivos con nombres similares, o por fecha para encontrar archivos que no se han modificado en años. Elimina los archivos innecesarios para liberar cuota de almacenamiento y reducir costos.

**Generar un inventario de archivos:**
Usa el terminal integrado para ejecutar `rclone lsjson --recursive remote:` y guarda la salida con fines de documentación, cumplimiento normativo o auditoría.

## Cómo empezar

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade tus remotos de almacenamiento en la nube en el Gestor de Remotos.
3. Abre el Explorer y navega por cualquier remoto para ver archivos con tamaños, fechas y tipos.
4. Usa la ordenación, la comparación y el terminal integrado para un análisis más profundo.

Ya sea que necesites un rápido vistazo visual o un inventario de archivos detallado, el Explorer de RcloneView pone toda la información a tu alcance sin necesidad de recordar la sintaxis del CLI.

---

**Guías relacionadas:**

- [Explorar y gestionar el almacenamiento remoto](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Comparar el contenido de carpetas](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Monitoreo de transferencias en tiempo real](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />
