---
slug: manage-box-for-business-cloud-sync-backup-rcloneview
title: "Gestionar Box for Business — Sincronizar y respaldar archivos con RcloneView"
authors:
  - tayson
description: "Conecta Box for Business a RcloneView para explorar, sincronizar, montar y respaldar archivos empresariales en la nube junto a más de 90 proveedores más."
keywords:
  - Box for Business
  - almacenamiento empresarial Box
  - RcloneView
  - sincronización en la nube empresarial
  - gestión de almacenamiento en la nube
  - software de copia de seguridad en la nube
  - box_sub_type enterprise
  - gestión de archivos multi-nube
  - almacenamiento en la nube empresarial
  - herramienta de comparación de carpetas
tags:
  - RcloneView
  - box
  - enterprise
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestionar Box for Business — Sincronizar y respaldar archivos con RcloneView

> Trata la cuenta de Box for Business de tu organización como cualquier otra unidad — explora, sincroniza, monta y respáldala desde una sola aplicación de escritorio.

Las cuentas de Box for Business suelen almacenar años de archivos compartidos entre departamentos, repartidos en docenas de carpetas de equipo anidadas, y el personal de TI necesita una forma confiable de inspeccionar, mover y proteger ese contenido sin vivir dentro de una pestaña del navegador. RcloneView se conecta a Box for Business mediante el mismo inicio de sesión OAuth que se usa para las cuentas personales de Box, y luego aplica el indicador de configuración específico para empresas para que la aplicación pueda ver la estructura completa de carpetas de tu organización. Una vez conectada, la cuenta se comporta como cualquier otro remoto en las herramientas de exploración, sincronización y montaje de RcloneView, con sincronización y comparación de carpetas disponibles ya en la licencia FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurar tu remoto de Box for Business

Crea un nuevo remoto en RcloneView y elige Box — la aplicación abrirá tu navegador para el inicio de sesión OAuth estándar, por lo que no se requieren claves de API ni introducción manual de tokens. Inicia sesión con tus credenciales corporativas de Box para autorizar la conexión.

Las cuentas de Box for Business necesitan una configuración adicional más allá de un inicio de sesión personal de Box: `box_sub_type = enterprise`, que se introduce en la configuración avanzada del remoto. Esto le indica a rclone que consulte la estructura de equipo compartida de la organización en lugar de una única cuenta personal, lo que es precisamente lo que hace que aparezcan las carpetas de toda la empresa en el panel del explorador de RcloneView.

<img src="/support/images/en/blog/new-remote.png" alt="Creando un nuevo remoto de Box for Business en RcloneView" class="img-large img-center" />

Si gestionas varias cuentas de Box for Business en distintos departamentos, el Remote Manager mantiene cada una por separado para que puedas editar las credenciales o el indicador enterprise de forma independiente.

## Comparar y sincronizar carpetas empresariales

Antes de migrar un departamento fuera de un servidor de archivos antiguo o de consolidar carpetas de equipo duplicadas, usa Folder Compare para ver exactamente qué diferencias hay entre tu carpeta de Box for Business y una ubicación de destino. La vista de comparación filtra los resultados por solo a la izquierda, solo a la derecha, idénticos y diferentes, para que puedas copiar solo lo que falta en lugar de volver a subir todo.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Comparando y sincronizando una carpeta de Box for Business con otro remoto en la nube" class="img-large img-center" />

Para una protección continua, un trabajo de sincronización unidireccional mantiene actualizada una copia secundaria de las carpetas críticas de Box for Business sin tocar la fuente, y un dry run muestra exactamente qué archivos se copiarán o eliminarán antes de que realmente se mueva algo.

## Programar copias de seguridad y monitorear trabajos

El Job Manager te permite configurar un trabajo de sincronización, copia o 1:N que refleja el mismo contenido de Box for Business en dos destinos simultáneamente — por ejemplo, un NAS local y un bucket compatible con S3, de modo que un solo trabajo de sincronización cumpla tanto con el requisito de copia de seguridad local como externa. Job History registra entonces la hora de inicio, la duración, el estado y el número de archivos de cada ejecución, lo cual es útil cuando un administrador necesita confirmar que una copia de seguridad nocturna realmente se completó.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Programando un trabajo recurrente de copia de seguridad de Box for Business en RcloneView" class="img-large img-center" />

Los usuarios con licencia PLUS pueden automatizar esto aún más con una programación de estilo crontab, para que las copias de seguridad se ejecuten durante la noche sin que nadie las active manualmente.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade un nuevo remoto de Box y completa el inicio de sesión OAuth con tu cuenta corporativa.
3. Edita la configuración avanzada del remoto y establece `box_sub_type = enterprise` para desbloquear las carpetas de la empresa.
4. Configura un trabajo de sincronización o un montaje para comenzar a gestionar tu contenido de Box for Business.

Una vez que tu cuenta empresarial de Box se ubica junto a todos los demás remotos en una sola interfaz, la gestión diaria de archivos y las copias de seguridad para recuperación ante desastres dejan de ser dos flujos de trabajo separados.

---

**Guías relacionadas:**

- [Gestionar almacenamiento en Box — Sincronizar y respaldar archivos con RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Cómo migrar de Box a SharePoint o OneDrive — Migración empresarial a la nube con RcloneView](https://rcloneview.com/support/blog/migrate-box-to-sharepoint-onedrive-rcloneview)
- [Montar almacenamiento de Box como unidad de red con RcloneView para un acceso de equipo sin interrupciones](https://rcloneview.com/support/blog/mount-box-storage-network-drive-rcloneview)

<CloudSupportGrid />
