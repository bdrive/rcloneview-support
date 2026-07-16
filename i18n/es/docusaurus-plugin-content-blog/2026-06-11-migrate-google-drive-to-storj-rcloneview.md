---
slug: migrate-google-drive-to-storj-rcloneview
title: "Migra Google Drive a Storj — Transfiere archivos con RcloneView"
authors:
  - jay
description: "Aprende a migrar archivos de Google Drive al almacenamiento descentralizado de Storj usando RcloneView — una guía paso a paso para transferencias de nube a nube."
keywords:
  - migrar Google Drive a Storj
  - migración de Google Drive a Storj
  - almacenamiento en la nube descentralizado Storj
  - migración a la nube con RcloneView
  - mover archivos de Google Drive a Storj
  - transferencia de nube a nube RcloneView
  - GUI compatible con S3 para Storj
  - herramienta de migración de Google Drive
  - copia de seguridad en la nube descentralizada RcloneView
tags:
  - google-drive
  - storj
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migra Google Drive a Storj — Transfiere archivos con RcloneView

> Mueve todo tu Google Drive al almacenamiento descentralizado y cifrado de extremo a extremo de Storj sin escribir un solo comando.

Los equipos que almacenan archivos de proyectos sensibles en Google Drive a menudo llegan a un punto en el que desean mayor soberanía de datos, menores costos de salida de datos o acceso compatible con S3 para su conjunto de herramientas. Storj distribuye fragmentos de archivos entre nodos independientes en todo el mundo, ofreciendo cifrado de extremo a extremo y redundancia geográfica por diseño. RcloneView simplifica esta migración: conecta ambos remotos mediante una configuración con autenticación en el navegador y luego ejecuta un trabajo de copia que transfiere archivos de Google Drive a Storj a través de tu equipo local.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta Google Drive y Storj como remotos

Antes de transferir cualquier cosa, ambas cuentas en la nube deben registrarse en RcloneView como remotos. Google Drive utiliza autenticación OAuth en el navegador: abre la pestaña Remoto, haz clic en **Nuevo remoto**, selecciona Google Drive, y RcloneView abrirá una ventana del navegador para que autorices la conexión. No es necesario gestionar claves de API ni credenciales manualmente.

Storj utiliza acceso compatible con S3. En el asistente de Nuevo remoto de RcloneView, selecciona el tipo de proveedor **S3** y elige Storj como proveedor S3. Introduce tu Access Key ID de Storj, tu Secret Access Key y el endpoint de la puerta de enlace S3 de Storj. Una vez guardado, el remoto aparecerá en el panel del explorador, ofreciéndote una vista de navegador de archivos familiar de tus buckets de Storj.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Storj as remotes in RcloneView" class="img-large img-center" />

Con ambos remotos registrados, puedes abrirlos uno al lado del otro en el explorador de doble panel de RcloneView. Arrastra una carpeta desde el panel izquierdo (Google Drive) hasta el panel derecho (Storj) para una copia rápida puntual, o configura un trabajo gestionado para migraciones más grandes.

## Configura el trabajo de migración

Para migrar un Google Drive completo —una agencia de diseño con 300 GB de recursos o un equipo de investigación con años de documentos compartidos— usar un Trabajo es el enfoque correcto. Haz clic en **Administrador de trabajos** en la pestaña Inicio y luego en **Agregar trabajo**. Establece el origen en tu remoto y carpeta de Google Drive, y el destino en tu bucket de Storj. Elige **Copiar** como tipo de trabajo para transferir todos los archivos de origen sin eliminar los originales de Google Drive.

En el Paso 2 (Configuración avanzada), establece el número de transferencias de archivos concurrentes según tu conexión. El número predeterminado de 4 transferencias multihilo funciona bien para la mayoría de las conexiones a internet. Activa la verificación de **checksum** para garantizar la integridad de los archivos: RcloneView compara los checksums después de cada transferencia, detectando cualquier corrupción introducida durante el tránsito.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a Google Drive to Storj copy job in RcloneView" class="img-large img-center" />

El Paso 3 te permite agregar reglas de filtrado si solo deseas migrar tipos de archivo específicos; por ejemplo, excluir archivos de trabajo `.tmp` o limitar la transferencia a archivos más recientes que una cierta antigüedad. Esto resulta especialmente útil al migrar un espacio de trabajo activo donde algunos archivos temporales no deberían seguirte al nuevo proveedor de almacenamiento.

## Supervisa y verifica la transferencia

Una vez que hagas clic en **Ejecutar**, la pestaña Transfiriendo en la parte inferior de RcloneView mostrará el progreso en vivo: velocidad de transferencia, cantidad de archivos y tamaño total movido. Para migraciones grandes, RcloneView continúa el trabajo en segundo plano incluso si navegas a otros remotos; y si la transferencia se interrumpe, configurar el número de reintentos en el Paso 2 garantiza que continúe donde se quedó.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the Google Drive to Storj migration job in RcloneView" class="img-large img-center" />

Después de que el trabajo se complete, usa la función **Comparar carpetas** de RcloneView (pestaña Inicio > Comparar) para verificar que ambos lados coincidan. Apunta el panel izquierdo a tu origen de Google Drive y el panel derecho a tu destino de Storj. Comparar carpetas mostrará cualquier archivo que exista solo en un lado o que tenga tamaños diferentes, brindándote un registro de auditoría claro antes de comenzar a dar de baja el espacio de trabajo de Google Drive.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Google Drive to Storj migration" class="img-large img-center" />

## Cómo empezar

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agrega tu remoto de Google Drive mediante **pestaña Remoto > Nuevo remoto** y completa el inicio de sesión OAuth en el navegador.
3. Agrega tu remoto de Storj usando el tipo de proveedor S3 con tu Access Key, Secret Key y endpoint de la puerta de enlace de Storj.
4. Abre **Administrador de trabajos**, crea un trabajo de Copia desde tu carpeta de Google Drive hasta tu bucket de Storj, activa el checksum en el Paso 2 y haz clic en Ejecutar.

La arquitectura de Storj brinda a tus archivos distribución geográfica y cifrado de extremo a extremo de forma predeterminada; RcloneView convierte llegar a ese destino en cuestión de minutos, no en horas de scripting.

---

**Guías relacionadas:**

- [Migra Dropbox a Storj con RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-storj-rcloneview)
- [Migra OneDrive a Storj con RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-storj-rcloneview)
- [Gestiona el almacenamiento en la nube de Storj — Sincronización y copia de seguridad con RcloneView](https://rcloneview.com/support/blog/manage-storj-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
