---
slug: fix-dropbox-sync-errors-rcloneview
title: "Corregir errores de sincronización de Dropbox — Cómo resolver problemas comunes con RcloneView"
authors:
  - steve
description: "¿Problemas con errores de sincronización de Dropbox? Aprende a diagnosticar y corregir los fallos de sincronización de Dropbox más comunes usando las herramientas de solución de problemas integradas de RcloneView."
keywords:
  - corregir errores de sincronización de Dropbox
  - la sincronización de Dropbox no funciona
  - fallo de sincronización de Dropbox
  - solución de problemas de Dropbox con RcloneView
  - error de límite de velocidad de Dropbox
  - errores de transferencia de archivos de Dropbox
  - solución de errores de sincronización en la nube
  - errores de Dropbox con rclone
  - problemas de copia de seguridad de Dropbox
  - resolver problemas de sincronización en la nube
tags:
  - dropbox
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Corregir errores de sincronización de Dropbox — Cómo resolver problemas comunes con RcloneView

> Cuando la sincronización de Dropbox falla en silencio o arroja errores crípticos, RcloneView te ofrece la visibilidad y los controles necesarios para identificar el problema y retomar las transferencias.

Los errores de sincronización de Dropbox son más comunes de lo que la mayoría de los usuarios espera — desde tokens OAuth caducados y límites de velocidad de la API hasta problemas de permisos de archivos y desajustes de configuración. El problema es que el cliente de escritorio de Dropbox ofrece muy poca información de diagnóstico cuando algo falla. RcloneView, construido sobre el maduro controlador de Dropbox de rclone, muestra registros detallados, permite ajustar los parámetros de transferencia y ofrece un modo de simulación (dry-run) para verificar exactamente qué sucederá antes de tocar datos reales.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Vuelve a autenticar tu remoto de Dropbox

La causa más frecuente de los fallos de sincronización de Dropbox es un token OAuth caducado o revocado. Dropbox invalida periódicamente los tokens — especialmente después de cambios de contraseña o revisiones de seguridad. En RcloneView, abre **Remote Manager** desde la pestaña Remote, selecciona tu remoto de Dropbox y elige **Edit**. Desde ahí, inicia un nuevo inicio de sesión OAuth en el navegador para establecer automáticamente un token válido nuevo.

Para las cuentas de Dropbox para empresas, verifica que la configuración del remoto incluya `dropbox_business = true` en los ajustes avanzados. Sin este indicador, las carpetas de equipo compartidas pueden parecer inaccesibles o no listar los archivos correctamente. Una vez reautenticado, realiza una prueba rápida navegando al remoto en el panel Explorer — si las carpetas cargan, el token funciona.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring or re-authenticating a Dropbox remote in RcloneView" class="img-large img-center" />

## Ajusta la configuración de transferencia para evitar el límite de velocidad

Dropbox impone límites de velocidad en su API que hacen que las operaciones de sincronización se detengan o fallen cuando se realizan demasiadas solicitudes simultáneas. En el asistente de trabajos de sincronización de RcloneView (Paso 2: Advanced Settings), reduce el **Number of file transfers** a 2 o 4 cuando trabajes con carpetas grandes de Dropbox. Esto regula el ritmo de las solicitudes a la API dentro de los umbrales aceptables de Dropbox y evita fallos por lotes.

La opción **Retry entire sync if fails** (predeterminado: 3 reintentos) gestiona automáticamente los errores de red transitorios y las respuestas temporales de límite de velocidad. Para trabajos que sincronizan cientos de archivos, mantener este valor en 3 hace que RcloneView vuelva a intentar el trabajo completo antes de reportar un fallo. Si los errores persisten en todos los reintentos, la pestaña **Log** en la vista de información inferior muestra la salida de rclone con marcas de tiempo y códigos de error específicos — lo que facilita distinguir entre un fallo de autenticación, un tiempo de espera de red o un conflicto a nivel de archivo.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Dropbox sync job with adjusted transfer settings in RcloneView" class="img-large img-center" />

## Usa Dry Run para detectar problemas antes de que ocurran

Antes de ejecutar cualquier sincronización que pudiera modificar o eliminar archivos en Dropbox, usa la función **Dry Run** desde el Job Manager. Dry Run simula la sincronización por completo — mostrando qué archivos se copiarían y cuáles se eliminarían — sin realizar ningún cambio real. Para un equipo de marketing que sincroniza 50 GB de recursos de campaña en Dropbox, una simulación que revele eliminaciones inesperadas puede evitar un error costoso.

Los resultados de Dry Run aparecen en la pestaña Transferring como una vista previa detallada a nivel de archivo. Si notas omisiones o eliminaciones inesperadas, revisa tus reglas de filtro en el Paso 3 del asistente de sincronización. Las causas más comunes incluyen límites de tamaño máximo de archivo configurados de forma demasiado conservadora, o filtros de antigüedad máxima de archivo que excluyen inadvertidamente archivos modificados recientemente de la transferencia.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Reviewing file differences before syncing Dropbox in RcloneView" class="img-large img-center" />

## Revisa el historial de trabajos para diagnosticar fallos recurrentes

RcloneView mantiene un historial completo de trabajos para cada operación de sincronización, accesible directamente desde el Job Manager. Cada entrada del historial muestra el tipo de ejecución (manual o programada), hora de inicio, duración, velocidad de transferencia, número de archivos, tamaño total y estado final — Completed, Errored o Canceled. Filtrar por rango de fechas te permite centrarte en los fallos recientes y compararlos con las ejecuciones exitosas.

Cuando los errores se repiten de manera constante, la pestaña Log ofrece una salida granular de rclone que identifica la naturaleza del problema. Una agencia de medios que ejecuta copias de seguridad nocturnas de Dropbox, por ejemplo, puede comparar la ejecución fallida del lunes con la exitosa del martes para detectar si el problema está relacionado con archivos específicos, condiciones de red o un cambio en los permisos de carpeta.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Dropbox sync job history and error log in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abre Remote Manager y vuelve a autenticar tu remoto de Dropbox mediante un nuevo inicio de sesión OAuth en el navegador.
3. Edita tu trabajo de sincronización y reduce las transferencias concurrentes en Advanced Settings para disminuir el riesgo de límite de velocidad.
4. Ejecuta un Dry Run para previsualizar los resultados de la sincronización antes de realizar el trabajo real.
5. Revisa Job History y la pestaña Log para rastrear cualquier patrón de error persistente.

Con visibilidad total de registros y controles de transferencia granulares, RcloneView convierte la solución de problemas de Dropbox de una tarea de adivinanzas en un proceso de diagnóstico sistemático.

---

**Guías relacionadas:**

- [Corregir el ancho de banda y limitar las subidas lentas con RcloneView](https://rcloneview.com/support/blog/fix-bandwidth-throttle-slow-uploads-rcloneview)
- [Corregir errores de permiso denegado en transferencias en la nube con RcloneView](https://rcloneview.com/support/blog/fix-cloud-transfer-permission-denied-errors-rcloneview)
- [Migrar de Dropbox a Google Drive con RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-google-drive-with-rcloneview)

<CloudSupportGrid />
