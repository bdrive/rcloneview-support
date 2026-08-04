---
slug: cloud-storage-staffing-recruiting-agencies-rcloneview
title: "Almacenamiento en la nube para agencias de personal y reclutamiento — Proteja los datos de candidatos con RcloneView"
authors:
  - tayson
description: "Centralice currículums, verificaciones de antecedentes y archivos de clientes entre sucursales y cuentas en la nube con RcloneView para agencias de personal y reclutamiento."
keywords:
  - Almacenamiento en la nube para agencias de personal
  - Gestión de archivos para agencias de reclutamiento
  - Almacenamiento de datos de candidatos
  - Base de datos de currículums en la nube
  - Registros seguros de candidatos
  - Copia de seguridad de documentos de RR. HH.
  - Copia de seguridad para agencias de reclutamiento
  - Empresa de personal multi-nube
  - Protección de datos personales de candidatos
  - RcloneView para reclutamiento
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Almacenamiento en la nube para agencias de personal y reclutamiento — Proteja los datos de candidatos con RcloneView

> Mantenga organizados y respaldados los currículums, las verificaciones de antecedentes y los contratos de clientes en cada cuenta en la nube que realmente utilizan sus sucursales y reclutadores.

Una agencia de personal de tamaño mediano con cinco sucursales suele terminar con currículums de candidatos dispersos en la nube que cada reclutador u oficina haya adoptado como estándar — una sucursal en Google Drive, otra en OneDrive, un archivo antiguo que todavía está en Dropbox. Perder de vista qué versión de un archivo de candidato es la actual, o no respaldar el sitio de SharePoint de una sucursal, genera un riesgo real de cumplimiento normativo y de relación con el cliente. RcloneView ofrece a las agencias una única ventana para explorar, sincronizar y respaldar registros de candidatos y clientes en todas esas cuentas sin obligar a cada oficina a usar la misma plataforma.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Centralizar los registros de candidatos entre las nubes de las sucursales

El explorador multipanel de RcloneView abre hasta cuatro remotos uno al lado del otro, de modo que un responsable de operaciones de reclutamiento puede examinar el Google Drive de una sucursal junto al OneDrive de la oficina central sin cambiar de aplicación. RcloneView monta Y sincroniza más de 90 proveedores desde una sola ventana, en Windows, macOS y Linux, lo cual es importante cuando distintas sucursales o portales gestionados por clientes se configuraron en plataformas diferentes a lo largo de los años.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting multiple branch office cloud accounts in RcloneView" class="img-large img-center" />

Folder Compare resalta qué carpetas de candidatos existen solo en la nube de una sucursal y no en otra, lo que facilita detectar una oficina que dejó de sincronizar su base de datos de currículums hace meses.

## Protección de datos sensibles de candidatos y clientes

Los currículums, los resultados de verificaciones de antecedentes y el historial salarial son exactamente el tipo de datos personales que no deberían estar en texto plano en carpetas en la nube. El remoto virtual Crypt de RcloneView cifra los nombres de archivo y el contenido antes de que salgan del equipo local, de modo que una base de datos de candidatos respaldada en almacenamiento en la nube permanece cifrada en reposo incluso si la cuenta en la nube subyacente se ve comprometida más adelante.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing candidate record folders between branch offices in RcloneView" class="img-large img-center" />

Los filtros personalizados del asistente de sincronización también pueden excluir tipos de archivo que no deberían duplicarse en cada destino de copia de seguridad, manteniendo el alcance de cada trabajo de sincronización acotado y auditable.

## Programar copias de seguridad para cada sucursal

Respaldar manualmente cinco o más sucursales no es escalable. Job Manager permite que una agencia guarde un trabajo de sincronización por sucursal y, con la licencia PLUS, adjunte una programación de estilo crontab para que las copias de seguridad nocturnas se ejecuten sin que nadie tenga que acordarse de hacer clic en un botón. Job History proporciona entonces un registro auditable — hora de inicio, archivos transferidos y estado de finalización — útil cuando un cliente pregunta cómo se protegen los datos de los candidatos que envió.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling nightly branch office backups in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Conecte la cuenta en la nube de cada sucursal como un remoto independiente.
3. Configure un remoto Crypt para cualquier carpeta que contenga datos personales (PII) de candidatos antes de respaldarla.
4. Cree trabajos de sincronización programados por sucursal y revise Job History con regularidad.

Las copias de seguridad cifradas y coherentes en la cuenta en la nube de cada sucursal convierten una base de datos de candidatos dispersa en un activo auditable y recuperable.

---

**Guías relacionadas:**

- [Almacenamiento en la nube para Recursos Humanos — Proteja y agilice los archivos de RR. HH. con RcloneView](https://rcloneview.com/support/blog/cloud-storage-human-resources-rcloneview)
- [Cifrar copias de seguridad en la nube — Guía del remoto Crypt con RcloneView](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [Lista de verificación de seguridad de almacenamiento en la nube con RcloneView](https://rcloneview.com/support/blog/cloud-storage-security-checklist-rcloneview)

<CloudSupportGrid />
