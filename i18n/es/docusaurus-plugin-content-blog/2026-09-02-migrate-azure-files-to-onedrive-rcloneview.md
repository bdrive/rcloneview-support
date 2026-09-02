---
slug: migrate-azure-files-to-onedrive-rcloneview
title: "Migrar Azure Files a OneDrive — Transfiera archivos con RcloneView"
authors:
  - casey
description: "Migre Azure File Storage a OneDrive con RcloneView. Mueva archivos empresariales entre nubes con arrastrar y soltar, trabajos de sincronización y vistas previas de dry-run."
keywords:
  - migrar azure files a onedrive
  - migración de azure file storage
  - migración a la nube de onedrive
  - transferencia de azure a onedrive
  - migración de nube a nube
  - RcloneView azure files
  - RcloneView onedrive
  - mover azure file storage a onedrive
  - transferencia de archivos entre nubes
  - herramienta de migración a la nube para empresas
tags:
  - RcloneView
  - azure-files
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar Azure Files a OneDrive — Transfiera archivos con RcloneView

> Mueva un recurso compartido completo de Azure File Storage a OneDrive sin tocar la línea de comandos ni alternar entre dos consolas distintas.

Los equipos que habilitaron Azure File Storage para un proyecto o un recurso compartido departamental a menudo lo superan una vez que el resto de la empresa estandariza Microsoft 365 y OneDrive para la colaboración diaria. Volver a subir todo manualmente a través de dos portales web diferentes es lento y propenso a errores. RcloneView abre ambos remotos uno junto al otro en una sola ventana y le permite mover archivos directamente entre ellos, de modo que la migración se convierte en un único trabajo rastreable en lugar de una maratón manual de copiar y pegar. A diferencia de las herramientas que solo montan unidades, RcloneView también sincroniza y compara carpetas, incluso con la licencia FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecte Azure Files y OneDrive uno junto al otro

Para añadir Azure File Storage necesita el nombre de la cuenta de almacenamiento, la clave compartida y el nombre del recurso compartido de la página de claves de acceso de su Azure Portal — el asistente de configuración de remotos de RcloneView solicita exactamente estos tres campos. OneDrive, en cambio, usa OAuth basado en navegador: haga clic en New Remote, elija OneDrive e inicie sesión a través de la ventana emergente que RcloneView abre por usted. No hay claves API que copiar ni pegar.

Una vez configurados ambos remotos, abra cada uno en su propio panel de Explorer usando el diseño de dos paneles (o cuatro paneles). Verá el árbol de carpetas del recurso compartido de Azure en un lado y la estructura de OneDrive en el otro, con el número de archivos y los tamaños mostrados en el pie de cada panel.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir Azure File Storage y OneDrive como remotos en RcloneView" class="img-large img-center" />

## Transfiera o sincronice archivos entre los dos remotos

Para una migración puntual, seleccione las carpetas o archivos en el panel de Azure Files y arrástrelos al panel de OneDrive — arrastrar entre dos remotos diferentes realiza una copia, dejando intacto el origen de Azure hasta que esté listo para limpiarlo. Para un recurso compartido más grande, use en su lugar el asistente de Sync: elija Azure Files como origen y OneDrive como destino, y luego ejecute primero un Dry Run para previsualizar exactamente qué archivos se copiarán antes de que se mueva algo realmente.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferencia de archivos de Azure File Storage a OneDrive" class="img-large img-center" />

Habilitar la comparación por suma de verificación en el paso Advanced Settings de la sincronización hace que RcloneView verifique el contenido de los archivos por hash y tamaño en lugar de solo por nombre, lo cual importa cuando una migración debe poder demostrarse completa.

## Automatice la migración y siga el progreso

Los recursos compartidos grandes rara vez terminan en una sola sesión. Guarde la transferencia como un trabajo en Job Manager para poder volver a ejecutarla y capturar los archivos añadidos a Azure Files tras el primer paso, y revise la pestaña Transferring en la Info View inferior para ver el progreso, la velocidad y el número de archivos en tiempo real mientras se ejecuta.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Programación de un trabajo de sincronización recurrente de Azure Files a OneDrive en RcloneView" class="img-large img-center" />

Job History registra cada ejecución — hora de inicio, duración, estado y tamaño total transferido — para que tenga un registro que confirme que la transición se completó antes de dar de baja el recurso compartido de Azure.

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añada su remoto de Azure File Storage con el nombre de cuenta, la clave compartida y el nombre del recurso compartido.
3. Añada OneDrive mediante el flujo de inicio de sesión basado en navegador.
4. Ejecute un Dry Run, luego ejecute el trabajo de sincronización y confirme los resultados en Job History.

Una migración limpia y verificable siempre supera a una copia manual apresurada.

---

**Guías relacionadas:**

- [Gestione Azure Files Storage — Sincronice y respalde archivos con RcloneView](https://rcloneview.com/support/blog/manage-azure-files-cloud-sync-rcloneview)
- [Gestione el almacenamiento de OneDrive — Sincronice y respalde archivos con RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Solucione errores de conexión de Azure Files con RcloneView](https://rcloneview.com/support/blog/fix-azure-files-connection-errors-rcloneview)

<CloudSupportGrid />
