---
sidebar_position: 1
description: "Guía paso a paso para obtener de forma segura tu Access Key ID, Secret Access Key y el código de región de AWS para conectar RcloneView a AWS S3."
keywords:
  - rcloneview
  - rclone
  - cuenta de aws
  - access key id
  - secret key id
  - código de región
  - configuración de s3
  - iam
  - aws s3
  - aws
  - secret access key
tags:
  - RcloneView
  - aws-account
  - secret-key-id
  - access-key-id
  - credentials
  - secret-access-key
  - aws-s3
date: 2025-05-26
author: Jay
---
# Cómo obtener tu clave de acceso de AWS y tu región para Rclone

Antes de poder agregar AWS S3 como remoto en RcloneView, necesitas tu **Access Key ID**, tu **Secret Access Key** y el código de **Region** de AWS. Esta guía te llevará paso a paso para generarlos de forma segura desde tu cuenta de AWS.

## Paso a paso: obtén tu AWS Access Key ID y Secret Access Key

Para conectar Rclone a AWS S3, debes crear una clave de acceso en tu cuenta de AWS:

1. **Inicia sesión** en la [AWS Management Console](https://aws.amazon.com/console).
2. Ve a **IAM (Identity and Access Management)**.  
   Puedes buscar "IAM" en la barra de búsqueda de servicios de AWS.
3. En la barra lateral izquierda, haz clic en **Users** y luego en tu **nombre de usuario de IAM**.
4. Ve a la pestaña **Security credentials**.
5. Desplázate hasta la sección **Access keys** y haz clic en **Create access key**.
6. Elige:  
   `✔ Application running outside AWS`
7. Opcionalmente, ingresa una descripción (por ejemplo, `RcloneView Access`) para ayudarte a identificar la clave.
8. Haz clic en **Create access key**.
9. En la pantalla final, copia ambos valores:
   - **Access Key ID**
   - **Secret Access Key**

:::important
⚠️ Estas claves solo se mostrarán **una vez**. Asegúrate de **almacenarlas de forma segura** (por ejemplo, en un gestor de contraseñas).
:::

## Cómo encontrar tu región de AWS S3

También debes conocer la **Region** de AWS donde se encuentra tu bucket de S3. Esto es necesario al configurar el remoto de Rclone.

### Opción 1: verificar en la consola de AWS S3

1. Visita la [Amazon S3 Console](https://s3.console.aws.amazon.com/s3/home).
2. Busca tu bucket en la lista.
3. La columna **Region** mostrará la región (por ejemplo, `ap-northeast-2` para Seúl, `us-east-1` para Virginia).

### Opción 2: consultar la lista oficial de regiones

Consulta esta documentación oficial para ver todas las regiones disponibles y sus códigos:

👉 [AWS Region Codes and Endpoints](https://docs.aws.amazon.com/general/latest/gr/s3.html)

:::danger Consejo de seguridad
🔒 **Nunca compartas ni expongas tus credenciales de AWS públicamente.**  
Rota las claves periódicamente y elimina las claves no utilizadas desde la **IAM Console**.
:::
