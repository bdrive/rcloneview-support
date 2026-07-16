---
slug: rcloneview-aws-ec2-cloud-sync
title: "Ejecuta RcloneView en AWS EC2 para sincronización en la nube del lado del servidor"
authors:
  - tayson
description: "Ejecuta RcloneView en una instancia de AWS EC2 para sincronización, migración y copia de seguridad en la nube del lado del servidor. Accede a la GUI de forma remota y aprovecha el ancho de banda de EC2 para transferencias rápidas."
keywords:
  - rcloneview
  - aws ec2 cloud sync
  - rcloneview ec2
  - server cloud sync
  - ec2 rclone gui
  - cloud migration server
  - headless cloud sync
  - ec2 data transfer
  - aws ec2 file manager
  - server-side cloud transfer
tags:
  - platform
  - amazon-s3
  - cloud-migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Ejecuta RcloneView en AWS EC2 para sincronización en la nube del lado del servidor

> Ejecutar RcloneView en una instancia de AWS EC2 te ofrece ancho de banda de nivel servidor para las transferencias en la nube, operación 24/7 para tareas programadas y elimina la necesidad de enrutar los datos a través de tu máquina local.

Al migrar terabytes entre proveedores de la nube, tu conexión a internet local se convierte en el cuello de botella. Una instancia de AWS EC2 con red de gigabit puede transferir datos entre servicios en la nube a velocidades que tu conexión doméstica o de oficina no puede igualar. Ejecutar RcloneView en EC2 también significa que las transferencias continúan 24/7 sin necesidad de mantener encendida una máquina local, y los datos que se mueven entre S3 y otros servicios de AWS permanecen dentro de la red de Amazon, a menudo sin coste de salida (egress).

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué ejecutar RcloneView en EC2

- **Velocidad**: las instancias EC2 en los centros de datos de AWS tienen conexiones de red multi-gigabit. Las transferencias entre S3 y proveedores externos aprovechan este ancho de banda en lugar de tu conexión local.
- **Transferencia S3 gratuita**: la transferencia de datos entre EC2 y S3 dentro de la misma región es gratuita. Para grandes migraciones de S3 a la nube, ejecutar en EC2 elimina el mayor coste: la salida (egress) local.
- **Operación 24/7**: las tareas programadas se ejecutan continuamente sin necesidad de mantener encendido un equipo de escritorio. La instancia EC2 gestiona copias de seguridad nocturnas, migraciones semanales y tareas de sincronización continuas.
- **Proximidad a los datos**: si tus datos de origen están en AWS (S3, EBS, EFS), ejecutar RcloneView en EC2 los coloca junto a los datos para lograr la mínima latencia.
- **Acceso en equipo**: varios miembros del equipo pueden acceder de forma remota a la misma instancia de RcloneView, compartiendo configuraciones e historiales de tareas.

## Configuración de una instancia EC2

### Selección de instancia

Para la mayoría de las cargas de trabajo de RcloneView, una instancia pequeña o mediana es suficiente:

- **t3.medium** (2 vCPU, 4 GB RAM): adecuada para tareas de sincronización ligeras y migraciones pequeñas.
- **m5.large** (2 vCPU, 8 GB RAM): mejor para transferencias concurrentes y operaciones con archivos grandes.
- **c5.xlarge** (4 vCPU, 8 GB RAM): para cargas de trabajo de migración pesadas con muchas transferencias en paralelo.

Elige una instancia en la misma región que tus buckets de S3 para evitar costes de transferencia entre regiones.

### Sistema operativo

Lanza la instancia con Ubuntu Server LTS o Amazon Linux 2. Ambos son compatibles con RcloneView sin problemas. Instala un entorno de escritorio ligero para la GUI:

```
# Ubuntu
sudo apt update && sudo apt install -y xfce4 xrdp

# Amazon Linux 2
sudo yum install -y xrdp xfce
```

Habilita e inicia el servicio RDP para poder conectarte a la GUI de forma remota.

### Configuración del grupo de seguridad

Abre los siguientes puertos en tu grupo de seguridad de EC2:

- **Puerto 3389** (RDP): para el acceso de escritorio remoto a la GUI. Restringe el acceso a tu dirección IP.
- **Puerto 22** (SSH): para acceso por terminal. Restringe el acceso a tu dirección IP.
- **Puerto 53682** (opcional): si necesitas ejecutar flujos OAuth desde la instancia EC2, este es el puerto de retorno OAuth predeterminado de rclone. Como alternativa, usa la configuración OAuth sin interfaz gráfica (headless).

## Instalación de RcloneView en EC2

Conéctate por SSH a la instancia y descarga RcloneView:

1. Descarga el AppImage o el paquete .deb para Linux desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Haz el AppImage ejecutable: `chmod +x RcloneView-*.AppImage`
3. Conéctate mediante RDP e inicia RcloneView desde el entorno de escritorio.

## OAuth sin interfaz gráfica (headless) para proveedores de la nube

Las instancias EC2 normalmente no tienen un navegador local para los flujos OAuth. Para proveedores que requieren OAuth (Google Drive, OneDrive, Dropbox), usa autenticación headless:

1. En tu máquina local, ejecuta `rclone authorize "drive"` (o el proveedor correspondiente) para completar el flujo OAuth.
2. Copia el token resultante.
3. En la instancia EC2, pega el token en la configuración del remoto de RcloneView.

Como alternativa, configura RcloneView con una instancia externa de rclone y establece el token OAuth a través del gestor de conexiones de RcloneView.

<img src="/support/images/en/howto/rcloneview-advanced/external-rclone-model.png" alt="Configuring external rclone on EC2 for RcloneView" class="img-large img-center" />

## Configuración del acceso a S3

Para el acceso a S3 desde EC2, usa un rol de instancia IAM en lugar de claves de acceso estáticas. Adjunta un rol IAM con permisos de S3 a la instancia EC2, y rclone usará el servicio de metadatos de la instancia para obtener credenciales temporales automáticamente. Esto es más seguro que almacenar claves de acceso en la instancia.

En la configuración del remoto S3 de RcloneView, deja vacíos los campos de clave de acceso y clave secreta, y establece la autenticación de entorno para usar el perfil de la instancia.

## Ejecución de migraciones grandes

Con el ancho de banda de EC2, las migraciones grandes que tomarían días en una conexión doméstica se completan en horas:

- **1 TB de Google Drive a S3**: aproximadamente 2-4 horas a velocidades sostenidas.
- **10 TB de S3 a Backblaze B2**: aproximadamente 1-2 días dependiendo de la limitación (throttling) de la API de B2.
- **Replicación de S3 entre regiones**: velocidad casi de línea dentro de AWS.

Las transferencias multihilo de RcloneView aprovechan al máximo la capacidad de red de EC2. Configura las transferencias en 16-32 y los verificadores (checkers) en 16 para obtener el máximo rendimiento en instancias más grandes.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Large-scale migration running on EC2 in RcloneView" class="img-large img-center" />

## Programación de tareas del lado del servidor

El programador integrado de RcloneView gestiona tareas recurrentes. Configura copias de seguridad nocturnas de Google Drive a S3, sincronización semanal entre S3 y Backblaze B2, o replicación diaria a una región de recuperación ante desastres (DR). La instancia EC2 ejecuta estas tareas sin importar si estás conectado por RDP.

Mantén la instancia EC2 en ejecución continua para las tareas programadas, o usa una programación de inicio/apagado (mediante AWS Instance Scheduler o una función Lambda) para ejecutar la instancia solo durante las ventanas de copia de seguridad.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling server-side sync jobs on EC2 in RcloneView" class="img-large img-center" />

## Gestión de costes

Los costes de EC2 varían según el tipo de instancia y el tiempo de ejecución:

- **t3.medium bajo demanda**: ~$0.042/hora ($30/mes si se ejecuta 24/7)
- **Instancias spot**: hasta un 90% más baratas para cargas de trabajo interrumpibles como migraciones puntuales.
- **Instancias reservadas**: tarifa por hora más baja para configuraciones de sincronización del lado del servidor de larga duración.

Para migraciones puntuales, usa una instancia spot: lánzala, ejecuta la migración, verifica y termínala. Para copias de seguridad programadas continuas, una t3.small o t3.medium reservada resulta rentable.

Recuerda: la transferencia de datos de S3 dentro de la misma región desde EC2 es gratuita. La transferencia de datos hacia internet (por ejemplo, a Backblaze B2 o Google Drive) genera los cargos estándar de salida (egress) de AWS.

## Primeros pasos

1. Lanza una instancia EC2 con Ubuntu o Amazon Linux y un entorno de escritorio.
2. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html) e instálalo en la instancia.
3. Configura los remotos usando OAuth sin interfaz gráfica para los proveedores de la nube y roles IAM para S3.
4. Ejecuta migraciones y programa tareas de copia de seguridad aprovechando el ancho de banda de EC2.
5. Termina o detén la instancia cuando no la necesites para controlar los costes.

Ejecutar RcloneView en EC2 te ofrece la velocidad de la red de centros de datos de AWS, la comodidad de una GUI para gestionar transferencias y operación 24/7 para tareas programadas: la configuración ideal para migraciones a gran escala en la nube y sincronización continua del lado del servidor.

---

**Guías relacionadas:**

- [Añadir AWS S3 y compatibles con S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Añadir OneDrive sin interfaz gráfica](https://rcloneview.com/support/howto/remote-storage-connection-settings/ec2-onedrive-headless)
- [Google Drive sin interfaz gráfica](https://rcloneview.com/support/howto/remote-storage-connection-settings/ec2-google-drive-connection)
- [Ejemplo de rclone externo](https://rcloneview.com/support/tutorials/new-window-with-external-rclone)

<CloudSupportGrid />
