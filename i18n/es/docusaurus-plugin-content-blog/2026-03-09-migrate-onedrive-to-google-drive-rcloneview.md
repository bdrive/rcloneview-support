---
slug: migrate-onedrive-to-google-drive-rcloneview
title: "Cómo migrar de OneDrive a Google Drive — Guía de transferencia paso a paso con RcloneView"
authors:
  - tayson
description: "¿Cambiando de Microsoft 365 a Google Workspace? Aprende a migrar todos tus archivos de OneDrive a Google Drive conservando la estructura de carpetas con RcloneView."
keywords:
  - migrar onedrive a google drive
  - transferencia de onedrive a google drive
  - cambiar de microsoft 365 a google workspace
  - mover archivos onedrive google drive
  - herramienta de migración onedrive google drive
  - herramienta de migración en la nube
  - sincronización de onedrive a gdrive
  - transferir archivos de onedrive
  - migración de microsoft a google
  - herramienta de migración de onedrive
tags:
  - RcloneView
  - onedrive
  - google-drive
  - migration
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cómo migrar de OneDrive a Google Drive — Guía de transferencia paso a paso con RcloneView

> Tu organización se está mudando a Google Workspace. Ahora necesitas mover terabytes de archivos de OneDrive a Google Drive sin interrumpir el flujo de trabajo de tu equipo. Así es como se hace correctamente.

Ya sea que estés cambiando de suite de productividad, consolidando cuentas en la nube o manteniendo una copia de seguridad paralela, migrar de OneDrive a Google Drive requiere una planificación cuidadosa. RcloneView se encarga del trabajo pesado: transferencia directa de nube a nube que conserva la estructura de carpetas y gestiona automáticamente las diferencias de formato de archivo.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ¿Por qué no simplemente descargar y volver a subir?

El enfoque manual —descargar de OneDrive y luego subir a Google Drive— tiene desventajas importantes:

- **Requiere espacio en disco local** para todo el conjunto de datos.
- **El doble de tiempo** — descarga + subida en lugar de transferencia directa.
- **Sin actualizaciones incrementales** — cualquier cambio durante la transferencia se pierde.
- **Falla con conjuntos de datos grandes** — las subidas por navegador fallan con archivos de varios GB.

RcloneView transfiere directamente entre nubes, requiriendo solo ancho de banda, no almacenamiento local.

## Pasos de migración

### 1) Conecta ambas cuentas

Agrega OneDrive y Google Drive como remotos en RcloneView:

<img src="/support/images/en/blog/new-remote.png" alt="Add OneDrive and Google Drive remotes" class="img-large img-center" />

### 2) Evalúa y planifica

Explora ambas nubes en paralelo:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse OneDrive and Google Drive side by side" class="img-large img-center" />

Antes de migrar, verifica:

- **Tamaño total** — ¿Cuántos datos hay que mover?
- **Tipos de archivo** — Los documentos de Office se convierten automáticamente (ver más abajo).
- **Carpetas compartidas** — Los elementos compartidos de OneDrive requieren un manejo aparte.
- **Longitud de rutas** — Google Drive tiene un límite de 400 caracteres por ruta.

### 3) Manejo de formatos de archivo

Al transferir, los documentos de Office pueden subirse tal cual a Google Drive. Google Drive admite abrir archivos `.docx`, `.xlsx` y `.pptx` de forma nativa. Opcionalmente, puedes convertirlos a formatos nativos de Google después de la migración.

| Formato de OneDrive | Manejo en Google Drive |
|-----------------|---------------------|
| .docx | Se abre de forma nativa o se convierte a Google Docs |
| .xlsx | Se abre de forma nativa o se convierte a Google Sheets |
| .pptx | Se abre de forma nativa o se convierte a Google Slides |
| Imágenes, PDF | Se transfieren tal cual |

### 4) Ejecuta la migración

Crea un trabajo de **Copia** de OneDrive a Google Drive:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run OneDrive to Google Drive migration" class="img-large img-center" />

Usa **Copia** en lugar de Sincronización — solo agrega archivos, nunca elimina en el destino.

### 5) Supervisa el progreso

Observa la migración en tiempo real:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor migration progress" class="img-large img-center" />

### 6) Verifica

Compara ambos lados después de la migración:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify migration completeness" class="img-large img-center" />

## Manejo de casos especiales

### Bibliotecas de documentos de SharePoint

Las bibliotecas de SharePoint son independientes del OneDrive personal. Agrega SharePoint como un remoto separado en RcloneView para migrar sitios de equipo.

### OneDrive para empresas vs. personal

Si migras desde OneDrive para empresas, la configuración de OAuth difiere de la de OneDrive personal. RcloneView te guía a través de ambos flujos de autenticación.

### Migraciones grandes (500 GB+)

Para conjuntos de datos muy grandes:

- **Migra por lotes** — Comienza con las carpetas críticas y luego con los datos secundarios.
- **Usa reglas de filtro** — Prioriza por tipo de archivo o fecha.
- **Programa fuera de horario** — Ejecuta durante las noches/fines de semana para evitar límites de tasa.
- **Habilita reintentos** — La función de reintento de v1.3 gestiona fallos transitorios.

### Durante el período de transición

Mantén ambas nubes sincronizadas mientras tu equipo hace la transición:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule ongoing sync during transition" class="img-large img-center" />

Programa sincronizaciones diarias de OneDrive → Google Drive hasta que todos hayan cambiado.

## Lista de verificación posterior a la migración

1. **Verifica el número de archivos** — La Comparación de carpetas confirma que todos los archivos se transfirieron.
2. **Prueba el acceso a los archivos** — Abre documentos clave en Google Drive.
3. **Actualiza los permisos de uso compartido** — Vuelve a compartir carpetas en Google Drive con los miembros del equipo.
4. **Actualiza las integraciones de aplicaciones** — Redirige scripts, herramientas y flujos de trabajo a Google Drive.
5. **Mantén OneDrive activo** — Conserva la cuenta antigua durante 30 días como red de seguridad.
6. **Da de baja** — Después de confirmar que todo funciona, cancela las suscripciones de OneDrive.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Agrega OneDrive y Google Drive** como remotos.
3. **Ejecuta un trabajo de Copia** para transferir archivos.
4. **Verifica con la Comparación de carpetas**.
5. **Programa sincronizaciones incrementales** durante la transición.

La migración ya es bastante estresante sin tener que preocuparse por archivos perdidos. Deja que RcloneView se encargue de la transferencia mientras tú te concentras en el plan de transición.

---

**Guías relacionadas:**

- [Crear trabajos de sincronización](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Comparar contenido de carpetas](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Migrar de Google Drive a OneDrive](https://rcloneview.com/support/blog/migrate-google-drive-to-onedrive-rcloneview)
- [Programación de trabajos](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
