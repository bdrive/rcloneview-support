---
slug: manage-sugarsync-cloud-sync-backup-rcloneview
title: "Gestiona el almacenamiento de SugarSync — Sincroniza y haz copias de seguridad de archivos con RcloneView"
authors:
  - tayson
description: "Conecta SugarSync a RcloneView y gestiona tus archivos en la nube de forma visual. Sincroniza, haz copias de seguridad y transfiere datos de SugarSync entre plataformas con una GUI fácil de usar."
keywords:
  - gestión de almacenamiento en la nube SugarSync
  - sincronización de SugarSync con RcloneView
  - copia de seguridad de archivos de SugarSync
  - GUI de transferencia de archivos de SugarSync
  - SugarSync rclone
  - gestionar SugarSync con RcloneView
  - alternativa al cliente de escritorio de SugarSync
  - herramienta de copia de seguridad en la nube de SugarSync
  - sincronizar archivos de SugarSync
  - SugarSync multi-nube
tags:
  - RcloneView
  - sugarsync
  - cloud-storage
  - cloud-sync
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona el almacenamiento de SugarSync — Sincroniza y haz copias de seguridad de archivos con RcloneView

> RcloneView aporta control total mediante GUI a tu almacenamiento de SugarSync — explora, sincroniza y haz copias de seguridad de archivos sin depender únicamente del cliente de escritorio nativo de SugarSync.

SugarSync ha sido una solución de copia de seguridad en la nube de confianza para pequeñas empresas y profesionales independientes que necesitan una sincronización de archivos fiable entre dispositivos. Aunque la aplicación nativa de SugarSync cubre la sincronización diaria, RcloneView añade funciones potentes para administradores de TI y usuarios avanzados: trabajos programados, transferencias de nube a nube, migraciones masivas y gestión centralizada junto con tus otras cuentas en la nube.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conecta SugarSync a RcloneView

RcloneView se conecta a SugarSync utilizando el backend de SugarSync de rclone. En RcloneView, ve a la pestaña Remote > New Remote y selecciona SugarSync de la lista de proveedores. Se te pedirá que te autentiques con las credenciales de tu cuenta de SugarSync, y el token se almacena de forma segura en el almacenamiento local cifrado de RcloneView.

Una vez conectado, tus carpetas de SugarSync — incluyendo Magic Briefcase y cualquier carpeta de sincronización personalizada — aparecen en el explorador de archivos. Explora el contenido de las carpetas, comprueba el tamaño de los archivos y realiza operaciones de gestión de archivos mediante el menú contextual del botón derecho.

<img src="/support/images/en/blog/new-remote.png" alt="Adding SugarSync as a remote in RcloneView" class="img-large img-center" />

## Haz copia de seguridad de SugarSync a otra nube

Un caso de uso convincente para conectar SugarSync a RcloneView es la copia de seguridad entre nubes: copiar el contenido de SugarSync a un proveedor secundario como Backblaze B2 o Amazon S3. Un consultor autónomo con años de documentos de clientes en SugarSync puede configurar un trabajo de sincronización semanal para reflejar ese contenido en un archivo compatible con S3, garantizando redundancia si la cuenta principal alguna vez queda inaccesible.

El asistente de sincronización de RcloneView te guía a través de la selección del origen, la configuración del destino, las opciones de filtrado y la programación. Activa la verificación de checksum para confirmar que cada archivo transferido coincide exactamente con su origen.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a backup job from SugarSync in RcloneView" class="img-large img-center" />

## Explora y organiza los archivos de SugarSync

El explorador de archivos de doble panel te permite trabajar con SugarSync y otra nube o carpeta local en paralelo. Compara el contenido de las carpetas visualmente usando la función integrada de comparación de carpetas de RcloneView — encuentra archivos que existen en un lado pero no en el otro, o identifica archivos con diferencias de tamaño que podrían indicar sincronizaciones incompletas.

Para bibliotecas grandes de SugarSync con miles de archivos, usa las funciones de ordenación y filtrado de la lista de archivos para navegar rápidamente. El resumen del pie de página muestra el número total de archivos y el tamaño de almacenamiento combinado de un vistazo.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing SugarSync folder contents in RcloneView" class="img-large img-center" />

## Migra desde SugarSync

Si estás planeando migrar de SugarSync a otro proveedor, RcloneView simplifica considerablemente el proceso. Configura un trabajo de sincronización único desde SugarSync hasta tu destino objetivo, usa la ejecución de prueba (dry run) para previsualizar lo que se transferirá y luego ejecuta la migración completa. El historial de trabajos proporciona un registro completo de los archivos movidos.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating SugarSync data to another cloud provider with RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Ve a la pestaña Remote > New Remote y selecciona SugarSync.
3. Autentícate con tus credenciales de SugarSync y guarda el remoto.
4. Explora los archivos en el explorador y configura trabajos de sincronización o copia de seguridad hacia otros proveedores.

RcloneView ofrece a los usuarios de SugarSync herramientas de sincronización y copia de seguridad de nivel empresarial sin reemplazar los flujos de trabajo con los que ya se sienten cómodos.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento de Dropbox — Sincroniza y haz copias de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Gestiona el almacenamiento de Google Drive — Sincroniza y haz copias de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Almacenamiento en la nube para autónomos y contratistas independientes — RcloneView](https://rcloneview.com/support/blog/cloud-storage-freelancers-independent-contractors-rcloneview)

<CloudSupportGrid />
