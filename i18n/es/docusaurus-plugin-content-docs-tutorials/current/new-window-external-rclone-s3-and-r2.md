---
sidebar_position: 11
description: "Aprende a transferir archivos grandes de AWS S3 a Cloudflare R2 a alta velocidad usando un daemon Rclone externo en EC2, gestionado por completo con RcloneView."
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - aws
  - ec2
  - aws s3
  - external rclone
  - cloud to cloud transfer
  - cloud sync
  - Cloud Migration
  - cloud storage
  - cloud transfer
  - file synchronization
  - cloudflare r2
  - cloudflare s3 api
  - cloudflare r2 rclone
tags:
  - RcloneView
  - cloud-file-transfer
  - cloud-migration
  - Tutorial
  - cloud-to-cloud
  - aws-s3
  - cloudflare-r2
  - aws-ec2
date: 2025-07-13
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# Transferencias de archivos de alto rendimiento entre AWS S3 y Cloudflare R2 mediante Rclone externo en EC2

Los equipos modernos suelen combinar múltiples plataformas de almacenamiento de objetos y rápidamente descubren que el ancho de banda, la latencia y las tarifas de egreso se convierten en obstáculos críticos cuando conjuntos de datos grandes pasan por un escritorio local. Ejecutar **Rclone** directamente en una instancia en la nube—y controlarlo después mediante **RcloneView**—lleva el tráfico pesado a la red troncal de alta velocidad de la nube y mantiene tu portátil fuera de la ruta de datos.

<img src="/support/images/en/tutorials/transfer-files-between-aws-s3-and-cloudflare-r2-with-external-rclone.png" alt="transfer files between aws s3 and cloudflare r2 with external rclone" class="img-medium img-center" />

El siguiente recorrido adapta la estructura de la guía "Sincronizar AWS S3 y Google Drive vía EC2" y la extiende al escenario S3 ↔ R2. Aprenderás a:

1. Poner en marcha Rclone como un daemon de control remoto (**rcd**) en un servidor AWS EC2.
2. Abrir una ventana independiente de RcloneView y conectarte a ese Rclone externo.
3. Añadir remotos de AWS S3 y Cloudflare R2 dentro del Rclone alojado en EC2.
4. Transferir, sincronizar o programar trabajos—completamente de nube a nube—sin limitaciones de ancho de banda local.

:::danger Tarifas de transferencia de datos de AWS
El tráfico dentro de la misma zona de disponibilidad es gratuito, pero el tráfico entre zonas de disponibilidad (AZ) y el egreso a Internet generan costos (normalmente $0.02/GB entre AZ; $0.09/GB hacia Internet). 
Consulta: [Precios de AWS – Transferencia de datos](https://aws.amazon.com/ec2/pricing/on-demand/#Data_Transfer)
:::

## **¿Por qué usar un Rclone externo?**

| Rclone local integrado                                                                  | Rclone externo en EC2                                                                    |
| -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Ruta del tráfico: **S3 → PC local → R2** — doble salto y limitado por la velocidad de subida del hogar. | Ruta del tráfico: **S3 → EC2 → R2** — un solo salto dentro de la red troncal de la nube, a menudo de 10-25 Gbit/s. |
| Los límites del ISP doméstico o el ancho de banda asimétrico ralentizan las migraciones grandes. | Rendimiento mucho más alto; sin límites locales.                                                  |
| La CPU y RAM locales deben calcular el hash de cada byte.                                                | Descarga la CPU a una VM en la nube; puedes elegir tamaños de instancia más grandes bajo demanda.                |
| Posibles problemas de NAT/firewall.                                                      | IP pública con el puerto 5572 abierto (o túnel vía SSH).                                          |

## Parte 1. Desplegar Rclone en EC2 (Rclone externo)

1. **Lanza una instancia EC2 con Ubuntu** (t3.medium o superior para subidas multihilo).
2. **Abre el puerto TCP 5572** en el grupo de seguridad (o usa un túnel SSH).
3. **Instala Rclone**:
```bash
curl https://rclone.org/install.sh | sudo bash
```
4. **Ejecuta el daemon rcd** con autenticación básica:
```bash
rclone rcd --rc-addr=0.0.0.0:5572 --rc-user=admin --rc-pass=admin --log-level INFO
```
    El flag `--rc-addr` expone endpoints HTTP para que RcloneView los invoque.
    
5. **Comprueba el estado** desde tu portátil:
```bash
   curl -u admin:admin -X POST "http://<EC2-IP or DNS-NAME>:5572/rc/noop"
```
    Una respuesta JSON `{}` confirma que el daemon está escuchando.

👉 Más información: [Cómo ejecutar Rclone en un servidor AWS EC2](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)

## Parte 2. Abrir una nueva ventana de RcloneView

Para mantener las conexiones organizadas, RcloneView permite que cada ventana funcione con su propio motor Rclone.

1. Abre **RcloneView**  
2. Haz clic en el botón **`New Window`** en el menú `Home`. 
3. Se abrirá una nueva ventana de la aplicación. Esta instancia es independiente de la ventana principal y mantendrá su propio contexto de conexión.  

  📌 _Conectarás esta ventana a tu Rclone externo (EC2) en el siguiente paso..  

👉 Más información: [Usar múltiples conexiones de Rclone con New Window](/howto/rcloneview-advanced/multi-window).

## Parte 3. Conectar con el Rclone alojado en EC2

En la **ventana recién abierta**, sigue estos pasos para conectarte a tu Rclone externo alojado en EC2:

1. En la nueva ventana, abre **Settings → Connection Manager**.
2. Haz clic en **New Connection** y completa el formulario:

| Campo          | Valor                              |
| -------------- | ---------------------------------- |
| Display Name   | `ec2-rclone`                       |
| Remote Address | `http://<EC2-IP or DNS-NAME>:5572` |
| Username       | `admin`                            |
| Password       | `admin`                            |

4. Haz clic en **`Test Connection`** para verificar la configuración.  
   Deberías ver una respuesta de conexión exitosa.  
5. Si la prueba se supera, haz clic en **`Save`** y luego en **`Connect`.  
6. Ahora estás conectado a tu **instancia de Rclone externo ejecutándose en EC2**, y el estado de la conexión debería aparecer en la parte superior de la ventana.   

<div class="img-grid-2"> <img src="/support/images/en/tutorials/new-connection-to-ec2-rclone.png" alt="Create EC2 connection" class="img-medium img-center" /> <img src="/support/images/en/tutorials/connected-to-ec2-rclone.png" alt="Connected to EC2" class="img-medium img-center" /> </div>

## Parte 4. Añadir remotos de AWS S3 y Cloudflare R2 (vía Rclone externo)


### ➕ Añadir remoto de AWS S3

1. Ve a la pestaña **`Remote`** y haz clic en **`+ New Remote`**.
2. En la pestaña **`Provider`**, elige **Amazon S3**.
3. En la pestaña **`Options`**:
   - Establece `provider` en `AWS`
   - Ingresa tu **Access Key ID** y **Secret Access Key**
   - La región y el endpoint pueden dejarse por defecto salvo que se personalicen
4. Haz clic en **Save** para completar la configuración.

👉 Más información:   
- [Cómo añadir un remoto S3](/howto/remote-storage-connection-settings/s3)
- [Cómo obtener las credenciales de acceso de AWS S3](/howto/cloud-storage-setting/aws-account-info)
    
### ➕ Añadir remoto de Cloudflare R2

1. De nuevo, haz clic en **`+ New Remote`** en la pestaña `Remote`.
2. En la pestaña **`Provider`**, selecciona **S3** (sí, otra vez—R2 usa el protocolo S3).
3. En la pestaña **`Options`**:
   - Establece `provider` en `Cloudflare`
   - Ingresa tu **Cloudflare R2 Access Key** y **Secret Key**
   - Establece `endpoint` en `https://<accountid>.r2.cloudflarestorage.com`
1. Haz clic en **Save** para completar la configuración del remoto R2.

👉 Más información:   
- [Cómo añadir un remoto S3](/howto/remote-storage-connection-settings/s3)
- [Cómo obtener las credenciales de acceso de Cloudflare R2](/howto/cloud-storage-setting/cloudflare-r2-credential)
    
<img src="/support/images/en/tutorials/open-aws-s3-and-cloudflare-r2-remotes.png" alt="open aws s3 and cloudflare r2 remotes" class="img-medium img-center" />

## Parte 5. Sincronizar archivos entre AWS S3 y Cloudflare R2

### 🔁 Método A: Usar Sync o Job

1. En el panel del Explorer, selecciona la carpeta de **Cloudflare R2** y la carpeta de **AWS S3** que quieres sincronizar.
2. Haz clic en el botón **`Sync`** en el menú `home`.
3. Elige las opciones de sincronización (unidireccional o bidireccional), previsualiza las acciones y confirma.
4. RcloneView ejecuta la sincronización y muestra el progreso en la pestaña de registro **`transfer`**.

- Para transferencias repetidas o programadas:
  1. Haz clic en **`Save to Jobs`** en el modal de Sync, o abre **`Job Manager`** → **`Add Job`**.
  2. Configura el origen, el destino y las opciones.
  3. Guarda y ejecuta manualmente o establece una programación.

👉 Más información:
- [Sincronizar almacenamientos remotos](/howto/rcloneview-basic/synchronize-remote-storages)
- [Crear trabajos de sincronización](/howto/rcloneview-basic/create-sync-jobs)
- [Ejecutar y gestionar trabajos](/howto/rcloneview-basic/execute-manage-job)

---

### ⏰ Método B: Programar un trabajo de sincronización recurrente

1. En el panel del Explorer, selecciona las carpetas de **Cloudflare R2** y **AWS S3** que quieres mantener sincronizadas.
2. Abre **`Job Manager`** desde el menú **`Home`** o **`Remote`**, y haz clic en **`Add Job`**.
3. Confirma tu origen y destino.
4. Usa el editor de programación para establecer cuándo debe ejecutarse el trabajo. Previsualiza tu programación antes de guardar.
5. Guarda y activa el trabajo programado.

RcloneView ejecutará la sincronización en los momentos especificados. Consulta los detalles de ejecución y los registros en **`Job History`** y recibe notificaciones al finalizar.

👉 Más información: [Programación y ejecución de trabajos](/howto/rcloneview-advanced/job-scheduling-and-execution)

##  ⚡ Hoja de referencia para ajuste de rendimiento

| Parámetro                 | Valor recomendado                                    | Nivel de impacto | Justificación                                                                                                                                                                         |
| ------------------------- | ---------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--s3-chunk-size`         | `50M`                                                | *****        | Partes más grandes reducen las operaciones de Clase A en R2 y mejoran la velocidad[1](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311).   |
| `--s3-upload-concurrency` | `32–64`                                              | ***          | Aumenta los hilos multiparte para R2.                                                                                                                                               |
| `--transfers`             | `32–64`                                              | *            | Las subidas de objetos en paralelo aumentan el rendimiento en enlaces de 10 Gbit[1](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311). |
| `--s3-disable-checksum`   | Añadir solo al reconciliar <br />checksums externamente | ****         | Omite el cuello de botella del hashing por parte—usar con precaución[1](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311).        |
## 📈 Resultados de ajuste en el mundo real

Para maximizar el rendimiento durante las transferencias de nube a nube, ajustamos la configuración del **remoto Cloudflare R2** como se describe a continuación.

:::caution Solo resultados experimentales

RcloneView es una interfaz gráfica para Rclone. Los consejos de ajuste de rendimiento y los benchmarks compartidos aquí se basan en pruebas experimentales inspiradas en publicaciones de la comunidad ( [Cómo maximizar la velocidad de subida multiparte a Cloudflare R2](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311)) y pueden variar según tu entorno de nube específico, región, condiciones de red y caso de uso.

Estos resultados **no están garantizados** y deben usarse solo como referencia.
:::

### 🔧 Cómo actualizar la configuración del remoto R2

Para cambiar la configuración del remoto R2 de destino:

1. En el panel **Explorer**, haz clic en el icono de engranaje junto a tu remoto de Cloudflare R2, o ve a **Remote Manager → Edit**.
2. En la pestaña **`Options`**, haz clic en **`Show advanced options`**.
3. Establece los siguientes valores:
   - `chunk_size = 50Mi`
   - `upload_concurrency = 32`
4. Guarda los cambios.

La opción `disable_checksum` también puede tener un impacto significativo en la velocidad de transferencia. Sin embargo, para esta prueba la dejamos en su valor predeterminado (`false`) para preservar las comprobaciones de integridad durante la transferencia de archivos.
<img src="/support/images/en/tutorials/chunk-size-and-upload-concurrency-settings.png" alt="chunk size and upload concurrency settings" class="img-medium img-center" />
### 📉 Línea base: rendimiento predeterminado

Al usar la **configuración predeterminada**:

```text
- chunk_size = 5Mi 
- upload_concurrency = 4. 
```

observamos velocidades de transferencia de aproximadamente **114 MB/s** al mover archivos grandes de **AWS S3** a **Cloudflare R2** mediante **Rclone alojado en EC2**.
<img src="/support/images/en/tutorials/transfer-speed-with-default-options.png" alt="transfer speed with default options" class="img-medium img-center" />

### 🚀 Después del ajuste: aumento de rendimiento de 4×

Al actualizar el remoto Cloudflare R2 con la configuración optimizada:

```text
- chunk_size = 50Mi 
- upload_concurrency = 32

```

y manteniendo `disable_checksum = false`, logramos velocidades de alrededor de **440 MB/s**—una mejora de **4×** respecto al valor predeterminado.

<img src="/support/images/en/tutorials/high-transfer-speed-with-chunk-size-and-upload-concurrency.png" alt="high transfer speed with chunk size and upload concurrency" class="img-medium img-center" />
## ✅ Resumen

Las transferencias de nube a nube ya no necesitan arrastrarse a través de tu portátil. Al delegar el trabajo pesado a un daemon Rclone externo en EC2, desbloqueas velocidades de migración cercanas a la velocidad de línea, evitas sorpresas en las tarifas de egreso de AWS y mantienes tu flujo de trabajo completamente visual dentro de RcloneView. Comienza tu próxima migración S3 ↔ R2 con confianza—y despídete de los cuellos de botella locales.

---

## 🔗 Guías relacionadas

- **Configuración de almacenamiento**
	- [Cómo añadir remotos compatibles con S3](/howto/remote-storage-connection-settings/s3)
	- [Cómo obtener las credenciales de acceso de AWS S3](/howto/cloud-storage-setting/aws-account-info)
	- [Cómo obtener las credenciales de acceso de Cloudflare R2](/howto/cloud-storage-setting/cloudflare-r2-credential)
- **EC2 y Rclone remoto**
	- [Cómo ejecutar Rclone en AWS EC2](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)
- **Gestión de ventanas y conexiones**
	- [Usar múltiples conexiones de Rclone con New Window](/howto/rcloneview-advanced/multi-window)
	- [Gestionar múltiples ventanas de RcloneView](https://www.perplexity.ai/support/howto/rcloneview-advanced/multi-window) <!-- external duplicate, optional to keep -->
- **Sincronización y control de trabajos**
	- [Sincronizar almacenamientos remotos](/howto/rcloneview-basic/synchronize-remote-storages)
	- [Crear trabajos de sincronización](/howto/rcloneview-basic/create-sync-jobs)
	- [Ejecutar y gestionar trabajos](/howto/rcloneview-basic/execute-manage-job)
	- [Programación y ejecución de trabajos](/howto/rcloneview-advanced/job-scheduling-and-execution)
- **Consideraciones de costos**
	- [Precios de AWS – Transferencia de datos](https://aws.amazon.com/ec2/pricing/on-demand/#Data_Transfer)
- **Optimización de rendimiento**
	- [Cómo maximizar la velocidad de subida multiparte a Cloudflare R2](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311)

<CloudSupportGrid />
