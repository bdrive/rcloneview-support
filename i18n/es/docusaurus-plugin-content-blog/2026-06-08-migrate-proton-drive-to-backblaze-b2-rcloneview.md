---
slug: migrate-proton-drive-to-backblaze-b2-rcloneview
title: "Migra Proton Drive a Backblaze B2 — Transferencia segura en la nube con RcloneView"
authors:
  - jay
description: "Mueve archivos de Proton Drive a Backblaze B2 usando RcloneView. Guía paso a paso para migrar datos de almacenamiento en la nube cifrado a almacenamiento de objetos asequible."
keywords:
  - Proton Drive to Backblaze B2
  - migrate Proton Drive Backblaze
  - Proton Drive cloud migration
  - Backblaze B2 cloud backup
  - RcloneView cloud transfer
  - cloud-to-cloud file migration
  - move files from Proton Drive
  - Backblaze B2 object storage backup
  - Proton Drive export backup
tags:
  - proton-drive
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migra Proton Drive a Backblaze B2 — Transferencia segura en la nube con RcloneView

> Mueve tus archivos de Proton Drive al almacenamiento de objetos asequible de Backblaze B2 usando RcloneView — sin necesidad de descargas manuales.

Proton Drive ofrece un cifrado de extremo a extremo robusto y almacenamiento centrado en la privacidad, lo que lo convierte en una opción popular para datos personales y empresariales sensibles. A medida que las necesidades de almacenamiento crecen — o cuando necesitas un destino de copia de seguridad secundario y económico — migrar archivos a Backblaze B2 se convierte en una opción práctica. Un estudio de fotografía que archiva terabytes de archivos RAW, o un equipo de desarrollo que consolida activos en la nube, puede beneficiarse del almacenamiento de objetos escalable de B2 junto con el almacenamiento primario de Proton, centrado en la privacidad. RcloneView simplifica esta migración de nube a nube, transmitiendo datos directamente entre proveedores sin necesidad de descargar los archivos primero a tu máquina local.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Proton Drive y Backblaze B2

Antes de migrar, configura ambos remotos en la nube en RcloneView. Comienza agregando tu cuenta de Proton Drive: navega a la pestaña Remote en la barra de menú y haz clic en New Remote. Selecciona Proton Drive de la lista de proveedores e introduce el correo electrónico y la contraseña de tu cuenta de Proton. Si tienes habilitada la autenticación de dos factores, RcloneView te pedirá tu código 2FA durante la configuración. La compatibilidad con Proton Drive requiere rclone v1.69 o posterior — el rclone integrado de RcloneView gestiona esto automáticamente.

A continuación, agrega tu remoto de Backblaze B2. Haz clic de nuevo en New Remote y elige Backblaze B2. Necesitarás tu Application Key ID y tu Application Key, generados desde la consola de Backblaze B2 en App Keys. Restringe la clave al bucket específico que deseas usar como destino de la migración, o concede acceso a nivel de cuenta si planeas crear un nuevo bucket durante la configuración.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Proton Drive and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

Una vez configurados ambos remotos, explóralos lado a lado en el explorador de doble panel de RcloneView. Navega a tu carpeta de Proton Drive en un lado y a tu bucket de B2 en el otro para confirmar que ambas conexiones funcionan antes de iniciar la migración.

## Configurar el trabajo de migración

Con ambos remotos conectados, abre el Job Manager desde la pestaña Home y crea un nuevo trabajo de sincronización o copia. Establece tu carpeta de Proton Drive como origen y tu bucket de Backblaze B2 como destino. Asigna al trabajo un nombre descriptivo como `proton-to-b2-archive` para distinguirlo de otros trabajos de transferencia.

Antes de ejecutar la migración completa, usa la opción Dry Run para previsualizar exactamente qué archivos se transferirán. Esta simulación muestra la lista completa de archivos que se copiarán sin mover ningún dato — un paso esencial al migrar bibliotecas grandes para detectar problemas de mapeo de rutas a tiempo. Para archivos grandes de Proton Drive, habilita la verificación de checksum en la configuración avanzada para garantizar la integridad de los archivos entre ambos proveedores.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a cloud-to-cloud transfer job from Proton Drive to Backblaze B2" class="img-large img-center" />

La configuración de transferencias concurrentes en el Paso 2 del asistente de trabajos te permite ajustar el rendimiento. Comenzar con 4 transferencias concurrentes es un valor predeterminado razonable, y puedes aumentarlo una vez que hayas confirmado que la migración se está ejecutando sin problemas.

## Monitorear y verificar la transferencia

Una vez que inicies el trabajo de migración, la pestaña Transferring en el panel inferior de RcloneView muestra el progreso en tiempo real: velocidad de transferencia, archivos completados, tamaño total y datos restantes. Para migraciones grandes que alcanzan decenas o cientos de gigabytes, minimiza RcloneView a la bandeja del sistema y deja que la transferencia se ejecute en segundo plano mientras los trabajos continúan sin interrupciones.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring showing Proton Drive to Backblaze B2 migration progress" class="img-large img-center" />

Después de que la migración se complete, revisa la pestaña Job History para confirmar el estado de la transferencia, el total de archivos movidos y cualquier error. Si el trabajo reporta errores en archivos específicos, la vista de registro proporciona mensajes de error exactos para identificar si el problema es un problema de permisos, un tiempo de espera de red o un conflicto de codificación de nombres de archivo.

## Programar copias de seguridad continuas

Para los usuarios que desean que Backblaze B2 sea un destino de copia de seguridad continua para sus datos de Proton Drive, RcloneView PLUS admite programación en estilo crontab. Después de completar la migración inicial, edita el trabajo y navega al Paso 4 (Scheduling) para configurar una sincronización recurrente — por ejemplo, cada noche a las 2 AM. El trabajo programado se ejecutará automáticamente, copiando solo los archivos nuevos o modificados desde la última ejecución, manteniendo tu archivo en B2 actualizado sin intervención manual.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automatic Proton Drive to Backblaze B2 sync in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agrega tu remoto de Proton Drive mediante Remote tab > New Remote, introduciendo tu correo electrónico y contraseña.
3. Agrega tu remoto de Backblaze B2 usando tu Application Key ID y Application Key de la consola de B2.
4. Crea un trabajo de sincronización o copia en Job Manager con Proton Drive como origen y tu bucket de B2 como destino.
5. Ejecuta un Dry Run para previsualizar la migración, luego ejecuta la transferencia completa y supervisa el progreso en la pestaña Transferring.

Con RcloneView gestionando la conexión entre Proton Drive y Backblaze B2, puedes construir una estrategia de copia de seguridad entre nubes confiable que combina la privacidad de Proton con la capacidad de almacenamiento asequible de B2.

---

**Guías relacionadas:**

- [Migra Proton Drive a Google Drive — Transferencia de archivos con RcloneView](https://rcloneview.com/support/blog/migrate-proton-drive-to-google-drive-rcloneview)
- [Migra Dropbox a Proton Drive — Transferencia en la nube con RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-proton-drive-rcloneview)
- [Migra Google Drive a Backblaze B2 — Transferencia en la nube con RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
