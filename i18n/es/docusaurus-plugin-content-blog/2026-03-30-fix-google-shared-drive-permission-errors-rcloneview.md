---
slug: fix-google-shared-drive-permission-errors-rcloneview
title: "Solucionar errores de permisos de Google Shared Drive — Resolver problemas de acceso con RcloneView"
authors:
  - tayson
description: "Soluciona los errores de permisos de Google Shared Drive que bloquean el acceso a archivos y la sincronización. Aprende cómo RcloneView resuelve los problemas de autorización de Shared Drive y de acceso a unidades de equipo."
keywords:
  - error de permisos de Google Shared Drive
  - acceso denegado a unidad de equipo
  - sincronización de Shared Drive fallida
  - error 403 de Google Drive
  - autorización de Shared Drive
  - solución de Shared Drive en RcloneView
  - permisos de Google Workspace
  - acceso a archivos de unidad de equipo
  - configuración de rclone para Shared Drive
  - permisos insuficientes de Google Drive
tags:
  - RcloneView
  - troubleshooting
  - tips
  - google-drive
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar errores de permisos de Google Shared Drive — Resolver problemas de acceso con RcloneView

> Un error 403 Forbidden en una Shared Drive a la que deberías tener acceso resulta a la vez confuso y urgente.

Las Google Shared Drives (antes Team Drives) introducen un modelo de permisos por capas que va más allá de la simple compartición de archivos. Cuando las herramientas de sincronización no logran acceder al contenido de una Shared Drive, los mensajes de error de la API de Google suelen ser vagos: "permisos insuficientes" puede significar una docena de cosas distintas. RcloneView simplifica la configuración de Shared Drive con selección explícita del ID de la unidad, gestión correcta del alcance de OAuth y un reporte de errores claro que identifica exactamente el fallo de permisos.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## En qué se diferencian los permisos de Shared Drive

A diferencia de Google Drive personal, donde el propietario de la cuenta tiene acceso total a todo, las Shared Drives usan permisos basados en roles gestionados a nivel organizativo. Los miembros pueden tener asignado el rol de Administrador, Gestor de contenido, Colaborador, Comentarista o Lector, y cada rol tiene capacidades específicas. Un Colaborador, por ejemplo, puede agregar archivos pero no puede eliminarlos ni moverlos, una operación que el comando `sync` de rclone puede intentar por defecto.

El detalle crítico es que el acceso a una Shared Drive debe concederse explícitamente a nivel de unidad. Pertenecer a la misma organización de Google Workspace no otorga acceso automáticamente. Además, las políticas de compartición a nivel de dominio establecidas por el administrador de Workspace pueden anular los permisos individuales de la unidad, bloqueando silenciosamente a usuarios externos o cuentas de servicio.

El asistente de configuración de remotos de RcloneView te pide seleccionar una Shared Drive específica por ID, garantizando que la conexión apunte a la unidad correcta en lugar de usar por defecto "Mi unidad" personal del usuario.

<img src="/support/images/en/blog/new-remote.png" alt="Selecting a Google Shared Drive in RcloneView remote setup" class="img-large img-center" />

## Configurar correctamente los alcances de OAuth

Una fuente habitual de errores de permisos son los alcances (scopes) de OAuth insuficientes. Cuando autorizas RcloneView con Google por primera vez, la pantalla de consentimiento de OAuth solicita permisos específicos. Si la autorización inicial usó un alcance de solo lectura, todas las operaciones de escritura en Shared Drives fallarán con un error 403.

RcloneView solicita el alcance `drive` por defecto, que proporciona acceso completo de lectura y escritura. Si anteriormente autorizaste con un alcance más restringido, necesitas volver a autorizar ejecutando de nuevo el flujo de configuración. El archivo de token almacena los alcances concedidos, y RcloneView puede detectar cuándo el token actual carece de los permisos necesarios para las operaciones configuradas.

Para entornos de Google Workspace que usan cuentas de servicio, la cuenta de servicio debe tener delegación de dominio completo con los alcances adecuados en la consola de administración. Sin este paso, la cuenta de servicio puede autenticarse pero no podrá acceder a ningún contenido de la Shared Drive.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring Google Drive transfer settings in RcloneView" class="img-large img-center" />

## Resolver escenarios de error comunes

**"Archivo no encontrado" en archivos que sí existen:** Esto suele significar que el remoto de rclone apunta a Mi unidad en lugar de a la Shared Drive. En RcloneView, verifica que el parámetro `team_drive` en la configuración de tu remoto esté establecido con el ID correcto de la Shared Drive.

**"Permisos insuficientes" al subir archivos:** Comprueba tu rol en la Shared Drive. Los Colaboradores y roles superiores pueden subir archivos, pero si un administrador ha restringido las subidas solo a Administradores, obtendrás este error. El registro detallado de RcloneView (`-vv`) muestra la respuesta exacta de la API, incluyendo qué permiso falta.

**"Límite de solicitudes excedido" durante operaciones masivas:** Las Shared Drives comparten cuota de API entre todos los miembros. Un trabajo de sincronización grande de un solo usuario puede agotar la cuota, causando errores 403 de límite de tasa para todos. El indicador `--tpslimit` de RcloneView regula las llamadas a la API para mantenerse dentro de las cuotas compartidas.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Reviewing file permissions and sync status in RcloneView" class="img-large img-center" />

## Cuenta de servicio y configuración del administrador de Workspace

Para flujos de trabajo automatizados, las cuentas de servicio son el método de autenticación recomendado. La cuenta de servicio debe agregarse como miembro de cada Shared Drive a la que necesite acceder, con al menos privilegios de Gestor de contenido para operaciones de sincronización que impliquen eliminar archivos.

Los administradores de Workspace también deben verificar que la política de "Compartir fuera de la organización" permita el patrón de acceso de la cuenta de servicio. Si el administrador ha deshabilitado la compartición externa, una cuenta de servicio de un proyecto de GCP distinto será bloqueada independientemente de su membresía en la Shared Drive.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting up automated Shared Drive sync with service account in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Configura un remoto de Google Drive** y selecciona tu Shared Drive por ID durante la configuración.
3. **Verifica los alcances de OAuth** volviendo a autorizar si tu token actual carece de permisos de escritura.
4. **Comprueba tu rol en la Shared Drive** — se requiere Gestor de contenido o superior para operaciones de sincronización completas.

Con la configuración correcta, los errores de permisos de Shared Drive desaparecen y los flujos de sincronización en equipo funcionan sin problemas.

---

**Guías relacionadas:**

- [Montar Google Shared Drives con RcloneView](https://rcloneview.com/support/blog/mount-google-shared-drives-rcloneview)
- [Solucionar errores de permiso denegado en sincronización en la nube — Resolver problemas de acceso con RcloneView](https://rcloneview.com/support/blog/fix-permission-denied-cloud-sync-errors-rcloneview)
- [Solucionar errores de límite de tasa de la API en la nube — Gestionar cuotas con RcloneView](https://rcloneview.com/support/blog/fix-cloud-api-rate-limiting-errors-rcloneview)

<CloudSupportGrid />
