---
slug: sync-google-drive-to-box-rcloneview
title: "Sincronizar Google Drive con Box — Copia de seguridad en la nube con RcloneView"
authors:
  - kai
description: "Aprende a sincronizar Google Drive con Box usando RcloneView. Transfiere archivos entre ambas plataformas, automatiza copias de seguridad entre nubes y mantén a tus equipos sincronizados."
keywords:
  - sincronizar Google Drive con Box
  - Google Drive Box RcloneView
  - sincronización nube a nube RcloneView
  - copia de seguridad Google Drive Box
  - migrar Google Drive Box
  - transferencia entre nubes RcloneView
  - automatizar copia de seguridad Google Drive Box
  - sincronización Google Workspace Box
  - copia de seguridad en la nube Box RcloneView
  - transferencia de archivos Google Drive Box
tags:
  - google-drive
  - box
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincronizar Google Drive con Box — Copia de seguridad en la nube con RcloneView

> Cuando tu equipo almacena contenido en Google Workspace y en Box, RcloneView cierra la brecha sin necesidad de escribir ni un solo script.

Muchas organizaciones mantienen archivos activos en Google Drive mientras Box funciona como archivo de cumplimiento normativo, portal de clientes o recurso compartido departamental. Mantener sincronizadas ambas plataformas de forma manual es propenso a errores y consume mucho tiempo. RcloneView ofrece un flujo de trabajo sencillo, con solo apuntar y hacer clic, para extraer contenido de Google Drive y enviarlo a Box, ya sea que necesites una migración puntual, una copia de seguridad incremental nocturna o una réplica actualizada de forma continua con fines de auditoría. Como ambos servicios cuentan con soporte nativo de rclone, las transferencias son eficientes y se verifican mediante checksums.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Google Drive y Box a RcloneView

Tanto Google Drive como Box utilizan autenticación OAuth por navegador en RcloneView, lo que significa que la configuración toma menos de dos minutos por cuenta. Abre la pestaña Remote, haz clic en New Remote y elige Google Drive. Se abrirá una ventana del navegador para que inicies sesión en tu cuenta de Google y otorgues los permisos correspondientes, sin necesidad de crear claves de API manualmente. Repite los mismos pasos para Box: New Remote, elige Box y completa el flujo OAuth en el navegador.

Si trabajas con una Google Shared Drive (Team Drive), habilita la opción `shared_with_me` durante la configuración, o especifica el ID de la Shared Drive como carpeta raíz para asegurarte de que todo el contenido del equipo sea visible en el panel Explorer. Para cuentas de Box for Business, establece `box_sub_type = enterprise` al crear el remoto para desbloquear las carpetas y permisos empresariales.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Box remotes in RcloneView" class="img-large img-center" />

## Realizar una transferencia entre nubes

Abre Google Drive en el panel Explorer izquierdo y Box en el derecho. Navega hasta la carpeta de origen en Google Drive — la carpeta compartida `Projects` de tu equipo o un directorio de entregables de clientes — luego selecciona los elementos que deseas copiar y arrástralos al panel de Box. RcloneView confirma la operación de copia y transmite los datos directamente entre ambos servicios en la nube, mientras que tu equipo local actúa únicamente como plano de control, manteniendo bajo tu propio consumo de ancho de banda.

La pestaña Transferring, en la parte inferior de la pantalla, muestra el progreso en tiempo real: velocidad actual, cantidad de archivos y bytes totales transferidos. Para transferencias grandes que abarcan presentaciones, archivos de video y hojas de cálculo, el motor multihilo de RcloneView mueve varios archivos simultáneamente, reduciendo significativamente el tiempo total de transferencia en comparación con una copia secuencial.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Google Drive to Box in RcloneView" class="img-large img-center" />

## Configurar un trabajo de sincronización para copias de seguridad continuas

Para copias de seguridad recurrentes, utiliza el Job Manager para crear un trabajo de sincronización (Sync). Selecciona la carpeta de Google Drive como origen, una carpeta de Box como destino, y configura reglas de filtrado — por ejemplo, excluir los archivos de acceso directo `.gdoc` de Google Docs o limitar la sincronización al contenido modificado en los últimos 30 días. El modo de sincronización unidireccional escribe los cambios en Box sin modificar el contenido de tu Google Drive, lo que permite ejecutarlo de forma segura sobre un espacio de trabajo de producción activo.

Antes de la primera ejecución real, utiliza la opción Dry Run para previsualizar exactamente qué archivos se copiarán o sobrescribirán. El historial de trabajos (Job History) registra cada ejecución con marcas de tiempo, tamaños de transferencia y códigos de estado, ofreciendo a los equipos de cumplimiento normativo un registro de auditoría claro al que pueden remitirse.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Google Drive to Box sync job in RcloneView" class="img-large img-center" />

## Automatización con sincronización programada (licencia PLUS)

Con una licencia PLUS, puedes programar la sincronización de Google Drive → Box para que se ejecute automáticamente según cualquier intervalo de tipo crontab — cada noche a medianoche, cada lunes por la mañana, o con la periodicidad personalizada que exija la política de tu departamento de TI. Completa los campos Minute, Hour y Day-of-Week en el paso Schedule del asistente de creación de trabajos. Cada ejecución queda registrada en el historial de trabajos (Job History) con marcas de tiempo y códigos de estado, de modo que tu equipo de cumplimiento normativo pueda auditar exactamente cuándo se ejecutaron las sincronizaciones y si tuvieron éxito.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Google Drive to Box automated sync in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Agrega tu cuenta de Google Drive a través de la pestaña Remote > New Remote > Google Drive (inicio de sesión OAuth por navegador).
3. Agrega tu cuenta de Box a través de la pestaña Remote > New Remote > Box (inicio de sesión OAuth por navegador).
4. Abre ambos remotos uno junto al otro en los paneles Explorer, arrastra archivos entre ellos para una copia inmediata, o crea un trabajo de sincronización en el Job Manager para un flujo de trabajo repetible.
5. Activa la programación (licencia PLUS) para automatizar la sincronización de forma recurrente y configura notificaciones de finalización.

Una sincronización bien mantenida entre Google Drive y Box mantiene tu archivo de cumplimiento normativo actualizado y el acceso a archivos entre plataformas de forma consistente — RcloneView lo convierte en una configuración de cinco minutos.

---

**Guías relacionadas:**

- [Gestionar la sincronización y copia de seguridad en la nube de Google Drive con RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Gestionar la sincronización y copia de seguridad en la nube de Box con RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Sincronizar Box con Google Drive — Copia de seguridad en la nube con RcloneView](https://rcloneview.com/support/blog/sync-box-to-google-drive-rcloneview)

<CloudSupportGrid />
