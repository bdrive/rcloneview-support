---
slug: migrate-citrix-sharefile-onedrive-sharepoint-rcloneview
title: "Migra de Citrix ShareFile a OneDrive o SharePoint con RcloneView"
authors:
  - tayson
description: "Mueve los datos de tu organización de Citrix ShareFile a Microsoft OneDrive o SharePoint — de forma segura, con verificación por comparación de carpetas y sin pérdida de datos — usando RcloneView."
keywords:
  - migración de sharefile
  - sharefile a onedrive
  - exportación de citrix sharefile
  - sharefile a sharepoint
  - migrar datos de sharefile
  - alternativa a sharefile
  - herramienta de copia de seguridad de sharefile
  - herramienta de migración de citrix sharefile
  - sharefile a microsoft 365
  - exportación de datos de sharefile
tags:
  - sharefile
  - onedrive
  - sharepoint
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migra de Citrix ShareFile a OneDrive o SharePoint con RcloneView

> ¿Estás dejando Citrix ShareFile por Microsoft 365? La migración no tiene por qué ser una pesadilla. RcloneView te ofrece un flujo de trabajo visual y verificable para moverlo todo, sin pérdida de datos.

Muchas organizaciones están consolidando su almacenamiento de archivos en Microsoft 365, reemplazando soluciones independientes como Citrix ShareFile por OneDrive for Business y SharePoint. Pero migrar años de datos corporativos, archivos de clientes y carpetas compartidas no es trivial. RcloneView proporciona las herramientas para que esta migración sea controlada, verificable y repetible.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué las empresas dejan ShareFile

- **Consolidación** — Microsoft 365 ya incluye OneDrive y SharePoint. Pagar por separado por ShareFile es redundante.
- **Integración** — OneDrive se integra de forma nativa con Teams, Outlook y las aplicaciones de Office.
- **Costo** — Eliminar una licencia de ShareFile independiente ahorra dinero.
- **Cumplimiento normativo** — Centralizar los datos en una sola plataforma simplifica la gobernanza.

El reto está en la migración en sí: ¿cómo mover todo sin perder archivos, romper la estructura de carpetas ni interrumpir a los usuarios activos?

## Conectar ShareFile

1. Abre RcloneView y haz clic en **Añadir remoto**.
2. Selecciona **Citrix ShareFile** de la lista de proveedores.
3. Autentícate con tus credenciales de ShareFile (OAuth o clave de API).
4. Guarda — tus carpetas y archivos de ShareFile ya son explorables.

<img src="/support/images/en/blog/new-remote.png" alt="Add Citrix ShareFile remote" class="img-large img-center" />

## Estrategia de migración: cuatro fases

### Fase 1: Evaluación

Explora tu cuenta de ShareFile en el Explorador para entender el alcance:

- Volumen total de datos (GB/TB).
- Número de archivos y profundidad de carpetas.
- Identifica las carpetas críticas frente a los datos archivables.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Assess ShareFile data for migration" class="img-large img-center" />

### Fase 2: Copia inicial

Ejecuta la primera copia completa de ShareFile a OneDrive/SharePoint:

1. **Añade OneDrive** como remoto (mediante [OAuth](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)).
2. **Crea un trabajo de copia**: ShareFile → OneDrive.
3. **Ejecuta el trabajo** — la estructura de carpetas se conserva automáticamente.
4. Supervisa el progreso en tiempo real.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor ShareFile to OneDrive transfer" class="img-large img-center" />

### Fase 3: Verificar

Después de completar la copia, verifica con [Comparación de carpetas](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents):

- Confirma que todos los archivos se transfirieron.
- Identifica cualquier diferencia.
- Copia los archivos faltantes para cerrar las brechas.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify ShareFile migration completeness" class="img-large img-center" />

### Fase 4: Sincronización durante la transición

Mantén ambos sistemas sincronizados mientras los usuarios hacen la transición:

1. **Programa un trabajo de sincronización diario** de ShareFile → OneDrive.
2. Los archivos nuevos añadidos a ShareFile aparecen automáticamente en OneDrive.
3. Una vez que todos los usuarios hayan cambiado, da de baja ShareFile.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule ongoing sync during migration" class="img-large img-center" />

## Después de la migración: conserva una copia de seguridad

Incluso después de la migración, considera mantener una copia de seguridad secundaria de los datos de OneDrive:

- Sincroniza OneDrive con [AWS S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3) para obtener redundancia fuera del sitio.
- Usa [Trabajos por lotes](https://rcloneview.com/support/blog/batch-jobs-run-multiple-cloud-tasks-rcloneview) para automatizar copias de seguridad hacia múltiples destinos.

## Cómo empezar

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Añade ShareFile** y **OneDrive/SharePoint** como remotos.
3. **Explora y evalúa** el alcance de la migración.
4. **Copia, verifica, sincroniza** siguiendo el enfoque de cuatro fases.
5. **Da de baja ShareFile** con confianza.

La migración de ShareFile a Microsoft 365 no tiene por qué ser un salto de fe. RcloneView la convierte en un proceso controlado y verificado, sin pérdida de datos.

---

**Guías relacionadas:**

- [Añadir remoto mediante inicio de sesión en el navegador (OAuth)](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [Comparar el contenido de carpetas](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Crear trabajos de sincronización](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Programación de trabajos](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Supervisión de transferencias en tiempo real](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />
