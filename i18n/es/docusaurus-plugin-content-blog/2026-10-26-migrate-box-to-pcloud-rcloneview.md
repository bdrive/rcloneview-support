---
slug: migrate-box-to-pcloud-rcloneview
title: "Migrar de Box a pCloud — Transfiere archivos con RcloneView"
authors:
  - jay
description: "Migra de Box a pCloud con RcloneView: conecta ambos remotos, ejecuta un Dry Run, copia de nube a nube y verifica el resultado con Folder Compare."
keywords:
  - migrar de Box a pCloud
  - transferencia de Box a pCloud
  - mover archivos de Box a pCloud
  - migración de Box a pCloud
  - RcloneView de nube a nube
  - sincronización de Box a pCloud
  - rclone GUI
  - herramienta de migración en la nube
  - verificar transferencia en la nube
  - almacenamiento alternativo a Box
tags:
  - RcloneView
  - box
  - pcloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar de Box a pCloud — Transfiere archivos con RcloneView

> Mueve tus carpetas de Box a pCloud en una sola pasada controlada, con una vista previa antes de copiar nada y una comparación al terminar.

Los equipos que se han quedado pequeños con un espacio de trabajo de Box, o los autónomos que quieren controlar su propio almacenamiento personal, se enfrentan a la misma tarea: miles de archivos en carpetas de proyecto anidadas que deben llegar intactos a una cuenta nueva. Descargar y volver a subir desde el navegador es lento y frágil. RcloneView conecta Box y pCloud lado a lado y transfiere directamente entre ambos, así que no hace falta almacenar nada de forma temporal en tu disco local.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta Box y pCloud como remotos

Ambos servicios usan el inicio de sesión OAuth basado en el navegador en RcloneView. Abre **Remote > New Remote**, elige Box y aprueba el acceso en la ventana del navegador que se abre. Repite el proceso con pCloud. Si tus archivos están en una cuenta de Box Business, es necesario el ajuste de subtipo empresarial (`box_sub_type = enterprise`); las cuentas personales no lo necesitan.

RcloneView puede montar y sincronizar más de 90 proveedores desde una sola ventana en Windows, macOS y Linux, de modo que ambos remotos aparecen como pestañas en el mismo Explorer.

<img src="/support/images/en/blog/new-remote.png" alt="Añadir Box y pCloud como nuevos remotos en RcloneView" class="img-large img-center" />

## Explora ambos lados antes de copiar

Abre Box en un panel del Explorer y pCloud en el otro. Usa el Folder Tree y Get Size para estimar cuántos datos vas a mover y decide si migrar todo o solo un subconjunto. Arrastrar entre dos remotos distintos realiza una **copia**, lo que deja intactos tus originales de Box hasta que estés listo para retirarlos.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box y pCloud abiertos lado a lado para una transferencia de nube a nube" class="img-large img-center" />

## Crea un trabajo Copy con Dry Run

Para cualquier cosa más allá de unos pocos archivos, crea un trabajo en lugar de arrastrar. En el asistente de Sync, establece Box como origen y una carpeta de pCloud como destino, y elige el tipo de trabajo **Copy** para que no se elimine nada en el destino. En la configuración avanzada, activa la comparación por suma de verificación y mantén bajo el número de equality checkers si Box empieza a limitar las peticiones. En el filtrado, usa Max file size o reglas de exclusión como `.git/` para omitir los archivos que no necesitas.

Ejecuta primero **Dry Run**. Muestra los archivos que se copiarían y eliminarían, de modo que una carpeta mal elegida se detecta antes de que se mueva ningún dato. El filtro predefinido **Box Docs** puede excluir los documentos nativos de la nube de Box si no quieres incluirlos en la copia.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Ejecución de un trabajo Copy de Box a pCloud en RcloneView" class="img-large img-center" />

## Verifica con Folder Compare

Cuando termine el trabajo, abre **Compare** con Box a la izquierda y pCloud a la derecha. Filtra por archivos presentes solo a la izquierda y por archivos diferentes; todo lo que siga apareciendo necesita otra pasada. Job History registra el estado, el tamaño, la velocidad y el número de archivos de cada ejecución, lo que sirve como prueba de que la migración se completó.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare mostrando las diferencias entre Box y pCloud" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade Box y pCloud mediante **Remote > New Remote** e inicia sesión con OAuth.
3. Crea un trabajo Copy de Box a pCloud y ejecuta un Dry Run.
4. Ejecuta el trabajo y confirma el resultado con Folder Compare antes de limpiar Box.

Una migración por etapas, que primero copia y después verifica, mantiene a salvo tus datos de Box hasta que pCloud contenga todo lo que necesitas.

---

**Guías relacionadas:**

- [Migrar de Box a Backblaze B2](https://rcloneview.com/support/blog/migrate-box-to-backblaze-b2-rcloneview)
- [Migrar de Box a Google Drive](https://rcloneview.com/support/blog/migrate-box-to-google-drive-rcloneview)
- [Gestionar el almacenamiento de pCloud](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
