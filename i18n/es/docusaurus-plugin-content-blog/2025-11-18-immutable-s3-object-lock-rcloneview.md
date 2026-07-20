---
slug: immutable-backups-s3-object-lock-rcloneview
title: "Copias de seguridad inmutables a prueba de ransomware con S3 Object Lock en RcloneView"
authors:
  - tayson
description: Usa RcloneView con buckets S3 Object Lock para crear copias de seguridad inmutables y a prueba de ransomware en AWS S3, Wasabi, Backblaze B2 o Cloudflare R2, con programación, verificación y restauraciones rápidas.
keywords:
  - s3 object lock
  - copias de seguridad inmutables
  - protección contra ransomware
  - rclone s3
  - rcloneview
  - wasabi object lock
  - inmutabilidad de copias de seguridad en la nube
  - copia de seguridad de cumplimiento normativo
tags:
  - RcloneView
  - backup
  - security
  - s3
  - wasabi
  - r2
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Copias de seguridad inmutables a prueba de ransomware con S3 Object Lock en RcloneView

> Deja de preocuparte por las reversiones de ransomware. Combina S3 Object Lock con el programador de RcloneView para mantener tus copias de seguridad intocables.

El almacenamiento inmutable impide que atacantes (o accidentes) eliminen o sobrescriban tus copias de seguridad antes de que puedas recuperarlas. S3 Object Lock está disponible en AWS S3, Wasabi, Backblaze B2 y Cloudflare R2. RcloneView utiliza la configuración de Object Lock y versionado del bucket mientras creas trabajos en la interfaz gráfica, sin necesidad de la línea de comandos.

<!-- truncate -->

**Documentación relevante**

- Crear trabajos de sincronización: https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs
- Programación y ejecución de trabajos (Plus): https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution
- Comparar carpetas: https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents
- Montar como unidad local: https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Por qué Object Lock + RcloneView

- Copias inmutables: las fechas de retención bloquean eliminaciones/sobrescrituras durante el periodo especificado.
- Elección de nube: funciona en S3, Wasabi, R2, B2 y gateways NAS compatibles con S3.
- Sin scripting: crea trabajos de sincronización en la interfaz gráfica, prográmalos (Plus) y conserva el historial/registros.
- Verificaciones rápidas: usa Comparar para confirmar que el destino coincide y muestra las versiones retenidas.
- Restauraciones sencillas: monta o sincroniza de vuelta desde el bucket bloqueado sin modificar la retención.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />


## Requisitos previos

- Un bucket compatible con S3 creado con Object Lock habilitado en el momento de su creación.
- Versionado habilitado en ese bucket (obligatorio para Object Lock).
- RcloneView instalado con un remoto S3 ya conectado.
- Un usuario IAM/API con permisos para `PutObject` y `PutObjectRetention`.
- (Opcional) Licencia Plus si quieres programar trabajos automáticamente.


## Paso 1: Habilitar Object Lock en el bucket

1. Crea el bucket con Object Lock activado (no se puede cambiar más adelante). En AWS S3, marca "Enable Object Lock". En Wasabi/R2/B2, elige la opción Object Lock durante la creación del bucket.
2. Activa el versionado en ese bucket.
3. Decide tu retención predeterminada: Governance (anulaciones más sencillas) o Compliance (sin anulaciones), y la duración de la retención (por ejemplo, 30-90 días).

## Paso 2: Apuntar un trabajo de sincronización/copia al bucket con Object Lock

RcloneView no expone indicadores de Object Lock por objeto. En su lugar, confía en los valores predeterminados de Object Lock y versionado del bucket, y mantén tus trabajos apuntando a ese destino.

1. Crea un nuevo trabajo de **Sincronización** (o **Copia** si no quieres eliminaciones): Origen = tus datos, Destino = el bucket con Object Lock.
2. En **Configuración avanzada**, define los recuentos de transferencia y habilita la comparación de checksum si ambos lados admiten hashes.
3. En **Configuración de filtrado**, excluye rutas de caché/temporales para no desperdiciar retención en archivos basura.
4. Guarda el trabajo para que la misma configuración se aplique en cada ejecución (Gestor de trabajos).

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />

## Paso 3: Programar copias de seguridad inmutables

1. En el asistente de trabajos (Paso 4: Programación, Plus), habilita la programación para el trabajo de copia de seguridad inmutable.
2. Establece una cadencia diaria u horaria y usa **Simular** para previsualizar las próximas ejecuciones.
3. Configura los reintentos en la Configuración avanzada para conexiones inestables.
4. Mantén una Comparación manual semanal para validar los objetos retenidos.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

## Paso 4: Verificar la retención y la integridad

- Usa Comparar para verificar los recuentos de objetos después de las subidas.
- En la consola de S3 (o en los registros de RcloneView), comprueba que los objetos muestran `Compliance`/`Governance` y la fecha de "Retain Until" esperada.
- Intenta eliminar un archivo de prueba del destino; debería bloquearse hasta que expire la ventana de retención.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

## Paso 5: Restaurar desde copias de seguridad inmutables

Cuando necesites recuperar datos:

1. Crea un nuevo trabajo: Destino (bucket con Object Lock) -> Origen (ubicación de recuperación), y ejecuta Sincronización/Copia.
2. Para restauraciones puntuales, usa Montar para explorar el bucket bloqueado y arrastrar los archivos fuera.
3. Usa Copia (no Sincronización) en las restauraciones si quieres evitar eliminar archivos más nuevos en la ubicación de recuperación.

## Buenas prácticas y ajustes

- Establece una retención lo suficientemente larga para la detección y la investigación (por ejemplo, 30-90 días).
- Usa el modo Governance para mayor flexibilidad en entornos de prueba; Compliance para producción y datos regulados.
- Ajusta los recuentos de transferencia en la Configuración avanzada para archivos multimedia grandes o imágenes de VM.
- Mantén al menos dos regiones o proveedores (por ejemplo, Wasabi + R2) y rota las programaciones.
- Vigila los costos: Object Lock conserva todas las versiones, así que combínalo con reglas de ciclo de vida una vez expire la retención.

## Lista de verificación de solución de problemas

- La subida falla con AccessDenied: asegúrate de que el rol IAM permite `PutObjectRetention`.
- Los objetos no están bloqueados: confirma que el bucket se creó con Object Lock y que el versionado está activado.
- Transferencias lentas: reduce los recuentos de transferencia o usa límites de ancho de banda cuando la conexión sea débil.
- La restauración elimina datos activos: usa Copia en lugar de Sincronización al extraer datos del bucket bloqueado.



Bloquea tus copias de seguridad una vez, y deja que RcloneView las mantenga a salvo en piloto automático.

<CloudSupportGrid />
