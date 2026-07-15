---
sidebar_position: 11
description: Aprende cómo agregar un remoto de Google Drive a un Rclone externo que se ejecuta en AWS EC2 sin usar un navegador web, utilizando tokens de OAuth generados localmente.
keywords:
  - rcloneview
  - rclone
  - google drive
  - OAuth
  - token
  - ec2
  - external rclone
  - no browser login
  - headless
  - cloud storage
  - Remote Connection
  - remote storage
tags:
  - Remote-Storage
  - google-drive
  - external-rclone
  - aws-ec2
  - remote-connection
  - cloud-storage
date: 2025-07-07
author: Jay
---
# Agregar Google Drive a un Rclone externo en AWS EC2 (sin navegador web)

Esta guía explica cómo agregar un **remoto de Google Drive** a una **instancia externa de Rclone** que se ejecuta en un sistema donde no hay un navegador web disponible, como un **servidor Ubuntu de AWS EC2**.

En este tipo de entornos, no es posible completar el flujo estándar de inicio de sesión OAuth mediante un navegador. En su lugar, puedes usar una instalación local de RcloneView para obtener el **token de OAuth** requerido y luego reutilizarlo en el Rclone externo que se ejecuta en EC2.

:::info Ejecutar el demonio de Rclone en EC2
Para obtener instrucciones sobre cómo instalar y ejecutar Rclone en una instancia de EC2, 

consulta: 👉 [Cómo ejecutar el motor de Rclone en AWS EC2](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)

:::

El proceso es el siguiente: genera un token de OAuth de Google Drive en una máquina con navegador y luego pega ese token en el Rclone externo que se ejecuta en EC2 a través de RcloneView.

---
## ✅ Paso 1: Generar un token de Google Drive (elige un método)

**Método A: `rclone authorize "drive"` (el más rápido)**

1. En una máquina con navegador y la misma versión de rclone, ejecuta:
   ```bash
   rclone authorize "drive"
   ```
2. Completa el inicio de sesión/consentimiento de Google en el navegador.
3. Copia el bloque de token JSON impreso (conserva todo el JSON). Lo pegarás en EC2 en el Paso 3.

**Método B: Usar el remoto embebido de RcloneView y copiar su token**

1. En tu PC local, agrega Google Drive usando el Rclone embebido (OAuth normal por navegador).  
   👉 [Guía rápida: Agregar remoto de Google Drive](../#step-2-adding-remote-storage-google-drive-example)
2. Abre **Remote Manager**, edita el remoto de Google Drive, haz clic en **Show advanced options** y copia el campo **Token** (JSON).

<img src="/support/images/en/howto/remote-storage-connection-settings/copy-google-oauth-token-from-embedded-rclone.png" alt="copy google oauth token from embedded rclone" class="img-medium img-center" />

👉 Más información sobre cómo editar remotos: [Editar configuración de remoto](/howto/rcloneview-basic/remote-manager#edit-remote-settings)

---

## ✅ Paso 2: Conectarse al Rclone externo (EC2)

Abre una **`nueva ventana`** o usa tu sesión actual en RcloneView para conectarte a tu Rclone alojado en EC2:

- Abre `Settings` -> **`Connection Manager`** para crear una nueva conexión a tu Rclone alojado en EC2 o conectarte a una ya configurada.

👉 Más información: [Conectar un Rclone externo](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)  
👉 Más información: [Función de nueva ventana](/howto/rcloneview-advanced/multi-window#new-window-feature-managing-both-models)

---

## ✅ Paso 3: Agregar el remoto de Google Drive al Rclone externo (pega tu token)

1. En la ventana conectada a EC2, ve al menú `Remote` y selecciona **`+ New Remote`**.
2. Elige **Google Drive** como proveedor.
3. Ingresa **`Remote Name`** y haz clic en **`Show advanced options`**.
4. Pega el **OAuth Token** copiado previamente en el campo **`Token`**.
5. Haz clic en el botón **`Add Remote`** para completar la configuración como de costumbre.


<img src="/support/images/en/howto/remote-storage-connection-settings/copy-google-oauth-token-to-external-rclone.png" alt="copy google oauth token to external rclone" class="img-medium img-center" />

:::info **Ignora esta ventana emergente de error**
**Si RcloneView muestra un mensaje de error como el siguiente, puedes ignorarlo con seguridad.**
En la mayoría de los casos, la configuración del token se completa correctamente a pesar de este mensaje.
Después de cerrar el diálogo, deberías poder acceder a Google Drive con normalidad.  
Este es un problema de interfaz conocido, y mejoraremos la experiencia de usuario en la próxima versión.
<img src="/support/images/en/howto/remote-storage-connection-settings/token-input-error-message.png" alt="token input error message" class="img-small img-left" />
:::
Una vez configurado, tu Rclone basado en EC2 podrá acceder a Google Drive incluso sin soporte de navegador. Puedes gestionar, sincronizar y transferir archivos usando RcloneView como de costumbre.

---

## 🔗 Guías relacionadas

- [Cómo ejecutar el motor de Rclone en AWS EC2](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)
- [Agregar remoto de Google Drive](/howto/#step-2-adding-remote-storage-google-drive-example)
- [Editar configuración de remoto](/howto/rcloneview-basic/remote-manager#edit-remote-settings)
- [Conectar un Rclone externo](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)
- [Uso de múltiples ventanas](/howto/rcloneview-advanced/multi-window#new-window-feature-managing-both-models)
