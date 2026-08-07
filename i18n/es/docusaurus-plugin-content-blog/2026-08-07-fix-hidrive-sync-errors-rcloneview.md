---
slug: fix-hidrive-sync-errors-rcloneview
title: "Solucionar errores de sincronización de HiDrive — copia de seguridad en la nube fiable con RcloneView"
authors:
  - jay
description: "Diagnostica y soluciona errores comunes de sincronización de HiDrive — expiración de tokens, tiempos de espera y transferencias fallidas — con las herramientas integradas de reintento y registro de RcloneView."
keywords:
  - error de sincronización de HiDrive
  - solucionar error de conexión de HiDrive
  - copia de seguridad de HiDrive fallida
  - solución de problemas de sincronización en la nube de HiDrive
  - HiDrive RcloneView
  - token OAuth de HiDrive expirado
  - error de carga de HiDrive
  - problemas de sincronización de HiDrive Strato
  - solución de problemas de almacenamiento en la nube
  - HiDrive rclone
tags:
  - RcloneView
  - troubleshooting
  - tips
  - hidrive
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar errores de sincronización de HiDrive — copia de seguridad en la nube fiable con RcloneView

> Las cargas estancadas, las sesiones caducadas y los fallos silenciosos de sincronización en HiDrive suelen deberse a un puñado de causas solucionables — así es como diagnosticarlas y resolverlas en RcloneView.

Los usuarios de HiDrive que hacen copia de seguridad de fotos, documentos o archivos empresariales suelen encontrarse con trabajos de sincronización que se detienen a mitad de la transferencia o que fallan al autenticarse tras semanas de inactividad. Estos problemas rara vez los causa el propio almacenamiento — casi siempre se trata de una discrepancia de token, de tiempos o de configuración de filtros, que RcloneView puede detectar y corregir directamente desde su interfaz. RcloneView también sincroniza y compara carpetas en HiDrive, disponible con la licencia FREE, sin necesidad de actualizar.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Diagnosticar la causa raíz

HiDrive se conecta a RcloneView mediante inicio de sesión OAuth en el navegador, y la mayoría de los errores de sincronización se dividen en tres categorías: autorización caducada, cortes de red transitorios o configuración incorrecta de filtros. Empieza abriendo el panel **Job History** (historial de trabajos) en el Job Manager — cada ejecución fallida registra su estado como Completed, Errored o Canceled, junto con el tiempo exacto empleado y los archivos transferidos antes de que ocurriera el fallo.

Si el error aparece justo al inicio de un trabajo, suele tratarse de un problema de autorización. Si los archivos se transfieren parcialmente antes de detenerse, es más probable que se trate de un tiempo de espera de red o de una interrupción en un archivo de gran tamaño. Comprobar qué patrón estás viendo acota considerablemente la solución antes de tocar ninguna configuración.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Panel Job History de RcloneView mostrando el estado de ejecución y los errores de sincronización de HiDrive" class="img-large img-center" />

## Volver a autenticar y ajustar el comportamiento de reintento

Cuando una sesión de HiDrive caduca, volver a añadir el remoto (remote) a través de Remote Manager y completar de nuevo el inicio de sesión en el navegador restaura la conexión sin eliminar las configuraciones de trabajo existentes. Una vez reconectado, vuelve al **Paso 2: Advanced Settings** del asistente de sincronización y confirma que **Retry entire sync if fails** esté configurado por encima de 1 — el valor predeterminado de 3 reintenta automáticamente un trabajo fallido en lugar de dejarlo bloqueado en estado de error.

En carpetas con muchos archivos pequeños, reduce también el **Number of equality checkers** a 4 o menos, ya que backends más lentos como HiDrive pueden agotar el tiempo de espera cuando RcloneView comprueba demasiados archivos simultáneamente. Activar la comparación por **checksum** en lugar de depender solo de la fecha de modificación también evita falsos positivos de "archivo modificado" que provocan cargas innecesarias.

<img src="/support/images/en/blog/new-remote.png" alt="Reconectando un remoto de HiDrive en RcloneView tras un error de autorización" class="img-large img-center" />

## Ejecutar un Dry Run antes de aplicar cambios

Antes de volver a ejecutar una sincronización grande de HiDrive tras una corrección, usa **Dry Run** para simular el trabajo. Enumera exactamente qué archivos se copiarán o eliminarán sin realizar ningún cambio real, lo que es la forma más rápida de confirmar si tus ajustes de reintento y filtros realmente resolvieron el error en lugar de ocultarlo. Este paso resulta especialmente útil tras ajustar la antigüedad máxima de archivo o las reglas de filtro personalizadas, ya que un filtro mal configurado puede excluir silenciosamente archivos que esperabas sincronizar.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configurando los ajustes del trabajo de sincronización y los filtros para una copia de seguridad de HiDrive en RcloneView" class="img-large img-center" />

Si el error persiste después de estos pasos, activa el registro (Logging) de rclone en Settings > Embedded Rclone, establece el nivel de registro en DEBUG, reinicia el proceso de rclone integrado y reproduce el fallo — el archivo de registro resultante indica con precisión la respuesta de la API que devolvió HiDrive.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abre Job History e identifica si el error de HiDrive ocurre al inicio o a mitad de la transferencia.
3. Vuelve a autenticar el remoto de HiDrive y ajusta la configuración de reintento, checksum y equality checkers.
4. Ejecuta un Dry Run para confirmar la corrección antes de ejecutar la sincronización completa.

Una rutina de copia de seguridad de HiDrive fiable se reduce a detectar pronto estos pequeños errores de configuración, y las herramientas de historial de trabajos y Dry Run de RcloneView hacen que ese diagnóstico sea sencillo.

---

**Guías relacionadas:**

- [Gestionar el almacenamiento de HiDrive — Sincronizar y hacer copia de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-hidrive-cloud-sync-backup-rcloneview)
- [Solucionar la caducidad de tokens OAuth en la nube — Cómo resolverlo con RcloneView](https://rcloneview.com/support/blog/fix-oauth-token-expired-cloud-sync-rcloneview)
- [Solucionar errores de Rclone — Cómo resolverlo con RcloneView](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />
