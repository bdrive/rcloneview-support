---
slug: migrate-box-to-wasabi-rcloneview
title: "Migrar de Box a Wasabi — Transferir archivos con RcloneView"
authors:
  - casey
description: "Mueve archivos de Box al almacenamiento en la nube activo de Wasabi con RcloneView, usando comparación de carpetas, trabajos de sincronización y ejecución de prueba para migrar de forma segura."
keywords:
  - migrar Box a Wasabi
  - transferencia de Box a Wasabi
  - migración de nube de Box
  - almacenamiento activo de Wasabi
  - RcloneView Box Wasabi
  - herramienta de transferencia nube a nube
  - copia de seguridad de almacenamiento de Box
  - software de sincronización de Wasabi
  - mover archivos entre nubes
  - migración de Box a S3
tags:
  - box
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar de Box a Wasabi — Transferir archivos con RcloneView

> Mueve los archivos y carpetas de una cuenta de Box directamente al almacenamiento activo compatible con S3 de Wasabi, sin tener que pasar todo primero por un disco local.

Los equipos que adoptaron Box para la colaboración en documentos a veces lo superan como opción para el almacenamiento a largo plazo, y el almacenamiento de objetos compatible con S3 de Wasabi se convierte en el nuevo destino para archivos, bibliotecas multimedia o conjuntos de copias de seguridad. RcloneView se conecta a ambos servicios desde la misma ventana, de modo que la migración es una transferencia directa de nube a nube en lugar de un lento ciclo de descarga y luego carga a través de una máquina local.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Box y Wasabi como remotos

Box se agrega mediante OAuth: al hacer clic en New Remote en la pestaña Remote se abre una ventana del navegador para iniciar sesión en la cuenta, y RcloneView se conecta automáticamente una vez que se completa la autenticación. Las cuentas empresariales que necesitan la vista a nivel de toda la organización pueden configurar `box_sub_type = enterprise` durante la configuración. Wasabi se agrega mediante el tipo de remoto compatible con S3, usando una Access Key, una Secret Key y el endpoint de Wasabi correspondiente a la región de destino.

Con ambos remotos configurados, aparecen como pestañas separadas en el Explorer, y puedes abrir Box en un panel y Wasabi en el otro para ver ambos árboles de archivos uno al lado del otro antes de mover nada.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and Wasabi remotes in RcloneView" class="img-large img-center" />

## Comparar antes de transferir

Folder Compare coloca la carpeta de origen de Box y la carpeta de destino de Wasabi una junto a la otra e indica qué falta en cada lado, qué ya es idéntico y qué difiere en tamaño. Para una primera migración, esta es la forma más rápida de confirmar que toda la biblioteca de Box está contabilizada antes de ejecutar una sincronización masiva, y también sirve como paso de verificación una vez finalizada la transferencia: cualquier archivo que siga marcado como "solo a la izquierda" después de copiar necesita una segunda revisión.

Al copiar desde Folder Compare solo se tocan los archivos que aún no existen en el destino o que difieren en tamaño, por lo que una migración parcialmente completada puede reanudarse sin volver a copiar los archivos que ya llegaron a Wasabi.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Box and Wasabi folders before migration" class="img-large img-center" />

## Ejecutar la migración con Sync

Para la transferencia masiva, los cuatro pasos del asistente de Sync se encargan de la selección de origen/destino, la concurrencia de la transferencia y el filtrado, útil para excluir tipos de archivo que no quieres trasladar a Wasabi, como los archivos temporales de colaboración de Box. Dry Run muestra una vista previa exacta de qué archivos se copiarán antes de que se mueva nada, algo importante cuando una biblioteca de Box tiene años de contenido acumulado y los errores son costosos de deshacer.

RcloneView permite montar y sincronizar más de 90 proveedores desde una sola ventana en Windows, macOS y Linux, de modo que el mismo flujo de trabajo utilizado aquí para Box y Wasabi se aplica a cualquier otra combinación de remotos sin necesidad de aprender una herramienta nueva. Una vez guardado el trabajo de sincronización en Job Manager, su historial —estado, tamaño transferido y duración— queda disponible para consultarlo más adelante.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Running a sync job from Box to Wasabi in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agrega Box mediante inicio de sesión OAuth y Wasabi mediante credenciales compatibles con S3 en Remote Manager.
3. Ejecuta Folder Compare entre el origen de Box y el destino de Wasabi para confirmar el alcance antes de transferir.
4. Crea un trabajo de Sync con Dry Run habilitado primero, luego ejecútalo de verdad y sigue el progreso en la pestaña Transferring.

Con ambos remotos visibles en el mismo explorador, mover una biblioteca de Box a Wasabi se convierte en un único flujo de trabajo guiado en lugar de un ejercicio con múltiples herramientas.

---

**Guías relacionadas:**

- [Administrar el almacenamiento de Box — Sincronizar y hacer copias de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Administrar el almacenamiento de Wasabi — Sincronizar y hacer copias de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Migrar de Box a Google Drive — Transferir archivos con RcloneView](https://rcloneview.com/support/blog/migrate-box-to-google-drive-rcloneview)

<CloudSupportGrid />
