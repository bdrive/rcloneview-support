---
slug: sharepoint-to-google-drive-migration-rcloneview
title: "Domina la migración de SharePoint a Google Drive con RcloneView: una guía empresarial paso a paso"
authors:
  - tayson
description: "Migraciones de SharePoint a Google Drive visuales, con control de velocidad y auditables con RcloneView, diseñadas para equipos de TI corporativos que buscan una transición sin CLI y compatible con políticas."
keywords:
  - SharePoint a Google Drive
  - mover archivos de SharePoint a Drive
  - RcloneView SharePoint
  - migración a la nube para empresas
  - herramienta de migración de Microsoft 365
  - migrar biblioteca de documentos de sharepoint
  - migración de google drive workspace
  - conector rclone sharepoint
  - office 365 a google drive
  - guía de migración de sharepoint
tags:
  - migration
  - sharepoint
  - google-drive
  - microsoft-365
  - business
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Domina la migración de SharePoint a Google Drive con RcloneView: una guía empresarial paso a paso

> Mueve bibliotecas de documentos de SharePoint a Google Drive (Workspace) con un flujo visual, con control de velocidad y repetible que los administradores corporativos pueden ejecutar sin tocar la CLI.

RcloneView envuelve los conectores de SharePoint y Google Drive de rclone en una GUI con registros aptos para auditorías, programador y monitoreo en tiempo real. Esta guía muestra cómo planificar y ejecutar una migración por etapas para que puedas mover sitios de equipo, carpetas de proyecto o unidades de negocio completas sin tiempo de inactividad.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Por qué usar RcloneView para SharePoint → Google Drive

- No se requiere CLI: configura los remotos de Microsoft 365 (SharePoint/OneDrive for Business) y Google Drive mediante diálogos guiados.
- Apto para empresas: controla la velocidad de las solicitudes para evitar los límites de tasa de las API de SharePoint y Drive, y programa las transiciones durante ventanas de mantenimiento.
- Visibilidad operativa: explorador en paralelo, comparar y copiar, historial de trabajos y monitoreo de transferencias en vivo para auditorías.
- Movimientos flexibles: copia única, sincronización bidireccional o sincronizaciones incrementales por etapas que mantienen alineados el origen y el destino.

## Requisitos previos (listos para empresas)

- RcloneView instalado y con la sesión iniciada con cuentas que tengan acceso al sitio de SharePoint de destino y al destino de Google Drive (Shared Drive o Mi unidad).
- Consentimiento del administrador otorgado para Microsoft Graph si tu tenant restringe aplicaciones de terceros.
- Una ventana de transición (o permitir sincronizaciones por etapas) y suficiente cuota de Drive/Shared Drive.

## Paso 1 — Conectar los remotos de SharePoint y Google Drive

1) En **RcloneView → Settings → Remote Storage**, agrega un nuevo remoto.  
<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

2) Elige **OneDrive/SharePoint (Microsoft 365)**, inicia sesión con la cuenta que posee o puede acceder al sitio, y selecciona el **Sitio / Biblioteca de documentos** correcto (por ejemplo, `/sites/Marketing/Shared Documents`).  
3) Agrega **Google Drive** (Workspace): elige si el destino será **Mi unidad** o una **Shared Drive** específica para el proyecto.  
4) Prueba cada remoto y guarda.

## Paso 2 — Mapear las bibliotecas y carpetas de destino correctas

- Para cada biblioteca de SharePoint, anota la ruta que seleccionaste en el diálogo de conexión; ábrela en el Explorador para confirmar la raíz (deberías ver las carpetas de departamento esperadas).
- Crea la estructura de carpetas correspondiente en Google Drive/Shared Drive si aún no existe.
- Si tienes aislamiento por equipo, repite con múltiples remotos de SharePoint (uno por sitio o por colección sensible).

## Paso 3 — Validar con una comprobación en paralelo

- Abre ambos remotos en el Explorador de dos paneles.  
<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />
- Usa **Compare** para previsualizar diferencias (tamaño, archivos faltantes) antes de copiar.  
<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />
- Copia primero una pequeña carpeta piloto para verificar permisos, archivos con versiones y reglas de nomenclatura (los caracteres `# % & { }` de SharePoint se vuelven válidos en Drive, pero las rutas largas pueden requerir limpieza).

## Paso 4 — Elegir tu modo de migración

- **Copia única (la más rápida)**: usa **Copy** para un traslado directo a la nueva Shared Drive. Ideal cuando el origen queda en modo de solo lectura durante la transición.
- **Sincronización (bidireccional opcional)**: usa **Sync** cuando los usuarios sigan editando archivos durante la migración; termina con una sincronización incremental final en la ventana de transición.
- **Del lado del servidor cuando sea posible**: si tu SharePoint y Drive son accesibles por internet, RcloneView aprovecha las copias del lado del servidor donde sea compatible para reducir la salida de datos.

Arrastrar y soltar también funciona para movimientos puntuales y correcciones rápidas.  
<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

## Paso 5 — Crear un trabajo repetible y programar la transición

1) En **Jobs**, crea un nuevo trabajo de **Copy** o **Sync** desde la biblioteca de SharePoint hacia la ruta de Shared Drive de destino.  
2) Configura **Bandwidth limits** y **Transfers** para respetar el control de velocidad de Microsoft 365 y Google Drive (por ejemplo, `tpslimit`, `--drive-chunk-size`, o los controles deslizantes de **Max Transfer**).  
3) Guarda y luego programa el movimiento masivo fuera del horario laboral; agrega una segunda programación para los incrementales.  
<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

## Paso 6 — Ejecutar, monitorear y manejar el control de velocidad

- Inicia el trabajo y observa el progreso en tiempo real (rendimiento, ETA, errores).  
<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />
- Si ves respuestas `throttled` o `403`/`429`, reduce las transferencias o agrega un breve retroceso; RcloneView muestra estos registros sin necesidad de abrir una terminal.
- Usa **Job History** para exportar resultados con fines de cumplimiento y reintentar cualquier objeto fallido directamente desde la UI.

## Paso 7 — Comprobaciones posteriores a la migración y entrega

- Vuelve a ejecutar **Compare** para confirmar que el destino coincide con SharePoint antes de habilitar el acceso de los usuarios.
- Verifica los permisos puntualmente: aunque las ACL de Drive no reflejan automáticamente las de SharePoint, puedes compartir de forma masiva la nueva raíz con los grupos correctos de Workspace.
- Mantén el trabajo como una sincronización incremental programada durante algunos días si los equipos siguen activos en SharePoint, y luego cambia el origen a solo lectura.

## Consejos de solución de problemas para entornos corporativos

- **Sitios complejos**: conecta por sitio/biblioteca en lugar de a nivel de tenant para evitar una expansión accidental del alcance.
- **Rutas largas o caracteres especiales**: habilita la normalización Unicode de Rclone y el manejo de longitud de rutas en las opciones avanzadas; renombra los casos límite en el Explorador antes de la transición.
- **Soberanía de datos**: para equipos regulados, apunta a Shared Drives regionales y mantén una auditoría de las exportaciones del historial de trabajos.

## Recursos relacionados

- [Agregar remoto mediante inicio de sesión con navegador (OAuth)](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [Agregar Google Drive](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [Comparar el contenido de carpetas](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Sincronizar almacenamientos remotos al instante](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)
- [Crear trabajos de sincronización](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Programación de trabajos](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Monitoreo de transferencias en tiempo real](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [Montar almacenamiento en la nube como unidad local](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

## Conclusión

RcloneView brinda a los equipos de TI una ruta visual y de bajo riesgo para migrar bibliotecas de SharePoint a Google Drive o Shared Drives. Con control de velocidad compatible con políticas, transiciones programadas y monitoreo en vivo, puedes mover datos críticos para el negocio sin scripts de línea de comandos, mantener informados a los interesados y dejar un trabajo repetible listo para futuras consolidaciones.

<CloudSupportGrid />
