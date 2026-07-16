---
slug: job-export-import-portable-workflow-rcloneview
title: "Exportación e importación de trabajos: flujos de sincronización portátiles en RcloneView"
authors:
  - tayson
description: "Aprende a exportar e importar trabajos de sincronización en RcloneView para compartir flujos de trabajo entre equipos, estandarizar configuraciones de equipo y recuperarte tras una migración de sistema."
keywords:
  - RcloneView job export
  - sync job import
  - portable sync workflow
  - job manager export
  - team sync configuration
  - backup sync jobs
  - migrate RcloneView jobs
  - job portability
tags:
  - RcloneView
  - feature
  - job-management
  - automation
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Exportación e importación de trabajos: flujos de sincronización portátiles en RcloneView

> RcloneView te permite exportar todos tus trabajos de sincronización a un archivo JSON e importarlos en cualquier otra máquina, haciendo que tus flujos de trabajo sean verdaderamente portátiles y las configuraciones de tu equipo consistentes.

Configurar trabajos de sincronización complejos lleva tiempo: elegir los remotos de origen y destino correctos, configurar filtros, establecer límites de ancho de banda y ajustar opciones para cada trabajo. Lo último que quieres es repetir ese trabajo cuando actualices a un nuevo ordenador, agregues una segunda estación de trabajo o incorpores a un nuevo miembro al equipo. La función de exportación e importación de trabajos de RcloneView resuelve esto capturando toda la configuración de tu trabajo en un archivo JSON portátil que se puede cargar en cualquier instalación de RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Exportar tus trabajos de sincronización

Para exportar tus trabajos, abre el **Job Manager** en RcloneView y busca la opción **Export** en la barra de herramientas o el menú contextual. RcloneView exporta todos los trabajos de sincronización configurados —incluyendo sus rutas de origen/destino, reglas de filtro, flags de rclone e información de programación— en un único archivo JSON. Tú eliges dónde guardar este archivo.

Es una buena práctica exportar tus trabajos regularmente como parte de tu estrategia general de copia de seguridad. Guarda el JSON exportado en una carpeta en la nube (por ejemplo, tu bucket de copia de seguridad de Google Drive o Backblaze B2) para que siempre esté accesible sin importar lo que le suceda a tu máquina local. Piénsalo como una copia de seguridad de tu configuración de copia de seguridad.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Job Manager in RcloneView showing export option" class="img-large img-center" />

## Importar trabajos en una nueva máquina

En la máquina de destino, instala RcloneView desde [rcloneview.com](https://rcloneview.com/src/download.html) y configura los remotos en la nube necesarios (los mismos nombres de remoto deben existir para que los trabajos importados funcionen correctamente). Luego abre el **Job Manager** y usa la función **Import** para cargar tu archivo JSON exportado. Todos tus trabajos de sincronización aparecen de inmediato, listos para ejecutarse.

Este flujo de trabajo es especialmente valioso después de una migración de ordenador. En lugar de recrear manualmente una docena de trabajos de sincronización, la importación toma segundos. El mismo proceso funciona para la estandarización de equipos: un líder de equipo crea y exporta una configuración de trabajo canónica, y luego distribuye el archivo JSON a todos los miembros del equipo, quienes lo importan en sus propias instalaciones de RcloneView.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Imported jobs visible in RcloneView Job Manager" class="img-large img-center" />

## Estandarización de equipos y recuperación ante desastres

Para equipos que gestionan múltiples destinos en la nube, la consistencia en la configuración de los trabajos de sincronización es fundamental. Si cada miembro del equipo configura sus propios trabajos manualmente, las discrepancias en las reglas de filtro o las rutas de destino pueden provocar archivos perdidos o sobrescrituras no deseadas. Al mantener un archivo maestro de exportación de trabajos e importarlo en todas las máquinas del equipo, garantizas que todos ejecuten flujos de trabajo idénticos.

La función de exportación/importación también sirve como un mecanismo ligero de recuperación ante desastres para tu configuración de sincronización. Si es necesario reinstalar RcloneView o se reemplaza una máquina, restaurar todo tu flujo de trabajo es un proceso de dos pasos: importar la configuración de remotos de rclone e importar el JSON del trabajo. La exportación/importación de RcloneView está disponible en el nivel gratuito; no se requiere una licencia PLUS para esta función.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Standardized sync jobs shared across team machines in RcloneView" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Configura tus trabajos de sincronización en el **Job Manager** de tu máquina principal.
3. Usa **Export** en el Job Manager para guardar todos los trabajos en un archivo JSON.
4. Guarda el archivo de exportación en una ubicación de copia de seguridad en la nube para mayor seguridad.
5. En una nueva máquina, instala RcloneView, configura nombres de remoto coincidentes e **Import** el JSON para restaurar todos los trabajos.

La exportación e importación de trabajos convierte a RcloneView en una plataforma de sincronización genuinamente portátil, una en la que la inversión en tu flujo de trabajo nunca está atada a una sola máquina.

---

**Guías relacionadas:**

- [Automatiza copias de seguridad diarias en la nube con RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [Copia de seguridad y migración de la configuración de Rclone con RcloneView](https://rcloneview.com/support/blog/backup-migrate-rclone-config-rcloneview)
- [Operaciones por lotes en RcloneView](https://rcloneview.com/support/blog/batch-operations-rcloneview)

<CloudSupportGrid />
