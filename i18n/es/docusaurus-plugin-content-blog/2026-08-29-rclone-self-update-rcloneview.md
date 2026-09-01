---
slug: rclone-self-update-rcloneview
title: "Actualización automática de Rclone — Mantén tu motor integrado al día en RcloneView"
authors:
  - casey
description: "Actualiza el binario de rclone integrado dentro de RcloneView con un solo clic, para que las nuevas correcciones y funciones de los proveedores lleguen sin reinstalación manual."
keywords:
  - actualización automática de rclone
  - actualizar rclone integrado
  - versión de rclone en RcloneView
  - mantener rclone actualizado
  - GUI de actualización de binario rclone
  - RcloneView rclone integrado
  - versión de rclone rc api
  - actualizaciones de GUI de almacenamiento en la nube
  - versión mínima de rclone
tags:
  - RcloneView
  - feature
  - automation
  - installation
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Actualización automática de Rclone — Mantén tu motor integrado al día en RcloneView

> RcloneView incluye rclone integrado y puede actualizar ese binario integrado desde dentro de la aplicación, en lugar de pedirte que sigas una descarga separada.

RcloneView no se limita a invocar cualquier rclone que resulte estar instalado en tu sistema — viene con su propio binario de rclone integrado y se comunica con él a través de la API RC de rclone local. Ese binario integrado es el que realmente realiza cada copia, sincronización y montaje, por lo que mantenerlo actualizado es importante para incorporar nuevas correcciones de proveedores, cambios de protocolo y mejoras de rendimiento. En lugar de exigir una reinstalación completa de la aplicación cada vez que rclone lanza una versión, RcloneView incluye una función de actualización automática dentro de la aplicación para el motor integrado.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué importa la versión de Rclone integrado

RcloneView requiere una versión mínima de rclone de v1.69.1 o posterior, ya que las funciones más recientes de la aplicación dependen de capacidades de la API RC disponibles solo a partir de ese punto. Los proveedores ocasionalmente cambian sus API, y las versiones de rclone corrigen esos cambios — ejecutar un binario integrado desactualizado puede hacer que un remoto que antes funcionaba de repente arroje errores de autenticación o de listado que no tienen nada que ver con tu configuración de RcloneView.

<img src="/support/images/en/blog/new-remote.png" alt="Configuración de un remoto en RcloneView que depende del motor rclone integrado" class="img-large img-center" />

Dado que el rclone integrado se comunica a través de `http://127.0.0.1:5582` en localhost, actualizarlo no afecta tus remotos, tareas de sincronización ni credenciales guardadas — esos elementos residen en la propia configuración de RcloneView, separados de la versión del binario.

## Cómo activar una actualización automática

La acción de actualización automática se encuentra junto a los detalles de conexión de rclone, donde RcloneView ya muestra la versión de rclone en ejecución actual, la dirección de la API local y el sistema operativo host. Ejecutar la actualización desde ahí obtiene e instala la última compilación compatible de rclone sin salir de la aplicación ni abrir una terminal.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Comprobación de la versión de rclone y el historial de tareas tras una actualización de rclone integrado en RcloneView" class="img-large img-center" />

Vale la pena comprobarlo después de que un hilo de soporte o unas notas de la versión mencionen una corrección específica de un proveedor — actualizar primero el binario integrado es una forma rápida de descartar un desfase de versión antes de seguir solucionando problemas en una tarea de sincronización.

## Combinar la actualización automática con el registro de eventos

Si una tarea empieza a fallar justo después de una actualización, activar el registro de rclone (Ajustes > Rclone integrado > Activar registro de rclone) y establecer el nivel de registro en DEBUG te da un registro claro de antes y después. Reinicia el proceso de rclone integrado, reproduce la tarea, y el archivo de registro mostrará exactamente qué versión gestionó la solicitud — útil al reportar un problema o comparar el comportamiento entre versiones.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Ejecución de una tarea de sincronización tras actualizar el motor rclone integrado en RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abre el pie de página o los ajustes de conexión para comprobar la versión de rclone integrado en ejecución actual.
3. Ejecuta la actualización automática dentro de la aplicación para obtener la última compilación compatible de rclone.
4. Vuelve a ejecutar una sincronización o montaje existente para confirmar que todo sigue conectándose como se espera.

Mantener el motor integrado actualizado es un pequeño hábito que evita una parte sorprendente de los problemas de sincronización en la nube del tipo "ayer funcionaba".

---

**Guías relacionadas:**

- [Gestor de conexiones de RcloneView — Rclone integrado y externo](https://rcloneview.com/support/blog/rcloneview-connection-manager-embedded-external)
- [API RC de Rclone — Control remoto con RcloneView](https://rcloneview.com/support/blog/rclone-rc-api-remote-control-rcloneview)
- [Indicadores personalizados de Rclone — Opciones avanzadas en RcloneView](https://rcloneview.com/support/blog/custom-rclone-flags-advanced-options-rcloneview)

<CloudSupportGrid />
