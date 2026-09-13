---
slug: migrate-sftp-to-google-drive-rcloneview
title: "Migra de SFTP a Google Drive — transfiere archivos con RcloneView"
authors:
  - kai
description: "Migra archivos de un servidor SFTP a Google Drive usando el explorador de doble panel de RcloneView, la vista previa de simulación y los trabajos de sincronización programados."
keywords:
  - RcloneView
  - migrar SFTP a Google Drive
  - migración de SFTP a la nube
  - transferir archivos SFTP
  - transferencia de archivos SSH a la nube
  - migración de almacenamiento en la nube
  - GUI de cliente SFTP
  - respaldo de Google Drive
  - herramienta de transferencia de archivos segura
  - dar de baja un servidor SFTP
tags:
  - RcloneView
  - sftp
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migra de SFTP a Google Drive — transfiere archivos con RcloneView

> Retira un servidor SFTP envejecido sin perder ni un solo archivo, usando RcloneView para mover todo directamente a Google Drive.

Muchos equipos siguen operando un servidor SFTP interno para el intercambio de archivos, pero mantener las credenciales SSH, las reglas de firewall y el espacio en disco de esa máquina resulta caro comparado con dejar que Google Drive se encargue del almacenamiento y la compartición. RcloneView se conecta tanto a un host SFTP como a Google Drive en la misma ventana, así que puedes explorar, comparar y transferir entre ambos sin tocar una terminal. Es un primer paso práctico para un equipo de TI pequeño que está migrando un servidor de archivos heredado antes de retirar el hardware definitivamente.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta el servidor SFTP y Google Drive uno junto al otro

Agrega primero el remoto SFTP: introduce la dirección del host y las credenciales SSH en el asistente New Remote, usando el puerto 22 por defecto. Agrega Google Drive como segundo remoto mediante su inicio de sesión OAuth en el navegador, sin necesidad de introducir una clave de API. Abre ambos en paneles Explorer separados usando el diseño de panel dividido de RcloneView, de modo que puedas ver la estructura completa de carpetas de cada lado a la vez.

<img src="/support/images/en/blog/new-remote.png" alt="Adding an SFTP remote and a Google Drive remote in RcloneView" class="img-large img-center" />

RcloneView monta y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux, así que la misma configuración funciona igual si el servidor SFTP está en tu red local o solo es accesible a través de un host intermedio.

## Obtén una vista previa de la migración antes de mover nada

Antes de transferir años de archivos acumulados, ejecuta Folder Compare entre la raíz del SFTP y la carpeta de destino en Google Drive para ver exactamente qué falta en el destino. Luego configura la transferencia como un trabajo de Sync y usa Dry Run para simular la copia — RcloneView lista cada archivo que se movería y cada carpeta que se crearía, sin escribir nada realmente hasta que confirmes.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Comparing SFTP and Google Drive folder contents before migration in RcloneView" class="img-large img-center" />

Este paso importa especialmente cuando el servidor SFTP ha acumulado años de carpetas anidadas con nombres inconsistentes — la simulación saca a la luz las sorpresas antes de que se conviertan en un incidente de soporte nocturno.

## Automatiza el resto de la transferencia con trabajos programados

Para un archivo SFTP grande, no intentes moverlo todo de una sola vez. Guarda la migración como un Job en el Job Manager, ajusta el número de transferencias de archivos para que coincida con el rendimiento real de tu red, y déjala ejecutarse en segundo plano mientras sigues trabajando en otros paneles Explorer. Si el servidor SFTP necesita seguir activo unas semanas más durante la transición, la programación con licencia PLUS te permite repetir la sincronización con un horario estilo crontab para que Google Drive se mantenga actualizado hasta que se apague el servidor antiguo.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring SFTP to Google Drive sync job in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agrega tu servidor SFTP como remoto usando su dirección de host y sus credenciales SSH.
3. Agrega Google Drive como segundo remoto mediante el flujo de inicio de sesión OAuth en el navegador.
4. Ejecuta Folder Compare y Dry Run, y luego guarda la transferencia como un Job antes de ejecutarla de verdad.

Una vez que el trabajo de sincronización termine limpiamente en una ejecución repetida sin nada más que copiar, el antiguo servidor SFTP estará listo para apagarse con seguridad.

---

**Guías relacionadas:**

- [Administra el almacenamiento del servidor SFTP — sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [Administra el almacenamiento de Google Drive — sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Monta SFTP y SMB como unidad local con RcloneView](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)

<CloudSupportGrid />
