---
slug: manage-rackcorp-cloud-sync-backup-rcloneview
title: "Gestiona el almacenamiento de objetos de RackCorp — Sincroniza y respalda archivos con RcloneView"
authors:
  - morgan
description: "Conecta el almacenamiento de objetos de RackCorp a RcloneView para sincronización multiplataforma, copias de seguridad y montaje junto a más de 90 proveedores de nube."
keywords:
  - almacenamiento RackCorp
  - copia de seguridad en la nube RackCorp
  - RackCorp RcloneView
  - GUI de almacenamiento de objetos compatible con S3
  - sincronizar almacenamiento RackCorp
  - respaldar RackCorp
  - montar almacenamiento de objetos como unidad local
  - gestor de archivos multi-nube
  - herramienta de sincronización de almacenamiento en la nube
  - software de respaldo de almacenamiento de objetos
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona el almacenamiento de objetos de RackCorp — Sincroniza y respalda archivos con RcloneView

> Lleva el almacenamiento de objetos compatible con S3 de RackCorp a la misma ventana que tus otras nubes, unidades locales y recursos compartidos NAS.

Los equipos que ya gestionan infraestructura en RackCorp suelen terminar usando además un cliente S3 independiente solo para mover archivos dentro y fuera de un bucket. RcloneView elimina ese paso adicional al tratar RackCorp como cualquier otro remoto — explóralo, sincronízalo, móntalo y respáldalo junto a Google Drive, S3 o un disco local en el mismo explorador. A diferencia de las herramientas que solo montan, RcloneView también sincroniza y compara carpetas — con la licencia FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Añadir RackCorp como remoto

Se accede a RackCorp mediante el protocolo S3 de rclone, así que la configuración sigue el mismo patrón de introducción de credenciales que otros servicios compatibles con S3: un Access Key ID, un Secret Access Key y el endpoint regional correcto. Abre la pestaña Remote > New Remote, elige la opción compatible con S3 y pega las credenciales de tu cuenta de RackCorp.

Una vez guardado, RackCorp aparece como su propia pestaña en el panel del Explorador, justo junto a cualquier otro remoto que hayas configurado. No hace falta memorizar rutas de buckets — el árbol de carpetas y la barra de ruta te permiten navegar visualmente, y clic derecho > Copy Full Path te da la cadena `remote:bucket/path` si la necesitas en la terminal de rclone integrada.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir un nuevo remoto compatible con S3 en RcloneView" class="img-large img-center" />

## Sincronizar y respaldar en RackCorp

Con el remoto conectado, usa el asistente de Sync para crear un trabajo de respaldo repetible. El Paso 1 define tu origen local o en la nube y la carpeta de destino en RackCorp; el Paso 2 permite ajustar las transferencias de archivos simultáneas y el número de transferencias multihilo para conjuntos de datos grandes; el Paso 3 aplica filtros por tipo de archivo, tamaño o antigüedad para no enviar archivos temporales ni cachés al bucket.

Ejecuta primero un Dry Run para previsualizar exactamente qué archivos se copiarán o eliminarán antes de confirmar la transferencia — esto detecta errores de mapeo de carpetas antes de que afecten a los datos de producción. Para tareas recurrentes, guarda el trabajo en Job Manager para que aparezca después en Job History con registros completos de transferencia.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configurar un trabajo de respaldo programado hacia el almacenamiento RackCorp" class="img-large img-center" />

## Montar RackCorp como unidad local

Si prefieres trabajar con los objetos de RackCorp como archivos normales, monta el bucket como unidad virtual. Selecciona la carpeta remota en el Explorador, haz clic en el icono de montaje en la barra de herramientas del panel y elige un modo de caché VFS — el modo Writes es una opción predeterminada sólida, ya que almacena los cambios localmente en búfer antes de subirlos.

Los buckets montados aparecen en Mount Manager, donde puedes desmontarlos, volver a abrirlos en tu explorador de archivos nativo, o alternar el montaje directamente desde la bandeja del sistema sin traer la ventana principal al frente.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Montar un bucket de RackCorp como unidad local desde el Remote Explorer" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Genera un Access Key ID y un Secret Access Key desde tu cuenta de RackCorp.
3. Añade RackCorp como nuevo remoto compatible con S3 usando la pestaña Remote > New Remote.
4. Crea un trabajo de sincronización o monta el bucket directamente, según tu flujo de trabajo.

Una vez que RackCorp está integrado en RcloneView, deja de ser una herramienta aparte a la que hay que cambiar de contexto y se convierte simplemente en otro destino más dentro de tu rutina habitual de copias de seguridad.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento de objetos de Linode — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-linode-object-storage-cloud-sync-backup-rcloneview)
- [Gestiona el almacenamiento de objetos de Hetzner — Sincroniza y respalda con RcloneView](https://rcloneview.com/support/blog/manage-hetzner-object-storage-cloud-sync-rcloneview)
- [Migra de Amazon S3 a Cloudflare R2 con RcloneView](https://rcloneview.com/support/blog/migrate-amazon-s3-to-cloudflare-r2-rcloneview)

<CloudSupportGrid />
