---
slug: fix-pikpak-sync-errors-rcloneview
title: "Solucionar errores de sincronización de PikPak — Resuelve problemas de conexión con RcloneView"
authors:
  - steve
description: "Soluciona los errores comunes de sincronización y conexión de PikPak en RcloneView con comprobaciones Dry Run, ajustes de reintento y pasos de reautenticación OAuth."
keywords:
  - errores de sincronización PikPak
  - PikPak RcloneView
  - solucionar conexión PikPak
  - token OAuth PikPak
  - errores de copia de seguridad PikPak
  - solución de problemas de sincronización en la nube
  - transferencia de archivos PikPak
  - problemas rclone PikPak
  - reintentar sincronización PikPak
tags:
  - RcloneView
  - troubleshooting
  - tips
  - pikpak
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar errores de sincronización de PikPak — Resuelve problemas de conexión con RcloneView

> Las transferencias interrumpidas y los trabajos de PikPak fallidos suelen deberse a un puñado de causas solucionables — así es como diagnosticarlas y resolverlas en RcloneView.

Los trabajos de sincronización de PikPak que fallan a mitad de camino, se quedan bloqueados sin avanzar o generan errores de conexión resultan especialmente frustrantes cuando dependes de copias de seguridad programadas. La mayoría de estos problemas se deben a la caducidad del token, a una concurrencia de transferencia configurada de forma demasiado agresiva o a filtros que excluyen silenciosamente los archivos que esperabas sincronizar. RcloneView te ofrece las herramientas de diagnóstico —Job History, Dry Run y el terminal integrado— para aislar la causa real en lugar de adivinar.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Diagnosticar el fallo en Job History

Antes de cambiar cualquier configuración, abre Job Manager y revisa la entrada de la ejecución fallida en Job History. El campo Status muestra si el trabajo terminó en Errored o fue Canceled, y Time Spent indica si falló de inmediato (normalmente por autenticación) o a mitad de camino (normalmente por un archivo específico o una interrupción de red). Filtra por rango de fechas para comparar una ejecución fallida con una anterior que sí funcionó.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Revisión de un trabajo de sincronización de PikPak fallido en Job History de RcloneView" class="img-large img-center" />

Si el trabajo falla de inmediato en cada intento, es probable que la conexión del remoto de PikPak se haya perdido — vuelve a probarla desde Remote Manager antes de tocar la configuración de sincronización.

## Reautenticar y volver a probar el remoto

Abre Remote Manager, selecciona tu remoto de PikPak y comprueba si la conexión sigue funcionando. Si la prueba falla, es necesario volver a añadir el remoto con credenciales nuevas — las conexiones de PikPak pueden requerir reautenticación tras largos periodos de inactividad. Una vez que la prueba se supera, vuelve a ejecutar el mismo trabajo como una ejecución puntual antes de guardarlo de nuevo en tu programación.

<img src="/support/images/en/blog/new-remote.png" alt="Prueba de una conexión remota de PikPak en Remote Manager de RcloneView" class="img-large img-center" />

RcloneView conecta PikPak junto con más de 90 proveedores adicionales en la misma ventana, por lo que reautenticar un remoto nunca interrumpe tus otras nubes configuradas ni tus trabajos de sincronización.

## Ajustar la configuración de transferencia y los filtros

Si las pruebas de conexión funcionan bien pero las transferencias siguen bloqueándose, abre Advanced Settings del trabajo de sincronización y reduce el número de transferencias de archivos simultáneas y de equality checkers — PikPak puede limitar las solicitudes paralelas demasiado agresivas. Revisa también Filtering Settings en el Paso 3: un filtro de max file age o de tamaño demasiado amplio puede omitir silenciosamente archivos que esperabas ver sincronizados, lo que parece un fallo sin serlo.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Ajuste de la configuración del trabajo de sincronización para una copia de seguridad de PikPak en RcloneView" class="img-large img-center" />

Ejecuta un Dry Run después de cualquier cambio de configuración. Enumera exactamente qué archivos se copiarán o eliminarán sin tocar tu cuenta de PikPak, de modo que puedas confirmar que la corrección funcionó antes de proceder con una sincronización real.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Revisa la entrada del trabajo fallido en Job History para identificar cuándo y cómo falló.
3. Vuelve a probar la conexión del remoto de PikPak en Remote Manager y renueva las credenciales si es necesario.
4. Reduce la concurrencia de transferencia y vuelve a revisar los filtros, luego confírmalo con un Dry Run antes de volver a programarlo.

Dedicar unos minutos a aislar la causa en Job History ahorra mucho más tiempo que volver a ejecutar repetidamente un trabajo que falla por una razón que aún no has identificado.

---

**Guías relacionadas:**

- [Gestionar PikPak — Descargas en la nube con RcloneView](https://rcloneview.com/support/blog/manage-pikpak-cloud-downloads-rcloneview)
- [Migrar PikPak a Google Drive — Transferir archivos con RcloneView](https://rcloneview.com/support/blog/migrate-pikpak-to-google-drive-rcloneview)
- [Sincronizar PikPak con Google Drive y S3 con RcloneView](https://rcloneview.com/support/blog/sync-pikpak-cloud-google-drive-s3-rcloneview)

<CloudSupportGrid />
