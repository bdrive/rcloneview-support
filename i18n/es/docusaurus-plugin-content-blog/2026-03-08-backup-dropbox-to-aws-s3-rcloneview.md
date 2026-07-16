---
slug: backup-dropbox-to-aws-s3-rcloneview
title: "Cómo hacer copia de seguridad de Dropbox a AWS S3 — Copia de seguridad automatizada de nube a nube con RcloneView"
authors:
  - tayson
description: "Protege tus archivos de Dropbox haciendo copia de seguridad en AWS S3. Configura una copia de seguridad automatizada de nube a nube con programación y verificación usando RcloneView."
keywords:
  - backup dropbox to s3
  - dropbox aws s3 sync
  - dropbox cloud backup
  - dropbox to s3 transfer
  - cloud to cloud backup dropbox
  - dropbox backup solution
  - dropbox data protection
  - sync dropbox aws
  - automated dropbox backup
  - dropbox migration s3
tags:
  - dropbox
  - aws-s3
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cómo hacer copia de seguridad de Dropbox a AWS S3 — Copia de seguridad automatizada de nube a nube con RcloneView

> Dropbox es excelente para la colaboración. Pero ¿qué pasa si se eliminan archivos por accidente, un ransomware cifra tus carpetas compartidas, o Dropbox sufre una interrupción del servicio? Una copia de seguridad de nube a nube en AWS S3 te protege de todo esto.

Depender de un único proveedor de nube para archivos importantes es arriesgado. El historial de versiones de Dropbox ayuda con cambios accidentales, pero no protege contra el compromiso de la cuenta, eliminaciones permanentes fuera de la ventana de retención, ni interrupciones del servicio. Hacer copia de seguridad en AWS S3 te da una copia independiente y duradera de todo.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ¿Por qué hacer copia de seguridad de Dropbox en S3?

- **Copia independiente** — Si Dropbox se cae o tu cuenta es comprometida, S3 sigue teniendo tus archivos.
- **99.999999999% de durabilidad** — Las once nueves de durabilidad de S3 significan que tus datos están extremadamente seguros.
- **Archivado rentable** — S3 Glacier comienza en $4/TB/mes para archivos a los que rara vez accedes.
- **Cumplimiento normativo** — Algunas industrias requieren copias de seguridad en infraestructura separada.
- **Protección contra ransomware** — El versionado y el bloqueo de objetos de S3 evitan sobrescrituras.

## Configuración

### 1) Conecta Dropbox y AWS S3

Añade ambos como remotos en RcloneView:

<img src="/support/images/en/blog/new-remote.png" alt="Add Dropbox and S3 remotes" class="img-large img-center" />

Para S3, necesitarás tu Access Key ID, Secret Access Key y la región preferida.

### 2) Explora ambos lados

Abre Dropbox a la izquierda y S3 a la derecha en el explorador de dos paneles:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Dropbox and S3 side by side" class="img-large img-center" />

### 3) Crea un trabajo de copia

Usa **Copy** para hacer copia de seguridad de Dropbox en un bucket de S3. Copy añade archivos sin eliminar — seguro para copias de seguridad:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Dropbox to S3 backup" class="img-large img-center" />

### 4) Programa copias de seguridad nocturnas

Configura el trabajo para que se ejecute cada noche y así tu copia de seguridad en S3 se mantenga actualizada:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule nightly Dropbox backup" class="img-large img-center" />

### 5) Verifica la integridad

Usa la comparación de carpetas para confirmar que todos los archivos están respaldados:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Dropbox backup on S3" class="img-large img-center" />

## Elegir la clase de almacenamiento de S3 adecuada

AWS S3 ofrece múltiples clases de almacenamiento a diferentes precios:

| Clase de almacenamiento | Ideal para | Precio (TB/mes) |
|---------------|----------|------------------|
| S3 Standard | Copias de seguridad de acceso frecuente | $23 |
| S3 Standard-IA | Copias de seguridad de acceso mensual | $12.50 |
| S3 Glacier Instant | Acceso poco frecuente, recuperación instantánea | $4 |
| S3 Glacier Deep Archive | Cumplimiento normativo, acceso anual | $1 |

Para la mayoría de las copias de seguridad de Dropbox, **S3 Standard-IA** (Infrequent Access) es el punto óptimo — no accedes a la copia de seguridad a diario, pero quieres una restauración rápida cuando la necesites.

## Copia de seguridad selectiva con filtros

Puede que no necesites hacer copia de seguridad de todo. Usa las reglas de filtro de rclone:

- **Incluir solo documentos**: `--include "*.pdf" --include "*.docx" --include "*.xlsx"`
- **Excluir archivos temporales**: `--exclude "*.tmp" --exclude ".dropbox*"`
- **Omitir archivos multimedia grandes**: `--max-size 500M`

Consulta [Reglas de filtro de rclone explicadas](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview) para más detalles.

## Trabajos por lotes para un flujo de trabajo de copia de seguridad completo

Con los Batch Jobs de la v1.3, encadena múltiples operaciones:

1. Copiar Dropbox → S3.
2. Comparar Dropbox vs S3.
3. Enviar notificación de Slack al finalizar.

Todo en una única secuencia automatizada.

## Restaurar desde la copia de seguridad

Si necesitas restaurar archivos de S3 de vuelta a Dropbox:

1. Abre S3 a la izquierda, Dropbox a la derecha.
2. Selecciona los archivos o carpetas a restaurar.
3. Ejecuta un trabajo de Copy de S3 → Dropbox.

Es el mismo proceso en sentido inverso.

## Cómo empezar

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Añade Dropbox y AWS S3** como remotos.
3. **Ejecuta un trabajo de Copy** de Dropbox a S3.
4. **Programa copias de seguridad nocturnas**.
5. **Verifica con la comparación de carpetas**.

Tus archivos de Dropbox merecen más de un hogar.

---

**Guías relacionadas:**

- [Crear trabajos de sincronización](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Programación de trabajos](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Comparar contenido de carpetas](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Reglas de filtro de rclone](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)

<CloudSupportGrid />
