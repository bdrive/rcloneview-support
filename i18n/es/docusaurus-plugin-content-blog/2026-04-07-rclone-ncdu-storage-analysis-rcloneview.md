---
slug: rclone-ncdu-storage-analysis-rcloneview
title: "Analiza el uso del almacenamiento en la nube con Rclone NCDU en RcloneView"
authors: [tayson]
description: "Usa rclone ncdu a través de RcloneView para analizar el uso del almacenamiento en la nube, encontrar archivos grandes y gestionar el espacio en disco en múltiples proveedores de nube."
keywords:
  - rclone ncdu
  - análisis de almacenamiento en la nube
  - uso de disco en la nube
  - analizador de almacenamiento rcloneview
  - encontrar archivos grandes en la nube
  - espacio de almacenamiento en la nube
  - uso de disco rclone
  - desglose del uso de almacenamiento
  - tamaño de carpeta en la nube
  - analizar almacenamiento remoto
tags: [RcloneView, feature, cloud-storage, tips, guide, cli, monitoring, dashboard, performance]
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Analiza el uso del almacenamiento en la nube con Rclone NCDU en RcloneView

> Descubre exactamente dónde se está consumiendo tu espacio de almacenamiento en la nube con la potente herramienta NCDU de rclone, accesible directamente desde la terminal integrada de RcloneView.

Los costes del almacenamiento en la nube pueden aumentar silenciosamente. Una carpeta de copia de seguridad olvidada por aquí, un lote de archivos de vídeo sin comprimir por allá, y de repente estás pagando por terabytes de almacenamiento que no sabías que estabas usando. Rclone incluye una herramienta NCDU (NCurses Disk Usage) integrada que escanea tu almacenamiento remoto y presenta un desglose interactivo y navegable del tamaño de los directorios. A través de la terminal integrada y el explorador de archivos de RcloneView, puedes ejecutar análisis con ncdu, identificar archivos y carpetas que consumen espacio, y tomar medidas inmediatas para recuperar almacenamiento. Esta guía cubre todo, desde análisis básicos hasta flujos de trabajo de análisis avanzados en múltiples proveedores de nube.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ¿Qué es Rclone NCDU?

Rclone NCDU es una versión adaptada a la nube de la clásica utilidad de Linux `ncdu` (NCurses Disk Usage). Mientras que el ncdu original analiza sistemas de archivos locales, la implementación de rclone funciona con cualquier backend de almacenamiento remoto compatible con rclone, incluyendo Google Drive, Amazon S3, Dropbox, OneDrive, Backblaze B2 y más de 70 proveedores adicionales.

Cuando ejecutas `rclone ncdu`, realiza un análisis recursivo de la ruta remota especificada, calculando el tamaño de cada archivo y directorio. Los resultados se presentan en una interfaz de terminal interactiva donde puedes:

- **Navegar por directorios** para profundizar en estructuras de carpetas anidadas
- **Ordenar por tamaño** para ver de inmediato los mayores consumidores de espacio
- **Ordenar por cantidad** para encontrar directorios con un número excesivo de archivos pequeños
- **Marcar archivos para eliminación** directamente desde la interfaz
- **Exportar resultados** para su análisis o generación de informes sin conexión

La ventaja clave frente a simplemente navegar por tu almacenamiento en la nube es la velocidad y la exhaustividad. Una revisión manual de miles de carpetas es poco práctica, pero ncdu escanea todo en una sola pasada y presenta los resultados en un formato priorizado y accionable.

**En qué se diferencia de las herramientas específicas de cada proveedor:**

La mayoría de los proveedores de nube ofrecen alguna forma de visualización del uso de almacenamiento, pero a menudo son limitadas:
- Google Drive muestra el uso total pero no lo desglosa por carpeta
- S3 requiere métricas de CloudWatch o herramientas de terceros para un análisis detallado
- Dropbox muestra el uso por carpeta compartida pero pasa por alto la estructura anidada

Rclone ncdu proporciona un análisis consistente y detallado independientemente del proveedor que uses.

## Ejecutando tu primer análisis con NCDU

Empezar a usar ncdu a través de RcloneView es sencillo. Abre la terminal integrada de RcloneView o usa el explorador de archivos para un enfoque visual.

**A través de la terminal de RcloneView:**

```bash
rclone ncdu remote:
```

Sustituye `remote:` por el nombre de tu remoto configurado. Por ejemplo:

```bash
rclone ncdu gdrive:
rclone ncdu s3:my-bucket
rclone ncdu dropbox:/Documents
```

**Escaneando un subdirectorio específico:**

Si solo quieres analizar una parte de tu almacenamiento, especifica la ruta:

```bash
rclone ncdu gdrive:/Projects/2025
```

Esto es considerablemente más rápido que escanear todo el remoto, especialmente en cuentas de almacenamiento grandes.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folder contents" class="img-large img-center" />

**Entendiendo el proceso de análisis:**

Cuando ncdu se inicia, enumera de forma recursiva cada archivo y directorio del remoto. El tiempo que esto tarda depende de:

| Factor | Impacto |
|--------|--------|
| Número total de archivos | Factor principal; 100 000 archivos pueden tardar varios minutos |
| Límites de tasa de la API | Google Drive limita a ~10 solicitudes por segundo |
| Latencia de red | Una latencia mayor ralentiza las llamadas a la API |
| Profundidad de directorios | Las estructuras muy anidadas requieren más llamadas a la API |

Para un Google Drive con 50 000 archivos, espera un tiempo de análisis de 2 a 5 minutos. Para un bucket de S3 con millones de objetos, considera escanear prefijos específicos en lugar de todo el bucket.

## Navegando por la interfaz de NCDU

Una vez completado el análisis, se te presenta una pantalla interactiva. A continuación te explicamos cómo navegar por ella de forma efectiva.

**Controles de teclado:**

| Tecla | Acción |
|-----|--------|
| Flecha arriba/abajo | Mover la selección entre elementos |
| Enter / Flecha derecha | Entrar en el directorio seleccionado |
| Flecha izquierda | Volver al directorio padre |
| d | Eliminar el archivo o directorio seleccionado |
| s | Alternar orden por tamaño |
| c | Alternar orden por cantidad (número de archivos) |
| g | Alternar la visualización del gráfico |
| n | Ordenar por nombre |
| q | Salir de ncdu |

**Interpretando la pantalla:**

Cada línea de la salida de ncdu muestra:
- El tamaño del directorio o archivo (en formato legible para humanos)
- Una barra gráfica que muestra el tamaño relativo comparado con sus elementos hermanos
- El número de archivos contenidos (para directorios)
- El nombre del directorio o archivo

Los elementos más grandes aparecen en la parte superior por defecto, lo que hace evidente de inmediato dónde se está consumiendo tu almacenamiento.

**Flujo de navegación práctico:**

1. Comienza en el nivel raíz para ver qué carpetas de nivel superior son las más grandes.
2. Entra en la carpeta más grande para ver su contenido.
3. Continúa profundizando hasta encontrar los archivos o subdirectorios específicos que consumen espacio.
4. Anota las rutas de los elementos que quieres limpiar.
5. Usa el explorador de archivos de RcloneView para eliminar, mover o archivar esos elementos.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## Encontrando archivos grandes y datos olvidados

El caso de uso más común de ncdu es encontrar archivos inesperadamente grandes y datos olvidados. Aquí tienes estrategias para identificar diferentes tipos de desperdicio de almacenamiento.

**Identificando archivos multimedia grandes:**

Los archivos de vídeo, las imágenes de disco y los archivos comprimidos sin comprimir son culpables frecuentes. Al ordenar por tamaño en ncdu, estos suelen subir a la parte superior de inmediato. Los culpables habituales incluyen:

- Grabaciones de pantalla y exportaciones de vídeo dejadas en directorios de trabajo
- Imágenes de disco de máquinas virtuales subidas como copias de seguridad
- Archivos ZIP o TAR sin comprimir que podrían comprimirse
- Copias duplicadas de conjuntos de datos grandes en diferentes carpetas

**Encontrando copias de seguridad obsoletas:**

Muchos usuarios configuran copias de seguridad automatizadas y se olvidan de ellas. Busca:
- Directorios llamados `backup`, `archive`, `old`, o que contengan marcas de fecha
- Múltiples copias con marca de tiempo de los mismos datos
- Volcados de bases de datos que se acumulan con el tiempo sin limpieza

**Detectando archivos duplicados entre proveedores:**

Si usas ncdu en múltiples remotos, podrías descubrir que los mismos datos están almacenados de forma redundante:

```bash
# Scan Google Drive
rclone ncdu gdrive:/Backups

# Scan S3
rclone ncdu s3:my-backup-bucket

# Compare the results to find overlapping data
```

**Tipos de archivos grandes por proveedor:**

Diferentes proveedores atraen diferentes tipos de desperdicio de almacenamiento:

| Proveedor | Archivos grandes habituales |
|----------|--------------------|
| Google Drive | Vídeos compartidos, notebooks de Colab con salidas, exportaciones antiguas de Takeout |
| S3 | Archivos de registros, artefactos de despliegues antiguos, data lakes sin comprimir |
| OneDrive | Blobs de OneNote, archivos de equipo compartidos, copias de adjuntos de Outlook |
| Dropbox | Duplicados de subida de cámara, carpetas compartidas antiguas |

## Exportando y comparando resultados

Para una gestión continua del almacenamiento, querrás exportar los resultados de ncdu y hacer seguimiento de los cambios a lo largo del tiempo.

**Exportando resultados del análisis a un archivo:**

El comando `size` de rclone complementa a ncdu proporcionando una salida programable:

```bash
# Get total size of a remote
rclone size gdrive: --json

# List directories with their sizes
rclone lsf gdrive: --dirs-only -R --format "sp" | sort -t ';' -k1 -rn | head -20
```

**Creando un informe de uso de almacenamiento:**

Combina comandos de rclone para elaborar un informe completo:

```bash
# Generate a JSON report of all file sizes
rclone lsjson gdrive: -R --no-modtime --no-mimetype > storage-report.json

# Use rclone size for quick summaries
rclone size gdrive:/Projects
rclone size gdrive:/Backups
rclone size gdrive:/Media
```

**Comparando el uso entre proveedores:**

Si gestionas varias cuentas en la nube, ejecuta ncdu o comandos size contra cada una para comparar:

```bash
echo "=== Google Drive ===" && rclone size gdrive:
echo "=== S3 ===" && rclone size s3:my-bucket
echo "=== Dropbox ===" && rclone size dropbox:
echo "=== OneDrive ===" && rclone size onedrive:
```

Esto te da una idea clara de cómo se distribuye el almacenamiento y dónde los esfuerzos de optimización tendrán mayor impacto.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

## Técnicas avanzadas de NCDU

Más allá del análisis básico, varias técnicas avanzadas pueden hacer que tu análisis de almacenamiento sea más efectivo.

**Filtrando análisis:**

Usa los indicadores de filtro de rclone para centrar tu análisis:

```bash
# Only scan files larger than 100 MB
rclone ncdu gdrive: --min-size 100M

# Exclude certain directories from the scan
rclone ncdu gdrive: --exclude "node_modules/**" --exclude ".git/**"

# Only scan specific file types
rclone ncdu s3:my-bucket --include "*.{mp4,avi,mkv,mov}"
```

**Almacenando en caché los resultados del análisis:**

Para remotos muy grandes, el análisis puede tardar mucho tiempo. Habilita la caché de directorios de rclone para acelerar análisis repetidos:

```bash
rclone ncdu gdrive: --fast-list
```

El indicador `--fast-list` utiliza menos llamadas a la API al solicitar listados de directorios en bloque. Esto puede reducir los tiempos de análisis en un 50% o más en los proveedores que lo soportan (S3, Google Drive, B2).

**Analizando almacenamiento compartido:**

En Google Drive, el almacenamiento usado por archivos compartidos contigo no cuenta contra tu cuota, pero los archivos que posees en unidades compartidas sí. Usa ncdu para analizar unidades compartidas específicas:

```bash
rclone ncdu gdrive: --drive-shared-with-me
rclone ncdu gdrive,shared_drive_id=DRIVE_ID:
```

**Programando análisis periódicos:**

Configura informes de almacenamiento automatizados usando cron o el programador de tareas de RcloneView:

```bash
# Weekly storage report
0 8 * * MON rclone size gdrive: --json >> /var/log/storage-usage.json
```

## Actuando sobre los hallazgos

Después de identificar el desperdicio de almacenamiento, usa RcloneView para actuar directamente.

**Eliminando archivos innecesarios:**

Desde la interfaz de ncdu, presiona `d` sobre cualquier archivo o directorio para eliminarlo. Alternativamente, usa el explorador de archivos de RcloneView para navegar hasta las rutas identificadas y eliminar archivos con la interfaz gráfica.

**Moviendo datos fríos a almacenamiento más económico:**

Si encuentras conjuntos de datos grandes que necesitas conservar pero a los que rara vez accedes, muévelos a un nivel de almacenamiento más económico:

```bash
# Move old archives from Google Drive to Backblaze B2
rclone move gdrive:/Archives/2023 b2:cold-archive/2023 --progress
```

El explorador de dos paneles de RcloneView hace que esto sea tan sencillo como arrastrar y soltar.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

**Comprimiendo antes de archivar:**

Para datos con mucho texto, como registros y CSV, comprime antes de transferir a almacenamiento en frío:

```bash
# Compress locally, then upload
tar czf archive.tar.gz /path/to/data
rclone copy archive.tar.gz b2:compressed-archives/
```

**Configurando políticas de ciclo de vida:**

Después de la limpieza, evita futuras acumulaciones de almacenamiento configurando una limpieza automatizada. Usa la programación de tareas de RcloneView para ejecutar tareas de limpieza periódicas:

- Eliminar archivos con más de cierta antigüedad: `rclone delete remote: --min-age 365d`
- Eliminar directorios vacíos: `rclone rmdirs remote: --leave-root`
- Deduplicar archivos en Google Drive: `rclone dedupe gdrive: --dedupe-mode newest`

## Primeros pasos

Rclone NCDU es una de las herramientas más útiles de forma inmediata en el ecosistema de rclone. Un solo análisis puede revelar gigabytes de datos olvidados, archivos duplicados y desperdicio de almacenamiento cuya existencia desconocías. A través de RcloneView, puedes ejecutar estos análisis, revisar los resultados y actuar sin salir nunca de la aplicación. Empieza escaneando tu cuenta de almacenamiento en la nube más grande, ordena por tamaño y revisa los 10 elementos más grandes. Es probable que encuentres ahorros significativos en tu primera sesión.

---

**Guías relacionadas:**
- [Explorar y gestionar el almacenamiento remoto](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Comparar el contenido de carpetas](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Monitorización de transferencias en tiempo real](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />
