---
slug: sync-google-photos-to-google-drive-rcloneview
title: "Sincroniza Google Photos con Google Drive — Organiza y haz copia de seguridad de tu biblioteca de fotos con RcloneView"
authors:
  - kai
description: "Aprende a sincronizar Google Photos con Google Drive automáticamente usando RcloneView. Transfiere, organiza y haz copia de seguridad de toda tu biblioteca de fotos entre cuentas en la nube."
keywords:
  - sincronizar Google Photos con Google Drive
  - copia de seguridad de Google Photos a Google Drive RcloneView
  - transferencia de Google Photos a Google Drive
  - sincronización de RcloneView con Google Photos
  - copia de seguridad de biblioteca de fotos en la nube
  - copia de seguridad automatizada de Google Photos
  - gestión de archivos de fotos en la nube
  - sincronización en la nube de Google Photos
  - transferir fotos entre servicios de Google
  - herramienta de organización de fotos en la nube
tags:
  - google-photos
  - google-drive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincroniza Google Photos con Google Drive — Organiza y haz copia de seguridad de tu biblioteca de fotos con RcloneView

> Google Photos y Google Drive son remotos de nube independientes en rclone: RcloneView te permite sincronizar toda tu biblioteca de fotos entre ellos con unos pocos clics y programar la ejecución automática.

Muchos fotógrafos y equipos usan Google Photos como su herramienta principal de captura y organización, mientras dependen de Google Drive para el uso compartido estructurado de archivos y la colaboración. El problema: se trata de dos servicios en la nube distintos en rclone, y el contenido no fluye automáticamente entre ellos. Un fotógrafo de bodas que gestiona decenas de miles de imágenes procesadas en Google Photos puede necesitar que esos archivos estén accesibles en una carpeta estructurada de Google Drive para entregas a clientes y archivado a largo plazo. RcloneView conecta ambos servicios desde la misma interfaz, lo que facilita transferir, sincronizar y programar migraciones de fotos entre ellos sin necesidad de usar la línea de comandos.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Google Photos y Google Drive en RcloneView

Tanto Google Photos como Google Drive usan autenticación OAuth basada en el navegador. En RcloneView, abre la pestaña Remote y haz clic en New Remote, luego selecciona Google Photos y completa el inicio de sesión en el navegador. Repite el proceso para añadir Google Drive como segundo remoto. En pocos minutos, ambas cuentas aparecerán como paneles independientes en el explorador de archivos de doble panel.

Con ambos remotos visibles uno al lado del otro, puedes explorar tu biblioteca de Google Photos junto a la estructura de carpetas de Google Drive en la misma ventana. Esta vista paralela facilita detectar qué álbumes de fotos o rangos de fechas aún no se han transferido, y arrastrar carpetas individuales para copias rápidas puntuales. La ventana emergente de confirmación de arrastrar y soltar (activable en Settings) evita movimientos accidentales al trabajar con bibliotecas grandes.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Photos and Google Drive as remotes in RcloneView" class="img-large img-center" />

## Configurar un trabajo de sincronización para transferir tu biblioteca de fotos

Para transferencias masivas, usa el Job Manager para crear un trabajo de sincronización dedicado. Haz clic en el botón Sync desde la pestaña Home, selecciona tu carpeta de Google Photos como origen y elige la carpeta de destino en Google Drive. El asistente de 4 pasos te permite configurar flujos de transferencia concurrentes, habilitar la verificación de checksum para detectar archivos dañados durante el tránsito, y aplicar filtros de tamaño de archivo o antigüedad si quieres excluir vídeos o extraer solo fotos de un período específico.

Antes de ejecutar la transferencia completa, usa la función Dry Run para previsualizar exactamente qué archivos se copiarán, algo esencial al sincronizar archivos grandes donde quieres evitar sobrescribir accidentalmente con duplicados una carpeta de Drive ya organizada. El dry run muestra una lista completa de las operaciones planificadas sin realizar ningún cambio real.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud sync job between Google Photos and Google Drive in RcloneView" class="img-large img-center" />

La pestaña Transferring en la parte inferior de la pantalla ofrece monitorización en vivo de la transferencia: porcentaje de progreso, velocidad de transferencia actual y recuento de archivos, para que puedas seguir una migración de fotos grande sin tener que adivinar cuánto queda.

## Programar sincronizaciones automáticas de fotos (licencia PLUS)

Para fotógrafos o equipos que suben contenido a Google Photos de forma continua, una transferencia puntual no es suficiente. Con una licencia PLUS, puedes programar trabajos de sincronización recurrentes usando una programación de tipo crontab. Configura un trabajo nocturno para extraer cualquier foto recién añadida en Google Photos hacia la carpeta correspondiente de Google Drive, manteniendo ambas cuentas actualizadas sin intervención manual. El programador admite intervalos detallados: ejecución por minuto, hora, día de la semana, día del mes o mes.

Job History registra cada ejecución: cuándo se ejecutó, cuántos archivos se transfirieron, el tamaño total de datos, la velocidad y si se completó o falló. Si un problema de red interrumpe una sesión, RcloneView reintenta automáticamente (3 intentos por defecto) y registra el resultado para que puedas revisarlo más tarde.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Google Photos to Google Drive sync transfers" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade Google Photos mediante Remote tab > New Remote > Google Photos, y luego autentícate a través del navegador.
3. Añade Google Drive como segundo remoto siguiendo el mismo procedimiento.
4. Crea un trabajo de sincronización en el Job Manager, selecciona Google Photos como origen y una carpeta de Google Drive como destino, ejecuta primero un Dry Run y luego realiza la transferencia completa.

Sincronizar tu biblioteca de Google Photos con Google Drive lleva pocos minutos de configuración con RcloneView, y te ofrece acceso estructurado a los archivos y una copia secundaria fiable de toda tu colección de fotos.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento de Google Photos — Sincroniza y haz copia de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-google-photos-cloud-sync-backup-rcloneview)
- [Gestiona el almacenamiento de Google Drive — Sincroniza y haz copia de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Haz copia de seguridad de Google Photos en un disco externo y NAS con RcloneView](https://rcloneview.com/support/blog/backup-google-photos-external-drive-nas-rcloneview)

<CloudSupportGrid />
