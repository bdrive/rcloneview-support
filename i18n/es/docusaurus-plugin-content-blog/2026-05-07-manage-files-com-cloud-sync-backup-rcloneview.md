---
slug: manage-files-com-cloud-sync-backup-rcloneview
title: "Gestiona el almacenamiento de Files.com — Sincroniza y haz copias de seguridad de archivos con RcloneView"
authors:
  - tayson
description: "Conecta Files.com a RcloneView mediante SFTP o WebDAV, explora recursos compartidos de archivos empresariales y ejecuta trabajos automatizados de sincronización y copia de seguridad para una gestión segura de archivos."
keywords:
  - Files.com RcloneView
  - Files.com SFTP
  - Files.com WebDAV
  - gestión de archivos empresarial
  - sincronización en la nube Files.com
  - copia de seguridad Files.com
  - sincronización en la nube SFTP
  - transferencia segura de archivos
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - sftp
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona el almacenamiento de Files.com — Sincroniza y haz copias de seguridad de archivos con RcloneView

> Files.com es una potente plataforma de gestión de archivos empresarial, y RcloneView se conecta a ella mediante SFTP o WebDAV para que puedas sincronizar, hacer copias de seguridad y gestionar tus archivos a través de una interfaz gráfica de escritorio limpia.

Files.com ofrece transferencia de archivos gestionada de nivel empresarial con funciones de cumplimiento normativo, automatización y controles de acceso en los que confían las grandes organizaciones. Para los equipos que necesitan integrar Files.com en flujos de trabajo multicloud más amplios — sincronizando contenido con copias de seguridad en la nube, moviendo archivos a otros proveedores de almacenamiento o gestionando archivos de forma masiva — RcloneView ofrece una interfaz gráfica que funciona sobre los protocolos estándar SFTP y WebDAV. No es necesario instalar rclone por separado; viene incluido dentro de RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Files.com mediante SFTP

SFTP es la forma más fiable de conectar RcloneView a Files.com. En RcloneView, haz clic en **New Remote** y selecciona **SFTP**. Introduce el nombre de host de Files.com (normalmente `<your-subdomain>.files.com`), tu nombre de usuario y tu contraseña o una clave SSH. Files.com admite ambos métodos de autenticación — la autenticación mediante clave SSH es preferible para flujos de trabajo automatizados, ya que evita almacenar contraseñas.

Tras guardar, el remoto SFTP de Files.com aparece en el explorador de doble panel. Navega por la estructura de carpetas de Files.com, sube y descarga archivos mediante arrastrar y soltar, y gestiona tus recursos compartidos de archivos empresariales directamente desde la interfaz de RcloneView. El progreso de la transferencia se muestra en vivo para todas las operaciones.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Files.com as an SFTP remote in RcloneView" class="img-large img-center" />

## Conectar mediante WebDAV

Files.com también admite WebDAV, que es una alternativa si SFTP está bloqueado por un firewall o si prefieres el acceso basado en HTTP. En RcloneView, haz clic en **New Remote** > **WebDAV** e introduce la URL de WebDAV de Files.com, tu nombre de usuario y tu contraseña. El endpoint de WebDAV de Files.com suele estar disponible en `https://<subdomain>.files.com/dav/`.

WebDAV funciona bien para la exploración general de archivos y transferencias de volumen moderado. Para operaciones masivas de alto rendimiento — como sincronizar miles de archivos en un trabajo de copia de seguridad — SFTP generalmente ofrece un mejor rendimiento y una gestión más fiable de archivos grandes.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Files.com to cloud backup storage in RcloneView" class="img-large img-center" />

## Ejecutar trabajos de sincronización y copia de seguridad

Con Files.com conectado, puedes crear trabajos de sincronización usando el **Job Wizard**. Establece una carpeta de Files.com como origen y un destino de copia de seguridad en la nube (como Amazon S3, Backblaze B2 o Google Drive) como destino. Este es un patrón común para la copia de seguridad empresarial: Files.com actúa como la plataforma activa de gestión de archivos, y un almacén de objetos en la nube conserva las copias de archivo.

Ejecuta una **prueba en seco** (dry run) antes de ejecutar cualquier trabajo de sincronización para verificar que los archivos correctos están dentro del alcance. Para archivos sensibles en materia de cumplimiento normativo, el **Job History** de RcloneView proporciona un registro de auditoría completo de cada transferencia. Los usuarios con licencia PLUS pueden programar estos trabajos de copia de seguridad para que se ejecuten automáticamente — por ejemplo, cada noche — garantizando que los datos de Files.com se respalden de forma continua sin intervención manual.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Files.com backup sync in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Haz clic en **New Remote** > **SFTP** e introduce el nombre de host de Files.com, tu nombre de usuario y tu clave SSH o contraseña.
3. Explora la estructura de carpetas de Files.com en el explorador de doble panel.
4. Usa el **Job Wizard** para crear un trabajo de sincronización de copia de seguridad desde Files.com hacia el almacenamiento en la nube de tu elección.
5. Programa copias de seguridad recurrentes con una licencia PLUS para una protección de datos automatizada.

RcloneView conecta las capacidades de gestión de archivos empresarial de Files.com con el ecosistema más amplio de almacenamiento en la nube, ofreciéndote una única herramienta gráfica para todas tus operaciones de archivos.

---

**Guías relacionadas:**

- [Gestiona Seafile — Sincronización y copia de seguridad en la nube con RcloneView](https://rcloneview.com/support/blog/manage-seafile-cloud-sync-backup-rcloneview)
- [Gestiona Citrix ShareFile — Sincronización y copia de seguridad en la nube con RcloneView](https://rcloneview.com/support/blog/manage-citrix-sharefile-cloud-sync-backup-rcloneview)
- [Soluciona los errores de conexión SFTP rechazada y tiempo de espera agotado con RcloneView](https://rcloneview.com/support/blog/fix-sftp-connection-refused-timeout-rcloneview)

<CloudSupportGrid />
