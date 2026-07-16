---
slug: rcloneview-synology-rclone-gui
title: "Usar rclone en un NAS Synology con una GUI: sin necesidad de SSH"
authors:
  - tayson
description: "Ejecuta rclone para NAS Synology sin SSH ni CLI. Usa RcloneView para gestionar remotos, comparar cambios, cifrar y automatizar copias de seguridad en la nube de forma segura."
keywords:
  - synology rclone
  - rclone synology nas
  - rcloneview synology
  - synology cloud backup
  - rclone gui
  - no ssh backup
  - nas to cloud backup
  - rcloneview jobs
  - compare first backup
  - rcloneview crypt remote

tags:
  - RcloneView
  - cloud-storage
  - backup
  - sync
  - file-management
---

import RvCta from '@site/src/components/RvCta';

# Usar rclone en un NAS Synology con una GUI: sin necesidad de SSH

> Los usuarios de Synology quieren la potencia de rclone sin el riesgo de SSH o la CLI. RcloneView te ofrece control visual, copias de seguridad más seguras y automatización repetible en un solo espacio de trabajo.

Las herramientas de DSM son un buen punto de partida, pero muchos usuarios de NAS acaban topando con límites: falta de soporte para ciertas nubes, controles débiles y compromisos poco claros entre costo y seguridad. rclone es la mejora obvia, pero la ruta tradicional exige SSH y conocimientos de línea de comandos. Esta guía muestra una arquitectura centrada en la GUI que conserva la potencia de rclone y elimina la carga de la CLI.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué "Synology rclone" es una búsqueda tan popular

Los usuarios de NAS Synology suelen querer tres cosas:

- Soporte de nube más amplio que el que ofrecen las herramientas de DSM
- Control a nivel de archivo para Copy, Sync y filtros
- Libertad frente al bloqueo de proveedor y los formatos de copia de seguridad opacos

rclone ofrece todo eso, pero la mayoría de las guías asumen SSH y CLI. La intención de búsqueda real es simple: *usar rclone sin una terminal*.

## rclone es potente, pero limitarse a la CLI es una barrera

Una configuración típica de rclone en NAS implica:

- Habilitar SSH
- Conectar por terminal
- Editar o gestionar `rclone.conf`
- Ejecutar comandos manualmente o mediante cron

Para muchos usuarios de NAS, eso genera un riesgo real:

- Los errores tipográficos pueden borrar datos
- No hay vista previa visual antes de Sync
- Los registros son difíciles de rastrear tras un fallo

## Una arquitectura mejor: el NAS almacena, la GUI controla

Idea clave:

- El NAS sigue siendo el **motor de datos**
- RcloneView se convierte en el **centro de control**

Sigues usando rclone por debajo, pero lo gestionas mediante una interfaz visual y segura.

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="Synology NAS detection and connection" class="img-large img-center" />

## Qué cambia RcloneView en los flujos de trabajo de Synology

- Configuración de remotos sin SSH
- Comparación visual (Compare) antes de cualquier transferencia
- Historial de trabajos y registros en un solo lugar
- Programación mediante GUI en lugar de cron

RcloneView no reemplaza tu NAS. Hace que tu NAS esté listo para la nube sin la fricción de la CLI.

## Opciones de configuración típicas (sin flujo centrado en SSH)

### Opción 1: NAS como origen, RcloneView como controlador

- Carpetas compartidas del NAS -> destinos en la nube
- Todo Copy/Sync/Compare controlado desde RcloneView

### Opción 2: Modelo híbrido

- El NAS almacena datos localmente
- RcloneView gestiona Compare, cifrado y programación

## Flujo paso a paso sin dependencia de SSH

### Paso 1: Identifica los datos del NAS que quieres proteger

- Omite volúmenes completos por defecto
- Elige carpetas compartidas críticas
- Separa por proyecto o usuario

### Paso 2: Añade remotos en la nube en RcloneView

- Google Drive, OneDrive, S3, Wasabi, Backblaze
- Configuración mediante OAuth o clave

<img src="/support/images/en/blog/new-remote.png" alt="New Remote screen" class="img-large img-center" />

### Paso 3: Trata las carpetas del NAS como origen

- Usa rutas del NAS mapeadas o montadas
- Mantén los permisos de lectura/escritura de forma explícita

## Por qué la GUI importa para NAS + rclone

### Seguridad visual

- La diferencia entre Copy y Sync es explícita
- Los errores de dirección son más fáciles de detectar

### Comparar antes de transferir

- Ve el delta exacto antes de mover datos
- Filtra el ruido del NAS, como archivos temporales o de caché

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results filters" class="img-large img-center" />

### Menor riesgo para no expertos

- No hay sintaxis de CLI que recordar
- Menos margen para errores destructivos

## Usar Compare con datos del NAS

Las carpetas del NAS suelen contener:

- `@eaDir`
- cachés temporales
- archivos generados por paquetes

Compare te ayuda a identificar cambios reales y evitar subidas innecesarias. También te da visibilidad de costos antes de cada copia de seguridad.

<img src="/support/images/en/tutorials/wasabi-and-local-compare-and-copy.png" alt="Compare and copy only changes" class="img-large img-center" />

## Copy vs Sync para copias de seguridad de NAS

### Copy (predeterminado recomendado)

- Sin eliminaciones en el destino
- El más seguro para copias de seguridad
- Fácil de revertir

### Sync (uso avanzado únicamente)

- Solo para réplicas controladas
- Ejecuta siempre Dry Run primero

<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run.png" alt="Sync dry run" class="img-large img-center" />

## Cifrar los datos del NAS antes de subirlos (Crypt Remote)

El cifrado del NAS no protege los datos una vez que salen del NAS. Crypt Remote te ofrece cifrado del lado del cliente antes de la subida.

- Cifrado del contenido de archivos y, opcionalmente, de los nombres de archivo
- Almacenamiento de conocimiento cero en la nube

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/new-remote-add-crypt.png" alt="Add Crypt remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/virtual-add-select-remote-and-folder.png" alt="Select Crypt target folder" class="img-large img-center" />
</div>

## Programación y automatización sin cron

Guarda un Copy o Sync como Job y prográmalo de forma visual.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/save-sync-to-jobs.png" alt="Save sync to Jobs" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-scheduling.png" alt="Add job scheduling" class="img-large img-center" />
</div>

Esto te ofrece:

- Historial de trabajos y visibilidad de fallos
- Configuración repetible
- Traspaso más sencillo entre equipos

## Escenarios reales de copia de seguridad en NAS

### NAS doméstico -> Google Drive

- Fotos y documentos
- Restauración rápida de un solo archivo

### NAS de oficina pequeña -> S3 o Wasabi

- Costo predecible y almacenamiento a largo plazo
- Trabajos de Copy controlados

### Usuario avanzado o administrador de TI

- NAS -> destinos multi-nube
- Trabajos separados por departamento o proyecto

## Consideraciones de seguridad

- Usa montajes de solo lectura cuando sea posible
- Separa los trabajos de backup de los de sincronización
- Prueba las restauraciones abriendo archivos directamente en la nube

## Mitos comunes

**"La CLI siempre es mejor"**
Potente, pero arriesgada en datos de NAS de producción.

**"La GUI es solo para principiantes"**
La GUI mejora la seguridad operativa y la auditabilidad.

## Conclusión: rclone es potente, el control lo es todo

Los usuarios de Synology eligen rclone por su flexibilidad. RcloneView conserva esa potencia mientras elimina la fricción de SSH y la CLI. Obtienes flujos de trabajo más seguros, mejor visibilidad y copias de seguridad en las que puedes confiar.

Si quieres usar rclone en Synology sin la terminal, este es el camino más simple.
