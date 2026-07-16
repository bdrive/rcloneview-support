---
slug: migrate-koofr-to-onedrive-rcloneview
title: "Migrar de Koofr a OneDrive — Transferir archivos con RcloneView"
authors:
  - jay
description: "Mueve tus archivos de Koofr a Microsoft OneDrive usando RcloneView. Una guía visual, paso a paso, para una migración segura y precisa entre servicios en la nube."
keywords:
  - migración de Koofr a OneDrive
  - migrar Koofr a OneDrive
  - transferencia Koofr OneDrive
  - migración de nube a nube
  - RcloneView Koofr
  - RcloneView OneDrive
  - rclone Koofr OneDrive GUI
  - herramienta de migración de archivos en la nube
  - software de migración a OneDrive
  - transferencia en la nube de Koofr
tags:
  - koofr
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar de Koofr a OneDrive — Transferir archivos con RcloneView

> RcloneView facilita la migración de Koofr a Microsoft OneDrive de forma sencilla y verificable, con comparación de carpetas, vista previa de simulación (dry-run) y monitoreo de transferencia en vivo integrados.

Koofr es un proveedor europeo de almacenamiento en la nube centrado en la privacidad, popular entre usuarios que priorizan la soberanía de los datos y una interfaz limpia. OneDrive, estrechamente integrado con Microsoft 365, suele ser el destino cuando los equipos estandarizan su colaboración en torno a Word, Excel y Teams. Moverse entre estos dos proveedores no es simplemente copiar archivos: el desafío está en hacerlo de forma confiable, preservando estructuras de carpetas anidadas, manejando casos límite de nombres de archivo y confirmando que cada archivo llegó intacto. RcloneView gestiona toda la migración de forma visual, conectándose directamente a ambos proveedores sin enrutar los datos a través de tu disco local.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Koofr y OneDrive en RcloneView

Ambos remotos se configuran a través del asistente **Nuevo Remoto** en la pestaña **Remoto** de RcloneView. Agrega primero Koofr seleccionándolo de la lista de proveedores e ingresando las credenciales de tu cuenta. Luego agrega OneDrive: usa autenticación OAuth, por lo que se abre una ventana del navegador, inicias sesión con tu cuenta de Microsoft, y la conexión se establece automáticamente sin que tengas que manejar tokens manualmente.

Una vez que ambos remotos están guardados, aparecen como pestañas independientes en el explorador de archivos de doble panel. Abre Koofr en el panel izquierdo y OneDrive en el panel derecho para ver ambos árboles de carpetas uno junto al otro. Este diseño resulta útil de inmediato para un equipo que migra una jerarquía de proyecto compartida: puedes confirmar que la estructura de carpetas de destino en OneDrive coincide con lo esperado antes de mover un solo archivo.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Koofr and OneDrive remotes in RcloneView" class="img-large img-center" />

## Auditar el contenido antes de la migración

La herramienta **Comparar Carpetas** de RcloneView, que se inicia desde la pestaña **Inicio**, es una forma efectiva de preparar una migración en la nube. Apúntala a la carpeta de origen en Koofr, a la izquierda, y a la carpeta de destino correspondiente en OneDrive, a la derecha. La vista de comparación clasifica cada archivo: solo a la izquierda (aún no está en OneDrive), solo a la derecha (ya está ahí o proviene de una ejecución parcial anterior), igual (coincide en tamaño) o diferente (discrepancia de tamaño que indica un posible conflicto).

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Koofr and OneDrive folder contents before migration in RcloneView" class="img-large img-center" />

Para un equipo que migra varios miles de documentos y archivos de diseño, este paso de comparación detecta los casos que normalmente aparecen como tickets de soporte semanas después: una carpeta que falló silenciosamente por un carácter especial en la ruta, o archivos que ya fueron migrados parcialmente en un intento anterior. Una vez que la comparación confirma que el origen y el destino están en el estado esperado, procede con el trabajo de sincronización.

## Ejecutar la transferencia de nube a nube

Crea un nuevo trabajo en el **Gestor de Trabajos**, establece la carpeta de Koofr como origen y la carpeta de destino en OneDrive como destino, y elige **Sincronizar** como tipo de trabajo. RcloneView transfiere los archivos directamente entre ambos proveedores: los datos fluyen de Koofr a OneDrive sin pasar por almacenamiento local intermedio, lo que mantiene el uso de tu ancho de banda de internet limitado únicamente a la ruta de nube a nube en lugar de descargar todo dos veces.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud file transfer from Koofr to OneDrive in RcloneView" class="img-large img-center" />

En el paso de Configuración Avanzada, activa la **verificación de checksum** para detectar cualquier corrupción durante la transferencia. Ejecuta primero una **Simulación (Dry Run)**: esto muestra una vista previa de la lista completa de archivos que se copiarán o eliminarán antes de que ocurra algún cambio real, dándote una última oportunidad de detectar eliminaciones inesperadas o discrepancias de rutas antes de confirmar.

## Monitorear el progreso y confirmar la finalización

La pestaña **Transfiriendo** muestra la velocidad de transferencia en vivo, los archivos procesados y el total de bytes movidos mientras el trabajo se ejecuta. Al finalizar, el registro de **Historial de Trabajos** guarda cada ejecución con hora de inicio, duración transcurrida, tamaño transferido y estado final.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Koofr to OneDrive migration progress in RcloneView" class="img-large img-center" />

Ejecuta una segunda **Comparación de Carpetas** después de que finalice la migración y filtra por archivos "solo a la izquierda". Si el conteo es cero, la migración está completa. Si quedan archivos, la vista de comparación muestra exactamente cuáles son, para que puedas volver a ejecutar el trabajo en subcarpetas específicas en lugar de volver a migrar todo el conjunto de datos.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agrega tu remoto de Koofr desde **pestaña Remoto > Nuevo Remoto** e ingresa las credenciales de tu cuenta.
3. Agrega tu remoto de OneDrive usando el inicio de sesión OAuth en el navegador, sin necesidad de manejar tokens manualmente.
4. Usa **Comparar Carpetas** para auditar el origen y el destino, y luego ejecuta una sincronización de simulación (Dry Run) antes de confirmar la migración completa.

Migrar de Koofr a OneDrive con RcloneView te ofrece un registro de auditoría completo, desde la comparación previa a la migración hasta el registro del historial de trabajos, para que puedas confirmar con confianza que cada archivo completó el trayecto.

---

**Guías Relacionadas:**

- [Migrar Koofr a Google Drive con RcloneView](https://rcloneview.com/support/blog/migrate-koofr-to-google-drive-rcloneview)
- [Migrar Koofr a Backblaze B2 con RcloneView](https://rcloneview.com/support/blog/migrate-koofr-to-backblaze-b2-rcloneview)
- [Migrar Box a OneDrive con RcloneView](https://rcloneview.com/support/blog/migrate-box-to-onedrive-rcloneview)

<CloudSupportGrid />
