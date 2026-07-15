---
sidebar_position: 9
description: Aprenda a configurar y alternar entre instancias de Rclone Integrado y Externo usando el Gestor de Conexiones de RcloneView.
keywords:
  - rcloneview
  - connection
  - remote control
  - embedded rclone
  - external rclone
  - connection manager
  - rclone
  - rclone rcd
  - rc server
  - Remote Connection
  - rclone connection
tags:
  - RcloneView
  - connection
  - remote-control
  - embedded-rclone
  - external-rclone
  - connection-manager
  - rclone-rcd
date: 2025-06-22
author: Jay
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Gestionar conexiones de Rclone en RcloneView

RcloneView es un gestor de archivos con interfaz gráfica para almacenamiento en la nube que se comunica con **Rclone** a través de su API de Control Remoto (RC). Por defecto, viene incluido con una instancia de **Rclone Integrado**, pero también admite la conexión a instancias externas de Rclone (**Rclone Externo**).

Esta guía explica cómo gestionar estas conexiones usando el **Gestor de Conexiones**.

## Descripción general del Gestor de Conexiones

RcloneView se comunica con Rclone en dos modos:

- **Rclone Integrado** (predeterminado, incorporado)
- **Rclone Externo** (configurado por el usuario, conectado a la red)

El **Gestor de Conexiones** le permite ver, alternar y gestionar estas instancias de Rclone.

<img src="/support/images/en/howto/rcloneview-basic/connection-manager-with-embedded-rclone-only.png" alt="connection manager with embedded rclone only" class="img-medium img-center" />

### Rclone Integrado

RcloneView incluye un binario de Rclone preinstalado llamado **Rclone Integrado**, que se inicia automáticamente.

| Campo                       | Descripción                                                                    |
| --------------------------- | ------------------------------------------------------------------------------ |
| **Address**                 | Normalmente `http://127.0.0.1:5582` (bucle de retorno local)                   |
| **Rclone Version**          | Ejemplo: `v1.70.1`                                                             |
| **Connected** / **Connect** | Indica el estado actual. Si no está conectado, haga clic en **Connect** para activarlo. |
| **Self Update**             | Haga clic para actualizar a la última versión de Rclone.                       |

### Lista de Rclone Externo

Rclone Externo se refiere a una instancia independiente de Rclone iniciada manualmente por el usuario, normalmente mediante `rclone rcd`. Puede estar ejecutándose en:

- Una máquina local (para pruebas)
- Un servidor remoto (por ejemplo, AWS EC2)
- Dentro de un contenedor Docker

Cada entrada muestra:

| Campo | Descripción |
|-------|-------------|
| **Display Name** | Nombre definido por el usuario (por ejemplo, `aws-rclone`) |
| **Remote Address** | Endpoint de la API, por ejemplo, `http://<host>:5572` |
| **Username** | Si la autenticación está habilitada |
| **Rclone Version** | Obtenida de la instancia conectada |

**Acciones disponibles**:
- **Connect** – Activa esta instancia
- **Edit** – Modifica la dirección, credenciales u opciones SSL
- **Delete** – Elimina de la lista

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/external-rclone-added.png" alt="external rclone added" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/external-rclone-selected.png" alt="external rclone selected" class="img-medium img-center" />
</div>

### Indicador de selección actual

En la parte superior del cuadro de diálogo del Gestor de Conexiones:

- `Selected: Embedded Rclone` – la instancia integrada predeterminada está activa  
- `Selected: aws-rclone` – se está usando una instancia externa personalizada

Solo puede haber una conexión activa a la vez. Su selección actual afecta a:

- La visibilidad de la lista de remotos  
- Las acciones de montaje/trabajos  
- Las operaciones de configuración

:::important Notas
- Solo puede haber una conexión de Rclone activa en cualquier momento.  
- Puede alternar libremente entre conexiones Integrada y Externa.  

💡 Para gestionar dos instancias en paralelo, abra una nueva ventana de RcloneView.

- Si un Rclone externo deja de estar disponible, siempre puede volver a la versión integrada.
:::

## Agregar un nuevo Rclone Externo

Para conectarse a un servidor `rclone rcd` en ejecución:

<img src="/support/images/en/howto/rcloneview-basic/new-connection-form.png" alt="new connection form" class="img-medium img-center" />

1. Haga clic en **New Connection** en la parte inferior del Gestor de Conexiones.
2. Complete el formulario:

| Campo | Descripción |
|-------|-------------|
| **Display Name** | por ejemplo, `aws-rclone` |
| **Remote Address** | Endpoint completo de la API (`http://<host>:5572`) |
| **Username / Password** | Requerido si la autenticación está habilitada |
| **Disable SSL Verification** | Para certificados autofirmados o uso en desarrollo |
<br />
<br />

3. Haga clic en **Test connection**. Si tiene éxito, haga clic en **Save**.

:::important Notas

💡 Para que un Rclone externo esté disponible, ejecútelo con:

```bash
rclone rcd --rc-user=<user> --rc-pass=<pass> --rc-addr=127.0.0.1:5572
```

:::
