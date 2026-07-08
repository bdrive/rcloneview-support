---
slug: manage-sharepoint-cloud-sync-backup-rcloneview
title: "Gestiona Archivos de SharePoint y Sincronización en la Nube con RcloneView"
authors:
  - tayson
description: "Gestiona archivos de SharePoint Online con RcloneView. Sincroniza, realiza copias de seguridad y transfiere datos entre bibliotecas de documentos de SharePoint y otros proveedores de la nube mediante una GUI visual."
keywords:
  - rcloneview
  - sharepoint sync rcloneview
  - sharepoint backup
  - sharepoint file manager
  - sharepoint cloud sync tool
  - sharepoint to google drive
  - sharepoint rclone gui
  - sharepoint document library backup
  - sharepoint multi-cloud
  - sharepoint automated backup
tags:
  - RcloneView
  - sharepoint
  - cloud-storage
  - cloud-sync
  - guide
  - backup
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona Archivos de SharePoint y Sincronización en la Nube con RcloneView

> SharePoint Online impulsa la gestión de documentos en todo Microsoft 365, pero sincronizar su contenido con nubes externas o un NAS requiere una herramienta diseñada específicamente para ello — **RcloneView** cubre esa necesidad.

SharePoint Online es la columna vertebral de gestión documental para millones de organizaciones que usan Microsoft 365. Cada sitio de SharePoint contiene bibliotecas de documentos que almacenan archivos de equipo, activos de proyecto y registros corporativos. Aunque el cliente nativo de sincronización de OneDrive puede sincronizar bibliotecas de SharePoint con máquinas locales, no ofrece ningún mecanismo para replicar datos en AWS S3, Google Drive u otro almacenamiento externo. RcloneView se conecta a SharePoint Online a través de la API de Microsoft Graph y expone las bibliotecas de documentos como remotos navegables — explora, sincroniza, copia, mueve y programa copias de seguridad entre SharePoint y cualquier otro proveedor.

Ya sea que necesites respaldar una biblioteca sensible al cumplimiento normativo en almacenamiento inmutable de S3 o migrar el sitio de SharePoint de un equipo saliente a Google Workspace, RcloneView lo gestiona mediante una interfaz visual.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar SharePoint en RcloneView

Los remotos de SharePoint en RcloneView se configuran a través del tipo de remoto OneDrive. Durante la autorización OAuth, selecciona **SharePoint site** en lugar de OneDrive Personal o Business. RcloneView consulta la API de Graph para obtener los sitios disponibles y te permite elegir el sitio de destino y la biblioteca de documentos.

Cada biblioteca de documentos aparece como una ruta navegable independiente. Si tu organización tiene decenas de sitios de SharePoint — Marketing, Ingeniería, Legal, RRHH — puedes agregar cada uno como un remoto separado o alternar entre bibliotecas dentro de una sola configuración de remoto.

La limitación de la API de SharePoint sigue los mismos patrones que OneDrive for Business — respuestas 429 con encabezados Retry-After. RcloneView las respeta automáticamente, usando retroceso exponencial para garantizar que las transferencias grandes se completen sin intervención manual.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a SharePoint remote in RcloneView Remote Manager" class="img-large img-center" />

## Navegar por las Bibliotecas de Documentos de SharePoint

Las bibliotecas de documentos de SharePoint pueden contener estructuras de carpetas anidadas, columnas de metadatos y archivos con control de versiones. El explorador de RcloneView muestra el árbol de carpetas y el listado de archivos en su familiar diseño de dos paneles. Puedes navegar por jerarquías de carpetas profundas, seleccionar archivos en varias carpetas y realizar operaciones masivas — copiar, mover, eliminar o descargar.

SharePoint impone restricciones de nombre de archivo más estrictas que muchos otros proveedores. Caracteres como `#`, `%` y `*` no están permitidos, y la longitud de las rutas está limitada a 400 caracteres. Al sincronizar desde un proveedor menos restrictivo (como Google Drive o un sistema de archivos local) hacia SharePoint, RcloneView codifica o reemplaza automáticamente los caracteres restringidos para evitar fallos en la transferencia.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browsing SharePoint document libraries in RcloneView two-pane explorer" class="img-large img-center" />

## Sincronizar SharePoint con Otros Proveedores de Nube

Las organizaciones frecuentemente necesitan replicar datos de SharePoint en sistemas externos — una nube secundaria para recuperación ante desastres, un NAS para acceso local, o un conjunto de nube diferente durante una migración de plataforma. RcloneView simplifica esto.

Abre tu biblioteca de SharePoint en un panel y el destino (AWS S3, Google Drive, Backblaze B2, una ruta local) en el otro. RcloneView compara las listas de archivos usando el tamaño y la fecha de modificación, transfiriendo solo los archivos modificados. Para migraciones iniciales con miles de archivos, las transferencias multihilo y los tamaños de fragmento configurables mantienen el proceso eficiente.

SharePoint almacena los hashes de archivo como QuickXorHash, el mismo algoritmo que usa OneDrive for Business. RcloneView admite QuickXorHash de forma nativa, lo que permite una detección precisa de cambios sin necesidad de descargar el contenido del archivo para comparar.

## Programar Copias de Seguridad Automatizadas de SharePoint

Las políticas de retención integradas de SharePoint y la papelera de reciclaje ofrecen cierta protección, pero operan dentro del ecosistema de Microsoft. Un ataque de ransomware que comprometa tu tenant de Microsoft 365 puede afectar los datos de SharePoint junto con todo lo demás. Una copia de seguridad independiente en un proveedor separado es la protección más sólida.

El programador de RcloneView automatiza esto. Configura un trabajo de sincronización nocturno desde una biblioteca de documentos de SharePoint hacia AWS S3 con el versionado activado, y RcloneView se encarga del resto. El panel de historial de trabajos registra cada ejecución con estadísticas de transferencia, lo que facilita verificar que las copias de seguridad se completan correctamente.

Para organizaciones con requisitos de cumplimiento normativo, combinar copias de seguridad programadas de SharePoint con S3 Object Lock o la función de bloqueo de archivos de Backblaze B2 crea un archivo inmutable que satisface los requisitos regulatorios de retención de datos.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated SharePoint backup in RcloneView" class="img-large img-center" />

## Comparar Carpetas y Verificar Migraciones

Después de sincronizar o migrar una biblioteca de SharePoint, usa la función de comparación de RcloneView para verificar que el proceso esté completo. Selecciona el origen de SharePoint y el destino de la copia de seguridad, y RcloneView resalta los archivos que existen solo en un lado, los que difieren y los que son idénticos. Esta verificación visual elimina las conjeturas y garantiza la integridad de los datos antes de dar de baja el original.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing SharePoint library with backup destination in RcloneView" class="img-large img-center" />

## Montar SharePoint como una Unidad Local

RcloneView puede montar una biblioteca de documentos de SharePoint como una letra de unidad local (Windows) o punto de montaje (macOS/Linux). Esto te permite acceder a los archivos de SharePoint desde cualquier aplicación de escritorio — software CAD, editores de imágenes o herramientas de análisis — sin la sobrecarga del cliente de sincronización de OneDrive.

Activa el almacenamiento en caché de VFS para guardar localmente los archivos de acceso reciente y así lograr un acceso repetido más rápido. Esto resulta especialmente útil para equipos que necesitan trabajar con archivos alojados en SharePoint en aplicaciones que no admiten almacenamiento en la nube de forma nativa.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting SharePoint as a local drive in RcloneView" class="img-large img-center" />

## Monitorear Transferencias

Las migraciones grandes de SharePoint pueden implicar cientos de miles de archivos. El panel de monitoreo en tiempo real de RcloneView muestra la velocidad de transferencia, el progreso por archivo y la finalización general. Puedes pausar, reanudar o cancelar transferencias individualmente. Los límites de ancho de banda evitan que las transferencias de SharePoint consuman toda tu conexión de red durante el horario laboral.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time SharePoint transfer monitoring in RcloneView" class="img-large img-center" />

## Primeros Pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Autoriza tu cuenta de Microsoft 365 mediante OAuth y selecciona el sitio de SharePoint y la biblioteca de documentos.
3. Explora tu biblioteca de SharePoint en el explorador de dos paneles y configura un trabajo de sincronización o copia hacia otro proveedor.
4. Programa una copia de seguridad diaria para mantener una copia independiente en S3, B2 u otra nube.

SharePoint gestiona la administración de documentos dentro de Microsoft 365, pero RcloneView garantiza que tus datos de SharePoint estén respaldados, sean portables y accesibles en todas las nubes que utilices.

---

**Guías Relacionadas:**

- [Agregar Remoto mediante Inicio de Sesión Basado en Navegador (OAuth)](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [Explorar y Gestionar Almacenamiento Remoto](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Crear Trabajos de Sincronización](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Programación de Trabajos](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
