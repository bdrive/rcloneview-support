---
slug: migrate-icloud-drive-to-backblaze-b2-rcloneview
title: "Migrar iCloud Drive a Backblaze B2 — Transfiere archivos con RcloneView"
authors:
  - casey
description: "Transfiere archivos de iCloud Drive a Backblaze B2 usando RcloneView. Guía paso a paso para hacer una copia de seguridad de tu almacenamiento en la nube de Apple en almacenamiento de objetos asequible e independiente del proveedor."
keywords:
  - iCloud Drive to Backblaze B2
  - migrate iCloud Drive Backblaze B2
  - iCloud backup Backblaze B2
  - transfer iCloud files to B2
  - iCloud Drive cloud migration RcloneView
  - RcloneView iCloud Backblaze B2
  - cloud to cloud transfer iCloud
  - Backblaze B2 iCloud backup tool
tags:
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar iCloud Drive a Backblaze B2 — Transfiere archivos con RcloneView

> iCloud Drive de Apple es conveniente para la sincronización entre dispositivos, pero copiar tus archivos a Backblaze B2 crea una copia de seguridad rentable e independiente del proveedor que RcloneView convierte en un proceso completamente guiado por GUI.

Millones de usuarios almacenan fotos, documentos y archivos de proyectos en iCloud Drive a través del ecosistema de Apple. Aunque iCloud funciona sin problemas entre dispositivos Apple, las organizaciones y los usuarios avanzados suelen necesitar una copia secundaria en almacenamiento de objetos duradero — por diversidad de proveedores, ventanas de retención más largas o una estrategia de copia de seguridad independiente de la plataforma. Backblaze B2 es un servicio de almacenamiento de objetos compatible con S3 que se integra de forma natural con RcloneView, permitiéndote transferir contenido desde iCloud Drive sin descargas manuales, scripts ni clientes de sincronización de terceros. Conecta Backblaze B2 con acceso completo de lectura/escritura en la licencia GRATUITA.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurar iCloud Drive en RcloneView

iCloud Drive es compatible con RcloneView a través del backend de iCloud de rclone, que requiere rclone v1.69 o posterior — el binario de rclone integrado que se incluye con RcloneView ya cumple este requisito, por lo que no es necesaria una instalación adicional. Para conectarte, abre la pestaña **Remote**, haz clic en **New Remote** y selecciona iCloud Drive de la lista de proveedores. Te autenticarás con las credenciales de tu Apple ID y, si la autenticación de dos factores está habilitada en tu cuenta, introducirás el código de verificación cuando se te solicite. Una vez guardado, tus carpetas de iCloud aparecerán en el panel del explorador tal como lo hacen en un Mac.

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive as a new remote in RcloneView" class="img-large img-center" />

Explora la estructura de tu iCloud Drive — Escritorio, Documentos o cualquier carpeta personalizada — para confirmar el alcance del contenido antes de crear un trabajo de transferencia.

## Conectar Backblaze B2 como destino

Backblaze B2 se conecta mediante la introducción de credenciales. En **New Remote**, elige Backblaze B2 e introduce tu **Application Key ID** y **Application Key** — ambos generados en tu cuenta de Backblaze en la sección App Keys. Una vez guardado, podrás navegar por tus buckets de B2 en el segundo panel del explorador de RcloneView. Con iCloud Drive y Backblaze B2 abiertos uno al lado del otro, tendrás una visión clara del origen y el destino antes de mover un solo archivo.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="iCloud Drive and Backblaze B2 open side by side in RcloneView" class="img-large img-center" />

## Ejecutar la transferencia de migración

Abre el asistente de **Sync** desde la pestaña Home. Establece tu carpeta de iCloud Drive como origen y tu bucket de Backblaze B2 (o un prefijo dentro de él) como destino. En el paso Advanced Settings, activa la **verificación de checksum** para comparar los hashes de los archivos en lugar de basarse únicamente en las marcas de tiempo — esto es especialmente valioso para una migración única en la que la integridad de los datos es lo más importante. También puedes añadir un filtro de **antigüedad máxima de archivo** para migrar solo contenido reciente si quieres excluir archivos más antiguos y de acceso poco frecuente en la primera pasada.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Live transfer monitoring during an iCloud to Backblaze B2 migration in RcloneView" class="img-large img-center" />

Ejecuta siempre un **Dry Run** antes de la transferencia real. RcloneView muestra exactamente qué archivos copiaría u omitiría — una comprobación de seguridad práctica al migrar una biblioteca grande de iCloud Drive, donde las sobrescrituras accidentales o las carpetas omitidas pueden ser costosas de deshacer.

## Verificar la migración con Folder Compare

Después de que se complete la transferencia, usa la función **Folder Compare** de RcloneView para confirmar que ambos lados coinciden. Abre la vista Compare, establece iCloud Drive a la izquierda y tu bucket de B2 a la derecha, y deja que RcloneView muestre cualquier archivo que solo esté a la izquierda, solo a la derecha, o con tamaños que no coincidan. Una comparación limpia — que muestre solo archivos idénticos — confirma que tu migración se completó sin lagunas.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare verifying iCloud Drive files match Backblaze B2 after migration" class="img-large img-center" />

Para una protección continua, la **licencia PLUS** te permite programar un trabajo de sincronización recurrente — semanal o diario — para capturar cualquier contenido nuevo añadido a iCloud Drive y mantener tu copia en B2 actualizada automáticamente.

## Cómo empezar

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade iCloud Drive como un nuevo remoto usando las credenciales de tu Apple ID.
3. Añade Backblaze B2 como un remoto con tu Application Key ID y Application Key.
4. Crea un trabajo de sincronización: iCloud Drive como origen, bucket de B2 como destino, y ejecuta primero un **Dry Run**.
5. Usa **Folder Compare** para verificar la migración y luego programa copias de seguridad recurrentes según sea necesario.

Migrar de iCloud Drive a Backblaze B2 con RcloneView le da a tus archivos de Apple un hogar duradero e independiente de la plataforma en almacenamiento de objetos — protegido, verificable y accesible desde cualquier dispositivo.

---

**Guías relacionadas:**

- [Gestionar iCloud Drive con RcloneView](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [Gestionar Backblaze B2 con RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Migrar iCloud Drive a Google Drive con RcloneView](https://rcloneview.com/support/blog/migrate-icloud-drive-to-google-drive-rcloneview)

<CloudSupportGrid />
