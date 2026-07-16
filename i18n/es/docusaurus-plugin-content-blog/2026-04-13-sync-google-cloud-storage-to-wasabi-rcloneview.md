---
slug: sync-google-cloud-storage-to-wasabi-rcloneview
title: "Sincronizar Google Cloud Storage con Wasabi — Copia de seguridad rentable con RcloneView"
authors:
  - tayson
description: "Traslada datos de Google Cloud Storage a almacenamiento compatible con S3 de Wasabi para lograr un ahorro de costos significativo. RcloneView gestiona ambos proveedores y automatiza el trabajo de sincronización."
keywords:
  - Sincronización de Google Cloud Storage a Wasabi
  - Migración de GCS a Wasabi con RcloneView
  - Copia de seguridad en la nube rentable con Wasabi
  - Alternativa de copia de seguridad para Google Cloud Storage
  - Migración a la nube compatible con S3
  - Optimización de costos de almacenamiento en la nube
  - Transferencia de GCS a Wasabi
  - RcloneView Google Cloud Wasabi
tags:
  - google-cloud-storage
  - wasabi
  - cloud-to-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincronizar Google Cloud Storage con Wasabi — Copia de seguridad rentable con RcloneView

> Wasabi ofrece almacenamiento en la nube de acceso frecuente a una fracción del costo por GB de Google Cloud Storage — RcloneView conecta ambos y automatiza la migración o la sincronización continua.

Google Cloud Storage está profundamente integrado en los flujos de trabajo de GCP, pero sus costos de almacenamiento se acumulan rápidamente en conjuntos de datos grandes. Wasabi ofrece almacenamiento de acceso frecuente compatible con S3 con un modelo de precios fijo por TB y sin cargos de salida (egress), lo que lo hace atractivo como destino secundario de copia de seguridad o como destino de migración para ahorrar costos. RcloneView admite ambos proveedores y gestiona el trabajo de sincronización desde una única interfaz gráfica.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Google Cloud Storage

Google Cloud Storage (GCS) se puede conectar en RcloneView de dos maneras: usando el proveedor nativo de GCS o la interfaz compatible con S3. Para la mayoría de las configuraciones, el proveedor nativo de GCS es sencillo. Abre **Remote Manager**, haz clic en **New Remote** y selecciona **Google Cloud Storage**.

Deberás proporcionar tu **Project Number** (que se encuentra en la Consola de GCP, en Project Info). La autenticación utiliza una clave JSON de cuenta de servicio u OAuth. Para el acceso mediante cuenta de servicio, descarga la clave JSON desde la Consola de GCP → IAM & Admin → Service Accounts, y especifica la ruta en la configuración del remoto. Para OAuth, RcloneView abre tu navegador para la autorización de tu cuenta de Google.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring Google Cloud Storage and Wasabi remotes in RcloneView" class="img-large img-center" />

## Conectar Wasabi

En **Remote Manager**, haz clic en **New Remote** y selecciona **S3 Compatible** (Wasabi es compatible con S3). Completa:

- **Access Key ID**: desde la consola de Wasabi, en Access Keys
- **Secret Access Key**: el secreto correspondiente
- **Endpoint**: el endpoint de Wasabi para tu región (por ejemplo, `s3.us-east-1.wasabisys.com` o `s3.eu-central-1.wasabisys.com`)

Guarda el remoto. Confirma que tus buckets de Wasabi aparezcan en el Explorador de Archivos antes de continuar.

## Configurar el trabajo de sincronización

Ve a **Jobs** y haz clic en **New Job**. Establece Google Cloud Storage como origen — selecciona el bucket específico o la ruta de la carpeta. Establece Wasabi como destino con el bucket y la ruta de destino.

En el paso 2 del asistente del trabajo, configura una sincronización confiable a gran escala:

- **Transfers**: 8–16 (tanto GCS como Wasabi manejan bien la alta concurrencia)
- **Checkers**: 8–16 (controla cuántas verificaciones de igualdad se ejecutan en paralelo)
- **Checksum verification**: actívalo para confirmar la integridad de los datos
- **Dry Run**: actívalo primero para revisar el alcance

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time monitoring of Google Cloud Storage to Wasabi sync" class="img-large img-center" />

## Programar la sincronización continua

Si GCS sigue siendo tu almacenamiento principal y Wasabi funciona como un nivel de copia de seguridad rentable, programa un trabajo de sincronización recurrente. Con una licencia PLUS, abre la configuración del trabajo y agrega una programación cron en el paso 3 — por ejemplo, `0 2 * * *` para copias de seguridad nocturnas a las 2 AM.

La sincronización incremental de RcloneView significa que cada ejecución posterior a la migración inicial solo transfiere archivos modificados o nuevos. La pestaña **Job History** registra cada ejecución con recuentos de archivos, datos transferidos, velocidad y errores, brindándote un registro de auditoría claro.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Google Cloud Storage to Wasabi sync in RcloneView" class="img-large img-center" />

## Consideraciones de costos

El modelo de precios de Wasabi no tiene tarifas por solicitud ni cargos de salida (dentro de los límites de uso), lo que lo hace predecible para conjuntos de datos grandes. La migración de GCS → Wasabi sí genera costos de salida de GCS, pero este es un gasto único para las migraciones. Para las copias de seguridad continuas, los datos se originan en tus servidores o canalizaciones de aplicaciones, por lo que el impacto de la salida depende de tu configuración.

## Cómo empezar

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Conecta Google Cloud Storage en **Remote Manager** usando tu Project Number y la clave JSON de cuenta de servicio u OAuth.
3. Conecta Wasabi usando Access Key, Secret Key y el endpoint regional.
4. Crea un trabajo de sincronización, ejecuta Dry Run para confirmar el alcance y luego prográmalo para copias de seguridad automatizadas continuas.

Trasladar las copias de seguridad de GCS a Wasabi normalmente ofrece una reducción significativa de los costos de almacenamiento sin comprometer la accesibilidad.

---

**Guías relacionadas:**

- [Gestionar Scaleway Object Storage con RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Migrar de Wasabi a Cloudflare R2 con RcloneView](https://rcloneview.com/support/blog/migrate-wasabi-to-cloudflare-r2-rcloneview)
- [Automatizar copias de seguridad diarias en la nube con RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
