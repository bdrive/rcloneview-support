---
slug: manage-box-business-cloud-sync-backup-rcloneview
title: "Gestionar Box for Business — Sincronizar y respaldar archivos con RcloneView"
authors:
  - robin
description: "Conecta Box for Business en RcloneView para explorar, sincronizar y respaldar archivos empresariales con una única GUI multiplataforma."
keywords:
  - box for business
  - almacenamiento en la nube empresarial de box
  - RcloneView box business
  - box_sub_type enterprise
  - sincronizar archivos de box business
  - copia de seguridad de box for business
  - gestionar cuenta empresarial de box
  - GUI de almacenamiento en la nube de box
  - gestión de archivos de box business
tags:
  - RcloneView
  - box
  - cloud-storage
  - cloud-sync
  - backup
  - business
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestionar Box for Business — Sincronizar y respaldar archivos con RcloneView

> Las cuentas de Box for Business necesitan una configuración adicional al conectarse — RcloneView se encarga de ello y luego te ofrece un gestor de archivos completo.

Box for Business funciona con un tipo de cuenta distinto al de una cuenta personal de Box, y conectarla correctamente requiere activar un indicador empresarial durante la configuración del remoto. Una agencia de diseño con carpetas empresariales compartidas entre una docena de puestos no puede permitirse un remoto defectuoso que explore silenciosamente el espacio de trabajo equivocado. RcloneView añade la configuración correcta durante la instalación y luego trata Box for Business como cualquier otro remoto: se puede explorar, sincronizar y montar desde una sola ventana.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar una cuenta de Box for Business

Box for Business utiliza el mismo inicio de sesión OAuth en el navegador que una cuenta personal de Box, pero requiere establecer `box_sub_type = enterprise` durante la creación del remoto para que RcloneView apunte al espacio de trabajo empresarial correcto en lugar de a un árbol de carpetas personal. Abre la pestaña Remote > New Remote, elige Box, completa el inicio de sesión en el navegador y configura el subtipo antes de guardar. A diferencia de las herramientas que solo montan, RcloneView también sincroniza y compara carpetas en el remoto de Box for Business, con la licencia FREE.

Una vez conectado, el remoto aparece en la barra de pestañas del Explorer igual que cualquier otro almacenamiento en la nube. Puedes explorar las carpetas empresariales, comprobar el número y tamaño de los archivos en el resumen del pie de página, y cambiar entre varios espacios de trabajo de Box sin volver a autenticarte cada vez.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Box for Business remote in RcloneView" class="img-large img-center" />

## Respaldar carpetas empresariales

Un trabajo de sincronización protege el contenido de Box for Business de la misma forma que protege cualquier otro remoto: configura el origen y el destino en el Paso 1 del asistente de sincronización, elige la opción unidireccional "Modificar solo el destino" para una dirección de respaldo estable, y añade filtros en el Paso 3 para excluir archivos temporales o adjuntos de gran tamaño. Para equipos que gestionan contratos o entregables de clientes, una sincronización unidireccional nocturna hacia el almacenamiento local o una segunda cuenta en la nube mantiene una copia de recuperación fuera del espacio de trabajo compartido.

El Job History registra después cada ejecución — estado, número de archivos, tamaño transferido y duración — para que un administrador pueda confirmar que las copias de seguridad realmente se completaron, en lugar de asumir que una programación se ejecutó silenciosamente en segundo plano.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Box for Business backup runs" class="img-large img-center" />

## Montar Box for Business como unidad local

Montar convierte la cuenta empresarial en una letra de unidad o punto de montaje que cualquier aplicación de escritorio puede abrir directamente, sin descargar antes los archivos. Esto es importante para los equipos que usan software de diseño o de documentos que espera rutas de archivo locales en lugar de un cuadro de diálogo de carga web. Configura el modo de caché como "writes" para equilibrar la capacidad de respuesta y la fiabilidad, y activa Read only para los revisores que no deban modificar el contenido compartido.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a Box for Business folder from the Remote Explorer panel" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Crea un nuevo remoto de Box y activa el subtipo empresarial durante la configuración.
3. Configura un trabajo de sincronización unidireccional para respaldar carpetas empresariales críticas.
4. Monta el remoto para los equipos que necesiten acceso directo a los archivos locales.

Las cuentas empresariales merecen la misma cobertura fiable de sincronización y respaldo que cualquier otro almacenamiento en la nube — RcloneView solo se asegura de que la conexión esté configurada correctamente desde el principio.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento de Box — Sincroniza y haz copias de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Gestionar el almacenamiento de Dropbox for Business — Sincronizar y respaldar archivos con RcloneView](https://rcloneview.com/support/blog/manage-dropbox-business-cloud-sync-backup-rcloneview)
- [Monta el almacenamiento de Box como unidad de red con RcloneView para un acceso de equipo sin interrupciones](https://rcloneview.com/support/blog/mount-box-storage-network-drive-rcloneview)

<CloudSupportGrid />
