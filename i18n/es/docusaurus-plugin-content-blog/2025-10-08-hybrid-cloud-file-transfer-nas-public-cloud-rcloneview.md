---
slug: hybrid-cloud-file-transfer-nas-public-cloud-rcloneview
title: "Transferencia de archivos en nube híbrida entre NAS local y nube pública usando RcloneView"
authors:
  - tayson
description: "Monta, sincroniza y automatiza transferencias entre un NAS local (SMB/SFTP) y nubes públicas como S3, Wasabi, Google Drive y Dropbox usando el Explorador de dos paneles, Comparar, Sincronizar y Tareas programadas de RcloneView."
keywords:
  - rcloneview
  - nube híbrida
  - copia de seguridad nas
  - smb sftp
  - webdav
  - transferencia s3
  - sincronización google drive
  - copia de seguridad wasabi
  - montar unidad remota
  - rclone gui
tags:
  - RcloneView
  - cloud
  - sync
  - nas
  - mount
  - hybrid-cloud
  - sftp
  - smb
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Transferencia de archivos en nube híbrida entre NAS local y nube pública usando RcloneView

> Conecta el NAS local y las nubes públicas sin acrobacias de CLI. RcloneView te permite añadir SMB/SFTP/WebDAV, abrir nubes lado a lado, Comparar cambios, montar unidades y programar sincronizaciones nocturnas, para que el almacenamiento híbrido se mantenga ordenado y predecible.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/rcloneview-user-interface.png" alt="RcloneView user interface overview" class="img-medium img-center" />

## Por qué la nube híbrida es difícil (y vale la pena)

- El NAS local ofrece acceso LAN rápido para editores y nodos de renderizado, pero carece de resiliencia fuera del sitio.  
- La nube pública (S3/Wasabi/Drive/Dropbox) añade durabilidad y uso compartido global, pero el ancho de banda y los costos importan.  
- Los equipos manejan permisos mixtos (ACL en el NAS frente a OAuth/RBAC en la nube) y convenciones de carpetas distintas.  
- Copiar manualmente arriesga sobrescrituras, versiones perdidas y apuros de última hora.  
- Una GUI que unifica ambos lados reduce la carga cognitiva y te permite automatizar con confianza.

## Sistema de archivos local vs. remoto en un solo panel

- **Local/NAS (SMB/SFTP/WebDAV):** similar a POSIX, sensible a permisos, baja latencia en LAN.  
- **Nube:** almacenamiento de objetos (S3/Wasabi) o estilo unidad (Google Drive/Dropbox); requiere OAuth o claves.  
- RcloneView trata cada uno como un remoto que puedes abrir, comparar, montar y sincronizar en una sola interfaz.

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/explorer-view-layout.png" alt="Two-pane Explorer layout" class="img-medium img-center" />

## Añade tu remoto NAS local (SMB/SFTP/WebDAV)

1. Haz clic en **Remote → + New Remote** o en el botón **+** del Explorador.  
2. Elige **SMB** (para uso compartido de Windows/NAS) o **SFTP** (servidores Linux/UNIX).  
3. Ingresa la dirección del servidor, la ruta/uso compartido y las credenciales (añade el dominio si SMB lo requiere).  
4. Guarda y prueba la navegación en el Explorador de dos paneles.

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/create-remote-by-remote-manager.png" alt="Create remote from Remote Manager" class="img-medium img-center" />

## Añade tus remotos de nube pública

- **S3/Wasabi/B2/R2:** usa claves de acceso/secreta; elige región y bucket.  
- **Google Drive/Dropbox:** haz clic en **Connect** para completar OAuth; no hay tokens que pegar.  
- **Endpoints WebDAV:** pega la URL y la autenticación.  
- Mantén tanto los remotos NAS como los de nube guardados en **Remote Manager** para reutilizarlos.

## Monta sistemas de archivos remotos como unidades locales

Los montajes ayudan a las aplicaciones que insisten en rutas locales (NLE, DAW, CAD). El gestor de montajes de RcloneView te mantiene alejado de las opciones de la CLI.

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount from Remote Explorer" class="img-medium img-center" />

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/mount-manager-status.png" alt="Mount manager status view" class="img-medium img-center" />

- Monta desde la tarjeta del remoto o la barra de herramientas, elige letra de unidad/ruta y ajusta la caché/búfer.  
- Inicia/detén montajes en **Mount Manager** sin reiniciar.  
- Ideal para editar directamente desde SFTP/SMB o exponer S3 como una carpeta para tareas ligeras.

## Compara antes de copiar

Los movimientos híbridos pueden volverse caóticos; Compare hace evidentes las diferencias.

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/folder-comparison-completed.png" alt="Folder comparison results" class="img-medium img-center" />

- Abre el NAS a la izquierda, el bucket de nube a la derecha, y pulsa **Compare**.  
- Resalta archivos **faltantes**, **con tamaño diferente** y **coincidentes**.  
- Copia solo la diferencia de NAS → nube (o al revés) para evitar sobrescribir ediciones más recientes.

## Flujos de sincronización y copia adecuados para la nube híbrida

- **Copia unidireccional** para copias de seguridad/archivos; no elimina en el destino.  
- **Sincronización unidireccional con eliminación** cuando deseas reflejar intencionalmente el NAS en la nube.  
- **Sincronización bidireccional** con moderación (solo si ambos lados cambian activamente).  
- Usa **filtros de inclusión/exclusión** para omitir caché, proxies y renders temporales.

## Gestiona los permisos sin dramas

- **SMB:** alinea dominio/grupo de trabajo; asegúrate de que las ACL del recurso compartido y del sistema de archivos permitan escritura.  
- **SFTP:** verifica UID/GID y la propiedad de las carpetas en el servidor; ajusta `chmod` en el servidor si es necesario.  
- **WebDAV:** algunos hosts bloquean MOVE/DELETE; usa solo copia si tienes dudas.  
- Si un montaje es de solo lectura, vuelve a montarlo con el usuario correcto o ajusta las opciones de montaje en el diálogo.

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/log-tab.png" alt="Log tab showing transfer details" class="img-medium img-center" />

- Revisa los **Logs** para detectar pistas de 401/403/550/permiso denegado y reintenta tras corregir.

## Consejos de rendimiento para NAS ↔ nube

- Programa las tareas grandes fuera del horario laboral; limita el ancho de banda durante horas de oficina.  
- Para S3/Wasabi, mantén la concurrencia moderada para evitar limitaciones (throttling); habilita **checksum** cuando esté disponible.  
- Para SFTP por WAN, reduce las transferencias paralelas si hay pérdida de paquetes; considera la compresión solo si la CPU lo permite.  
- Evita montar el mismo recurso compartido SMB dos veces en redes inestables.

## Automatiza con Tareas y programaciones

- Guarda cualquier Sincronización/Copia como una **Tarea (Job)** (por ejemplo, `nas-to-s3-nightly`).  
- Abre **Job Manager → Add Job**, elige la tarea guardada y prográmala para las **02:00 diariamente**.  
- Escalona varias tareas (NAS → S3, NAS → Drive, Drive → NAS) para minimizar la contención.

<!-- Image verified: exists and path corrected with /support -->
<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Create job schedule" class="img-medium img-center" />

### Ejemplo de conjunto de tareas

- **NAS (SMB) → Wasabi (copia unidireccional)**: archivo semanal de RAW/PROJECT.  
- **NAS (SFTP) → Unidad compartida de Google Drive (sincronización unidireccional)**: EDIT/EXPORT diario para colaboración.  
- **S3 → NAS (copia unidireccional)**: extrae mensualmente porciones de archivo frío para pruebas de restauración local.

### Ejecución de prueba y verificación

- Ejecuta una **dry-run** en la primera ejecución para confirmar qué se moverá.  
- Después de sincronizar, vuelve a abrir **Compare**; solo deberían quedar las diferencias esperadas.  
- Para S3/Wasabi, mantén el versionado y las reglas de ciclo de vida para controlar el costo y conservar el historial.

## Organiza tu estrategia de carpetas híbrida

- Estandariza una plantilla (por ejemplo, `Project/RAW`, `EDIT`, `EXPORT`, `ARCHIVE`) tanto en el NAS como en la nube.  
- Mantén los proxies en la nube para uso compartido rápido; conserva el RAW en NAS/S3 para fidelidad.  
- Usa **Copy** para archivos, **Sync** para espacios de trabajo activos, **Mount** para compatibilidad con aplicaciones.  
- Documenta qué remoto es la "fuente de verdad" por carpeta para evitar eliminaciones accidentales.

## Flujo de trabajo real (paso a paso)

1. **Conecta los remotos:** añade SMB/SFTP para el NAS, añade S3/Wasabi y Google Drive.  
2. **Abre dos paneles:** NAS a la izquierda, nube a la derecha; confirma los listados.  
3. **Compara una carpeta piloto pequeña:** asegúrate de que las diferencias se vean correctas.  
4. **Ejecuta una copia unidireccional a la nube:** comienza con una copia de seguridad no destructiva.  
5. **Guarda como Tarea + programa:** cada noche a las 02:00 solo para las diferencias.  
6. **Monta para aplicaciones:** monta el NAS o S3 cuando los editores necesiten acceso basado en rutas.  
7. **Revisión de registros:** verifica reintentos, mensajes de limitación o permisos en los Logs.  
8. **Prueba de restauración periódica:** copia de vuelta desde la nube a una carpeta NAS temporal para verificar la integridad.  
9. **Refina los filtros:** excluye cachés/renders; incluye solo los archivos maestros y de proyecto para los archivos.  
10. **Traspaso al equipo:** comparte la plantilla de carpetas y la programación de tareas para que todos sigan el mismo mapa.

## Lista rápida de solución de problemas

- ¿Ves 403/550? Revisa las credenciales, las ACL del recurso compartido o las políticas del bucket.  
- ¿WAN lenta? Reduce la concurrencia y habilita los límites de ancho de banda; programa por la noche.  
- ¿El montaje no escribe? Vuelve a montar con el usuario correcto o ajusta los permisos SMB.  
- ¿Fallan las eliminaciones en WebDAV? Copia y luego elimina manualmente; algunos hosts bloquean MOVE/DELETE.  
- ¿Copias duplicadas? Usa Compare para eliminar de forma segura; evita la sincronización bidireccional a menos que sea necesaria.

## Lista de verificación para salir en vivo

- [ ] Remoto NAS (SMB/SFTP/WebDAV) añadido y navegable.  
- [ ] Remoto de nube (S3/Wasabi/Drive/Dropbox) añadido y autenticado.  
- [ ] Plantilla de carpetas reflejada en ambos lados.  
- [ ] Comparación piloto y ejecución de prueba completadas.  
- [ ] Tarea guardada y programada (se sugiere las 02:00).  
- [ ] Checksums habilitados donde sea compatible; registros monitoreados.  
- [ ] Prueba de restauración realizada y documentada.

## Resumen

RcloneView convierte el trabajo en nube híbrida en un flujo de trabajo repetible: añade remotos NAS y de nube, compara antes de copiar, monta cuando las aplicaciones requieren rutas locales y automatiza las copias de seguridad con Tareas y programaciones. Con registros visibles, reintentos y compatibilidad con checksum, puedes mantener el rendimiento local y la resiliencia de la nube sin tocar la CLI.

<CloudSupportGrid />
