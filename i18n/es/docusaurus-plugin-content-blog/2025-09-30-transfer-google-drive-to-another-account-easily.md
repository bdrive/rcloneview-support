---
slug: transfer-google-drive-to-another-account-easily
title: Transfiere Google Drive a otra cuenta fácilmente con RcloneView
authors:
  - jay
description: Mueve archivos entre cuentas de Google Drive con RcloneView. Planifica migraciones, respeta las cuotas de Google y automatiza transferencias, sin necesidad de línea de comandos.
keywords:
  - rcloneview
  - transferencia de google drive
  - migrar google drive
  - transferencia entre cuentas
  - sincronización en la nube
  - rclone gui
tags:
  - RcloneView
  - google-drive
  - cloud-sync
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Transfiere Google Drive a otra cuenta fácilmente con RcloneView

> Cambia de cuenta sin perder el control. RcloneView envuelve el backend de Google Drive de rclone en una GUI amigable, para que puedas entregar, consolidar o archivar datos entre cuentas de Drive con claridad, y sin necesidad de scripts.

## ¿Por qué mover datos entre cuentas de Google Drive?

Las graduaciones, los cambios de trabajo, las fusiones y los simples proyectos de limpieza a menudo requieren mover archivos entre cuentas de Google. Las utilidades de transferencia integradas de Google ayudan, pero dejan vacíos: solo cubren My Drive, ignoran los filtros granulares y no pueden preparar ni programar migraciones. [Google Help](https://support.google.com/accounts/answer/6386856?hl=en&utm_source=chatgpt.com) [Google Workspace Admin Help](https://support.google.com/a/answer/1247799?hl=en)

<!-- truncate -->

### Conoce los límites antes de empezar

- **Tamaño por archivo**: Los formatos que no son de Google pueden alcanzar hasta **5 TB** por elemento; Docs, Sheets y Slides tienen límites separados. [Google Help](https://support.google.com/drive/answer/37603?hl=en)
- **Cuota diaria de transferencia**: La API de Drive permite **750 GB** de subidas (y operaciones de copia) por usuario y día; el límite se reinicia cada 24 horas. [Google for Developers](https://developers.google.com/drive/api/guides/limits)
- **Reglas de propiedad**: Las transferencias personales cubren solo Gmail + My Drive. Los administradores de Workspace pueden reasignar la propiedad dentro de un dominio, pero las unidades compartidas entre dominios requieren copiar. [Google Help](https://support.google.com/accounts/answer/6386856?hl=en) [Google Workspace Admin Help](https://support.google.com/a/answer/1247799?hl=en)

### Enfoques de un vistazo

| Enfoque | Ideal para | Limitaciones |
|---|---|---|
| Herramienta "Transferir tu contenido" de Google | Estudiantes que dejan la escuela o pasan a un Gmail personal | Solo My Drive + Gmail; sin filtros; no puede apuntar a unidades compartidas |
| Compartir con una cuenta secundaria y luego copiar | Entregas pequeñas dentro de un mismo dominio | Trabajo manual; el historial de versiones y los comentarios pueden fragmentarse |
| Transferencia entre cuentas con RcloneView | My Drive + unidades compartidas mixtas, movimientos de carpetas granulares, sincronizaciones repetibles | Requiere remotos de rclone para cada cuenta (gestionado por el asistente de RcloneView) |

<!-- Obsidian note: CTA 컴포넌트 -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Preparación

1. **Aclara la propiedad y el alcance**: Enumera las carpetas (My Drive y unidades compartidas) que necesitan moverse o permanecer. Decide quién debe ser propietario de las copias de destino.  
2. **Revisa las cuotas**: Comprueba la disponibilidad de almacenamiento y anota cualquier archivo de video grande que pueda alcanzar el límite de 750 GB/día.  
3. **Planifica las ventanas de cambio**: Comunica un período de congelación o un cronograma por etapas para que los colaboradores sepan dónde trabajar.  
4. **Etiqueta los filtros**: Decide las reglas de inclusión/exclusión (por ejemplo, omitir `/Backups/old/` o mover solo `/Projects/2024/`).  
5. **Respalda las carpetas críticas**: Para contenido regulado, exporta un manifiesto o historial de versiones antes de mover.

🔍 Guías útiles  
- [Configuración rápida de OAuth de Google en RcloneView](/howto/remote-storage-connection-settings/add-oath-online-login)  
- [Agregar remotos de unidad compartida de Google](/howto/remote-storage-connection-settings/connect-using-cli/add-google-shared-drive)

## Conecta ambas cuentas de Google Drive en RcloneView

RcloneView convierte `rclone config` en un asistente guiado, para que puedas registrar cada cuenta de Google una vez y reutilizarla para transferencias.

1. Abre **RcloneView** → haz clic en **`+ New Remote`**.  
2. Elige **Google Drive** → inicia sesión con la **cuenta de origen** → dale al remoto un nombre claro (por ejemplo, `Drive-Source`).  
3. Repite para la **cuenta de destino** (por ejemplo, `Drive-Destination`).  
4. Si hay unidades compartidas involucradas, habilítalas en el asistente o agrega el ID de la unidad.  
5. Confirma que ambos remotos aparecen en el panel del Explorador y que puedes navegar por las carpetas de cada lado.

<img src="/support/images/en/blog/open-multiple-google-drive-remotes.png" alt="open multiple google drive remotes" class="img-medium img-center" />

## Elige el flujo de transferencia adecuado en RcloneView

Comienza con una carpeta piloto antes de copiar toda la cuenta. Una vez que la muestra funcione bien, continúa con movimientos más amplios o sincronizaciones programadas.

### Arrastrar y soltar (movimientos manuales)

Abre el remoto de origen a la izquierda y el de destino a la derecha, luego arrastra archivos o carpetas entre ambos. Perfecto para entregas puntuales o mover unas pocas carpetas de una unidad compartida.  
👉 Ver más: [Copiar archivos mediante arrastrar y soltar](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

### Comparar y copiar (previsualizar diferencias)

Ejecuta **Comparar** para listar qué es nuevo, ha cambiado o falta entre ambas cuentas. Revisa la diferencia, deselecciona lo que quieras omitir y luego copia. Ideal para migraciones por etapas o para limpiar después del período de congelación.  
👉 Ver más: [Comparar y gestionar archivos](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-medium img-center" />
### Sincronización y trabajos programados (automatiza los cambios)

Usa **Sync** para reflejar las carpetas seleccionadas hasta que el destino reemplace por completo al origen. Ejecuta siempre una **prueba en seco (dry-run)**, luego guarda el trabajo y programa ejecuciones nocturnas u horarias hasta completar el cambio.  
👉 Ver más:  
- [Sincronizar almacenamientos remotos](/howto/rcloneview-basic/synchronize-remote-storages)  
- [Crear trabajos de sincronización](/howto/rcloneview-basic/create-sync-jobs)  
- [Programación y ejecución de trabajos](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run a saved sync job in RcloneView" class="img-medium img-center" />

**Consejos profesionales**

- Divide las migraciones en lotes que se mantengan por debajo de la cuota de API de 750 GB/día; pon en cola el siguiente lote una vez que se reinicie el límite.  
- Al copiar contenido de una unidad compartida a My Drive personal, verifica los permisos y vuelve a compartir las carpetas clave desde la cuenta de destino.  
- Vuelve las carpetas de origen de solo lectura durante la sincronización final para que la última diferencia sea pequeña y predecible.  
- Exporta los registros de rclone desde el historial de trabajos de RcloneView para mantener un registro de auditoría de qué se movió y cuándo.

## Después de la migración

- **Verifica la propiedad**: Confirma que la cuenta de destino es propietaria de los archivos críticos (especialmente Docs/Sheets) y que los colaboradores conservan el acceso.  
- **Reconstruye accesos directos y marcadores**: Los accesos directos de Google no se trasladan; recrea los enlaces importantes en la nueva cuenta.  
- **Limpia el origen**: Archiva o elimina las carpetas antiguas una vez que el destino sea la fuente autorizada, para evitar ediciones accidentales.  
- **Supervisa los permisos de la unidad compartida**: Los equipos grandes pueden necesitar actualizaciones de membresía de grupo para adaptarse a la nueva estructura de propiedad.

## Conclusión: puntos clave

- Las herramientas de transferencia nativas de Google son útiles, pero se limitan a acciones generales.  
- RcloneView te ofrece selección granular de carpetas, previsualizaciones y sincronizaciones programadas entre cuentas de Google Drive, todo completamente basado en GUI.  
- Planifica en torno a los límites de cuota de Google, haz una prueba piloto de tu movimiento y documenta el cambio para que tus colegas sepan dónde encontrar los archivos más recientes.

## Preguntas frecuentes

**¿RcloneView conserva las versiones de archivos y los comentarios?**  
Los archivos que no son de Google (PDF, videos, ZIP) permanecen intactos. Google Docs/Sheets/Slides conservan el contenido pero generan nuevos ID al copiarse; RcloneView los muestra como archivos nuevos para que puedas volver a compartirlos según sea necesario.

**¿Puedo mover carpetas de unidades compartidas entre dominios?**  
Google no permite que las unidades compartidas cambien de dominio directamente. Usa RcloneView para copiar el contenido a una unidad compartida propiedad del dominio de destino y luego vuelve a aplicar los permisos. [Google Workspace Admin Help](https://support.google.com/a/answer/7212025?hl=en)

**¿Qué sucede si alcanzo la cuota de 750 GB/día?**  
Las transferencias se pausan con un error de límite de velocidad. Espera 24 horas (o pasa a otra cuenta con cuota disponible) y reanuda el trabajo. Los registros de RcloneView muestran dónde se detuvo la transferencia para que puedas continuar sin duplicar archivos.

**¿Listo para hacer que las transferencias entre cuentas sean solo otro elemento de tu lista de tareas?**

<CloudSupportGrid />
