---
slug: fix-icloud-photos-sync-errors-rcloneview
title: "Solucionar errores de sincronización de iCloud Fotos — Cómo resolverlos con RcloneView"
authors:
  - tayson
description: "Solucione errores de sincronización de iCloud Fotos en RcloneView, desde fallos de autenticación de la biblioteca hasta listados lentos, y logre que sus copias de seguridad de fotos funcionen de forma fiable."
keywords:
  - errores de sincronización de iCloud Fotos
  - solucionar iCloud Fotos RcloneView
  - fallo de autenticación de iCloud Fotos
  - solución de problemas RcloneView iCloud Fotos
  - problemas de copia de seguridad de iCloud Fotos
  - error de conexión de iCloud Fotos
  - solución de sincronización de Apple Fotos
  - listado lento de iCloud Fotos
tags:
  - RcloneView
  - troubleshooting
  - tips
  - macos
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Solucionar errores de sincronización de iCloud Fotos — Cómo resolverlos con RcloneView

> iCloud Fotos se configura como un tipo de remoto independiente de iCloud Drive, y su estructura basada en bibliotecas provoca un conjunto distinto de problemas de sincronización. Así se resuelven los más comunes en RcloneView.

rclone gestiona iCloud Fotos como su propio paquete de remoto dedicado, separado de iCloud Drive, porque Apple expone las bibliotecas de fotos mediante una API diferente a la del almacenamiento de archivos general. Esa separación implica que los errores que encuentre —y sus soluciones— difieren de una configuración estándar de iCloud Drive. Esta guía cubre los problemas de autenticación, listado y sincronización específicos de iCloud Fotos al trabajar en RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Errores de autenticación al añadir el remoto

Al crear un nuevo remoto de iCloud Fotos mediante **Remote tab → New Remote**, RcloneView solicita el correo electrónico y la contraseña de su Apple ID, y después un código de autenticación de dos factores si su cuenta tiene 2FA habilitado (algo que Apple exige ahora a la gran mayoría de las cuentas). Si el remoto no logra autenticarse, primero verifique que el correo de la Apple ID no tenga errores tipográficos —esta es la causa más común—. Si su cuenta requiere una contraseña específica de aplicación debido a una configuración de seguridad reforzada, genere una en appleid.apple.com y úsela en lugar de su contraseña habitual cuando se le solicite.

<img src="/support/images/en/blog/new-remote.png" alt="Configuración de un remoto de iCloud Fotos en RcloneView" class="img-large img-center" />

La expiración de la sesión es otra causa frecuente de fallos de autenticación específicos de iCloud Fotos, ya que las sesiones de la biblioteca de fotos de Apple tienden a expirar más rápido que las sesiones de iCloud Drive. Si un remoto que antes funcionaba correctamente empieza de repente a arrojar errores de autenticación, elimine y vuelva a añadir el remoto desde Remote Manager en lugar de intentar reparar la configuración existente.

## Álbumes ausentes o listados de fotos incompletos

Dado que iCloud Fotos organiza el contenido en álbumes, álbumes compartidos y álbumes inteligentes en lugar de un árbol de carpetas plano, algunas estructuras de carpetas pueden no aparecer como se espera al explorar el remoto en el panel Explorer. Si un álbum parece haber desaparecido por completo, actualice el panel con F5 o **Reload** desde el menú contextual —los listados de iCloud Fotos pueden ir por detrás de cambios recientes realizados desde un iPhone o iPad—. En bibliotecas muy grandes, los originales de alta resolución almacenados únicamente en iCloud (aún no guardados en caché en un dispositivo) también pueden ralentizar notablemente las respuestas de listado.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Recarga del listado de un remoto de iCloud Fotos en RcloneView" class="img-large img-center" />

## Transferencias lentas o interrumpidas durante la copia de seguridad

Al hacer una copia de seguridad de una biblioteca de iCloud Fotos a otra nube o a una unidad local, las transferencias pueden parecer interrumpidas en bibliotecas grandes porque cada solicitud de foto pasa individualmente por los servidores de Apple en lugar de hacerlo en bloque. Reducir **Number of file transfers** y **Number of equality checkers** en el paso Advanced Settings del trabajo de sincronización disminuye la frecuencia con la que RcloneView consulta la API de iCloud Fotos, lo que en la práctica produce transferencias más estables —aunque algo más lentas— que dejar ambos ajustes en sus valores predeterminados para este tipo de remoto en particular.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoreo de una transferencia de copia de seguridad de iCloud Fotos en RcloneView" class="img-large img-center" />

RcloneView monta y sincroniza más de 90 proveedores desde una sola ventana en Windows, macOS y Linux, de modo que, una vez estable el remoto de iCloud Fotos, hacer una copia de seguridad en cualquier otra nube compatible usa el mismo flujo de sincronización que con cualquier otro proveedor.

## Primeros pasos

1. **Descargue RcloneView** desde [rcloneview.com](https://rcloneview.com/src/download.html).
2. Vuelva a verificar el correo de su Apple ID y genere una contraseña específica de aplicación si tiene habilitados 2FA o una configuración de seguridad reforzada.
3. Recargue el panel del remoto si los álbumes parecen faltar, en lugar de asumir una pérdida de datos.
4. Reduzca la concurrencia de transferencias de archivos y verificadores en bibliotecas grandes para evitar transferencias interrumpidas.

Con la autenticación y la concurrencia bien ajustadas, iCloud Fotos se convierte en otra fuente fiable más dentro de su rutina habitual de copias de seguridad de RcloneView.

---

**Guías relacionadas:**

- [Administrar iCloud Fotos — Sincronizar y respaldar archivos con RcloneView](https://rcloneview.com/support/blog/manage-icloud-photos-cloud-sync-rcloneview)
- [Solucionar errores de sincronización de iCloud Drive — Cómo resolverlos con RcloneView](https://rcloneview.com/support/blog/fix-icloud-drive-sync-errors-rcloneview)
- [RcloneView en macOS Sonoma — Sincronización y copia de seguridad de almacenamiento en la nube](https://rcloneview.com/support/blog/rcloneview-macos-sonoma-cloud-sync)

<CloudSupportGrid />
