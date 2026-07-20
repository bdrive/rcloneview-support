---
slug: migrate-dropbox-to-proton-drive-rcloneview
title: "Migra de Dropbox a Proton Drive — Transfiere archivos con RcloneView"
authors:
  - jay
description: "Mueve tus archivos de Dropbox a Proton Drive para obtener almacenamiento cifrado de extremo a extremo. Aprende a migrar de nube a nube con RcloneView en unos sencillos pasos."
keywords:
  - migrar Dropbox a Proton Drive
  - transferencia de Dropbox a Proton Drive
  - migración de nube a nube con RcloneView
  - copia de seguridad de Proton Drive
  - privacidad en la migración de Dropbox
  - mover archivos de Dropbox a Proton Drive
  - migración de almacenamiento en la nube cifrado
  - guía de transferencia en la nube con RcloneView
  - cambiar de Dropbox a Proton Drive
  - sincronización de Proton Drive con RcloneView
tags:
  - RcloneView
  - dropbox
  - proton-drive
  - migration
  - cloud-to-cloud
  - privacy
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migra de Dropbox a Proton Drive — Transfiere archivos con RcloneView

> RcloneView te permite transferir toda tu biblioteca de Dropbox a Proton Drive directamente de nube a nube, sin descargas locales, sin volver a subir archivos manualmente y sin necesidad de usar la línea de comandos.

Para muchos equipos, la decisión de dejar Dropbox se reduce a la privacidad de los datos. Dropbox almacena los archivos en texto plano en sus servidores, lo que significa que los empleados de Dropbox y las autoridades legales pueden acceder a tus datos con una orden judicial. Proton Drive, creado por el equipo detrás de ProtonMail, cifra los archivos del lado del cliente antes de que lleguen a los servidores de Proton; ni siquiera Proton puede leer tu contenido. RcloneView simplifica esta migración conectándose a ambos servicios simultáneamente y moviendo los datos directamente de nube a nube, preservando la estructura de carpetas y la integridad de los archivos en todo momento.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Agregar Dropbox y Proton Drive como remotos

Antes de transferir archivos, agrega ambas cuentas en la nube a RcloneView. Ve a **Remote tab > New Remote** y selecciona **Dropbox**. RcloneView abre una ventana del navegador para la autenticación OAuth; inicia sesión en Dropbox y concede el acceso. El remoto se guarda automáticamente una vez que lo autorizas.

Repite el proceso para Proton Drive: selecciona **Proton Drive** en la lista de remotos, ingresa tu dirección de correo electrónico y contraseña de Proton. Si tienes habilitada la autenticación de dos factores, ingresa el código cuando se te solicite. El binario de rclone incorporado en RcloneView admite Proton Drive de forma nativa (requiere rclone v1.69+, que viene incluido). Una vez agregados ambos remotos, aparecerán como pestañas en el explorador de archivos de doble panel.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Dropbox and Proton Drive as remotes in RcloneView" class="img-large img-center" />

## Planificar la migración con Comparar carpetas

Antes de transferir nada, usa la herramienta **Folder Compare** de RcloneView para evaluar qué hay en Dropbox y qué ya está en Proton Drive. Haz clic en el botón **Compare** en la pestaña Home, establece Dropbox como fuente izquierda y Proton Drive como derecha. La vista de comparación resalta los archivos que existen solo en Dropbox (solo a la izquierda), los archivos que coinciden en ambos lados y las diferencias de tamaño, brindándote una imagen clara de lo que realmente necesita moverse.

Este paso es especialmente útil si ya has copiado manualmente algunos archivos a Proton Drive y quieres evitar duplicar el trabajo. Filtra por "solo a la izquierda" para ver únicamente lo que falta en Proton Drive y luego copia esos elementos específicos.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer setup from Dropbox to Proton Drive in RcloneView" class="img-large img-center" />

## Ejecutar la transferencia de nube a nube

Para una migración completa, usa el asistente **Sync**. Haz clic en **Sync** en la pestaña Home, establece Dropbox como origen y Proton Drive como destino, y asigna un nombre al trabajo (por ejemplo, `dropbox-proton-migration`). Elige **Copy** como tipo de trabajo para conservar los originales en Dropbox mientras se crea la copia en Proton Drive; esto mantiene tu Dropbox intacto hasta que hayas verificado la migración.

En el Paso 2 del asistente, habilita la **verificación de checksum** para confirmar que cada archivo llega sin corromperse. Esto es fundamental para documentos sensibles donde debe garantizarse la integridad de los datos. Ejecuta primero una **Dry Run** para previsualizar qué archivos se transferirán antes de confirmar, y luego ejecuta el trabajo real.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using folder compare to verify Dropbox files before migration to Proton Drive" class="img-large img-center" />

## Supervisar el progreso y verificar la finalización

Mientras se ejecuta la transferencia, la pestaña **Transferring** en la parte inferior de RcloneView muestra la velocidad de transferencia en tiempo real, el recuento de archivos y el porcentaje completado. Las bibliotecas grandes de Dropbox —por ejemplo, los 50,000 documentos de clientes de un bufete de abogados— pueden tardar varias horas; el trabajo continúa en segundo plano mientras RcloneView se minimiza en la bandeja del sistema.

Una vez que el trabajo finaliza, vuelve a ejecutar Folder Compare para confirmar que no queden archivos solo a la izquierda. Cualquier elemento que aún aparezca marcado como "solo a la izquierda" en Dropbox indica una transferencia fallida que se puede volver a ejecutar de forma selectiva. El **Job History** de RcloneView registra la ejecución completa con hora de inicio, bytes totales, velocidad y estado: un registro permanente adecuado para auditorías de cumplimiento o de TI.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the Dropbox to Proton Drive migration job in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agrega Dropbox mediante OAuth y Proton Drive mediante correo electrónico/contraseña en **Remote tab > New Remote**.
3. Usa **Folder Compare** para auditar las diferencias entre las dos cuentas antes de transferir.
4. Crea un trabajo de sincronización de tipo Copy con verificación de checksum y ejecútalo para completar la migración.

Con ambos remotos conectados en RcloneView, mover tus datos de Dropbox a Proton Drive se convierte en una operación visual y manejable: sin scripts, sin descargas intermedias y con un registro de auditoría claro en todo momento.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento en la nube de Dropbox con RcloneView](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Gestiona la sincronización en la nube de Proton Drive con RcloneView](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [Migra de Dropbox a Wasabi con RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-wasabi-rcloneview)

<CloudSupportGrid />
