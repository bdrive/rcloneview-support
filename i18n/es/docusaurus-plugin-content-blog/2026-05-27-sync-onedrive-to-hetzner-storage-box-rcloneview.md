---
slug: sync-onedrive-to-hetzner-storage-box-rcloneview
title: "Sincronizar OneDrive con Hetzner Storage Box — Copia de seguridad en la nube con RcloneView"
authors:
  - jay
description: "Sincroniza OneDrive con Hetzner Storage Box usando RcloneView. Configura copias de seguridad SFTP, programa sincronizaciones automáticas y protege tus archivos de Microsoft con almacenamiento europeo."
keywords:
  - sync OneDrive to Hetzner Storage Box
  - Microsoft OneDrive Hetzner backup
  - RcloneView OneDrive Hetzner
  - Hetzner Storage Box SFTP backup
  - cloud storage to Hetzner sync
  - OneDrive backup Europe GDPR
  - cloud file sync automation
  - Hetzner cloud backup tool
  - OneDrive off-site backup
tags:
  - onedrive
  - hetzner
  - sftp
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincronizar OneDrive con Hetzner Storage Box — Copia de seguridad en la nube con RcloneView

> Crea una copia de seguridad externa e independiente de tus archivos de OneDrive sincronizándolos con Hetzner Storage Box mediante RcloneView, sin necesidad de scripts.

Hetzner Storage Box es una solución de almacenamiento SFTP alojada en Europa, económica y popular entre desarrolladores y equipos de TI que buscan un almacenamiento de copias de seguridad fiable y respetuoso con la privacidad, fuera de los grandes proveedores hiperescalares. Sincronizar tu contenido de Microsoft OneDrive con un Hetzner Storage Box mediante RcloneView crea una copia externa totalmente independiente del ecosistema de Microsoft, útil para la recuperación ante desastres, la residencia de datos conforme al RGPD, o para protegerte frente a una suspensión inesperada de la cuenta. Todo el flujo de trabajo se puede configurar a través de la interfaz visual de RcloneView sin escribir un solo comando de rclone.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurar OneDrive y Hetzner Storage Box como remotos

Antes de sincronizar, necesitas registrar ambos servicios como remotos en RcloneView. OneDrive utiliza autenticación OAuth por navegador: haz clic en la pestaña **Remote** → **New Remote** → **OneDrive**, y RcloneView abrirá tu navegador para un inicio de sesión de Microsoft con un solo clic. No es necesario gestionar manualmente claves de API ni credenciales de cliente. Tanto las cuentas personales de OneDrive como las cuentas empresariales de OneDrive para Microsoft 365 funcionan con este flujo.

Hetzner Storage Box se conecta mediante SFTP. En el cuadro de diálogo New Remote, selecciona **SFTP** y luego introduce el nombre de host de tu Storage Box (con el formato `u{number}.your-storagebox.de`), tu nombre de usuario y tu contraseña o la ruta a tu clave privada SSH. Hetzner admite autenticación tanto por contraseña como por clave: los equipos que gestionan varios destinos de copia de seguridad suelen preferir las claves SSH para la automatización desatendida sin almacenar contraseñas en texto plano.

<img src="/support/images/en/blog/new-remote.png" alt="Adding OneDrive and Hetzner Storage Box as remotes in RcloneView" class="img-large img-center" />

Una vez que ambos remotos aparezcan en las pestañas del explorador de RcloneView, navega por cada lado para confirmar la conexión antes de crear tu trabajo de sincronización.

## Crear el trabajo de sincronización de OneDrive a Hetzner

Con ambos remotos listos, abre **Job Manager** desde la pestaña Home y haz clic en **Add Job**. En el asistente de 4 pasos, define tu carpeta de origen de OneDrive; puede ser la raíz completa de OneDrive o una subcarpeta específica, como `Documents/Contracts`, o una carpeta compartida de Teams. Define la ruta de Hetzner Storage Box como destino.

En el paso de Advanced Settings, configura las transferencias simultáneas según la velocidad de tu conexión y activa la verificación de checksum para datos críticos. Un bufete de abogados que hace copia de seguridad de 30 GB de expedientes en Hetzner puede confiar en el modo checksum para verificar que cada documento llega intacto, detectando cualquier corrupción producida durante la transferencia. El paso de Filtering permite excluir archivos de bloqueo temporales de Office (`.tmp`, `.lock`) o restringir el trabajo a tipos de documento específicos, como PDF y hojas de cálculo.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OneDrive to Hetzner Storage Box sync job configuration in RcloneView" class="img-large img-center" />

Ejecuta primero una simulación (dry-run): RcloneView muestra exactamente qué archivos se copiarían o eliminarían sin realizar ningún cambio. Cuando estés satisfecho con la vista previa, ejecuta el trabajo. La pestaña **Transferring**, en la parte inferior, muestra el progreso de la transferencia en tiempo real, la velocidad de transferencia y el recuento de archivos durante todo el proceso.

## Programar y supervisar copias de seguridad automatizadas

Con una licencia RcloneView PLUS, puedes automatizar tu copia de seguridad de OneDrive a Hetzner con una programación tipo crontab. Configurar una sincronización diaria a las 03:00 AM garantiza que tus archivos de OneDrive se respalden en Hetzner cada noche sin intervención manual. El simulador de programación del asistente muestra una vista previa de las próximas ejecuciones para que puedas confirmar el patrón antes de guardar el trabajo.

El historial de trabajos mantiene un registro de auditoría completo: cada ejecución registra su hora de inicio, duración, velocidad de transferencia, recuento de archivos y resultado. Si una copia de seguridad falla debido a un problema de red transitorio, la lógica de reintento configurable de RcloneView vuelve a intentar el trabajo automáticamente. Con las notificaciones de finalización de trabajos (disponibles con PLUS), tu equipo recibe una alerta ante cualquier fallo antes de que comience la siguiente jornada laboral, de modo que ninguna ventana de copia de seguridad pase desapercibida.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling daily OneDrive to Hetzner Storage Box sync in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade **OneDrive** como remoto OAuth desde la pestaña Remote → **New Remote** → OneDrive.
3. Añade **Hetzner Storage Box** como remoto SFTP con tu nombre de host y tus credenciales.
4. Crea un trabajo de sincronización en **Job Manager** con OneDrive como origen y tu ruta de Hetzner como destino.

Hacer copia de seguridad de OneDrive en Hetzner Storage Box te ofrece una red de seguridad de bajo coste, alojada en Europa, que funciona automáticamente, garantizando que tus archivos de Microsoft estén protegidos incluso cuando los servicios en la nube sufran interrupciones inesperadas.

---

**Guías relacionadas:**

- [Gestionar la sincronización de Hetzner Storage Box con RcloneView](https://rcloneview.com/support/blog/manage-hetzner-storage-box-sync-rcloneview)
- [Gestionar el almacenamiento de OneDrive — Sincronización y copia de seguridad con RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Sincronizar Dropbox con Hetzner Storage Box con RcloneView](https://rcloneview.com/support/blog/sync-dropbox-to-hetzner-storage-box-rcloneview)

<CloudSupportGrid />
