---
slug: manage-box-business-cloud-sync-backup-rcloneview
title: "Gestionar Box for Business — Sincronización y copia de seguridad empresarial en la nube con RcloneView"
authors:
  - casey
description: "Configura Box for Business en RcloneView para flujos de trabajo empresariales de sincronización, copia de seguridad y montaje en tu cuenta de Box administrada por el administrador."
keywords:
  - Box for Business
  - gestionar Box for Business
  - sincronización empresarial en la nube de Box
  - copia de seguridad empresarial de Box
  - RcloneView Box
  - box_sub_type enterprise
  - sincronización de almacenamiento en la nube empresarial
  - herramienta de copia de seguridad de cuenta Box
tags:
  - RcloneView
  - box
  - business
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gestionar Box for Business — Sincronización y copia de seguridad empresarial en la nube con RcloneView

> Las cuentas de Box for Business necesitan un ajuste adicional antes de que RcloneView pueda ver todo lo que tu administrador ha aprovisionado — así se configura correctamente.

Un remoto de Box estándar funciona bien para una cuenta personal, pero una cuenta de Box for Business (empresarial) estructura las carpetas y los permisos de forma distinta por debajo. Si la conectas de la misma manera que una cuenta personal de Box, parte del contenido gestionado a nivel empresarial puede faltar en el explorador. RcloneView resuelve esto con un ajuste dedicado `box_sub_type = enterprise` en el remoto, de modo que las carpetas compartidas de tu equipo, el contenido copropiedad y el almacenamiento aprovisionado por el administrador aparezcan correctamente.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configurar un remoto de Box for Business

Comienza creando un nuevo remoto y seleccionando Box como proveedor — el inicio de sesión OAuth basado en navegador funciona igual que para una cuenta personal, así que no hay que aprender un flujo de credenciales aparte. La diferencia llega después de la autenticación: abre la configuración avanzada del remoto y establece `box_sub_type = enterprise`. Esto le indica a rclone (el motor sobre el que se ejecuta RcloneView) que resuelva las estructuras de carpetas a nivel empresarial en lugar de los valores predeterminados de una cuenta personal.

<img src="/support/images/en/blog/new-remote.png" alt="Creando un nuevo remoto de Box for Business en RcloneView" class="img-large img-center" />

Una vez configurado, explora el remoto de la misma manera que cualquier otro — la navegación por árbol de carpetas, las vistas previas en miniatura y las operaciones de archivos (copiar, cortar, renombrar, eliminar) funcionan igual sea la cuenta subyacente personal o de nivel empresarial.

## Sincronizar y hacer copias de seguridad del contenido empresarial de Box

Un escenario habitual para los equipos de TI es hacer copia de seguridad de una cuenta de Box for Business en una ubicación secundaria — un NAS local, otra nube, o almacenamiento de objetos compatible con S3 para archivo en frío. Crea un trabajo de sincronización con Box for Business como origen, establece la dirección en unidireccional "modificar solo el destino" para una copia de seguridad segura y no destructiva, y ejecuta primero una simulación (dry run) para previsualizar exactamente lo que se copiará.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configurando un trabajo de sincronización de copia de seguridad de Box for Business en RcloneView" class="img-large img-center" />

Para los departamentos que gestionan unidades compartidas en decenas de carpetas de Box, filtrar por antigüedad máxima de archivo o por filtros de documentos predefinidos mantiene los trabajos nocturnos centrados solo en lo que ha cambiado, en lugar de volver a escanear toda la cuenta en cada ejecución. RcloneView también sincroniza y compara carpetas — con la licencia FREE — por lo que los flujos de trabajo de copia de seguridad empresarial no requieren una actualización para empezar.

## Programar copias de seguridad empresariales recurrentes

Las exportaciones manuales no escalan para una cuenta empresarial con múltiples colaboradores añadiendo archivos a diario. El Job Manager te permite guardar la sincronización de Box for Business como un trabajo con nombre y luego asociarle una programación al estilo crontab (una función de la licencia PLUS) para que se ejecute automáticamente durante la noche o con la periodicidad que exija tu política de cumplimiento.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Programando un trabajo de sincronización recurrente de Box for Business" class="img-large img-center" />

Cada ejecución queda registrada en Job History con hora de inicio, duración, velocidad de transferencia y número de archivos — evidencia útil cuando una auditoría pregunta cómo se verifican las copias de seguridad.

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Crea un nuevo remoto de Box y completa el inicio de sesión OAuth en el navegador con tus credenciales de Box for Business.
3. Abre la configuración avanzada del remoto y establece `box_sub_type = enterprise` para desbloquear las carpetas a nivel empresarial.
4. Crea un trabajo de sincronización o copia de seguridad que combine Box for Business con cualquier otro remoto compatible o almacenamiento local.

Configurar bien este único ajuste desde el principio ahorra horas de resolución de problemas del tipo "dónde han ido mis archivos" más adelante.

---

**Guías relacionadas:**

- [Gestionar el almacenamiento de Box — Sincroniza y haz copias de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Gestionar Dropbox for Business — Sincroniza y haz copias de seguridad de archivos con RcloneView](https://rcloneview.com/support/blog/manage-dropbox-business-cloud-sync-backup-rcloneview)
- [Migrar de Box a OneDrive — Transfiere archivos con RcloneView](https://rcloneview.com/support/blog/migrate-box-to-onedrive-rcloneview)

<CloudSupportGrid />
