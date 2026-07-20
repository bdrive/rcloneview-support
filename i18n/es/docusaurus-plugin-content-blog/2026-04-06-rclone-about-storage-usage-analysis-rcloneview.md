---
slug: rclone-about-storage-usage-analysis-rcloneview
title: "Analiza el uso de almacenamiento en la nube y las cuotas con RcloneView"
authors:
  - tayson
description: "Monitorea el uso del almacenamiento en la nube, revisa cuotas, identifica carpetas grandes y planifica la capacidad en múltiples proveedores con el panel de RcloneView y el comando rclone about."
keywords:
  - rclone about storage usage
  - cloud storage quota monitor
  - rcloneview storage analysis
  - check cloud storage space
  - cloud capacity planning
  - storage usage per remote
  - rclone disk usage
  - cloud quota monitoring tool
  - compare cloud storage usage
  - rcloneview dashboard storage
tags:
  - RcloneView
  - feature
  - cloud-storage
  - guide
  - tips
  - cost-optimization
  - dashboard
  - monitoring
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Analiza el uso de almacenamiento en la nube y las cuotas con RcloneView

> Antes de poder optimizar los costos en la nube, necesitas ver exactamente a dónde va tu almacenamiento. RcloneView reúne en un solo lugar los datos de uso y la información de cuota de cada remoto conectado.

La mayoría de los costos de almacenamiento en la nube dependen del volumen. Ya sea que pagues por gigabyte en S3, te mantengas dentro de un nivel gratuito en Google Drive, o compartas una cuota de equipo en OneDrive, saber cuánto espacio consume cada remoto es esencial para el control de costos y la planificación de capacidad. El comando `about` de rclone consulta la API de un proveedor para obtener el espacio total, usado, libre y en papelera. RcloneView muestra esta información de forma visual para que puedas monitorear todos tus remotos sin cambiar entre los paneles de cada proveedor.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Qué reporta Rclone About

El comando `rclone about` devuelve métricas de almacenamiento directamente desde la API del proveedor. Una respuesta típica incluye:

| Métrica | Descripción |
|--------|-------------|
| **Total** | Cuota total de almacenamiento asignada a la cuenta |
| **Usado** | Espacio consumido actualmente por archivos |
| **Libre** | Espacio disponible restante |
| **Papelera** | Espacio usado por elementos en la papelera/reciclaje |
| **Otro** | Espacio usado por otros servicios (por ejemplo, Gmail para cuentas de Google) |

No todos los proveedores reportan todos los campos. Los servicios compatibles con S3, por ejemplo, a menudo solo reportan el espacio usado, ya que los buckets no tienen una cuota fija. Google Drive reporta los cinco campos, lo que lo convierte en uno de los más informativos.

## Ver el uso de almacenamiento en RcloneView

RcloneView ofrece una vista visual de tus remotos conectados:

1. Abre **RcloneView** y navega al **Panel** o al **Explorador de remotos**.
2. Selecciona el remoto que quieras inspeccionar.
3. Consulta el resumen de almacenamiento que muestra el espacio usado, libre y total.

Para una revisión rápida de todos los remotos, el panel te ofrece una vista de un vistazo del consumo de cada proveedor conectado.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView remote list showing connected cloud providers" class="img-large img-center" />

## Ejecutar Rclone About desde la terminal

Para obtener cifras exactas o hacer scripting, abre la **Terminal** en RcloneView y ejecuta:

```bash
rclone about gdrive:
```

Salida de ejemplo:

```
Total:   15 GiB
Used:    9.2 GiB
Free:    5.8 GiB
Trashed: 1.4 GiB
Other:   3.1 GiB
```

Para revisar varios remotos rápidamente:

```bash
rclone about gdrive:
rclone about onedrive:
rclone about s3-backup:
```

Usa `--json` para obtener una salida legible por máquina que se pueda analizar mediante scripts:

```bash
rclone about gdrive: --json
```

## Identificar carpetas grandes

Conocer el uso total es un buen inicio. Determinar qué carpetas consumen más espacio requiere el comando `rclone size`:

```bash
rclone size gdrive:/Photos
```

Esto devuelve el conteo total y el tamaño de todos los archivos en la ruta especificada. Para encontrar tus carpetas más grandes, ejecútalo contra los directorios de nivel superior y compara los resultados.

En el **Explorador** de RcloneView, puedes navegar por cualquier remoto y ver los tamaños de las carpetas mientras te desplazas, lo que facilita encontrar los grandes consumidores de espacio sin ejecutar comandos.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView explorer browsing cloud folders with size information" class="img-large img-center" />

## Monitoreo de cuotas entre proveedores

Los distintos proveedores manejan las cuotas de forma diferente:

| Proveedor | Modelo de cuota | Notas |
|----------|------------|-------|
| **Google Drive** | Compartida entre Drive, Gmail y Photos | 15 GB gratis; los planes Workspace varían |
| **OneDrive** | Asignación por usuario | 5 GB gratis; los planes Microsoft 365 ofrecen 1 TB o más |
| **Dropbox** | Cuota por cuenta | 2 GB gratis; Plus ofrece 2 TB |
| **Backblaze B2** | Pago por uso, sin cuota fija | Facturado mensualmente por GB almacenado |
| **Amazon S3** | Pago por uso, sin cuota fija | Precios escalonados según la clase de almacenamiento |
| **pCloud** | Cuota de por vida o por suscripción | 10 GB gratis; planes de por vida disponibles |

Para proveedores de pago por uso como S3 y B2, no hay una cuota que alcanzar, pero monitorear el uso controla directamente tu factura. Para proveedores basados en cuotas, quedarse sin espacio interrumpe silenciosamente las sincronizaciones y las copias de seguridad.

## Planificar la capacidad y estimar costos

Usa los datos de uso de almacenamiento para planificar con anticipación:

1. **Sigue el crecimiento a lo largo del tiempo** -- ejecuta `rclone about` periódicamente y registra los resultados. Una simple hoja de cálculo que rastree el uso mensual por remoto revela tendencias.
2. **Estima los costos mensuales** para proveedores de pago por uso:
   - Backblaze B2: $0.006/GB/mes por almacenamiento
   - Amazon S3 Standard: $0.023/GB/mes
   - Wasabi: $0.0069/GB/mes (mínimo de 1 TB)
3. **Configura alertas** -- si un remoto basado en cuota supera el 80% de uso, planifica una limpieza o una actualización.
4. **Compara proveedores** -- si un remoto es más barato por GB, considera migrar allí los datos fríos.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare storage consumption across cloud providers" class="img-large img-center" />

## Recuperar espacio de la papelera

Uno de los consumidores de almacenamiento más pasados por alto es la papelera. Tanto Google Drive como OneDrive cuentan los archivos en la papelera dentro de tu cuota. La salida de `rclone about` muestra explícitamente el espacio en papelera, y puedes recuperarlo con:

```bash
rclone cleanup gdrive:
```

En RcloneView, esto está disponible a través de la interfaz sin necesidad de escribir comandos. Recuperar el espacio en papelera suele ser la forma más rápida de liberar gigabytes sin eliminar ningún archivo activo.

## Comparar el uso entre proveedores

Al gestionar múltiples cuentas en la nube, una comparación entre proveedores ayuda a tomar decisiones como:

- **Dónde almacenar nuevas copias de seguridad** -- dirige los datos al remoto con más margen disponible.
- **Qué proveedor escalar** -- si los costos de S3 crecen más rápido que los de B2, investiga por qué.
- **Cuándo archivar** -- mueve datos de acceso poco frecuente desde almacenamiento costoso a un nivel más económico.

El panel multi-remoto de RcloneView hace esta comparación inmediata. En lugar de iniciar sesión en tres paneles de proveedores distintos, ves todos los datos de uso en una sola interfaz.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView dashboard showing multiple remote storage status" class="img-large img-center" />

## Buenas prácticas

- **Revisa las cuotas antes de iniciar transferencias grandes** -- un destino lleno provocará fallos silenciosos.
- **Monitorea el uso de la papelera** y límpiala regularmente para evitar un consumo fantasma de la cuota.
- **Registra el uso mensualmente** para el seguimiento de costos y el análisis de tendencias.
- **Usa `rclone size`** en carpetas específicas para encontrar los mayores consumidores de espacio.
- **Automatiza las revisiones** guardando comandos `rclone about` como tareas programadas en RcloneView.

---

**Guías relacionadas:**

- [Limpia el almacenamiento en la nube: vacía la papelera y elimina versiones antiguas](https://rcloneview.com/support/blog/cleanup-empty-trash-cloud-storage-rcloneview)
- [Comparación de Wasabi vs Backblaze B2 vs IDrive e2](https://rcloneview.com/support/blog/wasabi-vs-backblaze-b2-vs-idrive-e2-comparison-rcloneview)
- [Google Drive vs OneDrive para empresas](https://rcloneview.com/support/blog/google-drive-vs-onedrive-for-business-rcloneview)

<CloudSupportGrid />
