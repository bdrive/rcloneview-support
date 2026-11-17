---
slug: migrate-citrix-sharefile-to-box-rcloneview
title: "Migrar de Citrix ShareFile a Box — Transfiera archivos con RcloneView"
authors:
  - morgan
description: "Migre de Citrix ShareFile a Box con RcloneView. Conecte ambos remotos, previsualice con Dry Run, copie carpetas de nube a nube y verifique con Folder Compare."
keywords:
  - migrar Citrix ShareFile a Box
  - migración de ShareFile a Box
  - transferencia Citrix ShareFile Box
  - herramienta de migración de nube a nube
  - RcloneView ShareFile
  - migración Box for Business
  - GUI de migración de archivos empresarial
  - mover carpetas de ShareFile a Box
  - rclone ShareFile Box
tags:
  - RcloneView
  - sharefile
  - box
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar de Citrix ShareFile a Box — Transfiera archivos con RcloneView

> Mueva un árbol de carpetas de ShareFile a Box de nube a nube, previsualice cada cambio primero y verifique el resultado en paralelo, todo desde una sola GUI.

Cuando una organización se consolida en Box, el archivo de ShareFile con contratos, entregables de clientes y carpetas de proyectos tiene que trasladarse con ella. Descargarlo todo a un portátil y volver a subirlo es lento y propenso a errores. RcloneView conecta ambos servicios como remotos y ejecuta la transferencia a través de rclone, de modo que los archivos se mueven directamente entre las dos nubes mientras sigue el progreso en una sola ventana.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecte Citrix ShareFile y Box

Abra **Remote tab > New Remote** y elija Citrix ShareFile. Además de iniciar sesión, ShareFile necesita un **Root Folder ID**, que indica a rclone qué carpeta tratar como la raíz del remoto. Si planea migrar departamento por departamento, un remoto separado por carpeta raíz mantiene cada trabajo pequeño y fácil de auditar.

A continuación, añada Box. Box usa OAuth: RcloneView abre su navegador, inicia sesión y la conexión se guarda sin ninguna clave de API que copiar. Si su organización usa Box for Business, establezca `box_sub_type = enterprise` durante la configuración para que el remoto apunte a la cuenta empresarial.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Citrix ShareFile and Box remotes in RcloneView" class="img-large img-center" />

Abra ShareFile en el panel izquierdo y Box en el derecho. Explorar ambos en paralelo es una comprobación rápida de que ve las carpetas esperadas antes de mover nada.

## Planifique la transferencia y previsualícela

Para una migración puntual, un trabajo **Copy** es la opción prudente: añade archivos a Box sin eliminar nada de lo que ya existe allí. Créelo desde **Home tab > Sync** o desde Job Manager, elija la carpeta de ShareFile como origen y una carpeta de Box como destino, y asigne al trabajo un nombre como `sharefile-legal-to-box`.

En el paso Advanced Settings, deje desactivada la suma de verificación para esta combinación: la comparación por suma de verificación necesita un tipo de hash que compartan ambos lados, y ShareFile (MD5) y Box (SHA-1) usan tipos distintos, por lo que rclone compara por tamaño y fecha de modificación. Mantenga moderado el número de equality checkers si el listado se nota lento. En el paso Filtering puede excluir instaladores grandes (`.iso`) o carpetas heredadas que haya decidido no conservar.

Antes de ejecutar, use **Dry Run**. Muestra los archivos que se copiarían sin transferir nada, de modo que un despacho de abogados que traslada 40.000 documentos de clientes puede confirmar primero el alcance.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Citrix ShareFile to Box in RcloneView" class="img-large img-center" />

## Ejecute, supervise y verifique

Inicie el trabajo y siga el progreso, la velocidad y el número de archivos en la pestaña **Transferring**. Las migraciones grandes pueden dividirse en varios trabajos, uno por carpeta de nivel superior, para que un fallo no bloquee todo lo demás. Cada ejecución queda registrada en **Job History** con estado, tamaño total y número de archivos, lo que le proporciona un registro de auditoría de la migración.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing completed ShareFile to Box migration runs" class="img-large img-center" />

Cuando terminen los trabajos, abra **Folder Compare** sobre el origen y el destino. Filtre por archivos left-only para detectar lo que no haya llegado y use Copy right para completar los huecos.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare verifying ShareFile and Box contents" class="img-large img-center" />

## Primeros pasos

RcloneView funciona en Windows, macOS y Linux, y puede montar y sincronizar más de 90 proveedores desde una sola ventana.

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añada Citrix ShareFile (con su Root Folder ID) y Box como remotos.
3. Cree un trabajo Copy de ShareFile a Box y ejecute primero un Dry Run.
4. Ejecute el trabajo y confirme el resultado con Folder Compare y Job History.

Una migración planificada y verificada permite a su equipo pasar a Box sin preguntarse si quedó alguna carpeta atrás.

---

**Guías relacionadas:**

- [Gestione el almacenamiento de Citrix ShareFile — Sincronice y haga copias de seguridad con RcloneView](https://rcloneview.com/support/blog/manage-citrix-sharefile-cloud-sync-backup-rcloneview)
- [Gestione el almacenamiento de Box — Sincronice y haga copias de seguridad con RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Migre de Citrix ShareFile a Google Drive con RcloneView](https://rcloneview.com/support/blog/migrate-citrix-sharefile-to-google-drive-rcloneview)

<CloudSupportGrid />
