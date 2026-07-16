---
slug: manage-azure-files-cloud-sync-rcloneview
title: "Gestiona Azure Files con RcloneView: sincronización, copia de seguridad y montaje de recursos SMB en la nube"
authors:
  - tayson
description: Aprende a gestionar recursos compartidos de Azure Files con RcloneView — añade remotos, explora recursos SMB, sincroniza con otras nubes, monta como unidad local y programa copias de seguridad.
keywords:
  - rcloneview
  - azure files
  - azure file shares
  - smb cloud storage
  - cloud sync
  - mount azure files
  - azure backup
  - rclone GUI
  - multi-cloud management
  - azure file management
tags:
  - azure-files
  - azure
  - mount
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona Azure Files con RcloneView: sincronización, copia de seguridad y montaje de recursos SMB en la nube

> Azure Files te ofrece recursos compartidos SMB completamente gestionados en la nube. **RcloneView** te permite explorarlos, sincronizarlos, respaldarlos y montarlos — todo desde una interfaz visual sin necesidad de usar la línea de comandos.

Azure Files es el servicio de recursos compartidos gestionados de Microsoft, que ofrece acceso SMB y NFS directamente desde Azure. Es popular entre empresas que ejecutan cargas de trabajo híbridas, aplicaciones migradas ("lift-and-shift") y almacenamiento compartido para máquinas virtuales. Sin embargo, gestionar Azure Files fuera del Portal de Azure puede resultar engorroso — especialmente cuando necesitas mover datos entre Azure y otras nubes o mantener copias locales sincronizadas.

RcloneView resuelve esto envolviendo el backend de Azure Files de rclone en una GUI limpia de dos paneles. Puedes añadir tus recursos compartidos de archivos de Azure como un remoto, explorarlos visualmente, arrastrar archivos entre nubes, comparar el contenido de carpetas, programar copias de seguridad automatizadas e incluso montar recursos compartidos como una letra de unidad local.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué usar RcloneView para Azure Files

Azure Files funciona bien dentro del ecosistema de Azure, pero los flujos de trabajo reales suelen abarcar múltiples proveedores. Es posible que necesites:

- **Respaldar recursos compartidos de Azure Files** en una nube separada como Amazon S3, Backblaze B2 o Wasabi para recuperación ante desastres.
- **Sincronizar Azure Files con Google Drive o OneDrive** para que los miembros del equipo puedan acceder a los mismos datos desde herramientas conocidas.
- **Montar recursos compartidos de Azure localmente** para aplicaciones que esperan una ruta de archivo local en lugar de una cadena de conexión SMB.
- **Migrar datos** de Azure Files a otro proveedor — o en sentido contrario.

RcloneView gestiona todo esto sin scripts, PowerShell ni AzCopy.

## Añadir Azure Files como remoto

Configurar Azure Files en RcloneView lleva menos de un minuto:

1. Abre RcloneView y haz clic en **+ New Remote**.
2. Selecciona el tipo de almacenamiento **Azure Files** de la lista.
3. Introduce el **nombre de tu cuenta de Azure Storage** y la **clave de cuenta** (o token SAS).
4. Nombra tu remoto (por ejemplo, `AzureFileShares`) y guarda.

Tus recursos compartidos de archivos de Azure aparecerán ahora en el panel del Explorador, listos para explorar.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir un remoto de Azure Files en RcloneView" class="img-large img-center" />

## Explorar y gestionar recursos compartidos de archivos

Una vez conectado, RcloneView muestra tus recursos compartidos de Azure Files en un familiar diseño de dos paneles. Puedes:

- **Navegar por directorios** dentro de cualquier recurso compartido — profundizar en carpetas anidadas igual que en un gestor de archivos local.
- **Previsualizar metadatos de archivos** como tamaño, fecha de modificación y ruta.
- **Renombrar, eliminar o crear** carpetas directamente desde la GUI.
- **Abrir una segunda nube** en el panel opuesto para gestionarlas en paralelo.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Explorador de dos paneles mostrando Azure Files junto a otra nube" class="img-large img-center" />

## Sincronizar Azure Files con otras nubes

El verdadero poder de RcloneView se muestra al conectar Azure Files con otra nube. Carga Azure Files en un lado y tu destino — Google Drive, OneDrive, Amazon S3 o cualquier remoto compatible — en el otro.

### Arrastrar y soltar

Selecciona archivos o carpetas en Azure Files y arrástralos al panel de destino. RcloneView gestiona la transferencia en segundo plano y muestra el progreso en tiempo real.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Arrastrar y soltar archivos desde Azure Files a otra nube" class="img-large img-center" />

### Comparar y copia selectiva

Usa la función **Compare** para ver qué archivos son nuevos, han cambiado o faltan en cada lado. Luego copia solo las diferencias — perfecto para actualizaciones incrementales sin transferir todo.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparar carpetas entre Azure Files y una nube de destino" class="img-large img-center" />

### Sincronización completa

Ejecuta una operación de **Sync** para hacer que el destino sea un espejo exacto de tu recurso compartido de Azure Files. Usa siempre **Dry Run** primero para previsualizar los cambios antes de confirmarlos.

## Montar Azure Files como unidad local

RcloneView puede montar cualquier recurso compartido de archivos de Azure como una letra de unidad local en Windows, macOS o Linux. Esto es útil cuando:

- Las aplicaciones de escritorio necesitan una ruta local para leer o escribir archivos.
- Quieres acceder a Azure Files desde el Explorador de archivos o Finder sin un cliente SMB.
- Necesitas un montaje rápido y temporal para una tarea puntual.

Abre el remoto en el Explorador, haz clic derecho en un recurso compartido y selecciona **Mount**. Elige tu letra de unidad o punto de montaje, y el recurso compartido aparecerá como un volumen local.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Montar Azure Files como unidad local desde el Explorador de RcloneView" class="img-large img-center" />

## Programar copias de seguridad automatizadas

Para una protección continua, crea un **Scheduled Job** en RcloneView:

1. Configura un trabajo de Sync o Copy desde Azure Files hacia tu destino de copia de seguridad.
2. Abre el panel de **Job Scheduling** y define un horario — diario, semanal o una expresión cron personalizada.
3. Activa la programación y deja que RcloneView haga el resto.

Cada ejecución queda registrada en el panel de **Job History**, para que puedas auditar lo que se transfirió y detectar errores.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Programar un trabajo de copia de seguridad automatizado para Azure Files" class="img-large img-center" />

## Consejos para trabajar con Azure Files

- **Usa tokens SAS con alcance limitado** si deseas otorgar acceso a RcloneView sin exponer la clave completa de tu cuenta.
- **Monitorea el tamaño de las transferencias** — Azure Files cobra por almacenamiento y transacciones; sincronizar con frecuencia grandes cambios puede acumular costos.
- **Excluye archivos temporales** usando las reglas de filtro de RcloneView para evitar sincronizar archivos de bloqueo, registros o directorios de caché.
- **Prueba restauraciones periódicamente** copiando algunos archivos de vuelta desde tu destino de copia de seguridad para verificar su integridad.

## Cómo empezar

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Añade tu remoto de Azure Files** usando las credenciales de tu cuenta de almacenamiento.
3. **Explora, sincroniza, monta o programa** — todo desde la GUI, sin necesidad de CLI.

La gestión de Azure Files no tiene por qué significar pestañas del portal y scripts de PowerShell. RcloneView lo reúne todo en una sola ventana.

---

**Guías relacionadas:**

- [Transferencias y sincronización de nube a nube con RcloneView](https://rcloneview.com/support/blog/cloud-to-cloud-transfer-sync-rcloneview)
- [Migrar de Dropbox a Azure Blob Storage con RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-azure-blob-storage-rcloneview)
- [Gestionar buckets de Google Cloud Storage con RcloneView](https://rcloneview.com/support/blog/manage-google-cloud-storage-buckets-rcloneview)

<CloudSupportGrid />
