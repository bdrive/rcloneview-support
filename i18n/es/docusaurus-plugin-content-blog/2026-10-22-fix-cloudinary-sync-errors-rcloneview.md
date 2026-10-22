---
slug: fix-cloudinary-sync-errors-rcloneview
title: "Solucionar errores de sincronización de Cloudinary — Problemas de conexión, transferencia y archivos faltantes resueltos con RcloneView"
authors:
  - jay
description: "Solucione errores de sincronización de Cloudinary con RcloneView: revise el remoto, lea el historial de trabajos y los registros DEBUG, reduzca la concurrencia y verifique los resultados con Folder Compare."
keywords:
  - solucionar errores de sincronización de Cloudinary
  - fallo de sincronización de Cloudinary
  - error de rclone en Cloudinary
  - solución de problemas de RcloneView
  - archivos faltantes en Cloudinary
  - registro DEBUG de rclone
  - comparación de carpetas
  - solución de problemas de sincronización en la nube
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-storage
  - dam
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar errores de sincronización de Cloudinary — Problemas de conexión, transferencia y archivos faltantes resueltos con RcloneView

> Cuando un trabajo de Cloudinary falla, el historial de trabajos, los registros DEBUG y Folder Compare de RcloneView muestran si la causa es el remoto, la carga de transferencia o archivos que nunca llegaron.

Una sincronización de Cloudinary que se detiene con un error vago, o que termina con carpetas que parecen incompletas, es difícil de diagnosticar solo desde la línea de comandos. RcloneView reúne la comprobación del remoto, el registro del trabajo, el log y una comparación lado a lado en una sola ventana, para que pueda trabajar con evidencias en lugar de reintentar a ciegas. RcloneView monta y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Confirme que el remoto sigue conectándose

Si un trabajo falla en pocos segundos, sospeche del remoto antes que de los datos. Abra Remote Manager desde la pestaña Remote, edite el remoto de Cloudinary y vuelva a introducir las credenciales si han cambiado o han caducado. Luego abra el remoto en un panel Explorer y explore la carpeta raíz. Si se lista con normalidad, la conexión es correcta y el problema está en otra parte.

En la pestaña Terminal integrada también puede ejecutar `rclone about "remote:"`, sustituyendo `remote` por el nombre de su remoto, como comprobación rápida de que la cuenta responde.

<img src="/support/images/en/blog/new-remote.png" alt="Edición de un remoto de Cloudinary en Remote Manager de RcloneView" class="img-large img-center" />

## Lea el historial de trabajos y active el registro DEBUG

Abra Job History y compruebe el estado, la duración y el número de archivos de la ejecución fallida. Un trabajo que falla a mitad de camino suele apuntar a archivos concretos o a la carga de transferencia, no a las credenciales.

Para ver el mensaje exacto de cada archivo, vaya a Settings > Embedded Rclone, active el registro de rclone, establezca el nivel en DEBUG y haga clic en Restart Embedded Rclone. Reproduzca el fallo y lea el log en la pestaña Log o en la carpeta de logs que haya configurado.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Historial de trabajos de RcloneView con un trabajo de Cloudinary con errores" class="img-large img-center" />

## Reduzca la concurrencia y previsualice la nueva ejecución

Los fallos intermitentes suelen aliviarse cuando se mueven menos archivos a la vez. En el paso 2 del asistente de sincronización, reduzca el número de transferencias de archivos y establezca los equality checkers en 4 o menos, que es la recomendación para backends lentos. Mantenga "Retry entire sync if fails" en 3 para que los fallos transitorios se reintenten hasta tres veces.

Antes de volver a ejecutar, use Dry Run para revisar qué archivos se copiarán o eliminarán, de modo que el reintento no le sorprenda.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Nueva ejecución de un trabajo de Cloudinary con menor concurrencia en RcloneView" class="img-large img-center" />

## Verifique con Folder Compare

Tras la nueva ejecución, abra Compare con su carpeta local en un lado y Cloudinary en el otro. Filtre por archivos left-only, right-only y different para ver qué falta o no coincide, y copie solo esos elementos en lugar de repetir todo el trabajo.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare que lista archivos que faltan en Cloudinary" class="img-large img-center" />

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Vuelva a comprobar el remoto de Cloudinary en Remote Manager y confirme que se lista la carpeta raíz.
3. Revise Job History y active el registro DEBUG para el trabajo que falla.
4. Reduzca la concurrencia, ejecute un Dry Run, vuelva a ejecutar y confirme el resultado con Folder Compare.

Una vez que la causa es visible en los logs y en la comparación, un fallo de Cloudinary se convierte en una solución breve y repetible.

---

**Guías relacionadas:**

- [Gestione el almacenamiento de Cloudinary — Sincronice y haga copias de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-cloudinary-cloud-sync-backup-rcloneview)
- [Solucione errores de sincronización de SugarSync con RcloneView](https://rcloneview.com/support/blog/fix-sugarsync-sync-errors-rcloneview)
- [Registre y depure transferencias en la nube — Solucione problemas en RcloneView](https://rcloneview.com/support/blog/log-debug-troubleshoot-transfers-rcloneview)

<CloudSupportGrid />
