---
slug: fix-onedrive-shared-folder-sync-errors-rcloneview
title: "Solucionar errores de sincronización de carpetas compartidas de OneDrive — Resuélvelos con RcloneView"
authors:
  - tayson
description: "Soluciona errores de sincronización de carpetas compartidas de OneDrive en RcloneView. Corrige errores de permisos, unidades compartidas ausentes y problemas de acceso al sincronizar contenido compartido de OneDrive."
keywords:
  - error de sincronización de carpeta compartida de OneDrive
  - solución de sincronización de OneDrive
  - unidad compartida de OneDrive RcloneView
  - corregir permisos de OneDrive
  - acceso a carpeta compartida de OneDrive
  - solución de problemas de Microsoft OneDrive
  - problema de sincronización de OneDrive
  - error de OneDrive en RcloneView
  - sincronización de OneDrive para empresas
  - solución de problemas de sincronización en la nube
tags:
  - RcloneView
  - onedrive
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar errores de sincronización de carpetas compartidas de OneDrive — Resuélvelos con RcloneView

> Diagnostica y corrige errores de sincronización de carpetas compartidas de OneDrive en RcloneView — desde errores de permisos y accesos directos faltantes hasta problemas de acceso de OneDrive para empresas a nivel organizativo.

El sistema de carpetas compartidas de OneDrive tiene particularidades que confunden a muchas herramientas de sincronización. Las carpetas compartidas contigo por colegas no se comportan igual que tu propio almacenamiento de OneDrive: aparecen de forma distinta en la API y requieren una configuración específica para acceder a ellas con rclone. Cuando RcloneView no puede ver o sincronizar una carpeta compartida, la causa raíz casi siempre es uno de estos problemas bien conocidos. Esta guía cubre los errores de sincronización de carpetas compartidas más comunes y cómo resolverlos.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Las carpetas compartidas no son visibles en RcloneView

OneDrive presenta las carpetas compartidas de forma diferente a tu propio almacenamiento. Las carpetas compartidas desde el OneDrive de otro usuario aparecen en la sección "Compartido" de la interfaz web, pero no forman parte automáticamente de tu carpeta raíz en la API a menos que las hayas añadido como acceso directo en tu OneDrive.

**Solución:** En la interfaz web de OneDrive, busca la carpeta compartida que necesitas sincronizar y haz clic en "Agregar acceso directo a Mis archivos". Esto crea un acceso directo en la raíz de tu propio OneDrive que es accesible mediante la API estándar, y por lo tanto visible y sincronizable en RcloneView. Después de añadir el acceso directo, actualiza el Explorador de archivos de RcloneView pulsando F5 o haciendo clic en Recargar.

<img src="/support/images/en/blog/new-remote.png" alt="OneDrive shared folder access configuration in RcloneView" class="img-large img-center" />

## Errores de permisos al sincronizar carpetas compartidas

Un error 403 Forbidden o "acceso denegado" al sincronizar una carpeta compartida de OneDrive suele indicar una de estas tres situaciones:

1. **Uso compartido de solo lectura:** El propietario de la carpeta la compartió con permisos de solo visualización. No puedes escribir ni eliminar contenido en ella. Si estás intentando sincronizar en una dirección que requiere acceso de escritura, confirma con el propietario de la carpeta que tienes permisos de Edición.

2. **Limitaciones de acceso de invitado:** Las cuentas externas (invitadas) en OneDrive para empresas tienen acceso restringido a la API. Algunas operaciones de sincronización están bloqueadas por la política de uso compartido de la organización.

3. **Políticas de Acceso Condicional:** Los inquilinos corporativos de Microsoft 365 pueden aplicar políticas de Acceso Condicional que restringen el acceso a la API desde dispositivos o aplicaciones no conformes. Contacta con tu administrador de TI si recibes fallos de autenticación recurrentes incluso después de iniciar sesión correctamente.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Diagnosing OneDrive shared folder permission errors in RcloneView" class="img-large img-center" />

## Problemas con bibliotecas compartidas de OneDrive para empresas

Las bibliotecas respaldadas por SharePoint (incluidas las bibliotecas de documentos de SharePoint expuestas como carpetas de OneDrive) requieren una configuración de remoto independiente en RcloneView. En lugar de usar el remoto de OneDrive personal, añade un remoto de SharePoint que apunte a la URL del sitio, o usa OneDrive para empresas con la configuración de sitio de SharePoint correspondiente.

Para los equipos que encuentran con frecuencia errores de longitud de ruta en OneDrive para empresas, el indicador `--onedrive-no-versions` de rclone puede reducir la sobrecarga de la API en las operaciones de sincronización. Añade indicadores personalizados desde Configuración > Rclone integrado > Indicadores globales de Rclone en RcloneView.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing OneDrive sync job history and error logs in RcloneView" class="img-large img-center" />

## Volver a autenticar un token caducado

Los tokens OAuth de OneDrive pueden caducar o invalidarse, especialmente después de un cambio de contraseña, una actualización de autenticación multifactor o un evento de seguridad de la cuenta. Un token caducado se manifiesta como errores repetidos de 401 Unauthorized durante la sincronización.

Para volver a autenticarte, abre el Administrador de remotos en la pestaña Remoto de RcloneView, selecciona tu remoto de OneDrive y edítalo. El flujo de edición te pedirá que vuelvas a ejecutar el proceso OAuth, abriendo una ventana del navegador para una nueva autenticación. Después de completar el nuevo inicio de sesión, guarda el remoto actualizado y vuelve a intentar el trabajo de sincronización.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Para las carpetas compartidas, añádelas primero como "Accesos directos a Mis archivos" en la interfaz web de OneDrive.
3. Confirma que tienes los permisos correctos (Edición, no solo Visualización) para las carpetas que necesitas sincronizar.
4. Vuelve a autenticar tu remoto de OneDrive si encuentras errores 401 repetidos.

La mayoría de los problemas con carpetas compartidas de OneDrive se reducen a las distinciones a nivel de API de Microsoft entre carpetas propias, compartidas y de acceso directo; entender esto hace que la solución de problemas sea mucho más directa.

---

**Guías relacionadas:**

- [Administrar la sincronización y copia de seguridad en la nube de OneDrive con RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Solucionar errores de sincronización de OneDrive: token delta y longitud de ruta con RcloneView](https://rcloneview.com/support/blog/fix-onedrive-sync-errors-delta-token-path-length-rcloneview)
- [Solucionar errores de sincronización en la nube por token OAuth caducado con RcloneView](https://rcloneview.com/support/blog/fix-oauth-token-expired-cloud-sync-rcloneview)

<CloudSupportGrid />
