---
slug: sync-yandex-disk-to-onedrive-rcloneview
title: "Sincroniza Yandex Disk con OneDrive — Copia de seguridad en la nube con RcloneView"
authors:
  - steve
description: "Sincroniza Yandex Disk con OneDrive con RcloneView, reflejando archivos entre ambos proveedores según un horario desde una sola interfaz gráfica multiplataforma."
keywords:
  - sincronizar yandex disk con onedrive
  - copia de seguridad de yandex disk a onedrive
  - de yandex disk a microsoft onedrive
  - rcloneview yandex disk
  - sincronización entre nubes
  - migración de yandex disk
  - onedrive como destino de copia de seguridad
  - sincronización de archivos entre nubes
tags:
  - RcloneView
  - yandex-disk
  - onedrive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincroniza Yandex Disk con OneDrive — Copia de seguridad en la nube con RcloneView

> Mantener una copia de trabajo en OneDrive mientras Yandex Disk sigue siendo la fuente no requiere exportar ni volver a subir nada — RcloneView conecta ambos como remotos y sincroniza las carpetas directamente, de nube a nube.

Yandex Disk es una opción de almacenamiento principal habitual para usuarios y equipos que trabajan en Rusia y mercados vecinos, pero los colaboradores o las herramientas posteriores suelen esperar los archivos en OneDrive — para integración con Office, entrega a SharePoint o simplemente porque ahí es donde vive el resto de la organización. Mover archivos entre ambos normalmente implica descargar todo localmente primero y volver a subirlo, lo que duplica el tiempo de transferencia y consume espacio en disco local innecesariamente. RcloneView se conecta tanto a Yandex Disk como a OneDrive como remotos en la misma ventana y transfiere directamente entre ellos, evitando por completo el paso intermedio local.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar ambos remotos

Yandex Disk se conecta a RcloneView mediante inicio de sesión OAuth en el navegador — sin necesidad de una clave API independiente ni de introducir tokens manualmente, el mismo flujo que se usa para Google Drive o Dropbox. OneDrive se conecta de la misma manera. Con ambos autenticados, abre dos paneles del Explorador uno junto al otro, uno apuntando a la raíz de Yandex Disk y el otro a la carpeta de destino en OneDrive, para poder confirmar la estructura de carpetas en cada lado antes de configurar un trabajo de transferencia.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Yandex Disk and OneDrive as remotes in RcloneView" class="img-large img-center" />

RcloneView también sincroniza y compara carpetas en la licencia GRATUITA — no se requiere un nivel de pago independiente solo para mover archivos entre dos proveedores de nube, lo cual es importante para una migración puntual en la que no se quiere comprometer una suscripción para una sola transferencia.

## Configurar el trabajo de sincronización

El Paso 1 del asistente de sincronización es donde se define la transferencia: selecciona la carpeta de Yandex Disk como origen, la carpeta de OneDrive como destino, y elige "Modificar solo el destino" para obtener un reflejo unidireccional que mantiene OneDrive igual a Yandex Disk sin tocar el original. Antes de ejecutarlo de verdad, usa Ejecución de prueba (Dry Run) para previsualizar exactamente qué archivos se copiarán — esto detecta problemas de nomenclatura o carpetas inesperadamente grandes antes de que se mueva realmente algún dato, algo que vale la pena hacer dado lo diferente que cada proveedor puede reportar los metadatos de los archivos.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job from Yandex Disk to OneDrive in RcloneView" class="img-large img-center" />

Los ajustes de filtrado del Paso 3 permiten excluir tipos de archivo que no necesitan hacer el viaje — los archivos multimedia grandes o las carpetas ya sincronizadas se pueden omitir usando el tamaño máximo de archivo o reglas personalizadas de exclusión de rutas, manteniendo la copia en OneDrive centrada en lo que realmente necesitan los colaboradores.

## Supervisar la transferencia

Una vez que se ejecuta el trabajo, la pestaña Transferring en la Vista de información inferior muestra el progreso en vivo: porcentaje completado, velocidad de transferencia actual y número de archivos, para que puedas confirmar que un archivo grande de Yandex Disk realmente se está moviendo y no está estancado. Después de que el trabajo finaliza, el Historial de trabajos registra el tamaño total transferido, la duración y el estado de finalización, dándote un registro al que recurrir si un colaborador pregunta más tarde si un lote específico de archivos llegó al otro lado.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Viewing Job History after syncing Yandex Disk to OneDrive in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Conecta tanto Yandex Disk como OneDrive como remotos mediante inicio de sesión OAuth.
3. Configura un trabajo de sincronización unidireccional de Yandex Disk a OneDrive y ejecuta primero una Ejecución de prueba (Dry Run).
4. Ejecuta la sincronización y luego revisa el Historial de trabajos para confirmar que la transferencia se completó según lo esperado.

Las copias de seguridad entre nubes no deberían requerir un desvío por el disco local — con ambos proveedores activos en la misma ventana, los archivos simplemente se mueven a donde tienen que ir.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento de Yandex Disk — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-yandex-disk-cloud-sync-backup-rcloneview)
- [Gestiona el almacenamiento de OneDrive — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Migra de Yandex Disk a Dropbox con RcloneView](https://rcloneview.com/support/blog/migrate-yandex-disk-to-dropbox-rcloneview)

<CloudSupportGrid />
