---
sidebar_position: 3
description: Aprende a gestionar instancias de Rclone integradas y externas en paralelo usando la función Nueva Ventana de RcloneView.
keywords:
  - rcloneview
  - new window
  - multi-connection
  - external rclone
  - embedded rclone
  - multiple rclone
tags:
  - RcloneView
  - new-window
  - multi-connection
  - external-rclone
  - embedded-rclone
  - multi-windows
date: 2025-06-22
author: Jay
---
# Usar múltiples conexiones de Rclone con Nueva Ventana

RcloneView ofrece una interfaz flexible para gestionar varias instancias de Rclone simultáneamente. Esto es especialmente útil cuando se trabaja con configuraciones de Rclone tanto integradas como externas.

## Arquitectura de Rclone Integrado

En la configuración predeterminada, RcloneView incluye un binario de Rclone integrado (Rclone Integrado). Esta instancia permite a los usuarios gestionar remotos en la nube a través de una interfaz gráfica fácil de usar.

### 🔹 Modelo Integrado

- RcloneView incluye Rclone y se comunica con él a través de su API.
- Los archivos se acceden y gestionan directamente a través de Rclone.
- Adecuado para la mayoría de los escenarios de uso en un escritorio local.

<img src="/support/images/en/howto/rcloneview-advanced/embedded-rclone-model.png" alt="embedded rclone model" class="img-medium img-center" />
## Arquitectura de Rclone Externo

Para casos de uso más avanzados, como gestionar remotos en servidores remotos o instancias en la nube, RcloneView puede conectarse a una instancia de Rclone externa que se ejecuta en otro lugar.

### 🔹 Modelo Externo

- RcloneView se conecta a un servidor Rclone remoto (a través de Rclone RC).
- El Rclone remoto es responsable de acceder al almacenamiento en la nube y sincronizarlo.
- Útil para gestionar entornos de Rclone alojados en la nube (por ejemplo, AWS EC2, servidores Linux).

<img src="/support/images/en/howto/rcloneview-advanced/external-rclone-model.png" alt="external rclone model" class="img-medium img-center" />
## Función Nueva Ventana: gestionar ambos modelos

Para dar soporte a instancias de Rclone integradas y externas al mismo tiempo, RcloneView incluye una función de **Nueva Ventana**. Esto permite a los usuarios abrir varias instancias de la interfaz gráfica de RcloneView, cada una conectada a un backend de Rclone diferente.

### ✅ Ventajas clave

- Cada ventana puede conectarse a una instancia de Rclone única.
- Gestiona entornos locales y remotos en paralelo.
- Compara, sincroniza y copia entre diferentes nubes o entornos de forma fluida.

### 🔸 Ejemplo: Ventana principal (Rclone Integrado)

Esta ventana está conectada al Rclone integrado incluido con RcloneView.

<img src="/support/images/en/howto/rcloneview-advanced/rcloneview-home-window.png" alt="rcloneview home window" class="img-medium img-center" />
:::important Icono de inicio para la ventana principal
La ventana principal de RcloneView (conectada al Rclone integrado) se puede identificar por el **icono de inicio** <img src="/support/icons/home-icon.png" alt="home icon" class="inline-icon" /> ubicado junto al logotipo de RcloneView en la esquina superior derecha.

:::
### 🔸 Ejemplo: Nueva Ventana (Rclone Externo)

Esta ventana está conectada a un Rclone externo que se ejecuta en un servidor Linux de AWS.

:::info Cómo ejecutar el motor de Rclone en AWS EC2  
Para aprender a implementar y gestionar el daemon de la API de Rclone (`rcd`) en una instancia EC2 basada en Ubuntu, consulta: [Cómo ejecutar Rclone en un servidor AWS EC2](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)  
:::
<img src="/support/images/en/howto/rcloneview-advanced/rcloneview-new-window.png" alt="rcloneview new window" class="img-medium img-center" />
## 🚩Comparación: Rclone Integrado vs. Rclone Externo

| Característica                          | Rclone Integrado                       | Rclone Externo                                |
| ---------------------------------------- | --------------------------------------- | ---------------------------------------------- |
| Se ejecuta en la máquina local           | ✅ Sí                                    | ❌ No (se ejecuta en un servidor remoto)        |
| Acceso al disco local                    | Sí — PC local donde se ejecuta RcloneView | Sí — Servidor donde se ejecuta el Rclone externo |
| Usa el binario de Rclone integrado       | ✅ Incluido por defecto                  | ❌ Requiere instalación por separado            |
| Configurable en `Settings > Location`    | ✅ Compatible                            | ❌ No aplicable                                 |
| Requiere configuración de red            | ❌ No                                    | ✅ Sí (se requiere host, puerto y autenticación) |
| Rendimiento de red                       | Depende de la red local/doméstica        | Depende de la red del servidor/nube             |

 💡 Usa la función **Nueva Ventana** para gestionar varias instancias de Rclone en paralelo; por ejemplo, conecta una ventana al Rclone integrado para tareas locales y otra a un Rclone externo para operaciones del lado de la nube.
