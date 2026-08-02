---
slug: fix-macos-empty-folders-permissions-rcloneview
title: "Solucionar carpetas de Escritorio y Documentos vacías en macOS — Corrección de permisos con RcloneView"
authors:
  - robin
description: "Soluciona el problema de RcloneView mostrando vacías las carpetas de Escritorio, Documentos o Descargas en macOS. Concede los permisos de privacidad correctos y restaura el acceso completo a los archivos."
keywords:
  - solución carpetas vacías macOS
  - permisos RcloneView macOS
  - carpeta Escritorio vacía macOS
  - carpeta Documentos vacía macOS
  - Acceso total al disco macOS
  - Privacidad y seguridad Archivos y carpetas
  - permisos de sincronización en la nube macOS
  - solución de problemas RcloneView
  - acceso a archivos denegado macOS
  - corregir RcloneView macOS
tags:
  - RcloneView
  - troubleshooting
  - tips
  - macos
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar carpetas de Escritorio y Documentos vacías en macOS — Corrección de permisos con RcloneView

> Si RcloneView muestra la carpeta de Escritorio, Documentos o Descargas de tu Mac como vacía, casi siempre se debe a un permiso de privacidad de macOS que aún no se ha concedido, no a un problema de sincronización.

Desde Catalina, macOS bloquea las carpetas de Escritorio, Documentos y Descargas detrás de permisos de Privacidad y Seguridad, y cualquier aplicación que quiera leerlas —incluido RcloneView cuando examina carpetas locales como origen de sincronización— debe recibir una aprobación explícita. Los usuarios que configuran su primer trabajo de copia de seguridad local a la nube suelen encontrarse con esto: el árbol de carpetas se carga, pero la lista de archivos permanece vacía aunque los archivos estén claramente en el disco. RcloneView se conecta y sincroniza con más de 90 proveedores en la nube, pero este problema en particular reside enteramente en el lado de macOS, y es una solución de dos minutos.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Por qué las carpetas parecen vacías

macOS trata Escritorio, Documentos y Descargas como ubicaciones protegidas. Una aplicación recibe un aviso de permiso la primera vez que intenta leer una de ellas, y si ese aviso se descarta o se deniega —algo fácil de hacer por accidente durante la configuración inicial—, la aplicación recibe silenciosamente una lista vacía en lugar de un error. El panel Explorador de RcloneView mostrará la carpeta en sí, e incluso el recuento de archivos correcto en algunos casos, pero la lista de archivos subyacente permanece en blanco porque el sistema operativo retiene el contenido a nivel del sistema de archivos.

Esto es independiente de cualquier problema con un remoto en la nube. Si tu remoto de Google Drive o Dropbox también parece vacío, se trata de un problema diferente: esta corrección se aplica específicamente a las carpetas locales de macOS usadas como origen o destino de sincronización.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView folder view affected by macOS privacy permissions" class="img-large img-center" />

## Conceder los permisos correctos

Abre Ajustes del Sistema > Privacidad y Seguridad > Archivos y Carpetas, busca RcloneView en la lista y activa los interruptores de Carpeta Escritorio, Carpeta Documentos y Carpeta Descargas de forma individual. Si RcloneView aún no aparece en la lista, activa el aviso de permiso navegando primero a una de esas carpetas dentro de la aplicación —macOS solo muestra las aplicaciones que han intentado el acceso.

Para problemas persistentes, o si sincronizas desde ubicaciones fuera de las tres carpetas protegidas (unidades externas, recursos compartidos de red), conceder Acceso total al disco en el mismo panel de Privacidad y Seguridad es la solución más completa. Esto cubre Escritorio, Documentos, Descargas y cualquier otra ubicación que el sistema operativo pudiera restringir.

<img src="/support/images/en/blog/new-remote.png" alt="Granting macOS Files and Folders permission to RcloneView" class="img-large img-center" />

RcloneView debe reiniciarse por completo —no solo cerrar la ventana— después de cambiar estos permisos. macOS solo reevalúa el acceso a archivos de una aplicación al iniciarla, por lo que es necesario salir por completo y volver a abrirla antes de que el contenido de la carpeta aparezca correctamente.

## Verificar la corrección y crear tu sincronización

Después de reiniciar, navega de nuevo a la carpeta que antes estaba vacía: el recuento de archivos y carpetas ahora debería mostrarse con normalidad en el resumen del pie de página. Antes de ejecutar un trabajo de sincronización real, usa Comparar Carpetas (Folder Compare) contra tu destino en la nube previsto para confirmar que RcloneView ahora puede ver todo lo que debería ver en el lado local, detectando cualquier brecha de acceso restante antes de que se convierta en una copia de seguridad incompleta.

Una vez confirmado que los permisos funcionan, crea tu trabajo de sincronización como de costumbre: carpeta local como origen, remoto en la nube como destino, con la Ejecución de Prueba (Dry Run) activada primero para previsualizar exactamente lo que se transferirá.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Building a local-to-cloud sync job after fixing macOS permissions" class="img-large img-center" />

## Cómo empezar

1. **Descarga RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Abre Ajustes del Sistema > Privacidad y Seguridad > Archivos y Carpetas.
3. Activa el acceso a Escritorio, Documentos y Descargas para RcloneView, o concede Acceso total al disco.
4. Cierra por completo y vuelve a abrir RcloneView, luego verifica que el contenido de las carpetas se cargue correctamente.

Este modelo de permisos existe para proteger los datos del usuario en macOS, y una vez concedido, RcloneView mantiene un acceso completo e ininterrumpido a tus archivos locales para cada trabajo de sincronización futuro.

---

**Guías relacionadas:**

- [Solucionar el error "Demasiados archivos abiertos" de macOS con RcloneView](https://rcloneview.com/support/blog/fix-macos-too-many-open-files-rcloneview)
- [RcloneView en macOS Sequoia — Sincronización de almacenamiento en la nube](https://rcloneview.com/support/blog/rcloneview-macos-sequoia-cloud-sync)
- [Solucionar archivos faltantes en la sincronización en la nube tras la transferencia con RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)

<CloudSupportGrid />
