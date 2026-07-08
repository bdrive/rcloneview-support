---
slug: migrate-box-to-aws-s3-rcloneview
title: "Migrar de Box a AWS S3 — Transfiere archivos con RcloneView"
authors:
  - tayson
description: "Migra archivos de Box a AWS S3 usando RcloneView. Transfiere contenido empresarial a un almacenamiento S3 escalable con verificación de checksum y trabajos programados."
keywords:
  - box to aws s3
  - migrate box to s3
  - box cloud migration
  - aws s3 transfer
  - cloud-to-cloud migration
  - rcloneview box transfer
  - enterprise cloud migration
  - box to amazon s3
  - box backup to s3
  - object storage migration
tags:
  - RcloneView
  - box
  - amazon-s3
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar de Box a AWS S3 — Transfiere archivos con RcloneView

> Mover el contenido de tu organización de Box a AWS S3 desbloquea almacenamiento programable a gran escala — y RcloneView se encarga del trabajo pesado.

Box destaca en la gestión de contenido empresarial gracias a sus metadatos, flujos de trabajo y funciones de gobernanza. Pero cuando tu arquitectura se orienta hacia servicios nativos de AWS — funciones Lambda que procesan cargas, Athena consultando data lakes o CloudFront sirviendo activos — almacenar archivos en S3 elimina el middleware necesario para conectar Box con tu stack de AWS. RcloneView migra archivos de Box a buckets de S3 mediante una interfaz visual, preservando las estructuras de carpetas y verificando cada transferencia.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué pasar de Box a AWS S3

AWS S3 ofrece almacenamiento prácticamente ilimitado con precios granulares en seis clases de almacenamiento — desde S3 Standard para datos de acceso frecuente hasta S3 Glacier Deep Archive a $0.00099 por GB al mes para retención a largo plazo. Box cobra tarifas de licencia por usuario que pueden superar los $20 por usuario al mes en planes empresariales, y su almacenamiento se agrupa en lugar de asignarse individualmente.

Para los equipos de desarrollo, el ecosistema de S3 no tiene comparación. Las notificaciones de eventos activan funciones Lambda, S3 Select consulta datos in situ, las reglas de versionado y replicación protegen contra la pérdida de datos, y las políticas de IAM ofrecen control de acceso detallado. La API de Box es capaz, pero está diseñada para la colaboración de contenido, no para operaciones de almacenamiento a nivel de infraestructura. Migrar a S3 alinea el almacenamiento de tus archivos con el resto de tu infraestructura de AWS.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and AWS S3 remotes in RcloneView" class="img-large img-center" />

## Configurar los remotos de Box y S3

Agrega un remoto de Box en RcloneView seleccionando "Box" como tipo de proveedor. El flujo de OAuth abre tu navegador para la autenticación de Box. Inicia sesión con tus credenciales de Box y autoriza a RcloneView. El remoto se conecta a la carpeta raíz de tu Box, incluidas todas las carpetas compartidas contigo que te pertenecen.

Para AWS S3, crea un nuevo remoto y selecciona "Amazon S3." Ingresa tu AWS Access Key ID y Secret Access Key, o usa un rol de IAM si RcloneView se ejecuta en una instancia EC2. Selecciona la región de destino y especifica el nombre del bucket. RcloneView valida las credenciales y confirma el acceso al bucket. Si necesitas crear un nuevo bucket, hazlo primero en la Consola de AWS con la región, el cifrado y la configuración de versionado que prefieras.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring Box to S3 cloud-to-cloud transfer in RcloneView" class="img-large img-center" />

## Ejecutar la migración

Usa el explorador de dos paneles para navegar por Box en un lado y por S3 en el otro. Selecciona las carpetas de Box que deseas migrar — directorios completos de un departamento, archivos de proyectos o árboles de contenido específicos. Navega hasta el prefijo de S3 de destino en el otro panel.

Para una migración gestionada, crea un trabajo de Copia en el Administrador de trabajos. Establece Box como origen y S3 como destino. Usa el modo "Copiar" para transferir archivos sin eliminarlos de Box, lo que te brinda una ruta de reversión. La API de Box usa checksums SHA-1, y S3 almacena hashes MD5 y ETag — RcloneView gestiona la comparación usando el tamaño del archivo y la fecha de modificación por defecto, con verificación de checksum opcional disponible.

Box impone límites de velocidad en su API (aproximadamente 10 llamadas de API por segundo para cuentas empresariales). RcloneView respeta estos límites con reintentos automáticos y retroceso exponencial. Para migraciones grandes con cientos de miles de archivos, ejecuta el trabajo a lo largo de varios días usando ventanas programadas.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Starting a Box to AWS S3 migration job in RcloneView" class="img-large img-center" />

## Validación posterior a la migración y transición final

Después de completar la transferencia, valida la migración usando la función de comparación de RcloneView. Abre ambos remotos uno junto al otro y ejecuta una comparación de carpetas para verificar el número de archivos, los tamaños y la estructura. Revisa el historial del trabajo en busca de archivos omitidos o con errores y vuelve a ejecutar el trabajo para capturarlos.

Considera establecer la clase de almacenamiento del bucket de S3 según los patrones de acceso. Los archivos de proyectos de acceso frecuente deben ir en S3 Standard, mientras que el contenido archivado puede moverse a S3 Intelligent-Tiering o Glacier mediante políticas de ciclo de vida. Mantén el remoto de Box activo en RcloneView durante el período de transición, ejecutando trabajos de sincronización incremental hasta que todos los usuarios hayan migrado sus flujos de trabajo a S3.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Box to S3 migration transfers" class="img-large img-center" />

## Cómo empezar

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Autentica tu cuenta de Box mediante OAuth al crear el remoto de Box.
3. Agrega tu remoto de AWS S3 con credenciales de IAM y selecciona el bucket y la región de destino.
4. Crea un trabajo de Copia de Box a S3, configura el manejo de límites de velocidad y prográmalo a lo largo de varios días para conjuntos de datos grandes.

Una vez que todo el contenido esté verificado en S3, transiciona tus aplicaciones y da de baja el almacenamiento de Box a medida que tu equipo completa la transición.

---

**Guías relacionadas:**

- [Migrar de Box a SharePoint y OneDrive con RcloneView](https://rcloneview.com/support/blog/migrate-box-to-sharepoint-onedrive-rcloneview)
- [Migrar de Box a Google Drive con RcloneView](https://rcloneview.com/support/blog/migrate-box-to-google-drive-rcloneview)
- [Montar el almacenamiento de Box como una unidad de red con RcloneView](https://rcloneview.com/support/blog/mount-box-storage-network-drive-rcloneview)

<CloudSupportGrid />
