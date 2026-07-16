---
slug: hasher-remote-integrity-cloud-backup-rcloneview
title: "Remoto Hasher — Añade sumas de verificación de integridad de archivos a cualquier almacenamiento en la nube en RcloneView"
authors:
  - robin
description: "Descubre cómo el remoto Hasher de RcloneView añade verificación de sumas de comprobación a los backends en la nube que carecen de soporte de hash nativo, protegiendo cada copia de seguridad frente a la corrupción silenciosa."
keywords:
  - RcloneView Hasher remote
  - cloud file integrity verification
  - checksum cloud backup rcloneview
  - rclone hasher remote guide
  - verify cloud transfer integrity
  - cloud backup checksum validation
  - detect file corruption cloud sync
  - cloud storage data integrity rcloneview
  - hash verification cloud backup
  - rclone virtual remote hasher
tags:
  - feature
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Remoto Hasher — Añade sumas de verificación de integridad de archivos a cualquier almacenamiento en la nube en RcloneView

> El remoto virtual Hasher añade de forma silenciosa el seguimiento de sumas de comprobación a los backends en la nube que no lo soportan de forma nativa, convirtiendo cada sincronización en una transferencia verificada y resistente a la corrupción.

No todos los proveedores de almacenamiento en la nube calculan y almacenan sumas de comprobación de archivos. Los proveedores que dependen únicamente del tamaño del archivo y la marca de tiempo de modificación para la comparación pueden pasar por alto la corrupción silenciosa de datos, el tipo que ocurre cuando un archivo se transfiere por completo pero llega con bits invertidos. Para archivistas, administradores de sistemas y empresas con requisitos de integridad de datos, esta es una brecha significativa. RcloneView admite el remoto Hasher de rclone, un envoltorio de remoto virtual que añade seguimiento de hash MD5, SHA-1 u otros sobre cualquier backend en la nube existente sin cambiar la forma en que almacenas o recuperas archivos.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Qué es el remoto Hasher y por qué es importante

El remoto Hasher es uno de los tipos de remoto virtual de rclone: un envoltorio que se sitúa delante de un remoto existente y mejora sus capacidades. En concreto, el remoto Hasher almacena sumas de comprobación junto a tus archivos, guardando en caché los valores de hash para que las operaciones de sincronización posteriores puedan comparar archivos por contenido en lugar de depender únicamente de la comparación por tamaño. Esto es especialmente importante cuando sincronizas con proveedores en la nube que no exponen APIs de hash nativas, o cuando necesitas detectar corrupción a nivel de bit que no cambiaría el tamaño de un archivo.

Un ejemplo práctico: una productora audiovisual que archiva material diario de vídeo en 4K en un servidor de almacenamiento basado en WebDAV no cuenta con soporte de hash nativo por parte del servidor. Sin sumas de comprobación, rclone compara los archivos por tamaño y marca de tiempo, pero un archivo sutilmente corrupto con un tamaño idéntico parecería inalterado. Envolver el remoto WebDAV en un remoto Hasher añade comparación de hash a cada sincronización, detectando el archivo corrupto y marcándolo para revisión antes de que sobrescriba silenciosamente una copia correcta.

<img src="/support/images/en/blog/new-remote.png" alt="Creating a Hasher virtual remote in RcloneView's New Remote wizard" class="img-large img-center" />

## Configuración de un remoto Hasher en RcloneView

En RcloneView, los remotos virtuales como Hasher se crean mediante el mismo asistente de Nuevo Remoto que cualquier proveedor en la nube. Desde la pestaña Remoto, haz clic en Nuevo Remoto y desplázate hasta los tipos de remoto virtual; encontrarás Hasher junto a Crypt, Union, Combine y otros. Selecciona el remoto subyacente que deseas envolver (por ejemplo, tu servidor WebDAV o FTP), elige qué algoritmos de hash habilitar y guarda. El remoto Hasher envuelve tu backend de forma transparente.

Una vez guardado, el remoto Hasher aparece en el Administrador de Remotos como cualquier otro remoto. Puedes abrirlo en el panel Explorador, navegar por los archivos y ejecutar trabajos de sincronización contra él. La base de datos de hash se mantiene automáticamente: RcloneView y rclone se encargan de la contabilidad, y tú interactúas con el remoto Hasher exactamente igual que con el almacenamiento subyacente. No se requiere ningún cambio en tu flujo de trabajo.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Running a checksum-verified sync transfer using the Hasher remote in RcloneView" class="img-large img-center" />

## Ejecución de transferencias con integridad verificada

Con el remoto Hasher configurado, habilita la opción **Enable checksum** en el Paso 2 (Configuración Avanzada) del asistente de trabajos de sincronización de RcloneView. Esto indica a rclone que compare los archivos usando los valores de hash almacenados en caché en lugar de basarse solo en el tamaño y la marca de tiempo. En la primera ejecución, se calculan y almacenan los hashes. Las ejecuciones posteriores se comparan con esos hashes almacenados, omitiendo el recálculo para los archivos que no han cambiado, lo que mantiene rápidos los tiempos de sincronización incluso en archivos grandes.

La función de Ejecución de Prueba (Dry Run) funciona perfectamente con los remotos Hasher. Antes de confirmar una gran sincronización de archivo, ejecuta una prueba en seco para previsualizar exactamente qué archivos se copiarían, modificarían u omitirían según la comparación de hash. Esto resulta muy valioso antes de sobrescribir meses de material archivado, y no cuesta nada: no se mueve ningún archivo hasta que confirmes.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing files with checksum verification enabled in RcloneView" class="img-large img-center" />

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing integrity-verified backup runs completed in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. En la pestaña Remoto, haz clic en Nuevo Remoto y selecciona Hasher en la sección de remotos virtuales.
3. Envuelve tu remoto en la nube existente (WebDAV, FTP o cualquier backend sin sumas de comprobación nativas) con el remoto Hasher.
4. Crea un trabajo de sincronización, habilita la comparación de sumas de comprobación en el Paso 2 de Configuración Avanzada y ejecuta tu primera copia de seguridad con integridad verificada.

Proteger tus archivos frente a la corrupción silenciosa requiere solo unos minutos de configuración, y el remoto Hasher pone esa protección al alcance de todos los backends que admite RcloneView.

---

**Guías relacionadas:**

- [Comprobar y verificar la integridad de archivos en la nube con RcloneView](https://rcloneview.com/support/blog/check-verify-cloud-file-integrity-rcloneview)
- [Cifrar copias de seguridad en la nube con el remoto Crypt en RcloneView](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [Remotos virtuales: Combine, Union y Alias en RcloneView](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)

<CloudSupportGrid />
