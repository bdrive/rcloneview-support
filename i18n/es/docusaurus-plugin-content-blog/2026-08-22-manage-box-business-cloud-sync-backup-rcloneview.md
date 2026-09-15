---
slug: manage-box-business-cloud-sync-backup-rcloneview
title: "Gestionar el almacenamiento de Box for Business — Sincronizar y hacer copias de seguridad con RcloneView"
authors:
  - robin
description: "Conecta Box for Business a RcloneView para exploración de archivos multiplataforma, sincronización de nube a nube y copias de seguridad programadas de cuentas empresariales de Box."
keywords:
  - box for business
  - almacenamiento empresarial box
  - rcloneview box business
  - sincronización box business
  - box_sub_type enterprise
  - gui de almacenamiento en la nube empresarial
  - copia de seguridad de cuenta de equipo box
  - gestión de almacenamiento en la nube empresarial
  - migración box business
  - gestión de archivos multi-nube
tags:
  - RcloneView
  - box
  - business
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestionar el almacenamiento de Box for Business — Sincronizar y hacer copias de seguridad con RcloneView

> Conecta una cuenta empresarial de Box for Business a RcloneView y explora, sincroniza y respalda carpetas de empresa compartidas junto a cualquier otra nube que gestiones.

Las cuentas de Box for Business organizan el contenido en torno a carpetas gestionadas a nivel empresarial en lugar de una única cuenta personal, lo que significa que la conexión estándar de Box necesita un ajuste adicional para funcionar correctamente. RcloneView se encarga de esto directamente, dando a los administradores de TI una única ventana para explorar, transferir y proteger contenido empresarial de Box en lugar de alternar entre la aplicación web de Box y un cliente de sincronización independiente.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurar un remoto de Box for Business

Añadir una cuenta de Box for Business empieza igual que una conexión personal de Box: haz clic en New Remote, selecciona Box y completa el inicio de sesión OAuth en tu navegador. La diferencia es un único ajuste adicional — `box_sub_type = enterprise` — que dirige el remoto a la estructura de la cuenta empresarial en lugar de al espacio de un usuario individual. Una vez aplicado ese ajuste, las carpetas de la cuenta empresarial se cargan en el panel Explorer exactamente igual que cualquier otro remoto.

A diferencia de las herramientas que solo montan, RcloneView también sincroniza y compara carpetas — con la licencia FREE — por lo que un administrador que gestiona Box junto con las nubes de otros departamentos no necesita una aplicación aparte solo para mover archivos entre ellas.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Box for Business remote in RcloneView" class="img-large img-center" />

## Explorar carpetas empresariales

Una vez conectado, el panel File Explorer muestra la estructura de carpetas empresarial con las mismas columnas Name, Type, Modified date y Size que se usan en cualquier remoto, además de un árbol de carpetas plegable para navegar por jerarquías de departamentos profundas. La opción Copy Full Path de la barra de ruta breadcrumb genera la ruta en formato `remote:path`, útil al pasar una ubicación al Terminal de rclone integrado para una comprobación rápida de almacenamiento con `rclone about`.

La selección múltiple con Ctrl+Click y Shift+Click permite extraer una carpeta de proyecto concreta de un espacio empresarial extenso sin tener que recorrer toda la cuenta.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browsing Box for Business enterprise folders in RcloneView Explorer" class="img-large img-center" />

## Hacer copia de seguridad de datos empresariales en una segunda nube

Mantener los archivos empresariales en un único proveedor es un riesgo que muchos equipos de TI prefieren no asumir, así que replicar el contenido de Box for Business en Amazon S3, Backblaze B2 u otra nube como copia secundaria es un patrón habitual. El asistente de Sync de 4 pasos de RcloneView cubre esto: elige el remoto de Box for Business como origen, selecciona un remoto de destino y configura la dirección de sincronización en unidireccional, de modo que el destino de la copia refleje el origen sin tocar nada en la fuente. Los ajustes de Filtering pueden excluir medios de gran tamaño o limitar el trabajo a archivos de una determinada antigüedad, manteniendo la copia de seguridad centrada en lo que realmente importa.

Ejecutar un Dry Run antes de la primera sincronización completa muestra la lista exacta de archivos que se copiarán y eliminarán, algo que vale la pena hacer antes de mover los datos de toda una cuenta empresarial.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Box for Business backup job in RcloneView" class="img-large img-center" />

## Automatizar copias de seguridad recurrentes

Los usuarios con licencia PLUS pueden asignar una programación con formato crontab al trabajo de copia de seguridad de Box for Business para que se ejecute cada noche o cada semana sin intervención manual. A partir de ahí, Job History registra el tipo de ejecución, la duración, el estado y el tamaño total transferido en cada ejecución, dando a los administradores un registro que consultar sin tener que rebuscar en la propia consola de administración de Box.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade un nuevo remoto de Box y configura `box_sub_type = enterprise` durante la configuración.
3. Explora las carpetas empresariales en el panel Explorer y confirma el acceso a los departamentos que necesitas.
4. Crea un trabajo de Sync para replicar los datos empresariales en una segunda nube y prográmalo si tienes la licencia PLUS.

Un remoto de Box for Business configurado correctamente convierte a RcloneView en un respaldo práctico para los datos de la empresa que de otro modo solo existirían en un lugar.

---

**Guías relacionadas:**

- [Gestionar el almacenamiento de Box — Sincronizar y hacer copias de seguridad con RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Migrar de Box a OneDrive — Transferir archivos con RcloneView](https://rcloneview.com/support/blog/migrate-box-to-onedrive-rcloneview)
- [Montar el almacenamiento de Box como unidad de red con RcloneView](https://rcloneview.com/support/blog/mount-box-storage-network-drive-rcloneview)

<CloudSupportGrid />
