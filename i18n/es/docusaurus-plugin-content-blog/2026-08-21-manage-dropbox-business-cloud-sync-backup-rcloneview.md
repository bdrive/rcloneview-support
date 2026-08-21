---
slug: manage-dropbox-business-cloud-sync-backup-rcloneview
title: "Gestionar el almacenamiento de Dropbox for Business — Sincronizar y respaldar archivos con RcloneView"
authors:
  - casey
description: "Conecta Dropbox for Business a RcloneView para la exploración de archivos multiplataforma, la sincronización de nube a nube y las copias de seguridad programadas de cuentas de equipo."
keywords:
  - dropbox for business
  - sincronización de dropbox business
  - rcloneview dropbox business
  - copia de seguridad de dropbox business
  - dropbox_business rclone
  - almacenamiento dropbox empresarial
  - gui de almacenamiento en la nube empresarial
  - sincronización de cuenta de equipo dropbox
  - gestión de archivos multi-nube
  - migración de dropbox business
tags:
  - RcloneView
  - dropbox
  - business
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestionar el almacenamiento de Dropbox for Business — Sincronizar y respaldar archivos con RcloneView

> Conecta una cuenta de equipo de Dropbox for Business a RcloneView y explora, sincroniza y respalda las carpetas de equipo compartidas junto con el resto de nubes que gestionas.

Las cuentas de Dropbox for Business organizan los archivos de forma distinta a un Dropbox personal: las carpetas de equipo, los espacios gestionados por administradores y los espacios de trabajo compartidos se encuentran detrás de un inicio de sesión empresarial. RcloneView se conecta directamente a estas cuentas de equipo, ofreciendo a los administradores de TI y a los responsables de equipo una única ventana para explorar, transferir y respaldar contenido empresarial sin tener que alternar entre la aplicación web de Dropbox y un cliente de escritorio independiente.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurar un remote de Dropbox for Business

Añadir una cuenta de Dropbox for Business en RcloneView comienza igual que una conexión de Dropbox personal: haz clic en New Remote, selecciona Dropbox y completa el inicio de sesión OAuth en tu navegador. La diferencia está en un único ajuste adicional: habilitar `dropbox_business = true` en el remote, lo que indica a la conexión que se autentique frente a la cuenta de equipo en lugar de una cuenta individual. Una vez configurado, las carpetas de equipo de la cuenta empresarial aparecen en el panel Explorer igual que cualquier otro remote.

Como RcloneView permite montar Y sincronizar más de 90 proveedores desde una sola ventana en Windows, macOS y Linux, un administrador que gestione tanto un inquilino de Dropbox for Business como las nubes de otros departamentos puede mantenerlo todo dentro de la misma sesión en lugar de alternar entre aplicaciones distintas para cada proveedor.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Dropbox for Business remote in RcloneView" class="img-large img-center" />

## Explorar carpetas de equipo y espacios compartidos

Una vez conectado, el panel File Explorer muestra la estructura de carpetas de Dropbox for Business con las mismas columnas de Nombre, Tipo, Fecha de modificación y Tamaño que se usan para cualquier otro remote. Las carpetas de equipo que abarcan varios departamentos son fáciles de recorrer gracias al árbol de carpetas plegable, y la opción Copy Full Path de la barra de ruta de migas de pan genera el formato `remote:ruta` necesario para scripts o para pasarlo al Terminal de rclone integrado.

La selección múltiple con Ctrl+clic o Mayús+clic facilita extraer carpetas de proyectos concretos de un espacio de equipo grande en lugar de trabajar con toda la cuenta a la vez.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browsing Dropbox for Business team folders in RcloneView Explorer" class="img-large img-center" />

## Respaldar datos empresariales en una segunda nube

Depender de un único proveedor para archivos críticos para el negocio es arriesgado, por lo que muchos equipos replican el contenido de Dropbox for Business en Amazon S3, Backblaze B2 u otra nube como copia secundaria. El asistente de Sync de 4 pasos de RcloneView se encarga de esto directamente: selecciona el remote de Dropbox for Business como origen, elige un remote de destino y opta por la sincronización unidireccional para que el destino de la copia de seguridad refleje siempre el origen sin sobrescribir nada en origen. Los ajustes de filtrado permiten excluir archivos multimedia de gran tamaño o limitar la copia de seguridad a carpetas por debajo de una determinada antigüedad, manteniendo el trabajo centrado en lo que realmente necesita protección.

Ejecutar un Dry Run antes de la primera sincronización muestra exactamente qué archivos se copiarán, algo útil para verificar el alcance antes de mover los datos de toda una cuenta de equipo.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Dropbox for Business backup job in RcloneView" class="img-large img-center" />

## Automatizar copias de seguridad periódicas

Los usuarios con licencia PLUS pueden asignar al trabajo de copia de seguridad de Dropbox for Business una programación con formato crontab, para que se ejecute cada noche o cada semana sin intervención manual. Job History registra entonces el tipo de ejecución, la duración, el estado y el tamaño total transferido de cada ejecución programada, proporcionando a los administradores un registro de auditoría que pueden revisar sin tener que rebuscar en el propio registro de actividad de Dropbox.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade un nuevo remote de Dropbox y habilita el ajuste `dropbox_business` durante la configuración.
3. Explora las carpetas de equipo en el panel Explorer y confirma el acceso a los espacios compartidos que necesitas.
4. Crea un trabajo de Sync para replicar los datos empresariales en una segunda nube, y prográmalo si tienes la licencia PLUS.

Un remote de Dropbox for Business correctamente configurado convierte a RcloneView en una red de seguridad práctica para datos de equipo que, con demasiada frecuencia, residen en un único lugar.

---

**Guías relacionadas:**

- [Gestionar el almacenamiento de Dropbox — Sincronizar y respaldar archivos con RcloneView](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Migrar Dropbox Business a Google Workspace — Transferir archivos con RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-business-to-google-workspace-rcloneview)
- [Respaldar Dropbox en AWS S3 — Copia de seguridad en la nube con RcloneView](https://rcloneview.com/support/blog/backup-dropbox-to-aws-s3-rcloneview)

<CloudSupportGrid />
