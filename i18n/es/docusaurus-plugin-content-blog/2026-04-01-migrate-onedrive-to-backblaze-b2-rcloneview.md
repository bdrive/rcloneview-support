---
slug: migrate-onedrive-to-backblaze-b2-rcloneview
title: "Migra OneDrive a Backblaze B2 para una copia de seguridad en la nube asequible con RcloneView"
authors:
  - tayson
description: "Reduce los costos de almacenamiento migrando archivos de OneDrive a Backblaze B2 con RcloneView. Guía paso a paso para mover datos personales o empresariales a un almacenamiento compatible con S3 más económico."
keywords:
  - migrate onedrive to backblaze b2
  - onedrive to b2 migration
  - rcloneview onedrive backblaze
  - move onedrive to backblaze b2
  - rclone onedrive backblaze b2
  - onedrive cheaper storage alternative
  - backblaze b2 from onedrive
  - cloud storage cost reduction
  - onedrive backup to b2
  - transfer onedrive backblaze
tags:
  - RcloneView
  - onedrive
  - backblaze-b2
  - cloud-migration
  - migration
  - backup
  - cost-optimization
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migra OneDrive a Backblaze B2 para una copia de seguridad en la nube asequible con RcloneView

> Los costos de almacenamiento de OneDrive se acumulan, especialmente para equipos con muchos archivos o personas con terabytes de datos. Backblaze B2 ofrece almacenamiento de objetos compatible con S3 a una fracción del precio. RcloneView hace que la migración sea sencilla.

OneDrive es conveniente para la colaboración activa, pero no es la opción más rentable para archivos a largo plazo, copias de seguridad frías o grandes colecciones multimedia. Con aproximadamente $0.006/GB al mes, Backblaze B2 es significativamente más barato que los planes por usuario de OneDrive para datos a los que accedes con poca frecuencia. Mover datos de archivo de OneDrive a Backblaze B2 —mientras mantienes los archivos de trabajo activos en OneDrive— es una estrategia inteligente de optimización de costos que RcloneView puede ejecutar sin ningún conocimiento de línea de comandos.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ¿Cuándo tiene sentido esta migración?

- Superaste tu cuota de almacenamiento de Microsoft 365 y quieres evitar una actualización.
- Tienes grandes archivos multimedia (fotos, videos, archivos de proyectos) en OneDrive a los que rara vez accedes.
- Estás reemplazando OneDrive con Backblaze B2 como tu destino principal de copias de seguridad.
- Quieres almacenamiento compatible con S3 con soporte nativo de rclone y sin tarifas de salida a otras regiones.

## Comparación de costos: OneDrive vs Backblaze B2

| Almacenamiento | 1 TB/mes | 5 TB/mes |
|---------|-----------|-----------|
| OneDrive (Microsoft 365) | ~$9.99/usuario | ~$50+ (límites por usuario) |
| Backblaze B2 | ~$6.00 | ~$30.00 |

Para usuarios con grandes archivos, Backblaze B2 puede reducir tu factura de almacenamiento en un 40–60%.

## Paso 1 — Conecta OneDrive en RcloneView

<img src="/support/images/en/blog/new-remote.png" alt="Connect OneDrive in RcloneView" class="img-large img-center" />

1. Abre RcloneView y haz clic en **New Remote**.
2. Selecciona **Microsoft OneDrive**.
3. Haz clic en **Authorize** — se abre una ventana del navegador para el OAuth de Microsoft.
4. Inicia sesión y otorga acceso.
5. Elige tu tipo de OneDrive (Personal, Business o SharePoint) y guarda el remoto como `onedrive`.

## Paso 2 — Conecta Backblaze B2 en RcloneView

1. Inicia sesión en el [panel de Backblaze](https://www.backblaze.com) y navega a **App Keys**.
2. Crea una nueva clave de aplicación con acceso de **Read and Write** a tu bucket de destino.
3. Anota el **keyID** y el **applicationKey**.
4. En RcloneView, agrega un nuevo remoto de tipo **Backblaze B2**.
5. Ingresa el keyID y el applicationKey, nómbralo `b2` y guarda.

## Paso 3 — Crea el bucket de destino

En Backblaze B2, crea el bucket de destino antes de migrar:

- **Nombre del bucket**: elige un nombre único (por ejemplo, `onedrive-archive-2026`)
- **Tipo de bucket**: Private (para copias de seguridad personales) o Public (para entrega de medios)
- **Versionado**: Opcional — permite recuperar archivos sobrescritos

## Paso 4 — Ejecuta la migración

Abre **Jobs** en RcloneView y configura:

| Configuración | Valor |
|---------|-------|
| Origen | `onedrive:/Archives/` (o la carpeta que estés migrando) |
| Destino | `b2:onedrive-archive-2026/` |
| Modo | **Copy** (preserva la copia de OneDrive hasta que se verifique) |
| Transferencias | 4–8 concurrentes (ajusta según tu ancho de banda) |
| Checksum | Habilitado |

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Transfer OneDrive to Backblaze B2 in progress" class="img-large img-center" />

Haz clic en **Run**. RcloneView muestra el progreso archivo por archivo, la velocidad de transferencia y el tiempo estimado de finalización.

## Paso 5 — Verifica la migración con la comparación de carpetas

Cuando el trabajo termine, usa la **Folder Comparison** de RcloneView para verificar que cada archivo de OneDrive llegó a B2:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify OneDrive to B2 migration" class="img-large img-center" />

Cualquier discrepancia aparece resaltada. Vuelve a ejecutar el trabajo — rclone omite los archivos que ya están presentes y solo retransfiere los que faltan.

## Paso 6 — Programa copias de seguridad continuas (Opcional)

Si quieres mantener B2 como una copia de seguridad activa de OneDrive en adelante:

1. Cambia el modo del trabajo a **Sync** en lugar de Copy.
2. Abre **Schedule** y establece un intervalo recurrente (por ejemplo, cada noche a las 2 AM).
3. Los archivos nuevos o modificados de OneDrive se respaldarán automáticamente en B2.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OneDrive to B2 backup" class="img-large img-center" />

## Consejos para migraciones grandes de OneDrive

- **Migra carpeta por carpeta** — divide las cuentas grandes en bloques de 100–500 GB.
- **Evita las horas pico** — Microsoft limita el acceso a la API de OneDrive bajo cargas pesadas.
- **Usa límites de ancho de banda** — establece un límite en RcloneView para no afectar el trabajo diario durante el horario laboral.
- **Mantén OneDrive activo** — no elimines archivos de OneDrive hasta que B2 esté verificado.

## Cómo empezar

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Agrega los remotos de OneDrive y Backblaze B2** a través del asistente de configuración de RcloneView.
3. **Crea tu bucket de B2** en el panel de Backblaze.
4. **Copia, verifica y luego decide** si mantener OneDrive como almacenamiento activo o cambiar por completo a B2.

Menos dependencia de Microsoft, costos más bajos y compatibilidad con S3 — Backblaze B2 es una zona de aterrizaje inteligente para los archivos de OneDrive.

---

**Guías relacionadas:**

- [Copia de seguridad de Dropbox a Backblaze B2](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [Migra Google Drive a OneDrive](https://rcloneview.com/support/blog/migrate-google-drive-to-onedrive-rcloneview)
- [Costos ocultos del almacenamiento en la nube — Ahorra dinero con RcloneView](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)

<CloudSupportGrid />
