---
sidebar_position: 12
description: Instala y ejecuta Rclone en AWS EC2, conéctate a él desde RcloneView en tu PC y agrega un remoto de OneDrive sin usar un navegador en el servidor.
keywords:
  - rcloneview
  - rclone
  - onedrive
  - headless
  - external rclone
  - aws ec2
  - rclone rcd
  - remote storage
  - cloud migration
tags:
  - Remote-Storage
  - onedrive
  - external-rclone
  - aws-ec2
  - headless
date: 2025-07-15
author: Jay
---
# Agregar OneDrive a Rclone externo en AWS EC2 (sin navegador)

:::info Requisito previo relacionado
Si necesitas una guía completa de configuración de EC2, consulta 👉 [Cómo ejecutar el motor de Rclone en AWS EC2](/howto/cloud-storage-setting/run-rclone-on-aws-ec2).
:::

---

El proceso: genera un token OAuth de OneDrive en una máquina con navegador y luego pega ese token en el Rclone externo que se ejecuta en EC2 mediante RcloneView.

---

## Paso 1. Generar un token de OneDrive (elige un método)

**Método A: `rclone authorize "onedrive"` (el más rápido)**

1. En una máquina con navegador y la misma versión de rclone, ejecuta:
   ```bash
   rclone authorize "onedrive"
   ```  
2. Completa el inicio de sesión/consentimiento de Microsoft en el navegador.  
3. Copia el bloque de token JSON impreso (conserva todo el JSON). Lo pegarás en EC2 en el Paso 3.

**Método B: Usar el remoto integrado de RcloneView y copiar su token**

1. En tu PC local, agrega OneDrive usando el Rclone integrado (OAuth normal por navegador).  
2. Abre el **Administrador de remotos**, edita el remoto de OneDrive, haz clic en **Mostrar opciones avanzadas** y copia el campo **Token** (JSON).

<img src="/support/images/en/howto/remote-storage-connection-settings/copy-onedrive-oauth-token-from-embedded-rclone.png" alt="copy onedrive oauth token from embedded rclone" class="img-medium img-center" />


👉 Más información sobre la edición de remotos: [Editar configuración de remotos](/howto/rcloneview-basic/remote-manager#edit-remote-settings)

---

## Paso 2. Conectarse al Rclone externo (EC2)

Abre una **nueva ventana** o usa tu sesión actual en RcloneView para conectarte a tu Rclone alojado en EC2:

- Abre `Configuración` -> **`Administrador de conexiones`** para crear una nueva conexión con tu Rclone alojado en EC2 o conectarte a una existente si ya está configurada.

👉 Más información: [Conectar Rclone externo](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)  
👉 Más información: [Función de nueva ventana](/howto/rcloneview-advanced/multi-window#new-window-feature-managing-both-models)

---

## Paso 3. Agregar el remoto de OneDrive al Rclone externo (pega tu token)

1. En la ventana conectada a EC2, ve al menú `Remoto` y selecciona **`+ Nuevo remoto`**.
2. Elige **OneDrive** como proveedor.
3. Ingresa el **Nombre del remoto** y haz clic en **Mostrar opciones avanzadas**.
4. Pega el **Token OAuth** copiado previamente en el campo **Token**.
5. Haz clic en **Agregar remoto** para completar la configuración.


<img src="/support/images/en/howto/remote-storage-connection-settings/copy-onedrive-oauth-token-to-external-rclone.png" alt="copy onedrive oauth token to external rclone" class="img-medium img-center" />
:::info **Ignora esta ventana emergente de error**
Si RcloneView muestra un mensaje de error como el siguiente, puedes ignorarlo sin problema.
En la mayoría de los casos, la configuración del token se completa correctamente a pesar de este mensaje.
Después de cerrar el cuadro de diálogo, deberías poder acceder a OneDrive con normalidad.  
Este es un problema conocido de la interfaz, y mejoraremos la experiencia de usuario en la próxima versión.
<img src="/support/images/en/howto/remote-storage-connection-settings/token-input-error-message.png" alt="token input error message" class="img-small img-left" />
:::
Una vez configurado, tu Rclone basado en EC2 ya puede acceder a OneDrive incluso sin soporte de navegador. Puedes gestionar, sincronizar y transferir archivos usando RcloneView como de costumbre.

---

## Enlaces relacionados

- [Cómo ejecutar el motor de Rclone en AWS EC2](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)  
- [Administrador de conexiones](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)  
- [Uso de múltiples ventanas](/howto/rcloneview-advanced/multi-window#new-window-feature-managing-both-models)  
- [Crear trabajos de sincronización](/howto/rcloneview-basic/create-sync-jobs)  
- [Ejecutar y gestionar trabajos](/howto/rcloneview-basic/execute-manage-job)  
- [Programación y ejecución de trabajos](/howto/rcloneview-advanced/job-scheduling-and-execution)
