---
slug: migrate-box-to-sharepoint-onedrive-rcloneview
title: "Cómo migrar de Box a SharePoint o OneDrive — Migración empresarial a la nube con RcloneView"
authors:
  - tayson
description: "¿Te mudas de Box a Microsoft 365? Aprende a migrar archivos de Box a SharePoint Online o OneDrive for Business preservando la estructura de carpetas con RcloneView."
keywords:
  - migrate box to sharepoint
  - box to onedrive migration
  - box to microsoft 365 transfer
  - box sharepoint migration tool
  - move files from box
  - box migration tool
  - enterprise cloud migration
  - box to office 365
  - box data migration
  - box alternative migration
tags:
  - RcloneView
  - box
  - sharepoint
  - onedrive
  - migration
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cómo migrar de Box a SharePoint o OneDrive — Migración empresarial a la nube con RcloneView

> Tu empresa ha decidido consolidarse en Microsoft 365. Paso uno: migrar todos esos archivos de Box a SharePoint y OneDrive. Paso dos: no perder nada en el proceso.

Box ha sido un pilar para el intercambio de archivos empresariales, pero muchas organizaciones están consolidando sus ecosistemas en la nube en torno a Microsoft 365. Migrar de Box a SharePoint Online o OneDrive for Business es un proyecto significativo, especialmente cuando se trata de años de datos acumulados, estructuras de carpetas complejas y espacios de trabajo compartidos. RcloneView hace que esto sea manejable.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Planificación de la migración

### Evalúa tu entorno de Box

Antes de migrar, inventaría lo que tienes:

- **Carpetas personales** → Migrar a cuentas individuales de OneDrive.
- **Carpetas/espacios de trabajo compartidos** → Migrar a bibliotecas de documentos de SharePoint.
- **Datos archivados** → Considera moverlos a almacenamiento más económico (S3, B2) en lugar de SharePoint.
- **Volumen total de datos** — Determina el cronograma y el enfoque.

### Mapeo de destino

| Origen en Box | Destino en Microsoft 365 |
|-----------|--------------------------|
| My Files | OneDrive for Business |
| Carpetas compartidas | SharePoint Team Sites |
| Carpetas de departamento | Bibliotecas de documentos de SharePoint |
| Archivo/datos fríos | OneDrive o Azure Blob Storage |

## Migración paso a paso

### 1) Agrega los remotos de Box y Microsoft

Conecta ambos servicios en RcloneView:

<img src="/support/images/en/blog/new-remote.png" alt="Add Box and SharePoint remotes" class="img-large img-center" />

Para SharePoint, agrégalo como un remoto de OneDrive Business y especifica la URL del sitio de SharePoint.

### 2) Explora y compara

Abre Box a la izquierda y SharePoint/OneDrive a la derecha:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Box and SharePoint side by side" class="img-large img-center" />

### 3) Transfiere por fases

No intentes migrar todo de una vez. Prioriza:

**Fase 1: Proyectos activos** — Archivos que la gente necesita a diario.
**Fase 2: Espacios de trabajo compartidos** — Carpetas de equipo y espacios de colaboración.
**Fase 3: Archivo** — Proyectos antiguos y datos históricos.

### 4) Ejecuta trabajos de copia

Crea trabajos de copia para cada fase:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Box to SharePoint migration job" class="img-large img-center" />

### 5) Verifica cada fase

Después de cada fase, compara el origen y el destino:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Box to SharePoint migration" class="img-large img-center" />

## Manejo de limitaciones

### Restricciones de nombres de archivo

SharePoint/OneDrive tiene reglas de nomenclatura más estrictas que Box:

- Caracteres no permitidos: `" * : < > ? / \ |`
- Los nombres de archivo no pueden empezar ni terminar con espacios.
- Longitud máxima de ruta: 400 caracteres.

Rclone maneja automáticamente muchas de estas conversiones durante la transferencia.

### Box Notes

Box Notes es propietario y no tiene un equivalente directo en Microsoft 365. Habrá que exportarlos como PDF o copiarlos manualmente en OneNote/Word.

### Permisos y uso compartido

RcloneView transfiere archivos pero no los permisos de uso compartido. Después de la migración, tendrás que configurar el uso compartido en SharePoint/OneDrive. Planifica esto como un paso separado.

### Límites de velocidad

Tanto Box como SharePoint tienen límites de velocidad de API:

- **Box**: Varía según el plan (típicamente 10–20 solicitudes/segundo).
- **SharePoint**: Microsoft limita según los patrones de uso.

RcloneView respeta estos límites. Para migraciones grandes, programa las transferencias fuera del horario laboral y usa reintentos (v1.3).

## Mantén Box y SharePoint sincronizados durante la transición

No todos cambiarán el mismo día. Programa sincronizaciones para mantener ambas plataformas actualizadas:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule sync during Box to SharePoint transition" class="img-large img-center" />

Esto le da a tu equipo tiempo para transicionar gradualmente sin vacíos de datos.

## Monitorea transferencias grandes

Las migraciones empresariales implican terabytes. Monitorea el progreso:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Box to SharePoint migration" class="img-large img-center" />

## Trabajos por lotes para el flujo de migración

Usa los trabajos por lotes de v1.3 para automatizar toda la secuencia de migración:

1. Copiar Box → SharePoint (proyectos activos).
2. Copiar Box → OneDrive (archivos personales).
3. Comparar Box vs SharePoint para verificar.
4. Enviar notificación de Slack al finalizar.

## Después de la migración

1. **Verifica todos los archivos** — Ejecuta una comparación de carpetas final.
2. **Configura los permisos de SharePoint** — Recrea las estructuras de uso compartido.
3. **Capacita a tu equipo** — Ayuda a los usuarios a encontrar sus archivos en la nueva ubicación.
4. **Monitorea durante 30 días** — Mantén Box activo como respaldo.
5. **Desactiva Box** — Cancélalo después de confirmar que todo es estable.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Agrega Box y SharePoint/OneDrive** como remotos.
3. **Planifica tus fases de migración**.
4. **Ejecuta trabajos de copia** para cada fase.
5. **Verifica con la comparación de carpetas** después de cada fase.
6. **Programa sincronizaciones** durante el período de transición.

La migración empresarial no tiene por qué significar complejidad empresarial.

---

**Guías relacionadas:**

- [Crear trabajos de sincronización](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Comparar contenido de carpetas](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Programación de trabajos](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Establecer límites de ancho de banda](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)

<CloudSupportGrid />
