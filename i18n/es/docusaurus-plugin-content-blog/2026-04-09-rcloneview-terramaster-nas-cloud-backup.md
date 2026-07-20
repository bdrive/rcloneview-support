---
slug: rcloneview-terramaster-nas-cloud-backup
title: "Usa RcloneView con TerraMaster NAS para copia de seguridad y sincronización en la nube"
authors:
  - tayson
description: "Configura RcloneView con un NAS TerraMaster para sincronizar y hacer copias de seguridad de los datos del NAS en almacenamiento en la nube. Conéctate mediante SFTP o SMB y automatiza copias de seguridad a S3, B2 o Google Drive."
keywords:
  - rcloneview
  - terramaster nas cloud backup
  - terramaster cloud sync
  - terramaster backup to cloud
  - terramaster rclone
  - nas cloud backup gui
  - terramaster google drive
  - terramaster s3 backup
  - terramaster file sync
  - nas to cloud transfer
tags:
  - RcloneView
  - nas
  - platform
  - cloud-backup
  - backup
  - guide
  - sftp
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Usa RcloneView con TerraMaster NAS para copia de seguridad y sincronización en la nube

> Los dispositivos NAS de TerraMaster ofrecen almacenamiento en red asequible, pero sus opciones integradas de copia de seguridad en la nube son limitadas: **RcloneView** amplía tu TerraMaster con copia de seguridad multi-nube, sincronización y gestión de archivos a través de una GUI visual.

TerraMaster fabrica populares dispositivos NAS que ejecutan TOS (TerraMaster Operating System). Aunque TOS incluye funciones básicas de sincronización en la nube para algunos proveedores, no admite toda la gama de servicios de almacenamiento en la nube que necesitan las empresas y los usuarios avanzados. RcloneView se conecta a tu NAS TerraMaster mediante SFTP o SMB y lo conecta con más de 70 proveedores de nube, permitiendo copias de seguridad automatizadas, sincronización de la nube al NAS y gestión de archivos entre nubes.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué añadir copia de seguridad en la nube a tu TerraMaster

Un NAS proporciona almacenamiento local rápido y redundancia RAID, pero no protege contra:

- **Desastres a nivel de sede**: Un incendio, inundación, robo o sobretensión eléctrica puede destruir el NAS y todos sus discos simultáneamente. RAID protege contra el fallo de un disco, no contra la pérdida de la sede.
- **Ransomware**: Si el ransomware llega a tu red, puede cifrar los recursos compartidos del NAS. Las copias de seguridad en la nube (especialmente en almacenamiento inmutable) proporcionan un punto de recuperación.
- **Fallo de hardware más allá del RAID**: Los fallos en la placa controladora, daños en la fuente de alimentación o corrupción del firmware pueden dejar todo el NAS inaccesible independientemente del nivel de RAID.

La copia de seguridad en la nube proporciona una redundancia geográfica que un NAS local no puede ofrecer. RcloneView automatiza esta copia de seguridad manteniendo tu flujo de trabajo principal en el NAS local, que es rápido.

## Conectar RcloneView a tu TerraMaster

RcloneView se ejecuta en tu escritorio o en una máquina separada (no en el propio TerraMaster) y se conecta al NAS a través de la red. Hay dos métodos de conexión disponibles:

### Conexión SFTP

Activa SSH en tu TerraMaster (Panel de control de TOS > Servicios > SSH). Luego añade un remoto SFTP en el Administrador de remotos de RcloneView:

- Host: La dirección IP de tu TerraMaster (por ejemplo, `192.168.1.100`)
- Puerto: 22 (puerto SSH predeterminado)
- Usuario: Tu nombre de usuario administrador de TOS
- Contraseña o clave SSH: Tus credenciales de TOS

SFTP proporciona transferencias de archivos cifradas y es el método recomendado para acceder a los datos del NAS desde RcloneView.

### Conexión SMB

Si tus recursos compartidos de TerraMaster son accesibles mediante SMB (uso compartido de archivos de Windows), añade un remoto SMB en RcloneView. Este utiliza el formato de ruta de red estándar de Windows y es conveniente si ya tienes recursos compartidos SMB configurados.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting RcloneView to TerraMaster NAS via SFTP" class="img-large img-center" />

## Copia de seguridad de datos del NAS en almacenamiento en la nube

Una vez conectado, configura una tarea de copia de seguridad desde tu TerraMaster hacia un destino en la nube:

1. Abre el remoto SFTP de TerraMaster en el panel izquierdo.
2. Abre tu destino en la nube (AWS S3, Backblaze B2, Google Drive, Wasabi) en el panel derecho.
3. Navega hasta las carpetas del NAS de las que quieras hacer copia de seguridad.
4. Crea una tarea de sincronización que copie los datos del NAS a la nube.

La detección de cambios de RcloneView garantiza que solo se transfieran los archivos que han cambiado desde la última copia de seguridad. Para un NAS con terabytes de datos, la copia de seguridad inicial puede tardar días, pero las copias de seguridad diarias posteriores solo transfieren los cambios del día, y normalmente se completan en minutos.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Backing up TerraMaster NAS to cloud storage in RcloneView" class="img-large img-center" />

## Elegir un destino de copia de seguridad en la nube

Para la copia de seguridad de NAS, es ideal un almacenamiento rentable sin tarifas de salida:

- **Backblaze B2**: $6/TB/mes, salida gratuita gracias a la asociación con Cloudflare. Precios sencillos, adecuado para copias de seguridad sin complicaciones.
- **Wasabi**: $6.99/TB/mes, sin tarifas de salida. Se aplica una duración mínima de almacenamiento de 90 días.
- **AWS S3 Glacier Deep Archive**: $0.99/TB/mes para datos de archivo. La recuperación tarda horas e incurre en tarifas de recuperación por GB, pero los costos de almacenamiento son los más bajos disponibles.
- **Google Drive**: Conveniente si tu equipo ya utiliza Google Workspace. Los costos de almacenamiento son más altos, pero la integración es perfecta.

Para la mayoría de los usuarios de TerraMaster, Backblaze B2 ofrece el mejor equilibrio entre costo, simplicidad y velocidad de recuperación.

## Programar copias de seguridad automatizadas

Configura el programador de RcloneView para ejecutar copias de seguridad del NAS automáticamente:

- **Incremental diaria**: Sincroniza los archivos modificados del NAS a la nube cada noche. Uso mínimo de ancho de banda después de la carga inicial.
- **Verificación completa semanal**: Ejecuta una operación de comparación semanalmente para verificar que todos los archivos del NAS coincidan con la copia de seguridad en la nube. Esto detecta cualquier discrepancia causada por transferencias interrumpidas o corrupción silenciosa de datos.

Establece límites de ancho de banda para evitar que el tráfico de copia de seguridad consuma tu red durante el horario laboral. Programa las copias de seguridad para horarios nocturnos o de baja actividad.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling TerraMaster NAS backup in RcloneView" class="img-large img-center" />

## Sincronizar datos de la nube con tu TerraMaster

El flujo de trabajo inverso también es útil: traer datos de la nube a tu NAS para acceso local. Si tu equipo colabora en Google Drive pero necesita acceso local rápido a los archivos del proyecto, sincroniza las carpetas relevantes de Drive con tu TerraMaster. Edita los archivos localmente a la velocidad del NAS, y RcloneView sincroniza los cambios de vuelta a la nube según el programa establecido.

Este enfoque híbrido te ofrece los beneficios de colaboración del almacenamiento en la nube junto con el rendimiento del acceso local al NAS.

## Cifrar copias de seguridad del NAS

Para datos sensibles, utiliza el remoto crypt de RcloneView para cifrar los archivos antes de que salgan de tu red. El cifrado ocurre en tu máquina de escritorio (donde se ejecuta RcloneView) antes de subir los datos a la nube. Incluso si el proveedor de la nube se ve comprometido, los datos de tu copia de seguridad del NAS permanecen ilegibles.

## Monitoreo y verificación

El historial de tareas de RcloneView registra cada ejecución de copia de seguridad con estadísticas: archivos transferidos, archivos omitidos, bytes totales, tiempo transcurrido y cualquier error. Revisa el historial regularmente para confirmar que las copias de seguridad se completan correctamente. Utiliza la función de comparación periódicamente para verificar que la copia de seguridad en la nube coincide con el contenido del NAS.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Monitoring TerraMaster NAS backup history in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Activa SSH en tu TerraMaster y añádelo como remoto SFTP en RcloneView.
3. Añade un destino en la nube (B2, S3, Google Drive o Wasabi).
4. Crea y programa una tarea de copia de seguridad diaria del NAS a la nube.
5. Verifica las copias de seguridad periódicamente con la función de comparación.

Tu NAS TerraMaster gestiona el almacenamiento local y el uso compartido. RcloneView añade la capa de copia de seguridad en la nube que protege tus datos contra desastres a nivel de sede, ransomware y fallos de hardware más allá del RAID.

---

**Guías relacionadas:**

- [Explorar y gestionar almacenamiento remoto](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Crear tareas de sincronización](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Programación de tareas](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Historial de tareas](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job#view-job-history)

<CloudSupportGrid />
