---
slug: migrate-seafile-to-backblaze-b2-rcloneview
title: "Migrar Seafile a Backblaze B2 — Transferir archivos con RcloneView"
authors:
  - steve
description: "Traslada bibliotecas de Seafile autoalojado a Backblaze B2 con RcloneView, una GUI multiplataforma para transferencias fiables de nube a nube."
keywords:
  - migrar seafile a backblaze b2
  - migración seafile backblaze b2
  - copia de seguridad en la nube de seafile
  - migración de autoalojado a la nube
  - backblaze b2 gui
  - rcloneview seafile
  - transferencia de archivos multiplataforma
  - copia de seguridad de bibliotecas seafile
tags:
  - RcloneView
  - seafile
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrar Seafile a Backblaze B2 — Transferir archivos con RcloneView

> Traslada tus bibliotecas de Seafile autoalojado a almacenamiento de objetos Backblaze B2 sin tocar la línea de comandos.

Los equipos que ejecutan Seafile en su propio hardware o en un servidor privado tarde o temprano chocan con un muro: los discos locales se llenan, el mantenimiento del servidor se vuelve una carga, o un proyecto necesita una copia externa para recuperación ante desastres. Backblaze B2 ofrece un destino duradero y económico para esos datos, pero coordinar la transferencia entre una plataforma de sincronización autoalojada y un almacenamiento de objetos no es algo que la mayoría de los gestores de archivos manejen bien. RcloneView se conecta tanto a Seafile como a Backblaze B2 como remotos en la misma ventana, permitiéndote explorar, comparar y mover bibliotecas directamente.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Conectar Seafile y Backblaze B2 como remotos

Seafile se añade a RcloneView como cualquier otro remoto, ofreciéndote una lista navegable de archivos de tus bibliotecas junto con el árbol de carpetas y la barra de ruta de navegación. Backblaze B2 requiere un Application Key ID y una Application Key, introducidos directamente al crear el remoto, sin redirección OAuth ni configuración de CLI aparte. Ambos remotos aparecen como pestañas, y puedes abrir Seafile en un panel y tu bucket de B2 en otro usando una división horizontal o vertical.

A diferencia de las herramientas que solo montan, RcloneView también sincroniza y compara carpetas, disponible en la licencia FREE, así que no dependes únicamente de arrastrar y soltar para una transferencia puntual.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Backblaze B2 remote alongside Seafile in RcloneView" class="img-large img-center" />

Una vez que ambos remotos son visibles, usa arrastrar y soltar entre paneles para bibliotecas más pequeñas, o configura un trabajo Sync para transferencias más grandes y continuas que necesiten reintentos y filtrado.

## Ejecutar la migración como un trabajo Sync

Para una migración completa de biblioteca, configura un trabajo Sync con Seafile como origen y tu bucket de Backblaze B2 como destino. El asistente de 4 pasos te permite establecer el número de transferencias de archivos simultáneas y el número de transferencias multihilo, algo importante al mover miles de archivos pequeños, típico en bibliotecas de documentos compartidos. Activar la comparación por checksum garantiza que los archivos se verifiquen por hash y tamaño en lugar de asumirse correctos tras un solo paso.

Antes de comprometerte con la transferencia, ejecuta un Dry Run para previsualizar exactamente qué archivos se copiarán. Esto es especialmente útil al migrar una biblioteca que ha estado en uso activo durante años, ya que revela archivos obsoletos o inesperadamente grandes antes de que consuman almacenamiento en B2.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a Seafile to Backblaze B2 sync job in RcloneView" class="img-large img-center" />

## Filtrar y verificar la transferencia

Las bibliotecas de Seafile suelen mezclar tipos de documentos, archivos temporales y artefactos del historial de versiones que no querrás duplicar en B2. Los ajustes de filtrado de RcloneView te permiten excluir por tipo de archivo, ruta o antigüedad, por ejemplo omitiendo las carpetas `.git/` en bibliotecas relacionadas con código, o excluyendo cualquier archivo con más de un número determinado de años en una migración de archivo. Los filtros personalizados usan patrones sencillos como `.iso` para excluir por extensión o `/.git/*` para excluir rutas a nivel raíz.

Cuando el trabajo termina, Job History registra el tipo de ejecución, la duración, el tamaño total, la velocidad de transferencia y el número de archivos, dejándote un registro al que puedes recurrir si alguien pregunta si la migración se completó correctamente.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing a completed Seafile to Backblaze B2 migration" class="img-large img-center" />

## Primeros pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Añade tu servidor Seafile como remoto usando las credenciales de tu cuenta.
3. Crea un remoto de Backblaze B2 con tu Application Key ID y tu Application Key.
4. Configura un trabajo Sync de Seafile a B2, ejecuta un Dry Run, y luego ejecútalo y confírmalo en Job History.

Abandonar la infraestructura autoalojada no tiene por qué significar reconstruir tu flujo de trabajo desde cero: con ambos extremos en un mismo explorador, la migración se convierte en un único trabajo rastreable.

---

**Guías relacionadas:**

- [Administrar la sincronización en la nube descentralizada de Storj](https://rcloneview.com/support/blog/manage-storj-decentralized-cloud-sync-rcloneview)
- [Sincronizar Nextcloud con Backblaze B2](https://rcloneview.com/support/blog/sync-nextcloud-to-backblaze-b2-rcloneview)
- [Solucionar errores de sincronización de Seafile](https://rcloneview.com/support/blog/fix-seafile-sync-errors-rcloneview)

<CloudSupportGrid />
