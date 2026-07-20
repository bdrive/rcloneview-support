---
slug: remote-management-add-edit-delete-rcloneview
title: "Guía de gestión de remotos — Añadir, editar y organizar conexiones en la nube en RcloneView"
authors:
  - tayson
description: "Gestionar más de 70 proveedores en la nube empieza con remotos bien organizados. Aprende a añadir, configurar, editar y organizar tus conexiones en la nube en el gestor de remotos de RcloneView."
keywords:
  - rcloneview remote manager
  - add cloud remote rcloneview
  - manage cloud connections
  - rclone remote setup
  - cloud connection manager
  - rcloneview configure remote
  - add cloud account rcloneview
  - rcloneview setup guide
  - cloud remote configuration
  - organize cloud accounts
tags:
  - RcloneView
  - feature
  - guide
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Guía de gestión de remotos — Añadir, editar y organizar conexiones en la nube en RcloneView

> Tu primer remoto tarda 2 minutos en configurarse. El número 15 necesita un sistema. Así es como puedes gestionar todas tus conexiones en la nube de forma eficiente a medida que crece tu configuración multi-nube.

Cada proveedor en la nube en RcloneView comienza como un "remoto" — una conexión con nombre que incluye credenciales y configuración. Cuando tienes dos o tres remotos, la gestión es sencilla. Pero a medida que añades más proveedores (y muchos usuarios terminan con más de 10), mantenerlos organizados se vuelve esencial. Esta guía cubre todo, desde añadir tu primer remoto hasta gestionar una configuración multi-nube compleja.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Añadir un nuevo remoto

<img src="/support/images/en/blog/new-remote.png" alt="Add new remote" class="img-large img-center" />

El gestor de remotos te guía en el proceso de añadir cualquiera de los más de 70 proveedores. Cada tipo de proveedor tiene campos de configuración diferentes — Google Drive usa OAuth, S3 usa claves de acceso, WebDAV usa URL y credenciales.

### Tipos de conexión comunes

| Tipo de conexión | Ejemplos | Método de autenticación |
|----------------|---------|-------------|
| OAuth | Google Drive, OneDrive, Dropbox | Inicio de sesión en el navegador |
| Claves de acceso | S3, B2, Wasabi, R2 | Clave + Secreto |
| Usuario/Contraseña | WebDAV, FTP, SFTP | Credenciales |
| Token | Box, Mega | Token de API |

## Convenciones de nomenclatura

Un buen nombrado evita confusiones más adelante. Considera estos patrones:

- **Por proveedor**: `gdrive-personal`, `gdrive-work`, `s3-backup`
- **Por propósito**: `backup-primary`, `backup-secondary`, `archive`
- **Por equipo**: `marketing-drive`, `engineering-s3`, `finance-onedrive`

## Edición de la configuración de un remoto

¿Necesitas actualizar credenciales, cambiar endpoints o modificar ajustes? Edita cualquier remoto desde el gestor de remotos sin necesidad de recrearlo.

Motivos habituales para editar:

- **Tokens de OAuth caducados** — vuelve a autorizar sin perder las configuraciones de tus tareas
- **Claves de acceso modificadas** — actualiza las credenciales de S3 tras una rotación
- **Endpoint diferente** — cambia de región de S3 o usa endpoints personalizados

## Configuración avanzada

### Remotos crypt

Crea envoltorios cifrados alrededor de remotos existentes. Un remoto crypt cifra los nombres de archivo y su contenido antes de que lleguen a la nube:

### Remotos union/combine

Combina varios remotos en una única vista virtual. Útil para agrupar niveles de almacenamiento gratuito de distintos proveedores.

## Organizar tus remotos

A medida que crece el número de remotos:

- **Usa una nomenclatura coherente** para que los remotos se ordenen de forma lógica
- **Documenta tu configuración** — qué remoto respalda a cuál
- **Elimina remotos sin usar** — retira cuentas de prueba antiguas
- **Prueba las conexiones periódicamente** — los tokens caducados provocan fallos silenciosos

## Uso de remotos en el explorador

Una vez configurados, los remotos aparecen en el explorador de dos paneles. Selecciona cualquier remoto como panel de origen o de destino:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse remotes in explorer" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Añade tu primer remoto** — sigue la configuración guiada.
3. **Nómbralo con claridad** para futuras referencias.
4. **Añade más remotos** según lo necesites.
5. **Mantenlos organizados** con una nomenclatura coherente.

Una buena gestión de remotos es la base de una buena gestión en la nube.

---

**Guías relacionadas:**

- [Guía del gestor de conexiones](https://rcloneview.com/support/blog/rcloneview-connection-manager-embedded-external)
- [Cifrar copias de seguridad en la nube](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [Remotos virtuales: Combine, Union, Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)

<CloudSupportGrid />
