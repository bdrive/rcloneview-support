---
slug: migrate-google-photos-to-onedrive-rcloneview
title: "Migra Google Photos a OneDrive con RcloneView"
authors:
  - tayson
description: "Guía paso a paso para migrar tu biblioteca de Google Photos a OneDrive usando RcloneView. Cubre el acceso de solo lectura, la estructura de carpetas, el manejo de metadatos y la organización."
keywords:
  - rcloneview
  - google photos a onedrive
  - migración de google photos
  - migrar google photos
  - google photos rclone
  - fotos de onedrive
  - migración de fotos
  - transferencia de fotos en la nube
  - copia de seguridad de google photos
  - exportar google photos
tags:
  - google-photos
  - onedrive
  - migration
  - cloud-migration
  - cloud-to-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migra Google Photos a OneDrive con RcloneView

> Tu biblioteca de fotos es una de las colecciones más personales e irremplazables que posees; moverla entre nubes requiere cuidado. **RcloneView** te ofrece una forma visual, paso a paso, de migrar toda tu biblioteca de Google Photos a OneDrive sin perder tu estructura organizativa.

Google Photos ha sido durante años la opción predeterminada para el almacenamiento de fotos, gracias a su integración con Android y el ecosistema de Google. Pero las circunstancias cambian. Tal vez te estás mudando a Microsoft 365, tu almacenamiento de Google se está agotando, o prefieres la integración más estrecha de OneDrive con Windows. Sea cual sea el motivo, migrar una biblioteca de fotos con miles (o decenas de miles) de imágenes y videos requiere un proceso confiable.

El desafío es que Google Photos no es un sistema de archivos simple. Organiza las fotos por fecha, álbumes y metadatos en lugar de carpetas tradicionales. Rclone resuelve esto presentando Google Photos como un directorio estructurado, y RcloneView te ofrece una interfaz visual para explorar, seleccionar y transferir todo a OneDrive, con monitoreo y verificación incluidos.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Entendiendo Google Photos como un Remoto

Antes de comenzar la migración, es importante entender cómo funciona Google Photos como remoto en la nube en RcloneView.

### Acceso de Solo Lectura

La API de Google Photos ofrece **acceso de solo lectura** a tu biblioteca. Esto significa que:

- Puedes **explorar y descargar** todas tus fotos y videos a través de RcloneView.
- **No puedes eliminar, renombrar ni modificar** archivos en Google Photos a través de la API.
- **No puedes subir** archivos nuevos a Google Photos mediante este remoto.

Esta es una limitación de la API de Google, no una limitación de RcloneView. Para fines de migración, el acceso de solo lectura es suficiente, ya que estás extrayendo datos de Google Photos, no escribiendo en él.

### Estructura de Carpetas

Google Photos presenta tu biblioteca a través de dos tipos principales de directorios:

- **`media/by-year/`** — Todas las fotos organizadas por año (por ejemplo, `media/by-year/2024/`, `media/by-year/2025/`). Contiene todas las fotos de tu biblioteca, organizadas cronológicamente.
- **`media/by-month/`** — Las mismas fotos organizadas por año y mes (por ejemplo, `media/by-month/2024/2024-06/`).
- **`album/`** — Tus álbumes creados manualmente. Cada álbum aparece como una carpeta que contiene sus fotos.

Las fotos que aparecen en álbumes también aparecen en los directorios basados en fecha. Esto significa que puede haber una duplicación aparente: la misma foto listada en `media/by-year/2024/` y en `album/Vacation/`. Durante la migración, querrás elegir un solo enfoque organizativo para evitar copiar archivos dos veces.

## Configurando Ambos Remotos

### Agregar Google Photos

1. Abre RcloneView y haz clic en **+ Nuevo Remoto**.
2. Selecciona **Google Photos** de la lista de proveedores.
3. Sigue el flujo de OAuth; serás redirigido a Google para autorizar el acceso. Concede permiso de solo lectura a tu biblioteca de fotos.
4. Nombra el remoto (por ejemplo, `MyGooglePhotos`) y guarda.

### Agregar OneDrive

1. Haz clic nuevamente en **+ Nuevo Remoto**.
2. Selecciona **Microsoft OneDrive** de la lista de proveedores.
3. Sigue el flujo de OAuth para autorizar el acceso a tu cuenta de OneDrive.
4. Selecciona el tipo de unidad (Personal, Business o SharePoint).
5. Nombra el remoto (por ejemplo, `MyOneDrive`) y guarda.

Ambos remotos ahora aparecen en el Explorador de RcloneView.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## Planificando tu Estructura de Carpetas en OneDrive

Antes de transferir, decide cómo quieres organizar tus fotos en OneDrive. Tienes varias opciones:

### Opción 1: Reflejar la Estructura Basada en Años

Copia el directorio `media/by-year/` de Google Photos a una carpeta `Photos/` en OneDrive. Tu estructura en OneDrive se verá así:

```
Photos/
  2020/
  2021/
  2022/
  2023/
  2024/
  2025/
  2026/
```

Este es el enfoque más simple y funciona bien con las funciones de fotos integradas de OneDrive, que pueden mostrar imágenes en una vista de línea de tiempo.

### Opción 2: Usar Organización Basada en Meses

Copia `media/by-month/` para una organización más granular:

```
Photos/
  2024/
    2024-01/
    2024-02/
    ...
  2025/
    2025-01/
    ...
```

Esto es útil si tienes una biblioteca grande y quieres encontrar rápidamente fotos de un mes específico.

### Opción 3: Organización Basada en Álbumes

Si has organizado meticulosamente tus fotos de Google Photos en álbumes, copia el directorio `album/`:

```
Photos/Albums/
  Vacation 2024/
  Birthday Party/
  Work Events/
```

Ten en cuenta que la migración basada en álbumes puede omitir fotos que nunca se agregaron a ningún álbum. Para una migración completa, combina esto con uno de los enfoques basados en fecha.

### Enfoque Recomendado

Para la mayoría de los usuarios, **la Opción 1 (basada en años) es el mejor punto de partida**. Captura todas las fotos en una estructura cronológica y ordenada. Si los álbumes son importantes para ti, ejecuta una segunda pasada copiando solo el directorio `album/` a una carpeta separada en OneDrive.

## Ejecutando la Migración

Con ambos remotos configurados y tu estrategia de carpetas decidida, inicia la transferencia.

### Paso 1: Explorar y Previsualizar

Abre Google Photos en un panel del Explorador y OneDrive en el otro. Navega por la estructura de directorios de Google Photos para confirmar que puedes ver tus fotos organizadas por año, mes y álbum.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

### Paso 2: Crear la Carpeta de Destino

En el panel de OneDrive, crea una carpeta `Photos` (o el nombre que hayas elegido) para que sirva como destino de la migración.

### Paso 3: Comenzar con un Lote de Prueba

Antes de migrar toda tu biblioteca, haz una prueba con un solo año:

1. En el panel de Google Photos, navega a `media/by-year/2025/` (o cualquier año reciente con una cantidad manejable de fotos).
2. Arrastra la carpeta al directorio `Photos/` en OneDrive.
3. Monitorea la transferencia para confirmar que las fotos llegan correctamente.
4. Abre algunas fotos transferidas en OneDrive para verificar que se muestran correctamente y conservan su calidad.

### Paso 4: Ejecutar la Migración Completa

Una vez que la prueba tenga éxito, transfiere los años restantes:

1. Crea un trabajo de **Copia** desde `media/by-year/` en Google Photos hacia `Photos/` en OneDrive.
2. Ejecuta primero una **Simulación (Dry Run)** para ver el recuento total de archivos y el volumen estimado de transferencia.
3. Ejecuta el trabajo de copia.

Para bibliotecas grandes (más de 10,000 fotos), esto puede tardar varias horas. RcloneView mostrará el progreso en tiempo real.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

### Paso 5: Migrar Álbumes (Opcional)

Si también quieres tu estructura de álbumes en OneDrive:

1. Crea un segundo trabajo de copia desde `album/` en Google Photos hacia `Photos/Albums/` en OneDrive.
2. Ejecuta la copia. Ten en cuenta que esto creará copias duplicadas de fotos que ya existen en las carpetas basadas en año. Si el almacenamiento es una preocupación, es posible que quieras omitir este paso o copiar selectivamente solo ciertos álbumes.

## Entendiendo los Metadatos y Formatos de Archivo

### Qué se Transfiere

- **Fotos y videos en resolución original** — los archivos se transfieren en su calidad original, no en las versiones comprimidas de "ahorro de almacenamiento".
- **Nombres de archivo** — se conservan los nombres de archivo originales de la cámara (por ejemplo, `IMG_20240615_143022.jpg`).
- **Fechas de archivo** — las marcas de tiempo de creación y modificación se conservan cuando el formato lo permite.

### Qué No se Transfiere

- **Metadatos de Google Photos** — descripciones, etiquetas, datos de reconocimiento facial e información de ubicación almacenados en la base de datos de Google Photos no se transfieren. Estos metadatos son propiedad exclusiva de la plataforma de Google.
- **Ediciones realizadas en Google Photos** — si editaste una foto en Google Photos (recortada, con filtros, etc.), solo la versión original sin editar está disponible a través de la API. La versión editada no es accesible.
- **Contexto de álbumes compartidos** — las fotos compartidas contigo por otras personas pueden o no ser accesibles según la configuración de uso compartido de Google.

### Datos EXIF

La buena noticia es que la mayoría de los metadatos importantes están incrustados directamente en los archivos de fotos como datos EXIF. Esto incluye:

- **Fecha y hora** en que se tomó la foto.
- **Modelo de cámara** y configuraciones (apertura, velocidad de obturación, ISO).
- **Coordenadas GPS** (si la ubicación estaba habilitada cuando se tomó la foto).

Estos datos EXIF se transfieren junto con el archivo y son legibles por OneDrive, Windows Photos y prácticamente cualquier aplicación de gestión de fotos.

## Verificando la Migración

Después de que se complete la transferencia, verifica que todo haya llegado correctamente.

### Comparación de Carpetas

Usa la función de **Comparar** de RcloneView:

1. Abre Google Photos en un panel y OneDrive en el otro.
2. Navega a directorios coincidentes (por ejemplo, `media/by-year/2024/` y `Photos/2024/`).
3. Ejecuta una comparación para identificar archivos que existan en Google Photos pero falten en OneDrive.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folder contents" class="img-large img-center" />

### Revisión Puntual de Fotos

Abre varias fotos transferidas en OneDrive para confirmar:

- Que las imágenes se muestran correctamente y no están dañadas.
- Que los videos se reproducen correctamente.
- Que los tamaños de archivo coinciden con lo esperado (un JPEG de 5MB en Google Photos debería ser aproximadamente 5MB en OneDrive).

### Revisar el Historial de Trabajos

Revisa el panel de **Historial de Trabajos** en busca de errores durante la transferencia. Los problemas comunes incluyen:

- **Archivos omitidos** debido a caracteres no compatibles en los nombres de archivo.
- **Errores de tiempo de espera (timeout)** en archivos de video muy grandes.
- **Limitación de tasa (rate limiting)** por parte de la API de Google (poco común, pero posible con bibliotecas muy grandes).

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="job history" class="img-large img-center" />

## Consejos para una Migración sin Contratiempos

- **Ejecuta la migración durante horas de menor actividad.** Las bibliotecas de fotos grandes pueden tardar horas en transferirse. Iniciarla durante la noche le da al proceso tiempo ininterrumpido.
- **Usa la programación para bibliotecas muy grandes.** Si tienes más de 50,000 fotos, crea un trabajo programado que se ejecute diariamente. Cada ejecución continúa donde se quedó la anterior, y la migración se completa en varios días sin que tengas que monitorearla constantemente.
- **No elimines Google Photos todavía.** Mantén tu biblioteca de Google Photos intacta hasta que hayas verificado por completo la copia en OneDrive. Google Photos es de solo lectura a través de la API de todos modos, por lo que no existe riesgo de eliminación accidental desde RcloneView.
- **Verifica los límites de almacenamiento de OneDrive.** Asegúrate de que tu plan de OneDrive tenga suficiente espacio para toda tu biblioteca de fotos. Microsoft 365 Personal incluye 1 TB, y los planes Family ofrecen hasta 6 TB compartidos.
- **Considera la integración de carrete de cámara de OneDrive.** Después de la migración, puedes configurar la aplicación móvil de OneDrive para que suba automáticamente las fotos nuevas. Esto crea una transición fluida desde Google Photos de cara al futuro.
- **Presta atención a los límites de tasa de la API de Google.** La API de Google Photos tiene cuotas de uso. Si alcanzas los límites de tasa, RcloneView reintentará automáticamente, pero la transferencia puede ralentizarse temporalmente.

## Comenzando

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Conecta Google Photos** mediante OAuth en el asistente de Nuevo Remoto (acceso de solo lectura).
3. **Conecta OneDrive** mediante OAuth.
4. **Explora, copia y verifica**: tus recuerdos fotográficos, migrados de forma segura.

Tus fotos son irremplazables. RcloneView se asegura de que lleguen sanas y salvas a OneDrive.

---

**Guías Relacionadas:**

- [Agregar inicio de sesión en línea OAuth](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [Comparar el contenido de carpetas](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Ejecutar y administrar trabajos](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)

<CloudSupportGrid />
