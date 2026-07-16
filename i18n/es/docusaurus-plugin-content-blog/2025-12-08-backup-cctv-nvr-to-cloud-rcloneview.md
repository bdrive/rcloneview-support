---
slug: backup-cctv-nvr-to-cloud-rcloneview
title: "Cómo hacer copia de seguridad y archivar grabaciones de CCTV/NVR en almacenamiento en la nube automáticamente con RcloneView"
authors:
  - tayson
description: "Envía video de CCTV/NVR desde rutas NAS, SMB o SFTP a Wasabi, S3 o Google Drive con RcloneView. Usa Compare, Sync Jobs con verificación de checksum y ejecuciones programadas para proteger la evidencia sin subidas manuales."
keywords:
  - rcloneview
  - copia de seguridad cctv
  - archivo en la nube nvr
  - wasabi s3
  - copia de seguridad de google drive
  - smb sftp
  - almacenamiento de vigilancia
  - verificación de checksum
  - copia de seguridad programada
  - recuperación ante desastres
tags:
  - cloud
  - sync
  - nas
  - cctv
  - sftp
  - smb
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cómo hacer copia de seguridad y archivar grabaciones de CCTV/NVR en almacenamiento en la nube automáticamente con RcloneView

> Mantén el video de vigilancia a salvo de robos, incendios o fallos de dispositivo. RcloneView conecta carpetas de NVR en NAS/SFTP/SMB con Wasabi, S3 o Google Drive, y luego automatiza Compare + Sync Jobs para que solo se mueva el material nuevo y la evidencia permanezca intacta.

<!-- truncate -->


<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## 1. Por qué importa la copia de seguridad en la nube para las grabaciones de CCTV

- Los discos de NVR/NAS se llenan rápido con grabaciones 24/7.  
- Un robo, incendio o vandalismo puede borrar la única copia.  
- El cumplimiento normativo y las auditorías exigen ventanas de retención más largas.  
- La revisión remota y el compartir evidencia requieren acceso fuera del sitio.  
- Copiar manualmente archivos H.264/H.265 de varios GB es propenso a errores.

## 2. Qué hace complicados a los archivos de vigilancia

- Las escrituras continuas crean miles de clips organizados por fecha.  
- Las tasas de bits altas (1080p/4K) exigen mucho ancho de banda durante la copia de seguridad.  
- La estructura de carpetas varía según el fabricante (AAAA/MM/DD, IDs de cámara).  
- Se necesitan transferencias programadas (cada hora/diarias) sin supervisión humana.  
- La integridad importa: los fotogramas corruptos debilitan el valor probatorio.

## 3. Cómo ayuda RcloneView

- Conecta orígenes **NAS/SMB/SFTP/WebDAV** y destinos **Wasabi/S3/Google Drive** en una sola interfaz.  
- El Explorer de dos paneles hace que los movimientos de nube a nube o de LAN a nube sean visuales y directos.  
- **Compare** marca los clips nuevos o modificados para que solo transfieras las diferencias.  
- El soporte de **Checksum** (S3/Wasabi) valida las subidas.  
- **Sync Jobs + programación** ejecutan copias de seguridad automáticamente, sin necesidad de scripts.

<!-- Image verified: exists -->


## 4. Configuración paso a paso para la copia de seguridad de CCTV/NVR

### Paso 1) Conecta el almacenamiento del NVR (SMB o SFTP)

1. Haz clic en **Remote → + New Remote**.  
2. Elige **SMB** (para recurso compartido de NAS/Windows) o **SFTP** (para exportaciones de NVR Linux).  
3. Introduce la dirección del servidor, el recurso compartido/ruta y las credenciales (agrega el dominio si es necesario).  
4. Guarda y confirma que aparece en Remote Manager.

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/create-remote-by-remote-manager.png" alt="Create NVR remote from Remote Manager" class="img-medium img-center" />

### Paso 2) Agrega tu destino en la nube (Wasabi/S3/Google Drive)

- **Wasabi/S3**: pega las claves de acceso/secreta, la región y el bucket.  
- **Google Drive**: haz clic en **Connect** y completa el OAuth en el navegador.  
- Mantén ambos remotos visibles para trabajar lado a lado.

### Paso 3) Abre el origen y el destino

1. Ve a **Browse**.  
2. Panel izquierdo: abre la carpeta del NVR (por ejemplo, `/recordings/2025/12/08`).  
3. Panel derecho: abre el bucket o la carpeta de Drive para las copias de seguridad.  
4. Expande algunas carpetas por fecha para verificar las rutas.

### Paso 4) Previsualiza las diferencias con Compare

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/folder-comparison-completed.png" alt="Folder comparison showing CCTV deltas" class="img-medium img-center" />

- Haz clic en **Compare** para resaltar archivos de video faltantes o con tamaño modificado.  
- Resuelve las colisiones de nombres (IDs de cámara duplicados) antes de copiar.  
- Esto evita sobrescribir clips más recientes en el destino.

### Paso 5) Copia o sincroniza de forma segura

- Comienza con una **copia unidireccional** del NVR → nube (sin eliminaciones).  
- Activa el **checksum** para S3/Wasabi para validar las subidas.  
- Usa **límites de ancho de banda** durante el horario laboral; levanta los límites por la noche.  
- Para días con mucho volumen, reduce la concurrencia para evitar la limitación de velocidad, y auméntala después.

### Paso 6) Guarda el flujo de trabajo como un Job

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/save-sync-to-jobs.png" alt="Save CCTV sync to jobs" class="img-medium img-center" />

1. En el diálogo de Sync/Copy, haz clic en **Save to Jobs**.  
2. Ponle un nombre (por ejemplo, `cctv-daily-wasabi`).  
3. Elige sincronización unidireccional si planeas eliminar clips antiguos más adelante.

### Paso 7) Programa ejecuciones automáticas

<!-- Image verified: exists with /support prefix -->
<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule CCTV backup job" class="img-medium img-center" />

- Abre **Job Manager → Add Job**.  
- Elige tu job guardado y establece la frecuencia: cada hora, cada 3 horas o cada noche a las 02:00.  
- Escalona los jobs por grupo de cámaras si el ancho de banda es limitado.  
- Revisa **Job History** después de las primeras ejecuciones.

## 5. Ejemplos de políticas de copia de seguridad

- **Almacenamiento a corto plazo (activo):** conserva los últimos 7 días en el NAS/NVR para una revisión rápida.  
- **Archivo a largo plazo:** envía todo el material a Wasabi/S3 semanalmente; activa el versionado.  
- **Auditoría/revisión:** copia días seleccionados a Google Drive para investigadores y gerentes.  
- **Franquicia o múltiples sitios:** separa buckets/prefijos por tienda para aislar el acceso.


## 6. Optimización de costos para archivos de video

- Almacena el material que se accede con poca frecuencia en **Wasabi** o en niveles de acceso infrecuente de S3.  
- Conserva solo los días activos en Google Drive para compartir rápidamente.  
- Usa reglas de ciclo de vida en S3/Wasabi para transicionar objetos antiguos a niveles más económicos.  
- Excluye los clips de prueba de cámara y los segmentos sin movimiento si tu política lo permite.

## 7. Restaurar grabaciones cuando sea necesario

- Explora el remoto en la nube en Explorer; filtra por carpeta de fecha.  
- Copia solo la hora/día relevante al disco local para revisión.  
- Usa **Compare** para confirmar que los archivos restaurados coinciden con los originales (tamaño/fecha o checksum).  
- Para retenciones legales, duplica en un prefijo/bucket separado de solo lectura.

## 8. Patrones de implementación en el mundo real

- **Comercio minorista pequeño:** NVR → Wasabi cada hora; conserva 30 días en la nube, 7 días localmente.  
- **Fábrica:** CCTV → NAS → copia nocturna a Wasabi; archivo frío mensual en S3.  
- **Red de franquicias:** prefijos por ubicación en un solo bucket; copias en Drive para auditorías de la sede central.  
- **Proveedor de seguridad:** buckets por cliente, jobs programados y remotos cifrados para sitios regulados.

## 9. Conclusión

RcloneView convierte las copias de seguridad de CCTV/NVR en un flujo de trabajo predecible y sin línea de comandos. Conecta tu NAS o grabadora vía SMB/SFTP, empareja con Wasabi/S3/Google Drive, previsualiza las diferencias con Compare y programa Sync Jobs con verificación de checksum. Con automatización, registro y opciones de cifrado, puedes cumplir con los requisitos de retención, auditoría y recuperación ante desastres sin tener que supervisar las subidas nocturnas.

<CloudSupportGrid />
