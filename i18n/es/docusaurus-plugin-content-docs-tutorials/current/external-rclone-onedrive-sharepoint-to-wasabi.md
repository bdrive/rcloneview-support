---
sidebar_position: 12
description: "Mueve archivos de OneDrive a Wasabi a alta velocidad ejecutando un daemon externo de Rclone y controlándolo con RcloneView."
keywords:
  - rcloneview
  - rclone
  - external rclone
  - onedrive
  - wasabi
  - s3 compatible
  - cloud migration
  - cloud sync
  - cloud transfer
tags:
  - RcloneView
  - cloud-file-transfer
  - cloud-migration
  - Tutorial
  - onedrive
  - wasabi
date: 2025-07-15
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# Mover OneDrive a Wasabi mediante Rclone externo

Cuando los conjuntos de datos de Microsoft 365 son grandes, moverlos a través de un portátil puede ser lento y poco fiable. Ejecutar **Rclone** en una VM en la nube (EC2, GCE o cualquier host Linux) y controlarlo desde **RcloneView** mantiene el tráfico dentro del centro de datos, evita los cuellos de botella de la red doméstica y permite la autenticación sin navegador.

Vas a:

1. Ejecutar **rclone rcd** en un servidor remoto como motor externo.
2. Abrir una **nueva ventana de RcloneView** que se conecte a ese Rclone externo.
3. Añadir remotos de **OneDrive** y **Wasabi** (incluyendo rutas de autenticación headless/solo CLI).
4. Copiar, sincronizar o programar trabajos de OneDrive a Wasabi sin consumir ancho de banda local.

## Parte 1. Desplegar Rclone en un servidor (Rclone externo)

1. Lanza una VM Linux pequeña (por ejemplo, `t3.medium` en AWS o equivalente).  
2. Abre el puerto TCP **5572** hacia tu IP o crea un túnel mediante SSH.  
3. Instala Rclone:
```bash
curl https://rclone.org/install.sh | sudo bash
```
4. Inicia el daemon de control remoto con autenticación:
```bash
rclone rcd --rc-addr=0.0.0.0:5572 --rc-user=admin --rc-pass=admin --log-level INFO
```
5. Desde tu portátil, confirma que es accesible:
```bash
curl -u admin:admin -X POST "http://<SERVER-IP>:5572/rc/noop"
```
   Una respuesta `{}` significa que el daemon está listo para RcloneView.

👉 ¿Necesitas un repaso? Consulta [Ejecutar Rclone en AWS EC2](/howto/cloud-storage-setting/run-rclone-on-aws-ec2).

## Parte 2. Abrir una nueva ventana de RcloneView

Cada ventana de RcloneView puede emparejarse con una instancia distinta de Rclone.

1. Abre **RcloneView**.  
2. Haz clic en **`New Window`** desde el menú **Home**.  
3. Se abre una segunda ventana; esta se conectará al Rclone externo que acabas de lanzar.

👉 Más información: [Uso de múltiples conexiones de Rclone con New Window](/howto/rcloneview-advanced/multi-window).

## Parte 3. Conectar RcloneView al Rclone externo

En la nueva ventana:

1. Abre **Settings -> Connection Manager** -> **New Connection**.  
2. Completa:

| Campo          | Valor                              |
| -------------- | ---------------------------------- |
| Display Name   | `external-rclone`                  |
| Remote Address | `http://<SERVER-IP>:5572`          |
| Username       | `admin`                            |
| Password       | `admin`                            |

3. Haz clic en **Test Connection** -> **Save** -> **Connect**. La barra de estado debería mostrar que estás conectado al daemon externo.

## Parte 4. Añadir los remotos de Wasabi y OneDrive (dentro del Rclone externo)

Todos los remotos que crees ahora residen dentro del proceso externo de Rclone y son compartidos por la ventana de RcloneView conectada.

### ➕ Añadir Wasabi (compatible con S3)

1. Ve a la pestaña **Remote** -> **`+ New Remote`**.  
2. Elige **S3 / Wasabi**.  
3. Introduce la **Access Key**, la **Secret Key** y el **endpoint** de tu región (por ejemplo, `s3.ap-northeast-2.wasabisys.com`).  
4. Guarda el remoto (por ejemplo, llámalo `wasabi-prod`).

👉 Detalles: [Cómo añadir el remoto Wasabi](/tutorials/#2-add-wasabi-as-a-remote-in-rcloneview).

### ➕ Añadir OneDrive (funciona sin navegador local)

1. Haz clic de nuevo en **`+ New Remote`** y selecciona **OneDrive**.  
2. Si el servidor tiene navegador, completa el flujo OAuth estándar en RcloneView.  
3. Si el servidor es headless o no puede abrir un navegador, sigue el método headless/CLI: genera el token en un dispositivo con navegador y pégalo en la configuración del lado del servidor.  

👉 Flujo headless paso a paso: [Añadir remotos de Microsoft desde EC2/headless](/howto/remote-storage-connection-settings/ec2-onedrive-headless).
Después de guardar, deberías ver dos remotos listados en el Explorer: **OneDrive** y **Wasabi**.

## Parte 5. Transferir o sincronizar hacia Wasabi

### Método A: Copia/sincronización única

1. En el Explorer, abre **OneDrive** en un lado y **Wasabi** en el otro.  
2. Selecciona la carpeta de origen en OneDrive y el bucket/carpeta de destino en Wasabi.  
3. Haz clic en **`Sync`** (hace que el destino coincida con el origen) o usa **Copy ->** para una copia simple.  
4. Opcionalmente ejecuta **Dry Run** primero, y luego **Run** para iniciar. El progreso aparece en la pestaña **Transfer**.

### Método B: Guardar o programar trabajos

1. Configura una copia/sincronización como se indicó anteriormente y elige **Save to Jobs** en el diálogo.  
2. Abre **Job Manager** para volver a ejecutar el trabajo guardado en cualquier momento.  
3. Para automatizar, habilita **Schedule** en Job Manager (función PLUS) y establece la frecuencia deseada.  
4. Consulta **Job History** para ver registros y resultados.

👉 Más sobre trabajos y programación:  
- [Crear trabajos de sincronización](/howto/rcloneview-basic/create-sync-jobs)  
- [Ejecutar y gestionar trabajos](/howto/rcloneview-basic/execute-manage-job)  
- [Programación y ejecución de trabajos](/howto/rcloneview-advanced/job-scheduling-and-execution)

## Consejos rápidos para subidas más rápidas a Wasabi

- Mantén la VM externa en la misma región que Wasabi cuando sea posible para reducir la latencia.  
- Para objetos grandes, valores más altos de `--transfers` y `--s3-upload-concurrency` pueden mejorar el rendimiento; ajústalos gradualmente según la CPU y la red.  
- Usa **Dry Run** antes de sincronizaciones destructivas para confirmar qué va a cambiar.

## ✅ Resumen

Al alojar Rclone como un daemon remoto y controlarlo desde una ventana dedicada de RcloneView, obtienes migraciones fiables de OneDrive -> Wasabi sin cuellos de botella locales. Los flujos de autenticación headless te cubren cuando no hay navegador disponible, y los trabajos/programaciones hacen que las ejecuciones repetidas sean sencillas.

## 🔗 Guías relacionadas

- **Autenticación y remotos**  
  - [Añadir remotos de Microsoft desde EC2/headless](https://rcloneview.com/support/howto/remote-storage-connection-settings/ec2-onedrive-headless)  
  - [Cómo añadir un remoto compatible con S3](/howto/remote-storage-connection-settings/s3)  
- **Rclone externo y ventanas**  
  - [Uso de múltiples conexiones de Rclone con New Window](/howto/rcloneview-advanced/multi-window)  
  - [Ejecutar Rclone en AWS EC2](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)  
- **Transferencias y automatización**  
  - [Sincronizar almacenamientos remotos](/howto/rcloneview-basic/synchronize-remote-storages)  
  - [Crear trabajos de sincronización](/howto/rcloneview-basic/create-sync-jobs)  
  - [Programación y ejecución de trabajos](/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
