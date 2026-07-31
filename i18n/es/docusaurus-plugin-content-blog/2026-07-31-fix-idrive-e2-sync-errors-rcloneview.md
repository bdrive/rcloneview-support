---
slug: fix-idrive-e2-sync-errors-rcloneview
title: "Cómo solucionar errores de sincronización de IDrive e2 — resuelve problemas de almacenamiento compatible con S3 con RcloneView"
authors:
  - kai
description: "Soluciona errores comunes de sincronización de IDrive e2 en RcloneView, desde problemas con las claves de acceso hasta transferencias atascadas y archivos no coincidentes, con soluciones claras paso a paso."
keywords:
  - errores de sincronización idrive e2
  - solucionar idrive e2 rcloneview
  - error de clave de acceso idrive e2
  - tiempo de espera de conexión idrive e2
  - fallo de subida idrive e2
  - solución de problemas rcloneview
  - sincronización s3 idrive e2
  - errores de copia de seguridad idrive e2
  - errores de almacenamiento compatible con s3
  - solución de problemas de almacenamiento en la nube
tags:
  - RcloneView
  - idrive-e2
  - troubleshooting
  - tips
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cómo solucionar errores de sincronización de IDrive e2 — resuelve problemas de almacenamiento compatible con S3 con RcloneView

> ¿Los trabajos de sincronización de IDrive e2 rechazan las credenciales, se quedan atascados a mitad de la transferencia o dejan archivos sin coincidir? **RcloneView** te da la visibilidad necesaria para aislar la causa y volver a poner en marcha las transferencias.

IDrive e2 es un servicio de almacenamiento de objetos compatible con S3, por lo que la mayoría de los problemas de sincronización se reducen a las mismas causas habituales: un par de claves de acceso incorrecto, un endpoint de región equivocado o una transferencia que sufrió un problema de red a mitad de camino. RcloneView se conecta a IDrive e2 con acceso completo de lectura/escritura incluso con la licencia FREE, y sus herramientas de Job History, la pestaña Log y Dry Run te permiten identificar exactamente dónde falló un trabajo en lugar de volver a ejecutarlo a ciegas. Esta guía cubre los errores de sincronización de IDrive e2 más comunes y cómo resolver cada uno desde dentro de RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Clave de acceso o autenticación rechazada

Si un remoto de IDrive e2 empieza de repente a devolver un error de autenticación, la causa más común es un Access Key ID o una Secret Access Key que se regeneró o revocó en el lado de IDrive e2 después de configurar el remoto en RcloneView, o una URL de endpoint que ya no coincide con la región de la cuenta.

**Cómo solucionarlo:**

Abre Remote Manager, selecciona el remoto de IDrive e2 y vuelve a introducir el Access Key ID y la Secret Access Key actuales desde tu panel de IDrive e2. Verifica cuidadosamente que el campo de endpoint coincida exactamente con la región que se muestra en tu cuenta de IDrive e2, ya que un endpoint incorrecto produce el mismo rechazo que una clave errónea. Si el remoto sigue fallando, elimínalo y vuelve a crearlo con el asistente New Remote para obtener una configuración limpia.

<img src="/support/images/en/blog/new-remote.png" alt="Reconfiguring an IDrive e2 remote in RcloneView" class="img-large img-center" />

## Trabajos de sincronización atascados o con error en Job History

Un trabajo que copia parte de un bucket y luego muestra "Errored", o que parece quedarse congelado a mitad de camino, suele deberse a una caída de red transitoria, un límite de velocidad temporal del endpoint S3, o un único objeto con un nombre problemático que bloquea el resto del lote.

**Cómo solucionarlo:**

Revisa Job History y filtra por "Errored" para ver exactamente qué ejecución y en qué momento falló. Aumenta el contador de "Retry entire sync if fails" en el Paso 2 del asistente de trabajos — el valor predeterminado de 3 recupera automáticamente la mayoría de los fallos transitorios. Si un objeto específico sigue fallando, exclúyelo con una regla de filtro personalizada en el Paso 3 y confirma que el resto de la transferencia se completa.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Adjusting retry settings for an IDrive e2 sync job in RcloneView" class="img-large img-center" />

## Subidas lentas o limitadas

Los endpoints de almacenamiento de objetos a veces limitan una conexión que abre demasiados flujos simultáneos, lo que se manifiesta como subidas que avanzan muy por debajo de la velocidad esperada en lugar de fallar directamente.

**Cómo solucionarlo:**

Reduce los valores de "Number of file transfers" y "Number of multi-thread transfers" en el Paso 2 del asistente de sincronización — un número de concurrencia alto puede provocar limitación de velocidad en algunos backends compatibles con S3. Observa la pestaña Transferring para confirmar que la velocidad se estabiliza tras el cambio, y activa la comparación por checksum para que los archivos reintentados no se vuelvan a transferir innecesariamente.

## Los archivos no coinciden después de una sincronización

Si el número o el tamaño de los objetos en IDrive e2 no coincide con el origen después de completar una sincronización, normalmente se trata de un error en la dirección de sincronización o de una regla de filtro que excluye más de lo previsto, no de un fallo del lado del almacenamiento.

**Cómo solucionarlo:**

Ejecuta un Dry Run antes de la sincronización real para previsualizar exactamente qué se copiará o eliminará, detectando errores de dirección antes de que afecten a tu bucket. Luego utiliza Folder Compare entre el origen y el remoto de IDrive e2 — las herramientas de detección de cambios de tamaño de Folder Compare muestran rápidamente qué carpetas difieren, y tanto la sincronización como la comparación están disponibles con la licencia FREE de RcloneView.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing source and IDrive e2 bucket contents in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Vuelve a introducir o recrea tu remoto de IDrive e2 si la autenticación está fallando.
3. Revisa Job History para localizar el punto exacto de fallo y ajusta los parámetros de reintento, filtro o hilos según corresponda.
4. Ejecuta Dry Run y Folder Compare después de cualquier corrección para confirmar que la sincronización queda limpia de ahora en adelante.

Una breve rutina de diagnóstico — primero Job History, luego Dry Run, después Compare — resuelve la mayoría de los problemas de sincronización de IDrive e2 sin necesidad de abrir nunca una terminal.

---

**Guías relacionadas:**

- [Gestionar el almacenamiento de IDrive e2 — sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [Gestionar IDrive e2 como copia de seguridad en la nube compatible con S3 — RcloneView](https://rcloneview.com/support/blog/manage-idrive-e2-s3-cloud-backup-rcloneview)
- [Solucionar fallos de subida multiparte de S3 con RcloneView](https://rcloneview.com/support/blog/fix-s3-multipart-upload-failures-rcloneview)

<CloudSupportGrid />
