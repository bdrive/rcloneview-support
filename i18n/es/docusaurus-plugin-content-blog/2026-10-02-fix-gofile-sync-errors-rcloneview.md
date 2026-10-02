---
slug: fix-gofile-sync-errors-rcloneview
title: "Soluciona los errores de sincronización de Gofile — Problemas de token, subida y listado resueltos con RcloneView"
authors:
  - jay
description: "Soluciona errores de sincronización de Gofile como tokens no válidos, subidas fallidas y listados vacíos usando el historial de trabajos, los registros y el terminal integrado de RcloneView."
keywords:
  - solucionar errores de sincronización de Gofile
  - error de Gofile en rclone
  - token no válido de Gofile
  - subida fallida de Gofile
  - solución de problemas de Gofile
  - RcloneView Gofile
  - token de API de cuenta de Gofile
  - remoto de Gofile en rclone
  - solución de problemas de sincronización en la nube
  - Gofile GUI
tags:
  - RcloneView
  - gofile
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Soluciona los errores de sincronización de Gofile — Problemas de token, subida y listado resueltos con RcloneView

> La mayoría de los fallos de sincronización de Gofile se deben a unas pocas causas: un token obsoleto, una carpeta raíz incorrecta o una transferencia que necesita reintentarse, y RcloneView muestra cada una en el historial de trabajos y en los registros.

Gofile se autentica con un token de API de cuenta en lugar de un inicio de sesión en el navegador, por lo que los errores suelen aparecer como mensajes de "unauthorized" o carpetas que parecen vacías. En lugar de adivinar desde la línea de comandos, puedes usar el historial de trabajos, los registros y el terminal de RcloneView para ver exactamente qué paso falló. RcloneView monta y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Empieza por el token de API de la cuenta

El fallo más común es un token no válido o desactualizado. Los tokens de Gofile se encuentran en el campo Account API Token de tu página de perfil de Gofile. Si regeneraste el token o lo pegaste con un espacio al final, todas las solicitudes serán rechazadas.

Abre Remote Manager desde la pestaña Remote, edita el remoto de Gofile y pega el token de nuevo. Después explora la raíz del remoto en un panel de Explorer. Si el listado se carga, la autenticación es correcta y el problema está en otra parte.

<img src="/support/images/en/blog/new-remote.png" alt="Edición de un remoto de Gofile y reintroducción del token de API de la cuenta en RcloneView" class="img-large img-center" />

## Lee el historial de trabajos y los registros

Cuando un trabajo programado o manual termina como Errored, abre Job History. Cada entrada registra el tipo de ejecución, la duración, el estado, el tamaño y el número de archivos, de modo que puedes saber si un trabajo falló al instante (normalmente por autenticación) o a mitad de camino (normalmente por un problema de red o de archivo).

Para más detalle, activa el registro de rclone en Settings > Embedded Rclone, establece el nivel en DEBUG, reinicia el rclone integrado y reproduce el fallo. El registro muestra el error exacto devuelto para cada archivo.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Historial de trabajos de RcloneView mostrando un trabajo de sincronización de Gofile con errores" class="img-large img-center" />

## Aísla los fallos de subida con un Dry Run

Si solo fallan algunos archivos, ejecuta primero un Dry Run. Enumera lo que se copiaría o eliminaría sin cambiar nada, para que confirmes que el origen y el destino son los esperados. Después reduce el número de transferencias de archivos en el paso 2 del asistente de sincronización y mantén "Retry entire sync if fails" en su valor predeterminado de 3. Menos transferencias en paralelo suelen resolver los errores de subida intermitentes.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Ejecución de un trabajo de sincronización de Gofile tras ajustar la configuración de transferencia en RcloneView" class="img-large img-center" />

## Verifica con Folder Compare

Tras volver a ejecutar, usa Compare para comparar lado a lado la carpeta local con la carpeta de Gofile. Los filtros de solo izquierda, solo derecha y archivos diferentes muestran con precisión qué falta todavía, así que no tienes que volver a subirlo todo.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Vista de Folder Compare que resalta los archivos que faltan en Gofile" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Vuelve a introducir tu Account API Token de Gofile en Remote Manager y confirma que la carpeta raíz se lista.
3. Revisa Job History y activa el registro DEBUG si un trabajo está Errored.
4. Ejecuta un Dry Run, reduce las transferencias simultáneas y verifica con Folder Compare.

Una visión clara de tokens, registros y diferencias convierte un fallo vago de Gofile en una solución rápida.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento de Gofile — Sincroniza y haz copias de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-gofile-cloud-sync-backup-rcloneview)
- [Soluciona los errores de sincronización de Put.io con RcloneView](https://rcloneview.com/support/blog/fix-put-io-sync-errors-rcloneview)
- [Soluciona los bloqueos de sincronización en la nube con RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-stuck-hanging-rcloneview)

<CloudSupportGrid />
