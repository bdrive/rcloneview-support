---
slug: alias-remote-shortcut-paths-rcloneview
title: "Remoto Alias — Crea Accesos Directos a Carpetas Profundas en la Nube con RcloneView"
authors:
  - tayson
description: "Aprende a usar la función de remoto alias de rclone para crear accesos directos a carpetas anidadas en la nube y aumentar la productividad con RcloneView."
keywords:
  - remoto alias
  - alias de rclone
  - accesos directos de carpetas
  - accesos directos a carpetas en la nube
  - acceso a carpetas anidadas
  - configuración de remoto rclone
  - accesos directos de productividad
  - accesos directos de carpetas rclone
  - acceso rápido a carpetas
  - organización en la nube
tags:
  - RcloneView
  - feature
  - guide
  - cloud-storage
  - productivity
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Remoto Alias — Crea Accesos Directos a Carpetas Profundas en la Nube con RcloneView

> ¿Cansado de navegar por incontables carpetas para llegar a tus directorios en la nube más usados? Crea accesos directos con remotos alias y accede a ellos al instante.

Las jerarquías de almacenamiento en la nube pueden volverse difíciles de manejar. Encontrar esa carpeta de proyecto profundamente anidada o el directorio compartido del equipo requiere múltiples clics. La función de remoto alias de rclone resuelve esto creando accesos directos —alias— que apuntan directamente a carpetas específicas.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ¿Qué Es un Remoto Alias?

Un remoto alias es un remoto virtual que apunta a una subcarpeta dentro de otro remoto. En lugar de navegar por `/MyDrive/Projects/Client A/2026/Active Cases/Smith vs. Jones`, creas un alias llamado `smith-vs-jones` que apunta directamente ahí.

![File comparison and selection](/images/en/howto/rcloneview-basic/compare-display-select.png)

En RcloneView, entonces ves `smith-vs-jones` como un remoto independiente en tu lista de remotos, lo que te permite acceder a esa carpeta con un solo clic. Este remoto virtual se comporta exactamente como un remoto real, por lo que puedes copiar, mover y sincronizar archivos usando el alias como punto de partida.

## Crear un Remoto Alias

Configura remotos alias en tu archivo de configuración de rclone especificando el remoto base y la ruta de la subcarpeta. RcloneView muestra todos los remotos alias configurados junto a tus cuentas estándar en la nube.

![Job scheduling interface](/images/en/howto/rcloneview-advanced/create-job-schedule.png)

Por ejemplo, crea un alias que apunte a `/GoogleDrive/Archive/2025` llamado `archive-2025`, y luego accede a él directamente desde el selector de remotos de RcloneView. El alias actúa como un cómodo acceso directo sin duplicar datos ni requerir almacenamiento especial.

## Aumenta la Productividad

Los casos de uso comunes incluyen:

- Carpetas específicas de proyecto para acceso rápido durante el trabajo activo
- Directorios de clientes para bufetes legales o empresas que requieren acceso frecuente
- Carpetas de equipo compartidas a las que múltiples proyectos hacen referencia con regularidad
- Carpetas de archivo o copia de seguridad a las que se accede con menos frecuencia pero que necesitan una recuperación fácil
- Directorios de trabajo temporales para flujos de trabajo o campañas específicas

Cada alias reduce los pasos de navegación y mantiene tu flujo de trabajo enfocado en lo que más importa. Los equipos pueden compartir configuraciones de alias para garantizar que todos accedan a las mismas estructuras de proyecto de manera eficiente.

## Primeros Pasos

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Configura remotos alias en tu configuración de rclone (apúntalos a subdirectorios de uso frecuente).
3. Inicia RcloneView y observa cómo tus nuevos alias aparecen como remotos independientes.
4. Haz clic en cualquier alias para navegar instantáneamente a esa carpeta.

Optimiza tu navegación en la nube y recupera horas de productividad.

---

**Guías Relacionadas:**

- [Remotos Virtuales — Combinar y Unión de Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [Gestión de Remotos — Añadir, Editar, Eliminar](https://rcloneview.com/support/blog/remote-management-add-edit-delete-rcloneview)
- [Remoto Unión — Combina Almacenamiento Gratuito](https://rcloneview.com/support/blog/union-remote-combine-free-storage-rcloneview)

<CloudSupportGrid />
