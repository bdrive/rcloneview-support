---
slug: sync-zoho-workdrive-to-onedrive-rcloneview
title: "Sincronizar Zoho WorkDrive con OneDrive — Copia de seguridad en la nube con RcloneView"
authors:
  - steve
description: "Sincroniza archivos de Zoho WorkDrive a Microsoft OneDrive con RcloneView, manteniendo ambas cuentas de almacenamiento empresarial respaldadas y actualizadas."
keywords:
  - sincronizar Zoho WorkDrive con OneDrive
  - copia de seguridad de Zoho WorkDrive
  - migración de Zoho WorkDrive a OneDrive
  - RcloneView Zoho WorkDrive
  - copia de seguridad empresarial entre nubes
  - herramienta de sincronización de Microsoft OneDrive
  - transferencia de archivos multi-nube
  - sincronización nube a nube GUI
  - copia de seguridad de almacenamiento empresarial
tags:
  - RcloneView
  - zoho
  - onedrive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincronizar Zoho WorkDrive con OneDrive — Copia de seguridad en la nube con RcloneView

> Mantén una copia de seguridad continua de las carpetas de equipo de Zoho WorkDrive en Microsoft OneDrive sin exportar archivos a mano ni programar un trabajo de transferencia distinto para cada departamento.

Los equipos que han adoptado Zoho WorkDrive como estándar para la colaboración diaria a menudo siguen necesitando presencia en Microsoft OneDrive, ya sea por un cliente que solo trabaja en el ecosistema de Microsoft, por una fusión que deja dos plataformas de almacenamiento en uso a la vez, o simplemente por querer una segunda copia de los archivos empresariales fuera de la infraestructura de Zoho. Descargar manualmente desde WorkDrive y volver a subir a OneDrive no escala más allá de un puñado de archivos, y no deja ningún registro de qué se ejecutó ni cuándo. RcloneView conecta ambas plataformas en una sola interfaz y convierte esa transferencia en un trabajo de sincronización repetible.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Zoho WorkDrive y OneDrive como remotos

OneDrive se conecta mediante un inicio de sesión OAuth estándar basado en navegador en el asistente New Remote de RcloneView, sin necesidad de una clave de API independiente. Zoho WorkDrive requiere un paso adicional durante la configuración: seleccionar la región correcta para la cuenta, ya que Zoho aloja los datos en diferentes regiones geográficas según dónde se creó el espacio de trabajo. Una vez añadidos ambos remotos, aparecen como pestañas separadas en el explorador, y cualquiera de ellos puede explorarse, filtrarse o compararse con el otro igual que cualquier carpeta local.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Zoho WorkDrive and OneDrive as remotes in RcloneView" class="img-large img-center" />

## Crear un trabajo de sincronización entre ambas plataformas

El primer paso del asistente de Sync es donde se seleccionan el origen (carpeta de Zoho WorkDrive) y el destino (carpeta de OneDrive), junto con un nombre de trabajo y la dirección de sincronización. La sincronización unidireccional —que modifica solo el destino— es el modo estable y oficial, y la opción correcta para un trabajo de tipo copia de seguridad donde WorkDrive se mantiene como fuente de verdad. El paso 2 cubre la concurrencia de transferencia y la verificación de igualdad, útil para reducir si la API de WorkDrive responde lentamente bajo muchas solicitudes en paralelo. La configuración de filtrado del paso 3 permite acotar el trabajo solo a las carpetas o tipos de archivo relevantes, usando filtros predefinidos para documentos y medios o reglas de exclusión personalizadas como `/.tmp/*`.

Sincronizar entre Zoho WorkDrive y OneDrive no requiere actualizar la licencia, ya que tanto la sincronización 1:N como la gestión básica de Sync & Job Management están incluidas en el nivel FREE.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job from Zoho WorkDrive to OneDrive" class="img-large img-center" />

## Verificar y automatizar la transferencia

Antes de ejecutar el trabajo contra datos reales, Dry Run simula la sincronización y muestra exactamente qué archivos se copiarían, permitiendo detectar un filtro mal configurado o una carpeta no deseada antes de que se mueva nada de verdad. Cuando el trabajo se ve correcto, se guarda en Job Manager, donde puede volver a ejecutarse manualmente o, con una licencia PLUS, adjuntarse a una programación de estilo crontab para que la copia de seguridad de WorkDrive a OneDrive se ejecute automáticamente sin que nadie tenga que recordar activarla.

Job History registra cada ejecución —hora de inicio, duración, estado y total de archivos transferidos—, lo cual resulta útil para confirmar que una copia de seguridad programada se completó realmente en lugar de fallar en silencio durante la noche.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring sync job from Zoho WorkDrive to OneDrive" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Conecta Zoho WorkDrive (seleccionando la región correcta) y OneDrive (mediante inicio de sesión OAuth) a través de la pestaña Remote > New Remote.
3. Crea un trabajo de Sync unidireccional desde tu carpeta de WorkDrive a un destino en OneDrive, aplicando filtros según sea necesario.
4. Ejecuta Dry Run para confirmar la lista de archivos, luego guarda el trabajo y prográmalo si tienes una licencia PLUS.

Con ambas plataformas conectadas en la misma ventana, mantener sincronizados Zoho WorkDrive y OneDrive pasa de ser una tarea manual recurrente a un trabajo programado.

---

**Guías relacionadas:**

- [Gestionar Zoho WorkDrive — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [Montar Google Drive como unidad local con RcloneView](https://rcloneview.com/support/blog/mount-google-drive-as-local-drive-rcloneview)
- [Reglas de filtrado — Sincronización selectiva en RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)

<CloudSupportGrid />
