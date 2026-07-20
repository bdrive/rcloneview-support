---
sidebar_position: 10
description: Aprende a migrar tus datos de Amazon S3 a Cloudflare R2 usando RcloneView.
keywords:
  - rcloneview
  - howto
  - cloud
  - sync
  - rclone
  - cloud to cloud transfer
  - rclone GUI
  - cloud sync
  - Cloud Migration
  - cloud storage
  - cloud transfer
  - file synchronization
  - aws s3
  - cloudflare r2
tags:
  - RcloneView
  - cloud-file-transfer
  - cloud-migration
  - Tutorial
  - cloud-to-cloud
  - aws-s3
  - cloudflare-r2
date: 2025-07-12
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';


# Migración de AWS S3 a Cloudflare R2 con RcloneView

En el panorama actual impulsado por la nube, las organizaciones y desarrolladores suelen buscar optimizar los costos de almacenamiento, evitar la dependencia de un proveedor y mejorar la accesibilidad de los datos. **Amazon S3** ha sido durante mucho tiempo el estándar de la industria para el almacenamiento de objetos, ofreciendo alta durabilidad e integración perfecta con los servicios de AWS. Sin embargo, a medida que crecen los volúmenes de transferencia de datos, las tarifas de salida (egress) de S3 y su facturación compleja pueden convertirse en una carga considerable.

**Cloudflare R2** surge como una alternativa atractiva, ofreciendo almacenamiento compatible con S3 sin tarifas de salida, un modelo de precios transparente y rendimiento global gracias a la extensa red perimetral de Cloudflare. Migrar de S3 a R2 te permite:

- **Eliminar las tarifas de salida** y reducir los costos generales de almacenamiento en la nube
- **Evitar la dependencia de un proveedor** gracias a la compatibilidad con la API de S3 y configuraciones multi-nube flexibles
- **Aprovechar la red perimetral global de Cloudflare** para un acceso a los datos más rápido y confiable
- **Simplificar la facturación** y la gestión con un panel intuitivo

La migración manual entre plataformas en la nube es tediosa y propensa a errores. Ahí es donde **RcloneView** marca la diferencia.

<img src="/support/images/en/tutorials/transfer-files-between-aws-s3-and-cloudflare-r2.png" alt="transfer files between aws s3 and cloudflare r2" class="img-medium img-center" />

## ¿Por qué usar RcloneView para migrar de S3 a R2?

RcloneView es un gestor de almacenamiento en la nube con interfaz gráfica construido sobre Rclone. Es compatible de forma nativa con **endpoints compatibles con S3** como AWS S3 y Cloudflare R2, ofreciendo:

- Soporte completo para **autenticación con clave de acceso / clave secreta**
- Posibilidad de establecer endpoints personalizados (para R2)
- Explorador de doble panel para migración de archivos mediante arrastrar y soltar
- Herramientas de comparación de carpetas y sincronización
- Trabajos programados para migraciones masivas o incrementales
- Registros de progreso detallados y manejo de errores

Ya sea que estés moviendo terabytes de datos o solo unas pocas carpetas, RcloneView te permite migrar con confianza, sin necesidad de conocimientos de línea de comandos.

## 🔄 Transferir archivos de AWS S3 a Cloudflare R2

### Paso 1: Agregar el remoto de AWS S3

1. Abre **RcloneView**, ve a la pestaña **`Remote`** y haz clic en **`+ New Remote`**.
2. En la pestaña **`Provider`**, elige **Amazon S3**.
3. En la pestaña **`Options`**:
   - Establece `provider` en `AWS`
   - Ingresa tu **Access Key ID** y **Secret Access Key**
   - La región y el endpoint pueden dejarse por defecto salvo que necesites personalizarlos
4. Haz clic en **Save** para completar la configuración.

👉 Más información:   
- [Cómo agregar un remoto S3](/howto/remote-storage-connection-settings/s3)
- [Cómo obtener las credenciales de acceso de AWS S3](/howto/cloud-storage-setting/aws-account-info)
### Paso 2: Agregar el remoto de Cloudflare R2

1. Nuevamente, haz clic en **`+ New Remote`** en la pestaña `Remote`.
2. En la pestaña **`Provider`**, selecciona **S3** (sí, otra vez—R2 usa el protocolo de S3).
3. En la pestaña **`Options`**:
   - Establece `provider` en `Cloudflare`
   - Ingresa tu **Cloudflare R2 Access Key** y **Secret Key**
   - Establece `endpoint` en `https://<accountid>.r2.cloudflarestorage.com`
1. Haz clic en **Save** para completar la configuración del remoto R2.

👉 Más información:   
- [Cómo agregar un remoto S3](/howto/remote-storage-connection-settings/s3)
- [Cómo obtener las credenciales de acceso de Cloudflare R2](/howto/cloud-storage-setting/cloudflare-r2-credential)

### Paso 3: Abrir los remotos en el explorador de doble panel

1. Ve a la pestaña **Browse** en RcloneView.
2. En el panel izquierdo, haz clic en `+` y selecciona tu remoto de **AWS S3**.
3. En el panel derecho, haz clic en `+` y selecciona tu remoto de **Cloudflare R2**.
4. Ahora podrás ver y gestionar ambos servicios uno junto al otro.

<img src="/support/images/en/tutorials/open-aws-s3-and-cloudflare-r2-remotes.png" alt="open aws s3 and cloudflare r2 remotes" class="img-medium img-center" />

---
## 📌 Métodos de migración de archivos

### 🖱️ Método 1: Arrastrar y soltar archivos

- Selecciona archivos o carpetas de AWS S3 en la izquierda.
- Arrástralos y suéltalos en el panel de Cloudflare R2 a la derecha.
- La transferencia comienza automáticamente, con el progreso mostrado en la pestaña **`Transfer`**.

👉 Más información: [Explorar y gestionar almacenamiento remoto](/howto/rcloneview-basic/browse-and-manage-remote-storage)

---

### 🔍 Método 2: Comparar carpetas y transferir

1. En ambos paneles, navega hasta las carpetas de origen (S3) y destino (R2) correspondientes.
2. Haz clic en **`Compare`** en el menú `Home`.
3. RcloneView resaltará:
   - Archivos que solo existen en S3
   - Archivos que ya existen en R2
   - Los mismos archivos con tamaños o marcas de tiempo diferentes
4. Haz clic en **Copy →** para migrar los archivos seleccionados de S3 a R2.
5. Usa **Delete** para limpieza si es necesario.

👉 Más información: [Comparar el contenido de carpetas](/howto/rcloneview-basic/compare-folder-contents)

---

### 🔁 Método 3: Usar sincronización o trabajo

1. En el panel del Explorador, selecciona la carpeta de **Cloudflare R2** y la carpeta de **AWS S3** que deseas sincronizar.
2. Haz clic en el botón **`Sync`** en el menú `home`.
3. Elige las opciones de sincronización (unidireccional o bidireccional), previsualiza las acciones y confirma.
4. RcloneView ejecuta la sincronización y muestra el progreso en la pestaña de registro **`transfer`**.

- Para transferencias repetidas o programadas:
  1. Haz clic en **`Save to Jobs`** en el modal de sincronización, o abre **`Job Manager`** → **`Add Job`**.
  2. Configura el origen, el destino y las opciones.
  3. Guarda y ejecuta manualmente o establece una programación.

👉 Más información:
- [Sincronizar almacenamientos remotos](/howto/rcloneview-basic/synchronize-remote-storages)
- [Crear trabajos de sincronización](/howto/rcloneview-basic/create-sync-jobs)
- [Ejecutar y gestionar trabajos](/howto/rcloneview-basic/execute-manage-job)

---

### ⏰ Método 4: Programar un trabajo de sincronización recurrente

1. En el panel del Explorador, selecciona las carpetas de **Cloudflare R2** y **AWS S3** que deseas mantener sincronizadas.
2. Abre **`Job Manager`** desde el menú **`Home`** o **`Remote`**, luego haz clic en **`Add Job`**.
3. Confirma tu origen y destino.
4. Usa el editor de programación para establecer cuándo debe ejecutarse el trabajo. Previsualiza tu programación antes de guardar.
5. Guarda y habilita el trabajo programado.

RcloneView ejecutará la sincronización en los horarios que especifiques. Consulta los detalles de ejecución y los registros en **`Job History`** y recibe notificaciones al finalizar.

👉 Más información: [Programación y ejecución de trabajos](/howto/rcloneview-advanced/job-scheduling-and-execution)


---

## ✅ Resumen

Migrar de AWS S3 a Cloudflare R2 ayuda a reducir los costos de salida y la dependencia de un proveedor, sin sacrificar el rendimiento. Con RcloneView, la transición es rápida, segura y completamente visual.

Pruébalo hoy mismo y prepara tu configuración de almacenamiento en la nube para el futuro con Cloudflare R2.

---

## 🔗 Guías relacionadas

- [Cómo agregar un remoto S3](/howto/remote-storage-connection-settings/s3)
- [Cómo obtener las credenciales de acceso de AWS S3](/howto/cloud-storage-setting/aws-account-info)
- [Cómo obtener las credenciales de acceso de Cloudflare R2](/howto/cloud-storage-setting/cloudflare-r2-credential)
- [Explorar y gestionar almacenamiento remoto](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Comparar el contenido de carpetas](/howto/rcloneview-basic/compare-folder-contents)
- [Sincronizar almacenamientos remotos](/howto/rcloneview-basic/synchronize-remote-storages)
- [Crear trabajos de sincronización](/howto/rcloneview-basic/create-sync-jobs)
- [Ejecutar y gestionar trabajos](/howto/rcloneview-basic/execute-manage-job)
- [Programación y ejecución de trabajos](/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
