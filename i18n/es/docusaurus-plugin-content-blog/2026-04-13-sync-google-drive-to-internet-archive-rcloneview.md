---
slug: sync-google-drive-to-internet-archive-rcloneview
title: "Sincroniza Google Drive con Internet Archive — Preservación digital con RcloneView"
authors:
  - tayson
description: "Aprende a archivar archivos de Google Drive en Internet Archive para la preservación digital a largo plazo usando RcloneView. Ideal para investigadores, periodistas y educadores."
keywords:
  - Google Drive Internet Archive sync
  - digital preservation RcloneView
  - archive Google Drive files
  - Internet Archive rclone GUI
  - long-term cloud backup
  - researcher data archiving
  - Google Drive backup Internet Archive
  - RcloneView digital archive
tags:
  - google-drive
  - internet-archive
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sincroniza Google Drive con Internet Archive — Preservación digital con RcloneView

> Internet Archive ofrece almacenamiento permanente y gratuito para contenido digital — RcloneView facilita enviar tus archivos de Google Drive allí para la preservación a largo plazo.

Los investigadores que archivan datos de campo, los periodistas que preservan documentos fuente y los educadores que mantienen materiales de curso enfrentan el mismo desafío: Google Drive es cómodo para el trabajo activo, pero no está diseñado para la preservación permanente. Internet Archive (archive.org) sí lo está. Almacena contenido de forma indefinida y lo hace accesible pública (o privadamente) a largo plazo. RcloneView conecta ambos proveedores y te permite sincronizar contenido de Google Drive con Internet Archive sin tocar la línea de comandos.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Google Drive

Abre RcloneView y ve a **Remote Manager**. Haz clic en **New Remote** y selecciona **Google Drive**. RcloneView abre tu navegador para la autenticación OAuth — inicia sesión con tu cuenta de Google y concede acceso. Después de la autorización, el remoto aparece en Remote Manager. Ábrelo para confirmar que tus archivos de Drive son visibles.

Si necesitas archivar una **Shared Drive**, configura el remoto para que apunte a la raíz de esa Shared Drive específica en lugar de My Drive. Revisa la configuración avanzada del remoto en RcloneView para la opción de team drive.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Google Drive and Internet Archive remotes in RcloneView" class="img-large img-center" />

## Conectar Internet Archive

De vuelta en **Remote Manager**, haz clic en **New Remote** y selecciona **Internet Archive**. Internet Archive usa credenciales de correo electrónico/contraseña (el inicio de sesión de tu cuenta de archive.org) o claves de API compatibles con S3 disponibles en la configuración de tu cuenta en archive.org. Ingresa la Access Key y la Secret Key (claves de API S3 para Internet Archive) en el formulario de configuración y guarda.

Abre el remoto de Internet Archive para verificar la conexión. Tus elementos existentes en archive.org aparecerán como entradas de nivel superior.

## Configurar el trabajo de archivado

Ve a **Jobs** y haz clic en **New Job**. Establece Google Drive como origen — selecciona la carpeta específica que contiene los datos que deseas preservar. Establece el remoto de Internet Archive como destino, especificando el identificador del elemento donde deben llegar los archivos.

En el paso 2 del asistente de trabajos, configura las opciones apropiadas para el archivado:

- Habilita la **verificación de checksum** — la integridad de los datos es crítica para la preservación
- Configura un número moderado de transferencias simultáneas (2–4) para no sobrecargar la canalización de ingesta de Internet Archive
- Habilita **Dry Run** primero para revisar exactamente qué se va a subir

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Google Drive files to Internet Archive" class="img-large img-center" />

## Ejecutar la sincronización de preservación

Después de revisar la salida de Dry Run en la pestaña Log, deshabilita Dry Run y ejecuta el trabajo completo. RcloneView transfiere archivos de Google Drive directamente a Internet Archive. Dependiendo del tamaño de los archivos y de la cola de ingesta del Archive, las subidas grandes pueden tardar — el panel de progreso en tiempo real te mantiene informado.

Para flujos de preservación continuos, crea un trabajo recurrente (se requiere licencia PLUS para la programación) para que los nuevos archivos añadidos a una carpeta de Google Drive se archiven automáticamente según un horario — semanalmente, por ejemplo.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing Google Drive to Internet Archive transfers" class="img-large img-center" />

## Casos de uso

- **Investigadores académicos**: archivan conjuntos de datos y documentos de trabajo al finalizar el proyecto
- **Periodistas**: preservan material fuente y grabaciones de entrevistas de forma permanente
- **Educadores**: archivan contenido de cursos y recursos de aprendizaje digital
- **Organizaciones sin fines de lucro**: preservan solicitudes de subvenciones, registros de donantes e historia institucional

La permanencia de Internet Archive lo distingue de cualquier servicio en la nube comercial — el contenido depositado allí está diseñado para perdurar más allá de organizaciones individuales o planes de suscripción.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Conecta Google Drive mediante OAuth en **Remote Manager**.
3. Conecta Internet Archive usando tus credenciales de API S3 desde la configuración de tu cuenta en archive.org.
4. Crea un trabajo de sincronización de Google Drive a Internet Archive; ejecuta primero Dry Run y luego el archivado completo.

RcloneView proporciona a archivistas e investigadores un flujo de trabajo confiable y auditable para depositar contenido de Google Drive en el registro permanente.

---

**Guías relacionadas:**

- [Migración entre nubes con RcloneView](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)
- [Migraciones entre nubes verificadas con checksum con RcloneView](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)
- [Automatiza copias de seguridad diarias en la nube con RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
