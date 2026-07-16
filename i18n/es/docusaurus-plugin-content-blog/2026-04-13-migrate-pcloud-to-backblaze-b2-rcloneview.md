---
slug: migrate-pcloud-to-backblaze-b2-rcloneview
title: "Migrar de pCloud a Backblaze B2 — Transfiere archivos con RcloneView"
authors:
  - tayson
description: "Guía paso a paso para migrar archivos de pCloud a Backblaze B2 usando RcloneView. Conecta mediante OAuth y App Key, previsualiza con Dry Run y ejecuta el trabajo de sincronización."
keywords:
  - migrar pCloud a Backblaze B2
  - transferencia de pCloud a Backblaze B2
  - migración de pCloud con RcloneView
  - sincronización de pCloud a B2
  - migración de nube a nube
  - archivo en Backblaze B2
  - alternativa de copia de seguridad a pCloud
  - migración en la nube con RcloneView
tags:
  - pcloud
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar de pCloud a Backblaze B2 — Transfiere archivos con RcloneView

> Pasar de pCloud a Backblaze B2 te ofrece un almacenamiento de archivo significativamente más económico: RcloneView gestiona la transferencia de nube a nube sin hacer pasar los datos por tu equipo.

pCloud es un servicio de almacenamiento en la nube personal fiable con opciones de plan de por vida, pero para archivar grandes volúmenes de datos, el precio por GB de Backblaze B2 suele ser más rentable. Ya sea que estés consolidando servicios en la nube o añadiendo B2 como nivel de archivo, RcloneView simplifica la migración: conecta ambos proveedores, previsualiza con Dry Run y ejecuta el trabajo de sincronización. Toda la transferencia ocurre de nube a nube.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Paso 1 — Conectar pCloud

Abre RcloneView y ve a **Remote Manager**. Haz clic en **New Remote** y selecciona **pCloud** de la lista de proveedores. pCloud utiliza inicio de sesión OAuth en el navegador: RcloneView abre tu navegador, inicias sesión y autorizas, y el token se guarda. No hay que gestionar claves de API manualmente.

Tras la autorización, abre el remoto de pCloud en el File Explorer para confirmar que puedes ver tus archivos y carpetas. Anota qué directorios de nivel superior deseas migrar.

<img src="/support/images/en/blog/new-remote.png" alt="Adding pCloud and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## Paso 2 — Conectar Backblaze B2

Todavía en **Remote Manager**, haz clic de nuevo en **New Remote** y selecciona **Backblaze B2**. Backblaze B2 se autentica con un **Application Key ID** y una **Application Key**, ambos disponibles en la consola de Backblaze en **App Keys**. Crea una clave con los permisos adecuados (lectura y escritura en el bucket de destino, o todos los buckets si se trata de una migración). Introduce ambos valores en RcloneView y guarda.

Abre el remoto de B2 para confirmar que carga tus buckets. Si el bucket de destino aún no existe, puedes crearlo directamente desde el explorador de archivos de RcloneView haciendo clic derecho en el nivel raíz.

## Paso 3 — Configurar el trabajo de migración

Ve a **Jobs** y haz clic en **New Job**. Establece pCloud como origen y selecciona la carpeta específica o la raíz. Establece Backblaze B2 como destino y elige el bucket y la ruta de destino.

En el paso 2 del asistente de trabajos, revisa las opciones de transferencia:

- Activa **Dry Run** primero para ver exactamente qué se copiará
- Establece **transfers** entre 4 y 8 para un equilibrio entre velocidad y estabilidad de la API
- Activa la **verificación de checksum** si deseas confirmar la integridad de los archivos tras la transferencia

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud migration from pCloud to Backblaze B2" class="img-large img-center" />

## Paso 4 — Ejecutar Dry Run y luego la migración real

Con Dry Run activado, haz clic en **Run**. RcloneView registra lo que transferiría —nombres de archivo, tamaños y recuentos— sin realizar ningún cambio. Revisa el resultado en la pestaña **Log**. Si la lista es correcta, vuelve a la configuración del trabajo, desactiva Dry Run y ejecuta de nuevo.

La migración real se ejecuta de nube a nube: pCloud envía los datos a B2 sin pasar por tu equipo local, por lo que tu ancho de banda local no es un cuello de botella. La velocidad de transferencia depende de los servidores de ambos proveedores.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the pCloud to Backblaze B2 migration job" class="img-large img-center" />

## Verificar la migración

Una vez completado el trabajo, abre la herramienta **Folder Compare** y apúntala al origen de pCloud y al destino de B2. RcloneView compara ambos lados y resalta cualquier discrepancia. Para datos de alto valor, este paso confirma que la migración se completó antes de eliminar los archivos de pCloud.

Job History registra la ejecución completa: total de archivos, datos transferidos, duración y cualquier error. Consérvalo como referencia.

## Cómo empezar

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Conecta pCloud mediante OAuth y Backblaze B2 mediante Application Key en **Remote Manager**.
3. Crea un trabajo de sincronización con pCloud como origen y B2 como destino; ejecuta primero un Dry Run.
4. Desactiva Dry Run y ejecuta la migración; verifica con Folder Compare.

Una vez confirmada la migración, Backblaze B2 te ofrece un almacenamiento de archivo duradero y rentable para todo lo que estaba en pCloud.

---

**Guías relacionadas:**

- [Copia de seguridad de pCloud a AWS S3 con RcloneView](https://rcloneview.com/support/blog/backup-pcloud-to-aws-s3-rcloneview)
- [Migrar de pCloud a OneDrive con RcloneView](https://rcloneview.com/support/blog/migrate-pcloud-to-onedrive-rcloneview)
- [Migraciones en la nube verificadas por checksum con RcloneView](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
