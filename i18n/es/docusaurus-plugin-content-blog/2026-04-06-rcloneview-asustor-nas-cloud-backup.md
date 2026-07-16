---
slug: rcloneview-asustor-nas-cloud-backup
title: "Ejecuta RcloneView en un NAS ASUSTOR para copias de seguridad en la nube automatizadas"
authors:
  - tayson
description: "Los dispositivos NAS ASUSTOR son lo bastante potentes para ejecutar RcloneView mediante Docker. Configura copias de seguridad en la nube automatizadas, monta almacenamiento remoto y supervisa las transferencias directamente desde tu NAS."
keywords:
  - rcloneview asustor nas
  - asustor nas cloud backup
  - asustor docker rcloneview
  - asustor cloud sync alternative
  - asustor nas rclone gui
  - asustor automated backup cloud
  - asustor mount cloud storage
  - asustor nas s3 backup
  - asustor cloud file manager
  - rcloneview nas setup
tags:
  - nas
  - platform
  - cloud-backup
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Ejecuta RcloneView en un NAS ASUSTOR para copias de seguridad en la nube automatizadas

> Tu NAS ASUSTOR funciona 24/7 — conviértelo en tu motor de copias de seguridad en la nube siempre activo. RcloneView transforma tu NAS en un centro de gestión de archivos multi-nube con copias de seguridad programadas, montaje en la nube y supervisión de transferencias en tiempo real.

Los dispositivos NAS ASUSTOR incorporan procesadores Intel o ARM, ejecutan el sistema operativo ADM (ASUSTOR Data Master) y admiten Docker mediante la app Portainer o la línea de comandos. Esto los hace capaces de ejecutar RcloneView como un servicio en contenedor — siempre activo, siempre haciendo copias de seguridad, sin ocupar un ordenador de escritorio o portátil. Ya sea que quieras hacer copias de seguridad de los recursos compartidos del NAS en Backblaze B2, sincronizar carpetas con Google Drive o montar S3 como un volumen local, RcloneView en tu NAS ASUSTOR se encarga de todo desde una GUI basada en web.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué ejecutar la copia de seguridad en la nube en tu NAS

Ejecutar la copia de seguridad en la nube directamente en tu NAS tiene varias ventajas frente a hacerlo en una estación de trabajo:

- **Funcionamiento siempre activo** — tu NAS ya está funcionando 24/7. Las copias de seguridad se ejecutan según lo programado sin necesidad de que un PC esté encendido.
- **Acceso a velocidad de LAN a los datos del NAS** — no es necesario extraer archivos por la red hacia un PC antes de subirlos. El NAS lee directamente desde sus propios discos.
- **Gestión centralizada** — todos los trabajos de copia de seguridad, programaciones y registros residen en el NAS. Cualquier dispositivo con un navegador puede gestionarlos.
- **Sin consumo de recursos de la estación de trabajo** — traslada el coste de CPU y ancho de banda de las transferencias grandes al NAS.

## Compatibilidad de NAS ASUSTOR

RcloneView mediante Docker funciona en modelos ASUSTOR con:

- Procesadores **basados en Intel** (x86_64): series AS31, AS32, AS33, AS52, AS54, AS61, AS62, AS63, AS64, AS65, AS67, Lockerstor, Lockerstor Pro y Flashstor.
- Procesadores **basados en ARM**: series Drivestor y Drivestor Pro (variantes ARM de AS11, AS33) — verifica el soporte de Docker para tu modelo específico.
- **ADM 4.0 o posterior** con Docker (Portainer) instalado desde App Central.
- **Al menos 2 GB de RAM** recomendados (4 GB+ para transferencias grandes simultáneas).

## Instalación de RcloneView mediante Docker

### Paso 1 — Instalar Docker desde App Central

1. Abre **App Central** en tu interfaz web de ADM.
2. Busca **Portainer** (o Docker-CE si está disponible).
3. Instala y abre la app Portainer.

### Paso 2 — Desplegar el contenedor de RcloneView

Abre Portainer en `http://your-nas-ip:9443` y crea un nuevo contenedor, o usa SSH para desplegarlo mediante línea de comandos:

```bash
docker run -d \
  --name rcloneview \
  -p 5572:5572 \
  -v /volume1/Docker/rcloneview/config:/config/rclone \
  -v /volume1:/data/volume1 \
  --restart unless-stopped \
  rcloneview/rcloneview:latest
```

Asignaciones de volúmenes clave:

- `/volume1/Docker/rcloneview/config` — almacena de forma persistente las configuraciones de tus remotos de rclone.
- `/volume1` — expone el volumen principal de tu NAS a RcloneView para las operaciones de copia de seguridad.

### Paso 3 — Acceder a la interfaz web

Abre tu navegador y ve a `http://your-nas-ip:5572`. Deberías ver el panel de control de RcloneView.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView new remote setup on ASUSTOR NAS" class="img-large img-center" />

## Conexión de remotos en la nube

Desde la interfaz de RcloneView, agrega tus proveedores de almacenamiento en la nube:

### Configuraciones comunes para copias de seguridad de NAS

- **Backblaze B2** — rentable para copias de seguridad de NAS de gran tamaño a $6/TB/mes.
- **Wasabi** — almacenamiento compatible con S3 de tarifa plana sin cargos por salida de datos.
- **Google Drive** — sincroniza carpetas importantes entre el NAS y Drive.
- **Amazon S3** — durabilidad de nivel empresarial con clases de almacenamiento flexibles.
- **SFTP** — realiza copias de seguridad en un servidor remoto o un segundo NAS.

Cada remoto se configura una sola vez y se guarda de forma permanente. El asistente de configuración te guía a través de la autenticación para cada proveedor — claves API para servicios compatibles con S3, OAuth para Google Drive y OneDrive.

## Programación de copias de seguridad automatizadas

El valor principal de ejecutar RcloneView en tu NAS es la copia de seguridad automatizada y desatendida. Así es como se configura:

### Creación de un trabajo de copia de seguridad

1. Abre el explorador de dos paneles en RcloneView.
2. Configura el panel izquierdo con la ruta local de tu NAS (por ejemplo, `/data/volume1/Photos`).
3. Configura el panel derecho con tu remoto en la nube (por ejemplo, `backblaze-b2:nas-backup/photos/`).
4. Elige **Sync** (Sincronizar) para reflejar la carpeta del NAS en la nube, o **Copy** (Copiar) para agregar archivos nuevos sin eliminar los que se hayan borrado.
5. Guarda la operación como un trabajo con nombre.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run a backup job on ASUSTOR NAS with RcloneView" class="img-large img-center" />

### Programación del trabajo

Configura el trabajo para que se ejecute automáticamente:

- **Diariamente a las 2:00 AM** — realiza la copia de seguridad en horas de bajo uso para evitar afectar el rendimiento del NAS.
- **Sincronización completa semanal** — una sincronización exhaustiva los fines de semana, cuando la demanda de ancho de banda es menor.
- **Bajo demanda** — activa una copia de seguridad manualmente antes de hacer cambios importantes.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule automated cloud backups on ASUSTOR NAS" class="img-large img-center" />

## Montaje de almacenamiento en la nube

RcloneView puede montar el almacenamiento en la nube como una ruta local en tu NAS, haciendo que los archivos remotos sean accesibles como si estuvieran en un disco local. Esto es útil para:

- **Ampliar la capacidad del NAS** con almacenamiento en la nube.
- **Acceder a archivos archivados** sin descargarlos manualmente.
- **Transmitir contenido multimedia** desde el almacenamiento en la nube a través de las apps multimedia de tu NAS.

Para habilitar los montajes FUSE en Docker, agrega estas opciones a tu contenedor:

```bash
--device /dev/fuse --cap-add SYS_ADMIN
```

Luego usa el Administrador de montajes de RcloneView para montar cualquier remoto en una ruta local.

## Supervisión de transferencias

Mientras se ejecutan los trabajos de copia de seguridad, la supervisión de transferencias de RcloneView muestra el progreso en tiempo real:

- Archivos que se están transfiriendo actualmente
- Velocidad de transferencia y tiempo estimado
- Errores y reintentos
- Recuento de archivos completados

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor NAS cloud backup progress in RcloneView" class="img-large img-center" />

Revisa el historial de trabajos para confirmar que las copias de seguridad programadas se completaron correctamente. Si un trabajo falla (corte de red, credenciales caducadas), RcloneView registra el error para su resolución.

## Buenas prácticas para copias de seguridad en NAS ASUSTOR

- **Empieza con tus datos más críticos** — fotos, documentos y bases de datos primero. Las bibliotecas multimedia pueden venir después.
- **Usa límites de ancho de banda** durante el horario laboral para evitar saturar tu conexión a internet: configura `--bwlimit 10M` en las opciones del trabajo.
- **Habilita el versionado** en tu almacenamiento en la nube para protegerte contra ransomware o sobrescrituras accidentales.
- **Haz una copia de seguridad de tu configuración de rclone** — el directorio `/config/rclone` contiene tus credenciales de la nube. Cópialo a una segunda ubicación.
- **Supervisa el estado del disco** — la copia de seguridad en la nube no sirve de nada si el disco del NAS falla antes de que se ejecute la copia. Usa las alertas del Storage Manager de ADM.

## Cómo empezar

1. **Instala Portainer** desde ASUSTOR App Central.
2. **Despliega el contenedor Docker de RcloneView** con las asignaciones de volúmenes mostradas arriba.
3. **Agrega tus remotos en la nube** — Backblaze B2, S3, Google Drive o cualquier proveedor compatible.
4. **Crea y programa trabajos de copia de seguridad** para los recursos compartidos más importantes de tu NAS.
5. **Revisa el historial de trabajos semanalmente** para confirmar que todo funciona correctamente.

Tu NAS ASUSTOR ya protege tus datos localmente con RAID. Agregar una copia de seguridad en la nube automatizada con RcloneView te ofrece una protección externa real — y funciona por sí sola.

---

**Guías relacionadas:**

- [Puente de la nube al NAS: copia de seguridad en Synology](https://rcloneview.com/support/blog/cloud-to-synology-nas-with-rcloneview)
- [Ejecuta RcloneView en TrueNAS](https://rcloneview.com/support/blog/rcloneview-truenas-cloud-backup)
- [Automatiza copias de seguridad diarias en la nube](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
