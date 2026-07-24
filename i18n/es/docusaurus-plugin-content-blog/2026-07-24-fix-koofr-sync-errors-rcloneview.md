---
slug: fix-koofr-sync-errors-rcloneview
title: "Solucionar errores de sincronización de Koofr — Diagnóstico y resolución con RcloneView"
authors:
  - morgan
description: "Soluciona los errores de sincronización de Koofr más comunes en RcloneView, desde fallos de inicio de sesión hasta límites de cuota y transferencias bloqueadas, con soluciones claras paso a paso."
keywords:
  - errores de sincronización de Koofr
  - solucionar Koofr RcloneView
  - fallo de inicio de sesión de Koofr
  - tiempo de espera de conexión de Koofr
  - cuota de Koofr excedida
  - solución de problemas de RcloneView
  - sincronización en la nube de Koofr
  - errores de copia de seguridad de Koofr
  - Koofr rclone
  - solución de problemas de almacenamiento en la nube
tags:
  - RcloneView
  - koofr
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar errores de sincronización de Koofr — Diagnóstico y resolución con RcloneView

> ¿Los trabajos de sincronización de Koofr se detienen, fallan al autenticarse o omiten archivos silenciosamente? **RcloneView** te ofrece la visibilidad y las herramientas necesarias para diagnosticar y resolver el problema rápidamente.

Koofr es una sólida opción de almacenamiento en la nube europea, pero como con cualquier proveedor, los trabajos de sincronización pueden encontrar problemas de autenticación, límites de cuota o errores de transferencia que dejan dudas sobre lo ocurrido. Las herramientas Job History, la pestaña Log y Dry Run de RcloneView facilitan identificar la causa en lugar de adivinar. Esta guía repasa los errores de sincronización de Koofr más comunes y cómo solucionar cada uno desde dentro de RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Fallos de inicio de sesión o conexión

Si un remoto de Koofr deja de conectarse de repente, las credenciales guardadas pueden haber caducado o haber sido revocadas desde el lado de la cuenta de Koofr, o un cambio de contraseña en Koofr no se reflejó en RcloneView.

**Cómo solucionarlo:**

Abre Remote Manager, selecciona el remoto de Koofr y vuelve a introducir tus credenciales para refrescar la conexión. Si el remoto sigue sin conectarse, elimínalo y añádelo de nuevo como un remoto nuevo mediante el asistente New Remote en lugar de editar el que falla — una reautenticación limpia resuelve la mayoría de los problemas de sesiones obsoletas.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Koofr remote in RcloneView" class="img-large img-center" />

## Los trabajos de sincronización fallan a medio camino

Un trabajo que copia algunos archivos y luego se detiene, o que muestra el estado "Errored" en Job History, suele indicar un problema de red transitorio, un límite de velocidad, o un único archivo problemático (caracteres no válidos, una ruta inusualmente larga o un archivo de bloqueo de cero bytes) que bloquea el resto del lote.

**Cómo solucionarlo:**

Abre Job History y filtra por "Errored" para ver exactamente qué ejecución falló y cuándo. Aumenta el contador de "Retry entire sync if fails" en el paso 2 del asistente del trabajo — el valor predeterminado de 3 gestiona automáticamente la mayoría de los fallos de red transitorios. Si el mismo archivo sigue fallando, usa una regla de filtro personalizada en el paso 3 para excluirlo temporalmente y confirma que el resto de la sincronización se completa correctamente.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Adjusting retry and advanced sync settings in RcloneView" class="img-large img-center" />

## Cuota de almacenamiento alcanzada

Si las subidas a Koofr se detienen a mitad de la sincronización sin un error evidente, comprueba si la cuenta ha alcanzado su límite de almacenamiento. Koofr, como la mayoría de los proveedores, simplemente rechaza las nuevas escrituras cuando la cuota está llena.

**Cómo solucionarlo:**

Ejecuta `rclone about "koofr:"` en la pestaña integrada de Rclone Terminal para comprobar el uso actual frente a tu cuota. Si el espacio escasea, usa las herramientas de detección de cambios de tamaño de Folder Compare para encontrar las carpetas que consumen más espacio antes de liberar espacio o mejorar tu plan de Koofr.

## Los archivos no coinciden después de sincronizar

Si los archivos aparecen copiados pero Koofr muestra tamaños o marcas de tiempo distintos a los del origen, esto suele deberse a un problema de dirección de sincronización o de sincronización temporal, no a un error específico de Koofr.

**Cómo solucionarlo:**

Ejecuta un Dry Run antes de la sincronización real para previsualizar exactamente qué se copiará o eliminará — esto detecta errores de dirección antes de que afecten a tus datos. Luego usa Folder Compare entre el origen y el remoto de Koofr para confirmar que ambos lados coinciden. Las herramientas de sincronización y Folder Compare de RcloneView están disponibles con la licencia FREE, por lo que puedes verificar los resultados sin salir de la aplicación.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing source and Koofr folders in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Vuelve a añadir tu remoto de Koofr si la autenticación falla, en lugar de editar uno caducado.
3. Consulta Job History para conocer el punto exacto del fallo y ajusta la configuración de reintentos o filtros en consecuencia.
4. Ejecuta un Dry Run y Folder Compare tras cualquier corrección para confirmar que la sincronización queda limpia de ahí en adelante.

Una pequeña rutina de diagnóstico — primero Job History, luego Dry Run, luego Compare — resuelve la mayoría de los problemas de sincronización de Koofr sin necesidad de la línea de comandos.

---

**Guías relacionadas:**

- [Gestionar el almacenamiento de Koofr — Sincronizar y respaldar archivos con RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Koofr como hub multi-nube con RcloneView](https://rcloneview.com/support/blog/koofr-multi-cloud-hub-google-drive-onedrive-dropbox-rcloneview)
- [Migrar de Koofr a Google Drive con RcloneView](https://rcloneview.com/support/blog/migrate-koofr-to-google-drive-rcloneview)

<CloudSupportGrid />
