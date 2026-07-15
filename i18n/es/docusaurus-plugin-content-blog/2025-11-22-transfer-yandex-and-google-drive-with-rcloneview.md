---
slug: transfer-yandex-and-google-drive-with-rcloneview
title: "Transfiere archivos entre Yandex Disk y Google Drive con RcloneView"
authors:
  - tayson
description: "Migra y sincroniza archivos entre Yandex Disk y Google Drive usando la GUI de RcloneView: inicio de sesión nativo de Yandex, OAuth para Google, arrastrar y soltar, Compare, Sync y trabajos programados."
keywords:
  - rcloneview
  - yandex disk
  - google drive
  - cloud migration
  - cloud sync
  - rclone
  - cloud transfer
  - multi cloud
  - cloud to cloud transfer
tags:
  - RcloneView
  - cloud
  - sync
  - cloud-migration
  - tutorial
  - yandex
  - google-drive
  - cloud-to-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Transfiere archivos entre Yandex Disk y Google Drive con RcloneView

> Mueve o sincroniza archivos entre Yandex Disk ↔ Google Drive sin usar la línea de comandos.  
> RcloneView ofrece paneles de Explorador lado a lado, Compare, Sync y trabajos programados, mientras gestiona por ti el inicio de sesión del navegador de Yandex y el OAuth de Google.

<!-- truncate -->


<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## ¿Por qué usar RcloneView para transferencias entre Yandex y Google Drive?

- **Inicio de sesión nativo de Yandex a través de tu navegador** (sin WebDAV, sin tokens manuales).
- **Inicio de sesión OAuth seguro** para Google Drive.
- **Paneles de Explorador lado a lado** para un arrastrar y soltar intuitivo.
- **Modo Compare** para previsualizar diferencias antes de copiar o eliminar.
- **Sync** con dry-run, filtros y soporte de checksum.
- **Trabajos reutilizables y programación** para copias de seguridad recurrentes y automatización.
- **Visibilidad total del progreso** mediante registros, reintentos y controles de ancho de banda.

RcloneView construye un flujo de trabajo visual sobre rclone, de modo que incluso las transferencias multicloud complejas resultan sencillas.

---

## Antes de empezar

- Asegúrate de poder iniciar sesión en tu **cuenta de Yandex**: la configuración utiliza inicio de sesión por navegador, no WebDAV.
- Revisa tu cuota de **Google Drive** y ten en cuenta el límite diario de subida de 750 GB de Google.
- Instala la última versión de RcloneView desde:  
  👉 https://rcloneview.com/src/download.html
- Para trabajos grandes, mantén tu computadora activa y prefiere redes estables.

---

## Paso 1: Agrega tus remotos en la nube

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />  

### Conecta Yandex Disk (inicio de sesión basado en navegador)

1. Abre **Remote → + New Remote**.
2. Selecciona **Yandex Disk** como proveedor.
3. Haz clic en **Connect**, lo que abrirá una página de inicio de sesión de Yandex en tu navegador.
4. Inicia sesión y concede acceso.
5. Guarda el remoto una vez que RcloneView confirme que la autenticación se completó.  

### Conecta Google Drive

1. Haz clic de nuevo en **+ New Remote**.
2. Elige **Google Drive**.
3. Presiona **Connect**, completa el inicio de sesión OAuth en el navegador y permite los permisos.
4. Guarda el remoto.

👉 Guía: [Agregar un remoto de Google Drive](/howto/#step-2-adding-remote-storage-google-drive-example)

---

## Paso 2: Abre ambas nubes en el panel del Explorador

1. Ve a la pestaña **Browse**.
2. Haz clic en el icono **+** del panel izquierdo → selecciona **Yandex Disk**.
3. Haz clic en el icono **+** del panel derecho → selecciona **Google Drive**.
4. Navega hasta las carpetas que quieras mover o sincronizar.  

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />  

---

## Cuatro formas de transferir archivos

### Método 1: Arrastrar y soltar entre paneles del Explorador

1. En el panel de Yandex, selecciona archivos o carpetas.
2. Arrástralos al panel de Google Drive (o en la dirección opuesta).
3. Observa el progreso en **Transfer**.  

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />  


👉 Referencia:  
[Explorar y gestionar almacenamiento remoto](/howto/rcloneview-basic/browse-and-manage-remote-storage)  
[Arrastrar y soltar archivos](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)  

---

### Método 2: Compare, luego copia o elimina

1. Abre la carpeta de origen en Yandex Disk (izquierda) y la carpeta de destino en Google Drive (derecha).
2. Selecciona **Compare**.
3. RcloneView resaltará:
   - Elementos presentes solo en un lado
   - Elementos que difieren en tamaño
   - Archivos coincidentes
4. Haz clic en **Copy →** o **← Copy** según la dirección.
5. Usa **Delete** con cuidado al limpiar duplicados.  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />  


👉 Guía: [Comparar el contenido de las carpetas](/howto/rcloneview-basic/compare-folder-contents)  


---

### Método 3: Sincroniza o guarda como un trabajo

1. Selecciona una **carpeta de Yandex** como origen y una **carpeta de Google Drive** como destino.
2. Haz clic en **Sync**.
3. Elige:
   - Sincronización unidireccional (Yandex → Google Drive)
   - Sincronización unidireccional (Google Drive → Yandex)
   - Sincronización bidireccional
4. Previsualiza las operaciones planificadas usando dry-run.
5. Ejecuta la sincronización, o haz clic en **Save to Jobs** para reutilizarla más adelante.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />  


👉 Más información:

- [Sincronizar almacenamientos remotos](/howto/rcloneview-basic/synchronize-remote-storages)
- [Crear trabajos de sincronización](/howto/rcloneview-basic/create-sync-jobs)
- [Ejecutar y gestionar trabajos](/howto/rcloneview-basic/execute-manage-job)

---

### Método 4: Programa trabajos de sincronización recurrentes

1. Abre **Job Manager → Add Job**.
2. Selecciona Yandex como origen y Google Drive como destino (o al revés).
3. Establece un intervalo (por ejemplo, diario, cada hora, semanal).
4. Activa el trabajo.
5. Revisa los registros y el Job History para ver los resultados.  

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />  

👉 Más información: [Programación y ejecución de trabajos](/howto/rcloneview-advanced/job-scheduling-and-execution)

---

## Consejos para transferencias sin problemas

- Usa **dry-run** antes de sincronizaciones unidireccionales grandes.
- La API de Google Drive puede limitar ráfagas muy grandes; reduce la concurrencia si es necesario.
- Mantén RcloneView en ejecución para los trabajos programados.

---

## Resumen

RcloneView hace que transferir archivos entre **Yandex Disk** y **Google Drive** sea simple y confiable.  
Con inicio de sesión nativo para ambos servicios, paneles visuales del Explorador, Compare, Sync y trabajos, puedes migrar o mantener tus flujos de trabajo multicloud sin tocar la línea de comandos.

<CloudSupportGrid />
