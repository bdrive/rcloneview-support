---
sidebar_position: 3
description: "Cómo obtener las credenciales y el endpoint de Cloudflare R2"
keywords:
  - rcloneview
  - cloud
  - rclone
  - cloudflare r2
  - r2 endpoint
  - access key id
  - secret access key
  - cloudflare r2 rclone
  - cloudflare s3 api
  - connect r2 to rcloneview
tags:
  - RcloneView
  - Cloud
  - cloud-storage
  - credentials
  - configuration
  - access-key-id
  - secret-access-key
  - secret-key-id
  - cloudflare-r2
date: 2025-07-12
author: Jay
---
# Cómo obtener las credenciales y el endpoint de Cloudflare R2

Para conectar **Cloudflare R2** a Rclone o **RcloneView**, necesitarás tres datos clave:

- ✅ Access Key ID  
- ✅ Secret Access Key  
- ✅ URL del endpoint compatible con S3 de R2  

Esta guía te muestra cómo obtener estos datos desde tu panel de Cloudflare.

---

## 🧰 Requisitos previos

Antes de comenzar:

- Debes tener una cuenta de Cloudflare con **R2 Object Storage** habilitado.
- Necesitas acceso al [Panel de Cloudflare](https://dash.cloudflare.com).
- Es útil tener conocimientos básicos sobre conceptos de almacenamiento en la nube.

---

## 📦 Paso 1: Crear un bucket de R2 (si aún no lo has hecho)

1. Inicia sesión en tu [Panel de Cloudflare](https://dash.cloudflare.com).
2. En la barra lateral izquierda, ve a **R2 → Object Storage**.
3. Haz clic en **Create bucket**.
4. Ingresa un nombre único para tu bucket.
5. Elige una ubicación (por ejemplo, **Automatic**, o una región como `westerneurope`).
6. Haz clic en **Create Bucket**.

Este bucket será tu ubicación de almacenamiento para los archivos transferidos mediante RcloneView.

---

## 🔐 Paso 2: Generar credenciales de API

Para autenticarte con R2, necesitarás crear tokens de API que proporcionen permisos de acceso.

### ➕ Cómo crear una Access Key y una Secret Key:

1. Ve a **Storage & databases -> R2 Object storage → Overview** en el panel de Cloudflare.
2. Haz clic en el botón **Manage** junto a **API Tokens** en la sección **Account Details**.

   <img src="/support/images/en/howto/cloud-storage-setting/cloudflare-manage-r2-api-token.png" alt="cloudflare manage r2 api token" class="img-medium img-center" />
   
3. Haz clic en **Create API Token**. Elige el tipo de token (para Account o User) que se ajuste a tu uso.

<img src="/support/images/en/howto/cloud-storage-setting/cloudflare-create-user-api-token.png" alt="cloudflare create user api token" class="img-medium img-center" />

3. Asigna un nombre al token (por ejemplo, `Rclone Access`).
4. Selecciona los permisos:
   - `Admin Read & Write` (acceso completo)  
	❗otros permisos podrían no permitir el acceso al bucket.
1. Elige si aplicará a:
   - Todos los buckets
   - Solo buckets específicos
7. Opcionalmente, establece una fecha de expiración (o déjalo como "Forever").
8. Haz clic en **Create API Token**.

Una vez creado el token, Cloudflare te mostrará:

- **Access Key ID**
- **Secret Access Key**

:::danger Importante
Estas credenciales se mostrarán solo una vez. Asegúrate de copiarlas y guardarlas de forma segura.
:::

---

## **🌐 Paso 3: Obtener la URL del endpoint de R2**

1. Ve a **R2 → Object Storage** en tu panel de Cloudflare.  
2. Haz clic en el nombre de tu **bucket** para abrir sus detalles.  
3. Navega a la pestaña **Settings**.  
4. En la sección **S3 API**, encontrarás el formato del endpoint y los detalles de la cuenta.    
    
Dependiendo de cómo se creó tu token de API, deberás usar uno de los siguientes formatos de endpoint:

 ### 🔐 Si tu API Token tiene acceso de nivel Admin y puede acceder a todos los buckets:

Usa el endpoint base (sin una ruta de bucket):

```
https://<ACCOUNT_ID>.r2.cloudflarestorage.com
```

### 📦 Si tu API Token está limitado a un bucket específico, o si deseas acceder a un bucket en particular:

Usa el endpoint específico del bucket:

```
https://<ACCOUNT_ID>.r2.cloudflarestorage.com/<BUCKET-NAME>
```

Puedes encontrar tanto tu **ACCOUNT_ID** como el nombre del bucket en la sección **S3 API** de la pestaña **Settings** del bucket:

<img src="/support/images/en/howto/cloud-storage-setting/cloudflare-r2-s3-api-endpoint.png" alt="cloudflare r2 s3 api endpoint" class="img-medium img-center" />

Usa este endpoint al configurar tu remoto de Cloudflare R2 en **RcloneView** o mediante **Rclone CLI**.

---
   
## ✅ Resumen

Ahora deberías tener los siguientes valores listos para configurar tu remoto de Cloudflare R2:

| Field             | Description                                      |
|------------------|--------------------------------------------------|
| Access Key ID     | Proporcionado por el token de API de Cloudflare                |
| Secret Access Key | Proporcionado por el token de API de Cloudflare                |
| Endpoint URL      | Se encuentra en la configuración del bucket de R2 (URL compatible con S3) |

Ahora puedes ingresar estos datos en **RcloneView** al configurar un nuevo remoto compatible con S3, o usar la Rclone CLI.

👉 Siguiente: [Cómo agregar un remoto compatible con S3 en RcloneView](/howto/remote-storage-connection-settings/s3)
