---
slug: manage-multiple-cloud-accounts-rcloneview
title: "Gestiona Múltiples Cuentas en la Nube en una Sola Vista con RcloneView (Google, OneDrive, Dropbox, S3)"
authors:
  - tayson
description: Gestiona Google Drive, OneDrive, Dropbox y S3 sin tocar la CLI. RcloneView unifica múltiples cuentas en la nube para que puedas explorar, transferir y sincronizar datos en una sola interfaz intuitiva.
keywords:
  - rcloneview
  - múltiples cuentas en la nube
  - google drive
  - onedrive
  - dropbox
  - s3
  - sincronización en la nube
  - rclone gui
  - migrar archivos
tags:
  - RcloneView
  - cloud-sync
  - google-drive
  - onedrive
  - dropbox
  - s3
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona Múltiples Cuentas en la Nube en una Sola Vista con RcloneView (Google, OneDrive, Dropbox, S3)

> Un panel limpio para todas tus nubes: explora, compara, transfiere y automatiza sin la línea de comandos.

La dispersión del almacenamiento en la nube es real. Un Gmail personal más una cuenta de Google del trabajo, un OneDrive vinculado a Microsoft 365, un Dropbox antiguo que sigues compartiendo con un proveedor y un bucket de S3 para archivos. Iniciar y cerrar sesión en distintos portales pierde tiempo y hace fácil perder de vista qué está dónde. RcloneView resuelve esto reuniendo todas las cuentas en un único explorador visual impulsado por rclone, para que puedas moverte con confianza entre proveedores con vistas previas, simulaciones (dry-runs) y tareas programadas.

<!-- truncate -->

Con RcloneView no necesitas aprender `rclone config` ni memorizar flags. La aplicación te guía para conectar cada cuenta una sola vez y luego reutilizar esas conexiones en flujos de copia, comparación y sincronización. Es ideal para:

- Usuarios habituales que solo quieren arrastrar archivos entre cuentas
- Ingenieros que consolidan datos de proyectos repartidos entre nubes
- Administradores de TI que estandarizan copias de seguridad y migraciones multicuenta

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

### Entender el desafío

- Interfaces fragmentadas: cada proveedor tiene su propia consola web y límites en las operaciones masivas.
- APIs y cuotas diferentes: Google, Microsoft, Dropbox y S3 se comportan de forma distinta durante movimientos grandes.
- Auditoría y repetibilidad: necesitas vistas previas, registros y ejecuciones programadas, no arrastres manuales puntuales en un navegador.

### Qué cambia una interfaz unificada

- Un solo explorador: abre varias cuentas lado a lado, sin bucles de reinicio de sesión
- Comparar primero: ve las diferencias antes de copiar; evita duplicados y sorpresas
- Tareas e historial: guarda sincronizaciones, programa ejecuciones fuera de horario y mantén un registro de auditoría

| Enfoque                      | Dónde trabajas         | Vista previa de diferencias | Programar y repetir | Multi‑proveedor       |
| ----------------------------- | ---------------------- | ---------------------------- | -------------------- | ---------------------- |
| Interfaces web nativas de la nube | Pestañas separadas del navegador | Limitada | Manual | Solo del proveedor |
| GUI multicuenta de RcloneView | Aplicación de escritorio única | Sí (Comparar) | Sí (Tareas) | Cualquier backend de rclone |



## Preparación

1. Mapea cuentas y objetivos: haz una lista de las cuentas que usas (por ejemplo, Google Drive personal, OneDrive del trabajo, Dropbox, S3/Wasabi/R2) y lo que quieres hacer: consolidar, respaldar o reorganizar.
2. Confirma el acceso: necesitarás acceso de inicio de sesión o claves de API cuando corresponda.
3. Empieza en pequeño: prueba con una carpeta pequeña; valida las vistas previas y los resultados antes de escalar.

Enlaces útiles

- [Configuración rápida de OAuth de Google](/howto/remote-storage-connection-settings/add-oath-online-login)
- [Inicio de sesión en Microsoft/SharePoint](/howto/remote-storage-connection-settings/connect-using-cli/add-sharepoint-for-business)
- [Configuración de S3/Wasabi/R2](/howto/remote-storage-connection-settings/s3) · [Credenciales de Cloudflare R2](/howto/cloud-storage-setting/cloudflare-r2-credential)
- [Configuración de OAuth de Dropbox](/howto/remote-storage-connection-settings/add-oath-online-login)

## Conecta tus cuentas en RcloneView

RcloneView envuelve la configuración de rclone en un asistente sencillo. Agrega cada nube una sola vez; aparecerá en el Explorador de la izquierda para reutilizarla.

1. Abre RcloneView → haz clic en `+ New Remote`.

<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

2. Elige un proveedor y sigue las indicaciones:
   - Google Drive: inicia sesión mediante OAuth y asígnale un nombre claro (por ejemplo, `Drive-Personal`, `Drive-Work`). Consulta: [Guía de inicio de sesión OAuth](/howto/remote-storage-connection-settings/add-oath-online-login)
   - OneDrive/SharePoint: inicia sesión con tu cuenta de Microsoft. Consulta: [Configuración de Microsoft/SharePoint](/howto/remote-storage-connection-settings/connect-using-cli/add-sharepoint-for-business)
   - Dropbox: usa el asistente de OAuth de Dropbox de RcloneView para conectarte. Consulta: [Guía de inicio de sesión OAuth](/howto/remote-storage-connection-settings/add-oath-online-login)
   - S3/Wasabi/R2: configura el endpoint/región y las claves. → [Configuración de conexión S3](/howto/remote-storage-connection-settings/s3) · [Credenciales de Cloudflare R2](/howto/cloud-storage-setting/cloudflare-r2-credential)
3. Repite para cada cuenta. Puedes abrir varios remotos a la vez y explorarlos lado a lado.

<img src="/support/images/en/howto/remote-storage-connection-settings/remote-manager-mega-view.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## Mueve y sincroniza sin sorpresas

RcloneView admite los mismos tres patrones en cualquier cuenta que conectes. Empieza con una carpeta piloto pequeña y luego escala.

### Arrastrar y soltar

Abre el origen a la izquierda y el destino a la derecha; arrastra archivos o carpetas entre ambos.

Consulta: [Copiar archivos con arrastrar y soltar](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

  <img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

### Comparar antes de copiar

Ejecuta Comparar para listar qué es nuevo, ha cambiado o falta entre dos carpetas, incluso entre proveedores distintos. Deselecciona lo que quieras omitir y luego copia.

Consulta: [Resultados de comparación y gestión de archivos](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Preview and select differences before copying" class="img-large img-center" />

### Sincronizar y programar

Refleja las carpetas seleccionadas entre cuentas con Sincronizar. Ejecuta siempre una simulación (dry-run) primero, luego guarda la tarea y programa ejecuciones fuera de horario. Supervisa el progreso y el historial en el Administrador de tareas.

Consulta: [Sincronizar almacenamientos remotos](/howto/rcloneview-basic/synchronize-remote-storages), [Crear tareas de sincronización](/howto/rcloneview-basic/create-sync-jobs), [Programación y ejecución de tareas](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-basic/add-job-configure-storage.png" alt="Configure and run a sync job in RcloneView" class="img-large img-center" />

## Casos de uso prácticos

- Google Drive personal y del trabajo: mantén una réplica de solo lectura de determinadas carpetas personales en una cuenta del trabajo, o viceversa, con sincronizaciones programadas y registros claros.
- Traspaso de equipo entre OneDrive y Google Drive: usa Comparar para preparar una migración y luego sincroniza cada noche hasta que el destino se convierta en la fuente de verdad.
- Limpieza y archivo de Dropbox: arrastra recursos compartidos poco usados a un bucket de S3/Wasabi para un almacenamiento más económico, manteniendo una copia en línea para los colaboradores.
- Copia de seguridad multicloud: mantén archivos cifrados en un bucket compatible con S3 mientras conservas la colaboración diaria en Drive/OneDrive. Combínalo con `crypt` de rclone si necesitas cifrado del lado del cliente. Consulta: /blog/encrypt-cloud-backups-google-drive-onedrive-s3-with-rcloneview

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule multi-account jobs in RcloneView" class="img-large img-center" />

## Consejos para un funcionamiento sin problemas

- Nombra los remotos con claridad: `Drive-Personal`, `Drive-Work`, `OneDrive-DeptA`, `Dropbox-Shared`, `S3-Archive`.
- Haz una prueba piloto primero: compara y copia una muestra pequeña antes de las tareas masivas.
- Respeta las cuotas: los límites de carga/copia de Google Drive y la limitación de la API pueden afectar a las ejecuciones grandes; programa por la noche cuando sea posible.
- Mantén un registro de auditoría: exporta los registros del Historial de tareas para el seguimiento de cambios.

## Resumen

RcloneView convierte un caos de inicios de sesión y pestañas de navegador en un espacio de trabajo único y confiable. Conecta todas tus cuentas una sola vez, previsualiza cada cambio y automatiza las partes repetibles, sin escribir un solo comando. Ya sea que estés consolidando datos personales, orquestando traspasos de equipo o ejecutando migraciones de TI, una GUI multicuenta unificada hace que el trabajo en la nube sea más rápido y seguro.

¿Quieres ayuda para configurar un proveedor específico? Consulta lo siguiente:

- Descripción general del Administrador de remotos: [Administrador de remotos](/howto/rcloneview-basic/remote-manager)
- Monitoreo de transferencias en tiempo real: [Monitoreo de transferencias en tiempo real](/howto/rcloneview-basic/real-time-transfer-monitoring)
- Montar nubes como unidades locales: [Montar almacenamiento en la nube como unidad local](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

<CloudSupportGrid />
