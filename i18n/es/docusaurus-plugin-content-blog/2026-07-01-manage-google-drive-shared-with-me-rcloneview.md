---
slug: manage-google-drive-shared-with-me-rcloneview
title: "Gestiona Google Drive Compartido conmigo — Sincroniza y respalda archivos con RcloneView"
authors:
  - alex
description: "Explora, sincroniza y realiza copias de seguridad de las carpetas de Google Drive Compartido conmigo usando la interfaz multiplataforma de RcloneView, sin perder de vista el contenido compartido."
keywords:
  - google drive compartido conmigo
  - sincronización de google drive compartido conmigo
  - rcloneview google drive
  - copia de seguridad de carpetas compartidas de google drive
  - cliente gui de google drive
  - shared_with_me rclone
  - copia de seguridad de colaboración en google drive
  - gestionar archivos compartidos de google drive
tags:
  - RcloneView
  - google-drive
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestiona Google Drive Compartido conmigo — Sincroniza y respalda archivos con RcloneView

> Los archivos que otras personas comparten contigo viven en un espacio separado de tu propio Drive — RcloneView te permite explorar, respaldar y sincronizar ese contenido compartido con la misma facilidad que tus propios archivos.

La sección "Compartido conmigo" de Google Drive contiene todos los archivos y carpetas que colegas, clientes o colaboradores han compartido con tu cuenta, pero no forma parte de la estructura de carpetas de tu Drive habitual de forma predeterminada. Esa separación hace que sea fácil perder de vista el contenido compartido, especialmente cuando una carpeta de un cliente necesita archivarse localmente o replicarse en otra nube para su resguardo. RcloneView resuelve esto conectándose al espacio Compartido conmigo como un remoto explorable propio, para que puedas tratar el contenido compartido como cualquier otra carpeta en tu flujo de trabajo.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conexión al contenido de Compartido conmigo

Los remotos estándar de Google Drive solo muestran archivos que posees o que has colocado en tu propia estructura de carpetas. Para acceder a elementos compartidos contigo, la configuración de remotos de RcloneView expone la opción `shared_with_me` para los remotos de Google Drive — al activarla, la conexión apunta a la vista Compartido conmigo en lugar de a la raíz de tu Drive personal. Esto significa que no necesitas una segunda cuenta de Google ni un truco de navegador para acceder a la carpeta compartida de un cliente; lo configuras una vez en el asistente de Nuevo Remoto y el árbol compartido aparece en el panel del Explorador como cualquier otra conexión.

<img src="/support/images/en/blog/new-remote.png" alt="Creando un nuevo remoto de Google Drive configurado para contenido de Compartido conmigo en RcloneView" class="img-large img-center" />

Una vez conectado, el remoto de Compartido conmigo se comporta como una fuente de archivos normal: la navegación por el árbol de carpetas, las vistas previas en miniatura para imágenes y el menú estándar del clic derecho para copiar, descargar y Obtener enlace público funcionan de la misma manera. RcloneView también sincroniza y compara carpetas — en la licencia FREE — por lo que el contenido compartido no está limitado a la exploración de solo lectura.

## Respaldar carpetas compartidas antes de que desaparezcan

Las carpetas compartidas pueden desaparecer de tu vista si el propietario revoca el acceso o elimina el archivo de origen, lo cual es un riesgo real cuando dependes del Drive de otra persona para los entregables de un proyecto. Ejecutar un trabajo de sincronización unidireccional desde el remoto de Compartido conmigo hacia tu propio Google Drive, un disco local o un bucket de almacenamiento de objetos crea una copia independiente que controlas. Configura el trabajo con la dirección "Modificar solo el destino" para que el destino de la copia de seguridad siempre refleje el estado actual de la carpeta compartida sin alterar el original.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Sincronizando una carpeta de Google Drive Compartido conmigo con un destino de copia de seguridad en RcloneView" class="img-large img-center" />

Para relaciones recurrentes con clientes, la configuración de filtrado te permite excluir los tipos de archivo que no necesitas archivar — los Google Docs o extensiones específicas se pueden omitir usando las reglas de filtro predefinidas o personalizadas en el Paso 3 del asistente de sincronización, manteniendo las copias de seguridad centradas en los archivos que realmente importan.

## Programar protección continua

Una carpeta compartida que un cliente actualiza semanalmente necesita más que una copia única. Los usuarios con licencia PLUS pueden adjuntar una programación de tipo crontab al trabajo de sincronización para que el contenido de Compartido conmigo se respalde automáticamente de forma recurrente, sin necesidad de volver a ejecutar el trabajo manualmente. El Historial de trabajos registra entonces el estado, el tamaño transferido y la duración de cada ejecución, dándote un registro de auditoría claro de cuándo se capturó por última vez el contenido compartido.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Programando un trabajo de copia de seguridad recurrente para un remoto de Google Drive Compartido conmigo" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Crea un nuevo remoto de Google Drive y activa la opción `shared_with_me` durante la configuración.
3. Explora el árbol de Compartido conmigo en el panel del Explorador para confirmar que aparecen las carpetas esperadas.
4. Configura un trabajo de sincronización unidireccional hacia un destino de copia de seguridad, y prográmalo si tienes una licencia PLUS.

El contenido compartido no debería ser un punto ciego en tu estrategia de copias de seguridad — incorporarlo a RcloneView lo pone bajo la misma protección que todo lo demás que gestionas.

---

**Guías relacionadas:**

- [Gestiona el almacenamiento de Google Drive — Sincroniza y respalda archivos con RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Soluciona errores de permisos de Google Shared Drive — Cómo resolverlos con RcloneView](https://rcloneview.com/support/blog/fix-google-shared-drive-permission-errors-rcloneview)
- [Sincroniza dos cuentas de Google Drive con RcloneView](https://rcloneview.com/support/blog/sync-two-google-drive-accounts-rcloneview)

<CloudSupportGrid />
