---
slug: manage-1fichier-cloud-sync-rcloneview
title: "Gestiona el almacenamiento en la nube de 1Fichier — Sincroniza y respalda archivos con RcloneView"
authors:
  - steve
description: "Conecta 1Fichier a RcloneView para gestionar archivos con una interfaz gráfica, crear copias de seguridad automatizadas y realizar transferencias entre nubes. Administra tu biblioteca de 1Fichier sin herramientas de línea de comandos."
keywords:
  - 1Fichier RcloneView sync
  - manage 1Fichier files GUI
  - 1Fichier cloud backup
  - 1Fichier file transfer RcloneView
  - 1Fichier to Google Drive
  - rclone 1Fichier GUI
  - 1Fichier storage management
  - 1Fichier backup tool
tags:
  - RcloneView
  - 1fichier
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona el almacenamiento en la nube de 1Fichier — Sincroniza y respalda archivos con RcloneView

> Conecta tu cuenta de 1Fichier a RcloneView y gestiona archivos, crea copias de seguridad automatizadas y transfiere datos a otros proveedores de nube, todo sin tocar la línea de comandos.

1Fichier es un servicio francés de almacenamiento en la nube y alojamiento de archivos, popular por su generosa oferta de almacenamiento y sus capacidades de compartición de archivos. Si bien la interfaz web de 1Fichier permite navegar y realizar descargas manuales, los usuarios que necesitan mover bibliotecas grandes, crear copias de seguridad automatizadas o integrar 1Fichier en un flujo de trabajo multi-nube requieren una herramienta más completa. El backend de 1Fichier de RcloneView se encarga de todo eso a través de una interfaz gráfica limpia.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar 1Fichier a RcloneView

En RcloneView, abre **pestaña Remoto → Nuevo remoto** y selecciona 1Fichier de la lista de proveedores. La autenticación requiere tu clave API de 1Fichier, que puedes generar en la configuración de tu cuenta de 1Fichier, en la sección API. Pega la clave API en el cuadro de diálogo de configuración de RcloneView y guarda. El remoto queda listo de inmediato.

Tus carpetas y archivos de 1Fichier aparecen en el panel del explorador, navegables por árbol de carpetas y con una lista de archivos ordenable. El recuento total y el tamaño de cualquier carpeta están disponibles mediante clic derecho → **Obtener tamaño**, lo cual es útil para auditar cuántos datos tienes antes de planificar una migración o una tarea de copia de seguridad.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting 1Fichier to RcloneView as a new remote" class="img-large img-center" />

## Descargar y organizar contenido de 1Fichier

Para los usuarios que almacenan un gran archivo de archivos en 1Fichier y desean moverlos a un proveedor más accesible como Google Drive, OneDrive o un NAS local, la tarea de Copia entre nubes de RcloneView es la herramienta adecuada. Abre 1Fichier en un panel y el destino en el otro, luego crea una tarea de Copia en el Gestor de tareas. Configura una concurrencia de transferencia adecuada: 1Fichier impone límites de velocidad de descarga en las cuentas gratuitas, por lo que los titulares de cuentas premium verán un rendimiento más rápido.

Filtra las tareas por tipo de archivo o nombre de carpeta para migrar contenido de forma selectiva. Por ejemplo, extrae solo archivos de video de un archivo con contenido mixto, o copia una estructura de carpetas específica dejando el resto intacto.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files from 1Fichier to another cloud in RcloneView" class="img-large img-center" />

## Hacer copias de seguridad de archivos en 1Fichier

Las funciones de alojamiento de archivos de 1Fichier lo convierten en un destino de copia de seguridad secundario viable, especialmente para usuarios que desean una copia archivada en Europa. Crea una tarea de Sincronización o Copia desde Google Drive, Dropbox o una carpeta local como origen, con tu cuenta de 1Fichier como destino. El Gestor de tareas maneja los reintentos de transferencia en caso de fallos, algo importante dado que los servicios de alojamiento de archivos pueden tener tiempos de respuesta de API variables.

Supervisa el progreso de la transferencia en la **pestaña Transfiriendo** y revisa el **Historial de tareas** para obtener un registro completo de auditoría de qué se respaldó y cuándo.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring 1Fichier backup transfer progress in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Genera una clave API en la configuración de tu cuenta de 1Fichier.
3. Añade 1Fichier como remoto en **pestaña Remoto → Nuevo remoto**.
4. Crea tareas de Copia o Sincronización para mover o respaldar tus datos de 1Fichier.

RcloneView convierte a 1Fichier en una parte manejable de tu kit de herramientas de almacenamiento en la nube, con la misma interfaz de arrastrar y soltar que usas para cualquier otro proveedor.

---

**Guías relacionadas:**

- [Descarga y organiza el almacenamiento de 1Fichier con RcloneView](https://rcloneview.com/support/blog/download-organize-1fichier-cloud-storage-rcloneview)
- [Migración de nube a nube con RcloneView](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)
- [Gestiona múltiples cuentas en la nube con RcloneView](https://rcloneview.com/support/blog/manage-multiple-cloud-accounts-with-rcloneview)

<CloudSupportGrid />
